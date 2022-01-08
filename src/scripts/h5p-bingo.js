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

    this.params = Util.extend({
      size: 5,
      behaviour: {
        enableSolutionsButton: false,
        enableRetry: true,
        shuffleOnRetry: true,
        joker: false,
        heightLimitMode: 'none'
      },
      sound: {
        soundSelected: [],
        soundCompleted: []
      },
      visuals: {
        backgroundColor: ''
      },
      tryAgain: 'Retry',
      a11yTryAgain: 'Retry the task. Reset all responses and start the task over again.',
      a11yMute: 'Mute audio, currently unmuted',
      a11yUnmute: 'Unmute audio, currently muted'
    }, params);

    this.contentId = contentId;
    this.contentData = contentData;

    if (this.params.behaviour.heightLimitMode === 'custom' && !this.params.behaviour.heightLimit) {
      this.params.behaviour.heightLimitMode = 'none';
    }

    const defaultLanguage = (this.contentData && this.contentData.metadata) ? this.contentData.metadata.defaultLanguage || 'en' : 'en';
    this.languageTag = Util.formatLanguageCode(defaultLanguage);

    // Audio samples
    this.audios = {};
    this.registerAudios(this.params.sound);
    this.isMuted = false;

    this.winningPatterns = this.buildWinningPatterns(this.params.size);
  }

  /**
   * Register audio.
   * @param {string} id Id.
   * @param {object} H5P audio parameters.
   */
  registerAudio(id, sound) {
    if (typeof id !== 'string' || !Array.isArray(sound) || !sound.length || typeof sound[0].path !== 'string' || !H5P.SoundJS.initializeDefaultPlugins()) {
      return false;
    }

    H5P.SoundJS.registerSound(H5P.getPath(sound[0].path, this.contentId), id);
    this.audios[id] = { params: { interrupt: H5P.SoundJS.INTERRUPT_ANY } };
  }

  /**
   * Register audios.
   * @param {object} Audio settings.
   */
  registerAudios(sounds) {
    if (typeof sounds !== 'object' || !H5P.SoundJS.initializeDefaultPlugins()) {
      return false; // Sounds already registered or issue with SoundJS
    }

    H5P.SoundJS.alternateExtensions = ['mp3', 'wav'];

    for (let sound in sounds) {
      this.registerAudio(sound, sounds[sound]);
    }
  }

  /**
   * Play audio.
   * @param {string} id Id.
   */
  playAudio(id) {
    if (this.isMuted || typeof id !== 'string' || !this.audios[id]) {
      return;
    }

    this.stopAudios(); // Strange, INTERRUPT_ANY doesn't work
    H5P.SoundJS.play(id, this.audios[id].params);
  }

  /**
   * Stop audios.
   */
  stopAudios() {
    if (Object.keys(this.audios).length) {
      H5P.SoundJS.stop();
    }
  }

  /**
   * Handle toggling sound.
   */
  handleSoundToggled() {
    this.isMuted = !this.isMuted;

    if (this.isMuted) {
      this.stopAudios();
    }
  }

  /**
   * Build all winning patterns for a Bingo sheet.
   * @param {number} size Sheet size.
   * @return {object[]} Arrays containing patterns.
   */
  buildWinningPatterns(size) {
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
  }

  /**
   * Check if game has been won.
   */
  checkWon(params = {}) {
    const winners = this.board.getMatches(this.winningPatterns);

    if (winners.length !== 0) {
      this.board.blockButtons();
      this.board.animatePatterns(winners);

      if (!params.silent) {
        this.playAudio('soundCompleted');
      }

      this.bingoState = true;

      // Trigger xAPI statement
      // Removed until "choice" processor of reporting can handle an empty correct responses pattern correctly
      // this.trigger(this.getXAPIAnswerEvent());

      if (this.params.behaviour.enableRetry) {
        this.showButton('try-again');
      }
    }
    else {
      if (!params.silent) {
        this.playAudio('soundSelected');
      }
    }
  }

  /**
   * Register the DOM elements with H5P.Question.
   */
  registerDomElements() {
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

      // Audio
      else if (media.library.includes('H5P.Audio')) {
        if (media.params.files) {
          // Register task audio
          this.setAudio(media);
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
      joker: this.params.behaviour.joker,
      buttonClicked: () => {
        this.checkWon();
      },
      visuals: this.params.visuals,
      hasSound: Object.keys(this.audios).length > 0,
      onSoundToggled: () => {
        this.handleSoundToggled();
      },
      a11y: {
        mute: this.params.a11yMute,
        unmute: this.params.a11yUnmute
      }
    }, this.contentId, this.contentData.previousState || []);

    this.setContent(this.board.getDOM());

    // Add buttons
    this.addButtons();

    setTimeout(() => {
      this.board.trigger('resize');
    }, 0);

    // Check after resize slack time because of previous content state
    setTimeout(() => {
      this.checkWon({ silent: true });
    }, 50);

    this.on('resize', () => {
      // Limit board height
      if (this.params.behaviour.heightLimitMode === 'auto') {
        const maxBoardWidth = this.computeMaxBoardWidth();
        this.board.setMaximumWidth(`${maxBoardWidth}px`);
      }
      else if (this.params.behaviour.heightLimitMode === 'custom') {
        this.board.setMaximumWidth(`${this.params.behaviour.heightLimit}px`);
      }

      this.board.trigger('resize');
    });
  }

  /**
   * Compute maximum board width.
   * @return {number} Maximum board width in pixels.
   */
  computeMaxBoardWidth() {
    if (!this.board) {
      return null; // Might not be ready yet.
    }

    const h5pContainer = this.board.getDOM().closest('.h5p-container');
    const h5pContent = this.board.getDOM().closest('.h5p-question-content');

    if (!h5pContainer || !h5pContent) {
      return null; // Might not be ready yet.
    }

    // Determine visible display size (best effort only)
    const displayLimits = Util.computeDisplayLimits(h5pContainer);

    const contentStyle = window.getComputedStyle(h5pContent);
    const contentMargin = parseInt(contentStyle.getPropertyValue('margin-left')) + parseInt(contentStyle.getPropertyValue('margin-right'));

    return Math.min(displayLimits.width, displayLimits.height) - contentMargin;
  }

  /**
   * Add all the buttons that shall be passed to H5P.Question
   */
  addButtons() {
    // Retry button
    this.addButton('try-again', this.params.tryAgain, () => {
      this.resetTask();
    }, false, {
      'aria-label': this.params.a11yTryAgain
    }, {});
  }

  /**
   * Check if some kind of answer was given -- not applicable.
   * @return {boolean} True, if answer was given.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
   */
  getAnswerGiven() {
    return true;
  }

  /**
   * Get latest score -- not applicable.
   * @return {number} Latest score.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
   */
  getScore() {
    return null;
  }

  /**
   * Get maximum possible score -- not applicable.
   * @return {number} Score necessary for mastering.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
   */
  getMaxScore() {
    return null;
  }

  /**
   * Show solution -- not applicable.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
   */
  showSolutions() {
  }

  /**
   * Reset task.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
   */
  resetTask() {
    this.stopAudios();
    this.bingoState = false;
    this.hideButton('try-again');
    this.board.reset();
  }

  /**
   * Get xAPI data.
   * @return {Object} xAPI statement.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
   */
  // Removed until "choice" processor of reporting can handle an empty correct responses pattern correctly
  // getXAPIData() {
  //   return ({statement: this.getXAPIAnswerEvent().data.statement});
  // }

  /**
   * Build xAPI answer event.
   * @return {H5P.XAPIEvent} XAPI answer event.
   */
  getXAPIAnswerEvent() {
    const xAPIEvent = this.createBingoXAPIEvent('answered');

    xAPIEvent.setScoredResult(this.getScore(), this.getMaxScore(), this, true, this.hasBingo());
    xAPIEvent.data.statement.result.response = this.board
      .getActivatedButtonsIDs()
      .join('[,]');

    return xAPIEvent;
  }

  /**
   * Create an xAPI event for Bingo.
   * @param {string} verb Short id of the verb we want to trigger.
   * @return {H5P.XAPIEvent} Event template.
   */
  createBingoXAPIEvent(verb) {
    const xAPIEvent = this.createXAPIEventTemplate(verb);
    Util.extend(
      xAPIEvent.getVerifiedStatementValue(['object', 'definition']),
      this.getxAPIDefinition());
    return xAPIEvent;
  }

  /**
   * Get the xAPI definition for the xAPI object.
   * @return {object} XAPI definition.
   */
  getxAPIDefinition() {
    const definition = {};
    definition.name = {};
    definition.name[this.languageTag] = this.getTitle();
    // Fallback for h5p-php-reporting, expects en-US
    definition.name['en-US'] = definition.name[this.languageTag];
    definition.description = {};
    definition.description[this.languageTag] = this.getDescription();
    // Fallback for h5p-php-reporting, expects en-US
    definition.description['en-US'] = definition.description[this.languageTag];
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
  }

  /**
   * Detect winning/completion state.
   * @return {boolean} True, if Bingo.
   */
  hasBingo() {
    return this.bingoState;
  }

  /**
   * Get tasks title.
   * @return {string} Title.
   */
  getTitle() {
    let raw;
    if (this.contentData && this.contentData.metadata) {
      raw = this.contentData.metadata.title;
    }
    raw = raw || Bingo.DEFAULT_DESCRIPTION;

    return H5P.createTitle(raw);
  }

  /**
   * Get tasks description.
   * @return {string} Description.
   */
  getDescription() {
    return this.params.taskDescription || Bingo.DEFAULT_DESCRIPTION;
  }

  /**
   * Answer call to return the current state.
   * @return {object[]} Current state.
   */
  getCurrentState() {
    return this.board.getCurrentState();
  }
}

/** @constant {string} */
Bingo.DEFAULT_DESCRIPTION = 'Bingo';
