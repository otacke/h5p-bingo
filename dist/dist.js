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

var _board = __webpack_require__(8);

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
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
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

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".h5p-bingo .h5p-bingo-board {\n  display: flex;\n  flex-direction: row;\n  font-size: 1em;\n  background: #f22626;\n  padding: 0.5em;\n}\n\n.h5p-bingo .h5p-bingo-column {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.h5p-bingo .h5p-bingo-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0.1em solid white;\n  border-radius: 0.5em;\n  position: relative;\n  text-align: center;\n  margin: 1vw;\n  background: white;\n  transition: transform 0.8s;\n  box-shadow: 0px 0px 1.5em 0.2em rgba(0,0,0,0.31);\n}\n\n.h5p-bingo .h5p-bingo-button:not(.h5p-button-blocked):hover {\n  cursor: pointer;\n  background-color: #efefef;\n}\n\n.h5p-bingo .h5p-bingo-button:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n\n.h5p-bingo .h5p-bingo-button-label {\n  opacity: 1;\n  transition: opacity 0.1s ease 0.2s, display 0.1s ease 0.2s;\n}\n\n.h5p-bingo .h5p-bingo-button-symbol {\n  opacity: 1;\n  width: 100%;\n  height: 100%;\n  background: url(" + __webpack_require__(7) + ") center/80% no-repeat;\n  position: absolute;\n  transition: opacity 0.1s ease 0.2s, display 0.1s ease 0.2s;\n}\n\n.h5p-bingo .h5p-button-activated {\n  -webkit-transform: rotateY(-180deg);\n  -moz-transform: rotateY(-180deg);\n  transform: rotateY(-180deg);\n  -ms-transform: scale(0,1.1);\n}\n\n.h5p-bingo .h5p-button-spinning {\n  -webkit-transform: rotateY(-720deg);\n  -moz-transform: rotateY(-720deg);\n  transform: rotateY(-720deg);\n  -ms-transform: scale(0,1.1);\n}\n\n.h5p-bingo .h5p-button-blocked {\n}\n\n.h5p-bingo .h5p-button-transparent {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIC02NCA2NDAgNjQwIgogICBpZD0ic3ZnMiIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MSByMTM3MjUiCiAgIHNvZGlwb2RpOmRvY25hbWU9InN0YXJiYWRnZS5zdmciCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iL2hvbWUvam9obi9EZXNrdG9wL3Njb3JlX2g1cC5wbmciCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI5LjM1MDAwMDQiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI5LjM1MDAwMDQiCiAgIHdpZHRoPSI2NDAiCiAgIGhlaWdodD0iNjQwIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczEwIj4KICAgIDxzdHlsZQogICAgICAgaWQ9InN0eWxlNDMxMCI+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgaXNvbGF0aW9uOiBpc29sYXRlOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICM1ODliNDI7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogIzhhYzk3YTsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBvcGFjaXR5OiAwLjI7CiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5OwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIGZpbGw6ICNmMjYyNjI7CiAgICAgIH0KCiAgICAgIC5jbHMtNiB7CiAgICAgICAgZmlsbDogI2Y3Y2Y1YzsKICAgICAgfQoKICAgICAgLmNscy03IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE4NjEiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA1NiIKICAgICBpZD0ibmFtZWR2aWV3OCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMC40NjA5Mzc1IgogICAgIGlua3NjYXBlOmN4PSItMzM0LjgxMzE5IgogICAgIGlua3NjYXBlOmN5PSIxMzcuMjAzNjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjU5IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgdW5pdHM9InB4IiAvPgogIDxyZWN0CiAgICAgc3R5bGU9Imlzb2xhdGlvbjppc29sYXRlO2ZpbGw6bm9uZSIKICAgICB5PSItMTA1My41ODQ3IgogICAgIHg9IjgwOS40MjM4MyIKICAgICBjbGFzcz0iY2xzLTciCiAgICAgd2lkdGg9IjMxOTQuMzA1MiIKICAgICBoZWlnaHQ9IjE4MDQuMzg5OSIKICAgICBpZD0icmVjdDQzODIiIC8+CiAgPGcKICAgICBpZD0iZzQ2OTgiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4Mi45ODMxLDU2Ljk0NDE2OCkiPgogICAgPGNpcmNsZQogICAgICAgcj0iMzIwIgogICAgICAgY3k9IjE5OS4wNTU4MyIKICAgICAgIGN4PSItODYyLjk4MzA5IgogICAgICAgaWQ9InBhdGg0NjA5LTUiCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmlzb2xhdGU7bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO2ZpbGw6I2YyMjYyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiAvPgogICAgPGNpcmNsZQogICAgICAgcj0iMzAwIgogICAgICAgY3k9IjE5OS4wNTU4MyIKICAgICAgIGN4PSItODYyLjk4MzA5IgogICAgICAgaWQ9InBhdGg0NjA5IgogICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjppc29sYXRlO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiNmMjYyNjI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgLz4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny43MDgwMiwtMzczLjEyMjgxKSIKICAgICAgIGlkPSJnNDY3NiI+CiAgICAgIDxnCiAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuNTk3NDkzMjYsMC4yNTE0NDgxNiwwLjI1MTQ0ODE2LC0wLjU5NzQ5MzI2LC0xNDE1LjcwODUsNzA0LjM1ODMzKSIKICAgICAgICAgaWQ9Imc0LTUiCiAgICAgICAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iL29wdC9sYW1wcC9odGRvY3MvZHJ1cGFsL3NpdGVzL2RlZmF1bHQvZmlsZXMvaDVwL2RldmVsb3BtZW50L2g1cC1pbnRlcmFjdGl2ZS12aWRlby9zcmMvZ3VpL3Njb3JlX2g1cF93aGl0ZS5wbmciCiAgICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI5LjM1MDAwMDQiCiAgICAgICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI5LjM1MDAwMDQiCiAgICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MTtpc29sYXRpb246aXNvbGF0ZTttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7ZmlsbDojZjRiZTI0O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgZD0ibSAzOTQuNzA1LDU5MS4zNiAxMy4wMzMsMTU2LjM5MyBjIDMuNzI0LDM5LjA5OCA1MC4yNjksNTcuNzE2IDgwLjA1OCwzMS42NTEgTCA2MDUuMDkxLDY3My4yOCBjIDExLjE3MSwtMTEuMTcxIDI3LjkyNywtMTQuODk1IDQyLjgyMiwtMTEuMTcxIGwgMTUyLjY2OSwzNy4yMzYgYyAzOS4wOTgsOS4zMDkgNzAuNzQ5LC0yOS43ODkgNTMuOTkzLC02Ny4wMjUgTCA3ODkuNDExLDQ4Ny4wOTggYyAtNS41ODUsLTE0Ljg5NSAtNS41ODUsLTMxLjY1MSAzLjcyNCwtNDQuNjg0IGwgODEuOTIsLTEzNS45MTMgYyAyMC40OCwtMzMuNTEzIC03LjQ0NywtNzYuMzM1IC00Ni41NDUsLTcyLjYxMSBsIC0xNTguMjU1LDE4LjYxOCBjIC0xNi43NTYsMS44NjIgLTMxLjY1MSwtMy43MjQgLTQwLjk2LC0xNi43NTYgTCA1MjYuODk1LDExNC43MzQgQyA1MDAuODMsODQuOTQ1IDQ1MC41Niw5Ny45NzggNDQzLjExMywxMzcuMDc2IGwgLTMxLjY1MSwxNTQuNTMxIGMgLTMuNzI0LDE0Ljg5NSAtMTMuMDMzLDI3LjkyNyAtMjcuOTI3LDMzLjUxMyBsIC0xNDcuMDg0LDYxLjQ0IGMgLTM1LjM3NSwxNC44OTUgLTM5LjA5OCw2Ny4wMjUgLTMuNzI0LDg1LjY0NCBMIDM3MC41MDIsNTUwLjQgYyAxMy4wMzMsMTEuMTcxIDIyLjM0MiwyNi4wNjUgMjQuMjA0LDQwLjk2IGwgLTAuMDAxLDAgeiIKICAgICAgICAgICBpZD0icGF0aDYtMyIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgIHN0eWxlPSJjb2xvcjojMDAwMDAwO2NsaXAtcnVsZTpub256ZXJvO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2lzb2xhdGlvbjppc29sYXRlO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiNmNGJlMjQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgLz4KICAgICAgPC9nPgogICAgICA8ZwogICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjUwNDU0OTg2LDAuMjEyMzM0MDEsMC4yMTIzMzQwMSwtMC41MDQ1NDk4NiwtMTM0NC45MjgsNjgxLjkzMDM3KSIKICAgICAgICAgaWQ9Imc0LTUtNiIKICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSIvb3B0L2xhbXBwL2h0ZG9jcy9kcnVwYWwvc2l0ZXMvZGVmYXVsdC9maWxlcy9oNXAvZGV2ZWxvcG1lbnQvaDVwLWludGVyYWN0aXZlLXZpZGVvL3NyYy9ndWkvc2NvcmVfaDVwX3doaXRlLnBuZyIKICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjkuMzUwMDAwNCIKICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjkuMzUwMDAwNCIKICAgICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjppc29sYXRlO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiNmN2NmNWM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBkPSJtIDM5NC43MDUsNTkxLjM2IDEzLjAzMywxNTYuMzkzIGMgMy43MjQsMzkuMDk4IDUwLjI2OSw1Ny43MTYgODAuMDU4LDMxLjY1MSBMIDYwNS4wOTEsNjczLjI4IGMgMTEuMTcxLC0xMS4xNzEgMjcuOTI3LC0xNC44OTUgNDIuODIyLC0xMS4xNzEgbCAxNTIuNjY5LDM3LjIzNiBjIDM5LjA5OCw5LjMwOSA3MC43NDksLTI5Ljc4OSA1My45OTMsLTY3LjAyNSBMIDc4OS40MTEsNDg3LjA5OCBjIC01LjU4NSwtMTQuODk1IC01LjU4NSwtMzEuNjUxIDMuNzI0LC00NC42ODQgbCA4MS45MiwtMTM1LjkxMyBjIDIwLjQ4LC0zMy41MTMgLTcuNDQ3LC03Ni4zMzUgLTQ2LjU0NSwtNzIuNjExIGwgLTE1OC4yNTUsMTguNjE4IGMgLTE2Ljc1NiwxLjg2MiAtMzEuNjUxLC0zLjcyNCAtNDAuOTYsLTE2Ljc1NiBMIDUyNi44OTUsMTE0LjczNCBDIDUwMC44Myw4NC45NDUgNDUwLjU2LDk3Ljk3OCA0NDMuMTEzLDEzNy4wNzYgbCAtMzEuNjUxLDE1NC41MzEgYyAtMy43MjQsMTQuODk1IC0xMy4wMzMsMjcuOTI3IC0yNy45MjcsMzMuNTEzIGwgLTE0Ny4wODQsNjEuNDQgYyAtMzUuMzc1LDE0Ljg5NSAtMzkuMDk4LDY3LjAyNSAtMy43MjQsODUuNjQ0IEwgMzcwLjUwMiw1NTAuNCBjIDEzLjAzMywxMS4xNzEgMjIuMzQyLDI2LjA2NSAyNC4yMDQsNDAuOTYgbCAtMC4wMDEsMCB6IgogICAgICAgICAgIGlkPSJwYXRoNi0zLTIiCiAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtpc29sYXRpb246aXNvbGF0ZTttaXgtYmxlbmQtbW9kZTpub3JtYWw7Y29sb3ItaW50ZXJwb2xhdGlvbjpzUkdCO2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVyczpsaW5lYXJSR0I7c29saWQtY29sb3I6IzAwMDAwMDtzb2xpZC1vcGFjaXR5OjE7ZmlsbDojZjdjZjVjO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIC8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 8 */
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
    return _this;
  }

  /**
   * Get the DOM element for the board.
   *
   * @return {object} DOM element.
   */


  _createClass(Board, [{
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjU5OTRmOWM4MGQ0MGFmYzkxNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U2YTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvZGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcmJhZGdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJpZCIsImxhYmVsIiwiYnV0dG9uTGFiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJidXR0b25TeW1ib2wiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0Jsb2NrZWQiLCJ0b2dnbGVBY3RpdmF0ZWQiLCJ0cmlnZ2VyIiwiYmxvY2tlZCIsInRvZ2dsZSIsImNvbnRhaW5zIiwiYWN0aXZhdGVkIiwiaXNBY3RpdmF0ZWQiLCJ0b2dnbGVCbG9ja2VkIiwiZHVyYXRpb24iLCJ0aGF0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsIkg1UCIsIkV2ZW50RGlzcGF0Y2hlciIsIkg1UF9CSU5HT19ERUZBVUxUX0RFU0NSSVBUSU9OIiwiQmluZ28iLCJwYXJhbXMiLCJjb250ZW50SWQiLCJleHRyYXMiLCJiZWhhdmlvdXIiLCJlbmFibGVTb2x1dGlvbnNCdXR0b24iLCJlbmFibGVSZXRyeSIsImpva2VyIiwic2l6ZSIsImJ1aWxkV2lubmluZ1BhdHRlcm5zIiwicGF0dGVybnMiLCJkaWFnb25hbDEiLCJkaWFnb25hbDIiLCJpIiwiY29sIiwicm93IiwiaiIsInB1c2giLCJ3aW5uaW5nUGF0dGVybnMiLCJjaGVja1dvbiIsIndpbm5lcnMiLCJib2FyZCIsImdldE1hdGNoZXMiLCJsZW5ndGgiLCJibG9ja0J1dHRvbnMiLCJhbmltYXRlUGF0dGVybnMiLCJiaW5nbyIsImdldFhBUElBbnN3ZXJFdmVudCIsInNob3dCdXR0b24iLCJyZWdpc3RlckRvbUVsZW1lbnRzIiwibWVkaWEiLCJ0eXBlIiwibGlicmFyeSIsInNwbGl0IiwiZmlsZSIsInNldEltYWdlIiwicGF0aCIsImRpc2FibGVJbWFnZVpvb21pbmciLCJhbHQiLCJ0aXRsZSIsInNvdXJjZXMiLCJzZXRWaWRlbyIsInRhc2tEZXNjcmlwdGlvbiIsImludHJvZHVjdGlvbiIsInNldEludHJvZHVjdGlvbiIsIndvcmRzIiwic2h1ZmZsZU9uUmV0cnkiLCJidXR0b25DbGlja2VkIiwic2V0Q29udGVudCIsImdldERPTUVsZW1lbnQiLCJhZGRCdXR0b25zIiwiYWRkQnV0dG9uIiwidHJ5QWdhaW4iLCJyZXNldFRhc2siLCJnZXRBbnN3ZXJHaXZlbiIsImdldFNjb3JlIiwiZ2V0TWF4U2NvcmUiLCJzaG93U29sdXRpb25zIiwidW5kZWZpbmVkIiwiaGlkZUJ1dHRvbiIsInJlc2V0IiwiZ2V0WEFQSURhdGEiLCJzdGF0ZW1lbnQiLCJkYXRhIiwieEFQSUV2ZW50IiwiY3JlYXRlQmluZ29YQVBJRXZlbnQiLCJzZXRTY29yZWRSZXN1bHQiLCJoYXNCaW5nbyIsInJlc3VsdCIsInJlc3BvbnNlIiwiZ2V0QWN0aXZhdGVkQnV0dG9uc0xhYmVscyIsImpvaW4iLCJ2ZXJiIiwiY3JlYXRlWEFQSUV2ZW50VGVtcGxhdGUiLCJleHRlbmQiLCJnZXRWZXJpZmllZFN0YXRlbWVudFZhbHVlIiwiZ2V0eEFQSURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZ2V0VGl0bGUiLCJpbnRlcmFjdGlvblR5cGUiLCJhcmd1bWVudHMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIlF1ZXN0aW9uIiwiQm9hcmQiLCJidXR0b25zIiwiaW5pdEJ1dHRvbnMiLCJzZXRCdXR0b25MYWJlbHMiLCJzZXRKb2tlciIsIm9uIiwiZmlsbGVyIiwiZm9yRWFjaCIsInNsaWNlIiwic3BsaWNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0TGFiZWwiLCJlbmFibGVkIiwibWF0Y2hlcyIsInBhdHRlcm4iLCJldmVyeSIsImZpZWxkIiwiZmlsdGVyIiwiZ2V0TGFiZWwiLCJtYXAiLCJkZWxheSIsImFuaW1hdGVQYXR0ZXJuIiwiYW5pbWF0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7O0lBRU1BLE07OztBQUNKOzs7Ozs7QUFNQSxrQkFBYUMsRUFBYixFQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFBQTs7QUFHdEIsVUFBS0QsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsVUFBS0UsV0FBTCxHQUFtQkMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLFVBQUtGLFdBQUwsQ0FBaUJHLFNBQWpCLENBQTJCQyxHQUEzQixD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LENBQVlNLEtBQTFCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztvQ0FNaUJHLFEsRUFBcUI7QUFBQTs7QUFBQSxVQUFYa0csS0FBVyx1RUFBTCxHQUFLOztBQUNwQzs7Ozs7O0FBTUEsVUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDUCxPQUFELEVBQXdCO0FBQUEsWUFBZE0sS0FBYyx1RUFBUixHQUFROztBQUM3QyxZQUFJTixRQUFRL0UsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUN0QixpQkFBS2dFLE9BQUwsQ0FBYWUsUUFBUSxDQUFSLENBQWIsRUFBeUJRLE9BQXpCO0FBQ0FuSCxxQkFBVyxZQUFNO0FBQ2ZrSCwyQkFBZVAsUUFBUVIsS0FBUixDQUFjLENBQWQsQ0FBZjtBQUNELFdBRkQsRUFFR2MsS0FGSDtBQUdEO0FBQ0YsT0FQRDs7QUFTQWxHLGVBQVNtRixPQUFULENBQWlCLG1CQUFXO0FBQzFCZ0IsdUJBQWVQLE9BQWYsRUFBd0JNLEtBQXhCO0FBQ0QsT0FGRDtBQUdEOzs7O0VBbk1pQi9HLElBQUlDLGU7O2tCQXNNVHdGLEsiLCJmaWxlIjoiZGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjU5OTRmOWM4MGQ0MGFmYzkxNzEiLCIvKiBqc2xpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWxzIEg1UCAqL1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBINVAuRXZlbnREaXNwYXRjaGVyIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSBCdXR0b24ncyBJRC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsYWJlbF0gLSBCdXR0b24ncyBsYWJlbC5cbiAgICovXG4gIGNvbnN0cnVjdG9yIChpZCwgbGFiZWwpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuYnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmJ1dHRvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2g1cC1iaW5nby1idXR0b24tbGFiZWwnKTtcbiAgICBpZiAodHlwZW9mIGxhYmVsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5idXR0b25MYWJlbC5pbm5lckhUTUwgPSBsYWJlbDtcbiAgICB9XG5cbiAgICB0aGlzLmJ1dHRvblN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYnV0dG9uU3ltYm9sLmNsYXNzTGlzdC5hZGQoJ2g1cC1iaW5nby1idXR0b24tc3ltYm9sJyk7XG4gICAgdGhpcy5idXR0b25TeW1ib2wuY2xhc3NMaXN0LmFkZCgnaDVwLWJ1dHRvbi10cmFuc3BhcmVudCcpO1xuXG4gICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoNXAtYmluZ28tYnV0dG9uJyk7XG4gICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgIHRoaXMuYnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpZCk7XG4gICAgdGhpcy5idXR0b24uYXBwZW5kQ2hpbGQodGhpcy5idXR0b25MYWJlbCk7XG4gICAgdGhpcy5idXR0b24uYXBwZW5kQ2hpbGQodGhpcy5idXR0b25TeW1ib2wpO1xuICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzQmxvY2tlZCgpKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQWN0aXZhdGVkKCk7XG4gICAgICAgIHRoaXMudHJpZ2dlcignY2xpY2snLCB0aGlzLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGJ1dHRvbidzIERPTSBlbGVtZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IEJ1dHRvbidzIERPTSBlbGVtZW50LlxuICAgKi9cbiAgZ2V0RE9NRWxlbWVudCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBidXR0b24ncyBibG9ja2VkIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtibG9ja2VkXSAtIE9wdGlvbmFsIG92ZXJyaWRlLlxuICAgKi9cbiAgdG9nZ2xlQmxvY2tlZCAoYmxvY2tlZCkge1xuICAgIGJsb2NrZWQgPSAoIXRoaXMuaXNCbG9ja2VkKCkgfHwgYmxvY2tlZCkgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaDVwLWJ1dHRvbi1ibG9ja2VkJywgYmxvY2tlZCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGJ1dHRvbiBpcyBibG9ja2VkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlLCBpZiBidXR0b24gaXMgYWN0aXZhdGVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgaXNCbG9ja2VkICgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdoNXAtYnV0dG9uLWJsb2NrZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgYnV0dG9uJ3MgYWN0aXZhdGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtibG9ja2VkXSAtIE9wdGlvbmFsIG92ZXJyaWRlLlxuICAgKi9cbiAgdG9nZ2xlQWN0aXZhdGVkIChhY3RpdmF0ZWQpIHtcbiAgICBpZiAodGhpcy5pc0Jsb2NrZWQgKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhY3RpdmF0ZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhY3RpdmF0ZWQgPSAhdGhpcy5pc0FjdGl2YXRlZCgpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoNXAtYnV0dG9uLWFjdGl2YXRlZCcsIGFjdGl2YXRlZCk7XG4gICAgdGhpcy5idXR0b25MYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdoNXAtYnV0dG9uLXRyYW5zcGFyZW50JywgYWN0aXZhdGVkKTtcbiAgICB0aGlzLmJ1dHRvblN5bWJvbC5jbGFzc0xpc3QudG9nZ2xlKCdoNXAtYnV0dG9uLXRyYW5zcGFyZW50JywgIWFjdGl2YXRlZCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGJ1dHRvbiBpcyBhY3RpdmF0ZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUsIGlmIGJ1dHRvbiBpcyBhY3RpdmF0ZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBpc0FjdGl2YXRlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaDVwLWJ1dHRvbi1hY3RpdmF0ZWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYnV0dG9uIGxhYmVsLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSBCdXR0b24gbGFiZWwuXG4gICAqL1xuICBzZXRMYWJlbCAobGFiZWwpIHtcbiAgICB0aGlzLmJ1dHRvbkxhYmVsLmlubmVySFRNTCA9IGxhYmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBidXR0b24gbGFiZWwuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gQnV0dG9uIGxhYmVsLlxuICAgKi9cbiAgZ2V0TGFiZWwgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbkxhYmVsLmlubmVySFRNTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBidXR0b24gc3RhdGVzLlxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMudG9nZ2xlQmxvY2tlZChmYWxzZSk7XG4gICAgdGhpcy50b2dnbGVBY3RpdmF0ZWQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGUgYnV0dG9uLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTMwMF0gLSBEdXJhdGlvbiBpbiBtcy5cbiAgICovXG4gIGFuaW1hdGUgKGR1cmF0aW9uPTMwMCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnaDVwLWJ1dHRvbi1zcGlubmluZycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhhdC5idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaDVwLWJ1dHRvbi1zcGlubmluZycpO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9idXR0b24uanMiLCIvKiBqc2xpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWxzIEg1UCAqL1xuXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5cbi8vIFVzZWQgZm9yIHhBUEkgdGl0bGUgYW5kIHRhc2sgZGVzY3JpcHRpb25cbmNvbnN0IEg1UF9CSU5HT19ERUZBVUxUX0RFU0NSSVBUSU9OID0gJ0JpbmdvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZ28gZXh0ZW5kcyBINVAuUXVlc3Rpb24ge1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyAtIFBhcmFtZXRlcnMgZnJvbSBzZW1hbnRpY3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50SWQgLSBDb250ZW50IElELlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2V4dHJhc10gLSBDb250ZW50IGRhdGEgKG1ldGFkYXRhL3NhdmVzKTtcbiAgICovXG4gIGNvbnN0cnVjdG9yIChwYXJhbXMsIGNvbnRlbnRJZCwgZXh0cmFzID0ge30pIHtcbiAgICBzdXBlcignYmluZ28nKTtcblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICAgIHRoaXMucGFyYW1zLmJlaGF2aW91ciA9IHRoaXMucGFyYW1zLmJlaGF2aW91ciB8fCB7fTtcblxuICAgIC8qXG4gICAgICogdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVNvbHV0aW9uc0J1dHRvbiBhbmQgdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5IGFyZSB1c2VkIGJ5XG4gICAgICogY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItOH0gYW5kXG4gICAgICoge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItOX1cbiAgICAgKi9cbiAgICB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuZW5hYmxlU29sdXRpb25zQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5ID0gdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5IHx8IGZhbHNlO1xuXG4gICAgdGhpcy5wYXJhbXMuam9rZXIgPSB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuam9rZXIgfHwgZmFsc2U7XG4gICAgdGhpcy5wYXJhbXMuc2l6ZSA9IHBhcmFtcy5zaXplIHx8IDU7XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbGwgd2lubmluZyBwYXR0ZXJucyBmb3IgYSBCaW5nbyBzaGVldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gU2hlZXQgc2l6ZS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gQXJyYXlzIGNvbnRhaW5pbmcgcGF0dGVybnMuXG4gICAgICovXG4gICAgdGhpcy5idWlsZFdpbm5pbmdQYXR0ZXJucyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICBjb25zdCBwYXR0ZXJucyA9IFtdO1xuICAgICAgY29uc3QgZGlhZ29uYWwxID0gW107XG4gICAgICBjb25zdCBkaWFnb25hbDIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IFtdO1xuICAgICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICBjb2wucHVzaChpICogc2l6ZSArIGopO1xuICAgICAgICAgIHJvdy5wdXNoKGogKiBzaXplICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0dGVybnMucHVzaChjb2wpO1xuICAgICAgICBwYXR0ZXJucy5wdXNoKHJvdyk7XG5cbiAgICAgICAgZGlhZ29uYWwxLnB1c2goaSAqIChzaXplICsgMSkpO1xuICAgICAgICBkaWFnb25hbDIucHVzaCgoaSArIDEpICogKHNpemUgLSAxKSk7XG4gICAgICB9XG4gICAgICBwYXR0ZXJucy5wdXNoKGRpYWdvbmFsMSk7XG4gICAgICBwYXR0ZXJucy5wdXNoKGRpYWdvbmFsMik7XG4gICAgICByZXR1cm4gcGF0dGVybnM7XG4gICAgfTtcblxuICAgIHRoaXMud2lubmluZ1BhdHRlcm5zID0gdGhpcy5idWlsZFdpbm5pbmdQYXR0ZXJucyh0aGlzLnBhcmFtcy5zaXplKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGdhbWUgaGFzIGJlZW4gd29uLlxuICAgICAqL1xuICAgIHRoaXMuY2hlY2tXb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCB3aW5uZXJzID0gdGhpcy5ib2FyZC5nZXRNYXRjaGVzKHRoaXMud2lubmluZ1BhdHRlcm5zKTtcblxuICAgICAgaWYgKHdpbm5lcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuYmxvY2tCdXR0b25zKCk7XG4gICAgICAgIHRoaXMuYm9hcmQuYW5pbWF0ZVBhdHRlcm5zKHdpbm5lcnMpO1xuICAgICAgICB0aGlzLmJpbmdvID0gdHJ1ZTtcblxuICAgICAgICAvLyBUcmlnZ2VyIHhBUEkgc3RhdGVtZW50XG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmdldFhBUElBbnN3ZXJFdmVudCgpKTtcblxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5KSB7XG4gICAgICAgICAgdGhpcy5zaG93QnV0dG9uKCd0cnktYWdhaW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciB0aGUgRE9NIGVsZW1lbnRzIHdpdGggSDVQLlF1ZXN0aW9uLlxuICAgICAqL1xuICAgIHRoaXMucmVnaXN0ZXJEb21FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgIC8vIFNldCBvcHRpb25hbCBtZWRpYVxuICAgICAgdmFyIG1lZGlhID0gdGhpcy5wYXJhbXMubWVkaWEudHlwZTtcbiAgICAgIGlmIChtZWRpYSAmJiBtZWRpYS5saWJyYXJ5KSB7XG4gICAgICAgIHZhciB0eXBlID0gbWVkaWEubGlicmFyeS5zcGxpdCgnICcpWzBdO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ0g1UC5JbWFnZScpIHtcbiAgICAgICAgICBpZiAobWVkaWEucGFyYW1zLmZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW1hZ2UobWVkaWEucGFyYW1zLmZpbGUucGF0aCwge1xuICAgICAgICAgICAgICBkaXNhYmxlSW1hZ2Vab29taW5nOiB0aGlzLnBhcmFtcy5tZWRpYS5kaXNhYmxlSW1hZ2Vab29taW5nLFxuICAgICAgICAgICAgICBhbHQ6IG1lZGlhLnBhcmFtcy5hbHQsXG4gICAgICAgICAgICAgIHRpdGxlOiBtZWRpYS5wYXJhbXMudGl0bGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnSDVQLlZpZGVvJykge1xuICAgICAgICAgIGlmIChtZWRpYS5wYXJhbXMuc291cmNlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWaWRlbyhtZWRpYSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlZ2lzdGVyIG9wdGlvbmFsIHRhc2sgaW50cm9kdWN0aW9uIHRleHRcbiAgICAgIGlmICh0aGlzLnBhcmFtcy50YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgIHRoaXMuaW50cm9kdWN0aW9uLmlubmVySFRNTCA9IHRoaXMucGFyYW1zLnRhc2tEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5zZXRJbnRyb2R1Y3Rpb24odGhpcy5pbnRyb2R1Y3Rpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWdpc3RlciBjb250ZW50XG4gICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHtcbiAgICAgICAgd29yZHM6IHRoaXMucGFyYW1zLndvcmRzLFxuICAgICAgICBzaXplOiB0aGlzLnBhcmFtcy5zaXplLFxuICAgICAgICBzaHVmZmxlT25SZXRyeTogdGhpcy5wYXJhbXMuYmVoYXZpb3VyLnNodWZmbGVPblJldHJ5LFxuICAgICAgICBqb2tlcjogdGhpcy5wYXJhbXMuam9rZXIsXG4gICAgICAgIGJ1dHRvbkNsaWNrZWQ6IHRoaXMuY2hlY2tXb25cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRDb250ZW50KHRoaXMuYm9hcmQuZ2V0RE9NRWxlbWVudCgpKTtcblxuICAgICAgLy8gQWRkIGJ1dHRvbnNcbiAgICAgIHRoaXMuYWRkQnV0dG9ucygpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYWxsIHRoZSBidXR0b25zIHRoYXQgc2hhbGwgYmUgcGFzc2VkIHRvIEg1UC5RdWVzdGlvblxuICAgICAqL1xuICAgIHRoaXMuYWRkQnV0dG9ucyA9ICgpID0+IHtcbiAgICAgIC8vIFJldHJ5IGJ1dHRvblxuICAgICAgdGhpcy5hZGRCdXR0b24oJ3RyeS1hZ2FpbicsIHRoaXMucGFyYW1zLnRyeUFnYWluLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRUYXNrKCk7XG4gICAgICB9LCBmYWxzZSwge30sIHt9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc29tZSBraW5kIG9mIGFuc3dlciB3YXMgZ2l2ZW4gLS0gbm90IGFwcGxpY2FibGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlLCBpZiBhbnN3ZXIgd2FzIGdpdmVuLlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItMX1cbiAgICAgKi9cbiAgICB0aGlzLmdldEFuc3dlckdpdmVuID0gKCkgPT4gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEdldCBsYXRlc3Qgc2NvcmUgLS0gbm90IGFwcGxpY2FibGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IExhdGVzdCBzY29yZS5cbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTJ9XG4gICAgICovXG4gICAgdGhpcy5nZXRTY29yZSA9ICgpID0+IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbWF4aW11bSBwb3NzaWJsZSBzY29yZSAtLSBub3QgYXBwbGljYWJsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gU2NvcmUgbmVjZXNzYXJ5IGZvciBtYXN0ZXJpbmcuXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci0zfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0TWF4U2NvcmUgPSAoKSA9PiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogU2hvdyBzb2x1dGlvbiAtLSBub3QgYXBwbGljYWJsZS5cbiAgICAgKlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItNH1cbiAgICAgKi9cbiAgICB0aGlzLnNob3dTb2x1dGlvbnMgPSAoKSA9PiB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0YXNrLlxuICAgICAqXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci01fVxuICAgICAqL1xuICAgIHRoaXMucmVzZXRUYXNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5iaW5nbyA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRlQnV0dG9uKCd0cnktYWdhaW4nKTtcbiAgICAgIHRoaXMuYm9hcmQucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IHhBUEkgZGF0YS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH0geEFQSSBzdGF0ZW1lbnQuXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci02fVxuICAgICAqL1xuICAgIHRoaXMuZ2V0WEFQSURhdGEgPSAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0ZW1lbnQ6IHRoaXMuZ2V0WEFQSUFuc3dlckV2ZW50KCkuZGF0YS5zdGF0ZW1lbnRcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHhBUEkgYW5zd2VyIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7SDVQLlhBUElFdmVudH0gWEFQSSBhbnN3ZXIgZXZlbnQuXG4gICAgICovXG4gICAgdGhpcy5nZXRYQVBJQW5zd2VyRXZlbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB4QVBJRXZlbnQgPSB0aGlzLmNyZWF0ZUJpbmdvWEFQSUV2ZW50KCdhbnN3ZXJlZCcpO1xuXG4gICAgICB4QVBJRXZlbnQuc2V0U2NvcmVkUmVzdWx0KHRoaXMuZ2V0U2NvcmUoKSwgdGhpcy5nZXRNYXhTY29yZSgpLCB0aGlzLCB0cnVlLCB0aGlzLmhhc0JpbmdvKCkpO1xuICAgICAgeEFQSUV2ZW50LmRhdGEuc3RhdGVtZW50LnJlc3VsdC5yZXNwb25zZSA9IHRoaXMuYm9hcmRcbiAgICAgICAgLmdldEFjdGl2YXRlZEJ1dHRvbnNMYWJlbHMoKVxuICAgICAgICAuam9pbignWyxdJyk7XG5cbiAgICAgIHJldHVybiB4QVBJRXZlbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiB4QVBJIGV2ZW50IGZvciBCaW5nby5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJiIC0gU2hvcnQgaWQgb2YgdGhlIHZlcmIgd2Ugd2FudCB0byB0cmlnZ2VyLlxuICAgICAqIEByZXR1cm4ge0g1UC5YQVBJRXZlbnR9IEV2ZW50IHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHRoaXMuY3JlYXRlQmluZ29YQVBJRXZlbnQgPSAodmVyYikgPT4ge1xuICAgICAgY29uc3QgeEFQSUV2ZW50ID0gdGhpcy5jcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSh2ZXJiKTtcbiAgICAgIHRoaXMuZXh0ZW5kKFxuICAgICAgICB4QVBJRXZlbnQuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ29iamVjdCcsICdkZWZpbml0aW9uJ10pLFxuICAgICAgICB0aGlzLmdldHhBUElEZWZpbml0aW9uKCkpO1xuICAgICAgcmV0dXJuIHhBUElFdmVudDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB4QVBJIGRlZmluaXRpb24gZm9yIHRoZSB4QVBJIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gWEFQSSBkZWZpbml0aW9uLlxuICAgICAqL1xuICAgIHRoaXMuZ2V0eEFQSURlZmluaXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0ge307XG4gICAgICBkZWZpbml0aW9uLm5hbWUgPSB7J2VuLVVTJzogSDVQX0JJTkdPX0RFRkFVTFRfREVTQ1JJUFRJT059O1xuICAgICAgZGVmaW5pdGlvbi5kZXNjcmlwdGlvbiA9IHsnZW4tVVMnOiB0aGlzLmdldFRpdGxlKCl9O1xuICAgICAgZGVmaW5pdGlvbi50eXBlID0gJ2h0dHA6Ly9hZGxuZXQuZ292L2V4cGFwaS9hY3Rpdml0aWVzL2NtaS5pbnRlcmFjdGlvbic7XG4gICAgICBkZWZpbml0aW9uLmludGVyYWN0aW9uVHlwZSA9ICdvdGhlcic7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHhBUEkgZGVmaW5pdGlvbiBmb3IgdGhlIHhBUEkgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBYQVBJIGRlZmluaXRpb24uXG4gICAgICovXG4gICAgdGhpcy5nZXRUaXRsZSA9ICgpID0+ICh0aGlzLnBhcmFtcy50YXNrRGVzY3JpcHRpb24pID8gdGhpcy5wYXJhbXMudGFza0Rlc2NyaXB0aW9uIDogSDVQX0JJTkdPX0RFRkFVTFRfREVTQ1JJUFRJT047XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3Qgd2lubmluZy9jb21wbGV0aW9uIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSwgaWYgQmluZ28uXG4gICAgICovXG4gICAgdGhpcy5oYXNCaW5nbyA9ICgpID0+IHRoaXMuYmluZ287XG5cbiAgICAvKipcbiAgICAgKiBFeHRlbmQgYW4gYXJyYXkganVzdCBsaWtlIEpRdWVyeSdzIGV4dGVuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhcmd1bWVudHMgLSBPYmplY3RzIHRvIGJlIG1lcmdlZC5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IE1lcmdlZCBvYmplY3RzLlxuICAgICAqL1xuICAgIHRoaXMuZXh0ZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF1ba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGFyZ3VtZW50c1tpXVtrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICB0aGlzLmV4dGVuZChhcmd1bWVudHNbMF1ba2V5XSwgYXJndW1lbnRzW2ldW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGFyZ3VtZW50c1swXVtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2FwcC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCBCaW5nbyBmcm9tIFwiLi4vc2NyaXB0cy9hcHBcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3NjcmlwdHMvYnV0dG9uXCI7XG5cbi8vIExvYWQgbGlicmFyeVxuSDVQID0gSDVQIHx8IHt9O1xuSDVQLkJpbmdvID0gQmluZ287XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9kaXN0LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBiYWNrZ3JvdW5kOiAjZjIyNjI2O1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbi5oNXAtYmluZ28gLmg1cC1iaW5nby1jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxdnc7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxLjVlbSAwLjJlbSByZ2JhKDAsMCwwLDAuMzEpO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uOm5vdCguaDVwLWJ1dHRvbi1ibG9ja2VkKTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJ1dHRvbi1sYWJlbCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4ycywgZGlzcGxheSAwLjFzIGVhc2UgMC4ycztcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWJ1dHRvbi1zeW1ib2wge1xcbiAgb3BhY2l0eTogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltYWdlcy9zdGFyYmFkZ2Uuc3ZnXCIpICsgXCIpIGNlbnRlci84MCUgbm8tcmVwZWF0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UgMC4ycywgZGlzcGxheSAwLjFzIGVhc2UgMC4ycztcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJ1dHRvbi1hY3RpdmF0ZWQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAsMS4xKTtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJ1dHRvbi1zcGlubmluZyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtNzIwZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MjBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC03MjBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCwxLjEpO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYnV0dG9uLWJsb2NrZWQge1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYnV0dG9uLXRyYW5zcGFyZW50IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrQ2p4emRtY0tJQ0FnZUcxc2JuTTZaR005SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5bGJHVnRaVzUwY3k4eExqRXZJZ29nSUNCNGJXeHVjenBqWXowaWFIUjBjRG92TDJOeVpXRjBhWFpsWTI5dGJXOXVjeTV2Y21jdmJuTWpJZ29nSUNCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaUNpQWdJSGh0Ykc1ek9uTjJaejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpQ2lBZ0lIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJS0lDQWdlRzFzYm5NNmMyOWthWEJ2WkdrOUltaDBkSEE2THk5emIyUnBjRzlrYVM1emIzVnlZMlZtYjNKblpTNXVaWFF2UkZSRUwzTnZaR2x3YjJScExUQXVaSFJrSWdvZ0lDQjRiV3h1Y3pwcGJtdHpZMkZ3WlQwaWFIUjBjRG92TDNkM2R5NXBibXR6WTJGd1pTNXZjbWN2Ym1GdFpYTndZV05sY3k5cGJtdHpZMkZ3WlNJS0lDQWdkbVZ5YzJsdmJqMGlNUzR4SWdvZ0lDQjJhV1YzUW05NFBTSXdJQzAyTkNBMk5EQWdOalF3SWdvZ0lDQnBaRDBpYzNabk1pSUtJQ0FnYVc1cmMyTmhjR1U2ZG1WeWMybHZiajBpTUM0NU1TQnlNVE0zTWpVaUNpQWdJSE52Wkdsd2IyUnBPbVJ2WTI1aGJXVTlJbk4wWVhKaVlXUm5aUzV6ZG1jaUNpQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMW1hV3hsYm1GdFpUMGlMMmh2YldVdmFtOW9iaTlFWlhOcmRHOXdMM05qYjNKbFgyZzFjQzV3Ym1jaUNpQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMTRaSEJwUFNJNUxqTTFNREF3TURRaUNpQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMTVaSEJwUFNJNUxqTTFNREF3TURRaUNpQWdJSGRwWkhSb1BTSTJOREFpQ2lBZ0lHaGxhV2RvZEQwaU5qUXdJajRLSUNBOGJXVjBZV1JoZEdFS0lDQWdJQ0JwWkQwaWJXVjBZV1JoZEdFeE1pSStDaUFnSUNBOGNtUm1PbEpFUmo0S0lDQWdJQ0FnUEdOak9sZHZjbXNLSUNBZ0lDQWdJQ0FnY21SbU9tRmliM1YwUFNJaVBnb2dJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmMzWm5LM2h0YkR3dlpHTTZabTl5YldGMFBnb2dJQ0FnSUNBZ0lEeGtZenAwZVhCbENpQWdJQ0FnSUNBZ0lDQWdjbVJtT25KbGMyOTFjbU5sUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpHTnRhWFI1Y0dVdlUzUnBiR3hKYldGblpTSWdMejRLSUNBZ0lDQWdJQ0E4WkdNNmRHbDBiR1UrUEM5a1l6cDBhWFJzWlQ0S0lDQWdJQ0FnUEM5all6cFhiM0pyUGdvZ0lDQWdQQzl5WkdZNlVrUkdQZ29nSUR3dmJXVjBZV1JoZEdFK0NpQWdQR1JsWm5NS0lDQWdJQ0JwWkQwaVpHVm1jekV3SWo0S0lDQWdJRHh6ZEhsc1pRb2dJQ0FnSUNBZ2FXUTlJbk4wZVd4bE5ETXhNQ0krQ2lBZ0lDQWdJQzVqYkhNdE1TQjdDaUFnSUNBZ0lDQWdhWE52YkdGMGFXOXVPaUJwYzI5c1lYUmxPd29nSUNBZ0lDQjlDZ29nSUNBZ0lDQXVZMnh6TFRJZ2V3b2dJQ0FnSUNBZ0lHWnBiR3c2SUNNMU9EbGlOREk3Q2lBZ0lDQWdJSDBLQ2lBZ0lDQWdJQzVqYkhNdE15QjdDaUFnSUNBZ0lDQWdabWxzYkRvZ0l6aGhZemszWVRzS0lDQWdJQ0FnZlFvS0lDQWdJQ0FnTG1Oc2N5MDBJSHNLSUNBZ0lDQWdJQ0J2Y0dGamFYUjVPaUF3TGpJN0NpQWdJQ0FnSUNBZ2JXbDRMV0pzWlc1a0xXMXZaR1U2SUcxMWJIUnBjR3g1T3dvZ0lDQWdJQ0I5Q2dvZ0lDQWdJQ0F1WTJ4ekxUVWdld29nSUNBZ0lDQWdJR1pwYkd3NklDTm1Nall5TmpJN0NpQWdJQ0FnSUgwS0NpQWdJQ0FnSUM1amJITXROaUI3Q2lBZ0lDQWdJQ0FnWm1sc2JEb2dJMlkzWTJZMVl6c0tJQ0FnSUNBZ2ZRb0tJQ0FnSUNBZ0xtTnNjeTAzSUhzS0lDQWdJQ0FnSUNCbWFXeHNPaUJ1YjI1bE93b2dJQ0FnSUNCOUNpQWdJQ0E4TDNOMGVXeGxQZ29nSUR3dlpHVm1jejRLSUNBOGMyOWthWEJ2WkdrNmJtRnRaV1IyYVdWM0NpQWdJQ0FnY0dGblpXTnZiRzl5UFNJalptWm1abVptSWdvZ0lDQWdJR0p2Y21SbGNtTnZiRzl5UFNJak5qWTJOalkySWdvZ0lDQWdJR0p2Y21SbGNtOXdZV05wZEhrOUlqRWlDaUFnSUNBZ2IySnFaV04wZEc5c1pYSmhibU5sUFNJeE1DSUtJQ0FnSUNCbmNtbGtkRzlzWlhKaGJtTmxQU0l4TUNJS0lDQWdJQ0JuZFdsa1pYUnZiR1Z5WVc1alpUMGlNVEFpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZjR0ZuWlc5d1lXTnBkSGs5SWpBaUNpQWdJQ0FnYVc1cmMyTmhjR1U2Y0dGblpYTm9ZV1J2ZHowaU1pSUtJQ0FnSUNCcGJtdHpZMkZ3WlRwM2FXNWtiM2N0ZDJsa2RHZzlJakU0TmpFaUNpQWdJQ0FnYVc1cmMyTmhjR1U2ZDJsdVpHOTNMV2hsYVdkb2REMGlNVEExTmlJS0lDQWdJQ0JwWkQwaWJtRnRaV1IyYVdWM09DSUtJQ0FnSUNCemFHOTNaM0pwWkQwaVptRnNjMlVpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZlbTl2YlQwaU1DNDBOakE1TXpjMUlnb2dJQ0FnSUdsdWEzTmpZWEJsT21ONFBTSXRNek0wTGpneE16RTVJZ29nSUNBZ0lHbHVhM05qWVhCbE9tTjVQU0l4TXpjdU1qQXpOaklpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZkMmx1Wkc5M0xYZzlJalU1SWdvZ0lDQWdJR2x1YTNOallYQmxPbmRwYm1SdmR5MTVQU0l5TkNJS0lDQWdJQ0JwYm10elkyRndaVHAzYVc1a2IzY3RiV0Y0YVcxcGVtVmtQU0l4SWdvZ0lDQWdJR2x1YTNOallYQmxPbU4xY25KbGJuUXRiR0Y1WlhJOUluTjJaeklpQ2lBZ0lDQWdabWwwTFcxaGNtZHBiaTEwYjNBOUlqQWlDaUFnSUNBZ1ptbDBMVzFoY21kcGJpMXNaV1owUFNJd0lnb2dJQ0FnSUdacGRDMXRZWEpuYVc0dGNtbG5hSFE5SWpBaUNpQWdJQ0FnWm1sMExXMWhjbWRwYmkxaWIzUjBiMjA5SWpBaUNpQWdJQ0FnZFc1cGRITTlJbkI0SWlBdlBnb2dJRHh5WldOMENpQWdJQ0FnYzNSNWJHVTlJbWx6YjJ4aGRHbHZianBwYzI5c1lYUmxPMlpwYkd3NmJtOXVaU0lLSUNBZ0lDQjVQU0l0TVRBMU15NDFPRFEzSWdvZ0lDQWdJSGc5SWpnd09TNDBNak00TXlJS0lDQWdJQ0JqYkdGemN6MGlZMnh6TFRjaUNpQWdJQ0FnZDJsa2RHZzlJak14T1RRdU16QTFNaUlLSUNBZ0lDQm9aV2xuYUhROUlqRTRNRFF1TXpnNU9TSUtJQ0FnSUNCcFpEMGljbVZqZERRek9ESWlJQzgrQ2lBZ1BHY0tJQ0FnSUNCcFpEMGlaelEyT1RnaUNpQWdJQ0FnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01URTRNaTQ1T0RNeExEVTJMamswTkRFMk9Da2lQZ29nSUNBZ1BHTnBjbU5zWlFvZ0lDQWdJQ0FnY2owaU16SXdJZ29nSUNBZ0lDQWdZM2s5SWpFNU9TNHdOVFU0TXlJS0lDQWdJQ0FnSUdONFBTSXRPRFl5TGprNE16QTVJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzBOakE1TFRVaUNpQWdJQ0FnSUNCemRIbHNaVDBpWTI5c2IzSTZJekF3TURBd01EdGpiR2x3TFhKMWJHVTZibTl1ZW1WeWJ6dGthWE53YkdGNU9tbHViR2x1WlR0dmRtVnlabXh2ZHpwMmFYTnBZbXhsTzNacGMybGlhV3hwZEhrNmRtbHphV0pzWlR0dmNHRmphWFI1T2pFN2FYTnZiR0YwYVc5dU9tbHpiMnhoZEdVN2JXbDRMV0pzWlc1a0xXMXZaR1U2Ym05eWJXRnNPMk52Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjQ2YzFKSFFqdGpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVMV1pwYkhSbGNuTTZiR2x1WldGeVVrZENPM052Ykdsa0xXTnZiRzl5T2lNd01EQXdNREE3YzI5c2FXUXRiM0JoWTJsMGVUb3hPMlpwYkd3NkkyWXlNall5Tmp0bWFXeHNMVzl3WVdOcGRIazZNVHRtYVd4c0xYSjFiR1U2Ym05dWVtVnlienR6ZEhKdmEyVXRkMmxrZEdnNk1UdHpkSEp2YTJVdGJHbHVaV05oY0RwaWRYUjBPM04wY205clpTMXNhVzVsYW05cGJqcHRhWFJsY2p0emRISnZhMlV0YldsMFpYSnNhVzFwZERvME8zTjBjbTlyWlMxa1lYTm9ZWEp5WVhrNmJtOXVaVHR6ZEhKdmEyVXRaR0Z6YUc5bVpuTmxkRG93TzNOMGNtOXJaUzF2Y0dGamFYUjVPakU3WTI5c2IzSXRjbVZ1WkdWeWFXNW5PbUYxZEc4N2FXMWhaMlV0Y21WdVpHVnlhVzVuT21GMWRHODdjMmhoY0dVdGNtVnVaR1Z5YVc1bk9tRjFkRzg3ZEdWNGRDMXlaVzVrWlhKcGJtYzZZWFYwYnp0bGJtRmliR1V0WW1GamEyZHliM1Z1WkRwaFkyTjFiWFZzWVhSbElpQXZQZ29nSUNBZ1BHTnBjbU5zWlFvZ0lDQWdJQ0FnY2owaU16QXdJZ29nSUNBZ0lDQWdZM2s5SWpFNU9TNHdOVFU0TXlJS0lDQWdJQ0FnSUdONFBTSXRPRFl5TGprNE16QTVJZ29nSUNBZ0lDQWdhV1E5SW5CaGRHZzBOakE1SWdvZ0lDQWdJQ0FnYzNSNWJHVTlJbU52Ykc5eU9pTXdNREF3TURBN1kyeHBjQzF5ZFd4bE9tNXZibnBsY204N1pHbHpjR3hoZVRwcGJteHBibVU3YjNabGNtWnNiM2M2ZG1semFXSnNaVHQyYVhOcFltbHNhWFI1T25acGMybGliR1U3YjNCaFkybDBlVG94TzJsemIyeGhkR2x2YmpwcGMyOXNZWFJsTzIxcGVDMWliR1Z1WkMxdGIyUmxPbTV2Y20xaGJEdGpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVPbk5TUjBJN1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKek9teHBibVZoY2xKSFFqdHpiMnhwWkMxamIyeHZjam9qTURBd01EQXdPM052Ykdsa0xXOXdZV05wZEhrNk1UdG1hV3hzT2lObU1qWXlOakk3Wm1sc2JDMXZjR0ZqYVhSNU9qRTdabWxzYkMxeWRXeGxPbTV2Ym5wbGNtODdjM1J5YjJ0bExYZHBaSFJvT2pFN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzFwZEdWeWJHbHRhWFE2TkR0emRISnZhMlV0WkdGemFHRnljbUY1T201dmJtVTdjM1J5YjJ0bExXUmhjMmh2Wm1aelpYUTZNRHR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hPMk52Ykc5eUxYSmxibVJsY21sdVp6cGhkWFJ2TzJsdFlXZGxMWEpsYm1SbGNtbHVaenBoZFhSdk8zTm9ZWEJsTFhKbGJtUmxjbWx1WnpwaGRYUnZPM1JsZUhRdGNtVnVaR1Z5YVc1bk9tRjFkRzg3Wlc1aFlteGxMV0poWTJ0bmNtOTFibVE2WVdOamRXMTFiR0YwWlNJZ0x6NEtJQ0FnSUR4bkNpQWdJQ0FnSUNCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZzVOeTQzTURnd01pd3RNemN6TGpFeU1qZ3hLU0lLSUNBZ0lDQWdJR2xrUFNKbk5EWTNOaUkrQ2lBZ0lDQWdJRHhuQ2lBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RBdU5UazNORGt6TWpZc01DNHlOVEUwTkRneE5pd3dMakkxTVRRME9ERTJMQzB3TGpVNU56UTVNekkyTEMweE5ERTFMamN3T0RVc056QTBMak0xT0RNektTSUtJQ0FnSUNBZ0lDQWdhV1E5SW1jMExUVWlDaUFnSUNBZ0lDQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMW1hV3hsYm1GdFpUMGlMMjl3ZEM5c1lXMXdjQzlvZEdSdlkzTXZaSEoxY0dGc0wzTnBkR1Z6TDJSbFptRjFiSFF2Wm1sc1pYTXZhRFZ3TDJSbGRtVnNiM0J0Wlc1MEwyZzFjQzFwYm5SbGNtRmpkR2wyWlMxMmFXUmxieTl6Y21NdlozVnBMM05qYjNKbFgyZzFjRjkzYUdsMFpTNXdibWNpQ2lBZ0lDQWdJQ0FnSUdsdWEzTmpZWEJsT21WNGNHOXlkQzE0WkhCcFBTSTVMak0xTURBd01EUWlDaUFnSUNBZ0lDQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMTVaSEJwUFNJNUxqTTFNREF3TURRaUNpQWdJQ0FnSUNBZ0lITjBlV3hsUFNKamIyeHZjam9qTURBd01EQXdPMk5zYVhBdGNuVnNaVHB1YjI1NlpYSnZPMlJwYzNCc1lYazZhVzVzYVc1bE8yOTJaWEptYkc5M09uWnBjMmxpYkdVN2RtbHphV0pwYkdsMGVUcDJhWE5wWW14bE8yOXdZV05wZEhrNk1UdHBjMjlzWVhScGIyNDZhWE52YkdGMFpUdHRhWGd0WW14bGJtUXRiVzlrWlRwdWIzSnRZV3c3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmpwelVrZENPMk52Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjR0Wm1sc2RHVnljenBzYVc1bFlYSlNSMEk3YzI5c2FXUXRZMjlzYjNJNkl6QXdNREF3TUR0emIyeHBaQzF2Y0dGamFYUjVPakU3Wm1sc2JEb2paalJpWlRJME8yWnBiR3d0YjNCaFkybDBlVG94TzJacGJHd3RjblZzWlRwdWIyNTZaWEp2TzNOMGNtOXJaUzEzYVdSMGFEb3hPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qUTdjM1J5YjJ0bExXUmhjMmhoY25KaGVUcHViMjVsTzNOMGNtOXJaUzFrWVhOb2IyWm1jMlYwT2pBN2MzUnliMnRsTFc5d1lXTnBkSGs2TVR0amIyeHZjaTF5Wlc1a1pYSnBibWM2WVhWMGJ6dHBiV0ZuWlMxeVpXNWtaWEpwYm1jNllYVjBienR6YUdGd1pTMXlaVzVrWlhKcGJtYzZZWFYwYnp0MFpYaDBMWEpsYm1SbGNtbHVaenBoZFhSdk8yVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tRmpZM1Z0ZFd4aGRHVWlQZ29nSUNBZ0lDQWdJRHh3WVhSb0NpQWdJQ0FnSUNBZ0lDQWdaRDBpYlNBek9UUXVOekExTERVNU1TNHpOaUF4TXk0d016TXNNVFUyTGpNNU15QmpJRE11TnpJMExETTVMakE1T0NBMU1DNHlOamtzTlRjdU56RTJJRGd3TGpBMU9Dd3pNUzQyTlRFZ1RDQTJNRFV1TURreExEWTNNeTR5T0NCaklERXhMakUzTVN3dE1URXVNVGN4SURJM0xqa3lOeXd0TVRRdU9EazFJRFF5TGpneU1pd3RNVEV1TVRjeElHd2dNVFV5TGpZMk9Td3pOeTR5TXpZZ1l5QXpPUzR3T1Rnc09TNHpNRGtnTnpBdU56UTVMQzB5T1M0M09Ea2dOVE11T1RrekxDMDJOeTR3TWpVZ1RDQTNPRGt1TkRFeExEUTROeTR3T1RnZ1l5QXROUzQxT0RVc0xURTBMamc1TlNBdE5TNDFPRFVzTFRNeExqWTFNU0F6TGpjeU5Dd3RORFF1TmpnMElHd2dPREV1T1RJc0xURXpOUzQ1TVRNZ1l5QXlNQzQwT0N3dE16TXVOVEV6SUMwM0xqUTBOeXd0TnpZdU16TTFJQzAwTmk0MU5EVXNMVGN5TGpZeE1TQnNJQzB4TlRndU1qVTFMREU0TGpZeE9DQmpJQzB4Tmk0M05UWXNNUzQ0TmpJZ0xUTXhMalkxTVN3dE15NDNNalFnTFRRd0xqazJMQzB4Tmk0M05UWWdUQ0ExTWpZdU9EazFMREV4TkM0M016UWdReUExTURBdU9ETXNPRFF1T1RRMUlEUTFNQzQxTml3NU55NDVOemdnTkRRekxqRXhNeXd4TXpjdU1EYzJJR3dnTFRNeExqWTFNU3d4TlRRdU5UTXhJR01nTFRNdU56STBMREUwTGpnNU5TQXRNVE11TURNekxESTNMamt5TnlBdE1qY3VPVEkzTERNekxqVXhNeUJzSUMweE5EY3VNRGcwTERZeExqUTBJR01nTFRNMUxqTTNOU3d4TkM0NE9UVWdMVE01TGpBNU9DdzJOeTR3TWpVZ0xUTXVOekkwTERnMUxqWTBOQ0JNSURNM01DNDFNRElzTlRVd0xqUWdZeUF4TXk0d016TXNNVEV1TVRjeElESXlMak0wTWl3eU5pNHdOalVnTWpRdU1qQTBMRFF3TGprMklHd2dMVEF1TURBeExEQWdlaUlLSUNBZ0lDQWdJQ0FnSUNCcFpEMGljR0YwYURZdE15SUtJQ0FnSUNBZ0lDQWdJQ0JwYm10elkyRndaVHBqYjI1dVpXTjBiM0l0WTNWeWRtRjBkWEpsUFNJd0lnb2dJQ0FnSUNBZ0lDQWdJSE4wZVd4bFBTSmpiMnh2Y2pvak1EQXdNREF3TzJOc2FYQXRjblZzWlRwdWIyNTZaWEp2TzJScGMzQnNZWGs2YVc1c2FXNWxPMjkyWlhKbWJHOTNPblpwYzJsaWJHVTdkbWx6YVdKcGJHbDBlVHAyYVhOcFlteGxPMmx6YjJ4aGRHbHZianBwYzI5c1lYUmxPMjFwZUMxaWJHVnVaQzF0YjJSbE9tNXZjbTFoYkR0amIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dU9uTlNSMEk3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6T214cGJtVmhjbEpIUWp0emIyeHBaQzFqYjJ4dmNqb2pNREF3TURBd08zTnZiR2xrTFc5d1lXTnBkSGs2TVR0bWFXeHNPaU5tTkdKbE1qUTdabWxzYkMxdmNHRmphWFI1T2pFN1ptbHNiQzF5ZFd4bE9tNXZibnBsY204N2MzUnliMnRsTFhkcFpIUm9PakU3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTZORHR6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVPbTV2Ym1VN2MzUnliMnRsTFdSaGMyaHZabVp6WlhRNk1EdHpkSEp2YTJVdGIzQmhZMmwwZVRveE8yTnZiRzl5TFhKbGJtUmxjbWx1WnpwaGRYUnZPMmx0WVdkbExYSmxibVJsY21sdVp6cGhkWFJ2TzNOb1lYQmxMWEpsYm1SbGNtbHVaenBoZFhSdk8zUmxlSFF0Y21WdVpHVnlhVzVuT21GMWRHODdaVzVoWW14bExXSmhZMnRuY205MWJtUTZZV05qZFcxMWJHRjBaU0lnTHo0S0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBOFp3b2dJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3dMalV3TkRVME9UZzJMREF1TWpFeU16TTBNREVzTUM0eU1USXpNelF3TVN3dE1DNDFNRFExTkRrNE5pd3RNVE0wTkM0NU1qZ3NOamd4TGprek1ETTNLU0lLSUNBZ0lDQWdJQ0FnYVdROUltYzBMVFV0TmlJS0lDQWdJQ0FnSUNBZ2FXNXJjMk5oY0dVNlpYaHdiM0owTFdacGJHVnVZVzFsUFNJdmIzQjBMMnhoYlhCd0wyaDBaRzlqY3k5a2NuVndZV3d2YzJsMFpYTXZaR1ZtWVhWc2RDOW1hV3hsY3k5b05YQXZaR1YyWld4dmNHMWxiblF2YURWd0xXbHVkR1Z5WVdOMGFYWmxMWFpwWkdWdkwzTnlZeTluZFdrdmMyTnZjbVZmYURWd1gzZG9hWFJsTG5CdVp5SUtJQ0FnSUNBZ0lDQWdhVzVyYzJOaGNHVTZaWGh3YjNKMExYaGtjR2s5SWprdU16VXdNREF3TkNJS0lDQWdJQ0FnSUNBZ2FXNXJjMk5oY0dVNlpYaHdiM0owTFhsa2NHazlJamt1TXpVd01EQXdOQ0lLSUNBZ0lDQWdJQ0FnYzNSNWJHVTlJbU52Ykc5eU9pTXdNREF3TURBN1kyeHBjQzF5ZFd4bE9tNXZibnBsY204N1pHbHpjR3hoZVRwcGJteHBibVU3YjNabGNtWnNiM2M2ZG1semFXSnNaVHQyYVhOcFltbHNhWFI1T25acGMybGliR1U3YjNCaFkybDBlVG94TzJsemIyeGhkR2x2YmpwcGMyOXNZWFJsTzIxcGVDMWliR1Z1WkMxdGIyUmxPbTV2Y20xaGJEdGpiMnh2Y2kxcGJuUmxjbkJ2YkdGMGFXOXVPbk5TUjBJN1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKek9teHBibVZoY2xKSFFqdHpiMnhwWkMxamIyeHZjam9qTURBd01EQXdPM052Ykdsa0xXOXdZV05wZEhrNk1UdG1hV3hzT2lObU4yTm1OV003Wm1sc2JDMXZjR0ZqYVhSNU9qRTdabWxzYkMxeWRXeGxPbTV2Ym5wbGNtODdjM1J5YjJ0bExYZHBaSFJvT2pFN2MzUnliMnRsTFd4cGJtVmpZWEE2WW5WMGREdHpkSEp2YTJVdGJHbHVaV3B2YVc0NmJXbDBaWEk3YzNSeWIydGxMVzFwZEdWeWJHbHRhWFE2TkR0emRISnZhMlV0WkdGemFHRnljbUY1T201dmJtVTdjM1J5YjJ0bExXUmhjMmh2Wm1aelpYUTZNRHR6ZEhKdmEyVXRiM0JoWTJsMGVUb3hPMk52Ykc5eUxYSmxibVJsY21sdVp6cGhkWFJ2TzJsdFlXZGxMWEpsYm1SbGNtbHVaenBoZFhSdk8zTm9ZWEJsTFhKbGJtUmxjbWx1WnpwaGRYUnZPM1JsZUhRdGNtVnVaR1Z5YVc1bk9tRjFkRzg3Wlc1aFlteGxMV0poWTJ0bmNtOTFibVE2WVdOamRXMTFiR0YwWlNJK0NpQWdJQ0FnSUNBZ1BIQmhkR2dLSUNBZ0lDQWdJQ0FnSUNCa1BTSnRJRE01TkM0M01EVXNOVGt4TGpNMklERXpMakF6TXl3eE5UWXVNemt6SUdNZ015NDNNalFzTXprdU1EazRJRFV3TGpJMk9TdzFOeTQzTVRZZ09EQXVNRFU0TERNeExqWTFNU0JNSURZd05TNHdPVEVzTmpjekxqSTRJR01nTVRFdU1UY3hMQzB4TVM0eE56RWdNamN1T1RJM0xDMHhOQzQ0T1RVZ05ESXVPREl5TEMweE1TNHhOekVnYkNBeE5USXVOalk1TERNM0xqSXpOaUJqSURNNUxqQTVPQ3c1TGpNd09TQTNNQzQzTkRrc0xUSTVMamM0T1NBMU15NDVPVE1zTFRZM0xqQXlOU0JNSURjNE9TNDBNVEVzTkRnM0xqQTVPQ0JqSUMwMUxqVTROU3d0TVRRdU9EazFJQzAxTGpVNE5Td3RNekV1TmpVeElETXVOekkwTEMwME5DNDJPRFFnYkNBNE1TNDVNaXd0TVRNMUxqa3hNeUJqSURJd0xqUTRMQzB6TXk0MU1UTWdMVGN1TkRRM0xDMDNOaTR6TXpVZ0xUUTJMalUwTlN3dE56SXVOakV4SUd3Z0xURTFPQzR5TlRVc01UZ3VOakU0SUdNZ0xURTJMamMxTml3eExqZzJNaUF0TXpFdU5qVXhMQzB6TGpjeU5DQXROREF1T1RZc0xURTJMamMxTmlCTUlEVXlOaTQ0T1RVc01URTBMamN6TkNCRElEVXdNQzQ0TXl3NE5DNDVORFVnTkRVd0xqVTJMRGszTGprM09DQTBORE11TVRFekxERXpOeTR3TnpZZ2JDQXRNekV1TmpVeExERTFOQzQxTXpFZ1l5QXRNeTQzTWpRc01UUXVPRGsxSUMweE15NHdNek1zTWpjdU9USTNJQzB5Tnk0NU1qY3NNek11TlRFeklHd2dMVEUwTnk0d09EUXNOakV1TkRRZ1l5QXRNelV1TXpjMUxERTBMamc1TlNBdE16a3VNRGs0TERZM0xqQXlOU0F0TXk0M01qUXNPRFV1TmpRMElFd2dNemN3TGpVd01pdzFOVEF1TkNCaklERXpMakF6TXl3eE1TNHhOekVnTWpJdU16UXlMREkyTGpBMk5TQXlOQzR5TURRc05EQXVPVFlnYkNBdE1DNHdNREVzTUNCNklnb2dJQ0FnSUNBZ0lDQWdJR2xrUFNKd1lYUm9OaTB6TFRJaUNpQWdJQ0FnSUNBZ0lDQWdhVzVyYzJOaGNHVTZZMjl1Ym1WamRHOXlMV04xY25aaGRIVnlaVDBpTUNJS0lDQWdJQ0FnSUNBZ0lDQnpkSGxzWlQwaVkyOXNiM0k2SXpBd01EQXdNRHRqYkdsd0xYSjFiR1U2Ym05dWVtVnlienRrYVhOd2JHRjVPbWx1YkdsdVpUdHZkbVZ5Wm14dmR6cDJhWE5wWW14bE8zWnBjMmxpYVd4cGRIazZkbWx6YVdKc1pUdHBjMjlzWVhScGIyNDZhWE52YkdGMFpUdHRhWGd0WW14bGJtUXRiVzlrWlRwdWIzSnRZV3c3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmpwelVrZENPMk52Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjR0Wm1sc2RHVnljenBzYVc1bFlYSlNSMEk3YzI5c2FXUXRZMjlzYjNJNkl6QXdNREF3TUR0emIyeHBaQzF2Y0dGamFYUjVPakU3Wm1sc2JEb2paamRqWmpWak8yWnBiR3d0YjNCaFkybDBlVG94TzJacGJHd3RjblZzWlRwdWIyNTZaWEp2TzNOMGNtOXJaUzEzYVdSMGFEb3hPM04wY205clpTMXNhVzVsWTJGd09tSjFkSFE3YzNSeWIydGxMV3hwYm1WcWIybHVPbTFwZEdWeU8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qUTdjM1J5YjJ0bExXUmhjMmhoY25KaGVUcHViMjVsTzNOMGNtOXJaUzFrWVhOb2IyWm1jMlYwT2pBN2MzUnliMnRsTFc5d1lXTnBkSGs2TVR0amIyeHZjaTF5Wlc1a1pYSnBibWM2WVhWMGJ6dHBiV0ZuWlMxeVpXNWtaWEpwYm1jNllYVjBienR6YUdGd1pTMXlaVzVrWlhKcGJtYzZZWFYwYnp0MFpYaDBMWEpsYm1SbGNtbHVaenBoZFhSdk8yVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tRmpZM1Z0ZFd4aGRHVWlJQzgrQ2lBZ0lDQWdJRHd2Wno0S0lDQWdJRHd2Wno0S0lDQThMMmMrQ2p3dmMzWm5QZ289XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvc3RhcmJhZGdlLnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBqc2xpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWxzIEg1UCAqL1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBINVAuRXZlbnREaXNwYXRjaGVyIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gUGFyYW1ldGVycyBmcm9tIHNlbWFudGljcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy53b3JkcyAtIExpc3Qgb2Ygd29yZHMvcGhyYXNlcy9udW1iZXJzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnNpemUgLSBTaXplIG9mIHRoZSBib2FyZC5cbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuc2h1ZmZsZU9uUmV0cnkgLSBJZiB0cnVlLCBib2FyZCB3aWxsIGJlIHNodWZmbGVkIG9uIHJldHJ5LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwYXJhbXMuYnV0dG9uQ2xpY2tlZCAtIENhbGxiYWNrIHRvIGNoZWNrIGlmIGdhbWUgaXMgd29uLlxuICAgKi9cbiAgY29uc3RydWN0b3IgKHBhcmFtcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcblxuICAgIC8vIFNldCB3b3Jkc1xuICAgIGlmICghdGhpcy5wYXJhbXMud29yZHMpIHtcbiAgICAgIHRoaXMud29yZHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDMgKiB0aGlzLnBhcmFtcy5zaXplICogdGhpcy5wYXJhbXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgIHRoaXMud29yZHMucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLndvcmRzID0gdGhpcy5wYXJhbXMud29yZHMuc3BsaXQoJ1xcbicpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYnV0dG9uc1xuICAgIHRoaXMuYnV0dG9ucyA9IHRoaXMuaW5pdEJ1dHRvbnModGhpcy5wYXJhbXMuc2l6ZSk7XG4gICAgdGhpcy5zZXRCdXR0b25MYWJlbHModGhpcy53b3Jkcyk7XG4gICAgdGhpcy5zZXRKb2tlcih0aGlzLnBhcmFtcy5qb2tlcik7XG5cbiAgICAvLyBTZXR1cCBib2FyZFxuICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFyYW1zLnNpemU7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZCgnaDVwLWJpbmdvLWNvbHVtbicpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBhcmFtcy5zaXplOyBqKyspIHtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uc1tpICogdGhpcy5wYXJhbXMuc2l6ZSArIGpdLmdldERPTUVsZW1lbnQoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgdGhpcy5ib2FyZC5jbGFzc0xpc3QuYWRkKCdoNXAtYmluZ28tYm9hcmQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIERPTSBlbGVtZW50IGZvciB0aGUgYm9hcmQuXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gRE9NIGVsZW1lbnQuXG4gICAqL1xuICBnZXRET01FbGVtZW50ICgpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzZXQgb2YgYnV0dG9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTVdIC0gU2l6ZSBvZiB0aGUgYmluZ28gYm9hcmQuXG4gICAqIEByZXR1cm4ge29iamVjdFtdfSBBcnJheSBhcyBib2FyZC5cbiAgICovXG4gIGluaXRCdXR0b25zIChzaXplPTUpIHtcbiAgICBjb25zdCBidXR0b25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplICogc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uKGkpO1xuICAgICAgYnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wYXJhbXMuYnV0dG9uQ2xpY2tlZCgpO1xuICAgICAgfSk7XG4gICAgICBidXR0b25zLnB1c2goYnV0dG9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSYW5kb21seSBzZXQgYnV0dG9uIGxhYmVscyBmcm9tIGEgc2V0IG9mIHdvcmRzLlxuICAgKiBJZiB0aGVyZSBudW1iZXIgb2Ygd29yZHMgaXMgc21hbGxlciB0aGFuIHRoZSBudW1iZXIgb2YgYnV0dG9ucyxcbiAgICogdGhlIHdvcmRzIHdpbGwgYmUgdXNlZCByZXBlYXRlZGx5LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdFtdfSB3b3JkcyAtIFdvcmRzIHRvIHNldCBidXR0b24gbGFiZWxzIHRvLlxuICAgKi9cbiAgc2V0QnV0dG9uTGFiZWxzICh3b3Jkcykge1xuICAgIGxldCBmaWxsZXIgPSBbXTtcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgaWYgKGZpbGxlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZmlsbGVyID0gd29yZHMuc2xpY2UoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxhYmVsID0gZmlsbGVyLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWxsZXIubGVuZ3RoKSwgMSk7XG4gICAgICBidXR0b24uc2V0TGFiZWwobGFiZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgY2VudGVyIGJ1dHRvbiBhIGpva2VyLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgLSBJZiB0cnVlLCBqb2tlciBzaG91bGQgYmUgc2V0LlxuICAgKi9cbiAgc2V0Sm9rZXIgKGVuYWJsZWQpIHtcbiAgICBpZiAoZW5hYmxlZCAhPT0gdHJ1ZSB8fCB0aGlzLnBhcmFtcy5zaXplICUgMiA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE1ha2UgY2VudGVyIGJ1dHRvbiBhIGpva2VyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5idXR0b25zW01hdGguZmxvb3IodGhpcy5wYXJhbXMuc2l6ZS8yKSAqIHRoaXMucGFyYW1zLnNpemUgKyBNYXRoLmZsb29yKHRoaXMucGFyYW1zLnNpemUvMildO1xuICAgIGJ1dHRvbi50b2dnbGVBY3RpdmF0ZWQodHJ1ZSk7XG4gICAgYnV0dG9uLnRvZ2dsZUJsb2NrZWQodHJ1ZSk7XG4gICAgYnV0dG9uLnNldExhYmVsKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWF0Y2hlcyB0byBhIGJ1dHRvbiBwYXR0ZXJuLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBwYXR0ZXJucyAtIEFycmF5cyBjb250YWluaW5nIHRoZSBmaWVsZHMuXG4gICAqIEByZXR1cm4ge29iamVjdFtdfSBBbGwgcGF0dGVybnMgbWF0Y2hpbmcgdGhlIHdpbiBjb25kaXRpb24uXG4gICAqL1xuICBnZXRNYXRjaGVzIChwYXR0ZXJucykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBbXTtcbiAgICBwYXR0ZXJucy5mb3JFYWNoKHBhdHRlcm4gPT4ge1xuICAgICAgaWYgKHBhdHRlcm4uZXZlcnkoZmllbGQgPT4gdGhpcy5idXR0b25zW2ZpZWxkXS5pc0FjdGl2YXRlZCgpKSkge1xuICAgICAgICBtYXRjaGVzLnB1c2gocGF0dGVybik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxhYmVscyBmcm9tIGFsbCBidXR0b25zIHRoYXQgYXJlIGFjdGl2YXRlZC5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0W119IExhYmVsIHN0cmluZ3MuXG4gICAqL1xuICBnZXRBY3RpdmF0ZWRCdXR0b25zTGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbnNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIGJ1dHRvbiA9PiBidXR0b24uaXNBY3RpdmF0ZWQoKSAmJiBidXR0b24uZ2V0TGFiZWwoKSAhPT0gJydcbiAgICAgIClcbiAgICAgIC5tYXAoXG4gICAgICAgIGJ1dHRvbiA9PiBidXR0b24uZ2V0TGFiZWwoKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCbG9jayBhbGwgYnV0dG9ucy5cbiAgICovXG4gIGJsb2NrQnV0dG9ucyAoKSB7XG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi50b2dnbGVCbG9ja2VkKHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmxvY2sgYWxsIGJ1dHRvbnMuXG4gICAqL1xuICB1bmJsb2NrQnV0dG9ucyAoKSB7XG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi50b2dnbGVCbG9ja2VkKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgYm9hcmQuXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5yZXNldCgpO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnBhcmFtcy5zaHVmZmxlT25SZXRyeSkge1xuICAgICAgdGhpcy5zZXRCdXR0b25MYWJlbHModGhpcy53b3Jkcyk7XG4gICAgfVxuICAgIHRoaXMuc2V0Sm9rZXIodGhpcy5wYXJhbXMuam9rZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGUgcGF0dGVybnMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IHBhdHRlcm5zIC0gU2V0cyBvZiBidXR0b25zJyBJRHMgdG8gYmUgYW5pbWF0ZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXk9MTAwXSAtIE9wdGlvbmFsIGRlbGF5IGJldHdlZW4gZWFjaCBhbmltYXRpb24uXG4gICAqL1xuICBhbmltYXRlUGF0dGVybnMgKHBhdHRlcm5zLCBkZWxheT0xMDApIHtcbiAgICAvKipcbiAgICAgKiBBbmltYXRlIGEgcGF0dGVybi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IHBhdHRlcm4gLSBJRHMgb2YgYnV0dG9ucyB0byBiZSBhbmltYXRlZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PTEwMF0gLSBPcHRpb25hbCBkZWxheSBiZXR3ZWVuIGVhY2ggYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IGFuaW1hdGVQYXR0ZXJuID0gKHBhdHRlcm4sIGRlbGF5PTEwMCkgPT4ge1xuICAgICAgaWYgKHBhdHRlcm4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmJ1dHRvbnNbcGF0dGVyblswXV0uYW5pbWF0ZSgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhbmltYXRlUGF0dGVybihwYXR0ZXJuLnNsaWNlKDEpKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwYXR0ZXJucy5mb3JFYWNoKHBhdHRlcm4gPT4ge1xuICAgICAgYW5pbWF0ZVBhdHRlcm4ocGF0dGVybiwgZGVsYXkpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvYm9hcmQuanMiXSwic291cmNlUm9vdCI6IiJ9