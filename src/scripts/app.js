/* jslint esversion: 6 */
/* globals: H5P */

import Button from "../scripts/button";

export default class Bingo extends H5P.EventDispatcher {
  /**
   * @constructor
   *
   * @param {object} params - Parameters from semantics.
   * @param {string} contentId - Content ID.
   * @param {object} extras - Content data (metadata/saves);
   */
  constructor (params, contentId, extras = {}) {
    super();
    this.params = params;

    /*
     * this.params.behaviour.enableSolutionsButton and this.params.behaviour.enableRetry are used by
     * contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-8} and
     * {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
     */
    this.params.behaviour.enableSolutionsButton = false;
    this.params.behaviour.enableRetry = true;

    this.params.joker = this.params.joker || false;
    this.params.size = params.size || 5;

    /**
     * Create a new board.
     *
     * @param {number} [size] - Size of the bingo board.
     * @param {words[]} [words] - Words for the board.
     * @return {object[]} Array as board.
     */
    this.getNewButtons = function (words = ['Doh!'], size = 5) {
      let filler = words.slice();

      const buttons = [];
      for (let i = 0; i < size * size; i++) {
        const label = filler.splice(Math.floor(Math.random() * filler.length), 1);
        const button = new Button(i, label, this);
        button.on('click', () => {
          this.checkWon();
        });
        buttons.push(button);

        if (filler.length === 0) {
          filler = words.slice();
        }
      }
      return buttons;
    };

    this.animatePatterns = function (patterns) {
      patterns.forEach(pattern => {
        this.animatePattern(pattern);
      });
    };

    /**
     * Animate a pattern.
     *
     * @param {object[]} pattern - Pattern to be animated.
     */
    this.animatePattern = function (pattern) {
      if (pattern.length > 0) {

        this.buttons[pattern[0]].animate();
        setTimeout(() => {
          this.animatePattern(pattern.slice(1));
        }, 100);
      }
    };

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

    /**
     * Check if game has been won.
     */
    this.checkWon = function () {
      const winners = this.getWinners(this.winningPatterns);

      if (winners.length !== 0) {
        this.buttons.forEach(button => {
          button.toggleBlocked(true);
        });
        this.animatePatterns(winners);
        this.bingo = true;
      }
    };

    /**
     * Check patterns for matching the win condition.
     *
     * @param {object[]} patterns - Arrays containing the fields.
     * @return {object[]} All patterns matching the win condition.
     */
    this.getWinners = function (patterns) {
      const winners = [];
      patterns.forEach(pattern => {
        if (pattern.every(field => this.buttons[field].isActivated())) {
          winners.push(pattern);
        }
      });
      return winners;
    };

    /**
     * Attach library to H5P container.
     *
     * @param {jQuery} $wrapper - H5P container.
     */
    this.attach = function ($wrapper) {
      let words;
      if (!this.params.words) {
        words = [];
        for (let i = 1; i <= 3 * this.params.size * this.params.size; i++) {
          words.push(i);
        }
      }
      else {
        words = this.params.words.split('\n');
      }

      this.buttons = this.getNewButtons(words, this.params.size);
      this.board = document.createElement('div');

      for (let i = 0; i < this.params.size; i++) {
        const row = document.createElement('div');
        row.classList.add('h5p-bingo-column');
        for (let j = 0; j < this.params.size; j++) {
          row.appendChild(this.buttons[i * this.params.size + j].getDOMElement());

          if (this.params.joker && (this.params.size % 2 === 1) && (i === Math.floor(this.params.size/2)) && (j === Math.floor(this.params.size/2))) {
            const button = this.buttons[i * this.params.size + j];
            button.toggle(true);
            button.toggleBlocked(true);
          }
        }
        this.board.appendChild(row);
      }
      this.container = $wrapper.get(0);

      this.board.classList.add('h5p-bingo');
      this.container.appendChild(this.board);

      this.trigger('resize');
    };

    this.winningPatterns = this.buildWinningPatterns(this.params.size);

  }

  init() {

  }

  /**
   * Check if some kind of answer was given -- not applicable.
   *
   * @return {boolean} True, if answer was given.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
   */
  getAnswerGiven () {
    return true;
  }

  /**
   * Get latest score -- not applicable.
   *
   * @return {number} Latest score.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
   */
  getScore () {
    return null;
  }

  /**
   * Get maximum possible score -- not applicable.
   *
   * @return {number} Score necessary for mastering.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
   */
  getMaxScore () {
    return null;
  }

  /**
   * Show solution -- not applicable.
   *
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
   */
  showSolutions () {
    return;
  }

  /**
   * Reset task.
   *
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
   */
  resetTask () {
    this.bingo = false;
  }

  /**
   * Get xAPI data.
   *
   * @return {Object} xAPI statement.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
   */
  getXAPIData () {
    return {
      statement: this.getXAPIAnswerEvent().data.statement
    };
  }

  /**
   * Build xAPI answer event.
   *
   * @return {H5P.XAPIEvent} xAPI answer event.
   */
  getXAPIAnswerEvent () {
    const xAPIEvent = this.createDictationXAPIEvent('answered');

    xAPIEvent.setScoredResult(this.getScore(), this.getMaxScore(), this, true, this.hasBingo());
    // TODO: Add all activated buttons here
    xAPIEvent.data.statement.result.response = this.buttons
      .filter(button => button.isActivated())
      .map(button => button.getLabel())
      .join('[,]');

    return xAPIEvent;
  }

  hasBingo () {
    return this.bingo;
  }
}
