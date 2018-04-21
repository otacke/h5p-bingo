class Button extends H5P.EventDispatcher {
  /**
   * @constructor
   */
  constructor(id, label) {
    super();
    this.id = id;
    this.buttonLabel = document.createElement('div');
    this.buttonLabel.classList.add('h5p-bingo-button-label');
    this.buttonLabel.innerHTML = label;

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
      this.toggle();
      this.trigger('click', this.id);
    });
  }

  toggle (visible) {
    if (this.isBlocked ()) {
      return;
    }

    visible = (!this.isActivated() || visible) ? true : false;
      this.button.classList.toggle('h5p-button-activated', visible);
      this.buttonLabel.classList.toggle('h5p-button-transparent', visible);
      this.buttonSymbol.classList.toggle('h5p-button-transparent', !visible);
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
}

export default Button;
