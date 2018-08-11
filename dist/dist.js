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

  _createClass(Button, [{
    key: 'toggleBlocked',
    value: function toggleBlocked(blocked) {
      blocked = !this.isBlocked() || blocked ? true : false;
      this.button.classList.toggle('h5p-button-blocked', blocked);
    }
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
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.button;
    }
  }, {
    key: 'isActivated',
    value: function isActivated() {
      return this.button.classList.contains('h5p-button-activated');
    }
  }, {
    key: 'isBlocked',
    value: function isBlocked() {
      return this.button.classList.contains('h5p-button-blocked');
    }
  }, {
    key: 'animate',
    value: function animate() {
      var that = this;

      this.button.classList.add('h5p-button-spinning');
      setTimeout(function () {
        that.button.classList.remove('h5p-button-spinning');
      }, 300);
    }
  }, {
    key: 'setLabel',
    value: function setLabel(label) {
      this.buttonLabel.innerHTML = label;
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      return this.buttonLabel.innerHTML;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.toggleBlocked(false);
      this.toggleActivated(false);
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

var _board = __webpack_require__(8);

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jslint esversion: 6 */
/* globals H5P */

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
        checkWon: _this.checkWon
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
      var xAPIEvent = _this.createDictationXAPIEvent('answered');

      xAPIEvent.setScoredResult(_this.getScore(), _this.getMaxScore(), _this, true, _this.hasBingo());
      // TODO: Add all activated buttons here
      xAPIEvent.data.statement.result.response = _this.buttons.filter(function (button) {
        return button.isActivated();
      }).map(function (button) {
        return button.getLabel();
      }).join('[,]');

      return xAPIEvent;
    };

    /**
     * Detect winning/completion state.
     *
     * @return {boolean} True, if Bingo.
     */
    _this.hasBingo = function () {
      return _this.bingo;
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
          _this2.params.checkWon();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzgxYjlkY2JmYTIwNDIwY2RiMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzP2U2YTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvZGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcmJhZGdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJpZCIsImxhYmVsIiwiYnV0dG9uTGFiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJidXR0b25TeW1ib2wiLCJidXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0Jsb2NrZWQiLCJ0b2dnbGVBY3RpdmF0ZWQiLCJ0cmlnZ2VyIiwiYmxvY2tlZCIsInRvZ2dsZSIsImFjdGl2YXRlZCIsImlzQWN0aXZhdGVkIiwiY29udGFpbnMiLCJ0aGF0Iiwic2V0VGltZW91dCIsInJlbW92ZSIsInRvZ2dsZUJsb2NrZWQiLCJINVAiLCJFdmVudERpc3BhdGNoZXIiLCJCaW5nbyIsInBhcmFtcyIsImNvbnRlbnRJZCIsImV4dHJhcyIsImJlaGF2aW91ciIsImVuYWJsZVNvbHV0aW9uc0J1dHRvbiIsImVuYWJsZVJldHJ5Iiwiam9rZXIiLCJzaXplIiwiYnVpbGRXaW5uaW5nUGF0dGVybnMiLCJwYXR0ZXJucyIsImRpYWdvbmFsMSIsImRpYWdvbmFsMiIsImkiLCJjb2wiLCJyb3ciLCJqIiwicHVzaCIsIndpbm5pbmdQYXR0ZXJucyIsImNoZWNrV29uIiwid2lubmVycyIsImJvYXJkIiwiZ2V0TWF0Y2hlcyIsImxlbmd0aCIsImJsb2NrQnV0dG9ucyIsImFuaW1hdGVQYXR0ZXJucyIsImJpbmdvIiwic2hvd0J1dHRvbiIsInJlZ2lzdGVyRG9tRWxlbWVudHMiLCJtZWRpYSIsInR5cGUiLCJsaWJyYXJ5Iiwic3BsaXQiLCJmaWxlIiwic2V0SW1hZ2UiLCJwYXRoIiwiZGlzYWJsZUltYWdlWm9vbWluZyIsImFsdCIsInRpdGxlIiwic291cmNlcyIsInNldFZpZGVvIiwidGFza0Rlc2NyaXB0aW9uIiwiaW50cm9kdWN0aW9uIiwic2V0SW50cm9kdWN0aW9uIiwid29yZHMiLCJzaHVmZmxlT25SZXRyeSIsInNldENvbnRlbnQiLCJnZXRET01FbGVtZW50IiwiYWRkQnV0dG9ucyIsImFkZEJ1dHRvbiIsInRyeUFnYWluIiwicmVzZXRUYXNrIiwiZ2V0QW5zd2VyR2l2ZW4iLCJnZXRTY29yZSIsImdldE1heFNjb3JlIiwic2hvd1NvbHV0aW9ucyIsInVuZGVmaW5lZCIsImhpZGVCdXR0b24iLCJyZXNldCIsImdldFhBUElEYXRhIiwic3RhdGVtZW50IiwiZ2V0WEFQSUFuc3dlckV2ZW50IiwiZGF0YSIsInhBUElFdmVudCIsImNyZWF0ZURpY3RhdGlvblhBUElFdmVudCIsInNldFNjb3JlZFJlc3VsdCIsImhhc0JpbmdvIiwicmVzdWx0IiwicmVzcG9uc2UiLCJidXR0b25zIiwiZmlsdGVyIiwibWFwIiwiZ2V0TGFiZWwiLCJqb2luIiwiUXVlc3Rpb24iLCJCb2FyZCIsImluaXRCdXR0b25zIiwic2V0QnV0dG9uTGFiZWxzIiwic2V0Sm9rZXIiLCJvbiIsImZpbGxlciIsImZvckVhY2giLCJzbGljZSIsInNwbGljZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldExhYmVsIiwiZW5hYmxlZCIsIm1hdGNoZXMiLCJwYXR0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QUtnQyxlQUFMLENBQXFCLEtBQUtqQyxLQUExQjtBQUNEO0FBQ0QsV0FBS2tDLFFBQUwsQ0FBYyxLQUFLN0UsTUFBTCxDQUFZTSxLQUExQjtBQUNEOztBQUVEOzs7Ozs7Ozs7b0NBTWlCRyxRLEVBQXFCO0FBQUE7O0FBQUEsVUFBWG1GLEtBQVcsdUVBQUwsR0FBSzs7QUFDcEM7Ozs7OztBQU1BLFVBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0osT0FBRCxFQUF3QjtBQUFBLFlBQWRHLEtBQWMsdUVBQVIsR0FBUTs7QUFDN0MsWUFBSUgsUUFBUW5FLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsaUJBQUs4QyxPQUFMLENBQWFxQixRQUFRLENBQVIsQ0FBYixFQUF5QkssT0FBekI7QUFDQXBHLHFCQUFXLFlBQU07QUFDZm1HLDJCQUFlSixRQUFRUixLQUFSLENBQWMsQ0FBZCxDQUFmO0FBQ0QsV0FGRCxFQUVHVyxLQUZIO0FBR0Q7QUFDRixPQVBEOztBQVNBbkYsZUFBU3VFLE9BQVQsQ0FBaUIsbUJBQVc7QUFDMUJhLHVCQUFlSixPQUFmLEVBQXdCRyxLQUF4QjtBQUNELE9BRkQ7QUFHRDs7OztFQS9LaUIvRixJQUFJQyxlOztrQkFrTFQ0RSxLIiwiZmlsZSI6ImRpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM4MWI5ZGNiZmEyMDQyMGNkYjBmIiwiLyoganNsaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFscyBINVAgKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgSDVQLkV2ZW50RGlzcGF0Y2hlciB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKGlkLCBsYWJlbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuYnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmJ1dHRvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2g1cC1iaW5nby1idXR0b24tbGFiZWwnKTtcbiAgICBpZiAodHlwZW9mIGxhYmVsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5idXR0b25MYWJlbC5pbm5lckhUTUwgPSBsYWJlbDsgIFxuICAgIH1cblxuICAgIHRoaXMuYnV0dG9uU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5idXR0b25TeW1ib2wuY2xhc3NMaXN0LmFkZCgnaDVwLWJpbmdvLWJ1dHRvbi1zeW1ib2wnKTtcbiAgICB0aGlzLmJ1dHRvblN5bWJvbC5jbGFzc0xpc3QuYWRkKCdoNXAtYnV0dG9uLXRyYW5zcGFyZW50Jyk7XG5cbiAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2g1cC1iaW5nby1idXR0b24nKTtcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgdGhpcy5idXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGlkKTtcbiAgICB0aGlzLmJ1dHRvbi5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkxhYmVsKTtcbiAgICB0aGlzLmJ1dHRvbi5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvblN5bWJvbCk7XG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNCbG9ja2VkKCkpIHtcbiAgICAgICAgdGhpcy50b2dnbGVBY3RpdmF0ZWQoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIHRoaXMuaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlQmxvY2tlZCAoYmxvY2tlZCkge1xuICAgIGJsb2NrZWQgPSAoIXRoaXMuaXNCbG9ja2VkKCkgfHwgYmxvY2tlZCkgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaDVwLWJ1dHRvbi1ibG9ja2VkJywgYmxvY2tlZCk7XG4gIH1cblxuICB0b2dnbGVBY3RpdmF0ZWQgKGFjdGl2YXRlZCkge1xuICAgIGlmICh0aGlzLmlzQmxvY2tlZCAoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFjdGl2YXRlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFjdGl2YXRlZCA9ICF0aGlzLmlzQWN0aXZhdGVkKCkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaDVwLWJ1dHRvbi1hY3RpdmF0ZWQnLCBhY3RpdmF0ZWQpO1xuICAgICAgdGhpcy5idXR0b25MYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdoNXAtYnV0dG9uLXRyYW5zcGFyZW50JywgYWN0aXZhdGVkKTtcbiAgICAgIHRoaXMuYnV0dG9uU3ltYm9sLmNsYXNzTGlzdC50b2dnbGUoJ2g1cC1idXR0b24tdHJhbnNwYXJlbnQnLCAhYWN0aXZhdGVkKTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcbiAgfVxuXG4gIGlzQWN0aXZhdGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdoNXAtYnV0dG9uLWFjdGl2YXRlZCcpO1xuICB9XG5cbiAgaXNCbG9ja2VkICgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdoNXAtYnV0dG9uLWJsb2NrZWQnKTtcbiAgfVxuXG4gIGFuaW1hdGUgKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnaDVwLWJ1dHRvbi1zcGlubmluZycpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaDVwLWJ1dHRvbi1zcGlubmluZycpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBzZXRMYWJlbChsYWJlbCkge1xuICAgIHRoaXMuYnV0dG9uTGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b25MYWJlbC5pbm5lckhUTUw7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRvZ2dsZUJsb2NrZWQoZmFsc2UpO1xuICAgIHRoaXMudG9nZ2xlQWN0aXZhdGVkKGZhbHNlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9idXR0b24uanMiLCIvKiBqc2xpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWxzIEg1UCAqL1xuXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmdvIGV4dGVuZHMgSDVQLlF1ZXN0aW9uIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gUGFyYW1ldGVycyBmcm9tIHNlbWFudGljcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRJZCAtIENvbnRlbnQgSUQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZXh0cmFzXSAtIENvbnRlbnQgZGF0YSAobWV0YWRhdGEvc2F2ZXMpO1xuICAgKi9cbiAgY29uc3RydWN0b3IgKHBhcmFtcywgY29udGVudElkLCBleHRyYXMgPSB7fSkge1xuICAgIHN1cGVyKCdiaW5nbycpO1xuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgdGhpcy5wYXJhbXMuYmVoYXZpb3VyID0gdGhpcy5wYXJhbXMuYmVoYXZpb3VyIHx8IHt9O1xuXG4gICAgLypcbiAgICAgKiB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuZW5hYmxlU29sdXRpb25zQnV0dG9uIGFuZCB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuZW5hYmxlUmV0cnkgYXJlIHVzZWQgYnlcbiAgICAgKiBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci04fSBhbmRcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci05fVxuICAgICAqL1xuICAgIHRoaXMucGFyYW1zLmJlaGF2aW91ci5lbmFibGVTb2x1dGlvbnNCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuZW5hYmxlUmV0cnkgPSB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuZW5hYmxlUmV0cnkgfHwgZmFsc2U7XG5cbiAgICB0aGlzLnBhcmFtcy5qb2tlciA9IHRoaXMucGFyYW1zLmJlaGF2aW91ci5qb2tlciB8fCBmYWxzZTtcbiAgICB0aGlzLnBhcmFtcy5zaXplID0gcGFyYW1zLnNpemUgfHwgNTtcblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGFsbCB3aW5uaW5nIHBhdHRlcm5zIGZvciBhIEJpbmdvIHNoZWV0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSBTaGVldCBzaXplLlxuICAgICAqIEByZXR1cm4ge29iamVjdFtdfSBBcnJheXMgY29udGFpbmluZyBwYXR0ZXJucy5cbiAgICAgKi9cbiAgICB0aGlzLmJ1aWxkV2lubmluZ1BhdHRlcm5zID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgIGNvbnN0IHBhdHRlcm5zID0gW107XG4gICAgICBjb25zdCBkaWFnb25hbDEgPSBbXTtcbiAgICAgIGNvbnN0IGRpYWdvbmFsMiA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sID0gW107XG4gICAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgIGNvbC5wdXNoKGkgKiBzaXplICsgaik7XG4gICAgICAgICAgcm93LnB1c2goaiAqIHNpemUgKyBpKTtcbiAgICAgICAgfVxuICAgICAgICBwYXR0ZXJucy5wdXNoKGNvbCk7XG4gICAgICAgIHBhdHRlcm5zLnB1c2gocm93KTtcblxuICAgICAgICBkaWFnb25hbDEucHVzaChpICogKHNpemUgKyAxKSk7XG4gICAgICAgIGRpYWdvbmFsMi5wdXNoKChpICsgMSkgKiAoc2l6ZSAtIDEpKTtcbiAgICAgIH1cbiAgICAgIHBhdHRlcm5zLnB1c2goZGlhZ29uYWwxKTtcbiAgICAgIHBhdHRlcm5zLnB1c2goZGlhZ29uYWwyKTtcbiAgICAgIHJldHVybiBwYXR0ZXJucztcbiAgICB9O1xuXG4gICAgdGhpcy53aW5uaW5nUGF0dGVybnMgPSB0aGlzLmJ1aWxkV2lubmluZ1BhdHRlcm5zKHRoaXMucGFyYW1zLnNpemUpO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgZ2FtZSBoYXMgYmVlbiB3b24uXG4gICAgICovXG4gICAgdGhpcy5jaGVja1dvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHdpbm5lcnMgPSB0aGlzLmJvYXJkLmdldE1hdGNoZXModGhpcy53aW5uaW5nUGF0dGVybnMpO1xuXG4gICAgICBpZiAod2lubmVycy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhpcy5ib2FyZC5ibG9ja0J1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hbmltYXRlUGF0dGVybnMod2lubmVycyk7XG4gICAgICAgIHRoaXMuYmluZ28gPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5KSB7XG4gICAgICAgICAgdGhpcy5zaG93QnV0dG9uKCd0cnktYWdhaW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciB0aGUgRE9NIGVsZW1lbnRzIHdpdGggSDVQLlF1ZXN0aW9uLlxuICAgICAqL1xuICAgIHRoaXMucmVnaXN0ZXJEb21FbGVtZW50cyA9ICgpID0+IHtcbiAgICAgIC8vIFNldCBvcHRpb25hbCBtZWRpYVxuICAgICAgdmFyIG1lZGlhID0gdGhpcy5wYXJhbXMubWVkaWEudHlwZTtcbiAgICAgIGlmIChtZWRpYSAmJiBtZWRpYS5saWJyYXJ5KSB7XG4gICAgICAgIHZhciB0eXBlID0gbWVkaWEubGlicmFyeS5zcGxpdCgnICcpWzBdO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ0g1UC5JbWFnZScpIHtcbiAgICAgICAgICBpZiAobWVkaWEucGFyYW1zLmZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW1hZ2UobWVkaWEucGFyYW1zLmZpbGUucGF0aCwge1xuICAgICAgICAgICAgICBkaXNhYmxlSW1hZ2Vab29taW5nOiB0aGlzLnBhcmFtcy5tZWRpYS5kaXNhYmxlSW1hZ2Vab29taW5nLFxuICAgICAgICAgICAgICBhbHQ6IG1lZGlhLnBhcmFtcy5hbHQsXG4gICAgICAgICAgICAgIHRpdGxlOiBtZWRpYS5wYXJhbXMudGl0bGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnSDVQLlZpZGVvJykge1xuICAgICAgICAgIGlmIChtZWRpYS5wYXJhbXMuc291cmNlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWaWRlbyhtZWRpYSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFJlZ2lzdGVyIG9wdGlvbmFsIHRhc2sgaW50cm9kdWN0aW9uIHRleHRcbiAgICAgIGlmICh0aGlzLnBhcmFtcy50YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5pbnRyb2R1Y3Rpb24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgIHRoaXMuaW50cm9kdWN0aW9uLmlubmVySFRNTCA9IHRoaXMucGFyYW1zLnRhc2tEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5zZXRJbnRyb2R1Y3Rpb24odGhpcy5pbnRyb2R1Y3Rpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWdpc3RlciBjb250ZW50XG4gICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHtcbiAgICAgICAgd29yZHM6IHRoaXMucGFyYW1zLndvcmRzLFxuICAgICAgICBzaXplOiB0aGlzLnBhcmFtcy5zaXplLFxuICAgICAgICBzaHVmZmxlT25SZXRyeTogdGhpcy5wYXJhbXMuYmVoYXZpb3VyLnNodWZmbGVPblJldHJ5LFxuICAgICAgICBqb2tlcjogdGhpcy5wYXJhbXMuam9rZXIsXG4gICAgICAgIGNoZWNrV29uOiB0aGlzLmNoZWNrV29uXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0Q29udGVudCh0aGlzLmJvYXJkLmdldERPTUVsZW1lbnQoKSk7XG5cbiAgICAgIC8vIEFkZCBidXR0b25zXG4gICAgICB0aGlzLmFkZEJ1dHRvbnMoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGFsbCB0aGUgYnV0dG9ucyB0aGF0IHNoYWxsIGJlIHBhc3NlZCB0byBINVAuUXVlc3Rpb25cbiAgICAgKi9cbiAgICB0aGlzLmFkZEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAvLyBSZXRyeSBidXR0b25cbiAgICAgIHRoaXMuYWRkQnV0dG9uKCd0cnktYWdhaW4nLCB0aGlzLnBhcmFtcy50cnlBZ2FpbiwgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0VGFzaygpO1xuICAgICAgfSwgZmFsc2UsIHt9LCB7fSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHNvbWUga2luZCBvZiBhbnN3ZXIgd2FzIGdpdmVuIC0tIG5vdCBhcHBsaWNhYmxlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSwgaWYgYW5zd2VyIHdhcyBnaXZlbi5cbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTF9XG4gICAgICovXG4gICAgdGhpcy5nZXRBbnN3ZXJHaXZlbiA9ICgpID0+IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbGF0ZXN0IHNjb3JlIC0tIG5vdCBhcHBsaWNhYmxlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBMYXRlc3Qgc2NvcmUuXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci0yfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0U2NvcmUgPSAoKSA9PiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogR2V0IG1heGltdW0gcG9zc2libGUgc2NvcmUgLS0gbm90IGFwcGxpY2FibGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFNjb3JlIG5lY2Vzc2FyeSBmb3IgbWFzdGVyaW5nLlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItM31cbiAgICAgKi9cbiAgICB0aGlzLmdldE1heFNjb3JlID0gKCkgPT4gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFNob3cgc29sdXRpb24gLS0gbm90IGFwcGxpY2FibGUuXG4gICAgICpcbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTR9XG4gICAgICovXG4gICAgdGhpcy5zaG93U29sdXRpb25zID0gKCkgPT4gdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGFzay5cbiAgICAgKlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItNX1cbiAgICAgKi9cbiAgICB0aGlzLnJlc2V0VGFzayA9ICgpID0+IHtcbiAgICAgIHRoaXMuYmluZ28gPSBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbigndHJ5LWFnYWluJyk7XG4gICAgICB0aGlzLmJvYXJkLnJlc2V0KCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB4QVBJIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHhBUEkgc3RhdGVtZW50LlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItNn1cbiAgICAgKi9cbiAgICB0aGlzLmdldFhBUElEYXRhID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGVtZW50OiB0aGlzLmdldFhBUElBbnN3ZXJFdmVudCgpLmRhdGEuc3RhdGVtZW50XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB4QVBJIGFuc3dlciBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0g1UC5YQVBJRXZlbnR9IFhBUEkgYW5zd2VyIGV2ZW50LlxuICAgICAqL1xuICAgIHRoaXMuZ2V0WEFQSUFuc3dlckV2ZW50ID0gKCkgPT4ge1xuICAgICAgY29uc3QgeEFQSUV2ZW50ID0gdGhpcy5jcmVhdGVEaWN0YXRpb25YQVBJRXZlbnQoJ2Fuc3dlcmVkJyk7XG5cbiAgICAgIHhBUElFdmVudC5zZXRTY29yZWRSZXN1bHQodGhpcy5nZXRTY29yZSgpLCB0aGlzLmdldE1heFNjb3JlKCksIHRoaXMsIHRydWUsIHRoaXMuaGFzQmluZ28oKSk7XG4gICAgICAvLyBUT0RPOiBBZGQgYWxsIGFjdGl2YXRlZCBidXR0b25zIGhlcmVcbiAgICAgIHhBUElFdmVudC5kYXRhLnN0YXRlbWVudC5yZXN1bHQucmVzcG9uc2UgPSB0aGlzLmJ1dHRvbnNcbiAgICAgICAgLmZpbHRlcihidXR0b24gPT4gYnV0dG9uLmlzQWN0aXZhdGVkKCkpXG4gICAgICAgIC5tYXAoYnV0dG9uID0+IGJ1dHRvbi5nZXRMYWJlbCgpKVxuICAgICAgICAuam9pbignWyxdJyk7XG5cbiAgICAgIHJldHVybiB4QVBJRXZlbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCB3aW5uaW5nL2NvbXBsZXRpb24gc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlLCBpZiBCaW5nby5cbiAgICAgKi9cbiAgICB0aGlzLmhhc0JpbmdvID0gKCkgPT4gdGhpcy5iaW5nbztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvYXBwLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IEJpbmdvIGZyb20gXCIuLi9zY3JpcHRzL2FwcFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vc2NyaXB0cy9idXR0b25cIjtcblxuLy8gTG9hZCBsaWJyYXJ5XG5INVAgPSBINVAgfHwge307XG5INVAuQmluZ28gPSBCaW5nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2Rpc3QuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaDVwLWJpbmdvIC5oNXAtYmluZ28tYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJhY2tncm91bmQ6ICNmMjI2MjY7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmg1cC1iaW5nbyAuaDVwLWJpbmdvLWNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDAuMWVtIHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDF2dztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEuNWVtIDAuMmVtIHJnYmEoMCwwLDAsMC4zMSk7XFxufVxcblxcbi5oNXAtYmluZ28gLmg1cC1iaW5nby1idXR0b246bm90KC5oNXAtYnV0dG9uLWJsb2NrZWQpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxufVxcblxcbi5oNXAtYmluZ28gLmg1cC1iaW5nby1idXR0b246YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uLWxhYmVsIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZSAwLjJzLCBkaXNwbGF5IDAuMXMgZWFzZSAwLjJzO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYmluZ28tYnV0dG9uLXN5bWJvbCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1hZ2VzL3N0YXJiYWRnZS5zdmdcIikgKyBcIikgY2VudGVyLzgwJSBuby1yZXBlYXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZSAwLjJzLCBkaXNwbGF5IDAuMXMgZWFzZSAwLjJzO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYnV0dG9uLWFjdGl2YXRlZCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCwxLjEpO1xcbn1cXG5cXG4uaDVwLWJpbmdvIC5oNXAtYnV0dG9uLXNwaW5uaW5nIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC03MjBkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTcyMGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTcyMGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLDEuMSk7XFxufVxcblxcbi5oNXAtYmluZ28gLmg1cC1idXR0b24tYmxvY2tlZCB7XFxufVxcblxcbi5oNXAtYmluZ28gLmg1cC1idXR0b24tdHJhbnNwYXJlbnQge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDanh6ZG1jS0lDQWdlRzFzYm5NNlpHTTlJbWgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdklnb2dJQ0I0Yld4dWN6cGpZejBpYUhSMGNEb3ZMMk55WldGMGFYWmxZMjl0Ylc5dWN5NXZjbWN2Ym5Naklnb2dJQ0I0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pQ2lBZ0lIaHRiRzV6T25OMlp6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lDaUFnSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlLSUNBZ2VHMXNibk02YzI5a2FYQnZaR2s5SW1oMGRIQTZMeTl6YjJScGNHOWthUzV6YjNWeVkyVm1iM0puWlM1dVpYUXZSRlJFTDNOdlpHbHdiMlJwTFRBdVpIUmtJZ29nSUNCNGJXeHVjenBwYm10elkyRndaVDBpYUhSMGNEb3ZMM2QzZHk1cGJtdHpZMkZ3WlM1dmNtY3ZibUZ0WlhOd1lXTmxjeTlwYm10elkyRndaU0lLSUNBZ2RtVnljMmx2YmowaU1TNHhJZ29nSUNCMmFXVjNRbTk0UFNJd0lDMDJOQ0EyTkRBZ05qUXdJZ29nSUNCcFpEMGljM1puTWlJS0lDQWdhVzVyYzJOaGNHVTZkbVZ5YzJsdmJqMGlNQzQ1TVNCeU1UTTNNalVpQ2lBZ0lITnZaR2x3YjJScE9tUnZZMjVoYldVOUluTjBZWEppWVdSblpTNXpkbWNpQ2lBZ0lHbHVhM05qWVhCbE9tVjRjRzl5ZEMxbWFXeGxibUZ0WlQwaUwyaHZiV1V2YW05b2JpOUVaWE5yZEc5d0wzTmpiM0psWDJnMWNDNXdibWNpQ2lBZ0lHbHVhM05qWVhCbE9tVjRjRzl5ZEMxNFpIQnBQU0k1TGpNMU1EQXdNRFFpQ2lBZ0lHbHVhM05qWVhCbE9tVjRjRzl5ZEMxNVpIQnBQU0k1TGpNMU1EQXdNRFFpQ2lBZ0lIZHBaSFJvUFNJMk5EQWlDaUFnSUdobGFXZG9kRDBpTmpRd0lqNEtJQ0E4YldWMFlXUmhkR0VLSUNBZ0lDQnBaRDBpYldWMFlXUmhkR0V4TWlJK0NpQWdJQ0E4Y21SbU9sSkVSajRLSUNBZ0lDQWdQR05qT2xkdmNtc0tJQ0FnSUNBZ0lDQWdjbVJtT21GaWIzVjBQU0lpUGdvZ0lDQWdJQ0FnSUR4a1l6cG1iM0p0WVhRK2FXMWhaMlV2YzNabkszaHRiRHd2WkdNNlptOXliV0YwUGdvZ0lDQWdJQ0FnSUR4a1l6cDBlWEJsQ2lBZ0lDQWdJQ0FnSUNBZ2NtUm1PbkpsYzI5MWNtTmxQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012WkdOdGFYUjVjR1V2VTNScGJHeEpiV0ZuWlNJZ0x6NEtJQ0FnSUNBZ0lDQThaR002ZEdsMGJHVStQQzlrWXpwMGFYUnNaVDRLSUNBZ0lDQWdQQzlqWXpwWGIzSnJQZ29nSUNBZ1BDOXlaR1k2VWtSR1Bnb2dJRHd2YldWMFlXUmhkR0UrQ2lBZ1BHUmxabk1LSUNBZ0lDQnBaRDBpWkdWbWN6RXdJajRLSUNBZ0lEeHpkSGxzWlFvZ0lDQWdJQ0FnYVdROUluTjBlV3hsTkRNeE1DSStDaUFnSUNBZ0lDNWpiSE10TVNCN0NpQWdJQ0FnSUNBZ2FYTnZiR0YwYVc5dU9pQnBjMjlzWVhSbE93b2dJQ0FnSUNCOUNnb2dJQ0FnSUNBdVkyeHpMVElnZXdvZ0lDQWdJQ0FnSUdacGJHdzZJQ00xT0RsaU5ESTdDaUFnSUNBZ0lIMEtDaUFnSUNBZ0lDNWpiSE10TXlCN0NpQWdJQ0FnSUNBZ1ptbHNiRG9nSXpoaFl6azNZVHNLSUNBZ0lDQWdmUW9LSUNBZ0lDQWdMbU5zY3kwMElIc0tJQ0FnSUNBZ0lDQnZjR0ZqYVhSNU9pQXdMakk3Q2lBZ0lDQWdJQ0FnYldsNExXSnNaVzVrTFcxdlpHVTZJRzExYkhScGNHeDVPd29nSUNBZ0lDQjlDZ29nSUNBZ0lDQXVZMnh6TFRVZ2V3b2dJQ0FnSUNBZ0lHWnBiR3c2SUNObU1qWXlOakk3Q2lBZ0lDQWdJSDBLQ2lBZ0lDQWdJQzVqYkhNdE5pQjdDaUFnSUNBZ0lDQWdabWxzYkRvZ0kyWTNZMlkxWXpzS0lDQWdJQ0FnZlFvS0lDQWdJQ0FnTG1Oc2N5MDNJSHNLSUNBZ0lDQWdJQ0JtYVd4c09pQnViMjVsT3dvZ0lDQWdJQ0I5Q2lBZ0lDQThMM04wZVd4bFBnb2dJRHd2WkdWbWN6NEtJQ0E4YzI5a2FYQnZaR2s2Ym1GdFpXUjJhV1YzQ2lBZ0lDQWdjR0ZuWldOdmJHOXlQU0lqWm1abVptWm1JZ29nSUNBZ0lHSnZjbVJsY21OdmJHOXlQU0lqTmpZMk5qWTJJZ29nSUNBZ0lHSnZjbVJsY205d1lXTnBkSGs5SWpFaUNpQWdJQ0FnYjJKcVpXTjBkRzlzWlhKaGJtTmxQU0l4TUNJS0lDQWdJQ0JuY21sa2RHOXNaWEpoYm1ObFBTSXhNQ0lLSUNBZ0lDQm5kV2xrWlhSdmJHVnlZVzVqWlQwaU1UQWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmNHRm5aVzl3WVdOcGRIazlJakFpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZjR0ZuWlhOb1lXUnZkejBpTWlJS0lDQWdJQ0JwYm10elkyRndaVHAzYVc1a2IzY3RkMmxrZEdnOUlqRTROakVpQ2lBZ0lDQWdhVzVyYzJOaGNHVTZkMmx1Wkc5M0xXaGxhV2RvZEQwaU1UQTFOaUlLSUNBZ0lDQnBaRDBpYm1GdFpXUjJhV1YzT0NJS0lDQWdJQ0J6YUc5M1ozSnBaRDBpWm1Gc2MyVWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmVtOXZiVDBpTUM0ME5qQTVNemMxSWdvZ0lDQWdJR2x1YTNOallYQmxPbU40UFNJdE16TTBMamd4TXpFNUlnb2dJQ0FnSUdsdWEzTmpZWEJsT21ONVBTSXhNemN1TWpBek5qSWlDaUFnSUNBZ2FXNXJjMk5oY0dVNmQybHVaRzkzTFhnOUlqVTVJZ29nSUNBZ0lHbHVhM05qWVhCbE9uZHBibVJ2ZHkxNVBTSXlOQ0lLSUNBZ0lDQnBibXR6WTJGd1pUcDNhVzVrYjNjdGJXRjRhVzFwZW1Wa1BTSXhJZ29nSUNBZ0lHbHVhM05qWVhCbE9tTjFjbkpsYm5RdGJHRjVaWEk5SW5OMlp6SWlDaUFnSUNBZ1ptbDBMVzFoY21kcGJpMTBiM0E5SWpBaUNpQWdJQ0FnWm1sMExXMWhjbWRwYmkxc1pXWjBQU0l3SWdvZ0lDQWdJR1pwZEMxdFlYSm5hVzR0Y21sbmFIUTlJakFpQ2lBZ0lDQWdabWwwTFcxaGNtZHBiaTFpYjNSMGIyMDlJakFpQ2lBZ0lDQWdkVzVwZEhNOUluQjRJaUF2UGdvZ0lEeHlaV04wQ2lBZ0lDQWdjM1I1YkdVOUltbHpiMnhoZEdsdmJqcHBjMjlzWVhSbE8yWnBiR3c2Ym05dVpTSUtJQ0FnSUNCNVBTSXRNVEExTXk0MU9EUTNJZ29nSUNBZ0lIZzlJamd3T1M0ME1qTTRNeUlLSUNBZ0lDQmpiR0Z6Y3owaVkyeHpMVGNpQ2lBZ0lDQWdkMmxrZEdnOUlqTXhPVFF1TXpBMU1pSUtJQ0FnSUNCb1pXbG5hSFE5SWpFNE1EUXVNemc1T1NJS0lDQWdJQ0JwWkQwaWNtVmpkRFF6T0RJaUlDOCtDaUFnUEdjS0lDQWdJQ0JwWkQwaVp6UTJPVGdpQ2lBZ0lDQWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTVRFNE1pNDVPRE14TERVMkxqazBOREUyT0NraVBnb2dJQ0FnUEdOcGNtTnNaUW9nSUNBZ0lDQWdjajBpTXpJd0lnb2dJQ0FnSUNBZ1kzazlJakU1T1M0d05UVTRNeUlLSUNBZ0lDQWdJR040UFNJdE9EWXlMams0TXpBNUlnb2dJQ0FnSUNBZ2FXUTlJbkJoZEdnME5qQTVMVFVpQ2lBZ0lDQWdJQ0J6ZEhsc1pUMGlZMjlzYjNJNkl6QXdNREF3TUR0amJHbHdMWEoxYkdVNmJtOXVlbVZ5Ynp0a2FYTndiR0Y1T21sdWJHbHVaVHR2ZG1WeVpteHZkenAyYVhOcFlteGxPM1pwYzJsaWFXeHBkSGs2ZG1semFXSnNaVHR2Y0dGamFYUjVPakU3YVhOdmJHRjBhVzl1T21semIyeGhkR1U3YldsNExXSnNaVzVrTFcxdlpHVTZibTl5YldGc08yTnZiRzl5TFdsdWRHVnljRzlzWVhScGIyNDZjMUpIUWp0amIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dUxXWnBiSFJsY25NNmJHbHVaV0Z5VWtkQ08zTnZiR2xrTFdOdmJHOXlPaU13TURBd01EQTdjMjlzYVdRdGIzQmhZMmwwZVRveE8yWnBiR3c2STJZeU1qWXlOanRtYVd4c0xXOXdZV05wZEhrNk1UdG1hV3hzTFhKMWJHVTZibTl1ZW1WeWJ6dHpkSEp2YTJVdGQybGtkR2c2TVR0emRISnZhMlV0YkdsdVpXTmhjRHBpZFhSME8zTjBjbTlyWlMxc2FXNWxhbTlwYmpwdGFYUmxjanR6ZEhKdmEyVXRiV2wwWlhKc2FXMXBkRG8wTzNOMGNtOXJaUzFrWVhOb1lYSnlZWGs2Ym05dVpUdHpkSEp2YTJVdFpHRnphRzltWm5ObGREb3dPM04wY205clpTMXZjR0ZqYVhSNU9qRTdZMjlzYjNJdGNtVnVaR1Z5YVc1bk9tRjFkRzg3YVcxaFoyVXRjbVZ1WkdWeWFXNW5PbUYxZEc4N2MyaGhjR1V0Y21WdVpHVnlhVzVuT21GMWRHODdkR1Y0ZEMxeVpXNWtaWEpwYm1jNllYVjBienRsYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHBoWTJOMWJYVnNZWFJsSWlBdlBnb2dJQ0FnUEdOcGNtTnNaUW9nSUNBZ0lDQWdjajBpTXpBd0lnb2dJQ0FnSUNBZ1kzazlJakU1T1M0d05UVTRNeUlLSUNBZ0lDQWdJR040UFNJdE9EWXlMams0TXpBNUlnb2dJQ0FnSUNBZ2FXUTlJbkJoZEdnME5qQTVJZ29nSUNBZ0lDQWdjM1I1YkdVOUltTnZiRzl5T2lNd01EQXdNREE3WTJ4cGNDMXlkV3hsT201dmJucGxjbTg3WkdsemNHeGhlVHBwYm14cGJtVTdiM1psY21ac2IzYzZkbWx6YVdKc1pUdDJhWE5wWW1sc2FYUjVPblpwYzJsaWJHVTdiM0JoWTJsMGVUb3hPMmx6YjJ4aGRHbHZianBwYzI5c1lYUmxPMjFwZUMxaWJHVnVaQzF0YjJSbE9tNXZjbTFoYkR0amIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dU9uTlNSMEk3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6T214cGJtVmhjbEpIUWp0emIyeHBaQzFqYjJ4dmNqb2pNREF3TURBd08zTnZiR2xrTFc5d1lXTnBkSGs2TVR0bWFXeHNPaU5tTWpZeU5qSTdabWxzYkMxdmNHRmphWFI1T2pFN1ptbHNiQzF5ZFd4bE9tNXZibnBsY204N2MzUnliMnRsTFhkcFpIUm9PakU3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTZORHR6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVPbTV2Ym1VN2MzUnliMnRsTFdSaGMyaHZabVp6WlhRNk1EdHpkSEp2YTJVdGIzQmhZMmwwZVRveE8yTnZiRzl5TFhKbGJtUmxjbWx1WnpwaGRYUnZPMmx0WVdkbExYSmxibVJsY21sdVp6cGhkWFJ2TzNOb1lYQmxMWEpsYm1SbGNtbHVaenBoZFhSdk8zUmxlSFF0Y21WdVpHVnlhVzVuT21GMWRHODdaVzVoWW14bExXSmhZMnRuY205MWJtUTZZV05qZFcxMWJHRjBaU0lnTHo0S0lDQWdJRHhuQ2lBZ0lDQWdJQ0IwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNnNU55NDNNRGd3TWl3dE16Y3pMakV5TWpneEtTSUtJQ0FnSUNBZ0lHbGtQU0puTkRZM05pSStDaUFnSUNBZ0lEeG5DaUFnSUNBZ0lDQWdJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREF1TlRrM05Ea3pNallzTUM0eU5URTBORGd4Tml3d0xqSTFNVFEwT0RFMkxDMHdMalU1TnpRNU16STJMQzB4TkRFMUxqY3dPRFVzTnpBMExqTTFPRE16S1NJS0lDQWdJQ0FnSUNBZ2FXUTlJbWMwTFRVaUNpQWdJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tVjRjRzl5ZEMxbWFXeGxibUZ0WlQwaUwyOXdkQzlzWVcxd2NDOW9kR1J2WTNNdlpISjFjR0ZzTDNOcGRHVnpMMlJsWm1GMWJIUXZabWxzWlhNdmFEVndMMlJsZG1Wc2IzQnRaVzUwTDJnMWNDMXBiblJsY21GamRHbDJaUzEyYVdSbGJ5OXpjbU12WjNWcEwzTmpiM0psWDJnMWNGOTNhR2wwWlM1d2JtY2lDaUFnSUNBZ0lDQWdJR2x1YTNOallYQmxPbVY0Y0c5eWRDMTRaSEJwUFNJNUxqTTFNREF3TURRaUNpQWdJQ0FnSUNBZ0lHbHVhM05qWVhCbE9tVjRjRzl5ZEMxNVpIQnBQU0k1TGpNMU1EQXdNRFFpQ2lBZ0lDQWdJQ0FnSUhOMGVXeGxQU0pqYjJ4dmNqb2pNREF3TURBd08yTnNhWEF0Y25Wc1pUcHViMjU2WlhKdk8yUnBjM0JzWVhrNmFXNXNhVzVsTzI5MlpYSm1iRzkzT25acGMybGliR1U3ZG1semFXSnBiR2wwZVRwMmFYTnBZbXhsTzI5d1lXTnBkSGs2TVR0cGMyOXNZWFJwYjI0NmFYTnZiR0YwWlR0dGFYZ3RZbXhsYm1RdGJXOWtaVHB1YjNKdFlXdzdZMjlzYjNJdGFXNTBaWEp3YjJ4aGRHbHZianB6VWtkQ08yTnZiRzl5TFdsdWRHVnljRzlzWVhScGIyNHRabWxzZEdWeWN6cHNhVzVsWVhKU1IwSTdjMjlzYVdRdFkyOXNiM0k2SXpBd01EQXdNRHR6YjJ4cFpDMXZjR0ZqYVhSNU9qRTdabWxzYkRvalpqUmlaVEkwTzJacGJHd3RiM0JoWTJsMGVUb3hPMlpwYkd3dGNuVnNaVHB1YjI1NlpYSnZPM04wY205clpTMTNhV1IwYURveE8zTjBjbTlyWlMxc2FXNWxZMkZ3T21KMWRIUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9tMXBkR1Z5TzNOMGNtOXJaUzF0YVhSbGNteHBiV2wwT2pRN2MzUnliMnRsTFdSaGMyaGhjbkpoZVRwdWIyNWxPM04wY205clpTMWtZWE5vYjJabWMyVjBPakE3YzNSeWIydGxMVzl3WVdOcGRIazZNVHRqYjJ4dmNpMXlaVzVrWlhKcGJtYzZZWFYwYnp0cGJXRm5aUzF5Wlc1a1pYSnBibWM2WVhWMGJ6dHphR0Z3WlMxeVpXNWtaWEpwYm1jNllYVjBienQwWlhoMExYSmxibVJsY21sdVp6cGhkWFJ2TzJWdVlXSnNaUzFpWVdOclozSnZkVzVrT21GalkzVnRkV3hoZEdVaVBnb2dJQ0FnSUNBZ0lEeHdZWFJvQ2lBZ0lDQWdJQ0FnSUNBZ1pEMGliU0F6T1RRdU56QTFMRFU1TVM0ek5pQXhNeTR3TXpNc01UVTJMak01TXlCaklETXVOekkwTERNNUxqQTVPQ0ExTUM0eU5qa3NOVGN1TnpFMklEZ3dMakExT0N3ek1TNDJOVEVnVENBMk1EVXVNRGt4TERZM015NHlPQ0JqSURFeExqRTNNU3d0TVRFdU1UY3hJREkzTGpreU55d3RNVFF1T0RrMUlEUXlMamd5TWl3dE1URXVNVGN4SUd3Z01UVXlMalkyT1N3ek55NHlNellnWXlBek9TNHdPVGdzT1M0ek1Ea2dOekF1TnpRNUxDMHlPUzQzT0RrZ05UTXVPVGt6TEMwMk55NHdNalVnVENBM09Ea3VOREV4TERRNE55NHdPVGdnWXlBdE5TNDFPRFVzTFRFMExqZzVOU0F0TlM0MU9EVXNMVE14TGpZMU1TQXpMamN5TkN3dE5EUXVOamcwSUd3Z09ERXVPVElzTFRFek5TNDVNVE1nWXlBeU1DNDBPQ3d0TXpNdU5URXpJQzAzTGpRME55d3ROell1TXpNMUlDMDBOaTQxTkRVc0xUY3lMall4TVNCc0lDMHhOVGd1TWpVMUxERTRMall4T0NCaklDMHhOaTQzTlRZc01TNDROaklnTFRNeExqWTFNU3d0TXk0M01qUWdMVFF3TGprMkxDMHhOaTQzTlRZZ1RDQTFNall1T0RrMUxERXhOQzQzTXpRZ1F5QTFNREF1T0RNc09EUXVPVFExSURRMU1DNDFOaXc1Tnk0NU56Z2dORFF6TGpFeE15d3hNemN1TURjMklHd2dMVE14TGpZMU1Td3hOVFF1TlRNeElHTWdMVE11TnpJMExERTBMamc1TlNBdE1UTXVNRE16TERJM0xqa3lOeUF0TWpjdU9USTNMRE16TGpVeE15QnNJQzB4TkRjdU1EZzBMRFl4TGpRMElHTWdMVE0xTGpNM05Td3hOQzQ0T1RVZ0xUTTVMakE1T0N3Mk55NHdNalVnTFRNdU56STBMRGcxTGpZME5DQk1JRE0zTUM0MU1ESXNOVFV3TGpRZ1l5QXhNeTR3TXpNc01URXVNVGN4SURJeUxqTTBNaXd5Tmk0d05qVWdNalF1TWpBMExEUXdMamsySUd3Z0xUQXVNREF4TERBZ2VpSUtJQ0FnSUNBZ0lDQWdJQ0JwWkQwaWNHRjBhRFl0TXlJS0lDQWdJQ0FnSUNBZ0lDQnBibXR6WTJGd1pUcGpiMjV1WldOMGIzSXRZM1Z5ZG1GMGRYSmxQU0l3SWdvZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsUFNKamIyeHZjam9qTURBd01EQXdPMk5zYVhBdGNuVnNaVHB1YjI1NlpYSnZPMlJwYzNCc1lYazZhVzVzYVc1bE8yOTJaWEptYkc5M09uWnBjMmxpYkdVN2RtbHphV0pwYkdsMGVUcDJhWE5wWW14bE8ybHpiMnhoZEdsdmJqcHBjMjlzWVhSbE8yMXBlQzFpYkdWdVpDMXRiMlJsT201dmNtMWhiRHRqYjJ4dmNpMXBiblJsY25CdmJHRjBhVzl1T25OU1IwSTdZMjlzYjNJdGFXNTBaWEp3YjJ4aGRHbHZiaTFtYVd4MFpYSnpPbXhwYm1WaGNsSkhRanR6YjJ4cFpDMWpiMnh2Y2pvak1EQXdNREF3TzNOdmJHbGtMVzl3WVdOcGRIazZNVHRtYVd4c09pTm1OR0psTWpRN1ptbHNiQzF2Y0dGamFYUjVPakU3Wm1sc2JDMXlkV3hsT201dmJucGxjbTg3YzNSeWIydGxMWGRwWkhSb09qRTdjM1J5YjJ0bExXeHBibVZqWVhBNlluVjBkRHR6ZEhKdmEyVXRiR2x1WldwdmFXNDZiV2wwWlhJN2MzUnliMnRsTFcxcGRHVnliR2x0YVhRNk5EdHpkSEp2YTJVdFpHRnphR0Z5Y21GNU9tNXZibVU3YzNSeWIydGxMV1JoYzJodlptWnpaWFE2TUR0emRISnZhMlV0YjNCaFkybDBlVG94TzJOdmJHOXlMWEpsYm1SbGNtbHVaenBoZFhSdk8ybHRZV2RsTFhKbGJtUmxjbWx1WnpwaGRYUnZPM05vWVhCbExYSmxibVJsY21sdVp6cGhkWFJ2TzNSbGVIUXRjbVZ1WkdWeWFXNW5PbUYxZEc4N1pXNWhZbXhsTFdKaFkydG5jbTkxYm1RNllXTmpkVzExYkdGMFpTSWdMejRLSUNBZ0lDQWdQQzluUGdvZ0lDQWdJQ0E4WndvZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNnd0xqVXdORFUwT1RnMkxEQXVNakV5TXpNME1ERXNNQzR5TVRJek16UXdNU3d0TUM0MU1EUTFORGs0Tml3dE1UTTBOQzQ1TWpnc05qZ3hMamt6TURNM0tTSUtJQ0FnSUNBZ0lDQWdhV1E5SW1jMExUVXROaUlLSUNBZ0lDQWdJQ0FnYVc1cmMyTmhjR1U2Wlhod2IzSjBMV1pwYkdWdVlXMWxQU0l2YjNCMEwyeGhiWEJ3TDJoMFpHOWpjeTlrY25Wd1lXd3ZjMmwwWlhNdlpHVm1ZWFZzZEM5bWFXeGxjeTlvTlhBdlpHVjJaV3h2Y0cxbGJuUXZhRFZ3TFdsdWRHVnlZV04wYVhabExYWnBaR1Z2TDNOeVl5OW5kV2t2YzJOdmNtVmZhRFZ3WDNkb2FYUmxMbkJ1WnlJS0lDQWdJQ0FnSUNBZ2FXNXJjMk5oY0dVNlpYaHdiM0owTFhoa2NHazlJamt1TXpVd01EQXdOQ0lLSUNBZ0lDQWdJQ0FnYVc1cmMyTmhjR1U2Wlhod2IzSjBMWGxrY0drOUlqa3VNelV3TURBd05DSUtJQ0FnSUNBZ0lDQWdjM1I1YkdVOUltTnZiRzl5T2lNd01EQXdNREE3WTJ4cGNDMXlkV3hsT201dmJucGxjbTg3WkdsemNHeGhlVHBwYm14cGJtVTdiM1psY21ac2IzYzZkbWx6YVdKc1pUdDJhWE5wWW1sc2FYUjVPblpwYzJsaWJHVTdiM0JoWTJsMGVUb3hPMmx6YjJ4aGRHbHZianBwYzI5c1lYUmxPMjFwZUMxaWJHVnVaQzF0YjJSbE9tNXZjbTFoYkR0amIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dU9uTlNSMEk3WTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6T214cGJtVmhjbEpIUWp0emIyeHBaQzFqYjJ4dmNqb2pNREF3TURBd08zTnZiR2xrTFc5d1lXTnBkSGs2TVR0bWFXeHNPaU5tTjJObU5XTTdabWxzYkMxdmNHRmphWFI1T2pFN1ptbHNiQzF5ZFd4bE9tNXZibnBsY204N2MzUnliMnRsTFhkcFpIUm9PakU3YzNSeWIydGxMV3hwYm1WallYQTZZblYwZER0emRISnZhMlV0YkdsdVpXcHZhVzQ2YldsMFpYSTdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTZORHR6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVPbTV2Ym1VN2MzUnliMnRsTFdSaGMyaHZabVp6WlhRNk1EdHpkSEp2YTJVdGIzQmhZMmwwZVRveE8yTnZiRzl5TFhKbGJtUmxjbWx1WnpwaGRYUnZPMmx0WVdkbExYSmxibVJsY21sdVp6cGhkWFJ2TzNOb1lYQmxMWEpsYm1SbGNtbHVaenBoZFhSdk8zUmxlSFF0Y21WdVpHVnlhVzVuT21GMWRHODdaVzVoWW14bExXSmhZMnRuY205MWJtUTZZV05qZFcxMWJHRjBaU0krQ2lBZ0lDQWdJQ0FnUEhCaGRHZ0tJQ0FnSUNBZ0lDQWdJQ0JrUFNKdElETTVOQzQzTURVc05Ua3hMak0ySURFekxqQXpNeXd4TlRZdU16a3pJR01nTXk0M01qUXNNemt1TURrNElEVXdMakkyT1N3MU55NDNNVFlnT0RBdU1EVTRMRE14TGpZMU1TQk1JRFl3TlM0d09URXNOamN6TGpJNElHTWdNVEV1TVRjeExDMHhNUzR4TnpFZ01qY3VPVEkzTEMweE5DNDRPVFVnTkRJdU9ESXlMQzB4TVM0eE56RWdiQ0F4TlRJdU5qWTVMRE0zTGpJek5pQmpJRE01TGpBNU9DdzVMak13T1NBM01DNDNORGtzTFRJNUxqYzRPU0ExTXk0NU9UTXNMVFkzTGpBeU5TQk1JRGM0T1M0ME1URXNORGczTGpBNU9DQmpJQzAxTGpVNE5Td3RNVFF1T0RrMUlDMDFMalU0TlN3dE16RXVOalV4SURNdU56STBMQzAwTkM0Mk9EUWdiQ0E0TVM0NU1pd3RNVE0xTGpreE15QmpJREl3TGpRNExDMHpNeTQxTVRNZ0xUY3VORFEzTEMwM05pNHpNelVnTFRRMkxqVTBOU3d0TnpJdU5qRXhJR3dnTFRFMU9DNHlOVFVzTVRndU5qRTRJR01nTFRFMkxqYzFOaXd4TGpnMk1pQXRNekV1TmpVeExDMHpMamN5TkNBdE5EQXVPVFlzTFRFMkxqYzFOaUJNSURVeU5pNDRPVFVzTVRFMExqY3pOQ0JESURVd01DNDRNeXc0TkM0NU5EVWdORFV3TGpVMkxEazNMamszT0NBME5ETXVNVEV6TERFek55NHdOellnYkNBdE16RXVOalV4TERFMU5DNDFNekVnWXlBdE15NDNNalFzTVRRdU9EazFJQzB4TXk0d016TXNNamN1T1RJM0lDMHlOeTQ1TWpjc016TXVOVEV6SUd3Z0xURTBOeTR3T0RRc05qRXVORFFnWXlBdE16VXVNemMxTERFMExqZzVOU0F0TXprdU1EazRMRFkzTGpBeU5TQXRNeTQzTWpRc09EVXVOalEwSUV3Z016Y3dMalV3TWl3MU5UQXVOQ0JqSURFekxqQXpNeXd4TVM0eE56RWdNakl1TXpReUxESTJMakEyTlNBeU5DNHlNRFFzTkRBdU9UWWdiQ0F0TUM0d01ERXNNQ0I2SWdvZ0lDQWdJQ0FnSUNBZ0lHbGtQU0p3WVhSb05pMHpMVElpQ2lBZ0lDQWdJQ0FnSUNBZ2FXNXJjMk5oY0dVNlkyOXVibVZqZEc5eUxXTjFjblpoZEhWeVpUMGlNQ0lLSUNBZ0lDQWdJQ0FnSUNCemRIbHNaVDBpWTI5c2IzSTZJekF3TURBd01EdGpiR2x3TFhKMWJHVTZibTl1ZW1WeWJ6dGthWE53YkdGNU9tbHViR2x1WlR0dmRtVnlabXh2ZHpwMmFYTnBZbXhsTzNacGMybGlhV3hwZEhrNmRtbHphV0pzWlR0cGMyOXNZWFJwYjI0NmFYTnZiR0YwWlR0dGFYZ3RZbXhsYm1RdGJXOWtaVHB1YjNKdFlXdzdZMjlzYjNJdGFXNTBaWEp3YjJ4aGRHbHZianB6VWtkQ08yTnZiRzl5TFdsdWRHVnljRzlzWVhScGIyNHRabWxzZEdWeWN6cHNhVzVsWVhKU1IwSTdjMjlzYVdRdFkyOXNiM0k2SXpBd01EQXdNRHR6YjJ4cFpDMXZjR0ZqYVhSNU9qRTdabWxzYkRvalpqZGpaalZqTzJacGJHd3RiM0JoWTJsMGVUb3hPMlpwYkd3dGNuVnNaVHB1YjI1NlpYSnZPM04wY205clpTMTNhV1IwYURveE8zTjBjbTlyWlMxc2FXNWxZMkZ3T21KMWRIUTdjM1J5YjJ0bExXeHBibVZxYjJsdU9tMXBkR1Z5TzNOMGNtOXJaUzF0YVhSbGNteHBiV2wwT2pRN2MzUnliMnRsTFdSaGMyaGhjbkpoZVRwdWIyNWxPM04wY205clpTMWtZWE5vYjJabWMyVjBPakE3YzNSeWIydGxMVzl3WVdOcGRIazZNVHRqYjJ4dmNpMXlaVzVrWlhKcGJtYzZZWFYwYnp0cGJXRm5aUzF5Wlc1a1pYSnBibWM2WVhWMGJ6dHphR0Z3WlMxeVpXNWtaWEpwYm1jNllYVjBienQwWlhoMExYSmxibVJsY21sdVp6cGhkWFJ2TzJWdVlXSnNaUzFpWVdOclozSnZkVzVrT21GalkzVnRkV3hoZEdVaUlDOCtDaUFnSUNBZ0lEd3ZaejRLSUNBZ0lEd3ZaejRLSUNBOEwyYytDand2YzNablBnbz1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlcy9zdGFyYmFkZ2Uuc3ZnXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGpzbGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbHMgSDVQICovXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuXG5jbGFzcyBCb2FyZCBleHRlbmRzIEg1UC5FdmVudERpc3BhdGNoZXIge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG5cbiAgICAvLyBTZXQgd29yZHNcbiAgICBpZiAoIXRoaXMucGFyYW1zLndvcmRzKSB7XG4gICAgICB0aGlzLndvcmRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzICogdGhpcy5wYXJhbXMuc2l6ZSAqIHRoaXMucGFyYW1zLnNpemU7IGkrKykge1xuICAgICAgICB0aGlzLndvcmRzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy53b3JkcyA9IHRoaXMucGFyYW1zLndvcmRzLnNwbGl0KCdcXG4nKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGJ1dHRvbnNcbiAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmluaXRCdXR0b25zKHRoaXMucGFyYW1zLnNpemUpO1xuICAgIHRoaXMuc2V0QnV0dG9uTGFiZWxzKHRoaXMud29yZHMpO1xuICAgIHRoaXMuc2V0Sm9rZXIodGhpcy5wYXJhbXMuam9rZXIpO1xuXG4gICAgLy8gU2V0dXAgYm9hcmRcbiAgICB0aGlzLmJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFyYW1zLnNpemU7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZCgnaDVwLWJpbmdvLWNvbHVtbicpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBhcmFtcy5zaXplOyBqKyspIHtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uc1tpICogdGhpcy5wYXJhbXMuc2l6ZSArIGpdLmdldERPTUVsZW1lbnQoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgdGhpcy5ib2FyZC5jbGFzc0xpc3QuYWRkKCdoNXAtYmluZ28tYm9hcmQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIERPTSBlbGVtZW50IGZvciB0aGUgYm9hcmQuXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH0gRE9NIGVsZW1lbnQuXG4gICAqL1xuICBnZXRET01FbGVtZW50ICgpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzZXQgb2YgYnV0dG9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTVdIC0gU2l6ZSBvZiB0aGUgYmluZ28gYm9hcmQuXG4gICAqIEByZXR1cm4ge29iamVjdFtdfSBBcnJheSBhcyBib2FyZC5cbiAgICovXG4gIGluaXRCdXR0b25zIChzaXplPTUpIHtcbiAgICBjb25zdCBidXR0b25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplICogc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uKGkpO1xuICAgICAgYnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2hlY2tXb24oKTtcbiAgICAgIH0pO1xuICAgICAgYnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbnM7XG4gIH1cblxuICAvKipcbiAgICogUmFuZG9tbHkgc2V0IGJ1dHRvbiBsYWJlbHMgZnJvbSBhIHNldCBvZiB3b3Jkcy5cbiAgICogSWYgdGhlcmUgbnVtYmVyIG9mIHdvcmRzIGlzIHNtYWxsZXIgdGhhbiB0aGUgbnVtYmVyIG9mIGJ1dHRvbnMsXG4gICAqIHRoZSB3b3JkcyB3aWxsIGJlIHVzZWQgcmVwZWF0ZWRseS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gd29yZHMgLSBXb3JkcyB0byBzZXQgYnV0dG9uIGxhYmVscyB0by5cbiAgICovXG4gIHNldEJ1dHRvbkxhYmVscyAod29yZHMpIHtcbiAgICBsZXQgZmlsbGVyID0gW107XG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGlmIChmaWxsZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpbGxlciA9IHdvcmRzLnNsaWNlKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBsYWJlbCA9IGZpbGxlci5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlsbGVyLmxlbmd0aCksIDEpO1xuICAgICAgYnV0dG9uLnNldExhYmVsKGxhYmVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGNlbnRlciBidXR0b24gYSBqb2tlci5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIC0gSWYgdHJ1ZSwgam9rZXIgc2hvdWxkIGJlIHNldC5cbiAgICovXG4gIHNldEpva2VyKGVuYWJsZWQpIHtcbiAgICBpZiAoZW5hYmxlZCAhPT0gdHJ1ZSB8fCB0aGlzLnBhcmFtcy5zaXplICUgMiA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE1ha2UgY2VudGVyIGJ1dHRvbiBhIGpva2VyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5idXR0b25zW01hdGguZmxvb3IodGhpcy5wYXJhbXMuc2l6ZS8yKSAqIHRoaXMucGFyYW1zLnNpemUgKyBNYXRoLmZsb29yKHRoaXMucGFyYW1zLnNpemUvMildO1xuICAgIGJ1dHRvbi50b2dnbGVBY3RpdmF0ZWQodHJ1ZSk7XG4gICAgYnV0dG9uLnRvZ2dsZUJsb2NrZWQodHJ1ZSk7XG4gICAgYnV0dG9uLnNldExhYmVsKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWF0Y2hlcyB0byBhIGJ1dHRvbiBwYXR0ZXJuLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBwYXR0ZXJucyAtIEFycmF5cyBjb250YWluaW5nIHRoZSBmaWVsZHMuXG4gICAqIEByZXR1cm4ge29iamVjdFtdfSBBbGwgcGF0dGVybnMgbWF0Y2hpbmcgdGhlIHdpbiBjb25kaXRpb24uXG4gICAqL1xuICBnZXRNYXRjaGVzIChwYXR0ZXJucykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBbXTtcbiAgICBwYXR0ZXJucy5mb3JFYWNoKHBhdHRlcm4gPT4ge1xuICAgICAgaWYgKHBhdHRlcm4uZXZlcnkoZmllbGQgPT4gdGhpcy5idXR0b25zW2ZpZWxkXS5pc0FjdGl2YXRlZCgpKSkge1xuICAgICAgICBtYXRjaGVzLnB1c2gocGF0dGVybik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICAvKipcbiAgICogQmxvY2sgYWxsIGJ1dHRvbnMuXG4gICAqL1xuICBibG9ja0J1dHRvbnMgKCkge1xuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24udG9nZ2xlQmxvY2tlZCh0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJsb2NrIGFsbCBidXR0b25zLlxuICAgKi9cbiAgdW5ibG9ja0J1dHRvbnMgKCkge1xuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24udG9nZ2xlQmxvY2tlZChmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGJvYXJkLlxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24ucmVzZXQoKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wYXJhbXMuc2h1ZmZsZU9uUmV0cnkpIHtcbiAgICAgIHRoaXMuc2V0QnV0dG9uTGFiZWxzKHRoaXMud29yZHMpO1xuICAgIH1cbiAgICB0aGlzLnNldEpva2VyKHRoaXMucGFyYW1zLmpva2VyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRlIHBhdHRlcm5zLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBwYXR0ZXJucyAtIFNldHMgb2YgYnV0dG9ucycgSURzIHRvIGJlIGFuaW1hdGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PTEwMF0gLSBPcHRpb25hbCBkZWxheSBiZXR3ZWVuIGVhY2ggYW5pbWF0aW9uLlxuICAgKi9cbiAgYW5pbWF0ZVBhdHRlcm5zIChwYXR0ZXJucywgZGVsYXk9MTAwKSB7XG4gICAgLyoqXG4gICAgICogQW5pbWF0ZSBhIHBhdHRlcm4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdFtdfSBwYXR0ZXJuIC0gSURzIG9mIGJ1dHRvbnMgdG8gYmUgYW5pbWF0ZWQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheT0xMDBdIC0gT3B0aW9uYWwgZGVsYXkgYmV0d2VlbiBlYWNoIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBhbmltYXRlUGF0dGVybiA9IChwYXR0ZXJuLCBkZWxheT0xMDApID0+IHtcbiAgICAgIGlmIChwYXR0ZXJuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5idXR0b25zW3BhdHRlcm5bMF1dLmFuaW1hdGUoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYW5pbWF0ZVBhdHRlcm4ocGF0dGVybi5zbGljZSgxKSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcGF0dGVybnMuZm9yRWFjaChwYXR0ZXJuID0+IHtcbiAgICAgIGFuaW1hdGVQYXR0ZXJuKHBhdHRlcm4sIGRlbGF5KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL2JvYXJkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==