/** Class representing a button on a board */
class Button extends H5P.EventDispatcher {
  /**
   * @constructor
   * @param {number} id Button's ID.
   * @param {string} imagePath Path to image URL.
   * @param {object} [options={}] Options.
   * @param {number} [options.mode=words] Mode, numbers or words
   */
  constructor(id, imagePath, options = {}) {
    super();

    options.mode = options.mode || 'words';

    this.id = id;

    // Button label
    this.buttonLabel = document.createElement('div');
    this.buttonLabel.classList.add('h5p-bingo-button-label');

    // Button image
    this.buttonImage = document.createElement('div');
    this.buttonImage.classList.add('h5p-bingo-button-image');
    if (imagePath) {
      this.buttonImage.style.background = `no-repeat center/100% url('${imagePath}')`;
    }
    this.buttonImage.classList.add('h5p-button-transparent');

    // Button
    this.button = document.createElement('div');
    this.button.classList.add('h5p-bingo-button');
    this.button.classList.add(`${options.mode}`);
    this.button.setAttribute('role', 'button');
    this.button.setAttribute('value', id);
    this.button.appendChild(this.buttonLabel);
    this.button.appendChild(this.buttonImage);
    this.button.addEventListener('click', () => {
      if (!this.isBlocked()) {
        this.toggleActivated();
        this.trigger('click', this.id);
      }
    });
  }

  /**
   * Get the button's DOM element.
   * @return {object} Button's DOM element.
   */
  getDOM() {
    return this.button;
  }

  /**
   * Toggle class, workaround for IE11 (doesn't support classList.toggle fully).
   * @param {object} classList ClassList.
   * @param {string} token Token.
   * @param {boolean} [force] Override.
   */
  toggle(classList, token, force) {
    if (force === undefined) {
      force = !classList.contains(token);
    }

    if (force === true) {
      classList.add(token);
    }
    else {
      classList.remove(token);
    }
  }

  /**
   * Toggle button's blocked state.
   * @param {boolean} [blocked] - Optional override.
   */
  toggleBlocked(blocked) {
    blocked = (!this.isBlocked() || blocked) ? true : false;
    this.toggle(this.button.classList, 'h5p-button-blocked', blocked);
  }

  /**
   * Determine if button is blocked.
   * @return {boolean} True, if button is activated, else false.
   */
  isBlocked() {
    return this.button.classList.contains('h5p-button-blocked');
  }

  /**
   * Toggle button's activated state.
   * @param {boolean} [activated] - Optional override.
   */
  toggleActivated(activated) {
    if (this.isBlocked ()) {
      return;
    }
    this.toggle(this.button.classList, 'h5p-button-activated', activated);
  }

  /**
   * Determine if button is activated.
   * @return {boolean} True, if button is activated, else false.
   */
  isActivated() {
    return this.button.classList.contains('h5p-button-activated');
  }

  /**
   * Toggle button's flipped state.
   * @param {boolean} [blocked] - Optional override.
   */
  toggleFlipped(flipped) {
    if (this.isBlocked ()) {
      return;
    }
    this.toggle(this.buttonLabel.classList, 'h5p-button-transparent', flipped);
    this.toggle(this.buttonImage.classList, 'h5p-button-transparent', !flipped);
  }

  /**
   * Determine if button is flipped.
   * @return {boolean} True, if button is flipped, else false.
   */
  isFlipped() {
    return this.button.classList.contains('h5p-button-flipped');
  }

  /**
   * Toggle button's bingo state.
   * @param {boolean} [bingo] - Optional override.
   */
  toggleBingo(bingo) {
    this.toggle(this.button.classList, 'h5p-button-bingo', bingo);
  }

  /**
   * Determine if there was a bingo..
   * @return {boolean} True, if there was a bingo.
   */
  isBingo() {
    return this.button.classList.contains('h5p-button-bingo');
  }

  /**
   * Set button label.
   * @param {string} label Button label.
   */
  setLabel(label) {
    this.buttonLabel.innerHTML = label;
  }

  /**
   * Get button label.
   * @return {string} Button label.
   */
  getLabel() {
    return this.buttonLabel.innerHTML;
  }

  /**
   * Get button label width.
   * @return {number} Button label width.
   */
  getLabelWidth() {
    return this.buttonLabel.offsetWidth;
  }

  /**
   * Get button label height.
   * @return {number} Button label height.
   */
  getLabelHeight() {
    return this.buttonLabel.offsetHeight;
  }

  /**
   * Get button width.
   * @return {number} Button width.
   */
  getWidth() {
    const computedStyle = window.getComputedStyle(this.button, null);
    const borderLeft = parseFloat(computedStyle.getPropertyValue('border-left-width'));
    const borderRight = parseFloat(computedStyle.getPropertyValue('border-right-width'));
    return this.button.offsetWidth - borderLeft - borderRight;
  }

  /**
   * Get button offset width.
   * @return {number} Button offset width.
   */
  getOffsetWidth() {
    return this.button.offsetWidth;
  }

  /**
   * Set button maximum height.
   * @param {number} height - Button height.
   */
  setMaxHeight(height) {
    this.button.style.maxHeight = height;
  }

  /**
   * Set button minimum height.
   * @param {number} height - Button height.
   */
  setMinHeight(height) {
    this.button.style.minHeight = height;
  }

  /**
   * Reset button states.
   */
  reset() {
    this.toggleBlocked(false);
    this.toggleActivated(false);
    this.toggleFlipped(false);
    this.toggleBingo(false);
  }

  /**
   * Animate button.
   * @param {number} [args.duration=400] Duration in ms.
   */
  animate(duration = 400) {
    const that = this;

    this.button.classList.add('h5p-button-spinning');
    setTimeout(() => {
      that.button.classList.remove('h5p-button-spinning');
      this.toggleBingo(true);
    }, duration);
  }
}

export default Button;
