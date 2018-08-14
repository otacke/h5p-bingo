/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* jslint esversion: 6 */
/* globals H5P */

var Button = function (_H5P$EventDispatcher) {
  _inherits(Button, _H5P$EventDispatcher);

  /**
   * @constructor
   *
   * @param {number} id - Button's ID.
   * @param {string} [label] - Button's label.
   */
  function Button(id, label) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

    _this.id = id;
    _this.buttonLabel = document.createElement('div');
    _this.buttonLabel.classList.add('h5p-bingo-button-label');
    if (typeof label !== 'undefined') {
      _this.buttonLabel.innerHTML = label;
    }

    _this.buttonSymbol = document.createElement('div');
    _this.buttonSymbol.classList.add('h5p-bingo-button-symbol');
    _this.buttonSymbol.classList.add('h5p-button-transparent');

    _this.button = document.createElement('div');
    _this.button.classList.add('h5p-bingo-button');
    _this.button.setAttribute('role', 'button');
    _this.button.setAttribute('value', id);
    _this.button.appendChild(_this.buttonLabel);
    _this.button.appendChild(_this.buttonSymbol);
    _this.button.addEventListener('click', function () {
      if (!_this.isBlocked()) {
        _this.toggleActivated();
        _this.trigger('click', _this.id);
      }
    });
    return _this;
  }

  /**
   * Get the button's DOM element.
   *
   * @return {object} Button's DOM element.
   */


  _createClass(Button, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.button;
    }

    /**
     * Toggle button's blocked state.
     *
     * @param {boolean} [blocked] - Optional override.
     */

  }, {
    key: 'toggleBlocked',
    value: function toggleBlocked(blocked) {
      blocked = !this.isBlocked() || blocked ? true : false;
      this.button.classList.toggle('h5p-button-blocked', blocked);
    }

    /**
     * Determine if button is blocked.
     *
     * @return {boolean} True, if button is activated, else false.
     */

  }, {
    key: 'isBlocked',
    value: function isBlocked() {
      return this.button.classList.contains('h5p-button-blocked');
    }

    /**
     * Toggle button's activated state.
     *
     * @param {boolean} [blocked] - Optional override.
     */

  }, {
    key: 'toggleActivated',
    value: function toggleActivated(activated) {
      if (this.isBlocked()) {
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

  }, {
    key: 'isActivated',
    value: function isActivated() {
      return this.button.classList.contains('h5p-button-activated');
    }

    /**
     * Set button label.
     *
     * @param {string} label - Button label.
     */

  }, {
    key: 'setLabel',
    value: function setLabel(label) {
      this.buttonLabel.innerHTML = label;
    }

    /**
     * Get button label.
     *
     * @return {string} Button label.
     */

  }, {
    key: 'getLabel',
    value: function getLabel() {
      return this.buttonLabel.innerHTML;
    }

    /**
     * Get button label width.
     *
     * @return {number} Button label width.
     */

  }, {
    key: 'getLabelWidth',
    value: function getLabelWidth() {
      return this.buttonLabel.offsetWidth;
    }

    /**
     * Reset button states.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.toggleBlocked(false);
      this.toggleActivated(false);
    }

    /**
     * Animate button.
     *
     * @param {number} [duration=300] - Duration in ms.
     */

  }, {
    key: 'animate',
    value: function animate() {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;

      var that = this;

      this.button.classList.add('h5p-button-spinning');
      setTimeout(function () {
        that.button.classList.remove('h5p-button-spinning');
      }, duration);
    }
  }]);

  return Button;
}(H5P.EventDispatcher);

exports.default = Button;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _board = __webpack_require__(4);

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jslint esversion: 6 */
/* globals H5P */

// Used for xAPI title and task description
var H5P_BINGO_DEFAULT_DESCRIPTION = 'Bingo';

var Bingo = function (_H5P$Question) {
  _inherits(Bingo, _H5P$Question);

  /**
   * @constructor
   *
   * @param {object} params - Parameters from semantics.
   * @param {string} contentId - Content ID.
   * @param {object} [extras] - Content data (metadata/saves);
   */
  function Bingo(params, contentId) {
    var extras = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Bingo);

    var _this = _possibleConstructorReturn(this, (Bingo.__proto__ || Object.getPrototypeOf(Bingo)).call(this, 'bingo'));

    _this.params = params || {};
    _this.params.behaviour = _this.params.behaviour || {};

    /*
     * this.params.behaviour.enableSolutionsButton and this.params.behaviour.enableRetry are used by
     * contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-8} and
     * {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
     */
    _this.params.behaviour.enableSolutionsButton = false;
    _this.params.behaviour.enableRetry = _this.params.behaviour.enableRetry || false;

    _this.params.joker = _this.params.behaviour.joker || false;
    _this.params.size = params.size || 5;

    /**
     * Build all winning patterns for a Bingo sheet.
     *
     * @param {number} size - Sheet size.
     * @return {object[]} Arrays containing patterns.
     */
    _this.buildWinningPatterns = function (size) {
      var patterns = [];
      var diagonal1 = [];
      var diagonal2 = [];
      for (var i = 0; i < size; i++) {
        var col = [];
        var row = [];
        for (var j = 0; j < size; j++) {
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

    _this.winningPatterns = _this.buildWinningPatterns(_this.params.size);

    /**
     * Check if game has been won.
     */
    _this.checkWon = function () {
      var winners = _this.board.getMatches(_this.winningPatterns);

      if (winners.length !== 0) {
        _this.board.blockButtons();
        _this.board.animatePatterns(winners);
        _this.bingo = true;

        // Trigger xAPI statement
        _this.trigger(_this.getXAPIAnswerEvent());

        if (_this.params.behaviour.enableRetry) {
          _this.showButton('try-again');
        }
      }
    };

    /**
     * Register the DOM elements with H5P.Question.
     */
    _this.registerDomElements = function () {
      // Set optional media
      var media = _this.params.media.type;
      if (media && media.library) {
        var type = media.library.split(' ')[0];
        if (type === 'H5P.Image') {
          if (media.params.file) {
            _this.setImage(media.params.file.path, {
              disableImageZooming: _this.params.media.disableImageZooming,
              alt: media.params.alt,
              title: media.params.title
            });
          }
        } else if (type === 'H5P.Video') {
          if (media.params.sources) {
            _this.setVideo(media);
          }
        }
      }

      // Register optional task introduction text
      if (_this.params.taskDescription) {
        _this.introduction = document.createElement('div');
        _this.introduction.setAttribute('tabindex', '0');
        _this.introduction.innerHTML = _this.params.taskDescription;
        _this.setIntroduction(_this.introduction);
      }

      // Register content
      _this.board = new _board2.default({
        words: _this.params.words,
        size: _this.params.size,
        shuffleOnRetry: _this.params.behaviour.shuffleOnRetry,
        joker: _this.params.joker,
        buttonClicked: _this.checkWon,
        fitLabels: _this.params.behaviour.fitLabels
      });
      _this.setContent(_this.board.getDOMElement());

      // Add buttons
      _this.addButtons();

      setTimeout(function () {
        _this.board.trigger('resize');
      }, 0);

      _this.on('resize', function () {
        _this.board.trigger('resize');
      });
    };

    /**
     * Add all the buttons that shall be passed to H5P.Question
     */
    _this.addButtons = function () {
      // Retry button
      _this.addButton('try-again', _this.params.tryAgain, function () {
        _this.resetTask();
      }, false, {}, {});
    };

    /**
     * Check if some kind of answer was given -- not applicable.
     *
     * @return {boolean} True, if answer was given.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
     */
    _this.getAnswerGiven = function () {
      return true;
    };

    /**
     * Get latest score -- not applicable.
     *
     * @return {number} Latest score.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
     */
    _this.getScore = function () {
      return null;
    };

    /**
     * Get maximum possible score -- not applicable.
     *
     * @return {number} Score necessary for mastering.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
     */
    _this.getMaxScore = function () {
      return null;
    };

    /**
     * Show solution -- not applicable.
     *
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
     */
    _this.showSolutions = function () {
      return undefined;
    };

    /**
     * Reset task.
     *
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
     */
    _this.resetTask = function () {
      _this.bingo = false;
      _this.hideButton('try-again');
      _this.board.reset();
    };

    /**
     * Get xAPI data.
     *
     * @return {Object} xAPI statement.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
     */
    _this.getXAPIData = function () {
      return {
        statement: _this.getXAPIAnswerEvent().data.statement
      };
    };

    /**
     * Build xAPI answer event.
     *
     * @return {H5P.XAPIEvent} XAPI answer event.
     */
    _this.getXAPIAnswerEvent = function () {
      var xAPIEvent = _this.createBingoXAPIEvent('answered');

      xAPIEvent.setScoredResult(_this.getScore(), _this.getMaxScore(), _this, true, _this.hasBingo());
      xAPIEvent.data.statement.result.response = _this.board.getActivatedButtonsLabels().join('[,]');

      return xAPIEvent;
    };

    /**
     * Create an xAPI event for Bingo.
     *
     * @param {string} verb - Short id of the verb we want to trigger.
     * @return {H5P.XAPIEvent} Event template.
     */
    _this.createBingoXAPIEvent = function (verb) {
      var xAPIEvent = _this.createXAPIEventTemplate(verb);
      _this.extend(xAPIEvent.getVerifiedStatementValue(['object', 'definition']), _this.getxAPIDefinition());
      return xAPIEvent;
    };

    /**
     * Get the xAPI definition for the xAPI object.
     *
     * @return {object} XAPI definition.
     */
    _this.getxAPIDefinition = function () {
      var definition = {};
      definition.name = { 'en-US': H5P_BINGO_DEFAULT_DESCRIPTION };
      definition.description = { 'en-US': _this.getTitle() };
      definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
      definition.interactionType = 'other';

      return definition;
    };

    /**
     * Get the xAPI definition for the xAPI object.
     *
     * @return {object} XAPI definition.
     */
    _this.getTitle = function () {
      return _this.params.taskDescription ? _this.params.taskDescription : H5P_BINGO_DEFAULT_DESCRIPTION;
    };

    /**
     * Detect winning/completion state.
     *
     * @return {boolean} True, if Bingo.
     */
    _this.hasBingo = function () {
      return _this.bingo;
    };

    /**
     * Extend an array just like JQuery's extend.
     *
     * @param {object} arguments - Objects to be merged.
     * @return {object} Merged objects.
     */
    _this.extend = function () {
      for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) {
            if (_typeof(arguments[0][key]) === 'object' && _typeof(arguments[i][key]) === 'object') {
              this.extend(arguments[0][key], arguments[i][key]);
            } else {
              arguments[0][key] = arguments[i][key];
            }
          }
        }
      }
      return arguments[0];
    };
    return _this;
  }

  return Bingo;
}(H5P.Question);

exports.default = Bingo;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

var _button = __webpack_require__(0);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load library
H5P = H5P || {};
H5P.Bingo = _app2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(0);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jslint esversion: 6 */
/* globals H5P */

