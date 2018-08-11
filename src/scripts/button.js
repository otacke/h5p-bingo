/* jslint esversion: 6 */
/* globals H5P */

class Button extends H5P.EventDispatcher {
  /**
   * @constructor
   */
  constructor(id, label) {
    super();
    this.id = id;
    this.buttonLabel = document.createElement('div');
    this.buttonLabel.classList.add('h5p-bingo-button-label');
    if (typeof label !== 'undefined') {
      this.buttonLabel.innerHTML = label;  
    }

    this.buttonSymbol = document.createElement('div');
    this.buttonSymbol.classList.add('h5p-bingo-button-symbol');
    this.buttonSymbol.classList.add('h5p-button-transparent');

    this.button = document.createElement('div');
    this.button.classList.add('h5p-bingo-button');
    this.button.setAttribute('role', 'button');
    this.button.setAttribute('value', id);
    this.button.appendChild(this.buttonLabel);
    this.button.appendChild(this.buttonSymbol);
    this.button.addEventListener('click', () => {
      if (!this.isBlocked()) {
        this.toggleActivated();
        this.trigger('click', this.id);
      }
    });
  }

  toggleBlocked (blocked) {
    blocked = (!this.isBlocked() || blocked) ? true : false;
    this.button.classList.toggle('h5p-button-blocked', blocked);
  }

  toggleActivated (activated) {
    if (this.isBlocked ()) {
      return;
    }
    if (typeof activated === 'undefined') {
      activated = !this.isActivated() ? true : false;
    }
      this.button.classList.toggle('h5p-button-activated', activated);
      this.buttonLabel.classList.toggle('h5p-button-transparent', activated);
      this.buttonSymbol.classList.toggle('h5p-button-transparent', !activated);
  }

  getDOMElement () {
    return this.button;
  }

  isActivated () {
    return this.button.classList.contains('h5p-button-activated');
  }

  isBlocked () {
    return this.button.classList.contains('h5p-button-blocked');
  }

  animate () {
    const that = this;

    this.button.classList.add('h5p-button-spinning');
    setTimeout(function () {
      that.button.classList.remove('h5p-button-spinning');
    }, 300);
  }

  setLabel(label) {
    this.buttonLabel.innerHTML = label;
  }

  getLabel() {
    return this.buttonLabel.innerHTML;
  }

  reset() {
    this.toggleBlocked(false);
    this.toggleActivated(false);
  }
}

export default Button;
