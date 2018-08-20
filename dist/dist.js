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
     * Get button label width.
     *
     * @return {number} Button label width.
     */

  }, {
    key: 'getLabelHeight',
    value: function getLabelHeight() {
      return this.buttonLabel.offsetHeight;
    }

    /**
     * Get button width.
     *
     * @return {number} Button width.
     */

  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.button.offsetWidth;
    }

    /**
     * Set button max Height.
     *
     * @param {number} height - Button height.
     */

  }, {
    key: 'setMaxHeight',
    value: function setMaxHeight(height) {
      this.button.style.maxHeight = height;
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
        buttonClicked: _this.checkWon
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

    // Base font size to be used if possible
    _this.fontSizeBase = parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'));

    // Resize font sizes and thus board
    _this.on('resize', function () {
      setTimeout(function () {
        _this.resizeButtons();
      }, 0);
    });
    return _this;
  }

  /**
   * Resize buttons.
   *
   * @param {object} [arguments] Optional arguments.
   * @param {number} [arguments.startFontSize] Shrink factor.
   * @param {number} [arguments.fontSizeMin=-Infinity] Minimum font size in px.
   * @param {number} [arguments.fontSizeMax=Infinity] Maximum font size in px.
   */


  _createClass(Board, [{
    key: 'resizeButtons',
    value: function resizeButtons() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$startFontSize = _ref.startFontSize,
          startFontSize = _ref$startFontSize === undefined ? this.fontSizeBase : _ref$startFontSize,
          _ref$fontSizeMin = _ref.fontSizeMin,
          fontSizeMin = _ref$fontSizeMin === undefined ? -Infinity : _ref$fontSizeMin,
          _ref$fontSizeMax = _ref.fontSizeMax,
          fontSizeMax = _ref$fontSizeMax === undefined ? Infinity : _ref$fontSizeMax;

      if (this.preventResize === true) {
        return;
      }

      var fontSize = Math.min(Math.max(startFontSize, fontSizeMin), fontSizeMax);

      // Determine button with widest label as future reference
      if (!this.widestLabelId) {
        var lengths = this.buttons.map(function (button) {
          return button.getLabelWidth();
        });
        this.widestLabelId = lengths.reduce(function (max, cur, index, arr) {
          return cur > arr[max] ? index : max;
        }, 0);
      }

      // Determine button with highest label as future reference
      if (!this.highestLabelId) {
        var widths = this.buttons.map(function (button) {
          return button.getLabelHeight();
        });
        this.highestLabelId = widths.reduce(function (max, cur, index, arr) {
          return cur > arr[max] ? index : max;
        }, 0);
      }

      // Set values
      this.board.style.fontSize = fontSize + 'px';

      var buttonWidth = this.buttons[this.widestLabelId].getWidth();

      // This feels really wrong, but gives us cross-browser squareness ...
      this.buttons.forEach(function (button) {
        button.setMaxHeight(buttonWidth + 'px');
      });

      // Fit labels into buttons
      if (fontSize > fontSizeMin) {
        var longestLabelWidth = this.buttons[this.widestLabelId].getLabelWidth();
        var highestLabelHeight = this.buttons[this.highestLabelId].getLabelHeight();

        if (longestLabelWidth > buttonWidth || highestLabelHeight > buttonWidth) {
          this.resizeButtons({ startFontSize: startFontSize * 0.9 });
        }
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
      var _this2 = this;

      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

      var buttons = [];
      for (var i = 0; i < size * size; i++) {
        var button = new _button2.default(i);
        button.on('click', function () {
          _this2.params.buttonClicked();
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
        var label = filler.splice(Math.floor(Math.random() * filler.length), 1)[0];
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
      var _this3 = this;

      var matches = [];
      patterns.forEach(function (pattern) {
        if (pattern.every(function (field) {
          return _this3.buttons[field].isActivated();
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
      delete this.widestLabelId;
      delete this.highestLabelId;
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
      var _this4 = this;

      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      /**
       * Animate a pattern.
       *
       * @param {object[]} pattern - IDs of buttons to be animated.
       * @param {number} [delay=100] - Optional delay between each animation.
       */
      var animatePattern = function animatePattern(pattern) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

        // Stop resizing when animation plays
        _this4.preventResize = true;

        if (pattern.length > 0) {
          _this4.buttons[pattern[0]].animate();
          setTimeout(function () {
            animatePattern(pattern.slice(1));
          }, delay);
        } else {
          setTimeout(function () {
            _this4.preventResize = false;
          });
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
exports.push([module.i, ".h5p-bingo .h5p-bingo-board {\n  display: flex;\n  flex-direction: row;\n  background: #f22626;\n  padding: 1%;\n  line-height: 1.3em;\n}\n\n.h5p-bingo .h5p-bingo-column {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  min-width: 0;\n}\n\n.h5p-bingo .h5p-bingo-button {\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  align-items: center;\n  border: 0.1em solid white;\n  border-radius: 0.5em;\n  position: relative;\n  text-align: center;\n  background: white;\n  transition: transform 0.8s;\n  box-shadow: 0px 0px 1.5em 0.2em rgba(0,0,0,0.31);\n  overflow: hidden;\n  width: calc(90% - 0.2em);\n  margin: 5% 0;\n  /* white-space: nowrap; */\n}\n\n.h5p-bingo .h5p-bingo-button:not(.h5p-button-blocked):hover {\n  cursor: pointer;\n  background-color: #efefef;\n}\n\n.h5p-bingo .h5p-bingo-button:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n\n.h5p-bingo .h5p-bingo-button-label {\n  opacity: 1;\n  transition: opacity 0.1s ease 0.2s, display 0.1s ease 0.2s;\n}\n\n.h5p-bingo .h5p-bingo-button-symbol {\n  opacity: 1;\n  width: 100%;\n  height: 100%;\n  background: url(" + __webpack_require__(8) + ") center/80% no-repeat;\n  position: absolute;\n  transition: opacity 0.1s ease 0.2s, display 0.1s ease 0.2s;\n}\n\n.h5p-bingo .h5p-button-activated {\n  -webkit-transform: rotateY(-180deg);\n  -moz-transform: rotateY(-180deg);\n  transform: rotateY(-180deg);\n  -ms-transform: scale(0,1.1);\n}\n\n.h5p-bingo .h5p-button-spinning {\n  -webkit-transform: rotateY(-720deg);\n  -moz-transform: rotateY(-720deg);\n  transform: rotateY(-720deg);\n  -ms-transform: scale(0,1.1);\n}\n\n.h5p-bingo .h5p-button-blocked {\n}\n\n.h5p-bingo .h5p-button-transparent {\n  opacity: 0;\n}\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGYxYTUxYmRiMzU5ODBhZTRlMDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U2YTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvZGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcmJhZGdlLnN2ZyJdLCJuYW1lcyI6WyJCdXR0b24iLCJpZCIsImxhYmVsIiwiYnV0dG9uTGFiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJidXR0b25TeW1ib2wiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0Jsb2NrZWQiLCJ0b2dnbGVBY3RpdmF0ZWQiLCJ0cmlnZ2VyIiwiYmxvY2tlZCIsInRvZ2dsZSIsImNvbnRhaW5zIiwiYWN0aXZhdGVkIiwiaXNBY3RpdmF0ZWQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImhlaWdodCIsInN0eWxlIiwibWF4SGVpZ2h0IiwidG9nZ2xlQmxvY2tlZCIsImR1cmF0aW9uIiwidGhhdCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJINVAiLCJFdmVudERpc3BhdGNoZXIiLCJINVBfQklOR09fREVGQVVMVF9ERVNDUklQVElPTiIsIkJpbmdvIiwicGFyYW1zIiwiY29udGVudElkIiwiZXh0cmFzIiwiYmVoYXZpb3VyIiwiZW5hYmxlU29sdXRpb25zQnV0dG9uIiwiZW5hYmxlUmV0cnkiLCJqb2tlciIsInNpemUiLCJidWlsZFdpbm5pbmdQYXR0ZXJucyIsInBhdHRlcm5zIiwiZGlhZ29uYWwxIiwiZGlhZ29uYWwyIiwiaSIsImNvbCIsInJvdyIsImoiLCJwdXNoIiwid2lubmluZ1BhdHRlcm5zIiwiY2hlY2tXb24iLCJ3aW5uZXJzIiwiYm9hcmQiLCJnZXRNYXRjaGVzIiwibGVuZ3RoIiwiYmxvY2tCdXR0b25zIiwiYW5pbWF0ZVBhdHRlcm5zIiwiYmluZ28iLCJnZXRYQVBJQW5zd2VyRXZlbnQiLCJzaG93QnV0dG9uIiwicmVnaXN0ZXJEb21FbGVtZW50cyIsIm1lZGlhIiwidHlwZSIsImxpYnJhcnkiLCJzcGxpdCIsImZpbGUiLCJzZXRJbWFnZSIsInBhdGgiLCJkaXNhYmxlSW1hZ2Vab29taW5nIiwiYWx0IiwidGl0bGUiLCJzb3VyY2VzIiwic2V0VmlkZW8iLCJ0YXNrRGVzY3JpcHRpb24iLCJpbnRyb2R1Y3Rpb24iLCJzZXRJbnRyb2R1Y3Rpb24iLCJ3b3JkcyIsInNodWZmbGVPblJldHJ5IiwiYnV0dG9uQ2xpY2tlZCIsInNldENvbnRlbnQiLCJnZXRET01FbGVtZW50IiwiYWRkQnV0dG9ucyIsIm9uIiwiYWRkQnV0dG9uIiwidHJ5QWdhaW4iLCJyZXNldFRhc2siLCJnZXRBbnN3ZXJHaXZlbiIsImdldFNjb3JlIiwiZ2V0TWF4U2NvcmUiLCJzaG93U29sdXRpb25zIiwidW5kZWZpbmVkIiwiaGlkZUJ1dHRvbiIsInJlc2V0IiwiZ2V0WEFQSURhdGEiLCJzdGF0ZW1lbnQiLCJkYXRhIiwieEFQSUV2ZW50IiwiY3JlYXRlQmluZ29YQVBJRXZlbnQiLCJzZXRTY29yZWRSZXN1bHQiLCJoYXNCaW5nbyIsInJlc3VsdCIsInJlc3BvbnNlIiwiZ2V0QWN0aXZhdGVkQnV0dG9uc0xhYmVscyIsImpvaW4iLCJ2ZXJiIiwiY3JlYXRlWEFQSUV2ZW50VGVtcGxhdGUiLCJleHRlbmQiLCJnZXRWZXJpZmllZFN0YXRlbWVudFZhbHVlIiwiZ2V0eEFQSURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZ2V0VGl0bGUiLCJpbnRlcmFjdGlvblR5cGUiLCJhcmd1bWVudHMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIlF1ZXN0aW9uIiwiQm9hcmQiLCJidXR0b25zIiwiaW5pdEJ1dHRvbnMiLCJzZXRCdXR0b25MYWJlbHMiLCJzZXRKb2tlciIsImZvbnRTaXplQmFzZSIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvZHkiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicmVzaXplQnV0dG9ucyIsInN0YXJ0Rm9udFNpemUiLCJmb250U2l6ZU1pbiIsIkluZmluaXR5IiwiZm9udFNpemVNYXgiLCJwcmV2ZW50UmVzaXplIiwiZm9udFNpemUiLCJNYXRoIiwibWluIiwibWF4Iiwid2lkZXN0TGFiZWxJZCIsImxlbmd0aHMiLCJtYXAiLCJnZXRMYWJlbFdpZHRoIiwicmVkdWNlIiwiY3VyIiwiaW5kZXgiLCJhcnIiLCJoaWdoZXN0TGFiZWxJZCIsIndpZHRocyIsImdldExhYmVsSGVpZ2h0IiwiYnV0dG9uV2lkdGgiLCJnZXRXaWR0aCIsImZvckVhY2giLCJzZXRNYXhIZWlnaHQiLCJsb25nZXN0TGFiZWxXaWR0aCIsImhpZ2hlc3RMYWJlbEhlaWdodCIsImZpbGxlciIsInNsaWNlIiwic3BsaWNlIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRMYWJlbCIsImVuYWJsZWQiLCJtYXRjaGVzIiwicGF0dGVybiIsImV2ZXJ5IiwiZmllbGQiLCJmaWx0ZXIiLCJnZXRMYWJlbCIsImRlbGF5IiwiYW5pbWF0ZVBhdHRlcm4iLCJhbmltYXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyUEEscUNBQXFDLDRvViIsImZpbGUiOiJkaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZjFhNTFiZGIzNTk4MGFlNGUwNCIsIi8qIGpzbGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbHMgSDVQICovXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEg1UC5FdmVudERpc3BhdGNoZXIge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIEJ1dHRvbidzIElELlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xhYmVsXSAtIEJ1dHRvbidzIGxhYmVsLlxuICAgKi9cbiAgY29uc3RydWN0b3IgKGlkLCBsYWJlbCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5idXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYnV0dG9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnaDVwLWJpbmdvLWJ1dHRvbi1sYWJlbCcpO1xuICAgIGlmICh0eXBlb2YgbGFiZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmJ1dHRvbkxhYmVsLmlubmVySFRNTCA9IGxhYmVsO1xuICAgIH1cblxuICAgIHRoaXMuYnV0dG9uU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5idXR0b25TeW1ib2wuY2xhc3NMaXN0LmFkZCgnaDVwLWJpbmdvLWJ1dHRvbi1zeW1ib2wnKTtcbiAgICB0aGlzLmJ1dHRvblN5bWJvbC5jbGFzc0xpc3QuYWRkKCdoNXAtYnV0dG9uLXRyYW5zcGFyZW50Jyk7XG5cbiAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2g1cC1iaW5nby1idXR0b24nKTtcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGlkKTtcbiAgICB0aGlzLmJ1dHRvbi5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkxhYmVsKTtcbiAgICB0aGlzLmJ1dHRvbi5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvblN5bWJvbCk7XG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNCbG9ja2VkKCkpIHtcbiAgICAgICAgdGhpcy50b2dnbGVBY3RpdmF0ZWQoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIHRoaXMuaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYnV0dG9uJ3MgRE9NIGVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gQnV0dG9uJ3MgRE9NIGVsZW1lbnQuXG4gICAqL1xuICBnZXRET01FbGVtZW50ICgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b247XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGJ1dHRvbidzIGJsb2NrZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Jsb2NrZWRdIC0gT3B0aW9uYWwgb3ZlcnJpZGUuXG4gICAqL1xuICB0b2dnbGVCbG9ja2VkIChibG9ja2VkKSB7XG4gICAgYmxvY2tlZCA9ICghdGhpcy5pc0Jsb2NrZWQoKSB8fCBibG9ja2VkKSA/IHRydWUgOiBmYWxzZTtcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoNXAtYnV0dG9uLWJsb2NrZWQnLCBibG9ja2VkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYnV0dG9uIGlzIGJsb2NrZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUsIGlmIGJ1dHRvbiBpcyBhY3RpdmF0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBpc0Jsb2NrZWQgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2g1cC1idXR0b24tYmxvY2tlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBidXR0b24ncyBhY3RpdmF0ZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Jsb2NrZWRdIC0gT3B0aW9uYWwgb3ZlcnJpZGUuXG4gICAqL1xuICB0b2dnbGVBY3RpdmF0ZWQgKGFjdGl2YXRlZCkge1xuICAgIGlmICh0aGlzLmlzQmxvY2tlZCAoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFjdGl2YXRlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFjdGl2YXRlZCA9ICF0aGlzLmlzQWN0aXZhdGVkKCkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2g1cC1idXR0b24tYWN0aXZhdGVkJywgYWN0aXZhdGVkKTtcbiAgICB0aGlzLmJ1dHRvbkxhYmVsLmNsYXNzTGlzdC50b2dnbGUoJ2g1cC1idXR0b24tdHJhbnNwYXJlbnQnLCBhY3RpdmF0ZWQpO1xuICAgIHRoaXMuYnV0dG9uU3ltYm9sLmNsYXNzTGlzdC50b2dnbGUoJ2g1cC1idXR0b24tdHJhbnNwYXJlbnQnLCAhYWN0aXZhdGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYnV0dG9uIGlzIGFjdGl2YXRlZC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSwgaWYgYnV0dG9uIGlzIGFjdGl2YXRlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIGlzQWN0aXZhdGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdoNXAtYnV0dG9uLWFjdGl2YXRlZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBidXR0b24gbGFiZWwuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIEJ1dHRvbiBsYWJlbC5cbiAgICovXG4gIHNldExhYmVsIChsYWJlbCkge1xuICAgIHRoaXMuYnV0dG9uTGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJ1dHRvbiBsYWJlbC5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSBCdXR0b24gbGFiZWwuXG4gICAqL1xuICBnZXRMYWJlbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uTGFiZWwuaW5uZXJIVE1MO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBidXR0b24gbGFiZWwgd2lkdGguXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gQnV0dG9uIGxhYmVsIHdpZHRoLlxuICAgKi9cbiAgZ2V0TGFiZWxXaWR0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uTGFiZWwub2Zmc2V0V2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJ1dHRvbiBsYWJlbCB3aWR0aC5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSBCdXR0b24gbGFiZWwgd2lkdGguXG4gICAqL1xuICBnZXRMYWJlbEhlaWdodCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uTGFiZWwub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBidXR0b24gd2lkdGguXG4gICAqXG4gICAqIEByZXR1cm4ge251bWJlcn0gQnV0dG9uIHdpZHRoLlxuICAgKi9cbiAgZ2V0V2lkdGggKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbi5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYnV0dG9uIG1heCBIZWlnaHQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBCdXR0b24gaGVpZ2h0LlxuICAgKi9cbiAgc2V0TWF4SGVpZ2h0IChoZWlnaHQpIHtcbiAgICB0aGlzLmJ1dHRvbi5zdHlsZS5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgYnV0dG9uIHN0YXRlcy5cbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLnRvZ2dsZUJsb2NrZWQoZmFsc2UpO1xuICAgIHRoaXMudG9nZ2xlQWN0aXZhdGVkKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRlIGJ1dHRvbi5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0zMDBdIC0gRHVyYXRpb24gaW4gbXMuXG4gICAqL1xuICBhbmltYXRlIChkdXJhdGlvbj0zMDApIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2g1cC1idXR0b24tc3Bpbm5pbmcnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoYXQuYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2g1cC1idXR0b24tc3Bpbm5pbmcnKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvYnV0dG9uLmpzIiwiLyoganNsaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFscyBINVAgKi9cblxuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuXG4vLyBVc2VkIGZvciB4QVBJIHRpdGxlIGFuZCB0YXNrIGRlc2NyaXB0aW9uXG5jb25zdCBINVBfQklOR09fREVGQVVMVF9ERVNDUklQVElPTiA9ICdCaW5nbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmdvIGV4dGVuZHMgSDVQLlF1ZXN0aW9uIHtcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBQYXJhbWV0ZXJzIGZyb20gc2VtYW50aWNzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudElkIC0gQ29udGVudCBJRC5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtleHRyYXNdIC0gQ29udGVudCBkYXRhIChtZXRhZGF0YS9zYXZlcyk7XG4gICAqL1xuICBjb25zdHJ1Y3RvciAocGFyYW1zLCBjb250ZW50SWQsIGV4dHJhcyA9IHt9KSB7XG4gICAgc3VwZXIoJ2JpbmdvJyk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICB0aGlzLnBhcmFtcy5iZWhhdmlvdXIgPSB0aGlzLnBhcmFtcy5iZWhhdmlvdXIgfHwge307XG5cbiAgICAvKlxuICAgICAqIHRoaXMucGFyYW1zLmJlaGF2aW91ci5lbmFibGVTb2x1dGlvbnNCdXR0b24gYW5kIHRoaXMucGFyYW1zLmJlaGF2aW91ci5lbmFibGVSZXRyeSBhcmUgdXNlZCBieVxuICAgICAqIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTh9IGFuZFxuICAgICAqIHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTl9XG4gICAgICovXG4gICAgdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVNvbHV0aW9uc0J1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMucGFyYW1zLmJlaGF2aW91ci5lbmFibGVSZXRyeSA9IHRoaXMucGFyYW1zLmJlaGF2aW91ci5lbmFibGVSZXRyeSB8fCBmYWxzZTtcblxuICAgIHRoaXMucGFyYW1zLmpva2VyID0gdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmpva2VyIHx8IGZhbHNlO1xuICAgIHRoaXMucGFyYW1zLnNpemUgPSBwYXJhbXMuc2l6ZSB8fCA1O1xuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYWxsIHdpbm5pbmcgcGF0dGVybnMgZm9yIGEgQmluZ28gc2hlZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIFNoZWV0IHNpemUuXG4gICAgICogQHJldHVybiB7b2JqZWN0W119IEFycmF5cyBjb250YWluaW5nIHBhdHRlcm5zLlxuICAgICAqL1xuICAgIHRoaXMuYnVpbGRXaW5uaW5nUGF0dGVybnMgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgY29uc3QgcGF0dGVybnMgPSBbXTtcbiAgICAgIGNvbnN0IGRpYWdvbmFsMSA9IFtdO1xuICAgICAgY29uc3QgZGlhZ29uYWwyID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBjb25zdCBjb2wgPSBbXTtcbiAgICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgY29sLnB1c2goaSAqIHNpemUgKyBqKTtcbiAgICAgICAgICByb3cucHVzaChqICogc2l6ZSArIGkpO1xuICAgICAgICB9XG4gICAgICAgIHBhdHRlcm5zLnB1c2goY29sKTtcbiAgICAgICAgcGF0dGVybnMucHVzaChyb3cpO1xuXG4gICAgICAgIGRpYWdvbmFsMS5wdXNoKGkgKiAoc2l6ZSArIDEpKTtcbiAgICAgICAgZGlhZ29uYWwyLnB1c2goKGkgKyAxKSAqIChzaXplIC0gMSkpO1xuICAgICAgfVxuICAgICAgcGF0dGVybnMucHVzaChkaWFnb25hbDEpO1xuICAgICAgcGF0dGVybnMucHVzaChkaWFnb25hbDIpO1xuICAgICAgcmV0dXJuIHBhdHRlcm5zO1xuICAgIH07XG5cbiAgICB0aGlzLndpbm5pbmdQYXR0ZXJucyA9IHRoaXMuYnVpbGRXaW5uaW5nUGF0dGVybnModGhpcy5wYXJhbXMuc2l6ZSk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBnYW1lIGhhcyBiZWVuIHdvbi5cbiAgICAgKi9cbiAgICB0aGlzLmNoZWNrV29uID0gKCkgPT4ge1xuICAgICAgY29uc3Qgd2lubmVycyA9IHRoaXMuYm9hcmQuZ2V0TWF0Y2hlcyh0aGlzLndpbm5pbmdQYXR0ZXJucyk7XG5cbiAgICAgIGlmICh3aW5uZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLmJvYXJkLmJsb2NrQnV0dG9ucygpO1xuICAgICAgICB0aGlzLmJvYXJkLmFuaW1hdGVQYXR0ZXJucyh3aW5uZXJzKTtcbiAgICAgICAgdGhpcy5iaW5nbyA9IHRydWU7XG5cbiAgICAgICAgLy8gVHJpZ2dlciB4QVBJIHN0YXRlbWVudFxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5nZXRYQVBJQW5zd2VyRXZlbnQoKSk7XG5cbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmJlaGF2aW91ci5lbmFibGVSZXRyeSkge1xuICAgICAgICAgIHRoaXMuc2hvd0J1dHRvbigndHJ5LWFnYWluJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgdGhlIERPTSBlbGVtZW50cyB3aXRoIEg1UC5RdWVzdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLnJlZ2lzdGVyRG9tRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAvLyBTZXQgb3B0aW9uYWwgbWVkaWFcbiAgICAgIHZhciBtZWRpYSA9IHRoaXMucGFyYW1zLm1lZGlhLnR5cGU7XG4gICAgICBpZiAobWVkaWEgJiYgbWVkaWEubGlicmFyeSkge1xuICAgICAgICB2YXIgdHlwZSA9IG1lZGlhLmxpYnJhcnkuc3BsaXQoJyAnKVswXTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdINVAuSW1hZ2UnKSB7XG4gICAgICAgICAgaWYgKG1lZGlhLnBhcmFtcy5maWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEltYWdlKG1lZGlhLnBhcmFtcy5maWxlLnBhdGgsIHtcbiAgICAgICAgICAgICAgZGlzYWJsZUltYWdlWm9vbWluZzogdGhpcy5wYXJhbXMubWVkaWEuZGlzYWJsZUltYWdlWm9vbWluZyxcbiAgICAgICAgICAgICAgYWx0OiBtZWRpYS5wYXJhbXMuYWx0LFxuICAgICAgICAgICAgICB0aXRsZTogbWVkaWEucGFyYW1zLnRpdGxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ0g1UC5WaWRlbycpIHtcbiAgICAgICAgICBpZiAobWVkaWEucGFyYW1zLnNvdXJjZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlkZW8obWVkaWEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZWdpc3RlciBvcHRpb25hbCB0YXNrIGludHJvZHVjdGlvbiB0ZXh0XG4gICAgICBpZiAodGhpcy5wYXJhbXMudGFza0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuaW50cm9kdWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuaW50cm9kdWN0aW9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICB0aGlzLmludHJvZHVjdGlvbi5pbm5lckhUTUwgPSB0aGlzLnBhcmFtcy50YXNrRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuc2V0SW50cm9kdWN0aW9uKHRoaXMuaW50cm9kdWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVnaXN0ZXIgY29udGVudFxuICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh7XG4gICAgICAgIHdvcmRzOiB0aGlzLnBhcmFtcy53b3JkcyxcbiAgICAgICAgc2l6ZTogdGhpcy5wYXJhbXMuc2l6ZSxcbiAgICAgICAgc2h1ZmZsZU9uUmV0cnk6IHRoaXMucGFyYW1zLmJlaGF2aW91ci5zaHVmZmxlT25SZXRyeSxcbiAgICAgICAgam9rZXI6IHRoaXMucGFyYW1zLmpva2VyLFxuICAgICAgICBidXR0b25DbGlja2VkOiB0aGlzLmNoZWNrV29uXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0Q29udGVudCh0aGlzLmJvYXJkLmdldERPTUVsZW1lbnQoKSk7XG5cbiAgICAgIC8vIEFkZCBidXR0b25zXG4gICAgICB0aGlzLmFkZEJ1dHRvbnMoKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYm9hcmQudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICB9LCAwKTtcblxuICAgICAgdGhpcy5vbigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmJvYXJkLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhbGwgdGhlIGJ1dHRvbnMgdGhhdCBzaGFsbCBiZSBwYXNzZWQgdG8gSDVQLlF1ZXN0aW9uXG4gICAgICovXG4gICAgdGhpcy5hZGRCdXR0b25zID0gKCkgPT4ge1xuICAgICAgLy8gUmV0cnkgYnV0dG9uXG4gICAgICB0aGlzLmFkZEJ1dHRvbigndHJ5LWFnYWluJywgdGhpcy5wYXJhbXMudHJ5QWdhaW4sICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldFRhc2soKTtcbiAgICAgIH0sIGZhbHNlLCB7fSwge30pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBzb21lIGtpbmQgb2YgYW5zd2VyIHdhcyBnaXZlbiAtLSBub3QgYXBwbGljYWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUsIGlmIGFuc3dlciB3YXMgZ2l2ZW4uXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci0xfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0QW5zd2VyR2l2ZW4gPSAoKSA9PiB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGxhdGVzdCBzY29yZSAtLSBub3QgYXBwbGljYWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gTGF0ZXN0IHNjb3JlLlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItMn1cbiAgICAgKi9cbiAgICB0aGlzLmdldFNjb3JlID0gKCkgPT4gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEdldCBtYXhpbXVtIHBvc3NpYmxlIHNjb3JlIC0tIG5vdCBhcHBsaWNhYmxlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBTY29yZSBuZWNlc3NhcnkgZm9yIG1hc3RlcmluZy5cbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTN9XG4gICAgICovXG4gICAgdGhpcy5nZXRNYXhTY29yZSA9ICgpID0+IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHNvbHV0aW9uIC0tIG5vdCBhcHBsaWNhYmxlLlxuICAgICAqXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci00fVxuICAgICAqL1xuICAgIHRoaXMuc2hvd1NvbHV0aW9ucyA9ICgpID0+IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRhc2suXG4gICAgICpcbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTV9XG4gICAgICovXG4gICAgdGhpcy5yZXNldFRhc2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmJpbmdvID0gZmFsc2U7XG4gICAgICB0aGlzLmhpZGVCdXR0b24oJ3RyeS1hZ2FpbicpO1xuICAgICAgdGhpcy5ib2FyZC5yZXNldCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgeEFQSSBkYXRhLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fSB4QVBJIHN0YXRlbWVudC5cbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTZ9XG4gICAgICovXG4gICAgdGhpcy5nZXRYQVBJRGF0YSA9ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRlbWVudDogdGhpcy5nZXRYQVBJQW5zd2VyRXZlbnQoKS5kYXRhLnN0YXRlbWVudFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQnVpbGQgeEFQSSBhbnN3ZXIgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtINVAuWEFQSUV2ZW50fSBYQVBJIGFuc3dlciBldmVudC5cbiAgICAgKi9cbiAgICB0aGlzLmdldFhBUElBbnN3ZXJFdmVudCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHhBUElFdmVudCA9IHRoaXMuY3JlYXRlQmluZ29YQVBJRXZlbnQoJ2Fuc3dlcmVkJyk7XG5cbiAgICAgIHhBUElFdmVudC5zZXRTY29yZWRSZXN1bHQodGhpcy5nZXRTY29yZSgpLCB0aGlzLmdldE1heFNjb3JlKCksIHRoaXMsIHRydWUsIHRoaXMuaGFzQmluZ28oKSk7XG4gICAgICB4QVBJRXZlbnQuZGF0YS5zdGF0ZW1lbnQucmVzdWx0LnJlc3BvbnNlID0gdGhpcy5ib2FyZFxuICAgICAgICAuZ2V0QWN0aXZhdGVkQnV0dG9uc0xhYmVscygpXG4gICAgICAgIC5qb2luKCdbLF0nKTtcblxuICAgICAgcmV0dXJuIHhBUElFdmVudDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIHhBUEkgZXZlbnQgZm9yIEJpbmdvLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZlcmIgLSBTaG9ydCBpZCBvZiB0aGUgdmVyYiB3ZSB3YW50IHRvIHRyaWdnZXIuXG4gICAgICogQHJldHVybiB7SDVQLlhBUElFdmVudH0gRXZlbnQgdGVtcGxhdGUuXG4gICAgICovXG4gICAgdGhpcy5jcmVhdGVCaW5nb1hBUElFdmVudCA9ICh2ZXJiKSA9PiB7XG4gICAgICBjb25zdCB4QVBJRXZlbnQgPSB0aGlzLmNyZWF0ZVhBUElFdmVudFRlbXBsYXRlKHZlcmIpO1xuICAgICAgdGhpcy5leHRlbmQoXG4gICAgICAgIHhBUElFdmVudC5nZXRWZXJpZmllZFN0YXRlbWVudFZhbHVlKFsnb2JqZWN0JywgJ2RlZmluaXRpb24nXSksXG4gICAgICAgIHRoaXMuZ2V0eEFQSURlZmluaXRpb24oKSk7XG4gICAgICByZXR1cm4geEFQSUV2ZW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHhBUEkgZGVmaW5pdGlvbiBmb3IgdGhlIHhBUEkgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBYQVBJIGRlZmluaXRpb24uXG4gICAgICovXG4gICAgdGhpcy5nZXR4QVBJRGVmaW5pdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSB7fTtcbiAgICAgIGRlZmluaXRpb24ubmFtZSA9IHsnZW4tVVMnOiBINVBfQklOR09fREVGQVVMVF9ERVNDUklQVElPTn07XG4gICAgICBkZWZpbml0aW9uLmRlc2NyaXB0aW9uID0geydlbi1VUyc6IHRoaXMuZ2V0VGl0bGUoKX07XG4gICAgICBkZWZpbml0aW9uLnR5cGUgPSAnaHR0cDovL2FkbG5ldC5nb3YvZXhwYXBpL2FjdGl2aXRpZXMvY21pLmludGVyYWN0aW9uJztcbiAgICAgIGRlZmluaXRpb24uaW50ZXJhY3Rpb25UeXBlID0gJ290aGVyJztcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgeEFQSSBkZWZpbml0aW9uIGZvciB0aGUgeEFQSSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFhBUEkgZGVmaW5pdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLmdldFRpdGxlID0gKCkgPT4gKHRoaXMucGFyYW1zLnRhc2tEZXNjcmlwdGlvbikgPyB0aGlzLnBhcmFtcy50YXNrRGVzY3JpcHRpb24gOiBINVBfQklOR09fREVGQVVMVF9ERVNDUklQVElPTjtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCB3aW5uaW5nL2NvbXBsZXRpb24gc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlLCBpZiBCaW5nby5cbiAgICAgKi9cbiAgICB0aGlzLmhhc0JpbmdvID0gKCkgPT4gdGhpcy5iaW5nbztcblxuICAgIC8qKlxuICAgICAqIEV4dGVuZCBhbiBhcnJheSBqdXN0IGxpa2UgSlF1ZXJ5J3MgZXh0ZW5kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3VtZW50cyAtIE9iamVjdHMgdG8gYmUgbWVyZ2VkLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gTWVyZ2VkIG9iamVjdHMuXG4gICAgICovXG4gICAgdGhpcy5leHRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXVtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYXJndW1lbnRzW2ldW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIHRoaXMuZXh0ZW5kKGFyZ3VtZW50c1swXVtrZXldLCBhcmd1bWVudHNbaV1ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvYXBwLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IEJpbmdvIGZyb20gXCIuLi9zY3JpcHRzL2FwcFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vc2NyaXB0cy9idXR0b25cIjtcblxuLy8gTG9hZCBsaWJyYXJ5XG5INVAgPSBINVAgfHwge307XG5INVAuQmluZ28gPSBCaW5nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2Rpc3QuanMiLCIvKiBqc2xpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWxzIEg1UCAqL1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBINVAuRXZlbnREaXNwYXRjaGVyIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gUGFyYW1ldGVycyBmcm9tIHNlbWFudGljcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy53b3JkcyAtIExpc3Qgb2Ygd29yZHMvcGhyYXNlcy9udW1iZXJzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnNpemUgLSBTaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuc2h1ZmZsZU9uUmV0cnkgLSBJZiB0cnVlLCBib2FyZCB3aWxsIGJlIHNodWZmbGVkIG9uIHJldHJ5LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwYXJhbXMuYnV0dG9uQ2xpY2tlZCAtIENhbGxiYWNrIHRvIGNoZWNrIGlmIGdhbWUgaXMgd29uLlxuICAgKi9cbiAgY29uc3RydWN0b3IgKHBhcmFtcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcblxuICAgIC8vIFNldCB3b3Jkc1xuICAgIGlmICghdGhpcy5wYXJhbXMud29yZHMpIHtcbiAgICAgIHRoaXMud29yZHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDMgKiB0aGlzLnBhcmFtcy5zaXplICogdGhpcy5wYXJhbXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgIHRoaXMud29yZHMucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLndvcmRzID0gdGhpcy5wYXJhbXMud29yZHMuc3BsaXQoJ1xcbicpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYnV0dG9uc1xuICAgIHRoaXMuYnV0dG9ucyA9IHRoaXMuaW5pdEJ1dHRvbnModGhpcy5wYXJhbXMuc2l6ZSk7XG4gICAgdGhpcy5zZXRCdXR0b25MYWJlbHModGhpcy53b3Jkcyk7XG4gICAgdGhpcy5zZXRKb2tlcih0aGlzLnBhcmFtcy5qb2tlcik7XG5cbiAgICAvLyBTZXR1cCBib2FyZFxuICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFyYW1zLnNpemU7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZCgnaDVwLWJpbmdvLWNvbHVtbicpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBhcmFtcy5zaXplOyBqKyspIHtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uc1tpICogdGhpcy5wYXJhbXMuc2l6ZSArIGpdLmdldERPTUVsZW1lbnQoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgdGhpcy5ib2FyZC5jbGFzc0xpc3QuYWRkKCdoNXAtYmluZ28tYm9hcmQnKTtcblxuICAgIC8vIEJhc2UgZm9udCBzaXplIHRvIGJlIHVzZWQgaWYgcG9zc2libGVcbiAgICB0aGlzLmZvbnRTaXplQmFzZSA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpXG4gICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJykpO1xuXG4gICAgLy8gUmVzaXplIGZvbnQgc2l6ZXMgYW5kIHRodXMgYm9hcmRcbiAgICB0aGlzLm9uKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNpemVCdXR0b25zKCk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNpemUgYnV0dG9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFthcmd1bWVudHNdIE9wdGlvbmFsIGFyZ3VtZW50cy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFthcmd1bWVudHMuc3RhcnRGb250U2l6ZV0gU2hyaW5rIGZhY3Rvci5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFthcmd1bWVudHMuZm9udFNpemVNaW49LUluZmluaXR5XSBNaW5pbXVtIGZvbnQgc2l6ZSBpbiBweC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFthcmd1bWVudHMuZm9udFNpemVNYXg9SW5maW5pdHldIE1heGltdW0gZm9udCBzaXplIGluIHB4LlxuICAgKi9cbiAgcmVzaXplQnV0dG9ucyh7c3RhcnRGb250U2l6ZT10aGlzLmZvbnRTaXplQmFzZSwgZm9udFNpemVNaW49LUluZmluaXR5LCBmb250U2l6ZU1heD1JbmZpbml0eX09e30pIHtcbiAgICBpZiAodGhpcy5wcmV2ZW50UmVzaXplID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9udFNpemUgPSBNYXRoLm1pbihNYXRoLm1heChzdGFydEZvbnRTaXplLCBmb250U2l6ZU1pbiksIGZvbnRTaXplTWF4KTtcblxuICAgIC8vIERldGVybWluZSBidXR0b24gd2l0aCB3aWRlc3QgbGFiZWwgYXMgZnV0dXJlIHJlZmVyZW5jZVxuICAgIGlmICghdGhpcy53aWRlc3RMYWJlbElkKSB7XG4gICAgICBjb25zdCBsZW5ndGhzID0gdGhpcy5idXR0b25zLm1hcChidXR0b24gPT4gYnV0dG9uLmdldExhYmVsV2lkdGgoKSk7XG4gICAgICB0aGlzLndpZGVzdExhYmVsSWQgPSBsZW5ndGhzLnJlZHVjZSgobWF4LCBjdXIsIGluZGV4LCBhcnIpID0+IGN1ciA+IGFyclttYXhdID8gaW5kZXggOiBtYXgsIDApO1xuICAgIH1cblxuICAgIC8vIERldGVybWluZSBidXR0b24gd2l0aCBoaWdoZXN0IGxhYmVsIGFzIGZ1dHVyZSByZWZlcmVuY2VcbiAgICBpZiAoIXRoaXMuaGlnaGVzdExhYmVsSWQpIHtcbiAgICAgIGNvbnN0IHdpZHRocyA9IHRoaXMuYnV0dG9ucy5tYXAoYnV0dG9uID0+IGJ1dHRvbi5nZXRMYWJlbEhlaWdodCgpKTtcbiAgICAgIHRoaXMuaGlnaGVzdExhYmVsSWQgPSB3aWR0aHMucmVkdWNlKChtYXgsIGN1ciwgaW5kZXgsIGFycikgPT4gY3VyID4gYXJyW21heF0gPyBpbmRleCA6IG1heCwgMCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHZhbHVlc1xuICAgIHRoaXMuYm9hcmQuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZSArICdweCc7XG5cbiAgICBjb25zdCBidXR0b25XaWR0aCA9IHRoaXMuYnV0dG9uc1t0aGlzLndpZGVzdExhYmVsSWRdLmdldFdpZHRoKCk7XG5cbiAgICAvLyBUaGlzIGZlZWxzIHJlYWxseSB3cm9uZywgYnV0IGdpdmVzIHVzIGNyb3NzLWJyb3dzZXIgc3F1YXJlbmVzcyAuLi5cbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLnNldE1heEhlaWdodChidXR0b25XaWR0aCArICdweCcpO1xuICAgIH0pO1xuXG4gICAgLy8gRml0IGxhYmVscyBpbnRvIGJ1dHRvbnNcbiAgICBpZiAoZm9udFNpemUgPiBmb250U2l6ZU1pbikge1xuICAgICAgY29uc3QgbG9uZ2VzdExhYmVsV2lkdGggPSB0aGlzLmJ1dHRvbnNbdGhpcy53aWRlc3RMYWJlbElkXS5nZXRMYWJlbFdpZHRoKCk7XG4gICAgICBjb25zdCBoaWdoZXN0TGFiZWxIZWlnaHQgPSB0aGlzLmJ1dHRvbnNbdGhpcy5oaWdoZXN0TGFiZWxJZF0uZ2V0TGFiZWxIZWlnaHQoKTtcblxuICAgICAgaWYgKGxvbmdlc3RMYWJlbFdpZHRoID4gYnV0dG9uV2lkdGggfHwgaGlnaGVzdExhYmVsSGVpZ2h0ID4gYnV0dG9uV2lkdGgpIHtcbiAgICAgICAgdGhpcy5yZXNpemVCdXR0b25zKHtzdGFydEZvbnRTaXplOiBzdGFydEZvbnRTaXplICogMC45fSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBib2FyZC5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSBET00gZWxlbWVudC5cbiAgICovXG4gIGdldERPTUVsZW1lbnQgKCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNldCBvZiBidXR0b25zLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NpemU9NV0gLSBTaXplIG9mIHRoZSBiaW5nbyBib2FyZC5cbiAgICogQHJldHVybiB7b2JqZWN0W119IEFycmF5IGFzIGJvYXJkLlxuICAgKi9cbiAgaW5pdEJ1dHRvbnMgKHNpemU9NSkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUgKiBzaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b24oaSk7XG4gICAgICBidXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtcy5idXR0b25DbGlja2VkKCk7XG4gICAgICB9KTtcbiAgICAgIGJ1dHRvbnMucHVzaChidXR0b24pO1xuICAgIH1cblxuICAgIHJldHVybiBidXR0b25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJhbmRvbWx5IHNldCBidXR0b24gbGFiZWxzIGZyb20gYSBzZXQgb2Ygd29yZHMuXG4gICAqIElmIHRoZXJlIG51bWJlciBvZiB3b3JkcyBpcyBzbWFsbGVyIHRoYW4gdGhlIG51bWJlciBvZiBidXR0b25zLFxuICAgKiB0aGUgd29yZHMgd2lsbCBiZSB1c2VkIHJlcGVhdGVkbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IHdvcmRzIC0gV29yZHMgdG8gc2V0IGJ1dHRvbiBsYWJlbHMgdG8uXG4gICAqL1xuICBzZXRCdXR0b25MYWJlbHMgKHdvcmRzKSB7XG4gICAgbGV0IGZpbGxlciA9IFtdO1xuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBpZiAoZmlsbGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmaWxsZXIgPSB3b3Jkcy5zbGljZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGFiZWwgPSBmaWxsZXIuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpbGxlci5sZW5ndGgpLCAxKVswXTtcbiAgICAgIGJ1dHRvbi5zZXRMYWJlbChsYWJlbCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBjZW50ZXIgYnV0dG9uIGEgam9rZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCAtIElmIHRydWUsIGpva2VyIHNob3VsZCBiZSBzZXQuXG4gICAqL1xuICBzZXRKb2tlciAoZW5hYmxlZCkge1xuICAgIGlmIChlbmFibGVkICE9PSB0cnVlIHx8IHRoaXMucGFyYW1zLnNpemUgJSAyID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTWFrZSBjZW50ZXIgYnV0dG9uIGEgam9rZXJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbnNbTWF0aC5mbG9vcih0aGlzLnBhcmFtcy5zaXplLzIpICogdGhpcy5wYXJhbXMuc2l6ZSArIE1hdGguZmxvb3IodGhpcy5wYXJhbXMuc2l6ZS8yKV07XG4gICAgYnV0dG9uLnRvZ2dsZUFjdGl2YXRlZCh0cnVlKTtcbiAgICBidXR0b24udG9nZ2xlQmxvY2tlZCh0cnVlKTtcbiAgICBidXR0b24uc2V0TGFiZWwoJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtYXRjaGVzIHRvIGEgYnV0dG9uIHBhdHRlcm4uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IHBhdHRlcm5zIC0gQXJyYXlzIGNvbnRhaW5pbmcgdGhlIGZpZWxkcy5cbiAgICogQHJldHVybiB7b2JqZWN0W119IEFsbCBwYXR0ZXJucyBtYXRjaGluZyB0aGUgd2luIGNvbmRpdGlvbi5cbiAgICovXG4gIGdldE1hdGNoZXMgKHBhdHRlcm5zKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IFtdO1xuICAgIHBhdHRlcm5zLmZvckVhY2gocGF0dGVybiA9PiB7XG4gICAgICBpZiAocGF0dGVybi5ldmVyeShmaWVsZCA9PiB0aGlzLmJ1dHRvbnNbZmllbGRdLmlzQWN0aXZhdGVkKCkpKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaChwYXR0ZXJuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGFiZWxzIGZyb20gYWxsIGJ1dHRvbnMgdGhhdCBhcmUgYWN0aXZhdGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gTGFiZWwgc3RyaW5ncy5cbiAgICovXG4gIGdldEFjdGl2YXRlZEJ1dHRvbnNMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgYnV0dG9uID0+IGJ1dHRvbi5pc0FjdGl2YXRlZCgpICYmIGJ1dHRvbi5nZXRMYWJlbCgpICE9PSAnJ1xuICAgICAgKVxuICAgICAgLm1hcChcbiAgICAgICAgYnV0dG9uID0+IGJ1dHRvbi5nZXRMYWJlbCgpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJsb2NrIGFsbCBidXR0b25zLlxuICAgKi9cbiAgYmxvY2tCdXR0b25zICgpIHtcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLnRvZ2dsZUJsb2NrZWQodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5ibG9jayBhbGwgYnV0dG9ucy5cbiAgICovXG4gIHVuYmxvY2tCdXR0b25zICgpIHtcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLnRvZ2dsZUJsb2NrZWQoZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBib2FyZC5cbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLnJlc2V0KCk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMucGFyYW1zLnNodWZmbGVPblJldHJ5KSB7XG4gICAgICB0aGlzLnNldEJ1dHRvbkxhYmVscyh0aGlzLndvcmRzKTtcbiAgICB9XG4gICAgdGhpcy5zZXRKb2tlcih0aGlzLnBhcmFtcy5qb2tlcik7XG4gICAgZGVsZXRlIHRoaXMud2lkZXN0TGFiZWxJZDtcbiAgICBkZWxldGUgdGhpcy5oaWdoZXN0TGFiZWxJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRlIHBhdHRlcm5zLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBwYXR0ZXJucyAtIFNldHMgb2YgYnV0dG9ucycgSURzIHRvIGJlIGFuaW1hdGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PTEwMF0gLSBPcHRpb25hbCBkZWxheSBiZXR3ZWVuIGVhY2ggYW5pbWF0aW9uLlxuICAgKi9cbiAgYW5pbWF0ZVBhdHRlcm5zIChwYXR0ZXJucywgZGVsYXk9MTAwKSB7XG4gICAgLyoqXG4gICAgICogQW5pbWF0ZSBhIHBhdHRlcm4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdFtdfSBwYXR0ZXJuIC0gSURzIG9mIGJ1dHRvbnMgdG8gYmUgYW5pbWF0ZWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheT0xMDBdIC0gT3B0aW9uYWwgZGVsYXkgYmV0d2VlbiBlYWNoIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBhbmltYXRlUGF0dGVybiA9IChwYXR0ZXJuLCBkZWxheT0xMDApID0+IHtcbiAgICAgIC8vIFN0b3AgcmVzaXppbmcgd2hlbiBhbmltYXRpb24gcGxheXNcbiAgICAgIHRoaXMucHJldmVudFJlc2l6ZSA9IHRydWU7XG5cbiAgICAgIGlmIChwYXR0ZXJuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5idXR0b25zW3BhdHRlcm5bMF1dLmFuaW1hdGUoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYW5pbWF0ZVBhdHRlcm4ocGF0dGVybi5zbGljZSgxKSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZXZlbnRSZXNpemUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHBhdHRlcm5zLmZvckVhY2gocGF0dGVybiA9PiB7XG4gICAgICBhbmltYXRlUGF0dGVybihwYXR0ZXJuLCBkZWxheSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oNXAtYmluZ28gLmg1cC1iaW5nby1ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJhY2tncm91bmQ6ICNmMjI2MjY7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMS41ZW0gMC4yZW0gcmdiYSgwLDAsMCwwLjMxKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogY2FsYyg5MCUgLSAwLjJlbSk7XFxuICBtYXJnaW46IDUlIDA7XFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uOm5vdCguaDVwLWJ1dHRvbi1ibG9ja2VkKTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJ1dHRvbi1sYWJlbCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4ycywgZGlzcGxheSAwLjFzIGVhc2UgMC4ycztcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJ1dHRvbi1zeW1ib2wge1xcbiAgb3BhY2l0eTogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltYWdlcy9zdGFyYmFkZ2Uuc3ZnXCIpICsgXCIpIGNlbnRlci84MCUgbm8tcmVwZWF0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4ycywgZGlzcGxheSAwLjFzIGVhc2UgMC4ycztcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJ1dHRvbi1hY3RpdmF0ZWQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAsMS4xKTtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJ1dHRvbi1zcGlubmluZyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtNzIwZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MjBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC03MjBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCwxLjEpO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYnV0dG9uLWJsb2NrZWQge1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYnV0dG9uLXRyYW5zcGFyZW50IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrQ2p4emRtY0tJQ0FnZUcxc2JuTTZaR005SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5bGJHVnRaVzUwY3k4eExqRXZJZ29nSUNCNGJXeHVjenBqWXowaWFIUjBjRG92TDJOeVpXRjBhWFpsWTI5dGJXOXVjeTV2Y21jdmJuTWpJZ29nSUNCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaUNpQWdJSGh0Ykc1ek9uTjJaejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpQ2lBZ0lIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJS0lDQWdlRzFzYm5NNmMyOWthWEJ2WkdrOUltaDBkSEE2THk5emIyUnBjRzlrYVM1emIzVnlZMlZtYjNKblpTNXVaWFF2UkZSRUwzTnZaR2x3YjJScExUQXVaSFJrSWdvZ0lDQjRiV3h1Y3pwcGJtdHpZMkZ3WlQwaWFIUjBjRG92TDNkM2R5NXBibXR6WTJGd1pTNXZjbWN2Ym1GdFpYTndZV05sY3k5cGJtdHpZMkZ3WlNJS0lDQWdkbVZ5YzJsdmJqMGlNUzR4SWdvZ0lDQjJhV1YzUW05NFBTSXdJQzAyTkNBMk5EQWdOalF3SWdvZ0lDQnBaRDBpYzNabk1pSUtJQ0FnYVc1cmMyTmhjR1U2ZG1WeWMybHZiajBpTUM0NU1TQnlNVE0zTWpVaUNpQWdJSE52Wkdsd2IyUnBPbVJ2WTI1aGJXVTlJbk4wWVhKaVlXUm5aUzV6ZG1jaUNpQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMW1hV3hsYm1GdFpUMGlMMmh2YldVdmFtOW9iaTlFWlhOcmRHOXdMM05qYjNKbFgyZzFjQzV3Ym1jaUNpQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMTRaSEJwUFNJNUxqTTFNREF3TURRaUNpQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMTVaSEJwUFNJNUxqTTFNREF3TURRaUNpQWdJSGRwWkhSb1BTSTJOREFpQ2lBZ0lHaGxhV2RvZEQwaU5qUXdJajRLSUNBOGJXVjBZV1JoZEdFS0lDQWdJQ0JwWkQwaWJXVjBZV1JoZEdFeE1pSStDaUFnSUNBOGNtUm1PbEpFUmo0S0lDQWdJQ0FnUEdOak9sZHZjbXNLSUNBZ0lDQWdJQ0FnY21SbU9tRmliM1YwUFNJaVBnb2dJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmMzWm5LM2h0YkR3dlpHTTZabTl5YldGMFBnb2dJQ0FnSUNBZ0lEeGtZenAwZVhCbENpQWdJQ0FnSUNBZ0lDQWdjbVJtT25KbGMyOTFjbU5sUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpHTnRhWFI1Y0dVdlUzUnBiR3hKYldGblpTSWdMejRLSUNBZ0lDQWdJQ0E4WkdNNmRHbDBiR1UrUEM5a1l6cDBhWFJzWlQ0S0lDQWdJQ0FnUEM5all6cFhiM0pyUGdvZ0lDQWdQQzl5WkdZNlVrUkdQZ29nSUR3dmJXVjBZV1JoZEdFK0NpQWdQR1JsWm5NS0lDQWdJQ0JwWkQwaVpHVm1jekV3SWo0S0lDQWdJRHh6ZEhsc1pRb2dJQ0FnSUNBZ2FXUTlJbk4wZVd4bE5ETXhNQ0krQ2lBZ0lDQWdJQzVqYkhNdE1TQjdDaUFnSUNBZ0lDQWdhWE52YkdGMGFXOXVPaUJwYzI5c1lYUmxPd29nSUNBZ0lDQjlDZ29nSUNBZ0lDQXVZMnh6TFRJZ2V3b2dJQ0FnSUNBZ0lHWnBiR3c2SUNNMU9EbGlOREk3Q2lBZ0lDQWdJSDBLQ2lBZ0lDQWdJQzVqYkhNdE15QjdDaUFnSUNBZ0lDQWdabWxzYkRvZ0l6aGhZemszWVRzS0lDQWdJQ0FnZlFvS0lDQWdJQ0FnTG1Oc2N5MDBJSHNLSUNBZ0lDQWdJQ0J2Y0dGamFYUjVPaUF3TGpJN0NpQWdJQ0FnSUNBZ2JXbDRMV0pzWlc1a0xXMXZaR1U2SUcxMWJIUnBjR3g1T3dvZ0lDQWdJQ0I5Q2dvZ0lDQWdJQ0F1WTJ4ekxUVWdld29nSUNBZ0lDQWdJR1pwYkd3NklDTm1Nall5TmpJN0NpQWdJQ0FnSUgwS0NpQWdJQ0FnSUM1amJITXROaUI3Q2lBZ0lDQWdJQ0FnWm1sc2JEb2dJMlkzWTJZMVl6c0tJQ0FnSUNBZ2ZRb0tJQ0FnSUNBZ0xtTnNjeTAzSUhzS0lDQWdJQ0FnSUNCbWFXeHNPaUJ1YjI1bE93b2dJQ0FnSUNCOUNpQWdJQ0E4TDNOMGVXeGxQZ29nSUR3dlpHVm1jejRLSUNBOGMyOWthWEJ2WkdrNmJtRnRaV1IyYVdWM0NpQWdJQ0FnY0dGblpXTnZiRzl5UFNJalptWm1abVptSWdvZ0lDQWdJR0p2Y21SbGNtTnZiRzl5UFNJak5qWTJOalkySWdvZ0lDQWdJR0p2Y21SbGNtOXdZV05wZEhrOUlqRWlDaUFnSUNBZ2IySnFaV04wZEc5c1pYSmhibU5sUFNJeE1DSUtJQ0FnSUNCbmNtbGtkRzlzWlhKaGJtTmxQU0l4TUNJS0lDQWdJQ0JuZFdsa1pYUnZiR1Z5WVc1alpUMGlNVEFpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZjR0ZuWlc5d1lXTnBkSGs5SWpBaUNpQWdJQ0FnYVc1cmMyTmhjR1U2Y0dGblpYTm9ZV1J2ZHowaU1pSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwM2FXNWtiM2N0ZDJsa2RHZzlJakU0TmpFaUNpQWdJQ0FnYVc1cmMyTmhjR1U2ZDJsdVpHOTNMV2hsYVdkb2REMGlNVEExTmlJS0lDQWdJQ0JwWkQwaWJtRnRaV1IyYVdWM09DSUtJQ0FnSUNCemFHOTNaM0pwWkQwaVptRnNjMlVpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZlbTl2YlQwaU1DNDBOakE1TXpjMUlnb2dJQ0FnSUdsdWEzTmpZWEJsT21ONFBTSXRNek0wTGpneE16RTVJZ29nSUNBZ0lHbHVhM05qWVhCbE9tTjVQU0l4TXpjdU1qQXpOaklpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZkMmx1Wkc5M0xYZzlJalU1SWdvZ0lDQWdJR2x1YTNOallYQmxPbmRwYm1SdmR5MTVQU0l5TkNJS0lDQWdJQ0JwYm10elkyRndaVHAzYVc1a2IzY3RiV0Y0YVcxcGVtVmtQU0l4SWdvZ0lDQWdJR2x1YTNOallYQmxPbU4xY25KbGJuUXRiR0Y1WlhJOUluTjJaeklpQ2lBZ0lDQWdabWwwTFcxaGNtZHBiaTEwYjNBOUlqQWlDaUFnSUNBZ1ptbDBMVzFoY21kcGJpMXNaV1owUFNJd0lnb2dJQ0FnSUdacGRDMXRZWEpuYVc0dGNtbG5hSFE5SWpBaUNpQWdJQ0FnWm1sMExXMWhjbWRwYmkxaWIzUjBiMjA5SWpBaUNpQWdJQ0FnZFc1cGRITTlJbkI0SWlBdlBnb2dJRHh5WldOMENpQWdJQ0FnYzNSNWJHVTlJbWx6YjJ4aGRHbHZianBwYzI5c1lYUmxPMlpwYkd3NmJtOXVaU0lLSUNBZ0lDQjVQU0l0TVRBMU15NDFPRFEzSWdvZ0lDQWdJSGc5SWpnd09TNDBNak00TXlJS0lDQWdJQ0JqYkdGemN6MGlZMnh6TFRjaUNpQWdJQ0FnZDJsa2RHZzlJak14T1RRdU16QTFNaUlLSUNBZ0lDQm9aV2xuYUhROUlqRTRNRFF1TXpnNU9TSUtJQ0FnSUNCcFpEMGljbVZqZERRek9ESWlJQzgrQ2lBZ1BHY0tJQ0FnSUNCcFpEMGlaelEyT1RnaUNpQWdJQ0FnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01URTRNaTQ1T0RNeExEVTJMamswTkRFMk9Da2lQZ29nSUNBZ1BHTnBjbU5zWlFvZ0lDQWdJQ0FnY2owaU16SXdJZ29nSUNBZ0lDQWdZM2s5SWpFNU9TNHdOVFU0TXlJS0lDQWdJQ0FnSUdONFBTSXRPRFl5TGprNE16QTVJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzBOakE1TFRVaUNpQWdJQ0FnSUNCemRIbHNaVDBpWTI5c2IzSTZJekF3TURBd01EdGpiR2x3TFhKMWJHVTZibTl1ZW1WeWJ6dGthWE53YkdGNU9tbHViR2x1WlR0dmRtVnlabXh2ZHpwMmFYTnBZbXhsTzNacGMybGlhV3hwZEhrNmRtbHphV0pzWlR0dmNHRmphWFI1T2pFN2FYTnZiR0YwYVc5dU9tbHpiMnhoZEdVN2JXbDRMV0pzWlc1a0xXMXZaR1U2Ym05eWJXRnNPMk52Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjQ2YzFKSFFqdGpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVMV1pwYkhSbGNuTTZiR2x1WldGeVVrZENPM052Ykdsa0xXTnZiRzl5T2lNd01EQXdNREE3YzI5c2FXUXRiM0JoWTJsMGVUb3hPMlpwYkd3NkkyWXlNall5Tmp0bWFXeHNMVzl3WVdOcGRIazZNVHRtYVd4c0xYSjFiR1U2Ym05dWVtVnlienR6ZEhKdmEyVXRkMmxrZEdnNk1UdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YldsMFpYSnNhVzFwZERvME8zTjBjbTlyWlMxa1lYTm9ZWEp5WVhrNmJtOXVaVHR6ZEhKdmEyVXRaR0Z6YUc5bVpuTmxkRG93TzNOMGNtOXJaUzF2Y0dGamFYUjVPakU3WTI5c2IzSXRjbVZ1WkdWeWFXNW5PbUYxZEc4N2FXMWhaMlV0Y21WdVpHVnlhVzVuT21GMWRHODdjMmhoY0dVdGNtVnVaR1Z5YVc1bk9tRjFkRzg3ZEdWNGRDMXlaVzVrWlhKcGJtYzZZWFYwYnp0bGJtRmliR1V0WW1GamEyZHliM1Z1WkRwaFkyTjFiWFZzWVhSbElpQXZQZ29nSUNBZ1BHTnBjbU5zWlFvZ0lDQWdJQ0FnY2owaU16QXdJZ29nSUNBZ0lDQWdZM2s5SWpFNU9TNHdOVFU0TXlJS0lDQWdJQ0FnSUdONFBTSXRPRFl5TGprNE16QTVJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzBOakE1SWdvZ0lDQWdJQ0FnYzNSNWJHVTlJbU52Ykc5eU9pTXdNREF3TURBN1kyeHBjQzF5ZFd4bE9tNXZibnBsY204N1pHbHpjR3hoZVRwcGJteHBibVU3YjNabGNtWnNiM2M2ZG1semFXSnNaVHQyYVhOcFltbHNhWFI1T25acGMybGliR1U3YjNCaFkybDBlVG94TzJsemIyeGhkR2x2YmpwcGMyOXNZWFJsTzIxcGVDMWliR1Z1WkMxdGIyUmxPbTV2Y20xaGJEdGpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVPbk5TUjBJN1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKek9teHBibVZoY2xKSFFqdHpiMnhwWkMxamIyeHZjam9qTURBd01EQXdPM052Ykdsa0xXOXdZV05wZEhrNk1UdG1hV3hzT2lObU1qWXlOakk3Wm1sc2JDMXZjR0ZqYVhSNU9qRTdabWxzYkMxeWRXeGxPbTV2Ym5wbGNtODdjM1J5YjJ0bExYZHBaSFJvT2pFN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzFwZEdWeWJHbHRhWFE2TkR0emRISnZhMlV0WkdGemFHRnljbUY1T201dmJtVTdjM1J5YjJ0bExXUmhjMmh2Wm1aelpYUTZNRHR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hPMk52Ykc5eUxYSmxibVJsY21sdVp6cGhkWFJ2TzJsdFlXZGxMWEpsYm1SbGNtbHVaenBoZFhSdk8zTm9ZWEJsTFhKbGJtUmxjbWx1WnpwaGRYUnZPM1JsZUhRdGNtVnVaR1Z5YVc1bk9tRjFkRzg3Wlc1aFlteGxMV0poWTJ0bmNtOTFibVE2WVdOamRXMTFiR0YwWlNJZ0x6NEtJQ0FnSUR4bkNpQWdJQ0FnSUNCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZzVOeTQzTURnd01pd3RNemN6TGpFeU1qZ3hLU0lLSUNBZ0lDQWdJR2xrUFNKbk5EWTNOaUkrQ2lBZ0lDQWdJRHhuQ2lBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RBdU5UazNORGt6TWpZc01DNHlOVEUwTkRneE5pd3dMakkxTVRRME9ERTJMQzB3TGpVNU56UTVNekkyTEMweE5ERTFMamN3T0RVc056QTBMak0xT0RNektTSUtJQ0FnSUNBZ0lDQWdhV1E5SW1jMExUVWlDaUFnSUNBZ0lDQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMW1hV3hsYm1GdFpUMGlMMjl3ZEM5c1lXMXdjQzlvZEdSdlkzTXZaSEoxY0dGc0wzTnBkR1Z6TDJSbFptRjFiSFF2Wm1sc1pYTXZhRFZ3TDJSbGRtVnNiM0J0Wlc1MEwyZzFjQzFwYm5SbGNtRmpkR2wyWlMxMmFXUmxieTl6Y21NdlozVnBMM05qYjNKbFgyZzFjRjkzYUdsMFpTNXdibWNpQ2lBZ0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21WNGNHOXlkQzE0WkhCcFBTSTVMak0xTURBd01EUWlDaUFnSUNBZ0lDQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMTVaSEJwUFNJNUxqTTFNREF3TURRaUNpQWdJQ0FnSUNBZ0lITjBlV3hsUFNKamIyeHZjam9qTURBd01EQXdPMk5zYVhBdGNuVnNaVHB1YjI1NlpYSnZPMlJwYzNCc1lYazZhVzVzYVc1bE8yOTJaWEptYkc5M09uWnBjMmxpYkdVN2RtbHphV0pwYkdsMGVUcDJhWE5wWW14bE8yOXdZV05wZEhrNk1UdHBjMjlzWVhScGIyNDZhWE52YkdGMFpUdHRhWGd0WW14bGJtUXRiVzlrWlRwdWIzSnRZV3c3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmpwelVrZENPMk52Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjR0Wm1sc2RHVnljenBzYVc1bFlYSlNSMEk3YzI5c2FXUXRZMjlzYjNJNkl6QXdNREF3TUR0emIyeHBaQzF2Y0dGamFYUjVPakU3Wm1sc2JEb2paalJpWlRJME8yWnBiR3d0YjNCaFkybDBlVG94TzJacGJHd3RjblZzWlRwdWIyNTZaWEp2TzNOMGNtOXJaUzEzYVdSMGFEb3hPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qUTdjM1J5YjJ0bExXUmhjMmhoY25KaGVUcHViMjVsTzNOMGNtOXJaUzFrWVhOb2IyWm1jMlYwT2pBN2MzUnliMnRsTFc5d1lXTnBkSGs2TVR0amIyeHZjaTF5Wlc1a1pYSnBibWM2WVhWMGJ6dHBiV0ZuWlMxeVpXNWtaWEpwYm1jNllYVjBienR6YUdGd1pTMXlaVzVrWlhKcGJtYzZZWFYwYnp0MFpYaDBMWEpsYm1SbGNtbHVaenBoZFhSdk8yVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tRmpZM1Z0ZFd4aGRHVWlQZ29nSUNBZ0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNBZ0lDQWdaRDBpYlNBek9UUXVOekExTERVNU1TNHpOaUF4TXk0d016TXNNVFUyTGpNNU15QmpJRE11TnpJMExETTVMakE1T0NBMU1DNHlOamtzTlRjdU56RTJJRGd3TGpBMU9Dd3pNUzQyTlRFZ1RDQTJNRFV1TURreExEWTNNeTR5T0NCaklERXhMakUzTVN3dE1URXVNVGN4SURJM0xqa3lOeXd0TVRRdU9EazFJRFF5TGpneU1pd3RNVEV1TVRjeElHd2dNVFV5TGpZMk9Td3pOeTR5TXpZZ1l5QXpPUzR3T1Rnc09TNHpNRGtnTnpBdU56UTVMQzB5T1M0M09Ea2dOVE11T1RrekxDMDJOeTR3TWpVZ1RDQTNPRGt1TkRFeExEUTROeTR3T1RnZ1l5QXROUzQxT0RVc0xURTBMamc1TlNBdE5TNDFPRFVzTFRNeExqWTFNU0F6TGpjeU5Dd3RORFF1TmpnMElHd2dPREV1T1RJc0xURXpOUzQ1TVRNZ1l5QXlNQzQwT0N3dE16TXVOVEV6SUMwM0xqUTBOeXd0TnpZdU16TTFJQzAwTmk0MU5EVXNMVGN5TGpZeE1TQnNJQzB4TlRndU1qVTFMREU0TGpZeE9DQmpJQzB4Tmk0M05UWXNNUzQ0TmpJZ0xUTXhMalkxTVN3dE15NDNNalFnTFRRd0xqazJMQzB4Tmk0M05UWWdUQ0ExTWpZdU9EazFMREV4TkM0M016UWdReUExTURBdU9ETXNPRFF1T1RRMUlEUTFNQzQxTml3NU55NDVOemdnTkRRekxqRXhNeXd4TXpjdU1EYzJJR3dnTFRNeExqWTFNU3d4TlRRdU5UTXhJR01nTFRNdU56STBMREUwTGpnNU5TQXRNVE11TURNekxESTNMamt5TnlBdE1qY3VPVEkzTERNekxqVXhNeUJzSUMweE5EY3VNRGcwTERZeExqUTBJR01nTFRNMUxqTTNOU3d4TkM0NE9UVWdMVE01TGpBNU9DdzJOeTR3TWpVZ0xUTXVOekkwTERnMUxqWTBOQ0JNSURNM01DNDFNRElzTlRVd0xqUWdZeUF4TXk0d016TXNNVEV1TVRjeElESXlMak0wTWl3eU5pNHdOalVnTWpRdU1qQTBMRFF3TGprMklHd2dMVEF1TURBeExEQWdlaUlLSUNBZ0lDQWdJQ0FnSUNCcFpEMGljR0YwYURZdE15SUtJQ0FnSUNBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lnb2dJQ0FnSUNBZ0lDQWdJSE4wZVd4bFBTSmpiMnh2Y2pvak1EQXdNREF3TzJOc2FYQXRjblZzWlRwdWIyNTZaWEp2TzJScGMzQnNZWGs2YVc1c2FXNWxPMjkyWlhKbWJHOTNPblpwYzJsaWJHVTdkbWx6YVdKcGJHbDBlVHAyYVhOcFlteGxPMmx6YjJ4aGRHbHZianBwYzI5c1lYUmxPMjFwZUMxaWJHVnVaQzF0YjJSbE9tNXZjbTFoYkR0amIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dU9uTlNSMEk3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6T214cGJtVmhjbEpIUWp0emIyeHBaQzFqYjJ4dmNqb2pNREF3TURBd08zTnZiR2xrTFc5d1lXTnBkSGs2TVR0bWFXeHNPaU5tTkdKbE1qUTdabWxzYkMxdmNHRmphWFI1T2pFN1ptbHNiQzF5ZFd4bE9tNXZibnBsY204N2MzUnliMnRsTFhkcFpIUm9PakU3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTZORHR6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVPbTV2Ym1VN2MzUnliMnRsTFdSaGMyaHZabVp6WlhRNk1EdHpkSEp2YTJVdGIzQmhZMmwwZVRveE8yTnZiRzl5TFhKbGJtUmxjbWx1WnpwaGRYUnZPMmx0WVdkbExYSmxibVJsY21sdVp6cGhkWFJ2TzNOb1lYQmxMWEpsYm1SbGNtbHVaenBoZFhSdk8zUmxlSFF0Y21WdVpHVnlhVzVuT21GMWRHODdaVzVoWW14bExXSmhZMnRuY205MWJtUTZZV05qZFcxMWJHRjBaU0lnTHo0S0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBOFp3b2dJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3dMalV3TkRVME9UZzJMREF1TWpFeU16TTBNREVzTUM0eU1USXpNelF3TVN3dE1DNDFNRFExTkRrNE5pd3RNVE0wTkM0NU1qZ3NOamd4TGprek1ETTNLU0lLSUNBZ0lDQWdJQ0FnYVdROUltYzBMVFV0TmlJS0lDQWdJQ0FnSUNBZ2FXNXJjMk5oY0dVNlpYaHdiM0owTFdacGJHVnVZVzFsUFNJdmIzQjBMMnhoYlhCd0wyaDBaRzlqY3k5a2NuVndZV3d2YzJsMFpYTXZaR1ZtWVhWc2RDOW1hV3hsY3k5b05YQXZaR1YyWld4dmNHMWxiblF2YURWd0xXbHVkR1Z5WVdOMGFYWmxMWFpwWkdWdkwzTnlZeTluZFdrdmMyTnZjbVZmYURWd1gzZG9hWFJsTG5CdVp5SUtJQ0FnSUNBZ0lDQWdhVzVyYzJOaGNHVTZaWGh3YjNKMExYaGtjR2s5SWprdU16VXdNREF3TkNJS0lDQWdJQ0FnSUNBZ2FXNXJjMk5oY0dVNlpYaHdiM0owTFhsa2NHazlJamt1TXpVd01EQXdOQ0lLSUNBZ0lDQWdJQ0FnYzNSNWJHVTlJbU52Ykc5eU9pTXdNREF3TURBN1kyeHBjQzF5ZFd4bE9tNXZibnBsY204N1pHbHpjR3hoZVRwcGJteHBibVU3YjNabGNtWnNiM2M2ZG1semFXSnNaVHQyYVhOcFltbHNhWFI1T25acGMybGliR1U3YjNCaFkybDBlVG94TzJsemIyeGhkR2x2YmpwcGMyOXNZWFJsTzIxcGVDMWliR1Z1WkMxdGIyUmxPbTV2Y20xaGJEdGpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVPbk5TUjBJN1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKek9teHBibVZoY2xKSFFqdHpiMnhwWkMxamIyeHZjam9qTURBd01EQXdPM052Ykdsa0xXOXdZV05wZEhrNk1UdG1hV3hzT2lObU4yTm1OV003Wm1sc2JDMXZjR0ZqYVhSNU9qRTdabWxzYkMxeWRXeGxPbTV2Ym5wbGNtODdjM1J5YjJ0bExYZHBaSFJvT2pFN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzFwZEdWeWJHbHRhWFE2TkR0emRISnZhMlV0WkdGemFHRnljbUY1T201dmJtVTdjM1J5YjJ0bExXUmhjMmh2Wm1aelpYUTZNRHR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hPMk52Ykc5eUxYSmxibVJsY21sdVp6cGhkWFJ2TzJsdFlXZGxMWEpsYm1SbGNtbHVaenBoZFhSdk8zTm9ZWEJsTFhKbGJtUmxjbWx1WnpwaGRYUnZPM1JsZUhRdGNtVnVaR1Z5YVc1bk9tRjFkRzg3Wlc1aFlteGxMV0poWTJ0bmNtOTFibVE2WVdOamRXMTFiR0YwWlNJK0NpQWdJQ0FnSUNBZ1BIQmhkR2dLSUNBZ0lDQWdJQ0FnSUNCa1BTSnRJRE01TkM0M01EVXNOVGt4TGpNMklERXpMakF6TXl3eE5UWXVNemt6SUdNZ015NDNNalFzTXprdU1EazRJRFV3TGpJMk9TdzFOeTQzTVRZZ09EQXVNRFU0TERNeExqWTFNU0JNSURZd05TNHdPVEVzTmpjekxqSTRJR01nTVRFdU1UY3hMQzB4TVM0eE56RWdNamN1T1RJM0xDMHhOQzQ0T1RVZ05ESXVPREl5TEMweE1TNHhOekVnYkNBeE5USXVOalk1TERNM0xqSXpOaUJqSURNNUxqQTVPQ3c1TGpNd09TQTNNQzQzTkRrc0xUSTVMamM0T1NBMU15NDVPVE1zTFRZM0xqQXlOU0JNSURjNE9TNDBNVEVzTkRnM0xqQTVPQ0JqSUMwMUxqVTROU3d0TVRRdU9EazFJQzAxTGpVNE5Td3RNekV1TmpVeElETXVOekkwTEMwME5DNDJPRFFnYkNBNE1TNDVNaXd0TVRNMUxqa3hNeUJqSURJd0xqUTRMQzB6TXk0MU1UTWdMVGN1TkRRM0xDMDNOaTR6TXpVZ0xUUTJMalUwTlN3dE56SXVOakV4SUd3Z0xURTFPQzR5TlRVc01UZ3VOakU0SUdNZ0xURTJMamMxTml3eExqZzJNaUF0TXpFdU5qVXhMQzB6TGpjeU5DQXROREF1T1RZc0xURTJMamMxTmlCTUlEVXlOaTQ0T1RVc01URTBMamN6TkNCRElEVXdNQzQ0TXl3NE5DNDVORFVnTkRVd0xqVTJMRGszTGprM09DQTBORE11TVRFekxERXpOeTR3TnpZZ2JDQXRNekV1TmpVeExERTFOQzQxTXpFZ1l5QXRNeTQzTWpRc01UUXVPRGsxSUMweE15NHdNek1zTWpjdU9USTNJQzB5Tnk0NU1qY3NNek11TlRFeklHd2dMVEUwTnk0d09EUXNOakV1TkRRZ1l5QXRNelV1TXpjMUxERTBMamc1TlNBdE16a3VNRGs0TERZM0xqQXlOU0F0TXk0M01qUXNPRFV1TmpRMElFd2dNemN3TGpVd01pdzFOVEF1TkNCaklERXpMakF6TXl3eE1TNHhOekVnTWpJdU16UXlMREkyTGpBMk5TQXlOQzR5TURRc05EQXVPVFlnYkNBdE1DNHdNREVzTUNCNklnb2dJQ0FnSUNBZ0lDQWdJR2xrUFNKd1lYUm9OaTB6TFRJaUNpQWdJQ0FnSUNBZ0lDQWdhVzVyYzJOaGNHVTZZMjl1Ym1WamRHOXlMV04xY25aaGRIVnlaVDBpTUNJS0lDQWdJQ0FnSUNBZ0lDQnpkSGxzWlQwaVkyOXNiM0k2SXpBd01EQXdNRHRqYkdsd0xYSjFiR1U2Ym05dWVtVnlienRrYVhOd2JHRjVPbWx1YkdsdVpUdHZkbVZ5Wm14dmR6cDJhWE5wWW14bE8zWnBjMmxpYVd4cGRIazZkbWx6YVdKc1pUdHBjMjlzWVhScGIyNDZhWE52YkdGMFpUdHRhWGd0WW14bGJtUXRiVzlrWlRwdWIzSnRZV3c3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmpwelVrZENPMk52Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjR0Wm1sc2RHVnljenBzYVc1bFlYSlNSMEk3YzI5c2FXUXRZMjlzYjNJNkl6QXdNREF3TUR0emIyeHBaQzF2Y0dGamFYUjVPakU3Wm1sc2JEb2paamRqWmpWak8yWnBiR3d0YjNCaFkybDBlVG94TzJacGJHd3RjblZzWlRwdWIyNTZaWEp2TzNOMGNtOXJaUzEzYVdSMGFEb3hPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qUTdjM1J5YjJ0bExXUmhjMmhoY25KaGVUcHViMjVsTzNOMGNtOXJaUzFrWVhOb2IyWm1jMlYwT2pBN2MzUnliMnRsTFc5d1lXTnBkSGs2TVR0amIyeHZjaTF5Wlc1a1pYSnBibWM2WVhWMGJ6dHBiV0ZuWlMxeVpXNWtaWEpwYm1jNllYVjBienR6YUdGd1pTMXlaVzVrWlhKcGJtYzZZWFYwYnp0MFpYaDBMWEpsYm1SbGNtbHVaenBoZFhSdk8yVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tRmpZM1Z0ZFd4aGRHVWlJQzgrQ2lBZ0lDQWdJRHd2Wno0S0lDQWdJRHd2Wno0S0lDQThMMmMrQ2p3dmMzWm5QZ289XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvc3RhcmJhZGdlLnN2Z1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9