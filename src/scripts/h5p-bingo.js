import Board from './h5p-bingo-board';
import Util from './h5p-bingo-util';

/** Class representing a bingo game */
export default class Bingo extends H5P.Question {
  /**
   * @constructor
   * @param {object} params Parameters from semantics.
   * @param {number} contentId Content Id.
   * @param {object} contentData Content data.
   */
  constructor(params, contentId, contentData) {
    super('bingo');

    this.params = params || {};
    this.params.behaviour = this.params.behaviour || {};

    /*
     * this.params.behaviour.enableSolutionsButton and this.params.behaviour.enableRetry
     * are used by H5P Question contract
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-8}
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
     */
    this.params.behaviour.enableSolutionsButton = false;
    this.params.behaviour.enableRetry = this.params.behaviour.enableRetry || false;

    this.params.joker = this.params.behaviour.joker || false;
    this.params.size = params.size || 5;

    this.params.visuals = this.params.visuals || {};

    this.contentId = contentId;
    this.contentData = contentData;

    const defaultLanguage = (this.contentData && this.contentData.metadata) ? this.contentData.metadata.defaultLanguage || 'en' : 'en';
    this.languageTag = Util.formatLanguageCode(defaultLanguage);

    /**
     * Build all winning patterns for a Bingo sheet.
     * @param {number} size Sheet size.
     * @return {object[]} Arrays containing patterns.
     */
    this.buildWinningPatterns = (size) => {
      const patterns = [];
      const diagonal1 = [];
      const diagonal2 = [];
      for (let i = 0; i < size; i++) {
        const col = [];
        const row = [];
        for (let j = 0; j < size; j++) {
          col.push(i * size + j);
          row.push(j * size + i);
        }
        patterns.push(col);
        patterns.push(row);

        diagonal1.push(i * (size + 1));
        diagonal2.push((i + 1) * (size - 1));
      }
      patterns.push(diagonal1);
      patterns.push(diagonal2);
      return patterns;
    };

    this.winningPatterns = this.buildWinningPatterns(this.params.size);

    /**
     * Check if game has been won.
     */
    this.checkWon = () => {
      const winners = this.board.getMatches(this.winningPatterns);

      if (winners.length !== 0) {
        this.board.blockButtons();
        this.board.animatePatterns(winners);
        this.bingoState = true;

        // Trigger xAPI statement
        // Removed until "choice" processor of reporting can handle an empty correct responses pattern correctly
        // this.trigger(this.getXAPIAnswerEvent());

        if (this.params.behaviour.enableRetry) {
          this.showButton('try-again');
        }
      }
    };

    /**
     * Register the DOM elements with H5P.Question.
     */
    this.registerDomElements = () => {
      // Set optional media
      var media = this.params.media.type;
      if (media && media.library) {
        var type = media.library.split(' ')[0];

        // Image
        if (type === 'H5P.Image') {
          if (media.params.file) {
            this.setImage(media.params.file.path, {
              disableImageZooming: this.params.media.disableImageZooming,
              alt: media.params.alt,
              title: media.params.title
            });
          }
        }

        // Video
        else if (type === 'H5P.Video') {
          if (media.params.sources) {
            this.setVideo(media);
          }
        }
      }

      // Register optional task introduction text
      if (this.params.taskDescription) {
        this.introduction = document.createElement('div');
        this.introduction.innerHTML = this.params.taskDescription;
        this.setIntroduction(this.introduction);
      }

      // Register content
      this.board = new Board({
        mode: this.params.mode,
        words: this.params.words,
        size: this.params.size,
        shuffleOnRetry: this.params.behaviour.shuffleOnRetry,
        joker: this.params.joker,
        buttonClicked: this.checkWon,
        visuals: this.params.visuals
      }, this.contentId, this.contentData.previousState || []);

      this.setContent(this.board.getDOM());

      // Add buttons
      this.addButtons();

      setTimeout(() => {
        this.board.trigger('resize');
      }, 0);

      // Check after resize slack time because of previous content state
      setTimeout(() => {
        this.checkWon();
      }, 50);

      this.on('resize', () => {
        this.board.trigger('resize');
      });
    };

    /**
     * Add all the buttons that shall be passed to H5P.Question
     */
    this.addButtons = () => {
      // Retry button
      this.addButton('try-again', this.params.tryAgain, () => {
        this.resetTask();
      }, false, {}, {});
    };

    /**
     * Check if some kind of answer was given -- not applicable.
     * @return {boolean} True, if answer was given.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
     */
    this.getAnswerGiven = () => true;

    /**
     * Get latest score -- not applicable.
     * @return {number} Latest score.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
     */
    this.getScore = () => null;

    /**
     * Get maximum possible score -- not applicable.
     * @return {number} Score necessary for mastering.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
     */
    this.getMaxScore = () => null;

    /**
     * Show solution -- not applicable.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
     */
    this.showSolutions = () => undefined;

    /**
     * Reset task.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
     */
    this.resetTask = () => {
      this.bingoState = false;
      this.hideButton('try-again');
      this.board.reset();
    };

    /**
     * Get xAPI data.
     * @return {Object} xAPI statement.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
     */
    // Removed until "choice" processor of reporting can handle an empty correct responses pattern correctly
    // this.getXAPIData = () => ({statement: this.getXAPIAnswerEvent().data.statement});

    /**
     * Build xAPI answer event.
     * @return {H5P.XAPIEvent} XAPI answer event.
     */
    this.getXAPIAnswerEvent = () => {
      const xAPIEvent = this.createBingoXAPIEvent('answered');

      xAPIEvent.setScoredResult(this.getScore(), this.getMaxScore(), this, true, this.hasBingo());
      xAPIEvent.data.statement.result.response = this.board
        .getActivatedButtonsIDs()
        .join('[,]');

      return xAPIEvent;
    };

    /**
     * Create an xAPI event for Bingo.
     * @param {string} verb Short id of the verb we want to trigger.
     * @return {H5P.XAPIEvent} Event template.
     */
    this.createBingoXAPIEvent = (verb) => {
      const xAPIEvent = this.createXAPIEventTemplate(verb);
      Util.extend(
        xAPIEvent.getVerifiedStatementValue(['object', 'definition']),
        this.getxAPIDefinition());
      return xAPIEvent;
    };

    /**
     * Get the xAPI definition for the xAPI object.
     * @return {object} XAPI definition.
     */
    this.getxAPIDefinition = () => {
      const definition = {};
      definition.name = {};
      definition.name[this.languageTag] = this.getTitle();
      definition.description = {};
      definition.description[this.languageTag] = this.getDescription();
      definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
      definition.interactionType = 'choice';
      definition.choices = this.board.getXAPIChoices();
      // There's no right or wrong, but reporting expects a pattern; all correct is better
      definition.correctResponsesPattern = [
        Array.apply(null, {length: this.params.size * this.params.size})
          .map(Number.call, Number)
          .join('[,]')
      ];

      return definition;
    };

    /**
     * Detect winning/completion state.
     * @return {boolean} True, if Bingo.
     */
    this.hasBingo = () => this.bingoState;

    /**
     * Get tasks title.
     * @return {string} Title.
     */
    this.getTitle = () => {
      let raw;
      if (this.contentData && this.contentData.metadata) {
        raw = this.contentData.metadata.title;
      }
      raw = raw || Bingo.DEFAULT_DESCRIPTION;

      return H5P.createTitle(raw);
    };

    /**
     * Get tasks description.
     * @return {string} Description.
     */
    this.getDescription = () => this.params.taskDescription || Bingo.DEFAULT_DESCRIPTION;

    /**
     * Answer call to return the current state.
     *
     * @return {object[]} Current state.
     */
    this.getCurrentState = () => this.board.getCurrentState();
  }
}

/** @constant {string} */
Bingo.DEFAULT_DESCRIPTION = 'Bingo';
