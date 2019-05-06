import Button from './h5p-bingo-button';

/** Class representing a bingo board */
class Board extends H5P.EventDispatcher {
  /**
   * @constructor
   * @param {object} params Parameters from semantics.
   * @param {string} params.words List of words/phrases/numbers.
   * @param {number} params.size Size of the board.
   * @param {boolean} params.shuffleOnRetry If true, board will be shuffled on retry.
   * @param {function} params.buttonClicked Callback to check if game is won.
   * @param {object} params.visuals Visuals parameters.
   * @param {number} contentId ContentId.
   * @param {object[]} [previousState] State of previous session.
   * @param {string} [previousState[].label] Button's label.
   * @param {boolean} [previousState[].flipped] True, if button was flipped, else false.
   */
  constructor(params, contentId, previousState) {
    super();

    this.params = params;
    this.previousState = previousState;

    // Set words
    this.words = this.generateWords(this.previousState);

    // Button image path
    const imagePath = (params.visuals.buttonImage && params.visuals.buttonImage.path) ?
      H5P.getPath(params.visuals.buttonImage.path, contentId) :
      undefined;

    // Initialize buttons
    this.buttons = this.initButtons(this.params.size, imagePath);
    this.setButtonLabels(this.words);

    // Set activated state from previous session
    if (previousState.length > 0) {
      this.buttons.forEach((button, index) => {
        button.toggleActivated(previousState[index].flipped);
      });
    }

    this.setJoker(this.params.joker);

    // Setup board
    this.board = document.createElement('div');
    for (let i = 0; i < this.params.size; i++) {
      const row = document.createElement('div');
      row.classList.add('h5p-bingo-column');
      for (let j = 0; j < this.params.size; j++) {
        row.appendChild(this.buttons[i * this.params.size + j].getDOM());
      }
      this.board.appendChild(row);
    }

    this.board.classList.add('h5p-bingo-board');
    // Global CSS customization should still be possible
    if (this.params.visuals.backgroundColor !== '') {
      this.board.style.background = this.params.visuals.backgroundColor;
    }

    // Base font size to be used if possible
    this.fontSizeBase = parseFloat(window.getComputedStyle(document.body, null)
      .getPropertyValue('font-size'));

    // Resize font sizes and thus board
    this.on('resize', () => {
      setTimeout(() => this.resizeButtons(), 0);
    });
  }

  /**
   * Generate words.
   * @param {object[]} [previousState] State of previous session.
   * @return {object[]} Words.
   */
  generateWords(previousState = []) {
    let words = [];

    // Use previous if available
    if (previousState.length > 0) {
      words = previousState.map(button => button.label);
    }
    else {
      // Use numbers
      if (this.params.mode === 'numbers') {
        for (let i = 1; i <= 3 * this.params.size * this.params.size; i++) {
          words.push(i.toString());
        }
      }
      else {
        // Use words
        if (!this.params.words || this.params.words.trim() === '') {
          words = ['someone', 'forgot', 'to', 'set', 'some', 'words'];
        }
        else {
          words = this.params.words.split('\n');
        }
      }
    }

    return words;
  }

  /**
   * Resize buttons.
   *
   * @param {object} [arguments] Optional arguments.
   * @param {number} [arguments.startFontSize] Shrink factor.
   * @param {number} [arguments.fontSizeMin=-Infinity] Minimum font size in px.
   * @param {number} [arguments.fontSizeMax=Infinity] Maximum font size in px.
   */
  resizeButtons({startFontSize = this.fontSizeBase, fontSizeMin = -Infinity, fontSizeMax = Infinity} = {}) {
    if (this.preventResize === true) {
      return;
    }

    const fontSize = Math.min(Math.max(startFontSize, fontSizeMin), fontSizeMax);

    // Determine button with widest label as future reference
    if (!this.widestLabelId) {
      this.widestLabelId = this.buttons
        .map(button => button.getLabelWidth())
        // Retrieve index of maximum value
        .reduce((max, cur, index, arr) => cur > arr[max] ? index : max, 0);
    }

    // Determine button with highest label as future reference
    if (!this.highestLabelId) {
      this.highestLabelId = this.buttons
        .map(button => button.getLabelHeight())
        // Retrieve index of maximum value
        .reduce((max, cur, index, arr) => cur > arr[max] ? index : max, 0);
    }

    // Set values
    this.board.style.fontSize = fontSize + 'px';

    const buttonWidth = this.buttons[this.widestLabelId].getWidth();

    // Workaround for IE11 ...
    const buttonOffsetWidth = this.buttons[this.widestLabelId].getOffsetWidth();
    this.buttons.forEach(button => {
      button.setMinHeight(`${buttonOffsetWidth}px`);
    });

    // Fit labels into buttons
    if (fontSize > fontSizeMin) {
      const longestLabelWidth = this.buttons[this.widestLabelId].getLabelWidth();
      const highestLabelHeight = this.buttons[this.highestLabelId].getLabelHeight();

      if (longestLabelWidth > buttonWidth || highestLabelHeight > buttonWidth) {
        this.resizeButtons({startFontSize: startFontSize * 0.9});
      }
    }
  }