var Board = function (_H5P$EventDispatcher) {
  _inherits(Board, _H5P$EventDispatcher);

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
  function Board(params) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this));

    _this.params = params;

    // Set words
    if (!_this.params.words) {
      _this.words = [];
      for (var i = 1; i <= 3 * _this.params.size * _this.params.size; i++) {
        _this.words.push(i);
      }
    } else {
      _this.words = _this.params.words.split('\n');
    }

    // Initialize buttons
    _this.buttons = _this.initButtons(_this.params.size);
    _this.setButtonLabels(_this.words);
    _this.setJoker(_this.params.joker);

    // Setup board
    _this.board = document.createElement('div');
    for (var _i = 0; _i < _this.params.size; _i++) {
      var row = document.createElement('div');
      row.classList.add('h5p-bingo-column');
      for (var j = 0; j < _this.params.size; j++) {
        row.appendChild(_this.buttons[_i * _this.params.size + j].getDOMElement());
      }
      _this.board.appendChild(row);
    }

    _this.board.classList.add('h5p-bingo-board');

    _this.on('resize', function () {
      setTimeout(function () {
        _this.resizeButtons({ fitLabels: _this.params.fitLabels });
      }, 0);
    });
    return _this;
  }

  /**
   * Resize buttons.
   *
   * @param {object} [arguments] Optional arguments.
   * @param {number} [arguments.shrinkFactor] Shrink factor.
   * @param {number} [arguments.fontSizeMin=6] Minimum font size in px.
   * @param {boolean} [arguments.fitLabels] If true, scale labels to fit into buttons
   */


  _createClass(Board, [{
    key: 'resizeButtons',
    value: function resizeButtons() {
      var _this2 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          shrinkFactor = _ref.shrinkFactor,
          _ref$fontSizeMin = _ref.fontSizeMin,
          fontSizeMin = _ref$fontSizeMin === undefined ? 1 : _ref$fontSizeMin,
          fitLabels = _ref.fitLabels;

      /**
       * Scale font to fit longest word into button.
       *
       * @param {object} [arguments] Optional arguments.
       * @param {number} [arguments.shrinkFactor] Shrink factor.
       * @param {number} [arguments.fontSizeMin=6] Minimum font size in px.
       * @param {boolean} [arguments.fitLabels] If true, scale labels to fit into buttons
       */
      var fit = function fit() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            shrinkFactor = _ref2.shrinkFactor,
            _ref2$fontSizeMin = _ref2.fontSizeMin,
            fontSizeMin = _ref2$fontSizeMin === undefined ? 6 : _ref2$fontSizeMin,
            fitLabels = _ref2.fitLabels;

        var longestLabelWidth = Math.max.apply(Math, _toConsumableArray(_this2.buttons.map(function (button) {
          return button.getLabelWidth();
        })));
        var buttonWidth = _this2.buttons[0].getDOMElement().clientWidth;

        if (longestLabelWidth > buttonWidth) {
          _this2.resizeButtons({ shrinkFactor: shrinkFactor * 1.1, fontSizeMin: fontSizeMin, fitLabels: fitLabels });
        }
      };

      // Compute style values
      var buttonWidth = this.buttons[0].getDOMElement().clientWidth;

      // Set default font size to style's font size before checking for fitting
      if (typeof shrinkFactor === 'undefined') {
        var fontSizeBase = parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'));
        shrinkFactor = buttonWidth / (fontSizeBase * 10);
      }
      var fontSize = Math.max(buttonWidth / (shrinkFactor * 10), fontSizeMin);

      // Set values
      this.board.style.fontSize = fontSize + 'px';
      this.board.style.lineHeight = 1.5 * fontSize + 'px';

      // Fit labels into buttons
      if (fitLabels === true && fontSize > fontSizeMin) {
        fit({ shrinkFactor: shrinkFactor, fontSizeMin: fontSizeMin, fitLabels: fitLabels });
      }
    }

    /**
     * Get the DOM element for the board.
     *
     * @return {object} DOM element.
     */

  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.board;
    }

    /**
     * Create a set of buttons.
     *
     * @param {number} [size=5] - Size of the bingo board.
     * @return {object[]} Array as board.
     */

  }, {
    key: 'initButtons',
    value: function initButtons() {
      var _this3 = this;

      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

      var buttons = [];
      for (var i = 0; i < size * size; i++) {
        var button = new _button2.default(i);
        button.on('click', function () {
          _this3.params.buttonClicked();
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

  }, {
    key: 'setButtonLabels',
    value: function setButtonLabels(words) {
      var filler = [];
      this.buttons.forEach(function (button) {
        if (filler.length === 0) {
          filler = words.slice();
        }
        var label = filler.splice(Math.floor(Math.random() * filler.length), 1);
        button.setLabel(label);
      });
    }

    /**
     * Make center button a joker.
     *
     * @param {boolean} enabled - If true, joker should be set.
     */

  }, {
    key: 'setJoker',
    value: function setJoker(enabled) {
      if (enabled !== true || this.params.size % 2 === 0) {
        return;
      }

      // Make center button a joker
      var button = this.buttons[Math.floor(this.params.size / 2) * this.params.size + Math.floor(this.params.size / 2)];
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

  }, {
    key: 'getMatches',
    value: function getMatches(patterns) {
      var _this4 = this;

      var matches = [];
      patterns.forEach(function (pattern) {
        if (pattern.every(function (field) {
          return _this4.buttons[field].isActivated();
        })) {
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

  }, {
    key: 'getActivatedButtonsLabels',
    value: function getActivatedButtonsLabels() {
      return this.buttons.filter(function (button) {
        return button.isActivated() && button.getLabel() !== '';
      }).map(function (button) {
        return button.getLabel();
      });
    }

    /**
     * Block all buttons.
     */

  }, {
    key: 'blockButtons',
    value: function blockButtons() {
      this.buttons.forEach(function (button) {
        button.toggleBlocked(true);
      });
    }

    /**
     * Unblock all buttons.
     */

  }, {
    key: 'unblockButtons',
    value: function unblockButtons() {
      this.buttons.forEach(function (button) {
        button.toggleBlocked(false);
      });
    }

    /**
     * Reset the board.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.buttons.forEach(function (button) {
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

  }, {
    key: 'animatePatterns',
    value: function animatePatterns(patterns) {
      var _this5 = this;

      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      /**
       * Animate a pattern.
       *
       * @param {object[]} pattern - IDs of buttons to be animated.
       * @param {number} [delay=100] - Optional delay between each animation.
       */
      var animatePattern = function animatePattern(pattern) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        if (pattern.length > 0) {
          _this5.buttons[pattern[0]].animate();
          setTimeout(function () {
            animatePattern(pattern.slice(1));
          }, delay);
        }
      };

      patterns.forEach(function (pattern) {
        animatePattern(pattern, delay);
      });
    }
  }]);

  return Board;
}(H5P.EventDispatcher);

exports.default = Board;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".h5p-bingo .h5p-bingo-board {\n  display: flex;\n  flex-direction: row;\n  font-size: 1em;\n  background: #f22626;\n  padding: 1%;\n}\n\n.h5p-bingo .h5p-bingo-column {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.h5p-bingo .h5p-bingo-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0.1em solid white;\n  border-radius: 0.5em;\n  position: relative;\n  text-align: center;\n  background: white;\n  transition: transform 0.8s;\n  box-shadow: 0px 0px 1.5em 0.2em rgba(0,0,0,0.31);\n  overflow: hidden;\n  width: calc(90% - 0.2em);\n  height: 100%;\n  margin: 5% 0;\n}\n\n.h5p-bingo .h5p-bingo-button:not(.h5p-button-blocked):hover {\n  cursor: pointer;\n  background-color: #efefef;\n}\n\n.h5p-bingo .h5p-bingo-button:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n\n.h5p-bingo .h5p-bingo-button-label {\n  opacity: 1;\n  transition: opacity 0.1s ease 0.2s, display 0.1s ease 0.2s;\n}\n\n.h5p-bingo .h5p-bingo-button-symbol {\n  opacity: 1;\n  width: 100%;\n  height: 100%;\n  background: url(" + __webpack_require__(8) + ") center/80% no-repeat;\n  position: absolute;\n  transition: opacity 0.1s ease 0.2s, display 0.1s ease 0.2s;\n}\n\n.h5p-bingo .h5p-button-activated {\n  -webkit-transform: rotateY(-180deg);\n  -moz-transform: rotateY(-180deg);\n  transform: rotateY(-180deg);\n  -ms-transform: scale(0,1.1);\n}\n\n.h5p-bingo .h5p-button-spinning {\n  -webkit-transform: rotateY(-720deg);\n  -moz-transform: rotateY(-720deg);\n  transform: rotateY(-720deg);\n  -ms-transform: scale(0,1.1);\n}\n\n.h5p-bingo .h5p-button-blocked {\n}\n\n.h5p-bingo .h5p-button-transparent {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIC02NCA2NDAgNjQwIgogICBpZD0ic3ZnMiIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MSByMTM3MjUiCiAgIHNvZGlwb2RpOmRvY25hbWU9InN0YXJiYWRnZS5zdmciCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iL2hvbWUvam9obi9EZXNrdG9wL3Njb3JlX2g1cC5wbmciCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI5LjM1MDAwMDQiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI5LjM1MDAwMDQiCiAgIHdpZHRoPSI2NDAiCiAgIGhlaWdodD0iNjQwIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczEwIj4KICAgIDxzdHlsZQogICAgICAgaWQ9InN0eWxlNDMxMCI+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgaXNvbGF0aW9uOiBpc29sYXRlOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICM1ODliNDI7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogIzhhYzk3YTsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBvcGFjaXR5OiAwLjI7CiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIGZpbGw6ICNmMjYyNjI7CiAgICAgIH0KCiAgICAgIC5jbHMtNiB7CiAgICAgICAgZmlsbDogI2Y3Y2Y1YzsKICAgICAgfQoKICAgICAgLmNscy03IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE4NjEiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA1NiIKICAgICBpZD0ibmFtZWR2aWV3OCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMC40NjA5Mzc1IgogICAgIGlua3NjYXBlOmN4PSItMzM0LjgxMzE5IgogICAgIGlua3NjYXBlOmN5PSIxMzcuMjAzNjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjU5IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgdW5pdHM9InB4IiAvPgogIDxyZWN0CiAgICAgc3R5bGU9Imlzb2xhdGlvbjppc29sYXRlO2ZpbGw6bm9uZSIKICAgICB5PSItMTA1My41ODQ3IgogICAgIHg9IjgwOS40MjM4MyIKICAgICBjbGFzcz0iY2xzLTciCiAgICAgd2lkdGg9IjMxOTQuMzA1MiIKICAgICBoZWlnaHQ9IjE4MDQuMzg5OSIKICAgICBpZD0icmVjdDQzODIiIC8+CiAgPGcKICAgICBpZD0iZzQ2OTgiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4Mi45ODMxLDU2Ljk0NDE2OCkiPgogICAgPGNpcmNsZQogICAgICAgcj0iMzIwIgogICAgICAgY3k9IjE5OS4wNTU4MyIKICAgICAgIGN4PSItODYyLjk4MzA5IgogICAgICAgaWQ9InBhdGg0NjA5LTUiCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmlzb2xhdGU7bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO2ZpbGw6I2YyMjYyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAvPgogICAgPGNpcmNsZQogICAgICAgcj0iMzAwIgogICAgICAgY3k9IjE5OS4wNTU4MyIKICAgICAgIGN4PSItODYyLjk4MzA5IgogICAgICAgaWQ9InBhdGg0NjA5IgogICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjppc29sYXRlO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiNmMjYyNjI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgLz4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny43MDgwMiwtMzczLjEyMjgxKSIKICAgICAgIGlkPSJnNDY3NiI+CiAgICAgIDxnCiAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuNTk3NDkzMjYsMC4yNTE0NDgxNiwwLjI1MTQ0ODE2LC0wLjU5NzQ5MzI2LC0xNDE1LjcwODUsNzA0LjM1ODMzKSIKICAgICAgICAgaWQ9Imc0LTUiCiAgICAgICAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iL29wdC9sYW1wcC9odGRvY3MvZHJ1cGFsL3NpdGVzL2RlZmF1bHQvZmlsZXMvaDVwL2RldmVsb3BtZW50L2g1cC1pbnRlcmFjdGl2ZS12aWRlby9zcmMvZ3VpL3Njb3JlX2g1cF93aGl0ZS5wbmciCiAgICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI5LjM1MDAwMDQiCiAgICAgICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI5LjM1MDAwMDQiCiAgICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246aXNvbGF0ZTttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7ZmlsbDojZjRiZTI0O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgZD0ibSAzOTQuNzA1LDU5MS4zNiAxMy4wMzMsMTU2LjM5MyBjIDMuNzI0LDM5LjA5OCA1MC4yNjksNTcuNzE2IDgwLjA1OCwzMS42NTEgTCA2MDUuMDkxLDY3My4yOCBjIDExLjE3MSwtMTEuMTcxIDI3LjkyNywtMTQuODk1IDQyLjgyMiwtMTEuMTcxIGwgMTUyLjY2OSwzNy4yMzYgYyAzOS4wOTgsOS4zMDkgNzAuNzQ5LC0yOS43ODkgNTMuOTkzLC02Ny4wMjUgTCA3ODkuNDExLDQ4Ny4wOTggYyAtNS41ODUsLTE0Ljg5NSAtNS41ODUsLTMxLjY1MSAzLjcyNCwtNDQuNjg0IGwgODEuOTIsLTEzNS45MTMgYyAyMC40OCwtMzMuNTEzIC03LjQ0NywtNzYuMzM1IC00Ni41NDUsLTcyLjYxMSBsIC0xNTguMjU1LDE4LjYxOCBjIC0xNi43NTYsMS44NjIgLTMxLjY1MSwtMy43MjQgLTQwLjk2LC0xNi43NTYgTCA1MjYuODk1LDExNC43MzQgQyA1MDAuODMsODQuOTQ1IDQ1MC41Niw5Ny45NzggNDQzLjExMywxMzcuMDc2IGwgLTMxLjY1MSwxNTQuNTMxIGMgLTMuNzI0LDE0Ljg5NSAtMTMuMDMzLDI3LjkyNyAtMjcuOTI3LDMzLjUxMyBsIC0xNDcuMDg0LDYxLjQ0IGMgLTM1LjM3NSwxNC44OTUgLTM5LjA5OCw2Ny4wMjUgLTMuNzI0LDg1LjY0NCBMIDM3MC41MDIsNTUwLjQgYyAxMy4wMzMsMTEuMTcxIDIyLjM0MiwyNi4wNjUgMjQuMjA0LDQwLjk2IGwgLTAuMDAxLDAgeiIKICAgICAgICAgICBpZD0icGF0aDYtMyIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2lzb2xhdGlvbjppc29sYXRlO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiNmNGJlMjQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgLz4KICAgICAgPC9nPgogICAgICA8ZwogICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjUwNDU0OTg2LDAuMjEyMzM0MDEsMC4yMTIzMzQwMSwtMC41MDQ1NDk4NiwtMTM0NC45MjgsNjgxLjkzMDM3KSIKICAgICAgICAgaWQ9Imc0LTUtNiIKICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSIvb3B0L2xhbXBwL2h0ZG9jcy9kcnVwYWwvc2l0ZXMvZGVmYXVsdC9maWxlcy9oNXAvZGV2ZWxvcG1lbnQvaDVwLWludGVyYWN0aXZlLXZpZGVvL3NyYy9ndWkvc2NvcmVfaDVwX3doaXRlLnBuZyIKICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjkuMzUwMDAwNCIKICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjkuMzUwMDAwNCIKICAgICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjppc29sYXRlO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiNmN2NmNWM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBkPSJtIDM5NC43MDUsNTkxLjM2IDEzLjAzMywxNTYuMzkzIGMgMy43MjQsMzkuMDk4IDUwLjI2OSw1Ny43MTYgODAuMDU4LDMxLjY1MSBMIDYwNS4wOTEsNjczLjI4IGMgMTEuMTcxLC0xMS4xNzEgMjcuOTI3LC0xNC44OTUgNDIuODIyLC0xMS4xNzEgbCAxNTIuNjY5LDM3LjIzNiBjIDM5LjA5OCw5LjMwOSA3MC43NDksLTI5Ljc4OSA1My45OTMsLTY3LjAyNSBMIDc4OS40MTEsNDg3LjA5OCBjIC01LjU4NSwtMTQuODk1IC01LjU4NSwtMzEuNjUxIDMuNzI0LC00NC42ODQgbCA4MS45MiwtMTM1LjkxMyBjIDIwLjQ4LC0zMy41MTMgLTcuNDQ3LC03Ni4zMzUgLTQ2LjU0NSwtNzIuNjExIGwgLTE1OC4yNTUsMTguNjE4IGMgLTE2Ljc1NiwxLjg2MiAtMzEuNjUxLC0zLjcyNCAtNDAuOTYsLTE2Ljc1NiBMIDUyNi44OTUsMTE0LjczNCBDIDUwMC44Myw4NC45NDUgNDUwLjU2LDk3Ljk3OCA0NDMuMTEzLDEzNy4wNzYgbCAtMzEuNjUxLDE1NC41MzEgYyAtMy43MjQsMTQuODk1IC0xMy4wMzMsMjcuOTI3IC0yNy45MjcsMzMuNTEzIGwgLTE0Ny4wODQsNjEuNDQgYyAtMzUuMzc1LDE0Ljg5NSAtMzkuMDk4LDY3LjAyNSAtMy43MjQsODUuNjQ0IEwgMzcwLjUwMiw1NTAuNCBjIDEzLjAzMywxMS4xNzEgMjIuMzQyLDI2LjA2NSAyNC4yMDQsNDAuOTYgbCAtMC4wMDEsMCB6IgogICAgICAgICAgIGlkPSJwYXRoNi0zLTIiCiAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtpc29sYXRpb246aXNvbGF0ZTttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7ZmlsbDojZjdjZjVjO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIC8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmRmMzUwNWNiYmI2MWYwMWViMGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U2YTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvZGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcmJhZGdlLnN2ZyJdLCJuYW1lcyI6WyJCdXR0b24iLCJpZCIsImxhYmVsIiwiYnV0dG9uTGFiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJidXR0b25TeW1ib2wiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0Jsb2NrZWQiLCJ0b2dnbGVBY3RpdmF0ZWQiLCJ0cmlnZ2VyIiwiYmxvY2tlZCIsInRvZ2dsZSIsImNvbnRhaW5zIiwiYWN0aXZhdGVkIiwiaXNBY3RpdmF0ZWQiLCJvZmZzZXRXaWR0aCIsInRvZ2dsZUJsb2NrZWQiLCJkdXJhdGlvbiIsInRoYXQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiSDVQIiwiRXZlbnREaXNwYXRjaGVyIiwiSDVQX0JJTkdPX0RFRkFVTFRfREVTQ1JJUFRJT04iLCJCaW5nbyIsInBhcmFtcyIsImNvbnRlbnRJZCIsImV4dHJhcyIsImJlaGF2aW91ciIsImVuYWJsZVNvbHV0aW9uc0J1dHRvbiIsImVuYWJsZVJldHJ5Iiwiam9rZXIiLCJzaXplIiwiYnVpbGRXaW5uaW5nUGF0dGVybnMiLCJwYXR0ZXJucyIsImRpYWdvbmFsMSIsImRpYWdvbmFsMiIsImkiLCJjb2wiLCJyb3ciLCJqIiwicHVzaCIsIndpbm5pbmdQYXR0ZXJucyIsImNoZWNrV29uIiwid2lubmVycyIsImJvYXJkIiwiZ2V0TWF0Y2hlcyIsImxlbmd0aCIsImJsb2NrQnV0dG9ucyIsImFuaW1hdGVQYXR0ZXJucyIsImJpbmdvIiwiZ2V0WEFQSUFuc3dlckV2ZW50Iiwic2hvd0J1dHRvbiIsInJlZ2lzdGVyRG9tRWxlbWVudHMiLCJtZWRpYSIsInR5cGUiLCJsaWJyYXJ5Iiwic3BsaXQiLCJmaWxlIiwic2V0SW1hZ2UiLCJwYXRoIiwiZGlzYWJsZUltYWdlWm9vbWluZyIsImFsdCIsInRpdGxlIiwic291cmNlcyIsInNldFZpZGVvIiwidGFza0Rlc2NyaXB0aW9uIiwiaW50cm9kdWN0aW9uIiwic2V0SW50cm9kdWN0aW9uIiwid29yZHMiLCJzaHVmZmxlT25SZXRyeSIsImJ1dHRvbkNsaWNrZWQiLCJmaXRMYWJlbHMiLCJzZXRDb250ZW50IiwiZ2V0RE9NRWxlbWVudCIsImFkZEJ1dHRvbnMiLCJvbiIsImFkZEJ1dHRvbiIsInRyeUFnYWluIiwicmVzZXRUYXNrIiwiZ2V0QW5zd2VyR2l2ZW4iLCJnZXRTY29yZSIsImdldE1heFNjb3JlIiwic2hvd1NvbHV0aW9ucyIsInVuZGVmaW5lZCIsImhpZGVCdXR0b24iLCJyZXNldCIsImdldFhBUElEYXRhIiwic3RhdGVtZW50IiwiZGF0YSIsInhBUElFdmVudCIsImNyZWF0ZUJpbmdvWEFQSUV2ZW50Iiwic2V0U2NvcmVkUmVzdWx0IiwiaGFzQmluZ28iLCJyZXN1bHQiLCJyZXNwb25zZSIsImdldEFjdGl2YXRlZEJ1dHRvbnNMYWJlbHMiLCJqb2luIiwidmVyYiIsImNyZWF0ZVhBUElFdmVudFRlbXBsYXRlIiwiZXh0ZW5kIiwiZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZSIsImdldHhBUElEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImdldFRpdGxlIiwiaW50ZXJhY3Rpb25UeXBlIiwiYXJndW1lbnRzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJRdWVzdGlvbiIsIkJvYXJkIiwiYnV0dG9ucyIsImluaXRCdXR0b25zIiwic2V0QnV0dG9uTGFiZWxzIiwic2V0Sm9rZXIiLCJyZXNpemVCdXR0b25zIiwic2hyaW5rRmFjdG9yIiwiZm9udFNpemVNaW4iLCJmaXQiLCJsb25nZXN0TGFiZWxXaWR0aCIsIk1hdGgiLCJtYXgiLCJtYXAiLCJnZXRMYWJlbFdpZHRoIiwiYnV0dG9uV2lkdGgiLCJjbGllbnRXaWR0aCIsImZvbnRTaXplQmFzZSIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvZHkiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZm9udFNpemUiLCJzdHlsZSIsImxpbmVIZWlnaHQiLCJmaWxsZXIiLCJmb3JFYWNoIiwic2xpY2UiLCJzcGxpY2UiLCJmbG9vciIsInJhbmRvbSIsInNldExhYmVsIiwiZW5hYmxlZCIsIm1hdGNoZXMiLCJwYXR0ZXJuIiwiZXZlcnkiLCJmaWVsZCIsImZpbHRlciIsImdldExhYmVsIiwiZGVsYXkiLCJhbmltYXRlUGF0dGVybiIsImFuaW1hdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhE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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JQQSxxQ0FBcUMsNG9WIiwiZmlsZSI6ImRpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJkZjM1MDVjYmJiNjFmMDFlYjBjIiwiLyoganNsaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFscyBINVAgKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgSDVQLkV2ZW50RGlzcGF0Y2hlciB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gQnV0dG9uJ3MgSUQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGFiZWxdIC0gQnV0dG9uJ3MgbGFiZWwuXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoaWQsIGxhYmVsKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5idXR0b25MYWJlbC5jbGFzc0xpc3QuYWRkKCdoNXAtYmluZ28tYnV0dG9uLWxhYmVsJyk7XG4gICAgaWYgKHR5cGVvZiBsYWJlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuYnV0dG9uTGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgfVxuXG4gICAgdGhpcy5idXR0b25TeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmJ1dHRvblN5bWJvbC5jbGFzc0xpc3QuYWRkKCdoNXAtYmluZ28tYnV0dG9uLXN5bWJvbCcpO1xuICAgIHRoaXMuYnV0dG9uU3ltYm9sLmNsYXNzTGlzdC5hZGQoJ2g1cC1idXR0b24tdHJhbnNwYXJlbnQnKTtcblxuICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnaDVwLWJpbmdvLWJ1dHRvbicpO1xuICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaWQpO1xuICAgIHRoaXMuYnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uTGFiZWwpO1xuICAgIHRoaXMuYnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uU3ltYm9sKTtcbiAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0Jsb2NrZWQoKSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2YXRlZCgpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgdGhpcy5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBidXR0b24ncyBET00gZWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSBCdXR0b24ncyBET00gZWxlbWVudC5cbiAgICovXG4gIGdldERPTUVsZW1lbnQgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgYnV0dG9uJ3MgYmxvY2tlZCBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBbYmxvY2tlZF0gLSBPcHRpb25hbCBvdmVycmlkZS5cbiAgICovXG4gIHRvZ2dsZUJsb2NrZWQgKGJsb2NrZWQpIHtcbiAgICBibG9ja2VkID0gKCF0aGlzLmlzQmxvY2tlZCgpIHx8IGJsb2NrZWQpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2g1cC1idXR0b24tYmxvY2tlZCcsIGJsb2NrZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBidXR0b24gaXMgYmxvY2tlZC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSwgaWYgYnV0dG9uIGlzIGFjdGl2YXRlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIGlzQmxvY2tlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaDVwLWJ1dHRvbi1ibG9ja2VkJyk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGJ1dHRvbidzIGFjdGl2YXRlZCBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBbYmxvY2tlZF0gLSBPcHRpb25hbCBvdmVycmlkZS5cbiAgICovXG4gIHRvZ2dsZUFjdGl2YXRlZCAoYWN0aXZhdGVkKSB7XG4gICAgaWYgKHRoaXMuaXNCbG9ja2VkICgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYWN0aXZhdGVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYWN0aXZhdGVkID0gIXRoaXMuaXNBY3RpdmF0ZWQoKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaDVwLWJ1dHRvbi1hY3RpdmF0ZWQnLCBhY3RpdmF0ZWQpO1xuICAgIHRoaXMuYnV0dG9uTGFiZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaDVwLWJ1dHRvbi10cmFuc3BhcmVudCcsIGFjdGl2YXRlZCk7XG4gICAgdGhpcy5idXR0b25TeW1ib2wuY2xhc3NMaXN0LnRvZ2dsZSgnaDVwLWJ1dHRvbi10cmFuc3BhcmVudCcsICFhY3RpdmF0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBidXR0b24gaXMgYWN0aXZhdGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlLCBpZiBidXR0b24gaXMgYWN0aXZhdGVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgaXNBY3RpdmF0ZWQgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2g1cC1idXR0b24tYWN0aXZhdGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJ1dHRvbiBsYWJlbC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIC0gQnV0dG9uIGxhYmVsLlxuICAgKi9cbiAgc2V0TGFiZWwgKGxhYmVsKSB7XG4gICAgdGhpcy5idXR0b25MYWJlbC5pbm5lckhUTUwgPSBsYWJlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYnV0dG9uIGxhYmVsLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEJ1dHRvbiBsYWJlbC5cbiAgICovXG4gIGdldExhYmVsICgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b25MYWJlbC5pbm5lckhUTUw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJ1dHRvbiBsYWJlbCB3aWR0aC5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSBCdXR0b24gbGFiZWwgd2lkdGguXG4gICAqL1xuICBnZXRMYWJlbFdpZHRoICgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b25MYWJlbC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBidXR0b24gc3RhdGVzLlxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMudG9nZ2xlQmxvY2tlZChmYWxzZSk7XG4gICAgdGhpcy50b2dnbGVBY3RpdmF0ZWQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGUgYnV0dG9uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTMwMF0gLSBEdXJhdGlvbiBpbiBtcy5cbiAgICovXG4gIGFuaW1hdGUgKGR1cmF0aW9uPTMwMCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnaDVwLWJ1dHRvbi1zcGlubmluZycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhhdC5idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaDVwLWJ1dHRvbi1zcGlubmluZycpO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9idXR0b24uanMiLCIvKiBqc2xpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWxzIEg1UCAqL1xuXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5cbi8vIFVzZWQgZm9yIHhBUEkgdGl0bGUgYW5kIHRhc2sgZGVzY3JpcHRpb25cbmNvbnN0IEg1UF9CSU5HT19ERUZBVUxUX0RFU0NSSVBUSU9OID0gJ0JpbmdvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZ28gZXh0ZW5kcyBINVAuUXVlc3Rpb24ge1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyAtIFBhcmFtZXRlcnMgZnJvbSBzZW1hbnRpY3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50SWQgLSBDb250ZW50IElELlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2V4dHJhc10gLSBDb250ZW50IGRhdGEgKG1ldGFkYXRhL3NhdmVzKTtcbiAgICovXG4gIGNvbnN0cnVjdG9yIChwYXJhbXMsIGNvbnRlbnRJZCwgZXh0cmFzID0ge30pIHtcbiAgICBzdXBlcignYmluZ28nKTtcblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICAgIHRoaXMucGFyYW1zLmJlaGF2aW91ciA9IHRoaXMucGFyYW1zLmJlaGF2aW91ciB8fCB7fTtcblxuICAgIC8qXG4gICAgICogdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVNvbHV0aW9uc0J1dHRvbiBhbmQgdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5IGFyZSB1c2VkIGJ5XG4gICAgICogY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItOH0gYW5kXG4gICAgICoge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItOX1cbiAgICAgKi9cbiAgICB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuZW5hYmxlU29sdXRpb25zQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5ID0gdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5IHx8IGZhbHNlO1xuXG4gICAgdGhpcy5wYXJhbXMuam9rZXIgPSB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuam9rZXIgfHwgZmFsc2U7XG4gICAgdGhpcy5wYXJhbXMuc2l6ZSA9IHBhcmFtcy5zaXplIHx8IDU7XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbGwgd2lubmluZyBwYXR0ZXJucyBmb3IgYSBCaW5nbyBzaGVldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gU2hlZXQgc2l6ZS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gQXJyYXlzIGNvbnRhaW5pbmcgcGF0dGVybnMuXG4gICAgICovXG4gICAgdGhpcy5idWlsZFdpbm5pbmdQYXR0ZXJucyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICBjb25zdCBwYXR0ZXJucyA9IFtdO1xuICAgICAgY29uc3QgZGlhZ29uYWwxID0gW107XG4gICAgICBjb25zdCBkaWFnb25hbDIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IFtdO1xuICAgICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICBjb2wucHVzaChpICogc2l6ZSArIGopO1xuICAgICAgICAgIHJvdy5wdXNoKGogKiBzaXplICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0dGVybnMucHVzaChjb2wpO1xuICAgICAgICBwYXR0ZXJucy5wdXNoKHJvdyk7XG5cbiAgICAgICAgZGlhZ29uYWwxLnB1c2goaSAqIChzaXplICsgMSkpO1xuICAgICAgICBkaWFnb25hbDIucHVzaCgoaSArIDEpICogKHNpemUgLSAxKSk7XG4gICAgICB9XG4gICAgICBwYXR0ZXJucy5wdXNoKGRpYWdvbmFsMSk7XG4gICAgICBwYXR0ZXJucy5wdXNoKGRpYWdvbmFsMik7XG4gICAgICByZXR1cm4gcGF0dGVybnM7XG4gICAgfTtcblxuICAgIHRoaXMud2lubmluZ1BhdHRlcm5zID0gdGhpcy5idWlsZFdpbm5pbmdQYXR0ZXJucyh0aGlzLnBhcmFtcy5zaXplKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGdhbWUgaGFzIGJlZW4gd29uLlxuICAgICAqL1xuICAgIHRoaXMuY2hlY2tXb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCB3aW5uZXJzID0gdGhpcy5ib2FyZC5nZXRNYXRjaGVzKHRoaXMud2lubmluZ1BhdHRlcm5zKTtcblxuICAgICAgaWYgKHdpbm5lcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuYmxvY2tCdXR0b25zKCk7XG4gICAgICAgIHRoaXMuYm9hcmQuYW5pbWF0ZVBhdHRlcm5zKHdpbm5lcnMpO1xuICAgICAgICB0aGlzLmJpbmdvID0gdHJ1ZTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHhBUEkgc3RhdGVtZW50XG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmdldFhBUElBbnN3ZXJFdmVudCgpKTtcblxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5KSB7XG4gICAgICAgICAgdGhpcy5zaG93QnV0dG9uKCd0cnktYWdhaW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciB0aGUgRE9NIGVsZW1lbnRzIHdpdGggSDVQLlF1ZXN0aW9uLlxuICAgICAqL1xuICAgIHRoaXMucmVnaXN0ZXJEb21FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgIC8vIFNldCBvcHRpb25hbCBtZWRpYVxuICAgICAgdmFyIG1lZGlhID0gdGhpcy5wYXJhbXMubWVkaWEudHlwZTtcbiAgICAgIGlmIChtZWRpYSAmJiBtZWRpYS5saWJyYXJ5KSB7XG4gICAgICAgIHZhciB0eXBlID0gbWVkaWEubGlicmFyeS5zcGxpdCgnICcpWzBdO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ0g1UC5JbWFnZScpIHtcbiAgICAgICAgICBpZiAobWVkaWEucGFyYW1zLmZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW1hZ2UobWVkaWEucGFyYW1zLmZpbGUucGF0aCwge1xuICAgICAgICAgICAgICBkaXNhYmxlSW1hZ2Vab29taW5nOiB0aGlzLnBhcmFtcy5tZWRpYS5kaXNhYmxlSW1hZ2Vab29taW5nLFxuICAgICAgICAgICAgICBhbHQ6IG1lZGlhLnBhcmFtcy5hbHQsXG4gICAgICAgICAgICAgIHRpdGxlOiBtZWRpYS5wYXJhbXMudGl0bGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnSDVQLlZpZGVvJykge1xuICAgICAgICAgIGlmIChtZWRpYS5wYXJhbXMuc291cmNlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWaWRlbyhtZWRpYSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlZ2lzdGVyIG9wdGlvbmFsIHRhc2sgaW50cm9kdWN0aW9uIHRleHRcbiAgICAgIGlmICh0aGlzLnBhcmFtcy50YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgIHRoaXMuaW50cm9kdWN0aW9uLmlubmVySFRNTCA9IHRoaXMucGFyYW1zLnRhc2tEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5zZXRJbnRyb2R1Y3Rpb24odGhpcy5pbnRyb2R1Y3Rpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWdpc3RlciBjb250ZW50XG4gICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHtcbiAgICAgICAgd29yZHM6IHRoaXMucGFyYW1zLndvcmRzLFxuICAgICAgICBzaXplOiB0aGlzLnBhcmFtcy5zaXplLFxuICAgICAgICBzaHVmZmxlT25SZXRyeTogdGhpcy5wYXJhbXMuYmVoYXZpb3VyLnNodWZmbGVPblJldHJ5LFxuICAgICAgICBqb2tlcjogdGhpcy5wYXJhbXMuam9rZXIsXG4gICAgICAgIGJ1dHRvbkNsaWNrZWQ6IHRoaXMuY2hlY2tXb24sXG4gICAgICAgIGZpdExhYmVsczogdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmZpdExhYmVsc1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNldENvbnRlbnQodGhpcy5ib2FyZC5nZXRET01FbGVtZW50KCkpO1xuXG4gICAgICAvLyBBZGQgYnV0dG9uc1xuICAgICAgdGhpcy5hZGRCdXR0b25zKCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmJvYXJkLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgfSwgMCk7XG5cbiAgICAgIHRoaXMub24oJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5ib2FyZC50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYWxsIHRoZSBidXR0b25zIHRoYXQgc2hhbGwgYmUgcGFzc2VkIHRvIEg1UC5RdWVzdGlvblxuICAgICAqL1xuICAgIHRoaXMuYWRkQnV0dG9ucyA9ICgpID0+IHtcbiAgICAgIC8vIFJldHJ5IGJ1dHRvblxuICAgICAgdGhpcy5hZGRCdXR0b24oJ3RyeS1hZ2FpbicsIHRoaXMucGFyYW1zLnRyeUFnYWluLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRUYXNrKCk7XG4gICAgICB9LCBmYWxzZSwge30sIHt9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc29tZSBraW5kIG9mIGFuc3dlciB3YXMgZ2l2ZW4gLS0gbm90IGFwcGxpY2FibGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlLCBpZiBhbnN3ZXIgd2FzIGdpdmVuLlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItMX1cbiAgICAgKi9cbiAgICB0aGlzLmdldEFuc3dlckdpdmVuID0gKCkgPT4gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEdldCBsYXRlc3Qgc2NvcmUgLS0gbm90IGFwcGxpY2FibGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IExhdGVzdCBzY29yZS5cbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTJ9XG4gICAgICovXG4gICAgdGhpcy5nZXRTY29yZSA9ICgpID0+IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbWF4aW11bSBwb3NzaWJsZSBzY29yZSAtLSBub3QgYXBwbGljYWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gU2NvcmUgbmVjZXNzYXJ5IGZvciBtYXN0ZXJpbmcuXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci0zfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0TWF4U2NvcmUgPSAoKSA9PiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogU2hvdyBzb2x1dGlvbiAtLSBub3QgYXBwbGljYWJsZS5cbiAgICAgKlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItNH1cbiAgICAgKi9cbiAgICB0aGlzLnNob3dTb2x1dGlvbnMgPSAoKSA9PiB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0YXNrLlxuICAgICAqXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci01fVxuICAgICAqL1xuICAgIHRoaXMucmVzZXRUYXNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5iaW5nbyA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRlQnV0dG9uKCd0cnktYWdhaW4nKTtcbiAgICAgIHRoaXMuYm9hcmQucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IHhBUEkgZGF0YS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0geEFQSSBzdGF0ZW1lbnQuXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci02fVxuICAgICAqL1xuICAgIHRoaXMuZ2V0WEFQSURhdGEgPSAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0ZW1lbnQ6IHRoaXMuZ2V0WEFQSUFuc3dlckV2ZW50KCkuZGF0YS5zdGF0ZW1lbnRcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHhBUEkgYW5zd2VyIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7SDVQLlhBUElFdmVudH0gWEFQSSBhbnN3ZXIgZXZlbnQuXG4gICAgICovXG4gICAgdGhpcy5nZXRYQVBJQW5zd2VyRXZlbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB4QVBJRXZlbnQgPSB0aGlzLmNyZWF0ZUJpbmdvWEFQSUV2ZW50KCdhbnN3ZXJlZCcpO1xuXG4gICAgICB4QVBJRXZlbnQuc2V0U2NvcmVkUmVzdWx0KHRoaXMuZ2V0U2NvcmUoKSwgdGhpcy5nZXRNYXhTY29yZSgpLCB0aGlzLCB0cnVlLCB0aGlzLmhhc0JpbmdvKCkpO1xuICAgICAgeEFQSUV2ZW50LmRhdGEuc3RhdGVtZW50LnJlc3VsdC5yZXNwb25zZSA9IHRoaXMuYm9hcmRcbiAgICAgICAgLmdldEFjdGl2YXRlZEJ1dHRvbnNMYWJlbHMoKVxuICAgICAgICAuam9pbignWyxdJyk7XG5cbiAgICAgIHJldHVybiB4QVBJRXZlbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiB4QVBJIGV2ZW50IGZvciBCaW5nby5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJiIC0gU2hvcnQgaWQgb2YgdGhlIHZlcmIgd2Ugd2FudCB0byB0cmlnZ2VyLlxuICAgICAqIEByZXR1cm4ge0g1UC5YQVBJRXZlbnR9IEV2ZW50IHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHRoaXMuY3JlYXRlQmluZ29YQVBJRXZlbnQgPSAodmVyYikgPT4ge1xuICAgICAgY29uc3QgeEFQSUV2ZW50ID0gdGhpcy5jcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSh2ZXJiKTtcbiAgICAgIHRoaXMuZXh0ZW5kKFxuICAgICAgICB4QVBJRXZlbnQuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ29iamVjdCcsICdkZWZpbml0aW9uJ10pLFxuICAgICAgICB0aGlzLmdldHhBUElEZWZpbml0aW9uKCkpO1xuICAgICAgcmV0dXJuIHhBUElFdmVudDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB4QVBJIGRlZmluaXRpb24gZm9yIHRoZSB4QVBJIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gWEFQSSBkZWZpbml0aW9uLlxuICAgICAqL1xuICAgIHRoaXMuZ2V0eEFQSURlZmluaXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0ge307XG4gICAgICBkZWZpbml0aW9uLm5hbWUgPSB7J2VuLVVTJzogSDVQX0JJTkdPX0RFRkFVTFRfREVTQ1JJUFRJT059O1xuICAgICAgZGVmaW5pdGlvbi5kZXNjcmlwdGlvbiA9IHsnZW4tVVMnOiB0aGlzLmdldFRpdGxlKCl9O1xuICAgICAgZGVmaW5pdGlvbi50eXBlID0gJ2h0dHA6Ly9hZGxuZXQuZ292L2V4cGFwaS9hY3Rpdml0aWVzL2NtaS5pbnRlcmFjdGlvbic7XG4gICAgICBkZWZpbml0aW9uLmludGVyYWN0aW9uVHlwZSA9ICdvdGhlcic7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHhBUEkgZGVmaW5pdGlvbiBmb3IgdGhlIHhBUEkgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBYQVBJIGRlZmluaXRpb24uXG4gICAgICovXG4gICAgdGhpcy5nZXRUaXRsZSA9ICgpID0+ICh0aGlzLnBhcmFtcy50YXNrRGVzY3JpcHRpb24pID8gdGhpcy5wYXJhbXMudGFza0Rlc2NyaXB0aW9uIDogSDVQX0JJTkdPX0RFRkFVTFRfREVTQ1JJUFRJT047XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3Qgd2lubmluZy9jb21wbGV0aW9uIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSwgaWYgQmluZ28uXG4gICAgICovXG4gICAgdGhpcy5oYXNCaW5nbyA9ICgpID0+IHRoaXMuYmluZ287XG5cbiAgICAvKipcbiAgICAgKiBFeHRlbmQgYW4gYXJyYXkganVzdCBsaWtlIEpRdWVyeSdzIGV4dGVuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhcmd1bWVudHMgLSBPYmplY3RzIHRvIGJlIG1lcmdlZC5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IE1lcmdlZCBvYmplY3RzLlxuICAgICAqL1xuICAgIHRoaXMuZXh0ZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF1ba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGFyZ3VtZW50c1tpXVtrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICB0aGlzLmV4dGVuZChhcmd1bWVudHNbMF1ba2V5XSwgYXJndW1lbnRzW2ldW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGFyZ3VtZW50c1swXVtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2FwcC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCBCaW5nbyBmcm9tIFwiLi4vc2NyaXB0cy9hcHBcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3NjcmlwdHMvYnV0dG9uXCI7XG5cbi8vIExvYWQgbGlicmFyeVxuSDVQID0gSDVQIHx8IHt9O1xuSDVQLkJpbmdvID0gQmluZ287XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9kaXN0LmpzIiwiLyoganNsaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFscyBINVAgKi9cblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cbmNsYXNzIEJvYXJkIGV4dGVuZHMgSDVQLkV2ZW50RGlzcGF0Y2hlciB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyAtIFBhcmFtZXRlcnMgZnJvbSBzZW1hbnRpY3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMud29yZHMgLSBMaXN0IG9mIHdvcmRzL3BocmFzZXMvbnVtYmVycy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5zaXplIC0gU2l6ZSBvZiB0aGUgYm9hcmQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLnNodWZmbGVPblJldHJ5IC0gSWYgdHJ1ZSwgYm9hcmQgd2lsbCBiZSBzaHVmZmxlZCBvbiByZXRyeS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gcGFyYW1zLmJ1dHRvbkNsaWNrZWQgLSBDYWxsYmFjayB0byBjaGVjayBpZiBnYW1lIGlzIHdvbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuZml0TGFiZWxzIC0gSWYgdHJ1ZSwgZm9yY2UgbGFiZWxzIHRvIGZpdCBpbnRvIGJ1dHRvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvciAocGFyYW1zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuXG4gICAgLy8gU2V0IHdvcmRzXG4gICAgaWYgKCF0aGlzLnBhcmFtcy53b3Jkcykge1xuICAgICAgdGhpcy53b3JkcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMyAqIHRoaXMucGFyYW1zLnNpemUgKiB0aGlzLnBhcmFtcy5zaXplOyBpKyspIHtcbiAgICAgICAgdGhpcy53b3Jkcy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMud29yZHMgPSB0aGlzLnBhcmFtcy53b3Jkcy5zcGxpdCgnXFxuJyk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBidXR0b25zXG4gICAgdGhpcy5idXR0b25zID0gdGhpcy5pbml0QnV0dG9ucyh0aGlzLnBhcmFtcy5zaXplKTtcbiAgICB0aGlzLnNldEJ1dHRvbkxhYmVscyh0aGlzLndvcmRzKTtcbiAgICB0aGlzLnNldEpva2VyKHRoaXMucGFyYW1zLmpva2VyKTtcblxuICAgIC8vIFNldHVwIGJvYXJkXG4gICAgdGhpcy5ib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbXMuc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdoNXAtYmluZ28tY29sdW1uJyk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGFyYW1zLnNpemU7IGorKykge1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25zW2kgKiB0aGlzLnBhcmFtcy5zaXplICsgal0uZ2V0RE9NRWxlbWVudCgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICB0aGlzLmJvYXJkLmNsYXNzTGlzdC5hZGQoJ2g1cC1iaW5nby1ib2FyZCcpO1xuXG4gICAgdGhpcy5vbigncmVzaXplJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzaXplQnV0dG9ucyh7Zml0TGFiZWxzOiB0aGlzLnBhcmFtcy5maXRMYWJlbHN9KTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSBidXR0b25zLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2FyZ3VtZW50c10gT3B0aW9uYWwgYXJndW1lbnRzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2FyZ3VtZW50cy5zaHJpbmtGYWN0b3JdIFNocmluayBmYWN0b3IuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbYXJndW1lbnRzLmZvbnRTaXplTWluPTZdIE1pbmltdW0gZm9udCBzaXplIGluIHB4LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthcmd1bWVudHMuZml0TGFiZWxzXSBJZiB0cnVlLCBzY2FsZSBsYWJlbHMgdG8gZml0IGludG8gYnV0dG9uc1xuICAgKi9cbiAgcmVzaXplQnV0dG9ucyh7c2hyaW5rRmFjdG9yLCBmb250U2l6ZU1pbj0xLCBmaXRMYWJlbHN9PXt9KSB7XG4gICAgLyoqXG4gICAgICogU2NhbGUgZm9udCB0byBmaXQgbG9uZ2VzdCB3b3JkIGludG8gYnV0dG9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFthcmd1bWVudHNdIE9wdGlvbmFsIGFyZ3VtZW50cy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FyZ3VtZW50cy5zaHJpbmtGYWN0b3JdIFNocmluayBmYWN0b3IuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFthcmd1bWVudHMuZm9udFNpemVNaW49Nl0gTWluaW11bSBmb250IHNpemUgaW4gcHguXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXJndW1lbnRzLmZpdExhYmVsc10gSWYgdHJ1ZSwgc2NhbGUgbGFiZWxzIHRvIGZpdCBpbnRvIGJ1dHRvbnNcbiAgICAgKi9cbiAgICBjb25zdCBmaXQgPSAoe3Nocmlua0ZhY3RvciwgZm9udFNpemVNaW49NiwgZml0TGFiZWxzfT17fSkgPT4ge1xuICAgICAgY29uc3QgbG9uZ2VzdExhYmVsV2lkdGggPSBNYXRoLm1heChcbiAgICAgICAgLi4udGhpcy5idXR0b25zLm1hcChidXR0b24gPT4gYnV0dG9uLmdldExhYmVsV2lkdGgoKSlcbiAgICAgICk7XG4gICAgICBjb25zdCBidXR0b25XaWR0aCA9IHRoaXMuYnV0dG9uc1swXS5nZXRET01FbGVtZW50KCkuY2xpZW50V2lkdGg7XG5cbiAgICAgIGlmIChsb25nZXN0TGFiZWxXaWR0aCA+IGJ1dHRvbldpZHRoKSB7XG4gICAgICAgIHRoaXMucmVzaXplQnV0dG9ucyh7c2hyaW5rRmFjdG9yOiBzaHJpbmtGYWN0b3IgKiAxLjEsIGZvbnRTaXplTWluLCBmaXRMYWJlbHN9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQ29tcHV0ZSBzdHlsZSB2YWx1ZXNcbiAgICBjb25zdCBidXR0b25XaWR0aCA9IHRoaXMuYnV0dG9uc1swXS5nZXRET01FbGVtZW50KCkuY2xpZW50V2lkdGg7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBmb250IHNpemUgdG8gc3R5bGUncyBmb250IHNpemUgYmVmb3JlIGNoZWNraW5nIGZvciBmaXR0aW5nXG4gICAgaWYgKHR5cGVvZiBzaHJpbmtGYWN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBmb250U2l6ZUJhc2UgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJykpO1xuICAgICAgc2hyaW5rRmFjdG9yID0gYnV0dG9uV2lkdGggLyAoZm9udFNpemVCYXNlICogMTApO1xuICAgIH1cbiAgICBjb25zdCBmb250U2l6ZSA9IE1hdGgubWF4KGJ1dHRvbldpZHRoIC8gKHNocmlua0ZhY3RvciAqIDEwKSwgZm9udFNpemVNaW4pO1xuXG4gICAgLy8gU2V0IHZhbHVlc1xuICAgIHRoaXMuYm9hcmQuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZSArICdweCc7XG4gICAgdGhpcy5ib2FyZC5zdHlsZS5saW5lSGVpZ2h0ID0gMS41ICogZm9udFNpemUgKyAncHgnO1xuXG4gICAgLy8gRml0IGxhYmVscyBpbnRvIGJ1dHRvbnNcbiAgICBpZiAoZml0TGFiZWxzID09PSB0cnVlICYmIGZvbnRTaXplID4gZm9udFNpemVNaW4pIHtcbiAgICAgIGZpdCh7c2hyaW5rRmFjdG9yLCBmb250U2l6ZU1pbiwgZml0TGFiZWxzfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBib2FyZC5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSBET00gZWxlbWVudC5cbiAgICovXG4gIGdldERPTUVsZW1lbnQgKCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNldCBvZiBidXR0b25zLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NpemU9NV0gLSBTaXplIG9mIHRoZSBiaW5nbyBib2FyZC5cbiAgICogQHJldHVybiB7b2JqZWN0W119IEFycmF5IGFzIGJvYXJkLlxuICAgKi9cbiAgaW5pdEJ1dHRvbnMgKHNpemU9NSkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUgKiBzaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b24oaSk7XG4gICAgICBidXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtcy5idXR0b25DbGlja2VkKCk7XG4gICAgICB9KTtcbiAgICAgIGJ1dHRvbnMucHVzaChidXR0b24pO1xuICAgIH1cblxuICAgIHJldHVybiBidXR0b25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJhbmRvbWx5IHNldCBidXR0b24gbGFiZWxzIGZyb20gYSBzZXQgb2Ygd29yZHMuXG4gICAqIElmIHRoZXJlIG51bWJlciBvZiB3b3JkcyBpcyBzbWFsbGVyIHRoYW4gdGhlIG51bWJlciBvZiBidXR0b25zLFxuICAgKiB0aGUgd29yZHMgd2lsbCBiZSB1c2VkIHJlcGVhdGVkbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IHdvcmRzIC0gV29yZHMgdG8gc2V0IGJ1dHRvbiBsYWJlbHMgdG8uXG4gICAqL1xuICBzZXRCdXR0b25MYWJlbHMgKHdvcmRzKSB7XG4gICAgbGV0IGZpbGxlciA9IFtdO1xuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBpZiAoZmlsbGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmaWxsZXIgPSB3b3Jkcy5zbGljZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGFiZWwgPSBmaWxsZXIuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpbGxlci5sZW5ndGgpLCAxKTtcbiAgICAgIGJ1dHRvbi5zZXRMYWJlbChsYWJlbCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBjZW50ZXIgYnV0dG9uIGEgam9rZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCAtIElmIHRydWUsIGpva2VyIHNob3VsZCBiZSBzZXQuXG4gICAqL1xuICBzZXRKb2tlciAoZW5hYmxlZCkge1xuICAgIGlmIChlbmFibGVkICE9PSB0cnVlIHx8IHRoaXMucGFyYW1zLnNpemUgJSAyID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTWFrZSBjZW50ZXIgYnV0dG9uIGEgam9rZXJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbnNbTWF0aC5mbG9vcih0aGlzLnBhcmFtcy5zaXplLzIpICogdGhpcy5wYXJhbXMuc2l6ZSArIE1hdGguZmxvb3IodGhpcy5wYXJhbXMuc2l6ZS8yKV07XG4gICAgYnV0dG9uLnRvZ2dsZUFjdGl2YXRlZCh0cnVlKTtcbiAgICBidXR0b24udG9nZ2xlQmxvY2tlZCh0cnVlKTtcbiAgICBidXR0b24uc2V0TGFiZWwoJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtYXRjaGVzIHRvIGEgYnV0dG9uIHBhdHRlcm4uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IHBhdHRlcm5zIC0gQXJyYXlzIGNvbnRhaW5pbmcgdGhlIGZpZWxkcy5cbiAgICogQHJldHVybiB7b2JqZWN0W119IEFsbCBwYXR0ZXJucyBtYXRjaGluZyB0aGUgd2luIGNvbmRpdGlvbi5cbiAgICovXG4gIGdldE1hdGNoZXMgKHBhdHRlcm5zKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IFtdO1xuICAgIHBhdHRlcm5zLmZvckVhY2gocGF0dGVybiA9PiB7XG4gICAgICBpZiAocGF0dGVybi5ldmVyeShmaWVsZCA9PiB0aGlzLmJ1dHRvbnNbZmllbGRdLmlzQWN0aXZhdGVkKCkpKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaChwYXR0ZXJuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGFiZWxzIGZyb20gYWxsIGJ1dHRvbnMgdGhhdCBhcmUgYWN0aXZhdGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gTGFiZWwgc3RyaW5ncy5cbiAgICovXG4gIGdldEFjdGl2YXRlZEJ1dHRvbnNMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgYnV0dG9uID0+IGJ1dHRvbi5pc0FjdGl2YXRlZCgpICYmIGJ1dHRvbi5nZXRMYWJlbCgpICE9PSAnJ1xuICAgICAgKVxuICAgICAgLm1hcChcbiAgICAgICAgYnV0dG9uID0+IGJ1dHRvbi5nZXRMYWJlbCgpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJsb2NrIGFsbCBidXR0b25zLlxuICAgKi9cbiAgYmxvY2tCdXR0b25zICgpIHtcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLnRvZ2dsZUJsb2NrZWQodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5ibG9jayBhbGwgYnV0dG9ucy5cbiAgICovXG4gIHVuYmxvY2tCdXR0b25zICgpIHtcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLnRvZ2dsZUJsb2NrZWQoZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBib2FyZC5cbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLnJlc2V0KCk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMucGFyYW1zLnNodWZmbGVPblJldHJ5KSB7XG4gICAgICB0aGlzLnNldEJ1dHRvbkxhYmVscyh0aGlzLndvcmRzKTtcbiAgICB9XG4gICAgdGhpcy5zZXRKb2tlcih0aGlzLnBhcmFtcy5qb2tlcik7XG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0ZSBwYXR0ZXJucy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gcGF0dGVybnMgLSBTZXRzIG9mIGJ1dHRvbnMnIElEcyB0byBiZSBhbmltYXRlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheT0xMDBdIC0gT3B0aW9uYWwgZGVsYXkgYmV0d2VlbiBlYWNoIGFuaW1hdGlvbi5cbiAgICovXG4gIGFuaW1hdGVQYXR0ZXJucyAocGF0dGVybnMsIGRlbGF5PTEwMCkge1xuICAgIC8qKlxuICAgICAqIEFuaW1hdGUgYSBwYXR0ZXJuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3RbXX0gcGF0dGVybiAtIElEcyBvZiBidXR0b25zIHRvIGJlIGFuaW1hdGVkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXk9MTAwXSAtIE9wdGlvbmFsIGRlbGF5IGJldHdlZW4gZWFjaCBhbmltYXRpb24uXG4gICAgICovXG4gICAgY29uc3QgYW5pbWF0ZVBhdHRlcm4gPSAocGF0dGVybiwgZGVsYXk9MTAwKSA9PiB7XG4gICAgICBpZiAocGF0dGVybi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uc1twYXR0ZXJuWzBdXS5hbmltYXRlKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFuaW1hdGVQYXR0ZXJuKHBhdHRlcm4uc2xpY2UoMSkpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHBhdHRlcm5zLmZvckVhY2gocGF0dGVybiA9PiB7XG4gICAgICBhbmltYXRlUGF0dGVybihwYXR0ZXJuLCBkZWxheSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oNXAtYmluZ28gLmg1cC1iaW5nby1ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYmFja2dyb3VuZDogI2YyMjYyNjtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDAuMWVtIHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxLjVlbSAwLjJlbSByZ2JhKDAsMCwwLDAuMzEpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiBjYWxjKDkwJSAtIDAuMmVtKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogNSUgMDtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJ1dHRvbjpub3QoLmg1cC1idXR0b24tYmxvY2tlZCk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJ1dHRvbjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxufVxcblxcbi5oNXAtYmluZ28gLmg1cC1iaW5nby1idXR0b24tbGFiZWwge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlIDAuMnMsIGRpc3BsYXkgMC4xcyBlYXNlIDAuMnM7XFxufVxcblxcbi5oNXAtYmluZ28gLmg1cC1iaW5nby1idXR0b24tc3ltYm9sIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi9pbWFnZXMvc3RhcmJhZGdlLnN2Z1wiKSArIFwiKSBjZW50ZXIvODAlIG5vLXJlcGVhdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlIDAuMnMsIGRpc3BsYXkgMC4xcyBlYXNlIDAuMnM7XFxufVxcblxcbi5oNXAtYmluZ28gLmg1cC1idXR0b24tYWN0aXZhdGVkIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLDEuMSk7XFxufVxcblxcbi5oNXAtYmluZ28gLmg1cC1idXR0b24tc3Bpbm5pbmcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTcyMGRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtNzIwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtNzIwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAsMS4xKTtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJ1dHRvbi1ibG9ja2VkIHtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJ1dHRvbi10cmFuc3BhcmVudCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9zdHlsZXMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qoc2VsZi5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXHR9KSxcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0NqeHpkbWNLSUNBZ2VHMXNibk02WkdNOUltaDBkSEE2THk5d2RYSnNMbTl5Wnk5a1l5OWxiR1Z0Wlc1MGN5OHhMakV2SWdvZ0lDQjRiV3h1Y3pwall6MGlhSFIwY0RvdkwyTnlaV0YwYVhabFkyOXRiVzl1Y3k1dmNtY3Zibk1qSWdvZ0lDQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlDaUFnSUhodGJHNXpPbk4yWnowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUNpQWdJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SUtJQ0FnZUcxc2JuTTZjMjlrYVhCdlpHazlJbWgwZEhBNkx5OXpiMlJwY0c5a2FTNXpiM1Z5WTJWbWIzSm5aUzV1WlhRdlJGUkVMM052Wkdsd2IyUnBMVEF1WkhSa0lnb2dJQ0I0Yld4dWN6cHBibXR6WTJGd1pUMGlhSFIwY0RvdkwzZDNkeTVwYm10elkyRndaUzV2Y21jdmJtRnRaWE53WVdObGN5OXBibXR6WTJGd1pTSUtJQ0FnZG1WeWMybHZiajBpTVM0eElnb2dJQ0IyYVdWM1FtOTRQU0l3SUMwMk5DQTJOREFnTmpRd0lnb2dJQ0JwWkQwaWMzWm5NaUlLSUNBZ2FXNXJjMk5oY0dVNmRtVnljMmx2YmowaU1DNDVNU0J5TVRNM01qVWlDaUFnSUhOdlpHbHdiMlJwT21SdlkyNWhiV1U5SW5OMFlYSmlZV1JuWlM1emRtY2lDaUFnSUdsdWEzTmpZWEJsT21WNGNHOXlkQzFtYVd4bGJtRnRaVDBpTDJodmJXVXZhbTlvYmk5RVpYTnJkRzl3TDNOamIzSmxYMmcxY0M1d2JtY2lDaUFnSUdsdWEzTmpZWEJsT21WNGNHOXlkQzE0WkhCcFBTSTVMak0xTURBd01EUWlDaUFnSUdsdWEzTmpZWEJsT21WNGNHOXlkQzE1WkhCcFBTSTVMak0xTURBd01EUWlDaUFnSUhkcFpIUm9QU0kyTkRBaUNpQWdJR2hsYVdkb2REMGlOalF3SWo0S0lDQThiV1YwWVdSaGRHRUtJQ0FnSUNCcFpEMGliV1YwWVdSaGRHRXhNaUkrQ2lBZ0lDQThjbVJtT2xKRVJqNEtJQ0FnSUNBZ1BHTmpPbGR2Y21zS0lDQWdJQ0FnSUNBZ2NtUm1PbUZpYjNWMFBTSWlQZ29nSUNBZ0lDQWdJRHhrWXpwbWIzSnRZWFErYVcxaFoyVXZjM1puSzNodGJEd3ZaR002Wm05eWJXRjBQZ29nSUNBZ0lDQWdJRHhrWXpwMGVYQmxDaUFnSUNBZ0lDQWdJQ0FnY21SbU9uSmxjMjkxY21ObFBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaR050YVhSNWNHVXZVM1JwYkd4SmJXRm5aU0lnTHo0S0lDQWdJQ0FnSUNBOFpHTTZkR2wwYkdVK1BDOWtZenAwYVhSc1pUNEtJQ0FnSUNBZ1BDOWpZenBYYjNKclBnb2dJQ0FnUEM5eVpHWTZVa1JHUGdvZ0lEd3ZiV1YwWVdSaGRHRStDaUFnUEdSbFpuTUtJQ0FnSUNCcFpEMGlaR1ZtY3pFd0lqNEtJQ0FnSUR4emRIbHNaUW9nSUNBZ0lDQWdhV1E5SW5OMGVXeGxORE14TUNJK0NpQWdJQ0FnSUM1amJITXRNU0I3Q2lBZ0lDQWdJQ0FnYVhOdmJHRjBhVzl1T2lCcGMyOXNZWFJsT3dvZ0lDQWdJQ0I5Q2dvZ0lDQWdJQ0F1WTJ4ekxUSWdld29nSUNBZ0lDQWdJR1pwYkd3NklDTTFPRGxpTkRJN0NpQWdJQ0FnSUgwS0NpQWdJQ0FnSUM1amJITXRNeUI3Q2lBZ0lDQWdJQ0FnWm1sc2JEb2dJemhoWXprM1lUc0tJQ0FnSUNBZ2ZRb0tJQ0FnSUNBZ0xtTnNjeTAwSUhzS0lDQWdJQ0FnSUNCdmNHRmphWFI1T2lBd0xqSTdDaUFnSUNBZ0lDQWdiV2w0TFdKc1pXNWtMVzF2WkdVNklHMTFiSFJwY0d4NU93b2dJQ0FnSUNCOUNnb2dJQ0FnSUNBdVkyeHpMVFVnZXdvZ0lDQWdJQ0FnSUdacGJHdzZJQ05tTWpZeU5qSTdDaUFnSUNBZ0lIMEtDaUFnSUNBZ0lDNWpiSE10TmlCN0NpQWdJQ0FnSUNBZ1ptbHNiRG9nSTJZM1kyWTFZenNLSUNBZ0lDQWdmUW9LSUNBZ0lDQWdMbU5zY3kwM0lIc0tJQ0FnSUNBZ0lDQm1hV3hzT2lCdWIyNWxPd29nSUNBZ0lDQjlDaUFnSUNBOEwzTjBlV3hsUGdvZ0lEd3ZaR1ZtY3o0S0lDQThjMjlrYVhCdlpHazZibUZ0WldSMmFXVjNDaUFnSUNBZ2NHRm5aV052Ykc5eVBTSWpabVptWm1abUlnb2dJQ0FnSUdKdmNtUmxjbU52Ykc5eVBTSWpOalkyTmpZMklnb2dJQ0FnSUdKdmNtUmxjbTl3WVdOcGRIazlJakVpQ2lBZ0lDQWdiMkpxWldOMGRHOXNaWEpoYm1ObFBTSXhNQ0lLSUNBZ0lDQm5jbWxrZEc5c1pYSmhibU5sUFNJeE1DSUtJQ0FnSUNCbmRXbGtaWFJ2YkdWeVlXNWpaVDBpTVRBaUNpQWdJQ0FnYVc1cmMyTmhjR1U2Y0dGblpXOXdZV05wZEhrOUlqQWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmNHRm5aWE5vWVdSdmR6MGlNaUlLSUNBZ0lDQnBibXR6WTJGd1pUcDNhVzVrYjNjdGQybGtkR2c5SWpFNE5qRWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmQybHVaRzkzTFdobGFXZG9kRDBpTVRBMU5pSUtJQ0FnSUNCcFpEMGlibUZ0WldSMmFXVjNPQ0lLSUNBZ0lDQnphRzkzWjNKcFpEMGlabUZzYzJVaUNpQWdJQ0FnYVc1cmMyTmhjR1U2ZW05dmJUMGlNQzQwTmpBNU16YzFJZ29nSUNBZ0lHbHVhM05qWVhCbE9tTjRQU0l0TXpNMExqZ3hNekU1SWdvZ0lDQWdJR2x1YTNOallYQmxPbU41UFNJeE16Y3VNakF6TmpJaUNpQWdJQ0FnYVc1cmMyTmhjR1U2ZDJsdVpHOTNMWGc5SWpVNUlnb2dJQ0FnSUdsdWEzTmpZWEJsT25kcGJtUnZkeTE1UFNJeU5DSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwM2FXNWtiM2N0YldGNGFXMXBlbVZrUFNJeElnb2dJQ0FnSUdsdWEzTmpZWEJsT21OMWNuSmxiblF0YkdGNVpYSTlJbk4yWnpJaUNpQWdJQ0FnWm1sMExXMWhjbWRwYmkxMGIzQTlJakFpQ2lBZ0lDQWdabWwwTFcxaGNtZHBiaTFzWldaMFBTSXdJZ29nSUNBZ0lHWnBkQzF0WVhKbmFXNHRjbWxuYUhROUlqQWlDaUFnSUNBZ1ptbDBMVzFoY21kcGJpMWliM1IwYjIwOUlqQWlDaUFnSUNBZ2RXNXBkSE05SW5CNElpQXZQZ29nSUR4eVpXTjBDaUFnSUNBZ2MzUjViR1U5SW1semIyeGhkR2x2YmpwcGMyOXNZWFJsTzJacGJHdzZibTl1WlNJS0lDQWdJQ0I1UFNJdE1UQTFNeTQxT0RRM0lnb2dJQ0FnSUhnOUlqZ3dPUzQwTWpNNE15SUtJQ0FnSUNCamJHRnpjejBpWTJ4ekxUY2lDaUFnSUNBZ2QybGtkR2c5SWpNeE9UUXVNekExTWlJS0lDQWdJQ0JvWldsbmFIUTlJakU0TURRdU16ZzVPU0lLSUNBZ0lDQnBaRDBpY21WamREUXpPRElpSUM4K0NpQWdQR2NLSUNBZ0lDQnBaRDBpWnpRMk9UZ2lDaUFnSUNBZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NVEU0TWk0NU9ETXhMRFUyTGprME5ERTJPQ2tpUGdvZ0lDQWdQR05wY21Oc1pRb2dJQ0FnSUNBZ2NqMGlNekl3SWdvZ0lDQWdJQ0FnWTNrOUlqRTVPUzR3TlRVNE15SUtJQ0FnSUNBZ0lHTjRQU0l0T0RZeUxqazRNekE1SWdvZ0lDQWdJQ0FnYVdROUluQmhkR2cwTmpBNUxUVWlDaUFnSUNBZ0lDQnpkSGxzWlQwaVkyOXNiM0k2SXpBd01EQXdNRHRqYkdsd0xYSjFiR1U2Ym05dWVtVnlienRrYVhOd2JHRjVPbWx1YkdsdVpUdHZkbVZ5Wm14dmR6cDJhWE5wWW14bE8zWnBjMmxpYVd4cGRIazZkbWx6YVdKc1pUdHZjR0ZqYVhSNU9qRTdhWE52YkdGMGFXOXVPbWx6YjJ4aGRHVTdiV2w0TFdKc1pXNWtMVzF2WkdVNmJtOXliV0ZzTzJOdmJHOXlMV2x1ZEdWeWNHOXNZWFJwYjI0NmMxSkhRanRqYjJ4dmNpMXBiblJsY25CdmJHRjBhVzl1TFdacGJIUmxjbk02YkdsdVpXRnlVa2RDTzNOdmJHbGtMV052Ykc5eU9pTXdNREF3TURBN2MyOXNhV1F0YjNCaFkybDBlVG94TzJacGJHdzZJMll5TWpZeU5qdG1hV3hzTFc5d1lXTnBkSGs2TVR0bWFXeHNMWEoxYkdVNmJtOXVlbVZ5Ynp0emRISnZhMlV0ZDJsa2RHZzZNVHR6ZEhKdmEyVXRiR2x1WldOaGNEcGlkWFIwTzNOMGNtOXJaUzFzYVc1bGFtOXBianB0YVhSbGNqdHpkSEp2YTJVdGJXbDBaWEpzYVcxcGREbzBPM04wY205clpTMWtZWE5vWVhKeVlYazZibTl1WlR0emRISnZhMlV0WkdGemFHOW1abk5sZERvd08zTjBjbTlyWlMxdmNHRmphWFI1T2pFN1kyOXNiM0l0Y21WdVpHVnlhVzVuT21GMWRHODdhVzFoWjJVdGNtVnVaR1Z5YVc1bk9tRjFkRzg3YzJoaGNHVXRjbVZ1WkdWeWFXNW5PbUYxZEc4N2RHVjRkQzF5Wlc1a1pYSnBibWM2WVhWMGJ6dGxibUZpYkdVdFltRmphMmR5YjNWdVpEcGhZMk4xYlhWc1lYUmxJaUF2UGdvZ0lDQWdQR05wY21Oc1pRb2dJQ0FnSUNBZ2NqMGlNekF3SWdvZ0lDQWdJQ0FnWTNrOUlqRTVPUzR3TlRVNE15SUtJQ0FnSUNBZ0lHTjRQU0l0T0RZeUxqazRNekE1SWdvZ0lDQWdJQ0FnYVdROUluQmhkR2cwTmpBNUlnb2dJQ0FnSUNBZ2MzUjViR1U5SW1OdmJHOXlPaU13TURBd01EQTdZMnhwY0MxeWRXeGxPbTV2Ym5wbGNtODdaR2x6Y0d4aGVUcHBibXhwYm1VN2IzWmxjbVpzYjNjNmRtbHphV0pzWlR0MmFYTnBZbWxzYVhSNU9uWnBjMmxpYkdVN2IzQmhZMmwwZVRveE8ybHpiMnhoZEdsdmJqcHBjMjlzWVhSbE8yMXBlQzFpYkdWdVpDMXRiMlJsT201dmNtMWhiRHRqYjJ4dmNpMXBiblJsY25CdmJHRjBhVzl1T25OU1IwSTdZMjlzYjNJdGFXNTBaWEp3YjJ4aGRHbHZiaTFtYVd4MFpYSnpPbXhwYm1WaGNsSkhRanR6YjJ4cFpDMWpiMnh2Y2pvak1EQXdNREF3TzNOdmJHbGtMVzl3WVdOcGRIazZNVHRtYVd4c09pTm1Nall5TmpJN1ptbHNiQzF2Y0dGamFYUjVPakU3Wm1sc2JDMXlkV3hsT201dmJucGxjbTg3YzNSeWIydGxMWGRwWkhSb09qRTdjM1J5YjJ0bExXeHBibVZqWVhBNlluVjBkRHR6ZEhKdmEyVXRiR2x1WldwdmFXNDZiV2wwWlhJN2MzUnliMnRsTFcxcGRHVnliR2x0YVhRNk5EdHpkSEp2YTJVdFpHRnphR0Z5Y21GNU9tNXZibVU3YzNSeWIydGxMV1JoYzJodlptWnpaWFE2TUR0emRISnZhMlV0YjNCaFkybDBlVG94TzJOdmJHOXlMWEpsYm1SbGNtbHVaenBoZFhSdk8ybHRZV2RsTFhKbGJtUmxjbWx1WnpwaGRYUnZPM05vWVhCbExYSmxibVJsY21sdVp6cGhkWFJ2TzNSbGVIUXRjbVZ1WkdWeWFXNW5PbUYxZEc4N1pXNWhZbXhsTFdKaFkydG5jbTkxYm1RNllXTmpkVzExYkdGMFpTSWdMejRLSUNBZ0lEeG5DaUFnSUNBZ0lDQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2c1Tnk0M01EZ3dNaXd0TXpjekxqRXlNamd4S1NJS0lDQWdJQ0FnSUdsa1BTSm5ORFkzTmlJK0NpQWdJQ0FnSUR4bkNpQWdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtEQXVOVGszTkRrek1qWXNNQzR5TlRFME5EZ3hOaXd3TGpJMU1UUTBPREUyTEMwd0xqVTVOelE1TXpJMkxDMHhOREUxTGpjd09EVXNOekEwTGpNMU9ETXpLU0lLSUNBZ0lDQWdJQ0FnYVdROUltYzBMVFVpQ2lBZ0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21WNGNHOXlkQzFtYVd4bGJtRnRaVDBpTDI5d2RDOXNZVzF3Y0M5b2RHUnZZM012WkhKMWNHRnNMM05wZEdWekwyUmxabUYxYkhRdlptbHNaWE12YURWd0wyUmxkbVZzYjNCdFpXNTBMMmcxY0MxcGJuUmxjbUZqZEdsMlpTMTJhV1JsYnk5emNtTXZaM1ZwTDNOamIzSmxYMmcxY0Y5M2FHbDBaUzV3Ym1jaUNpQWdJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tVjRjRzl5ZEMxNFpIQnBQU0k1TGpNMU1EQXdNRFFpQ2lBZ0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21WNGNHOXlkQzE1WkhCcFBTSTVMak0xTURBd01EUWlDaUFnSUNBZ0lDQWdJSE4wZVd4bFBTSmpiMnh2Y2pvak1EQXdNREF3TzJOc2FYQXRjblZzWlRwdWIyNTZaWEp2TzJScGMzQnNZWGs2YVc1c2FXNWxPMjkyWlhKbWJHOTNPblpwYzJsaWJHVTdkbWx6YVdKcGJHbDBlVHAyYVhOcFlteGxPMjl3WVdOcGRIazZNVHRwYzI5c1lYUnBiMjQ2YVhOdmJHRjBaVHR0YVhndFlteGxibVF0Ylc5a1pUcHViM0p0WVd3N1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJqcHpVa2RDTzJOdmJHOXlMV2x1ZEdWeWNHOXNZWFJwYjI0dFptbHNkR1Z5Y3pwc2FXNWxZWEpTUjBJN2MyOXNhV1F0WTI5c2IzSTZJekF3TURBd01EdHpiMnhwWkMxdmNHRmphWFI1T2pFN1ptbHNiRG9qWmpSaVpUSTBPMlpwYkd3dGIzQmhZMmwwZVRveE8yWnBiR3d0Y25Wc1pUcHViMjU2WlhKdk8zTjBjbTlyWlMxM2FXUjBhRG94TzNOMGNtOXJaUzFzYVc1bFkyRndPbUoxZEhRN2MzUnliMnRsTFd4cGJtVnFiMmx1T20xcGRHVnlPM04wY205clpTMXRhWFJsY214cGJXbDBPalE3YzNSeWIydGxMV1JoYzJoaGNuSmhlVHB1YjI1bE8zTjBjbTlyWlMxa1lYTm9iMlptYzJWME9qQTdjM1J5YjJ0bExXOXdZV05wZEhrNk1UdGpiMnh2Y2kxeVpXNWtaWEpwYm1jNllYVjBienRwYldGblpTMXlaVzVrWlhKcGJtYzZZWFYwYnp0emFHRndaUzF5Wlc1a1pYSnBibWM2WVhWMGJ6dDBaWGgwTFhKbGJtUmxjbWx1WnpwaGRYUnZPMlZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbUZqWTNWdGRXeGhkR1VpUGdvZ0lDQWdJQ0FnSUR4d1lYUm9DaUFnSUNBZ0lDQWdJQ0FnWkQwaWJTQXpPVFF1TnpBMUxEVTVNUzR6TmlBeE15NHdNek1zTVRVMkxqTTVNeUJqSURNdU56STBMRE01TGpBNU9DQTFNQzR5Tmprc05UY3VOekUySURnd0xqQTFPQ3d6TVM0Mk5URWdUQ0EyTURVdU1Ea3hMRFkzTXk0eU9DQmpJREV4TGpFM01Td3RNVEV1TVRjeElESTNMamt5Tnl3dE1UUXVPRGsxSURReUxqZ3lNaXd0TVRFdU1UY3hJR3dnTVRVeUxqWTJPU3d6Tnk0eU16WWdZeUF6T1M0d09UZ3NPUzR6TURrZ056QXVOelE1TEMweU9TNDNPRGtnTlRNdU9Ua3pMQzAyTnk0d01qVWdUQ0EzT0RrdU5ERXhMRFE0Tnk0d09UZ2dZeUF0TlM0MU9EVXNMVEUwTGpnNU5TQXROUzQxT0RVc0xUTXhMalkxTVNBekxqY3lOQ3d0TkRRdU5qZzBJR3dnT0RFdU9USXNMVEV6TlM0NU1UTWdZeUF5TUM0ME9Dd3RNek11TlRFeklDMDNMalEwTnl3dE56WXVNek0xSUMwME5pNDFORFVzTFRjeUxqWXhNU0JzSUMweE5UZ3VNalUxTERFNExqWXhPQ0JqSUMweE5pNDNOVFlzTVM0NE5qSWdMVE14TGpZMU1Td3RNeTQzTWpRZ0xUUXdMamsyTEMweE5pNDNOVFlnVENBMU1qWXVPRGsxTERFeE5DNDNNelFnUXlBMU1EQXVPRE1zT0RRdU9UUTFJRFExTUM0MU5pdzVOeTQ1TnpnZ05EUXpMakV4TXl3eE16Y3VNRGMySUd3Z0xUTXhMalkxTVN3eE5UUXVOVE14SUdNZ0xUTXVOekkwTERFMExqZzVOU0F0TVRNdU1ETXpMREkzTGpreU55QXRNamN1T1RJM0xETXpMalV4TXlCc0lDMHhORGN1TURnMExEWXhMalEwSUdNZ0xUTTFMak0zTlN3eE5DNDRPVFVnTFRNNUxqQTVPQ3cyTnk0d01qVWdMVE11TnpJMExEZzFMalkwTkNCTUlETTNNQzQxTURJc05UVXdMalFnWXlBeE15NHdNek1zTVRFdU1UY3hJREl5TGpNME1pd3lOaTR3TmpVZ01qUXVNakEwTERRd0xqazJJR3dnTFRBdU1EQXhMREFnZWlJS0lDQWdJQ0FnSUNBZ0lDQnBaRDBpY0dGMGFEWXRNeUlLSUNBZ0lDQWdJQ0FnSUNCcGJtdHpZMkZ3WlRwamIyNXVaV04wYjNJdFkzVnlkbUYwZFhKbFBTSXdJZ29nSUNBZ0lDQWdJQ0FnSUhOMGVXeGxQU0pqYjJ4dmNqb2pNREF3TURBd08yTnNhWEF0Y25Wc1pUcHViMjU2WlhKdk8yUnBjM0JzWVhrNmFXNXNhVzVsTzI5MlpYSm1iRzkzT25acGMybGliR1U3ZG1semFXSnBiR2wwZVRwMmFYTnBZbXhsTzJsemIyeGhkR2x2YmpwcGMyOXNZWFJsTzIxcGVDMWliR1Z1WkMxdGIyUmxPbTV2Y20xaGJEdGpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVPbk5TUjBJN1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKek9teHBibVZoY2xKSFFqdHpiMnhwWkMxamIyeHZjam9qTURBd01EQXdPM052Ykdsa0xXOXdZV05wZEhrNk1UdG1hV3hzT2lObU5HSmxNalE3Wm1sc2JDMXZjR0ZqYVhSNU9qRTdabWxzYkMxeWRXeGxPbTV2Ym5wbGNtODdjM1J5YjJ0bExYZHBaSFJvT2pFN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzFwZEdWeWJHbHRhWFE2TkR0emRISnZhMlV0WkdGemFHRnljbUY1T201dmJtVTdjM1J5YjJ0bExXUmhjMmh2Wm1aelpYUTZNRHR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hPMk52Ykc5eUxYSmxibVJsY21sdVp6cGhkWFJ2TzJsdFlXZGxMWEpsYm1SbGNtbHVaenBoZFhSdk8zTm9ZWEJsTFhKbGJtUmxjbWx1WnpwaGRYUnZPM1JsZUhRdGNtVnVaR1Z5YVc1bk9tRjFkRzg3Wlc1aFlteGxMV0poWTJ0bmNtOTFibVE2WVdOamRXMTFiR0YwWlNJZ0x6NEtJQ0FnSUNBZ1BDOW5QZ29nSUNBZ0lDQThad29nSUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d3TGpVd05EVTBPVGcyTERBdU1qRXlNek0wTURFc01DNHlNVEl6TXpRd01Td3RNQzQxTURRMU5EazROaXd0TVRNME5DNDVNamdzTmpneExqa3pNRE0zS1NJS0lDQWdJQ0FnSUNBZ2FXUTlJbWMwTFRVdE5pSUtJQ0FnSUNBZ0lDQWdhVzVyYzJOaGNHVTZaWGh3YjNKMExXWnBiR1Z1WVcxbFBTSXZiM0IwTDJ4aGJYQndMMmgwWkc5amN5OWtjblZ3WVd3dmMybDBaWE12WkdWbVlYVnNkQzltYVd4bGN5OW9OWEF2WkdWMlpXeHZjRzFsYm5RdmFEVndMV2x1ZEdWeVlXTjBhWFpsTFhacFpHVnZMM055WXk5bmRXa3ZjMk52Y21WZmFEVndYM2RvYVhSbExuQnVaeUlLSUNBZ0lDQWdJQ0FnYVc1cmMyTmhjR1U2Wlhod2IzSjBMWGhrY0drOUlqa3VNelV3TURBd05DSUtJQ0FnSUNBZ0lDQWdhVzVyYzJOaGNHVTZaWGh3YjNKMExYbGtjR2s5SWprdU16VXdNREF3TkNJS0lDQWdJQ0FnSUNBZ2MzUjViR1U5SW1OdmJHOXlPaU13TURBd01EQTdZMnhwY0MxeWRXeGxPbTV2Ym5wbGNtODdaR2x6Y0d4aGVUcHBibXhwYm1VN2IzWmxjbVpzYjNjNmRtbHphV0pzWlR0MmFYTnBZbWxzYVhSNU9uWnBjMmxpYkdVN2IzQmhZMmwwZVRveE8ybHpiMnhoZEdsdmJqcHBjMjlzWVhSbE8yMXBlQzFpYkdWdVpDMXRiMlJsT201dmNtMWhiRHRqYjJ4dmNpMXBiblJsY25CdmJHRjBhVzl1T25OU1IwSTdZMjlzYjNJdGFXNTBaWEp3YjJ4aGRHbHZiaTFtYVd4MFpYSnpPbXhwYm1WaGNsSkhRanR6YjJ4cFpDMWpiMnh2Y2pvak1EQXdNREF3TzNOdmJHbGtMVzl3WVdOcGRIazZNVHRtYVd4c09pTm1OMk5tTldNN1ptbHNiQzF2Y0dGamFYUjVPakU3Wm1sc2JDMXlkV3hsT201dmJucGxjbTg3YzNSeWIydGxMWGRwWkhSb09qRTdjM1J5YjJ0bExXeHBibVZqWVhBNlluVjBkRHR6ZEhKdmEyVXRiR2x1WldwdmFXNDZiV2wwWlhJN2MzUnliMnRsTFcxcGRHVnliR2x0YVhRNk5EdHpkSEp2YTJVdFpHRnphR0Z5Y21GNU9tNXZibVU3YzNSeWIydGxMV1JoYzJodlptWnpaWFE2TUR0emRISnZhMlV0YjNCaFkybDBlVG94TzJOdmJHOXlMWEpsYm1SbGNtbHVaenBoZFhSdk8ybHRZV2RsTFhKbGJtUmxjbWx1WnpwaGRYUnZPM05vWVhCbExYSmxibVJsY21sdVp6cGhkWFJ2TzNSbGVIUXRjbVZ1WkdWeWFXNW5PbUYxZEc4N1pXNWhZbXhsTFdKaFkydG5jbTkxYm1RNllXTmpkVzExYkdGMFpTSStDaUFnSUNBZ0lDQWdQSEJoZEdnS0lDQWdJQ0FnSUNBZ0lDQmtQU0p0SURNNU5DNDNNRFVzTlRreExqTTJJREV6TGpBek15d3hOVFl1TXpreklHTWdNeTQzTWpRc016a3VNRGs0SURVd0xqSTJPU3cxTnk0M01UWWdPREF1TURVNExETXhMalkxTVNCTUlEWXdOUzR3T1RFc05qY3pMakk0SUdNZ01URXVNVGN4TEMweE1TNHhOekVnTWpjdU9USTNMQzB4TkM0NE9UVWdOREl1T0RJeUxDMHhNUzR4TnpFZ2JDQXhOVEl1TmpZNUxETTNMakl6TmlCaklETTVMakE1T0N3NUxqTXdPU0EzTUM0M05Ea3NMVEk1TGpjNE9TQTFNeTQ1T1RNc0xUWTNMakF5TlNCTUlEYzRPUzQwTVRFc05EZzNMakE1T0NCaklDMDFMalU0TlN3dE1UUXVPRGsxSUMwMUxqVTROU3d0TXpFdU5qVXhJRE11TnpJMExDMDBOQzQyT0RRZ2JDQTRNUzQ1TWl3dE1UTTFMamt4TXlCaklESXdMalE0TEMwek15NDFNVE1nTFRjdU5EUTNMQzAzTmk0ek16VWdMVFEyTGpVME5Td3ROekl1TmpFeElHd2dMVEUxT0M0eU5UVXNNVGd1TmpFNElHTWdMVEUyTGpjMU5pd3hMamcyTWlBdE16RXVOalV4TEMwekxqY3lOQ0F0TkRBdU9UWXNMVEUyTGpjMU5pQk1JRFV5Tmk0NE9UVXNNVEUwTGpjek5DQkRJRFV3TUM0NE15dzROQzQ1TkRVZ05EVXdMalUyTERrM0xqazNPQ0EwTkRNdU1URXpMREV6Tnk0d056WWdiQ0F0TXpFdU5qVXhMREUxTkM0MU16RWdZeUF0TXk0M01qUXNNVFF1T0RrMUlDMHhNeTR3TXpNc01qY3VPVEkzSUMweU55NDVNamNzTXpNdU5URXpJR3dnTFRFME55NHdPRFFzTmpFdU5EUWdZeUF0TXpVdU16YzFMREUwTGpnNU5TQXRNemt1TURrNExEWTNMakF5TlNBdE15NDNNalFzT0RVdU5qUTBJRXdnTXpjd0xqVXdNaXcxTlRBdU5DQmpJREV6TGpBek15d3hNUzR4TnpFZ01qSXVNelF5TERJMkxqQTJOU0F5TkM0eU1EUXNOREF1T1RZZ2JDQXRNQzR3TURFc01DQjZJZ29nSUNBZ0lDQWdJQ0FnSUdsa1BTSndZWFJvTmkwekxUSWlDaUFnSUNBZ0lDQWdJQ0FnYVc1cmMyTmhjR1U2WTI5dWJtVmpkRzl5TFdOMWNuWmhkSFZ5WlQwaU1DSUtJQ0FnSUNBZ0lDQWdJQ0J6ZEhsc1pUMGlZMjlzYjNJNkl6QXdNREF3TUR0amJHbHdMWEoxYkdVNmJtOXVlbVZ5Ynp0a2FYTndiR0Y1T21sdWJHbHVaVHR2ZG1WeVpteHZkenAyYVhOcFlteGxPM1pwYzJsaWFXeHBkSGs2ZG1semFXSnNaVHRwYzI5c1lYUnBiMjQ2YVhOdmJHRjBaVHR0YVhndFlteGxibVF0Ylc5a1pUcHViM0p0WVd3N1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJqcHpVa2RDTzJOdmJHOXlMV2x1ZEdWeWNHOXNZWFJwYjI0dFptbHNkR1Z5Y3pwc2FXNWxZWEpTUjBJN2MyOXNhV1F0WTI5c2IzSTZJekF3TURBd01EdHpiMnhwWkMxdmNHRmphWFI1T2pFN1ptbHNiRG9qWmpkalpqVmpPMlpwYkd3dGIzQmhZMmwwZVRveE8yWnBiR3d0Y25Wc1pUcHViMjU2WlhKdk8zTjBjbTlyWlMxM2FXUjBhRG94TzNOMGNtOXJaUzFzYVc1bFkyRndPbUoxZEhRN2MzUnliMnRsTFd4cGJtVnFiMmx1T20xcGRHVnlPM04wY205clpTMXRhWFJsY214cGJXbDBPalE3YzNSeWIydGxMV1JoYzJoaGNuSmhlVHB1YjI1bE8zTjBjbTlyWlMxa1lYTm9iMlptYzJWME9qQTdjM1J5YjJ0bExXOXdZV05wZEhrNk1UdGpiMnh2Y2kxeVpXNWtaWEpwYm1jNllYVjBienRwYldGblpTMXlaVzVrWlhKcGJtYzZZWFYwYnp0emFHRndaUzF5Wlc1a1pYSnBibWM2WVhWMGJ6dDBaWGgwTFhKbGJtUmxjbWx1WnpwaGRYUnZPMlZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbUZqWTNWdGRXeGhkR1VpSUM4K0NpQWdJQ0FnSUR3dlp6NEtJQ0FnSUR3dlp6NEtJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2VzL3N0YXJiYWRnZS5zdmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==