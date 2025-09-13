/** Class for utility functions */
class Util {
  /**
   * Extend an array just like JQuery's extend.
   * @returns {object} Merged objects.
   */
  static extend() {
    for (let i = 1; i < arguments.length; i++) {
      for (let key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          if (
            typeof arguments[0][key] === 'object' &&
            typeof arguments[i][key] === 'object'
          ) {
            this.extend(arguments[0][key], arguments[i][key]);
          }
          else {
            arguments[0][key] = arguments[i][key];
          }
        }
      }
    }
    return arguments[0];
  }

  /**
   * Format language tag (RFC 5646). Assuming "language-coutry". No validation.
   * Cmp. https://tools.ietf.org/html/rfc5646
   * @param {string} languageCode Language tag.
   * @returns {string} Formatted language tag.
   */
  static formatLanguageCode(languageCode) {
    if (typeof languageCode !== 'string') {
      return languageCode;
    }

    /*
     * RFC 5646 states that language tags are case insensitive, but
     * recommendations may be followed to improve human interpretation
     */
    const segments = languageCode.split('-');
    segments[0] = segments[0].toLowerCase(); // ISO 639 recommendation
    if (segments.length > 1) {
      segments[1] = segments[1].toUpperCase(); // ISO 3166-1 recommendation
    }
    languageCode = segments.join('-');

    return languageCode;
  }

  /**
   * Compute display limits.
   * @param {HTMLElement} [container] Container.
   * @returns {object|null} Height and width in px, fallback screen size.
   */
  static computeDisplayLimits(container) {
    container = (typeof container === 'object') ? container : {};

    let topWindow = Util.getTopWindow();

    // iOS doesn't change screen dimensions on rotation
    let screenSize = (Util.isIOS() && Util.getOrientation() === 'landscape') ?
      { height: screen.width, width: screen.height } :
      { height: screen.height, width: screen.width };

    topWindow = topWindow || {
      innerHeight: screenSize.height,
      innerWidth: screenSize.width,
    };

    // Smallest value of viewport and container wins
    return {
      height: Math.min(topWindow.innerHeight, screenSize.height),
      width: Math.min(
        topWindow.innerWidth, screenSize.width, container.offsetWidth ||
        Infinity,
      ),
    };
  }

  /**
   * Detect whether user is running iOS.
   * @returns {boolean} True, if user is running iOS.
   */
  static isIOS() {
  // Modern approach using userAgentData API (when available)
    if (navigator.userAgentData && navigator.userAgentData.platform) {
      return ['iOS', 'iPadOS'].includes(navigator.userAgentData.platform);
    }

    // Fallback to user agent string parsing
    const userAgent = navigator.userAgent.toLowerCase();

    // Check for iOS devices in user agent
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);

    // Check for iPad on iOS 13+ (reports as Mac in user agent)
    const isPadOnIOS13Plus = userAgent.includes('mac') && 'ontouchend' in document;

    return isIOSDevice || isPadOnIOS13Plus;
  }

  /**
   * Get device orientation.
   * @returns {string} 'portrait' or 'landscape'.
   */
  static getOrientation() {
    // Modern approach using Screen Orientation API
    if (screen.orientation && screen.orientation.type) {
      if (screen.orientation.type.includes('portrait')) {
        return 'portrait';
      }
      else if (screen.orientation.type.includes('landscape')) {
        return 'landscape';
      }
    }

    // Fallback: Compare viewport dimensions
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    if (viewportHeight > viewportWidth) {
      return 'portrait';
    }
    else if (viewportWidth > viewportHeight) {
      return 'landscape';
    }

    // Final fallback: assume landscape as default
    return 'landscape';
  }

  /**
   * Get top DOM Window object.
   * @param {Window} [startWindow] Window to start looking from.
   * @returns {Window|null} Top window.
   */
  static getTopWindow(startWindow) {
    let sameOrigin;
    startWindow = startWindow || window;

    // H5P iframe may be on different domain than iframe content
    try {
      sameOrigin = startWindow.parent.location.host === window.location.host;
    }
    catch (error) {
      sameOrigin = null;
    }

    if (!sameOrigin) {
      return null;
    }

    if (startWindow.parent === startWindow || !startWindow.parent) {
      return startWindow;
    }

    return this.getTopWindow(startWindow.parent);
  }
}

export default Util;
