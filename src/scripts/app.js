/* jslint esversion: 6 */
/* globals H5P */

import Board from './board';

export default class Bingo extends H5P.Question {
  /**
   * @constructor
   *
   * @param {object} params - Parameters from semantics.
   * @param {string} contentId - Content ID.
   * @param {object} [extras] - Content data (metadata/saves);
   */
  constructor (params, contentId, extras = {}) {
    super('bingo');

    this.params = params || {};
    this.params.behaviour = this.params.behaviour || {};

    /*
     * this.params.behaviour.enableSolutionsButton and this.params.behaviour.enableRetry are used by
     * contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-8} and
     * {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
     */
    this.params.behaviour.enableSolutionsButton = false;
    this.params.behaviour.enableRetry = this.params.behaviour.enableRetry || false;

    this.params.joker = this.params.behaviour.joker || false;
    this.params.size = params.size || 5;

    /**
     * Build all winning patterns for a Bingo sheet.
     *
     * @param {number} size - Sheet size.
     * @return {object[]} Arrays containing patterns.
     */
    this.buildWinningPatterns = function (size) {
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
        this.bingo = true;
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
        if (type === 'H5P.Image') {
          if (media.params.file) {
            this.setImage(media.params.file.path, {
              disableImageZooming: this.params.media.disableImageZooming,
              alt: media.params.alt,
              title: media.params.title
            });
          }
        }
        else if (type === 'H5P.Video') {
          if (media.params.sources) {
            this.setVideo(media);
          }
        }
      }

      // Register optional task introduction text
      if (this.params.taskDescription) {
        this.introduction = document.createElement('div');
        this.introduction.setAttribute('tabindex', '0');
        this.introduction.innerHTML = this.params.taskDescription;
        this.setIntroduction(this.introduction);
      }

      // Register content
      this.board = new Board({
        words: this.params.words,
        size: this.params.size,
        shuffleOnRetry: this.params.behaviour.shuffleOnRetry,
        joker: this.params.joker,
        buttonClicked: this.checkWon
      });
      this.setContent(this.board.getDOMElement());

      // Add buttons
      this.addButtons();
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
     *
     * @return {boolean} True, if answer was given.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
     */
    this.getAnswerGiven = () => true;

    /**
     * Get latest score -- not applicable.
     *
     * @return {number} Latest score.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
     */
    this.getScore = () => null;

    /**
     * Get maximum possible score -- not applicable.
     *
     * @return {number} Score necessary for mastering.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
     */
    this.getMaxScore = () => null;

    /**
     * Show solution -- not applicable.
     *
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
     */
    this.showSolutions = () => undefined;

    /**
     * Reset task.
     *
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
     */
    this.resetTask = () => {
      this.bingo = false;
      this.hideButton('try-again');
      this.board.reset();
    };

    /**
     * Get xAPI data.
     *
     * @return {Object} xAPI statement.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
     */
    this.getXAPIData = () => {
      return {
        statement: this.getXAPIAnswerEvent().data.statement
      };
    };

    /**
     * Build xAPI answer event.
     *
     * @return {H5P.XAPIEvent} XAPI answer event.
     */
    this.getXAPIAnswerEvent = () => {
      const xAPIEvent = this.createDictationXAPIEvent('answered');

      xAPIEvent.setScoredResult(this.getScore(), this.getMaxScore(), this, true, this.hasBingo());
      // TODO: Add all activated buttons here
      xAPIEvent.data.statement.result.response = this.buttons
        .filter(button => button.isActivated())
        .map(button => button.getLabel())
        .join('[,]');

      return xAPIEvent;
    };

    /**
     * Detect winning/completion state.
     *
     * @return {boolean} True, if Bingo.
     */
    this.hasBingo = () => this.bingo;
  }
}
