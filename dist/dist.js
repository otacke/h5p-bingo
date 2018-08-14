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

      // Set values
      this.board.style.fontSize = fontSize + 'px';

      // Fit labels into buttons
      if (fontSize > fontSizeMin) {
        var longestLabelWidth = this.buttons[this.widestLabelId].getLabelWidth();
        var buttonWidth = this.buttons[this.widestLabelId].getDOMElement().clientWidth;
        if (longestLabelWidth > buttonWidth) {
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

        if (pattern.length > 0) {
          _this4.buttons[pattern[0]].animate();
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
exports.push([module.i, ".h5p-bingo .h5p-bingo-board {\n  display: flex;\n  flex-direction: row;\n  font-size: 1em;\n  background: #f22626;\n  padding: 1%;\n  line-height: 1.5;\n}\n\n.h5p-bingo .h5p-bingo-column {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  width: 100%;\n  min-width: 0;\n}\n\n.h5p-bingo .h5p-bingo-button {\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  align-items: center;\n  border: 0.1em solid white;\n  border-radius: 0.5em;\n  position: relative;\n  text-align: center;\n  background: white;\n  transition: transform 0.8s;\n  box-shadow: 0px 0px 1.5em 0.2em rgba(0,0,0,0.31);\n  overflow: hidden;\n  width: calc(90% - 0.2em);\n  height: 100%;\n  margin: 5% 0;\n}\n\n.h5p-bingo .h5p-bingo-button:not(.h5p-button-blocked):hover {\n  cursor: pointer;\n  background-color: #efefef;\n}\n\n.h5p-bingo .h5p-bingo-button:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n\n.h5p-bingo .h5p-bingo-button-label {\n  opacity: 1;\n  transition: opacity 0.1s ease 0.2s, display 0.1s ease 0.2s;\n}\n\n.h5p-bingo .h5p-bingo-button-symbol {\n  opacity: 1;\n  width: 100%;\n  height: 100%;\n  background: url(" + __webpack_require__(8) + ") center/80% no-repeat;\n  position: absolute;\n  transition: opacity 0.1s ease 0.2s, display 0.1s ease 0.2s;\n}\n\n.h5p-bingo .h5p-button-activated {\n  -webkit-transform: rotateY(-180deg);\n  -moz-transform: rotateY(-180deg);\n  transform: rotateY(-180deg);\n  -ms-transform: scale(0,1.1);\n}\n\n.h5p-bingo .h5p-button-spinning {\n  -webkit-transform: rotateY(-720deg);\n  -moz-transform: rotateY(-720deg);\n  transform: rotateY(-720deg);\n  -ms-transform: scale(0,1.1);\n}\n\n.h5p-bingo .h5p-button-blocked {\n}\n\n.h5p-bingo .h5p-button-transparent {\n  opacity: 0;\n}\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzVkYmI0YmY3NjRmODE0MjA0MWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U2YTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvZGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcmJhZGdlLnN2ZyJdLCJuYW1lcyI6WyJCdXR0b24iLCJpZCIsImxhYmVsIiwiYnV0dG9uTGFiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJidXR0b25TeW1ib2wiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0Jsb2NrZWQiLCJ0b2dnbGVBY3RpdmF0ZWQiLCJ0cmlnZ2VyIiwiYmxvY2tlZCIsInRvZ2dsZSIsImNvbnRhaW5zIiwiYWN0aXZhdGVkIiwiaXNBY3RpdmF0ZWQiLCJvZmZzZXRXaWR0aCIsInRvZ2dsZUJsb2NrZWQiLCJkdXJhdGlvbiIsInRoYXQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiSDVQIiwiRXZlbnREaXNwYXRjaGVyIiwiSDVQX0JJTkdPX0RFRkFVTFRfREVTQ1JJUFRJT04iLCJCaW5nbyIsInBhcmFtcyIsImNvbnRlbnRJZCIsImV4dHJhcyIsImJlaGF2aW91ciIsImVuYWJsZVNvbHV0aW9uc0J1dHRvbiIsImVuYWJsZVJldHJ5Iiwiam9rZXIiLCJzaXplIiwiYnVpbGRXaW5uaW5nUGF0dGVybnMiLCJwYXR0ZXJucyIsImRpYWdvbmFsMSIsImRpYWdvbmFsMiIsImkiLCJjb2wiLCJyb3ciLCJqIiwicHVzaCIsIndpbm5pbmdQYXR0ZXJucyIsImNoZWNrV29uIiwid2lubmVycyIsImJvYXJkIiwiZ2V0TWF0Y2hlcyIsImxlbmd0aCIsImJsb2NrQnV0dG9ucyIsImFuaW1hdGVQYXR0ZXJucyIsImJpbmdvIiwiZ2V0WEFQSUFuc3dlckV2ZW50Iiwic2hvd0J1dHRvbiIsInJlZ2lzdGVyRG9tRWxlbWVudHMiLCJtZWRpYSIsInR5cGUiLCJsaWJyYXJ5Iiwic3BsaXQiLCJmaWxlIiwic2V0SW1hZ2UiLCJwYXRoIiwiZGlzYWJsZUltYWdlWm9vbWluZyIsImFsdCIsInRpdGxlIiwic291cmNlcyIsInNldFZpZGVvIiwidGFza0Rlc2NyaXB0aW9uIiwiaW50cm9kdWN0aW9uIiwic2V0SW50cm9kdWN0aW9uIiwid29yZHMiLCJzaHVmZmxlT25SZXRyeSIsImJ1dHRvbkNsaWNrZWQiLCJzZXRDb250ZW50IiwiZ2V0RE9NRWxlbWVudCIsImFkZEJ1dHRvbnMiLCJvbiIsImFkZEJ1dHRvbiIsInRyeUFnYWluIiwicmVzZXRUYXNrIiwiZ2V0QW5zd2VyR2l2ZW4iLCJnZXRTY29yZSIsImdldE1heFNjb3JlIiwic2hvd1NvbHV0aW9ucyIsInVuZGVmaW5lZCIsImhpZGVCdXR0b24iLCJyZXNldCIsImdldFhBUElEYXRhIiwic3RhdGVtZW50IiwiZGF0YSIsInhBUElFdmVudCIsImNyZWF0ZUJpbmdvWEFQSUV2ZW50Iiwic2V0U2NvcmVkUmVzdWx0IiwiaGFzQmluZ28iLCJyZXN1bHQiLCJyZXNwb25zZSIsImdldEFjdGl2YXRlZEJ1dHRvbnNMYWJlbHMiLCJqb2luIiwidmVyYiIsImNyZWF0ZVhBUElFdmVudFRlbXBsYXRlIiwiZXh0ZW5kIiwiZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZSIsImdldHhBUElEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImdldFRpdGxlIiwiaW50ZXJhY3Rpb25UeXBlIiwiYXJndW1lbnRzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJRdWVzdGlvbiIsIkJvYXJkIiwiYnV0dG9ucyIsImluaXRCdXR0b25zIiwic2V0QnV0dG9uTGFiZWxzIiwic2V0Sm9rZXIiLCJmb250U2l6ZUJhc2UiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJib2R5IiwiZ2V0UHJvcGVydHlWYWx1ZSIsInJlc2l6ZUJ1dHRvbnMiLCJzdGFydEZvbnRTaXplIiwiZm9udFNpemVNaW4iLCJJbmZpbml0eSIsImZvbnRTaXplTWF4IiwiZm9udFNpemUiLCJNYXRoIiwibWluIiwibWF4Iiwid2lkZXN0TGFiZWxJZCIsImxlbmd0aHMiLCJtYXAiLCJnZXRMYWJlbFdpZHRoIiwicmVkdWNlIiwiY3VyIiwiaW5kZXgiLCJhcnIiLCJzdHlsZSIsImxvbmdlc3RMYWJlbFdpZHRoIiwiYnV0dG9uV2lkdGgiLCJjbGllbnRXaWR0aCIsImZpbGxlciIsImZvckVhY2giLCJzbGljZSIsInNwbGljZSIsImZsb29yIiwicmFuZG9tIiwic2V0TGFiZWwiLCJlbmFibGVkIiwibWF0Y2hlcyIsInBhdHRlcm4iLCJldmVyeSIsImZpZWxkIiwiZmlsdGVyIiwiZ2V0TGFiZWwiLCJkZWxheSIsImFuaW1hdGVQYXR0ZXJuIiwiYW5pbWF0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JQQSxxQ0FBcUMsNG9WIiwiZmlsZSI6ImRpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc1ZGJiNGJmNzY0ZjgxNDIwNDFiIiwiLyoganNsaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFscyBINVAgKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgSDVQLkV2ZW50RGlzcGF0Y2hlciB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gQnV0dG9uJ3MgSUQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGFiZWxdIC0gQnV0dG9uJ3MgbGFiZWwuXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoaWQsIGxhYmVsKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5idXR0b25MYWJlbC5jbGFzc0xpc3QuYWRkKCdoNXAtYmluZ28tYnV0dG9uLWxhYmVsJyk7XG4gICAgaWYgKHR5cGVvZiBsYWJlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuYnV0dG9uTGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgfVxuXG4gICAgdGhpcy5idXR0b25TeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmJ1dHRvblN5bWJvbC5jbGFzc0xpc3QuYWRkKCdoNXAtYmluZ28tYnV0dG9uLXN5bWJvbCcpO1xuICAgIHRoaXMuYnV0dG9uU3ltYm9sLmNsYXNzTGlzdC5hZGQoJ2g1cC1idXR0b24tdHJhbnNwYXJlbnQnKTtcblxuICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnaDVwLWJpbmdvLWJ1dHRvbicpO1xuICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaWQpO1xuICAgIHRoaXMuYnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uTGFiZWwpO1xuICAgIHRoaXMuYnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uU3ltYm9sKTtcbiAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0Jsb2NrZWQoKSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2YXRlZCgpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgdGhpcy5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBidXR0b24ncyBET00gZWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSBCdXR0b24ncyBET00gZWxlbWVudC5cbiAgICovXG4gIGdldERPTUVsZW1lbnQgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgYnV0dG9uJ3MgYmxvY2tlZCBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBbYmxvY2tlZF0gLSBPcHRpb25hbCBvdmVycmlkZS5cbiAgICovXG4gIHRvZ2dsZUJsb2NrZWQgKGJsb2NrZWQpIHtcbiAgICBibG9ja2VkID0gKCF0aGlzLmlzQmxvY2tlZCgpIHx8IGJsb2NrZWQpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2g1cC1idXR0b24tYmxvY2tlZCcsIGJsb2NrZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBidXR0b24gaXMgYmxvY2tlZC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSwgaWYgYnV0dG9uIGlzIGFjdGl2YXRlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIGlzQmxvY2tlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaDVwLWJ1dHRvbi1ibG9ja2VkJyk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGJ1dHRvbidzIGFjdGl2YXRlZCBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBbYmxvY2tlZF0gLSBPcHRpb25hbCBvdmVycmlkZS5cbiAgICovXG4gIHRvZ2dsZUFjdGl2YXRlZCAoYWN0aXZhdGVkKSB7XG4gICAgaWYgKHRoaXMuaXNCbG9ja2VkICgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYWN0aXZhdGVkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYWN0aXZhdGVkID0gIXRoaXMuaXNBY3RpdmF0ZWQoKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaDVwLWJ1dHRvbi1hY3RpdmF0ZWQnLCBhY3RpdmF0ZWQpO1xuICAgIHRoaXMuYnV0dG9uTGFiZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaDVwLWJ1dHRvbi10cmFuc3BhcmVudCcsIGFjdGl2YXRlZCk7XG4gICAgdGhpcy5idXR0b25TeW1ib2wuY2xhc3NMaXN0LnRvZ2dsZSgnaDVwLWJ1dHRvbi10cmFuc3BhcmVudCcsICFhY3RpdmF0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBidXR0b24gaXMgYWN0aXZhdGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlLCBpZiBidXR0b24gaXMgYWN0aXZhdGVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgaXNBY3RpdmF0ZWQgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2g1cC1idXR0b24tYWN0aXZhdGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJ1dHRvbiBsYWJlbC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIC0gQnV0dG9uIGxhYmVsLlxuICAgKi9cbiAgc2V0TGFiZWwgKGxhYmVsKSB7XG4gICAgdGhpcy5idXR0b25MYWJlbC5pbm5lckhUTUwgPSBsYWJlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYnV0dG9uIGxhYmVsLlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEJ1dHRvbiBsYWJlbC5cbiAgICovXG4gIGdldExhYmVsICgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b25MYWJlbC5pbm5lckhUTUw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJ1dHRvbiBsYWJlbCB3aWR0aC5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSBCdXR0b24gbGFiZWwgd2lkdGguXG4gICAqL1xuICBnZXRMYWJlbFdpZHRoICgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b25MYWJlbC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBidXR0b24gc3RhdGVzLlxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMudG9nZ2xlQmxvY2tlZChmYWxzZSk7XG4gICAgdGhpcy50b2dnbGVBY3RpdmF0ZWQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGUgYnV0dG9uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTMwMF0gLSBEdXJhdGlvbiBpbiBtcy5cbiAgICovXG4gIGFuaW1hdGUgKGR1cmF0aW9uPTMwMCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnaDVwLWJ1dHRvbi1zcGlubmluZycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhhdC5idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaDVwLWJ1dHRvbi1zcGlubmluZycpO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9idXR0b24uanMiLCIvKiBqc2xpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWxzIEg1UCAqL1xuXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5cbi8vIFVzZWQgZm9yIHhBUEkgdGl0bGUgYW5kIHRhc2sgZGVzY3JpcHRpb25cbmNvbnN0IEg1UF9CSU5HT19ERUZBVUxUX0RFU0NSSVBUSU9OID0gJ0JpbmdvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZ28gZXh0ZW5kcyBINVAuUXVlc3Rpb24ge1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyAtIFBhcmFtZXRlcnMgZnJvbSBzZW1hbnRpY3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50SWQgLSBDb250ZW50IElELlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2V4dHJhc10gLSBDb250ZW50IGRhdGEgKG1ldGFkYXRhL3NhdmVzKTtcbiAgICovXG4gIGNvbnN0cnVjdG9yIChwYXJhbXMsIGNvbnRlbnRJZCwgZXh0cmFzID0ge30pIHtcbiAgICBzdXBlcignYmluZ28nKTtcblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICAgIHRoaXMucGFyYW1zLmJlaGF2aW91ciA9IHRoaXMucGFyYW1zLmJlaGF2aW91ciB8fCB7fTtcblxuICAgIC8qXG4gICAgICogdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVNvbHV0aW9uc0J1dHRvbiBhbmQgdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5IGFyZSB1c2VkIGJ5XG4gICAgICogY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItOH0gYW5kXG4gICAgICoge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItOX1cbiAgICAgKi9cbiAgICB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuZW5hYmxlU29sdXRpb25zQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5ID0gdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5IHx8IGZhbHNlO1xuXG4gICAgdGhpcy5wYXJhbXMuam9rZXIgPSB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuam9rZXIgfHwgZmFsc2U7XG4gICAgdGhpcy5wYXJhbXMuc2l6ZSA9IHBhcmFtcy5zaXplIHx8IDU7XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbGwgd2lubmluZyBwYXR0ZXJucyBmb3IgYSBCaW5nbyBzaGVldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gU2hlZXQgc2l6ZS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gQXJyYXlzIGNvbnRhaW5pbmcgcGF0dGVybnMuXG4gICAgICovXG4gICAgdGhpcy5idWlsZFdpbm5pbmdQYXR0ZXJucyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICBjb25zdCBwYXR0ZXJucyA9IFtdO1xuICAgICAgY29uc3QgZGlhZ29uYWwxID0gW107XG4gICAgICBjb25zdCBkaWFnb25hbDIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IFtdO1xuICAgICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICBjb2wucHVzaChpICogc2l6ZSArIGopO1xuICAgICAgICAgIHJvdy5wdXNoKGogKiBzaXplICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0dGVybnMucHVzaChjb2wpO1xuICAgICAgICBwYXR0ZXJucy5wdXNoKHJvdyk7XG5cbiAgICAgICAgZGlhZ29uYWwxLnB1c2goaSAqIChzaXplICsgMSkpO1xuICAgICAgICBkaWFnb25hbDIucHVzaCgoaSArIDEpICogKHNpemUgLSAxKSk7XG4gICAgICB9XG4gICAgICBwYXR0ZXJucy5wdXNoKGRpYWdvbmFsMSk7XG4gICAgICBwYXR0ZXJucy5wdXNoKGRpYWdvbmFsMik7XG4gICAgICByZXR1cm4gcGF0dGVybnM7XG4gICAgfTtcblxuICAgIHRoaXMud2lubmluZ1BhdHRlcm5zID0gdGhpcy5idWlsZFdpbm5pbmdQYXR0ZXJucyh0aGlzLnBhcmFtcy5zaXplKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGdhbWUgaGFzIGJlZW4gd29uLlxuICAgICAqL1xuICAgIHRoaXMuY2hlY2tXb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCB3aW5uZXJzID0gdGhpcy5ib2FyZC5nZXRNYXRjaGVzKHRoaXMud2lubmluZ1BhdHRlcm5zKTtcblxuICAgICAgaWYgKHdpbm5lcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuYmxvY2tCdXR0b25zKCk7XG4gICAgICAgIHRoaXMuYm9hcmQuYW5pbWF0ZVBhdHRlcm5zKHdpbm5lcnMpO1xuICAgICAgICB0aGlzLmJpbmdvID0gdHJ1ZTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHhBUEkgc3RhdGVtZW50XG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmdldFhBUElBbnN3ZXJFdmVudCgpKTtcblxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5KSB7XG4gICAgICAgICAgdGhpcy5zaG93QnV0dG9uKCd0cnktYWdhaW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciB0aGUgRE9NIGVsZW1lbnRzIHdpdGggSDVQLlF1ZXN0aW9uLlxuICAgICAqL1xuICAgIHRoaXMucmVnaXN0ZXJEb21FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgIC8vIFNldCBvcHRpb25hbCBtZWRpYVxuICAgICAgdmFyIG1lZGlhID0gdGhpcy5wYXJhbXMubWVkaWEudHlwZTtcbiAgICAgIGlmIChtZWRpYSAmJiBtZWRpYS5saWJyYXJ5KSB7XG4gICAgICAgIHZhciB0eXBlID0gbWVkaWEubGlicmFyeS5zcGxpdCgnICcpWzBdO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ0g1UC5JbWFnZScpIHtcbiAgICAgICAgICBpZiAobWVkaWEucGFyYW1zLmZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW1hZ2UobWVkaWEucGFyYW1zLmZpbGUucGF0aCwge1xuICAgICAgICAgICAgICBkaXNhYmxlSW1hZ2Vab29taW5nOiB0aGlzLnBhcmFtcy5tZWRpYS5kaXNhYmxlSW1hZ2Vab29taW5nLFxuICAgICAgICAgICAgICBhbHQ6IG1lZGlhLnBhcmFtcy5hbHQsXG4gICAgICAgICAgICAgIHRpdGxlOiBtZWRpYS5wYXJhbXMudGl0bGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnSDVQLlZpZGVvJykge1xuICAgICAgICAgIGlmIChtZWRpYS5wYXJhbXMuc291cmNlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWaWRlbyhtZWRpYSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlZ2lzdGVyIG9wdGlvbmFsIHRhc2sgaW50cm9kdWN0aW9uIHRleHRcbiAgICAgIGlmICh0aGlzLnBhcmFtcy50YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgIHRoaXMuaW50cm9kdWN0aW9uLmlubmVySFRNTCA9IHRoaXMucGFyYW1zLnRhc2tEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5zZXRJbnRyb2R1Y3Rpb24odGhpcy5pbnRyb2R1Y3Rpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWdpc3RlciBjb250ZW50XG4gICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHtcbiAgICAgICAgd29yZHM6IHRoaXMucGFyYW1zLndvcmRzLFxuICAgICAgICBzaXplOiB0aGlzLnBhcmFtcy5zaXplLFxuICAgICAgICBzaHVmZmxlT25SZXRyeTogdGhpcy5wYXJhbXMuYmVoYXZpb3VyLnNodWZmbGVPblJldHJ5LFxuICAgICAgICBqb2tlcjogdGhpcy5wYXJhbXMuam9rZXIsXG4gICAgICAgIGJ1dHRvbkNsaWNrZWQ6IHRoaXMuY2hlY2tXb25cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRDb250ZW50KHRoaXMuYm9hcmQuZ2V0RE9NRWxlbWVudCgpKTtcblxuICAgICAgLy8gQWRkIGJ1dHRvbnNcbiAgICAgIHRoaXMuYWRkQnV0dG9ucygpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ib2FyZC50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgIH0sIDApO1xuXG4gICAgICB0aGlzLm9uKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYm9hcmQudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGFsbCB0aGUgYnV0dG9ucyB0aGF0IHNoYWxsIGJlIHBhc3NlZCB0byBINVAuUXVlc3Rpb25cbiAgICAgKi9cbiAgICB0aGlzLmFkZEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAvLyBSZXRyeSBidXR0b25cbiAgICAgIHRoaXMuYWRkQnV0dG9uKCd0cnktYWdhaW4nLCB0aGlzLnBhcmFtcy50cnlBZ2FpbiwgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0VGFzaygpO1xuICAgICAgfSwgZmFsc2UsIHt9LCB7fSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHNvbWUga2luZCBvZiBhbnN3ZXIgd2FzIGdpdmVuIC0tIG5vdCBhcHBsaWNhYmxlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSwgaWYgYW5zd2VyIHdhcyBnaXZlbi5cbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTF9XG4gICAgICovXG4gICAgdGhpcy5nZXRBbnN3ZXJHaXZlbiA9ICgpID0+IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbGF0ZXN0IHNjb3JlIC0tIG5vdCBhcHBsaWNhYmxlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBMYXRlc3Qgc2NvcmUuXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci0yfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0U2NvcmUgPSAoKSA9PiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogR2V0IG1heGltdW0gcG9zc2libGUgc2NvcmUgLS0gbm90IGFwcGxpY2FibGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFNjb3JlIG5lY2Vzc2FyeSBmb3IgbWFzdGVyaW5nLlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItM31cbiAgICAgKi9cbiAgICB0aGlzLmdldE1heFNjb3JlID0gKCkgPT4gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFNob3cgc29sdXRpb24gLS0gbm90IGFwcGxpY2FibGUuXG4gICAgICpcbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTR9XG4gICAgICovXG4gICAgdGhpcy5zaG93U29sdXRpb25zID0gKCkgPT4gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGFzay5cbiAgICAgKlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItNX1cbiAgICAgKi9cbiAgICB0aGlzLnJlc2V0VGFzayA9ICgpID0+IHtcbiAgICAgIHRoaXMuYmluZ28gPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbigndHJ5LWFnYWluJyk7XG4gICAgICB0aGlzLmJvYXJkLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB4QVBJIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHhBUEkgc3RhdGVtZW50LlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItNn1cbiAgICAgKi9cbiAgICB0aGlzLmdldFhBUElEYXRhID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGVtZW50OiB0aGlzLmdldFhBUElBbnN3ZXJFdmVudCgpLmRhdGEuc3RhdGVtZW50XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB4QVBJIGFuc3dlciBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0g1UC5YQVBJRXZlbnR9IFhBUEkgYW5zd2VyIGV2ZW50LlxuICAgICAqL1xuICAgIHRoaXMuZ2V0WEFQSUFuc3dlckV2ZW50ID0gKCkgPT4ge1xuICAgICAgY29uc3QgeEFQSUV2ZW50ID0gdGhpcy5jcmVhdGVCaW5nb1hBUElFdmVudCgnYW5zd2VyZWQnKTtcblxuICAgICAgeEFQSUV2ZW50LnNldFNjb3JlZFJlc3VsdCh0aGlzLmdldFNjb3JlKCksIHRoaXMuZ2V0TWF4U2NvcmUoKSwgdGhpcywgdHJ1ZSwgdGhpcy5oYXNCaW5nbygpKTtcbiAgICAgIHhBUElFdmVudC5kYXRhLnN0YXRlbWVudC5yZXN1bHQucmVzcG9uc2UgPSB0aGlzLmJvYXJkXG4gICAgICAgIC5nZXRBY3RpdmF0ZWRCdXR0b25zTGFiZWxzKClcbiAgICAgICAgLmpvaW4oJ1ssXScpO1xuXG4gICAgICByZXR1cm4geEFQSUV2ZW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4geEFQSSBldmVudCBmb3IgQmluZ28uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyYiAtIFNob3J0IGlkIG9mIHRoZSB2ZXJiIHdlIHdhbnQgdG8gdHJpZ2dlci5cbiAgICAgKiBAcmV0dXJuIHtINVAuWEFQSUV2ZW50fSBFdmVudCB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICB0aGlzLmNyZWF0ZUJpbmdvWEFQSUV2ZW50ID0gKHZlcmIpID0+IHtcbiAgICAgIGNvbnN0IHhBUElFdmVudCA9IHRoaXMuY3JlYXRlWEFQSUV2ZW50VGVtcGxhdGUodmVyYik7XG4gICAgICB0aGlzLmV4dGVuZChcbiAgICAgICAgeEFQSUV2ZW50LmdldFZlcmlmaWVkU3RhdGVtZW50VmFsdWUoWydvYmplY3QnLCAnZGVmaW5pdGlvbiddKSxcbiAgICAgICAgdGhpcy5nZXR4QVBJRGVmaW5pdGlvbigpKTtcbiAgICAgIHJldHVybiB4QVBJRXZlbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgeEFQSSBkZWZpbml0aW9uIGZvciB0aGUgeEFQSSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFhBUEkgZGVmaW5pdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLmdldHhBUElEZWZpbml0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHt9O1xuICAgICAgZGVmaW5pdGlvbi5uYW1lID0geydlbi1VUyc6IEg1UF9CSU5HT19ERUZBVUxUX0RFU0NSSVBUSU9OfTtcbiAgICAgIGRlZmluaXRpb24uZGVzY3JpcHRpb24gPSB7J2VuLVVTJzogdGhpcy5nZXRUaXRsZSgpfTtcbiAgICAgIGRlZmluaXRpb24udHlwZSA9ICdodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvYWN0aXZpdGllcy9jbWkuaW50ZXJhY3Rpb24nO1xuICAgICAgZGVmaW5pdGlvbi5pbnRlcmFjdGlvblR5cGUgPSAnb3RoZXInO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB4QVBJIGRlZmluaXRpb24gZm9yIHRoZSB4QVBJIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gWEFQSSBkZWZpbml0aW9uLlxuICAgICAqL1xuICAgIHRoaXMuZ2V0VGl0bGUgPSAoKSA9PiAodGhpcy5wYXJhbXMudGFza0Rlc2NyaXB0aW9uKSA/IHRoaXMucGFyYW1zLnRhc2tEZXNjcmlwdGlvbiA6IEg1UF9CSU5HT19ERUZBVUxUX0RFU0NSSVBUSU9OO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IHdpbm5pbmcvY29tcGxldGlvbiBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUsIGlmIEJpbmdvLlxuICAgICAqL1xuICAgIHRoaXMuaGFzQmluZ28gPSAoKSA9PiB0aGlzLmJpbmdvO1xuXG4gICAgLyoqXG4gICAgICogRXh0ZW5kIGFuIGFycmF5IGp1c3QgbGlrZSBKUXVlcnkncyBleHRlbmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXJndW1lbnRzIC0gT2JqZWN0cyB0byBiZSBtZXJnZWQuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBNZXJnZWQgb2JqZWN0cy5cbiAgICAgKi9cbiAgICB0aGlzLmV4dGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdW2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBhcmd1bWVudHNbaV1ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5leHRlbmQoYXJndW1lbnRzWzBdW2tleV0sIGFyZ3VtZW50c1tpXVtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBhcmd1bWVudHNbMF1ba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9hcHAuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQgQmluZ28gZnJvbSBcIi4uL3NjcmlwdHMvYXBwXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9zY3JpcHRzL2J1dHRvblwiO1xuXG4vLyBMb2FkIGxpYnJhcnlcbkg1UCA9IEg1UCB8fCB7fTtcbkg1UC5CaW5nbyA9IEJpbmdvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJpZXMvZGlzdC5qcyIsIi8qIGpzbGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbHMgSDVQICovXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuXG5jbGFzcyBCb2FyZCBleHRlbmRzIEg1UC5FdmVudERpc3BhdGNoZXIge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgLSBQYXJhbWV0ZXJzIGZyb20gc2VtYW50aWNzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLndvcmRzIC0gTGlzdCBvZiB3b3Jkcy9waHJhc2VzL251bWJlcnMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMuc2l6ZSAtIFNpemUgb2YgdGhlIGJvYXJkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5zaHVmZmxlT25SZXRyeSAtIElmIHRydWUsIGJvYXJkIHdpbGwgYmUgc2h1ZmZsZWQgb24gcmV0cnkuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHBhcmFtcy5idXR0b25DbGlja2VkIC0gQ2FsbGJhY2sgdG8gY2hlY2sgaWYgZ2FtZSBpcyB3b24uXG4gICAqL1xuICBjb25zdHJ1Y3RvciAocGFyYW1zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuXG4gICAgLy8gU2V0IHdvcmRzXG4gICAgaWYgKCF0aGlzLnBhcmFtcy53b3Jkcykge1xuICAgICAgdGhpcy53b3JkcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMyAqIHRoaXMucGFyYW1zLnNpemUgKiB0aGlzLnBhcmFtcy5zaXplOyBpKyspIHtcbiAgICAgICAgdGhpcy53b3Jkcy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMud29yZHMgPSB0aGlzLnBhcmFtcy53b3Jkcy5zcGxpdCgnXFxuJyk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBidXR0b25zXG4gICAgdGhpcy5idXR0b25zID0gdGhpcy5pbml0QnV0dG9ucyh0aGlzLnBhcmFtcy5zaXplKTtcbiAgICB0aGlzLnNldEJ1dHRvbkxhYmVscyh0aGlzLndvcmRzKTtcbiAgICB0aGlzLnNldEpva2VyKHRoaXMucGFyYW1zLmpva2VyKTtcblxuICAgIC8vIFNldHVwIGJvYXJkXG4gICAgdGhpcy5ib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJhbXMuc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdoNXAtYmluZ28tY29sdW1uJyk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGFyYW1zLnNpemU7IGorKykge1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25zW2kgKiB0aGlzLnBhcmFtcy5zaXplICsgal0uZ2V0RE9NRWxlbWVudCgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICB0aGlzLmJvYXJkLmNsYXNzTGlzdC5hZGQoJ2g1cC1iaW5nby1ib2FyZCcpO1xuXG4gICAgLy8gQmFzZSBmb250IHNpemUgdG8gYmUgdXNlZCBpZiBwb3NzaWJsZVxuICAgIHRoaXMuZm9udFNpemVCYXNlID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXNpemUnKSk7XG5cbiAgICAvLyBSZXNpemUgZm9udCBzaXplcyBhbmQgdGh1cyBib2FyZFxuICAgIHRoaXMub24oJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2l6ZUJ1dHRvbnMoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSBidXR0b25zLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2FyZ3VtZW50c10gT3B0aW9uYWwgYXJndW1lbnRzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2FyZ3VtZW50cy5zdGFydEZvbnRTaXplXSBTaHJpbmsgZmFjdG9yLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2FyZ3VtZW50cy5mb250U2l6ZU1pbj0tSW5maW5pdHldIE1pbmltdW0gZm9udCBzaXplIGluIHB4LlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2FyZ3VtZW50cy5mb250U2l6ZU1heD1JbmZpbml0eV0gTWF4aW11bSBmb250IHNpemUgaW4gcHguXG4gICAqL1xuICByZXNpemVCdXR0b25zKHtzdGFydEZvbnRTaXplPXRoaXMuZm9udFNpemVCYXNlLCBmb250U2l6ZU1pbj0tSW5maW5pdHksIGZvbnRTaXplTWF4PUluZmluaXR5fT17fSkge1xuICAgIGNvbnN0IGZvbnRTaXplID0gTWF0aC5taW4oTWF0aC5tYXgoc3RhcnRGb250U2l6ZSwgZm9udFNpemVNaW4pLCBmb250U2l6ZU1heCk7XG5cbiAgICAvLyBEZXRlcm1pbmUgYnV0dG9uIHdpdGggd2lkZXN0IGxhYmVsIGFzIGZ1dHVyZSByZWZlcmVuY2VcbiAgICBpZiAoIXRoaXMud2lkZXN0TGFiZWxJZCkge1xuICAgICAgY29uc3QgbGVuZ3RocyA9IHRoaXMuYnV0dG9ucy5tYXAoYnV0dG9uID0+IGJ1dHRvbi5nZXRMYWJlbFdpZHRoKCkpO1xuICAgICAgdGhpcy53aWRlc3RMYWJlbElkID0gbGVuZ3Rocy5yZWR1Y2UoKG1heCwgY3VyLCBpbmRleCwgYXJyKSA9PiBjdXIgPiBhcnJbbWF4XSA/IGluZGV4IDogbWF4LCAwKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdmFsdWVzXG4gICAgdGhpcy5ib2FyZC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplICsgJ3B4JztcblxuICAgIC8vIEZpdCBsYWJlbHMgaW50byBidXR0b25zXG4gICAgaWYgKGZvbnRTaXplID4gZm9udFNpemVNaW4pIHtcbiAgICAgIGNvbnN0IGxvbmdlc3RMYWJlbFdpZHRoID0gdGhpcy5idXR0b25zW3RoaXMud2lkZXN0TGFiZWxJZF0uZ2V0TGFiZWxXaWR0aCgpO1xuICAgICAgY29uc3QgYnV0dG9uV2lkdGggPSB0aGlzLmJ1dHRvbnNbdGhpcy53aWRlc3RMYWJlbElkXS5nZXRET01FbGVtZW50KCkuY2xpZW50V2lkdGg7XG4gICAgICBpZiAobG9uZ2VzdExhYmVsV2lkdGggPiBidXR0b25XaWR0aCkge1xuICAgICAgICB0aGlzLnJlc2l6ZUJ1dHRvbnMoe3N0YXJ0Rm9udFNpemU6IHN0YXJ0Rm9udFNpemUgKiAwLjl9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBET00gZWxlbWVudCBmb3IgdGhlIGJvYXJkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IERPTSBlbGVtZW50LlxuICAgKi9cbiAgZ2V0RE9NRWxlbWVudCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2V0IG9mIGJ1dHRvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT01XSAtIFNpemUgb2YgdGhlIGJpbmdvIGJvYXJkLlxuICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gQXJyYXkgYXMgYm9hcmQuXG4gICAqL1xuICBpbml0QnV0dG9ucyAoc2l6ZT01KSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSAqIHNpemU7IGkrKykge1xuICAgICAgY29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvbihpKTtcbiAgICAgIGJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucGFyYW1zLmJ1dHRvbkNsaWNrZWQoKTtcbiAgICAgIH0pO1xuICAgICAgYnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbnM7XG4gIH1cblxuICAvKipcbiAgICogUmFuZG9tbHkgc2V0IGJ1dHRvbiBsYWJlbHMgZnJvbSBhIHNldCBvZiB3b3Jkcy5cbiAgICogSWYgdGhlcmUgbnVtYmVyIG9mIHdvcmRzIGlzIHNtYWxsZXIgdGhhbiB0aGUgbnVtYmVyIG9mIGJ1dHRvbnMsXG4gICAqIHRoZSB3b3JkcyB3aWxsIGJlIHVzZWQgcmVwZWF0ZWRseS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gd29yZHMgLSBXb3JkcyB0byBzZXQgYnV0dG9uIGxhYmVscyB0by5cbiAgICovXG4gIHNldEJ1dHRvbkxhYmVscyAod29yZHMpIHtcbiAgICBsZXQgZmlsbGVyID0gW107XG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGlmIChmaWxsZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpbGxlciA9IHdvcmRzLnNsaWNlKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBsYWJlbCA9IGZpbGxlci5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlsbGVyLmxlbmd0aCksIDEpO1xuICAgICAgYnV0dG9uLnNldExhYmVsKGxhYmVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGNlbnRlciBidXR0b24gYSBqb2tlci5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIC0gSWYgdHJ1ZSwgam9rZXIgc2hvdWxkIGJlIHNldC5cbiAgICovXG4gIHNldEpva2VyIChlbmFibGVkKSB7XG4gICAgaWYgKGVuYWJsZWQgIT09IHRydWUgfHwgdGhpcy5wYXJhbXMuc2l6ZSAlIDIgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBNYWtlIGNlbnRlciBidXR0b24gYSBqb2tlclxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tNYXRoLmZsb29yKHRoaXMucGFyYW1zLnNpemUvMikgKiB0aGlzLnBhcmFtcy5zaXplICsgTWF0aC5mbG9vcih0aGlzLnBhcmFtcy5zaXplLzIpXTtcbiAgICBidXR0b24udG9nZ2xlQWN0aXZhdGVkKHRydWUpO1xuICAgIGJ1dHRvbi50b2dnbGVCbG9ja2VkKHRydWUpO1xuICAgIGJ1dHRvbi5zZXRMYWJlbCgnJyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1hdGNoZXMgdG8gYSBidXR0b24gcGF0dGVybi5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gcGF0dGVybnMgLSBBcnJheXMgY29udGFpbmluZyB0aGUgZmllbGRzLlxuICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gQWxsIHBhdHRlcm5zIG1hdGNoaW5nIHRoZSB3aW4gY29uZGl0aW9uLlxuICAgKi9cbiAgZ2V0TWF0Y2hlcyAocGF0dGVybnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gW107XG4gICAgcGF0dGVybnMuZm9yRWFjaChwYXR0ZXJuID0+IHtcbiAgICAgIGlmIChwYXR0ZXJuLmV2ZXJ5KGZpZWxkID0+IHRoaXMuYnV0dG9uc1tmaWVsZF0uaXNBY3RpdmF0ZWQoKSkpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKHBhdHRlcm4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsYWJlbHMgZnJvbSBhbGwgYnV0dG9ucyB0aGF0IGFyZSBhY3RpdmF0ZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdFtdfSBMYWJlbCBzdHJpbmdzLlxuICAgKi9cbiAgZ2V0QWN0aXZhdGVkQnV0dG9uc0xhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b25zXG4gICAgICAuZmlsdGVyKFxuICAgICAgICBidXR0b24gPT4gYnV0dG9uLmlzQWN0aXZhdGVkKCkgJiYgYnV0dG9uLmdldExhYmVsKCkgIT09ICcnXG4gICAgICApXG4gICAgICAubWFwKFxuICAgICAgICBidXR0b24gPT4gYnV0dG9uLmdldExhYmVsKClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQmxvY2sgYWxsIGJ1dHRvbnMuXG4gICAqL1xuICBibG9ja0J1dHRvbnMgKCkge1xuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24udG9nZ2xlQmxvY2tlZCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJsb2NrIGFsbCBidXR0b25zLlxuICAgKi9cbiAgdW5ibG9ja0J1dHRvbnMgKCkge1xuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24udG9nZ2xlQmxvY2tlZChmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGJvYXJkLlxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24ucmVzZXQoKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wYXJhbXMuc2h1ZmZsZU9uUmV0cnkpIHtcbiAgICAgIHRoaXMuc2V0QnV0dG9uTGFiZWxzKHRoaXMud29yZHMpO1xuICAgIH1cbiAgICB0aGlzLnNldEpva2VyKHRoaXMucGFyYW1zLmpva2VyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRlIHBhdHRlcm5zLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBwYXR0ZXJucyAtIFNldHMgb2YgYnV0dG9ucycgSURzIHRvIGJlIGFuaW1hdGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PTEwMF0gLSBPcHRpb25hbCBkZWxheSBiZXR3ZWVuIGVhY2ggYW5pbWF0aW9uLlxuICAgKi9cbiAgYW5pbWF0ZVBhdHRlcm5zIChwYXR0ZXJucywgZGVsYXk9MTAwKSB7XG4gICAgLyoqXG4gICAgICogQW5pbWF0ZSBhIHBhdHRlcm4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdFtdfSBwYXR0ZXJuIC0gSURzIG9mIGJ1dHRvbnMgdG8gYmUgYW5pbWF0ZWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheT0xMDBdIC0gT3B0aW9uYWwgZGVsYXkgYmV0d2VlbiBlYWNoIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBhbmltYXRlUGF0dGVybiA9IChwYXR0ZXJuLCBkZWxheT0xMDApID0+IHtcbiAgICAgIGlmIChwYXR0ZXJuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5idXR0b25zW3BhdHRlcm5bMF1dLmFuaW1hdGUoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYW5pbWF0ZVBhdHRlcm4ocGF0dGVybi5zbGljZSgxKSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcGF0dGVybnMuZm9yRWFjaChwYXR0ZXJuID0+IHtcbiAgICAgIGFuaW1hdGVQYXR0ZXJuKHBhdHRlcm4sIGRlbGF5KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBiYWNrZ3JvdW5kOiAjZjIyNjI2O1xcbiAgcGFkZGluZzogMSU7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMC4xZW0gc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEuNWVtIDAuMmVtIHJnYmEoMCwwLDAsMC4zMSk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IGNhbGMoOTAlIC0gMC4yZW0pO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiA1JSAwO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uOm5vdCguaDVwLWJ1dHRvbi1ibG9ja2VkKTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJ1dHRvbi1sYWJlbCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4ycywgZGlzcGxheSAwLjFzIGVhc2UgMC4ycztcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJ1dHRvbi1zeW1ib2wge1xcbiAgb3BhY2l0eTogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltYWdlcy9zdGFyYmFkZ2Uuc3ZnXCIpICsgXCIpIGNlbnRlci84MCUgbm8tcmVwZWF0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4ycywgZGlzcGxheSAwLjFzIGVhc2UgMC4ycztcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJ1dHRvbi1hY3RpdmF0ZWQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAsMS4xKTtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJ1dHRvbi1zcGlubmluZyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtNzIwZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MjBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC03MjBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCwxLjEpO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYnV0dG9uLWJsb2NrZWQge1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYnV0dG9uLXRyYW5zcGFyZW50IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrQ2p4emRtY0tJQ0FnZUcxc2JuTTZaR005SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5bGJHVnRaVzUwY3k4eExqRXZJZ29nSUNCNGJXeHVjenBqWXowaWFIUjBjRG92TDJOeVpXRjBhWFpsWTI5dGJXOXVjeTV2Y21jdmJuTWpJZ29nSUNCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaUNpQWdJSGh0Ykc1ek9uTjJaejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpQ2lBZ0lIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJS0lDQWdlRzFzYm5NNmMyOWthWEJ2WkdrOUltaDBkSEE2THk5emIyUnBjRzlrYVM1emIzVnlZMlZtYjNKblpTNXVaWFF2UkZSRUwzTnZaR2x3YjJScExUQXVaSFJrSWdvZ0lDQjRiV3h1Y3pwcGJtdHpZMkZ3WlQwaWFIUjBjRG92TDNkM2R5NXBibXR6WTJGd1pTNXZjbWN2Ym1GdFpYTndZV05sY3k5cGJtdHpZMkZ3WlNJS0lDQWdkbVZ5YzJsdmJqMGlNUzR4SWdvZ0lDQjJhV1YzUW05NFBTSXdJQzAyTkNBMk5EQWdOalF3SWdvZ0lDQnBaRDBpYzNabk1pSUtJQ0FnYVc1cmMyTmhjR1U2ZG1WeWMybHZiajBpTUM0NU1TQnlNVE0zTWpVaUNpQWdJSE52Wkdsd2IyUnBPbVJ2WTI1aGJXVTlJbk4wWVhKaVlXUm5aUzV6ZG1jaUNpQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMW1hV3hsYm1GdFpUMGlMMmh2YldVdmFtOW9iaTlFWlhOcmRHOXdMM05qYjNKbFgyZzFjQzV3Ym1jaUNpQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMTRaSEJwUFNJNUxqTTFNREF3TURRaUNpQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMTVaSEJwUFNJNUxqTTFNREF3TURRaUNpQWdJSGRwWkhSb1BTSTJOREFpQ2lBZ0lHaGxhV2RvZEQwaU5qUXdJajRLSUNBOGJXVjBZV1JoZEdFS0lDQWdJQ0JwWkQwaWJXVjBZV1JoZEdFeE1pSStDaUFnSUNBOGNtUm1PbEpFUmo0S0lDQWdJQ0FnUEdOak9sZHZjbXNLSUNBZ0lDQWdJQ0FnY21SbU9tRmliM1YwUFNJaVBnb2dJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmMzWm5LM2h0YkR3dlpHTTZabTl5YldGMFBnb2dJQ0FnSUNBZ0lEeGtZenAwZVhCbENpQWdJQ0FnSUNBZ0lDQWdjbVJtT25KbGMyOTFjbU5sUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpHTnRhWFI1Y0dVdlUzUnBiR3hKYldGblpTSWdMejRLSUNBZ0lDQWdJQ0E4WkdNNmRHbDBiR1UrUEM5a1l6cDBhWFJzWlQ0S0lDQWdJQ0FnUEM5all6cFhiM0pyUGdvZ0lDQWdQQzl5WkdZNlVrUkdQZ29nSUR3dmJXVjBZV1JoZEdFK0NpQWdQR1JsWm5NS0lDQWdJQ0JwWkQwaVpHVm1jekV3SWo0S0lDQWdJRHh6ZEhsc1pRb2dJQ0FnSUNBZ2FXUTlJbk4wZVd4bE5ETXhNQ0krQ2lBZ0lDQWdJQzVqYkhNdE1TQjdDaUFnSUNBZ0lDQWdhWE52YkdGMGFXOXVPaUJwYzI5c1lYUmxPd29nSUNBZ0lDQjlDZ29nSUNBZ0lDQXVZMnh6TFRJZ2V3b2dJQ0FnSUNBZ0lHWnBiR3c2SUNNMU9EbGlOREk3Q2lBZ0lDQWdJSDBLQ2lBZ0lDQWdJQzVqYkhNdE15QjdDaUFnSUNBZ0lDQWdabWxzYkRvZ0l6aGhZemszWVRzS0lDQWdJQ0FnZlFvS0lDQWdJQ0FnTG1Oc2N5MDBJSHNLSUNBZ0lDQWdJQ0J2Y0dGamFYUjVPaUF3TGpJN0NpQWdJQ0FnSUNBZ2JXbDRMV0pzWlc1a0xXMXZaR1U2SUcxMWJIUnBjR3g1T3dvZ0lDQWdJQ0I5Q2dvZ0lDQWdJQ0F1WTJ4ekxUVWdld29nSUNBZ0lDQWdJR1pwYkd3NklDTm1Nall5TmpJN0NpQWdJQ0FnSUgwS0NpQWdJQ0FnSUM1amJITXROaUI3Q2lBZ0lDQWdJQ0FnWm1sc2JEb2dJMlkzWTJZMVl6c0tJQ0FnSUNBZ2ZRb0tJQ0FnSUNBZ0xtTnNjeTAzSUhzS0lDQWdJQ0FnSUNCbWFXeHNPaUJ1YjI1bE93b2dJQ0FnSUNCOUNpQWdJQ0E4TDNOMGVXeGxQZ29nSUR3dlpHVm1jejRLSUNBOGMyOWthWEJ2WkdrNmJtRnRaV1IyYVdWM0NpQWdJQ0FnY0dGblpXTnZiRzl5UFNJalptWm1abVptSWdvZ0lDQWdJR0p2Y21SbGNtTnZiRzl5UFNJak5qWTJOalkySWdvZ0lDQWdJR0p2Y21SbGNtOXdZV05wZEhrOUlqRWlDaUFnSUNBZ2IySnFaV04wZEc5c1pYSmhibU5sUFNJeE1DSUtJQ0FnSUNCbmNtbGtkRzlzWlhKaGJtTmxQU0l4TUNJS0lDQWdJQ0JuZFdsa1pYUnZiR1Z5WVc1alpUMGlNVEFpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZjR0ZuWlc5d1lXTnBkSGs5SWpBaUNpQWdJQ0FnYVc1cmMyTmhjR1U2Y0dGblpYTm9ZV1J2ZHowaU1pSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwM2FXNWtiM2N0ZDJsa2RHZzlJakU0TmpFaUNpQWdJQ0FnYVc1cmMyTmhjR1U2ZDJsdVpHOTNMV2hsYVdkb2REMGlNVEExTmlJS0lDQWdJQ0JwWkQwaWJtRnRaV1IyYVdWM09DSUtJQ0FnSUNCemFHOTNaM0pwWkQwaVptRnNjMlVpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZlbTl2YlQwaU1DNDBOakE1TXpjMUlnb2dJQ0FnSUdsdWEzTmpZWEJsT21ONFBTSXRNek0wTGpneE16RTVJZ29nSUNBZ0lHbHVhM05qWVhCbE9tTjVQU0l4TXpjdU1qQXpOaklpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZkMmx1Wkc5M0xYZzlJalU1SWdvZ0lDQWdJR2x1YTNOallYQmxPbmRwYm1SdmR5MTVQU0l5TkNJS0lDQWdJQ0JwYm10elkyRndaVHAzYVc1a2IzY3RiV0Y0YVcxcGVtVmtQU0l4SWdvZ0lDQWdJR2x1YTNOallYQmxPbU4xY25KbGJuUXRiR0Y1WlhJOUluTjJaeklpQ2lBZ0lDQWdabWwwTFcxaGNtZHBiaTEwYjNBOUlqQWlDaUFnSUNBZ1ptbDBMVzFoY21kcGJpMXNaV1owUFNJd0lnb2dJQ0FnSUdacGRDMXRZWEpuYVc0dGNtbG5hSFE5SWpBaUNpQWdJQ0FnWm1sMExXMWhjbWRwYmkxaWIzUjBiMjA5SWpBaUNpQWdJQ0FnZFc1cGRITTlJbkI0SWlBdlBnb2dJRHh5WldOMENpQWdJQ0FnYzNSNWJHVTlJbWx6YjJ4aGRHbHZianBwYzI5c1lYUmxPMlpwYkd3NmJtOXVaU0lLSUNBZ0lDQjVQU0l0TVRBMU15NDFPRFEzSWdvZ0lDQWdJSGc5SWpnd09TNDBNak00TXlJS0lDQWdJQ0JqYkdGemN6MGlZMnh6TFRjaUNpQWdJQ0FnZDJsa2RHZzlJak14T1RRdU16QTFNaUlLSUNBZ0lDQm9aV2xuYUhROUlqRTRNRFF1TXpnNU9TSUtJQ0FnSUNCcFpEMGljbVZqZERRek9ESWlJQzgrQ2lBZ1BHY0tJQ0FnSUNCcFpEMGlaelEyT1RnaUNpQWdJQ0FnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01URTRNaTQ1T0RNeExEVTJMamswTkRFMk9Da2lQZ29nSUNBZ1BHTnBjbU5zWlFvZ0lDQWdJQ0FnY2owaU16SXdJZ29nSUNBZ0lDQWdZM2s5SWpFNU9TNHdOVFU0TXlJS0lDQWdJQ0FnSUdONFBTSXRPRFl5TGprNE16QTVJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzBOakE1TFRVaUNpQWdJQ0FnSUNCemRIbHNaVDBpWTI5c2IzSTZJekF3TURBd01EdGpiR2x3TFhKMWJHVTZibTl1ZW1WeWJ6dGthWE53YkdGNU9tbHViR2x1WlR0dmRtVnlabXh2ZHpwMmFYTnBZbXhsTzNacGMybGlhV3hwZEhrNmRtbHphV0pzWlR0dmNHRmphWFI1T2pFN2FYTnZiR0YwYVc5dU9tbHpiMnhoZEdVN2JXbDRMV0pzWlc1a0xXMXZaR1U2Ym05eWJXRnNPMk52Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjQ2YzFKSFFqdGpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVMV1pwYkhSbGNuTTZiR2x1WldGeVVrZENPM052Ykdsa0xXTnZiRzl5T2lNd01EQXdNREE3YzI5c2FXUXRiM0JoWTJsMGVUb3hPMlpwYkd3NkkyWXlNall5Tmp0bWFXeHNMVzl3WVdOcGRIazZNVHRtYVd4c0xYSjFiR1U2Ym05dWVtVnlienR6ZEhKdmEyVXRkMmxrZEdnNk1UdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YldsMFpYSnNhVzFwZERvME8zTjBjbTlyWlMxa1lYTm9ZWEp5WVhrNmJtOXVaVHR6ZEhKdmEyVXRaR0Z6YUc5bVpuTmxkRG93TzNOMGNtOXJaUzF2Y0dGamFYUjVPakU3WTI5c2IzSXRjbVZ1WkdWeWFXNW5PbUYxZEc4N2FXMWhaMlV0Y21WdVpHVnlhVzVuT21GMWRHODdjMmhoY0dVdGNtVnVaR1Z5YVc1bk9tRjFkRzg3ZEdWNGRDMXlaVzVrWlhKcGJtYzZZWFYwYnp0bGJtRmliR1V0WW1GamEyZHliM1Z1WkRwaFkyTjFiWFZzWVhSbElpQXZQZ29nSUNBZ1BHTnBjbU5zWlFvZ0lDQWdJQ0FnY2owaU16QXdJZ29nSUNBZ0lDQWdZM2s5SWpFNU9TNHdOVFU0TXlJS0lDQWdJQ0FnSUdONFBTSXRPRFl5TGprNE16QTVJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzBOakE1SWdvZ0lDQWdJQ0FnYzNSNWJHVTlJbU52Ykc5eU9pTXdNREF3TURBN1kyeHBjQzF5ZFd4bE9tNXZibnBsY204N1pHbHpjR3hoZVRwcGJteHBibVU3YjNabGNtWnNiM2M2ZG1semFXSnNaVHQyYVhOcFltbHNhWFI1T25acGMybGliR1U3YjNCaFkybDBlVG94TzJsemIyeGhkR2x2YmpwcGMyOXNZWFJsTzIxcGVDMWliR1Z1WkMxdGIyUmxPbTV2Y20xaGJEdGpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVPbk5TUjBJN1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKek9teHBibVZoY2xKSFFqdHpiMnhwWkMxamIyeHZjam9qTURBd01EQXdPM052Ykdsa0xXOXdZV05wZEhrNk1UdG1hV3hzT2lObU1qWXlOakk3Wm1sc2JDMXZjR0ZqYVhSNU9qRTdabWxzYkMxeWRXeGxPbTV2Ym5wbGNtODdjM1J5YjJ0bExYZHBaSFJvT2pFN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzFwZEdWeWJHbHRhWFE2TkR0emRISnZhMlV0WkdGemFHRnljbUY1T201dmJtVTdjM1J5YjJ0bExXUmhjMmh2Wm1aelpYUTZNRHR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hPMk52Ykc5eUxYSmxibVJsY21sdVp6cGhkWFJ2TzJsdFlXZGxMWEpsYm1SbGNtbHVaenBoZFhSdk8zTm9ZWEJsTFhKbGJtUmxjbWx1WnpwaGRYUnZPM1JsZUhRdGNtVnVaR1Z5YVc1bk9tRjFkRzg3Wlc1aFlteGxMV0poWTJ0bmNtOTFibVE2WVdOamRXMTFiR0YwWlNJZ0x6NEtJQ0FnSUR4bkNpQWdJQ0FnSUNCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZzVOeTQzTURnd01pd3RNemN6TGpFeU1qZ3hLU0lLSUNBZ0lDQWdJR2xrUFNKbk5EWTNOaUkrQ2lBZ0lDQWdJRHhuQ2lBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RBdU5UazNORGt6TWpZc01DNHlOVEUwTkRneE5pd3dMakkxTVRRME9ERTJMQzB3TGpVNU56UTVNekkyTEMweE5ERTFMamN3T0RVc056QTBMak0xT0RNektTSUtJQ0FnSUNBZ0lDQWdhV1E5SW1jMExUVWlDaUFnSUNBZ0lDQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMW1hV3hsYm1GdFpUMGlMMjl3ZEM5c1lXMXdjQzlvZEdSdlkzTXZaSEoxY0dGc0wzTnBkR1Z6TDJSbFptRjFiSFF2Wm1sc1pYTXZhRFZ3TDJSbGRtVnNiM0J0Wlc1MEwyZzFjQzFwYm5SbGNtRmpkR2wyWlMxMmFXUmxieTl6Y21NdlozVnBMM05qYjNKbFgyZzFjRjkzYUdsMFpTNXdibWNpQ2lBZ0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21WNGNHOXlkQzE0WkhCcFBTSTVMak0xTURBd01EUWlDaUFnSUNBZ0lDQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMTVaSEJwUFNJNUxqTTFNREF3TURRaUNpQWdJQ0FnSUNBZ0lITjBlV3hsUFNKamIyeHZjam9qTURBd01EQXdPMk5zYVhBdGNuVnNaVHB1YjI1NlpYSnZPMlJwYzNCc1lYazZhVzVzYVc1bE8yOTJaWEptYkc5M09uWnBjMmxpYkdVN2RtbHphV0pwYkdsMGVUcDJhWE5wWW14bE8yOXdZV05wZEhrNk1UdHBjMjlzWVhScGIyNDZhWE52YkdGMFpUdHRhWGd0WW14bGJtUXRiVzlrWlRwdWIzSnRZV3c3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmpwelVrZENPMk52Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjR0Wm1sc2RHVnljenBzYVc1bFlYSlNSMEk3YzI5c2FXUXRZMjlzYjNJNkl6QXdNREF3TUR0emIyeHBaQzF2Y0dGamFYUjVPakU3Wm1sc2JEb2paalJpWlRJME8yWnBiR3d0YjNCaFkybDBlVG94TzJacGJHd3RjblZzWlRwdWIyNTZaWEp2TzNOMGNtOXJaUzEzYVdSMGFEb3hPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qUTdjM1J5YjJ0bExXUmhjMmhoY25KaGVUcHViMjVsTzNOMGNtOXJaUzFrWVhOb2IyWm1jMlYwT2pBN2MzUnliMnRsTFc5d1lXTnBkSGs2TVR0amIyeHZjaTF5Wlc1a1pYSnBibWM2WVhWMGJ6dHBiV0ZuWlMxeVpXNWtaWEpwYm1jNllYVjBienR6YUdGd1pTMXlaVzVrWlhKcGJtYzZZWFYwYnp0MFpYaDBMWEpsYm1SbGNtbHVaenBoZFhSdk8yVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tRmpZM1Z0ZFd4aGRHVWlQZ29nSUNBZ0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNBZ0lDQWdaRDBpYlNBek9UUXVOekExTERVNU1TNHpOaUF4TXk0d016TXNNVFUyTGpNNU15QmpJRE11TnpJMExETTVMakE1T0NBMU1DNHlOamtzTlRjdU56RTJJRGd3TGpBMU9Dd3pNUzQyTlRFZ1RDQTJNRFV1TURreExEWTNNeTR5T0NCaklERXhMakUzTVN3dE1URXVNVGN4SURJM0xqa3lOeXd0TVRRdU9EazFJRFF5TGpneU1pd3RNVEV1TVRjeElHd2dNVFV5TGpZMk9Td3pOeTR5TXpZZ1l5QXpPUzR3T1Rnc09TNHpNRGtnTnpBdU56UTVMQzB5T1M0M09Ea2dOVE11T1RrekxDMDJOeTR3TWpVZ1RDQTNPRGt1TkRFeExEUTROeTR3T1RnZ1l5QXROUzQxT0RVc0xURTBMamc1TlNBdE5TNDFPRFVzTFRNeExqWTFNU0F6TGpjeU5Dd3RORFF1TmpnMElHd2dPREV1T1RJc0xURXpOUzQ1TVRNZ1l5QXlNQzQwT0N3dE16TXVOVEV6SUMwM0xqUTBOeXd0TnpZdU16TTFJQzAwTmk0MU5EVXNMVGN5TGpZeE1TQnNJQzB4TlRndU1qVTFMREU0TGpZeE9DQmpJQzB4Tmk0M05UWXNNUzQ0TmpJZ0xUTXhMalkxTVN3dE15NDNNalFnTFRRd0xqazJMQzB4Tmk0M05UWWdUQ0ExTWpZdU9EazFMREV4TkM0M016UWdReUExTURBdU9ETXNPRFF1T1RRMUlEUTFNQzQxTml3NU55NDVOemdnTkRRekxqRXhNeXd4TXpjdU1EYzJJR3dnTFRNeExqWTFNU3d4TlRRdU5UTXhJR01nTFRNdU56STBMREUwTGpnNU5TQXRNVE11TURNekxESTNMamt5TnlBdE1qY3VPVEkzTERNekxqVXhNeUJzSUMweE5EY3VNRGcwTERZeExqUTBJR01nTFRNMUxqTTNOU3d4TkM0NE9UVWdMVE01TGpBNU9DdzJOeTR3TWpVZ0xUTXVOekkwTERnMUxqWTBOQ0JNSURNM01DNDFNRElzTlRVd0xqUWdZeUF4TXk0d016TXNNVEV1TVRjeElESXlMak0wTWl3eU5pNHdOalVnTWpRdU1qQTBMRFF3TGprMklHd2dMVEF1TURBeExEQWdlaUlLSUNBZ0lDQWdJQ0FnSUNCcFpEMGljR0YwYURZdE15SUtJQ0FnSUNBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lnb2dJQ0FnSUNBZ0lDQWdJSE4wZVd4bFBTSmpiMnh2Y2pvak1EQXdNREF3TzJOc2FYQXRjblZzWlRwdWIyNTZaWEp2TzJScGMzQnNZWGs2YVc1c2FXNWxPMjkyWlhKbWJHOTNPblpwYzJsaWJHVTdkbWx6YVdKcGJHbDBlVHAyYVhOcFlteGxPMmx6YjJ4aGRHbHZianBwYzI5c1lYUmxPMjFwZUMxaWJHVnVaQzF0YjJSbE9tNXZjbTFoYkR0amIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dU9uTlNSMEk3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6T214cGJtVmhjbEpIUWp0emIyeHBaQzFqYjJ4dmNqb2pNREF3TURBd08zTnZiR2xrTFc5d1lXTnBkSGs2TVR0bWFXeHNPaU5tTkdKbE1qUTdabWxzYkMxdmNHRmphWFI1T2pFN1ptbHNiQzF5ZFd4bE9tNXZibnBsY204N2MzUnliMnRsTFhkcFpIUm9PakU3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTZORHR6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVPbTV2Ym1VN2MzUnliMnRsTFdSaGMyaHZabVp6WlhRNk1EdHpkSEp2YTJVdGIzQmhZMmwwZVRveE8yTnZiRzl5TFhKbGJtUmxjbWx1WnpwaGRYUnZPMmx0WVdkbExYSmxibVJsY21sdVp6cGhkWFJ2TzNOb1lYQmxMWEpsYm1SbGNtbHVaenBoZFhSdk8zUmxlSFF0Y21WdVpHVnlhVzVuT21GMWRHODdaVzVoWW14bExXSmhZMnRuY205MWJtUTZZV05qZFcxMWJHRjBaU0lnTHo0S0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBOFp3b2dJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3dMalV3TkRVME9UZzJMREF1TWpFeU16TTBNREVzTUM0eU1USXpNelF3TVN3dE1DNDFNRFExTkRrNE5pd3RNVE0wTkM0NU1qZ3NOamd4TGprek1ETTNLU0lLSUNBZ0lDQWdJQ0FnYVdROUltYzBMVFV0TmlJS0lDQWdJQ0FnSUNBZ2FXNXJjMk5oY0dVNlpYaHdiM0owTFdacGJHVnVZVzFsUFNJdmIzQjBMMnhoYlhCd0wyaDBaRzlqY3k5a2NuVndZV3d2YzJsMFpYTXZaR1ZtWVhWc2RDOW1hV3hsY3k5b05YQXZaR1YyWld4dmNHMWxiblF2YURWd0xXbHVkR1Z5WVdOMGFYWmxMWFpwWkdWdkwzTnlZeTluZFdrdmMyTnZjbVZmYURWd1gzZG9hWFJsTG5CdVp5SUtJQ0FnSUNBZ0lDQWdhVzVyYzJOaGNHVTZaWGh3YjNKMExYaGtjR2s5SWprdU16VXdNREF3TkNJS0lDQWdJQ0FnSUNBZ2FXNXJjMk5oY0dVNlpYaHdiM0owTFhsa2NHazlJamt1TXpVd01EQXdOQ0lLSUNBZ0lDQWdJQ0FnYzNSNWJHVTlJbU52Ykc5eU9pTXdNREF3TURBN1kyeHBjQzF5ZFd4bE9tNXZibnBsY204N1pHbHpjR3hoZVRwcGJteHBibVU3YjNabGNtWnNiM2M2ZG1semFXSnNaVHQyYVhOcFltbHNhWFI1T25acGMybGliR1U3YjNCaFkybDBlVG94TzJsemIyeGhkR2x2YmpwcGMyOXNZWFJsTzIxcGVDMWliR1Z1WkMxdGIyUmxPbTV2Y20xaGJEdGpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVPbk5TUjBJN1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKek9teHBibVZoY2xKSFFqdHpiMnhwWkMxamIyeHZjam9qTURBd01EQXdPM052Ykdsa0xXOXdZV05wZEhrNk1UdG1hV3hzT2lObU4yTm1OV003Wm1sc2JDMXZjR0ZqYVhSNU9qRTdabWxzYkMxeWRXeGxPbTV2Ym5wbGNtODdjM1J5YjJ0bExYZHBaSFJvT2pFN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzFwZEdWeWJHbHRhWFE2TkR0emRISnZhMlV0WkdGemFHRnljbUY1T201dmJtVTdjM1J5YjJ0bExXUmhjMmh2Wm1aelpYUTZNRHR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hPMk52Ykc5eUxYSmxibVJsY21sdVp6cGhkWFJ2TzJsdFlXZGxMWEpsYm1SbGNtbHVaenBoZFhSdk8zTm9ZWEJsTFhKbGJtUmxjbWx1WnpwaGRYUnZPM1JsZUhRdGNtVnVaR1Z5YVc1bk9tRjFkRzg3Wlc1aFlteGxMV0poWTJ0bmNtOTFibVE2WVdOamRXMTFiR0YwWlNJK0NpQWdJQ0FnSUNBZ1BIQmhkR2dLSUNBZ0lDQWdJQ0FnSUNCa1BTSnRJRE01TkM0M01EVXNOVGt4TGpNMklERXpMakF6TXl3eE5UWXVNemt6SUdNZ015NDNNalFzTXprdU1EazRJRFV3TGpJMk9TdzFOeTQzTVRZZ09EQXVNRFU0TERNeExqWTFNU0JNSURZd05TNHdPVEVzTmpjekxqSTRJR01nTVRFdU1UY3hMQzB4TVM0eE56RWdNamN1T1RJM0xDMHhOQzQ0T1RVZ05ESXVPREl5TEMweE1TNHhOekVnYkNBeE5USXVOalk1TERNM0xqSXpOaUJqSURNNUxqQTVPQ3c1TGpNd09TQTNNQzQzTkRrc0xUSTVMamM0T1NBMU15NDVPVE1zTFRZM0xqQXlOU0JNSURjNE9TNDBNVEVzTkRnM0xqQTVPQ0JqSUMwMUxqVTROU3d0TVRRdU9EazFJQzAxTGpVNE5Td3RNekV1TmpVeElETXVOekkwTEMwME5DNDJPRFFnYkNBNE1TNDVNaXd0TVRNMUxqa3hNeUJqSURJd0xqUTRMQzB6TXk0MU1UTWdMVGN1TkRRM0xDMDNOaTR6TXpVZ0xUUTJMalUwTlN3dE56SXVOakV4SUd3Z0xURTFPQzR5TlRVc01UZ3VOakU0SUdNZ0xURTJMamMxTml3eExqZzJNaUF0TXpFdU5qVXhMQzB6TGpjeU5DQXROREF1T1RZc0xURTJMamMxTmlCTUlEVXlOaTQ0T1RVc01URTBMamN6TkNCRElEVXdNQzQ0TXl3NE5DNDVORFVnTkRVd0xqVTJMRGszTGprM09DQTBORE11TVRFekxERXpOeTR3TnpZZ2JDQXRNekV1TmpVeExERTFOQzQxTXpFZ1l5QXRNeTQzTWpRc01UUXVPRGsxSUMweE15NHdNek1zTWpjdU9USTNJQzB5Tnk0NU1qY3NNek11TlRFeklHd2dMVEUwTnk0d09EUXNOakV1TkRRZ1l5QXRNelV1TXpjMUxERTBMamc1TlNBdE16a3VNRGs0TERZM0xqQXlOU0F0TXk0M01qUXNPRFV1TmpRMElFd2dNemN3TGpVd01pdzFOVEF1TkNCaklERXpMakF6TXl3eE1TNHhOekVnTWpJdU16UXlMREkyTGpBMk5TQXlOQzR5TURRc05EQXVPVFlnYkNBdE1DNHdNREVzTUNCNklnb2dJQ0FnSUNBZ0lDQWdJR2xrUFNKd1lYUm9OaTB6TFRJaUNpQWdJQ0FnSUNBZ0lDQWdhVzVyYzJOaGNHVTZZMjl1Ym1WamRHOXlMV04xY25aaGRIVnlaVDBpTUNJS0lDQWdJQ0FnSUNBZ0lDQnpkSGxzWlQwaVkyOXNiM0k2SXpBd01EQXdNRHRqYkdsd0xYSjFiR1U2Ym05dWVtVnlienRrYVhOd2JHRjVPbWx1YkdsdVpUdHZkbVZ5Wm14dmR6cDJhWE5wWW14bE8zWnBjMmxpYVd4cGRIazZkbWx6YVdKc1pUdHBjMjlzWVhScGIyNDZhWE52YkdGMFpUdHRhWGd0WW14bGJtUXRiVzlrWlRwdWIzSnRZV3c3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmpwelVrZENPMk52Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjR0Wm1sc2RHVnljenBzYVc1bFlYSlNSMEk3YzI5c2FXUXRZMjlzYjNJNkl6QXdNREF3TUR0emIyeHBaQzF2Y0dGamFYUjVPakU3Wm1sc2JEb2paamRqWmpWak8yWnBiR3d0YjNCaFkybDBlVG94TzJacGJHd3RjblZzWlRwdWIyNTZaWEp2TzNOMGNtOXJaUzEzYVdSMGFEb3hPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qUTdjM1J5YjJ0bExXUmhjMmhoY25KaGVUcHViMjVsTzNOMGNtOXJaUzFrWVhOb2IyWm1jMlYwT2pBN2MzUnliMnRsTFc5d1lXTnBkSGs2TVR0amIyeHZjaTF5Wlc1a1pYSnBibWM2WVhWMGJ6dHBiV0ZuWlMxeVpXNWtaWEpwYm1jNllYVjBienR6YUdGd1pTMXlaVzVrWlhKcGJtYzZZWFYwYnp0MFpYaDBMWEpsYm1SbGNtbHVaenBoZFhSdk8yVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tRmpZM1Z0ZFd4aGRHVWlJQzgrQ2lBZ0lDQWdJRHd2Wno0S0lDQWdJRHd2Wno0S0lDQThMMmMrQ2p3dmMzWm5QZ289XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvc3RhcmJhZGdlLnN2Z1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9