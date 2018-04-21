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

    this.checkWon = function () {
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
        for (let i = 1; i <= 15 * this.params.size; i++) {
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
            button.getDOMElement().removeChild(button.getDOMElement().firstChild);
            button.getDOMElement().classList.add('h5p-button-activated');
            button.getDOMElement().classList.add('h5p-button-blocked');
          }
        }
        this.board.appendChild(row);
      }
      this.container = $wrapper.get(0);

      this.board.classList.add('h5p-bingo');
      this.container.appendChild(this.board);

      this.trigger('resize');
    };
  }
}
