/* jslint esversion: 6 */
/* globals H5P */

import Button from './button';

class Board extends H5P.EventDispatcher {
  /**
   * @constructor
   *
   * @param {object} params - Parameters from semantics.
   * @param {string} params.words - List of words/phrases/numbers.
   * @param {number} params.size - Size of the board.
   * @param {boolean} params.shuffleOnRetry - If true, board will be shuffled on retry.
   * @param {function} params.buttonClicked - Callback to check if game is won.
   * @param {boolean} params.fitLabels - If true, force labels to fit into buttons.
   */
  constructor (params) {
    super();

    this.params = params;

    // Set words
    if (!this.params.words) {
      this.words = [];
      for (let i = 1; i <= 3 * this.params.size * this.params.size; i++) {
        this.words.push(i);
      }
    }
    else {
      this.words = this.params.words.split('\n');
    }

    // Initialize buttons
    this.buttons = this.initButtons(this.params.size);
    this.setButtonLabels(this.words);
    this.setJoker(this.params.joker);

    // Setup board
    this.board = document.createElement('div');
    for (let i = 0; i < this.params.size; i++) {
      const row = document.createElement('div');
      row.classList.add('h5p-bingo-column');
      for (let j = 0; j < this.params.size; j++) {
        row.appendChild(this.buttons[i * this.params.size + j].getDOMElement());
      }
      this.board.appendChild(row);
    }

    this.board.classList.add('h5p-bingo-board');

    this.on('resize', () => {
      setTimeout(() => {
        this.resizeButtons({fitLabels: this.params.fitLabels});
      }, 0);
    });
  }

  /**
   * Resize buttons.
   *
   * @param {object} [arguments] Optional arguments.
   * @param {number} [arguments.shrinkFactor] Shrink factor.
   * @param {number} [arguments.fontSizeMin=6] Minimum font size in px.
   * @param {boolean} [arguments.fitLabels] If true, scale labels to fit into buttons
   */
  resizeButtons({shrinkFactor, fontSizeMin=6, fitLabels}={}) {
    /**
     * Scale font to fit longest word into button.
     *
     * @param {object} [arguments] Optional arguments.
     * @param {number} [arguments.shrinkFactor] Shrink factor.
     * @param {number} [arguments.fontSizeMin=6] Minimum font size in px.
     * @param {boolean} [arguments.fitLabels] If true, scale labels to fit into buttons
     */
    const fit = ({shrinkFactor, fontSizeMin=6, fitLabels}={}) => {
      const longestLabelWidth = Math.max(
        ...this.buttons.map(button => button.getLabelWidth())
      );
      const buttonWidth = this.buttons[0].getDOMElement().clientWidth;

      if (longestLabelWidth > buttonWidth) {
        this.resizeButtons({shrinkFactor: shrinkFactor * 1.1, fontSizeMin, fitLabels});
      }
    };

    // Compute style values
    const margin = this.board.clientWidth / 100;
    const border = this.board.clientWidth / 100 / 2.5;
    const buttonWidth = this.board.clientWidth / this.params.size -
      2 * border -
      3 * margin;

    // Set default font size to style's font size before checking for fitting
    if (typeof shrinkFactor === 'undefined') {
      const fontSizeBase = parseInt(window.getComputedStyle(this.board)
        .getPropertyValue('font-size'));
      shrinkFactor = buttonWidth / (fontSizeBase * 10);
    }
    const fontSize = Math.max(buttonWidth / (shrinkFactor * 10), fontSizeMin);

    // Set values
    this.board.style.padding = 2 * margin + 'px';
    this.buttons.forEach(button => {
      const buttonDOM = button.getDOMElement();
      buttonDOM.style.width = buttonWidth + 'px';
      buttonDOM.style.height = buttonDOM.style.width;
      buttonDOM.style.margin = margin + 'px';
      buttonDOM.style.borderWidth = border + 'px';
      buttonDOM.style.fontSize = fontSize + 'px';
      buttonDOM.style.lineHeight = 1.5 * fontSize + 'px';
    });

    // Fit labels into buttons
    if (fitLabels === true && fontSize > fontSizeMin) {
      fit({shrinkFactor, fontSizeMin, fitLabels});
    }
  }

  /**
   * Get the DOM element for the board.
   *
   * @return {object} DOM element.
   */
  getDOMElement () {
    return this.board;
  }

  /**
   * Create a set of buttons.
   *
   * @param {number} [size=5] - Size of the bingo board.
   * @return {object[]} Array as board.
   */
  initButtons (size=5) {
    const buttons = [];
    for (let i = 0; i < size * size; i++) {
      const button = new Button(i);
      button.on('click', () => {
        this.params.buttonClicked();
      });
      buttons.push(button);
    }

    return buttons;
  }

  /**
   * Randomly set button labels from a set of words.
   * If there number of words is smaller than the number of buttons,
   * the words will be used repeatedly.
   *
   * @param {object[]} words - Words to set button labels to.
   */
  setButtonLabels (words) {
    let filler = [];
    this.buttons.forEach(button => {
      if (filler.length === 0) {
        filler = words.slice();
      }
      const label = filler.splice(Math.floor(Math.random() * filler.length), 1);
      button.setLabel(label);
    });
  }

  /**
   * Make center button a joker.
   *
   * @param {boolean} enabled - If true, joker should be set.
   */
  setJoker (enabled) {
    if (enabled !== true || this.params.size % 2 === 0) {
      return;
    }

    // Make center button a joker
    const button = this.buttons[Math.floor(this.params.size/2) * this.params.size + Math.floor(this.params.size/2)];
    button.toggleActivated(true);
    button.toggleBlocked(true);
    button.setLabel('');
  }

  /**
   * Get matches to a button pattern.
   *
   * @param {object[]} patterns - Arrays containing the fields.
   * @return {object[]} All patterns matching the win condition.
   */
  getMatches (patterns) {
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
   *
   * @return {object[]} Label strings.
   */
  getActivatedButtonsLabels() {
    return this.buttons
      .filter(
        button => button.isActivated() && button.getLabel() !== ''
      )
      .map(
        button => button.getLabel()
      );
  }

  /**
   * Block all buttons.
   */
  blockButtons () {
    this.buttons.forEach(button => {
      button.toggleBlocked(true);
    });
  }

  /**
   * Unblock all buttons.
   */
  unblockButtons () {
    this.buttons.forEach(button => {
      button.toggleBlocked(false);
    });
  }

  /**
   * Reset the board.
   */
  reset () {
    this.buttons.forEach(button => {
      button.reset();
    });
    if (this.params.shuffleOnRetry) {
      this.setButtonLabels(this.words);
    }
    this.setJoker(this.params.joker);
  }

  /**
   * Animate patterns.
   *
   * @param {object[]} patterns - Sets of buttons' IDs to be animated.
   * @param {number} [delay=100] - Optional delay between each animation.
   */
  animatePatterns (patterns, delay=100) {
    /**
     * Animate a pattern.
     *
     * @param {object[]} pattern - IDs of buttons to be animated.
     * @param {number} [delay=100] - Optional delay between each animation.
     */
    const animatePattern = (pattern, delay=100) => {
      if (pattern.length > 0) {
        this.buttons[pattern[0]].animate();
        setTimeout(() => {
          animatePattern(pattern.slice(1));
        }, delay);
      }
    };

    patterns.forEach(pattern => {
      animatePattern(pattern, delay);
    });
  }
}

export default Board;