  /**
   * Get the DOM element for the board.
   * @return {object} DOM element.
   */
  getDOM() {
    return this.board;
  }

  /**
   * Create a set of buttons.
   * @param {number} [size=5] Size of the bingo board.
   * @param {string} [imagePath] Path to button image.
   * @return {object[]} Array as board.
   */
  initButtons(size = 5, imagePath) {
    const buttons = [];
    for (let i = 0; i < size * size; i++) {
      const button = new Button(i, imagePath, {mode: this.params.mode});
      button.on('click', () => this.params.buttonClicked());
      buttons.push(button);
    }

    return buttons;
  }

  /**
   * Randomly set button labels from a set of words.
   * If there number of words is smaller than the number of buttons,
   * the words will be used repeatedly.
   * @param {object[]} words Words to set button labels to.
   */
  setButtonLabels(words) {
    let filler = [];

    this.buttons.forEach((button, index) => {
      let label;

      // Keep previous state with order or random new one
      if (this.previousState.length > 0) {
        label = this.previousState[index].label;
      }
      else {
        if (filler.length === 0) {
          filler = words.slice();
        }
        label = filler.splice(Math.floor(Math.random() * filler.length), 1)[0];
      }

      button.setLabel(label);
    });
  }

  /**
   * Make center button a joker.
   * @param {boolean} enabled If true, joker should be set.
   */
  setJoker(enabled) {
    if (enabled !== true || this.params.size % 2 === 0) {
      return;
    }

    // Make center button a joker
    const button = this.buttons[Math.floor(this.params.size / 2) * this.params.size +
      Math.floor(this.params.size / 2)];
    button.toggleFlipped(true);
    button.toggleBingo(true);
    button.toggleActivated(true);
    button.toggleBlocked(true);
    button.setLabel('');
  }

  /**
   * Get matches to a button pattern.
   * @param {object[]} patterns Arrays containing the fields.
   * @return {object[]} All patterns matching the win condition.
   */
  getMatches(patterns) {
    const matches = [];
    patterns.forEach(pattern => {
      if (pattern.every(field => this.buttons[field].isActivated())) {
        matches.push(pattern);
      }
    });

    return matches;
  }

  /**
   * Get labels from all buttons that are activated.
   * @return {object[]} Label strings.
   */
  getActivatedButtonsLabels() {
    return this.buttons
      .filter(button => button.isActivated() && button.getLabel() !== '')
      .map(button => button.getLabel());
  }

  /**
   * Get IDs from all buttons that are activated.
   * @return {object[]} IDs.
   */
  getActivatedButtonsIDs() {
    return this.buttons
      .filter(button => button.isActivated())
      .map(button => button.id);
  }

  /**
   * Get possible choices for this board.
   * @return {object} XApi choices object.
   */
  getXAPIChoices() {
    return this.buttons.map((button, index) => ({
      'id': index,
      'description': {
        'en-US': button.getLabel()
      }
    }));
  }

  /**
   * Block all buttons.
   */
  blockButtons() {
    this.buttons.forEach(button => button.toggleBlocked(true));
  }

  /**
   * Unblock all buttons.
   */
  unblockButtons() {
    this.buttons.forEach(button => button.toggleBlocked(false));
  }

  /**
   * Reset the board.
   */
  reset() {
    this.buttons.forEach(button => button.reset());

    if (this.params.shuffleOnRetry) {
      this.previousState = [];
      this.words = this.generateWords();
      this.setButtonLabels(this.words);
    }

    this.setJoker(this.params.joker);

    delete this.widestLabelId;
    delete this.highestLabelId;

    this.trigger('resize');
  }

  /**
   * Animate patterns.
   * @param {object[]} patterns Sets of buttons' IDs to be animated.
   * @param {number} [delay=100] Optional delay between each animation.
   */
  animatePatterns(patterns, delay = 100) {
    /**
     * Animate a pattern.
     * @param {object[]} pattern IDs of buttons to be animated.
     * @param {number} [delay=100] Optional delay between each animation.
     */
    const animatePattern = (pattern, delay = 100) => {
      // Stop resizing when animation plays
      this.preventResize = true;

      if (pattern.length > 0) {
        this.buttons[pattern[0]].animate();
        setTimeout(() => animatePattern(pattern.slice(1)), delay);
      }
      else {
        setTimeout(() => this.preventResize = false);
      }
    };

    patterns.forEach(pattern => animatePattern(pattern, delay));
  }

  /**
   * Answer call to return the current state.
   *
   * @return {object[]} Current state.
   */
  getCurrentState() {
    return this.buttons.map(button => ({
      label: button.getLabel(),
      flipped: button.isActivated()
    }));
  }

}

export default Board;
