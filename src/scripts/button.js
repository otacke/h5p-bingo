/* jslint esversion: 6 */
/* globals H5P */

class Button extends H5P.EventDispatcher {
  /**
   * @constructor
   *
   * @param {number} id - Button's ID.
   * @param {string} [label] - Button's label.
   */
  constructor (id, label) {
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

  /**
   * Get the button's DOM element.
   *
   * @return {object} Button's DOM element.
   */
  getDOMElement () {
    return this.button;
  }

  /**
   * Toggle button's blocked state.
   *
   * @param {boolean} [blocked] - Optional override.
   */
  toggleBlocked (blocked) {
    blocked = (!this.isBlocked() || blocked) ? true : false;
    this.button.classList.toggle('h5p-button-blocked', blocked);
  }

  /**
   * Determine if button is blocked.
   *
   * @return {boolean} True, if button is activated, else false.
   */
  isBlocked () {
    return this.button.classList.contains('h5p-button-blocked');
  }

  /**
   * Toggle button's activated state.
   *
   * @param {boolean} [blocked] - Optional override.
   */
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

  /**
   * Determine if button is activated.
   *
   * @return {boolean} True, if button is activated, else false.
   */
  isActivated () {
    return this.button.classList.contains('h5p-button-activated');
  }

  /**
   * Set button label.
   *
   * @param {string} label - Button label.
   */
  setLabel (label) {
    this.buttonLabel.innerHTML = label.replace(/\s/g, '<br />');
  }

  /**
   * Get button label.
   *
   * @return {string} Button label.
   */
  getLabel () {
    return this.buttonLabel.innerHTML;
  }

  /**
   * Get button label width.
   *
   * @return {number} Button label width.
   */
  getLabelWidth () {
    return this.buttonLabel.offsetWidth;
  }

  /**
   * Get button label width.
   *
   * @return {number} Button label width.
   */
  getLabelHeight () {
    return this.buttonLabel.offsetHeight;
  }

  /**
   * Get button width.
   *
   * @return {number} Button width.
   */
  getWidth () {
    const computedStyle = window.getComputedStyle(this.button, null);
    const borderLeft = parseFloat(computedStyle.getPropertyValue('border-left-width'));
    const borderRight = parseFloat(computedStyle.getPropertyValue('border-right-width'));
    return this.button.offsetWidth - borderLeft - borderRight;
  }

  /**
   * Set button max Height.
   *
   * @param {number} height - Button height.
   */
  setMaxHeight (height) {
    this.button.style.maxHeight = height;
  }

  /**
   * Reset button states.
   */
  reset () {
    this.toggleBlocked(false);
    this.toggleActivated(false);
  }

  /**
   * Animate button.
   *
   * @param {number} [duration=300] - Duration in ms.
   */
  animate (duration=300) {
    const that = this;

    this.button.classList.add('h5p-button-spinning');
    setTimeout(() => {
      that.button.classList.remove('h5p-button-spinning');
    }, duration);
  }
}

export default Button;
