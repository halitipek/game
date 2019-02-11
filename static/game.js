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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./game/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./game/classes/BoardContainer.class.js":
/*!**********************************************!*\
  !*** ./game/classes/BoardContainer.class.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withBase */ "./game/classes/withBase.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./game/types.js");
/* harmony import */ var _ratios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ratios */ "./game/ratios.js");









var BoardContainer =
/*#__PURE__*/
function (_PIXI$Container) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BoardContainer, _PIXI$Container);

  function BoardContainer(user, opponent) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BoardContainer);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BoardContainer).call(this));
    _this.user = user;
    _this.opponent = opponent;
    _this.width = _ratios__WEBPACK_IMPORTED_MODULE_7__["W"];
    _this.height = _ratios__WEBPACK_IMPORTED_MODULE_7__["H"];
    _this.xType = _types__WEBPACK_IMPORTED_MODULE_6__["BOARD_CONTAINER"];

    _this.position.set(0, 0);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BoardContainer, [{
    key: "calculateBoardContainer",
    value: function calculateBoardContainer(app) {
      var ratio = 100 * window.innerHeight / _ratios__WEBPACK_IMPORTED_MODULE_7__["H"] / 100;
      app.renderer.resize(_ratios__WEBPACK_IMPORTED_MODULE_7__["W"] * ratio, _ratios__WEBPACK_IMPORTED_MODULE_7__["H"] * ratio);
      this.width = _ratios__WEBPACK_IMPORTED_MODULE_7__["W"] * ratio;
      this.height = _ratios__WEBPACK_IMPORTED_MODULE_7__["H"] * ratio;
      this.scale.set(ratio, ratio);
    }
  }, {
    key: "updateBoard",
    value: function updateBoard() {
      this.children.forEach(function (child) {
        if (child.xType.includes('LINE')) {
          child.orderPawns && child.orderPawns();
        }
      });
    }
  }]);

  return BoardContainer;
}(PIXI.Container);

/* harmony default export */ __webpack_exports__["default"] = (Object(_withBase__WEBPACK_IMPORTED_MODULE_5__["default"])(BoardContainer));

/***/ }),

/***/ "./game/classes/BrokenLine.class.js":
/*!******************************************!*\
  !*** ./game/classes/BrokenLine.class.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withBase */ "./game/classes/withBase.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./game/types.js");
/* harmony import */ var _ratios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ratios */ "./game/ratios.js");









var BrokenLine =
/*#__PURE__*/
function (_PIXI$Container) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BrokenLine, _PIXI$Container);

  function BrokenLine(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BrokenLine);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BrokenLine).call(this));
    _this.xType = _types__WEBPACK_IMPORTED_MODULE_6__["BROKEN_LINE"];
    _this.width = _ratios__WEBPACK_IMPORTED_MODULE_7__["broken_line"].width;
    _this.height = _ratios__WEBPACK_IMPORTED_MODULE_7__["broken_line"].height;
    _this.moves = [];
    _this.countStyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 42,
      fill: "white",
      stroke: '#000000',
      strokeThickness: 1,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowDistance: -2,
      dropShadowAngle: 30,
      dropShadowAlpha: .6
    });
    _this.highLightStyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 42,
      fill: "#75ba0d",
      stroke: '#000000',
      strokeThickness: 1,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowDistance: -2,
      dropShadowAngle: 30,
      dropShadowAlpha: .6
    });
    var count = new PIXI.Text(0, _this.countStyle);
    count.xType = _types__WEBPACK_IMPORTED_MODULE_6__["BROKEN_COUNTER"];
    count.height = _ratios__WEBPACK_IMPORTED_MODULE_7__["COUNT_HEIGHT"];
    count.pivot.set(count.width / 2, count.height / 2);
    count.position.set(_ratios__WEBPACK_IMPORTED_MODULE_7__["broken_line"].width / 2, 0);
    count.visible = false;

    _this.addChild(count);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BrokenLine, [{
    key: "updateCount",
    value: function updateCount() {
      var newCount = this.children.length - 1;
      var counter = this.children[0];
      counter.text = newCount;
      counter.visible = !!newCount;
    }
  }, {
    key: "orderPawns",
    value: function orderPawns() {
      var pawns = this.children.slice(1);
      pawns.forEach(function (pawn, i, arr) {
        TweenMax.to(pawn.position, .5, {
          x: 0,
          y: _ratios__WEBPACK_IMPORTED_MODULE_7__["COUNT_HEIGHT"]
        });
      });
      this.updateCount();
    }
  }, {
    key: "toggleHighlight",
    value: function toggleHighlight(val) {
      this.children[0].style = val ? this.highLightStyle : this.countStyle;
    }
  }, {
    key: "toggleSelected",
    value: function toggleSelected(val) {
      if (this.children.length > 1) {
        val && this.children[this.children.length - 1].setSelected();
        !val && this.children[this.children.length - 1].setSolid();
      }
    }
  }]);

  return BrokenLine;
}(PIXI.Container);

/* harmony default export */ __webpack_exports__["default"] = (Object(_withBase__WEBPACK_IMPORTED_MODULE_5__["default"])(BrokenLine));

/***/ }),

/***/ "./game/classes/FinishLine.class.js":
/*!******************************************!*\
  !*** ./game/classes/FinishLine.class.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withBase */ "./game/classes/withBase.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./game/types.js");
/* harmony import */ var _ratios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ratios */ "./game/ratios.js");









var FinishLine =
/*#__PURE__*/
function (_PIXI$Container) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FinishLine, _PIXI$Container);

  function FinishLine() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FinishLine);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FinishLine).call(this));
    _this.xType = _types__WEBPACK_IMPORTED_MODULE_6__["FINISH_LINE"];
    _this.width = _ratios__WEBPACK_IMPORTED_MODULE_7__["sideLine"].width;
    _this.height = _ratios__WEBPACK_IMPORTED_MODULE_7__["sideLine"].height;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FinishLine, [{
    key: "orderPawns",
    value: function orderPawns() {
      this.children.forEach(function (pawn, i, arr) {
        pawn.position.set(0, _ratios__WEBPACK_IMPORTED_MODULE_7__["pawn_side"].height * i);
      });
    }
  }]);

  return FinishLine;
}(PIXI.Container);

/* harmony default export */ __webpack_exports__["default"] = (Object(_withBase__WEBPACK_IMPORTED_MODULE_5__["default"])(FinishLine));

/***/ }),

/***/ "./game/classes/GameLine.class.js":
/*!****************************************!*\
  !*** ./game/classes/GameLine.class.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withBase */ "./game/classes/withBase.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./game/types.js");
/* harmony import */ var _ratios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ratios */ "./game/ratios.js");
/* harmony import */ var _image_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../image_constants */ "./game/image_constants.js");










var GameLine =
/*#__PURE__*/
function (_PIXI$Container) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(GameLine, _PIXI$Container);

  function GameLine(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GameLine);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(GameLine).call(this));
    _this.xType = _types__WEBPACK_IMPORTED_MODULE_6__["GAME_LINE"];
    _this.width = _ratios__WEBPACK_IMPORTED_MODULE_7__["line"].width;
    _this.height = _ratios__WEBPACK_IMPORTED_MODULE_7__["line"].height;
    _this.interactive = true;
    _this.cursor = 'pointer';
    _this.moves = [];
    var highlight = new PIXI.Sprite(PIXI.loader.resources[_image_constants__WEBPACK_IMPORTED_MODULE_8__["lineSelectedPng"]].texture);
    highlight.xType = _types__WEBPACK_IMPORTED_MODULE_6__["LINE_HIGHLIGHT"];
    highlight.position.set(_ratios__WEBPACK_IMPORTED_MODULE_7__["line"].width / 2, 0);
    highlight.pivot.set(highlight.width / 2, 0);
    highlight.visible = false;

    _this.addChild(highlight);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GameLine, [{
    key: "orderPawns",
    value: function orderPawns() {
      var pawnArr = this.children.slice(1);
      var reverse = this.number >= 12;
      var row = _ratios__WEBPACK_IMPORTED_MODULE_7__["line"].height / pawnArr.length;

      if (row < _ratios__WEBPACK_IMPORTED_MODULE_7__["PAWN"]) {
        row = row - (_ratios__WEBPACK_IMPORTED_MODULE_7__["PAWN"] - row) / pawnArr.length;
      } else {
        row = _ratios__WEBPACK_IMPORTED_MODULE_7__["PAWN"];
      }

      pawnArr.forEach(function (pawn, i, arr) {
        reverse ? TweenMax.to(pawn.position, .5, {
          x: 0,
          y: _ratios__WEBPACK_IMPORTED_MODULE_7__["line"].height - row * i - _ratios__WEBPACK_IMPORTED_MODULE_7__["PAWN"]
        }) : TweenMax.to(pawn.position, .5, {
          x: 0,
          y: row * i
        });
      });
    }
  }, {
    key: "toggleHighlight",
    value: function toggleHighlight(val) {
      this.children[0].visible = val;
    }
  }, {
    key: "toggleSelected",
    value: function toggleSelected(val) {
      if (this.children.length > 1) {
        val && this.children[this.children.length - 1].setSelected();
        !val && this.children[this.children.length - 1].setSolid();
      }
    }
  }]);

  return GameLine;
}(PIXI.Container);

/* harmony default export */ __webpack_exports__["default"] = (Object(_withBase__WEBPACK_IMPORTED_MODULE_5__["default"])(GameLine));

/***/ }),

/***/ "./game/classes/Pawn.class.js":
/*!************************************!*\
  !*** ./game/classes/Pawn.class.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withBase */ "./game/classes/withBase.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions */ "./game/functions.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types */ "./game/types.js");









var Pawn =
/*#__PURE__*/
function (_PIXI$Sprite) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Pawn, _PIXI$Sprite);

  function Pawn(pawnObj, color, isUser) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pawn);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Pawn).call(this, PIXI.loader.resources[pawnObj.solid].texture));
    _this.pawnObj = pawnObj;
    _this.color = color;
    _this.isUser = isUser;
    _this.cursor = 'pointer';
    _this.xType = _types__WEBPACK_IMPORTED_MODULE_7__["GAME_PAWN"];

    _this.on('added', _functions__WEBPACK_IMPORTED_MODULE_6__["onAdded"]);

    _this.on('removed', _functions__WEBPACK_IMPORTED_MODULE_6__["onRemoved"]);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Pawn, [{
    key: "setParentCustom",
    value: function setParentCustom(newParent) {
      if (newParent.toHit) {
        newParent.toHit = false;
        newParent.toSit = true;
        var hittedPawn = newParent.children.find(function (child) {
          return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_7__["GAME_PAWN"];
        });
        hittedPawn.goToBrokenLine();
      }

      if (newParent.xType === _types__WEBPACK_IMPORTED_MODULE_7__["FINISH_LINE"]) {
        this.setSide();
      }

      newParent.toLocal(new PIXI.Point(0, 0), this, this.position);
      newParent.addChild(this);
    }
  }, {
    key: "setSolid",
    value: function setSolid() {
      this.texture = PIXI.loader.resources[this.pawnObj.solid].texture;
    }
  }, {
    key: "setSide",
    value: function setSide() {
      this.texture = PIXI.loader.resources[this.pawnObj.side].texture;
    }
  }, {
    key: "setSelected",
    value: function setSelected() {
      this.texture = PIXI.loader.resources[this.pawnObj.selected].texture;
    }
  }, {
    key: "subscribe",
    value: function subscribe() {
      _functions__WEBPACK_IMPORTED_MODULE_6__["subscribe"](this);
    }
  }, {
    key: "unSubscribe",
    value: function unSubscribe() {
      this.interactive = false;
    }
  }, {
    key: "goToBrokenLine",
    value: function goToBrokenLine() {
      var brokenLines = this._getBrokenLines();

      var user = this._getUser();

      user.color === this.color ? this.setParentCustom(brokenLines[1]) : this.setParentCustom(brokenLines[0]);
    }
  }, {
    key: "goToFinishLine",
    value: function goToFinishLine() {}
  }, {
    key: "goToLine",
    value: function goToLine(lineNumber) {
      this.setParentCustom(this._getOneLine(lineNumber));
    }
  }]);

  return Pawn;
}(PIXI.Sprite);

/* harmony default export */ __webpack_exports__["default"] = (Object(_withBase__WEBPACK_IMPORTED_MODULE_5__["default"])(Pawn));

/***/ }),

/***/ "./game/classes/index.js":
/*!*******************************!*\
  !*** ./game/classes/index.js ***!
  \*******************************/
/*! exports provided: Pawn, GameLine, FinishLine, BrokenLine, BoardContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pawn_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pawn.class */ "./game/classes/Pawn.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pawn", function() { return _Pawn_class__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _GameLine_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameLine.class */ "./game/classes/GameLine.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameLine", function() { return _GameLine_class__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _FinishLine_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FinishLine.class */ "./game/classes/FinishLine.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinishLine", function() { return _FinishLine_class__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BrokenLine_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BrokenLine.class */ "./game/classes/BrokenLine.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrokenLine", function() { return _BrokenLine_class__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _BoardContainer_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardContainer.class */ "./game/classes/BoardContainer.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoardContainer", function() { return _BoardContainer_class__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./game/classes/withBase.js":
/*!**********************************!*\
  !*** ./game/classes/withBase.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./game/types.js");

/* harmony default export */ __webpack_exports__["default"] = (function (comp) {
  comp.prototype._getBoard = function () {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

    if (obj.xType === _types__WEBPACK_IMPORTED_MODULE_0__["BOARD_CONTAINER"]) {
      return obj;
    }

    if (!obj.parent) {
      return obj.children[0];
    }

    return this._getBoard(obj.parent);
  };

  comp.prototype._getUser = function () {
    return this._getBoard().user;
  };

  comp.prototype._getOpponent = function () {
    return this._getBoard().opponent;
  };

  comp.prototype._getGameLines = function () {
    return this._getBoard().filter(function (child) {
      return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_0__["GAME_LINE"];
    });
  };

  comp.prototype._getGameLineByNumber = function (lineNumber) {
    return this._getBoard().children.find(function (child) {
      return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_0__["GAME_LINE"] && child.number === lineNumber;
    });
  };

  comp.prototype._getFinishLines = function () {
    return this._getBoard().children.filter(function (child) {
      return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_0__["FINISH_LINE"];
    });
  };

  comp.prototype._getMyFinishLine = function () {
    return this._getFinishLines()[0];
  };

  comp.prototype._getOpponentFinishLine = function () {
    return this._getFinishLines()[1];
  };

  comp.prototype._getBrokenLines = function () {
    return this._getBoard().children.filter(function (child) {
      return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_0__["BROKEN_LINE"];
    });
  };

  comp.prototype._getMyBrokenLine = function () {
    return this._getBrokenLines()[0];
  };

  comp.prototype._getOpponentBrokenLine = function () {
    return this._getBrokenLines()[1];
  };

  return comp;
});

/***/ }),

/***/ "./game/config.js":
/*!************************!*\
  !*** ./game/config.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  width: 800,
  height: 800,
  antialias: true,
  transparent: false,
  resolution: devicePixelRatio,
  legacy: true
});

/***/ }),

/***/ "./game/functions.js":
/*!***************************!*\
  !*** ./game/functions.js ***!
  \***************************/
/*! exports provided: onDragStart, onDragMove, onDragEnd, onAdded, onRemoved, subscribe, unSubscribe, calculateBoardContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDragStart", function() { return onDragStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDragMove", function() { return onDragMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDragEnd", function() { return onDragEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAdded", function() { return onAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRemoved", function() { return onRemoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unSubscribe", function() { return unSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBoardContainer", function() { return calculateBoardContainer; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);

function onDragStart(event) {
  if (!this.dragging) {
    this.startPoint = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, event.data.global);
    this.homeParent = this.parent;
    this.previousParent = this.parent;
    this.dragging = true;
    this.dragPoint = this.getGlobalPosition();

    var boardContainer = this._getBoard();

    this.setParentCustom(boardContainer);
    this.setSelected();
  }
}
function onDragMove(e) {
  var _this = this;

  if (this.dragging) {
    var boardContainer = this._getBoard();

    this.globalPoint = {
      x: this.dragPoint.x - (this.startPoint.x - e.data.global.x),
      y: this.dragPoint.y - (this.startPoint.y - e.data.global.y)
    };
    var newPosition = this.parent.toLocal(this.globalPoint);
    this.position.x = newPosition.x;
    this.position.y = newPosition.y;
    newPosition.x += this.width / 2;
    newPosition.y += this.height / 2;
    var newParent = this._getLines().find(function (line) {
      var center = line.toLocal(_this.globalPoint);
      center.x += _this.width / 2;
      center.y += _this.height / 2;
      return line.testHit(center);
    }) || boardContainer;

    if (newParent.name !== this.previousParent.name) {
      this.previousParent.orderPawns && this.previousParent.orderPawns();

      if (newParent.orderPawns && (newParent.toHit || newParent.toSit)) {
        newParent.orderPawns({
          fake: true
        });
        this.previousParent = newParent;
      }
    }
  }
}
function onDragEnd() {
  var _this2 = this;

  if (this.dragging) {
    this.dragging = false;

    var lines = this._getLines();

    lines.push(this._getMyFinishLine());
    var newParent = lines.find(function (line) {
      var center = line.toLocal(_this2.getGlobalPosition());
      center.x += _this2.width / 2;
      center.y += _this2.height / 2;
      return line.testHit(center) && (line.toHit || line.toSit);
    }) || this.homeParent;
    this.setSolid();
    this.setParentCustom(newParent);
    this.startPoint = null;
    this.homeParent = null;
    this.previousParent = null;
    this.dragPoint = null;
  }
}
function onAdded(container) {
  container.orderPawns && container.orderPawns();
}
function onRemoved(container) {
  container.orderPawns && container.orderPawns();
}
function subscribe(obj) {
  obj.interactive = true;
  obj.on('mousedown', onDragStart).on('touchstart', onDragStart).on('mouseup', onDragEnd).on('mouseupoutside', onDragEnd).on('touchend', onDragEnd).on('touchendoutside', onDragEnd).on('mousemove', onDragMove).on('touchmove', onDragMove);
}
function unSubscribe(obj) {
  obj.interactive = true;
  obj.on('mousedown', function () {}).on('touchstart', function () {}).on('mouseup', function () {}).on('mouseupoutside', function () {}).on('touchend', function () {}).on('touchendoutside', function () {}).on('mousemove', function () {}).on('touchmove', function () {});
}
function calculateBoardContainer(boardContainer, app, ratios) {
  var ratio = 100 * app.renderer.view.height / ratios.H / 100;
  boardContainer.width = ratios.W / 100 * ratio;
  boardContainer.height = ratios.H / 100 * ratio;
  boardContainer.position.set(app.renderer.view.width / 2, app.renderer.view.height / 2);
  boardContainer.scale.set(ratio, ratio);
  boardContainer.pivot.set(ratios.W / 2, ratios.H / 2);
}

/***/ }),

/***/ "./game/helpers.js":
/*!*************************!*\
  !*** ./game/helpers.js ***!
  \*************************/
/*! exports provided: createPawns, createGameLines, createBrokenLine, createFinishLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPawns", function() { return createPawns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGameLines", function() { return createGameLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrokenLine", function() { return createBrokenLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFinishLines", function() { return createFinishLines; });
/* harmony import */ var _ratios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratios */ "./game/ratios.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./game/classes/index.js");


function createPawns(pawnObj, color) {
  var isUser = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 15;
  return new Array(count).fill(0).map(function (elem, i) {
    var sprite = new _classes__WEBPACK_IMPORTED_MODULE_1__["Pawn"](pawnObj, color, isUser);
    return sprite;
  });
}
function createGameLines(user) {
  var lines = new Array(24).fill(0);
  return lines.map(function (line, i, arr) {
    var number = user.color === 'white' ? i : arr.length - i - 1;
    line = new _classes__WEBPACK_IMPORTED_MODULE_1__["GameLine"]();
    line.number = number;
    var factor = i % 6;
    if (i < 6) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["LEFT"] + _ratios__WEBPACK_IMPORTED_MODULE_0__["section"].width * 2 + _ratios__WEBPACK_IMPORTED_MODULE_0__["MIDDLE"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["line"].width * (factor + 1), _ratios__WEBPACK_IMPORTED_MODULE_0__["TOP"]);else if (i < 12) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["LEFT"] + _ratios__WEBPACK_IMPORTED_MODULE_0__["section"].width - _ratios__WEBPACK_IMPORTED_MODULE_0__["line"].width * (factor + 1), _ratios__WEBPACK_IMPORTED_MODULE_0__["TOP"]);else if (i < 18) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["LEFT"] + _ratios__WEBPACK_IMPORTED_MODULE_0__["line"].width * factor, _ratios__WEBPACK_IMPORTED_MODULE_0__["H"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["TOP"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["section"].height);else if (i < 24) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["LEFT"] + _ratios__WEBPACK_IMPORTED_MODULE_0__["section"].width + _ratios__WEBPACK_IMPORTED_MODULE_0__["MIDDLE"] + _ratios__WEBPACK_IMPORTED_MODULE_0__["line"].width * factor, _ratios__WEBPACK_IMPORTED_MODULE_0__["H"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["TOP"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["section"].height);
    return line;
  });
}
function createBrokenLine(user) {
  var lines = new Array(2).fill(0);
  return lines.map(function (line, i, arr) {
    line = new _classes__WEBPACK_IMPORTED_MODULE_1__["BrokenLine"]();
    line.number = 24 + i;

    if (i === 0) {
      line.color = user.color === 'white' ? 'white' : 'black';
    } else {
      line.color = user.color === 'white' ? 'black' : 'white';
    }

    line.isUser = !i;
    if (i === 0) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["broken_line"].x, _ratios__WEBPACK_IMPORTED_MODULE_0__["broken_line"].y_user);
    if (i === 1) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["broken_line"].x, _ratios__WEBPACK_IMPORTED_MODULE_0__["broken_line"].y_opp);
    return line;
  });
}
function createFinishLines(user) {
  var lines = new Array(2).fill(0);
  return lines.map(function (line, i, arr) {
    line = new _classes__WEBPACK_IMPORTED_MODULE_1__["FinishLine"]();
    line.number = 26 + i;

    if (i === 0) {
      line.color = user.color === 'white' ? 'white' : 'black';
    } else {
      line.color = user.color === 'white' ? 'black' : 'white';
    }

    line.isUser = !i;
    if (i === 0) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["W"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].side - _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].width, _ratios__WEBPACK_IMPORTED_MODULE_0__["H"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["TOP"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].height);
    if (i === 1) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["W"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].side - _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].width, _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].top);
    return line;
  });
}

/***/ }),

/***/ "./game/image_constants.js":
/*!*********************************!*\
  !*** ./game/image_constants.js ***!
  \*********************************/
/*! exports provided: boardPng, whitePawnPng, whitePawnSidePng, whitePawnSelectedPng, blackPawnPng, blackPawnSidePng, blackPawnSelectedPng, lineSelectedPng, whitePawnObj, blackPawnObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardPng", function() { return boardPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitePawnPng", function() { return whitePawnPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitePawnSidePng", function() { return whitePawnSidePng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitePawnSelectedPng", function() { return whitePawnSelectedPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackPawnPng", function() { return blackPawnPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackPawnSidePng", function() { return blackPawnSidePng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackPawnSelectedPng", function() { return blackPawnSelectedPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineSelectedPng", function() { return lineSelectedPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitePawnObj", function() { return whitePawnObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackPawnObj", function() { return blackPawnObj; });
var boardPng = 'board.png';
var whitePawnPng = "white_pawn.png";
var whitePawnSidePng = "white_pawn2.png";
var whitePawnSelectedPng = "white_pawn_selected.png";
var blackPawnPng = "black_pawn.png";
var blackPawnSidePng = "black_pawn2.png";
var blackPawnSelectedPng = "black_pawn_selected.png";
var lineSelectedPng = 'line_selected.png';
var whitePawnObj = {
  solid: whitePawnPng,
  side: whitePawnSidePng,
  selected: whitePawnSelectedPng
};
var blackPawnObj = {
  solid: blackPawnPng,
  side: blackPawnSidePng,
  selected: blackPawnSelectedPng
};

/***/ }),

/***/ "./game/index.js":
/*!***********************!*\
  !*** ./game/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./game/helpers.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./game/classes/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./game/config.js");
/* harmony import */ var _image_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image_constants */ "./game/image_constants.js");





var boardContainer,
    lineArr = [],
    whitePawnArr = [],
    blackPawnArr = [],
    finishLineArr = [],
    brokenLineArr = [];
/* APP START */

PIXI.utils.skipHello();
var Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;
var app = new Application(_config__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
/* APP END */

var user = {
  color: 'white'
};
var opponent = {
  color: 'black'
};
var game = {
  board: [[2, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 5], [0, 0], [0, 3], [0, 0], [0, 0], [0, 0], [5, 0], [0, 5], [0, 0], [0, 0], [0, 0], [3, 0], [0, 0], [5, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 2]],
  broken: {
    white: 0,
    black: 0
  },
  finish: {
    white: 0,
    black: 0
  },
  canDouble: false // SETUP

};

var setup = function setup() {
  var _boardContainer, _boardContainer2, _boardContainer3, _brokenLineArr$find, _brokenLineArr$find2, _finishLineArr$find, _finishLineArr$find2;

  boardContainer = new _classes__WEBPACK_IMPORTED_MODULE_2__["BoardContainer"](user, opponent);
  var board = new Sprite(resources[_image_constants__WEBPACK_IMPORTED_MODULE_4__["boardPng"]].texture);
  boardContainer.addChild(board);
  lineArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createGameLines"](user);

  (_boardContainer = boardContainer).addChild.apply(_boardContainer, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(lineArr));

  finishLineArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createFinishLines"](user);

  (_boardContainer2 = boardContainer).addChild.apply(_boardContainer2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(finishLineArr));

  brokenLineArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createBrokenLine"](user);

  (_boardContainer3 = boardContainer).addChild.apply(_boardContainer3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(brokenLineArr));

  whitePawnArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createPawns"](_image_constants__WEBPACK_IMPORTED_MODULE_4__["whitePawnObj"], 'white', user.color === 'white');
  blackPawnArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createPawns"](_image_constants__WEBPACK_IMPORTED_MODULE_4__["blackPawnObj"], 'black', user.color === 'black');
  game.board.forEach(function (pair, i) {
    if (pair[0] || pair[1]) {
      var _lineArr$find;

      var toAdd = pair[0] ? whitePawnArr.splice(0, pair[0]) : blackPawnArr.splice(0, pair[1]);

      (_lineArr$find = lineArr.find(function (line) {
        return line.number === i;
      })).addChild.apply(_lineArr$find, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(toAdd));
    }
  });
  game.broken.white && (_brokenLineArr$find = brokenLineArr.find(function (line) {
    return line.color === 'white';
  })).addChild.apply(_brokenLineArr$find, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(whitePawnArr.splice(0, game.broken.white)));
  game.broken.black && (_brokenLineArr$find2 = brokenLineArr.find(function (line) {
    return line.color === 'black';
  })).addChild.apply(_brokenLineArr$find2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(blackPawnArr.splice(0, game.broken.black)));
  game.finish.white && (_finishLineArr$find = finishLineArr.find(function (line) {
    return line.color === 'white';
  })).addChild.apply(_finishLineArr$find, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(whitePawnArr.splice(0, game.finish.white)));
  game.finish.black && (_finishLineArr$find2 = finishLineArr.find(function (line) {
    return line.color === 'black';
  })).addChild.apply(_finishLineArr$find2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(blackPawnArr.splice(0, game.finish.black)));
  boardContainer.calculateBoardContainer(app);
  app.stage.addChild(boardContainer);

  var resize = function resize() {
    return boardContainer.calculateBoardContainer(app);
  };

  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', resize);
  document.getElementById('game').appendChild(app.view);
  resize();
};

var pixiLoader = function pixiLoader() {
  loader.add([_image_constants__WEBPACK_IMPORTED_MODULE_4__["boardPng"], _image_constants__WEBPACK_IMPORTED_MODULE_4__["whitePawnPng"], _image_constants__WEBPACK_IMPORTED_MODULE_4__["whitePawnSidePng"], _image_constants__WEBPACK_IMPORTED_MODULE_4__["whitePawnSelectedPng"], _image_constants__WEBPACK_IMPORTED_MODULE_4__["blackPawnPng"], _image_constants__WEBPACK_IMPORTED_MODULE_4__["blackPawnSidePng"], _image_constants__WEBPACK_IMPORTED_MODULE_4__["blackPawnSelectedPng"], _image_constants__WEBPACK_IMPORTED_MODULE_4__["lineSelectedPng"]]).load(setup);
};

pixiLoader();

/***/ }),

/***/ "./game/ratios.js":
/*!************************!*\
  !*** ./game/ratios.js ***!
  \************************/
/*! exports provided: H, W, TOP, LEFT, MIDDLE, PAWN, SEC_PERC, COUNT_HEIGHT, topHeightRatio, leftWidthRatio, middleWidthRatio, pawnHeightRatio, sectionWidthRatio, sectionHeightRatio, lineWidthRatio, lineHeightRatio, line, section, board, sideLine, pawn_side, broken_line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP", function() { return TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDDLE", function() { return MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAWN", function() { return PAWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEC_PERC", function() { return SEC_PERC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_HEIGHT", function() { return COUNT_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topHeightRatio", function() { return topHeightRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftWidthRatio", function() { return leftWidthRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middleWidthRatio", function() { return middleWidthRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pawnHeightRatio", function() { return pawnHeightRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionWidthRatio", function() { return sectionWidthRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionHeightRatio", function() { return sectionHeightRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineWidthRatio", function() { return lineWidthRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeightRatio", function() { return lineHeightRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "section", function() { return section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "board", function() { return board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideLine", function() { return sideLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pawn_side", function() { return pawn_side; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broken_line", function() { return broken_line; });
var H = 768;
var W = 1147;
var TOP = 20;
var LEFT = 108;
var MIDDLE = 82;
var PAWN = 71;
var SEC_PERC = 85;
var COUNT_HEIGHT = 50;
var topHeightRatio = TOP * 100 / H;
var leftWidthRatio = LEFT * 100 / W;
var middleWidthRatio = MIDDLE * 100 / W;
var pawnHeightRatio = PAWN * 100 / H;
var sectionWidthRatio = (W - LEFT * 2 - MIDDLE) / 2 * 100 / W;
var sectionHeightRatio = (H - TOP * 2) / 2 * SEC_PERC / 100 * 100 / H;
var lineWidthRatio = sectionWidthRatio / 6;
var lineHeightRatio = sectionHeightRatio;
var line = {
  width: (W - LEFT * 2 - MIDDLE) / 12,
  height: (H - TOP * 2) / 2 * SEC_PERC / 100
};
var section = {
  width: (W - LEFT * 2 - MIDDLE) / 2,
  height: (H - TOP * 2) / 2 * SEC_PERC / 100
};
var board = {
  width: 1147,
  height: 768
};
var sideLine = {
  width: 65,
  height: 210,
  top: 133,
  side: (LEFT - 65) / 2
};
var pawn_side = {
  width: 65,
  height: 14
};
var broken_line = {
  width: PAWN,
  height: PAWN + COUNT_HEIGHT,
  x: LEFT + section.width + (MIDDLE - PAWN) / 2,
  y_opp: H / 2 - (PAWN + COUNT_HEIGHT) * 2,
  y_user: H / 2 + (PAWN + COUNT_HEIGHT) * 1
};

/***/ }),

/***/ "./game/types.js":
/*!***********************!*\
  !*** ./game/types.js ***!
  \***********************/
/*! exports provided: BOARD_CONTAINER, GAME_LINE, FINISH_LINE, BROKEN_LINE, GAME_PAWN, BROKEN_COUNTER, LINE_HIGHLIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_CONTAINER", function() { return BOARD_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_LINE", function() { return GAME_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISH_LINE", function() { return FINISH_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROKEN_LINE", function() { return BROKEN_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_PAWN", function() { return GAME_PAWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROKEN_COUNTER", function() { return BROKEN_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_HIGHLIGHT", function() { return LINE_HIGHLIGHT; });
var BOARD_CONTAINER = 'BOARD_CONTAINER';
var GAME_LINE = 'GAME_LINE';
var FINISH_LINE = 'FINISH_LINE';
var BROKEN_LINE = 'BROKEN_LINE';
var GAME_PAWN = 'GAME_PAWN';
var BROKEN_COUNTER = 'BROKEN_COUNTER';
var LINE_HIGHLIGHT = 'LINE_HIGHLIGHT';

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL0JvYXJkQ29udGFpbmVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9Ccm9rZW5MaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9GaW5pc2hMaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9HYW1lTGluZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NsYXNzZXMvUGF3bi5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NsYXNzZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL3dpdGhCYXNlLmpzIiwid2VicGFjazovLy8uL2dhbWUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2dhbWUvZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2dhbWUvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2ltYWdlX2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2dhbWUvcmF0aW9zLmpzIiwid2VicGFjazovLy8uL2dhbWUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiXSwibmFtZXMiOlsiQm9hcmRDb250YWluZXIiLCJ1c2VyIiwib3Bwb25lbnQiLCJ3aWR0aCIsInJhdGlvcyIsImhlaWdodCIsInhUeXBlIiwidHlwZXMiLCJwb3NpdGlvbiIsInNldCIsImFwcCIsInJhdGlvIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJyZW5kZXJlciIsInJlc2l6ZSIsInNjYWxlIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJpbmNsdWRlcyIsIm9yZGVyUGF3bnMiLCJQSVhJIiwiQ29udGFpbmVyIiwid2l0aEJhc2UiLCJCcm9rZW5MaW5lIiwicHJvcHMiLCJtb3ZlcyIsImNvdW50U3R5bGUiLCJUZXh0U3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlVGhpY2tuZXNzIiwiZHJvcFNoYWRvdyIsImRyb3BTaGFkb3dDb2xvciIsImRyb3BTaGFkb3dCbHVyIiwiZHJvcFNoYWRvd0Rpc3RhbmNlIiwiZHJvcFNoYWRvd0FuZ2xlIiwiZHJvcFNoYWRvd0FscGhhIiwiaGlnaExpZ2h0U3R5bGUiLCJjb3VudCIsIlRleHQiLCJwaXZvdCIsInZpc2libGUiLCJhZGRDaGlsZCIsIm5ld0NvdW50IiwibGVuZ3RoIiwiY291bnRlciIsInRleHQiLCJwYXducyIsInNsaWNlIiwicGF3biIsImkiLCJhcnIiLCJUd2Vlbk1heCIsInRvIiwieCIsInkiLCJDT1VOVF9IRUlHSFQiLCJ1cGRhdGVDb3VudCIsInZhbCIsInN0eWxlIiwic2V0U2VsZWN0ZWQiLCJzZXRTb2xpZCIsIkZpbmlzaExpbmUiLCJHYW1lTGluZSIsImludGVyYWN0aXZlIiwiY3Vyc29yIiwiaGlnaGxpZ2h0IiwiU3ByaXRlIiwibG9hZGVyIiwicmVzb3VyY2VzIiwibGluZVNlbGVjdGVkUG5nIiwidGV4dHVyZSIsInBhd25BcnIiLCJyZXZlcnNlIiwibnVtYmVyIiwicm93IiwiUEFXTiIsIlBhd24iLCJwYXduT2JqIiwiY29sb3IiLCJpc1VzZXIiLCJzb2xpZCIsIm9uIiwiZnVuY3Rpb25zIiwibmV3UGFyZW50IiwidG9IaXQiLCJ0b1NpdCIsImhpdHRlZFBhd24iLCJmaW5kIiwiZ29Ub0Jyb2tlbkxpbmUiLCJzZXRTaWRlIiwidG9Mb2NhbCIsIlBvaW50Iiwic2lkZSIsInNlbGVjdGVkIiwiYnJva2VuTGluZXMiLCJfZ2V0QnJva2VuTGluZXMiLCJfZ2V0VXNlciIsInNldFBhcmVudEN1c3RvbSIsImxpbmVOdW1iZXIiLCJfZ2V0T25lTGluZSIsImNvbXAiLCJwcm90b3R5cGUiLCJfZ2V0Qm9hcmQiLCJvYmoiLCJwYXJlbnQiLCJfZ2V0T3Bwb25lbnQiLCJfZ2V0R2FtZUxpbmVzIiwiZmlsdGVyIiwiX2dldEdhbWVMaW5lQnlOdW1iZXIiLCJfZ2V0RmluaXNoTGluZXMiLCJfZ2V0TXlGaW5pc2hMaW5lIiwiX2dldE9wcG9uZW50RmluaXNoTGluZSIsIl9nZXRNeUJyb2tlbkxpbmUiLCJfZ2V0T3Bwb25lbnRCcm9rZW5MaW5lIiwiYW50aWFsaWFzIiwidHJhbnNwYXJlbnQiLCJyZXNvbHV0aW9uIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImxlZ2FjeSIsIm9uRHJhZ1N0YXJ0IiwiZXZlbnQiLCJkcmFnZ2luZyIsInN0YXJ0UG9pbnQiLCJkYXRhIiwiZ2xvYmFsIiwiaG9tZVBhcmVudCIsInByZXZpb3VzUGFyZW50IiwiZHJhZ1BvaW50IiwiZ2V0R2xvYmFsUG9zaXRpb24iLCJib2FyZENvbnRhaW5lciIsIm9uRHJhZ01vdmUiLCJlIiwiZ2xvYmFsUG9pbnQiLCJuZXdQb3NpdGlvbiIsIl9nZXRMaW5lcyIsImxpbmUiLCJjZW50ZXIiLCJ0ZXN0SGl0IiwibmFtZSIsImZha2UiLCJvbkRyYWdFbmQiLCJsaW5lcyIsInB1c2giLCJvbkFkZGVkIiwiY29udGFpbmVyIiwib25SZW1vdmVkIiwic3Vic2NyaWJlIiwidW5TdWJzY3JpYmUiLCJjYWxjdWxhdGVCb2FyZENvbnRhaW5lciIsInZpZXciLCJIIiwiVyIsImNyZWF0ZVBhd25zIiwiQXJyYXkiLCJtYXAiLCJlbGVtIiwic3ByaXRlIiwiY3JlYXRlR2FtZUxpbmVzIiwiZmFjdG9yIiwiY3JlYXRlQnJva2VuTGluZSIsInlfdXNlciIsInlfb3BwIiwiY3JlYXRlRmluaXNoTGluZXMiLCJ0b3AiLCJib2FyZFBuZyIsIndoaXRlUGF3blBuZyIsIndoaXRlUGF3blNpZGVQbmciLCJ3aGl0ZVBhd25TZWxlY3RlZFBuZyIsImJsYWNrUGF3blBuZyIsImJsYWNrUGF3blNpZGVQbmciLCJibGFja1Bhd25TZWxlY3RlZFBuZyIsIndoaXRlUGF3bk9iaiIsImJsYWNrUGF3bk9iaiIsImxpbmVBcnIiLCJ3aGl0ZVBhd25BcnIiLCJibGFja1Bhd25BcnIiLCJmaW5pc2hMaW5lQXJyIiwiYnJva2VuTGluZUFyciIsInV0aWxzIiwic2tpcEhlbGxvIiwiQXBwbGljYXRpb24iLCJjb25maWciLCJkaXNwbGF5IiwiYXV0b1Jlc2l6ZSIsImdhbWUiLCJib2FyZCIsImJyb2tlbiIsIndoaXRlIiwiYmxhY2siLCJmaW5pc2giLCJjYW5Eb3VibGUiLCJzZXR1cCIsIkJvYXJkQ29udGFpbmVyQ2xhc3MiLCJpbWciLCJoZWxwZXJzIiwicGFpciIsInRvQWRkIiwic3BsaWNlIiwic3RhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwicGl4aUxvYWRlciIsImFkZCIsImxvYWQiLCJUT1AiLCJMRUZUIiwiTUlERExFIiwiU0VDX1BFUkMiLCJ0b3BIZWlnaHRSYXRpbyIsImxlZnRXaWR0aFJhdGlvIiwibWlkZGxlV2lkdGhSYXRpbyIsInBhd25IZWlnaHRSYXRpbyIsInNlY3Rpb25XaWR0aFJhdGlvIiwic2VjdGlvbkhlaWdodFJhdGlvIiwibGluZVdpZHRoUmF0aW8iLCJsaW5lSGVpZ2h0UmF0aW8iLCJzZWN0aW9uIiwic2lkZUxpbmUiLCJwYXduX3NpZGUiLCJicm9rZW5fbGluZSIsIkJPQVJEX0NPTlRBSU5FUiIsIkdBTUVfTElORSIsIkZJTklTSF9MSU5FIiwiQlJPS0VOX0xJTkUiLCJHQU1FX1BBV04iLCJCUk9LRU5fQ09VTlRFUiIsIkxJTkVfSElHSExJR0hUIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNQQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDJCOzs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7O0FBRUEsa0M7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ0pBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0M7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSwrQjs7Ozs7Ozs7Ozs7QUNyQkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekMsNEJBQTRCLG1CQUFPLENBQUMsK0ZBQXlCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRDOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNUQSx3QkFBd0IsbUJBQU8sQ0FBQyx1RkFBcUI7O0FBRXJELHNCQUFzQixtQkFBTyxDQUFDLG1GQUFtQjs7QUFFakQsd0JBQXdCLG1CQUFPLENBQUMsdUZBQXFCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDVkEsd0JBQXdCLDJFQUEyRSxvQ0FBb0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLG9DQUFvQyw4SEFBOEgsR0FBRyxFQUFFLHNCQUFzQjs7QUFFblc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9nYW1lL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgQm9hcmRDb250YWluZXIgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IodXNlciwgb3Bwb25lbnQpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlciA9IHVzZXJcclxuICAgIHRoaXMub3Bwb25lbnQgPSBvcHBvbmVudFxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5XXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5IXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuQk9BUkRfQ09OVEFJTkVSXHJcbiAgICB0aGlzLnBvc2l0aW9uLnNldCgwLCAwKVxyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlQm9hcmRDb250YWluZXIgKGFwcCkge1xyXG4gICAgbGV0IHJhdGlvID0gKDEwMCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyByYXRpb3MuSCAvIDEwMFxyXG5cclxuICAgIGFwcC5yZW5kZXJlci5yZXNpemUocmF0aW9zLlcgKiByYXRpbywgcmF0aW9zLkggKiByYXRpbylcclxuICAgIFxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5XICogcmF0aW9cclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLkggKiByYXRpb1xyXG4gICAgdGhpcy5zY2FsZS5zZXQocmF0aW8sIHJhdGlvKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQm9hcmQgKCkge1xyXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgaWYgKGNoaWxkLnhUeXBlLmluY2x1ZGVzKCdMSU5FJykpIHtcclxuICAgICAgICBjaGlsZC5vcmRlclBhd25zICYmIGNoaWxkLm9yZGVyUGF3bnMoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoQm9hcmRDb250YWluZXIpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEJyb2tlbkxpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5CUk9LRU5fTElORVxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5icm9rZW5fbGluZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MuYnJva2VuX2xpbmUuaGVpZ2h0XHJcbiAgICB0aGlzLm1vdmVzID0gW11cclxuXHJcbiAgICB0aGlzLmNvdW50U3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgIGZvbnRTaXplOiA0MixcclxuICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxyXG4gICAgICBzdHJva2U6ICcjMDAwMDAwJyxcclxuICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAxLFxyXG4gICAgICBkcm9wU2hhZG93OiB0cnVlLFxyXG4gICAgICBkcm9wU2hhZG93Q29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICBkcm9wU2hhZG93Qmx1cjogNCxcclxuICAgICAgZHJvcFNoYWRvd0Rpc3RhbmNlOiAtMixcclxuICAgICAgZHJvcFNoYWRvd0FuZ2xlOiAzMCxcclxuICAgICAgZHJvcFNoYWRvd0FscGhhOiAuNixcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5oaWdoTGlnaHRTdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgZm9udFNpemU6IDQyLFxyXG4gICAgICBmaWxsOiBcIiM3NWJhMGRcIixcclxuICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXHJcbiAgICAgIHN0cm9rZVRoaWNrbmVzczogMSxcclxuICAgICAgZHJvcFNoYWRvdzogdHJ1ZSxcclxuICAgICAgZHJvcFNoYWRvd0NvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgZHJvcFNoYWRvd0JsdXI6IDQsXHJcbiAgICAgIGRyb3BTaGFkb3dEaXN0YW5jZTogLTIsXHJcbiAgICAgIGRyb3BTaGFkb3dBbmdsZTogMzAsXHJcbiAgICAgIGRyb3BTaGFkb3dBbHBoYTogLjYsXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBjb3VudCA9IG5ldyBQSVhJLlRleHQoMCwgdGhpcy5jb3VudFN0eWxlKVxyXG4gICAgY291bnQueFR5cGUgPSB0eXBlcy5CUk9LRU5fQ09VTlRFUlxyXG4gICAgY291bnQuaGVpZ2h0ID0gcmF0aW9zLkNPVU5UX0hFSUdIVFxyXG4gICAgY291bnQucGl2b3Quc2V0KGNvdW50LndpZHRoIC8gMiwgY291bnQuaGVpZ2h0IC8gMilcclxuICAgIGNvdW50LnBvc2l0aW9uLnNldChyYXRpb3MuYnJva2VuX2xpbmUud2lkdGggLyAyLCAwKVxyXG4gICAgY291bnQudmlzaWJsZSA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5hZGRDaGlsZChjb3VudClcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvdW50ICgpIHtcclxuICAgIGNvbnN0IG5ld0NvdW50ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXHJcbiAgICBjb25zdCBjb3VudGVyID0gdGhpcy5jaGlsZHJlblswXVxyXG5cclxuICAgIGNvdW50ZXIudGV4dCA9IG5ld0NvdW50XHJcbiAgICBjb3VudGVyLnZpc2libGUgPSAhIW5ld0NvdW50XHJcbiAgfVxyXG5cclxuICBvcmRlclBhd25zICgpIHtcclxuICAgIGNvbnN0IHBhd25zID0gdGhpcy5jaGlsZHJlbi5zbGljZSgxKVxyXG4gICAgcGF3bnMuZm9yRWFjaCgocGF3biwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKHBhd24ucG9zaXRpb24sIC41LCB7IHg6IDAsIHk6IHJhdGlvcy5DT1VOVF9IRUlHSFQgfSlcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy51cGRhdGVDb3VudCgpXHJcbiAgfVxyXG5cclxuICB0b2dnbGVIaWdobGlnaHQgKHZhbCkge1xyXG4gICAgdGhpcy5jaGlsZHJlblswXS5zdHlsZSA9IHZhbFxyXG4gICAgICA/IHRoaXMuaGlnaExpZ2h0U3R5bGVcclxuICAgICAgOiB0aGlzLmNvdW50U3R5bGVcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdGVkICh2YWwpIHtcclxuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdmFsICYmIHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXS5zZXRTZWxlY3RlZCgpXHJcbiAgICAgICF2YWwgJiYgdGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdLnNldFNvbGlkKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEJyb2tlbkxpbmUpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEZpbmlzaExpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuRklOSVNIX0xJTkVcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3Muc2lkZUxpbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLnNpZGVMaW5lLmhlaWdodFxyXG4gIH1cclxuXHJcbiAgb3JkZXJQYXducyAoKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKHBhd24sIGksIGFycikgPT4ge1xyXG4gICAgICBwYXduLnBvc2l0aW9uLnNldCgwLCByYXRpb3MucGF3bl9zaWRlLmhlaWdodCAqIGkpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoRmluaXNoTGluZSlcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5pbXBvcnQgeyBsaW5lU2VsZWN0ZWRQbmcgfSBmcm9tICcuLi9pbWFnZV9jb25zdGFudHMnXHJcblxyXG5jbGFzcyBHYW1lTGluZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkdBTUVfTElORVxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5saW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5saW5lLmhlaWdodFxyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWVcclxuICAgIHRoaXMuY3Vyc29yID0gJ3BvaW50ZXInXHJcbiAgICB0aGlzLm1vdmVzID0gW11cclxuXHJcbiAgICBsZXQgaGlnaGxpZ2h0ID0gbmV3IFBJWEkuU3ByaXRlKFBJWEkubG9hZGVyLnJlc291cmNlc1tsaW5lU2VsZWN0ZWRQbmddLnRleHR1cmUpXHJcbiAgICBoaWdobGlnaHQueFR5cGUgPSB0eXBlcy5MSU5FX0hJR0hMSUdIVFxyXG4gICAgXHJcbiAgICBoaWdobGlnaHQucG9zaXRpb24uc2V0KHJhdGlvcy5saW5lLndpZHRoIC8gMiwgMClcclxuICAgIGhpZ2hsaWdodC5waXZvdC5zZXQoaGlnaGxpZ2h0LndpZHRoIC8gMiwgMClcclxuICAgIGhpZ2hsaWdodC52aXNpYmxlID0gZmFsc2VcclxuICAgIFxyXG4gICAgdGhpcy5hZGRDaGlsZChoaWdobGlnaHQpXHJcbiAgfVxyXG5cclxuICBvcmRlclBhd25zICgpIHtcclxuICAgIGNvbnN0IHBhd25BcnIgPSB0aGlzLmNoaWxkcmVuLnNsaWNlKDEpXHJcbiAgICBjb25zdCByZXZlcnNlID0gdGhpcy5udW1iZXIgPj0gMTJcclxuICAgIGxldCByb3cgPSByYXRpb3MubGluZS5oZWlnaHQgLyBwYXduQXJyLmxlbmd0aFxyXG5cclxuICAgIGlmIChyb3cgPCByYXRpb3MuUEFXTikge1xyXG4gICAgICByb3cgPSByb3cgLSAoKHJhdGlvcy5QQVdOIC0gcm93KSAvIHBhd25BcnIubGVuZ3RoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm93ID0gcmF0aW9zLlBBV05cclxuICAgIH1cclxuXHJcbiAgICBwYXduQXJyLmZvckVhY2goKHBhd24sIGksIGFycikgPT4ge1xyXG4gICAgICByZXZlcnNlXHJcbiAgICAgICAgPyBUd2Vlbk1heC50byhwYXduLnBvc2l0aW9uLCAuNSwgeyB4OiAwLCB5OiByYXRpb3MubGluZS5oZWlnaHQgLSAocm93ICogaSkgLSByYXRpb3MuUEFXTiB9KVxyXG4gICAgICAgIDogVHdlZW5NYXgudG8ocGF3bi5wb3NpdGlvbiwgLjUsIHsgeDogMCwgeTogcm93ICogaSB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHRvZ2dsZUhpZ2hsaWdodCAodmFsKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuWzBdLnZpc2libGUgPSB2YWxcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdGVkICh2YWwpIHtcclxuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdmFsICYmIHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXS5zZXRTZWxlY3RlZCgpXHJcbiAgICAgICF2YWwgJiYgdGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdLnNldFNvbGlkKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEdhbWVMaW5lKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgZnVuY3Rpb25zIGZyb20gJy4uL2Z1bmN0aW9ucydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5jbGFzcyBQYXduIGV4dGVuZHMgUElYSS5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhd25PYmosIGNvbG9yLCBpc1VzZXIpIHtcclxuICAgIHN1cGVyKFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNvbGlkXS50ZXh0dXJlKVxyXG4gICAgXHJcbiAgICB0aGlzLnBhd25PYmogPSBwYXduT2JqXHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcclxuICAgIHRoaXMuaXNVc2VyID0gaXNVc2VyXHJcbiAgICB0aGlzLmN1cnNvciA9ICdwb2ludGVyJ1xyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkdBTUVfUEFXTlxyXG4gICAgdGhpcy5vbignYWRkZWQnLCBmdW5jdGlvbnMub25BZGRlZClcclxuICAgIHRoaXMub24oJ3JlbW92ZWQnLCBmdW5jdGlvbnMub25SZW1vdmVkKVxyXG4gIH1cclxuXHJcbiAgc2V0UGFyZW50Q3VzdG9tIChuZXdQYXJlbnQpIHtcclxuICAgIGlmIChuZXdQYXJlbnQudG9IaXQpIHtcclxuICAgICAgbmV3UGFyZW50LnRvSGl0ID0gZmFsc2VcclxuICAgICAgbmV3UGFyZW50LnRvU2l0ID0gdHJ1ZVxyXG4gICAgICBcclxuICAgICAgY29uc3QgaGl0dGVkUGF3biA9IG5ld1BhcmVudC5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pXHJcbiAgICAgIGhpdHRlZFBhd24uZ29Ub0Jyb2tlbkxpbmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdQYXJlbnQueFR5cGUgPT09IHR5cGVzLkZJTklTSF9MSU5FKSB7XHJcbiAgICAgIHRoaXMuc2V0U2lkZSgpXHJcbiAgICB9XHJcbiAgICBuZXdQYXJlbnQudG9Mb2NhbChuZXcgUElYSS5Qb2ludCgwLDApLCB0aGlzLCB0aGlzLnBvc2l0aW9uKVxyXG4gICAgbmV3UGFyZW50LmFkZENoaWxkKHRoaXMpXHJcbiAgfVxyXG5cclxuICBzZXRTb2xpZCAoKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNbdGhpcy5wYXduT2JqLnNvbGlkXS50ZXh0dXJlXHJcbiAgfVxyXG5cclxuICBzZXRTaWRlICgpIHtcclxuICAgIHRoaXMudGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1t0aGlzLnBhd25PYmouc2lkZV0udGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWQgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW3RoaXMucGF3bk9iai5zZWxlY3RlZF0udGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlICgpIHtcclxuICAgIGZ1bmN0aW9ucy5zdWJzY3JpYmUodGhpcylcclxuICB9XHJcblxyXG4gIHVuU3Vic2NyaWJlICgpIHtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgZ29Ub0Jyb2tlbkxpbmUgKCkge1xyXG4gICAgY29uc3QgYnJva2VuTGluZXMgPSB0aGlzLl9nZXRCcm9rZW5MaW5lcygpXHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5fZ2V0VXNlcigpXHJcbiAgICB1c2VyLmNvbG9yID09PSB0aGlzLmNvbG9yXHJcbiAgICAgID8gdGhpcy5zZXRQYXJlbnRDdXN0b20oYnJva2VuTGluZXNbMV0pXHJcbiAgICAgIDogdGhpcy5zZXRQYXJlbnRDdXN0b20oYnJva2VuTGluZXNbMF0pXHJcbiAgfVxyXG5cclxuICBnb1RvRmluaXNoTGluZSAoKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGdvVG9MaW5lIChsaW5lTnVtYmVyKSB7XHJcbiAgIHRoaXMuc2V0UGFyZW50Q3VzdG9tKHRoaXMuX2dldE9uZUxpbmUobGluZU51bWJlcikpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShQYXduKVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBhd24gfSBmcm9tICcuL1Bhd24uY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtZUxpbmUgfSBmcm9tICcuL0dhbWVMaW5lLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmlzaExpbmUgfSBmcm9tICcuL0ZpbmlzaExpbmUuY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnJva2VuTGluZSB9IGZyb20gJy4vQnJva2VuTGluZS5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb2FyZENvbnRhaW5lciB9IGZyb20gJy4vQm9hcmRDb250YWluZXIuY2xhc3MnIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29tcCkgPT4ge1xyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRCb2FyZCA9IGZ1bmN0aW9uIChvYmogPSB0aGlzKSB7XHJcbiAgICBpZiAob2JqLnhUeXBlID09PSB0eXBlcy5CT0FSRF9DT05UQUlORVIpIHtcclxuICAgICAgcmV0dXJuIG9ialxyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKCFvYmoucGFyZW50KSB7XHJcbiAgICAgIHJldHVybiBvYmouY2hpbGRyZW5bMF1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB0aGlzLl9nZXRCb2FyZChvYmoucGFyZW50KVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQoKS51c2VyXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0T3Bwb25lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQoKS5vcHBvbmVudFxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldEdhbWVMaW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRCb2FyZCgpLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9MSU5FKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldEdhbWVMaW5lQnlOdW1iZXIgPSBmdW5jdGlvbiAobGluZU51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJvYXJkKCkuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9MSU5FICYmIGNoaWxkLm51bWJlciA9PT0gbGluZU51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRGaW5pc2hMaW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRCb2FyZCgpLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuRklOSVNIX0xJTkUpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0TXlGaW5pc2hMaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldEZpbmlzaExpbmVzKClbMF1cclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRPcHBvbmVudEZpbmlzaExpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0RmluaXNoTGluZXMoKVsxXVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldEJyb2tlbkxpbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJvYXJkKCkuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5CUk9LRU5fTElORSlcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRNeUJyb2tlbkxpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0QnJva2VuTGluZXMoKVswXVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE9wcG9uZW50QnJva2VuTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRCcm9rZW5MaW5lcygpWzFdXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcFxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdpZHRoOiA4MDAsXHJcbiAgaGVpZ2h0OiA4MDAsXHJcbiAgYW50aWFsaWFzOiB0cnVlLFxyXG4gIHRyYW5zcGFyZW50OiBmYWxzZSxcclxuICByZXNvbHV0aW9uOiBkZXZpY2VQaXhlbFJhdGlvLFxyXG4gIGxlZ2FjeTp0cnVlLFxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdTdGFydChldmVudCkge1xyXG4gIGlmICghdGhpcy5kcmFnZ2luZykge1xyXG4gICAgdGhpcy5zdGFydFBvaW50ID0geyAuLi5ldmVudC5kYXRhLmdsb2JhbCB9XHJcbiAgICB0aGlzLmhvbWVQYXJlbnQgPSB0aGlzLnBhcmVudFxyXG4gICAgdGhpcy5wcmV2aW91c1BhcmVudCA9IHRoaXMucGFyZW50XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5kcmFnUG9pbnQgPSB0aGlzLmdldEdsb2JhbFBvc2l0aW9uKClcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgdGhpcy5zZXRQYXJlbnRDdXN0b20oYm9hcmRDb250YWluZXIpXHJcbiAgICB0aGlzLnNldFNlbGVjdGVkKClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdNb3ZlKGUpIHtcclxuICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICBcclxuICAgIHRoaXMuZ2xvYmFsUG9pbnQgPSB7IHg6IHRoaXMuZHJhZ1BvaW50LnggLSAodGhpcy5zdGFydFBvaW50LnggLSBlLmRhdGEuZ2xvYmFsLngpLCB5OiB0aGlzLmRyYWdQb2ludC55IC0gKHRoaXMuc3RhcnRQb2ludC55IC0gZS5kYXRhLmdsb2JhbC55KSB9XHJcblxyXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSB0aGlzLnBhcmVudC50b0xvY2FsKHRoaXMuZ2xvYmFsUG9pbnQpXHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSBuZXdQb3NpdGlvbi54XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSBuZXdQb3NpdGlvbi55XHJcblxyXG4gICAgbmV3UG9zaXRpb24ueCArPSB0aGlzLndpZHRoIC8gMlxyXG4gICAgbmV3UG9zaXRpb24ueSArPSB0aGlzLmhlaWdodCAvIDJcclxuXHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSB0aGlzLl9nZXRMaW5lcygpLmZpbmQobGluZSA9PiB7XHJcbiAgICAgIGxldCBjZW50ZXIgPSBsaW5lLnRvTG9jYWwodGhpcy5nbG9iYWxQb2ludClcclxuICAgICAgY2VudGVyLnggKz0gdGhpcy53aWR0aCAvIDJcclxuICAgICAgY2VudGVyLnkgKz0gdGhpcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgICByZXR1cm4gbGluZS50ZXN0SGl0KGNlbnRlcilcclxuICAgIH0pIHx8IGJvYXJkQ29udGFpbmVyXHJcblxyXG4gICAgaWYgKG5ld1BhcmVudC5uYW1lICE9PSB0aGlzLnByZXZpb3VzUGFyZW50Lm5hbWUpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1BhcmVudC5vcmRlclBhd25zICYmIHRoaXMucHJldmlvdXNQYXJlbnQub3JkZXJQYXducygpXHJcblxyXG4gICAgICBpZiAobmV3UGFyZW50Lm9yZGVyUGF3bnMgJiYgKG5ld1BhcmVudC50b0hpdCB8fCBuZXdQYXJlbnQudG9TaXQpKSB7XHJcbiAgICAgICAgbmV3UGFyZW50Lm9yZGVyUGF3bnMoeyBmYWtlOiB0cnVlIH0pXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1BhcmVudCA9IG5ld1BhcmVudFxyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnRW5kKCkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2VcclxuICAgIFxyXG4gICAgbGV0IGxpbmVzID0gdGhpcy5fZ2V0TGluZXMoKVxyXG4gICAgbGluZXMucHVzaCh0aGlzLl9nZXRNeUZpbmlzaExpbmUoKSlcclxuXHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSBsaW5lcy5maW5kKGxpbmUgPT4ge1xyXG4gICAgICBsZXQgY2VudGVyID0gbGluZS50b0xvY2FsKHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKSlcclxuICAgICAgY2VudGVyLnggKz0gdGhpcy53aWR0aCAvIDJcclxuICAgICAgY2VudGVyLnkgKz0gdGhpcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgICByZXR1cm4gbGluZS50ZXN0SGl0KGNlbnRlcikgJiYgKGxpbmUudG9IaXQgfHwgbGluZS50b1NpdClcclxuICAgIH0pIHx8IHRoaXMuaG9tZVBhcmVudFxyXG5cclxuICAgIHRoaXMuc2V0U29saWQoKVxyXG4gICAgdGhpcy5zZXRQYXJlbnRDdXN0b20obmV3UGFyZW50KVxyXG5cclxuICAgIHRoaXMuc3RhcnRQb2ludCA9IG51bGxcclxuICAgIHRoaXMuaG9tZVBhcmVudCA9IG51bGxcclxuICAgIHRoaXMucHJldmlvdXNQYXJlbnQgPSBudWxsXHJcbiAgICB0aGlzLmRyYWdQb2ludCA9IG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkFkZGVkIChjb250YWluZXIpIHtcclxuICBjb250YWluZXIub3JkZXJQYXducyAmJiBjb250YWluZXIub3JkZXJQYXducygpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvblJlbW92ZWQgKGNvbnRhaW5lcikge1xyXG4gIGNvbnRhaW5lci5vcmRlclBhd25zICYmIGNvbnRhaW5lci5vcmRlclBhd25zKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZSAob2JqKSB7XHJcbiAgb2JqLmludGVyYWN0aXZlID0gdHJ1ZVxyXG4gIG9iai5vbignbW91c2Vkb3duJywgb25EcmFnU3RhcnQpXHJcbiAgICAub24oJ3RvdWNoc3RhcnQnLCBvbkRyYWdTdGFydClcclxuICAgIC5vbignbW91c2V1cCcsIG9uRHJhZ0VuZClcclxuICAgIC5vbignbW91c2V1cG91dHNpZGUnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ3RvdWNoZW5kJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCd0b3VjaGVuZG91dHNpZGUnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ21vdXNlbW92ZScsIG9uRHJhZ01vdmUpXHJcbiAgICAub24oJ3RvdWNobW92ZScsIG9uRHJhZ01vdmUpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1blN1YnNjcmliZSAob2JqKSB7XHJcbiAgb2JqLmludGVyYWN0aXZlID0gdHJ1ZVxyXG4gIG9iai5vbignbW91c2Vkb3duJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2V1cCcsICgpID0+IHt9KVxyXG4gICAgLm9uKCdtb3VzZXVwb3V0c2lkZScsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaGVuZCcsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaGVuZG91dHNpZGUnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2Vtb3ZlJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNobW92ZScsICgpID0+IHt9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQm9hcmRDb250YWluZXIgKGJvYXJkQ29udGFpbmVyLCBhcHAsIHJhdGlvcykge1xyXG4gIGxldCByYXRpbyA9ICgxMDAgKiBhcHAucmVuZGVyZXIudmlldy5oZWlnaHQpIC8gcmF0aW9zLkggLyAxMDBcclxuXHJcbiAgYm9hcmRDb250YWluZXIud2lkdGggPSByYXRpb3MuVyAvIDEwMCAqIHJhdGlvXHJcbiAgYm9hcmRDb250YWluZXIuaGVpZ2h0ID0gcmF0aW9zLkggLyAxMDAgKiByYXRpb1xyXG5cclxuICBib2FyZENvbnRhaW5lci5wb3NpdGlvbi5zZXQoYXBwLnJlbmRlcmVyLnZpZXcud2lkdGggLyAyLCBhcHAucmVuZGVyZXIudmlldy5oZWlnaHQgLyAyKVxyXG4gIGJvYXJkQ29udGFpbmVyLnNjYWxlLnNldChyYXRpbywgcmF0aW8pXHJcbiAgYm9hcmRDb250YWluZXIucGl2b3Quc2V0KHJhdGlvcy5XIC8gMiwgcmF0aW9zLkggLyAyKVxyXG59IiwiaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4vcmF0aW9zJ1xyXG5pbXBvcnQge1xyXG4gIFBhd24sXHJcbiAgR2FtZUxpbmUsXHJcbiAgRmluaXNoTGluZSxcclxuICBCcm9rZW5MaW5lXHJcbn0gZnJvbSAnLi9jbGFzc2VzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhd25zIChwYXduT2JqLCBjb2xvciwgaXNVc2VyID0gZmFsc2UsIGNvdW50ID0gMTUpIHtcclxuICByZXR1cm4gbmV3IEFycmF5KGNvdW50KS5maWxsKDApLm1hcCgoZWxlbSwgaSkgPT4ge1xyXG4gICAgY29uc3Qgc3ByaXRlID0gbmV3IFBhd24ocGF3bk9iaiwgY29sb3IsIGlzVXNlcilcclxuXHJcbiAgICByZXR1cm4gc3ByaXRlXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lTGluZXMgKHVzZXIpIHtcclxuICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgyNCkuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gbGluZXMubWFwKChsaW5lLCBpLCBhcnIpID0+IHtcclxuICAgIGxldCBudW1iZXIgPSB1c2VyLmNvbG9yID09PSAnd2hpdGUnID8gaSA6IGFyci5sZW5ndGggLSBpIC0gMVxyXG4gICAgbGluZSA9IG5ldyBHYW1lTGluZSgpXHJcbiAgICBsaW5lLm51bWJlciA9IG51bWJlclxyXG5cclxuICAgIGxldCBmYWN0b3IgPSBpICUgNlxyXG5cclxuICAgIGlmIChpIDwgNikgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQgKyAocmF0aW9zLnNlY3Rpb24ud2lkdGggKiAyKSArIHJhdGlvcy5NSURETEUgLSAocmF0aW9zLmxpbmUud2lkdGggKiAoZmFjdG9yICsgMSkpLCByYXRpb3MuVE9QKVxyXG4gICAgZWxzZSBpZiAoaSA8IDEyKSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCArIHJhdGlvcy5zZWN0aW9uLndpZHRoIC0gKHJhdGlvcy5saW5lLndpZHRoICogKGZhY3RvciArIDEpKSwgcmF0aW9zLlRPUClcclxuXHJcbiAgICBlbHNlIGlmIChpIDwgMTgpIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZUICsgKHJhdGlvcy5saW5lLndpZHRoICogZmFjdG9yKSwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNlY3Rpb24uaGVpZ2h0KVxyXG4gICAgZWxzZSBpZiAoaSA8IDI0KSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCArIHJhdGlvcy5zZWN0aW9uLndpZHRoICsgcmF0aW9zLk1JRERMRSArIChyYXRpb3MubGluZS53aWR0aCAqIGZhY3RvciksIHJhdGlvcy5IIC0gcmF0aW9zLlRPUCAtIHJhdGlvcy5zZWN0aW9uLmhlaWdodClcclxuXHJcbiAgICByZXR1cm4gbGluZVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCcm9rZW5MaW5lICh1c2VyKSB7XHJcbiAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXkoMikuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gbGluZXMubWFwKChsaW5lLCBpLCBhcnIpID0+IHtcclxuICAgIGxpbmUgPSBuZXcgQnJva2VuTGluZSgpXHJcbiAgICBsaW5lLm51bWJlciA9IDI0ICsgaVxyXG5cclxuICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgIGxpbmUuY29sb3IgPSB1c2VyLmNvbG9yID09PSAnd2hpdGUnID8gJ3doaXRlJyA6ICdibGFjaydcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxpbmUuY29sb3IgPSB1c2VyLmNvbG9yID09PSAnd2hpdGUnID8gJ2JsYWNrJyA6ICd3aGl0ZSdcclxuICAgIH1cclxuXHJcbiAgICBsaW5lLmlzVXNlciA9ICFpXHJcblxyXG4gICAgaWYgKGkgPT09IDApIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5icm9rZW5fbGluZS54LCByYXRpb3MuYnJva2VuX2xpbmUueV91c2VyKVxyXG4gICAgaWYgKGkgPT09IDEpIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5icm9rZW5fbGluZS54LCByYXRpb3MuYnJva2VuX2xpbmUueV9vcHApXHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmluaXNoTGluZXMgKHVzZXIpIHtcclxuICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgyKS5maWxsKDApXHJcblxyXG4gIHJldHVybiBsaW5lcy5tYXAoKGxpbmUsIGksIGFycikgPT4ge1xyXG4gICAgbGluZSA9IG5ldyBGaW5pc2hMaW5lKClcclxuICAgIGxpbmUubnVtYmVyID0gMjYgKyBpXHJcblxyXG4gICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgbGluZS5jb2xvciA9IHVzZXIuY29sb3IgPT09ICd3aGl0ZScgPyAnd2hpdGUnIDogJ2JsYWNrJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGluZS5jb2xvciA9IHVzZXIuY29sb3IgPT09ICd3aGl0ZScgPyAnYmxhY2snIDogJ3doaXRlJ1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmUuaXNVc2VyID0gIWlcclxuXHJcbiAgICBpZiAoaSA9PT0gMCkgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLlcgLSByYXRpb3Muc2lkZUxpbmUuc2lkZSAtIHJhdGlvcy5zaWRlTGluZS53aWR0aCwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNpZGVMaW5lLmhlaWdodClcclxuICAgIGlmIChpID09PSAxKSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuVyAtIHJhdGlvcy5zaWRlTGluZS5zaWRlIC0gcmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3Muc2lkZUxpbmUudG9wKVxyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYm9hcmRQbmcgPSAnYm9hcmQucG5nJ1xyXG5leHBvcnQgY29uc3Qgd2hpdGVQYXduUG5nID0gYHdoaXRlX3Bhd24ucG5nYFxyXG5leHBvcnQgY29uc3Qgd2hpdGVQYXduU2lkZVBuZyA9IGB3aGl0ZV9wYXduMi5wbmdgXHJcbmV4cG9ydCBjb25zdCB3aGl0ZVBhd25TZWxlY3RlZFBuZyA9IGB3aGl0ZV9wYXduX3NlbGVjdGVkLnBuZ2BcclxuZXhwb3J0IGNvbnN0IGJsYWNrUGF3blBuZyA9IGBibGFja19wYXduLnBuZ2BcclxuZXhwb3J0IGNvbnN0IGJsYWNrUGF3blNpZGVQbmcgPSBgYmxhY2tfcGF3bjIucG5nYFxyXG5leHBvcnQgY29uc3QgYmxhY2tQYXduU2VsZWN0ZWRQbmcgPSBgYmxhY2tfcGF3bl9zZWxlY3RlZC5wbmdgXHJcbmV4cG9ydCBjb25zdCBsaW5lU2VsZWN0ZWRQbmcgPSAnbGluZV9zZWxlY3RlZC5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHdoaXRlUGF3bk9iaiA9IHtcclxuICBzb2xpZDogd2hpdGVQYXduUG5nLFxyXG4gIHNpZGU6IHdoaXRlUGF3blNpZGVQbmcsXHJcbiAgc2VsZWN0ZWQ6IHdoaXRlUGF3blNlbGVjdGVkUG5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBibGFja1Bhd25PYmogPSB7XHJcbiAgc29saWQ6IGJsYWNrUGF3blBuZyxcclxuICBzaWRlOiBibGFja1Bhd25TaWRlUG5nLFxyXG4gIHNlbGVjdGVkOiBibGFja1Bhd25TZWxlY3RlZFBuZ1xyXG59IiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuL2hlbHBlcnMnXHJcbmltcG9ydCB7IEJvYXJkQ29udGFpbmVyIGFzIEJvYXJkQ29udGFpbmVyQ2xhc3MgfSBmcm9tICcuL2NsYXNzZXMnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcbmltcG9ydCAqIGFzIGltZyBmcm9tICcuL2ltYWdlX2NvbnN0YW50cydcclxuXHJcbmxldCBib2FyZENvbnRhaW5lciwgbGluZUFyciA9IFtdLCB3aGl0ZVBhd25BcnIgPSBbXSwgYmxhY2tQYXduQXJyID0gW10sIGZpbmlzaExpbmVBcnIgPSBbXSwgYnJva2VuTGluZUFyciA9IFtdXHJcblxyXG4vKiBBUFAgU1RBUlQgKi9cclxuUElYSS51dGlscy5za2lwSGVsbG8oKVxyXG5cclxubGV0IEFwcGxpY2F0aW9uID0gUElYSS5BcHBsaWNhdGlvbixcclxuICAgIGxvYWRlciA9IFBJWEkubG9hZGVyLFxyXG4gICAgcmVzb3VyY2VzID0gUElYSS5sb2FkZXIucmVzb3VyY2VzLFxyXG4gICAgU3ByaXRlID0gUElYSS5TcHJpdGVcclxuXHJcbmxldCBhcHAgPSBuZXcgQXBwbGljYXRpb24oY29uZmlnKVxyXG5hcHAucmVuZGVyZXIudmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxyXG5hcHAucmVuZGVyZXIudmlldy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbmFwcC5yZW5kZXJlci5hdXRvUmVzaXplID0gdHJ1ZVxyXG4vKiBBUFAgRU5EICovXHJcblxyXG5jb25zdCB1c2VyID0ge1xyXG4gIGNvbG9yOiAnd2hpdGUnLFxyXG59XHJcblxyXG5jb25zdCBvcHBvbmVudCA9IHtcclxuICBjb2xvcjogJ2JsYWNrJyxcclxufVxyXG5cclxuY29uc3QgZ2FtZSA9IHtcclxuICBib2FyZDogW1xyXG4gICAgWzIsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCA1XSxcclxuICAgIFswLCAwXSwgWzAsIDNdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbNSwgMF0sXHJcbiAgICBbMCwgNV0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFszLCAwXSwgWzAsIDBdLFxyXG4gICAgWzUsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAyXVxyXG4gIF0sXHJcbiAgYnJva2VuOiB7XHJcbiAgICB3aGl0ZTogMCxcclxuICAgIGJsYWNrOiAwXHJcbiAgfSxcclxuICBmaW5pc2g6IHtcclxuICAgIHdoaXRlOiAwLFxyXG4gICAgYmxhY2s6IDBcclxuICB9LFxyXG4gIGNhbkRvdWJsZTogZmFsc2VcclxufVxyXG5cclxuLy8gU0VUVVBcclxuY29uc3Qgc2V0dXAgPSAoKSA9PiB7XHJcbiAgYm9hcmRDb250YWluZXIgPSBuZXcgQm9hcmRDb250YWluZXJDbGFzcyh1c2VyLCBvcHBvbmVudClcclxuXHJcbiAgbGV0IGJvYXJkID0gbmV3IFNwcml0ZShyZXNvdXJjZXNbaW1nLmJvYXJkUG5nXS50ZXh0dXJlKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKGJvYXJkKVxyXG5cclxuICBsaW5lQXJyID0gaGVscGVycy5jcmVhdGVHYW1lTGluZXModXNlcilcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZCguLi5saW5lQXJyKVxyXG5cclxuICBmaW5pc2hMaW5lQXJyID0gaGVscGVycy5jcmVhdGVGaW5pc2hMaW5lcyh1c2VyKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKC4uLmZpbmlzaExpbmVBcnIpXHJcblxyXG4gIGJyb2tlbkxpbmVBcnIgPSBoZWxwZXJzLmNyZWF0ZUJyb2tlbkxpbmUodXNlcilcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZCguLi5icm9rZW5MaW5lQXJyKVxyXG5cclxuICB3aGl0ZVBhd25BcnIgPSBoZWxwZXJzLmNyZWF0ZVBhd25zKGltZy53aGl0ZVBhd25PYmosICd3aGl0ZScsIHVzZXIuY29sb3IgPT09ICd3aGl0ZScpXHJcbiAgYmxhY2tQYXduQXJyID0gaGVscGVycy5jcmVhdGVQYXducyhpbWcuYmxhY2tQYXduT2JqLCAnYmxhY2snLCB1c2VyLmNvbG9yID09PSAnYmxhY2snKVxyXG5cclxuICBnYW1lLmJvYXJkLmZvckVhY2goKHBhaXIsIGkpID0+IHtcclxuICAgIGlmIChwYWlyWzBdIHx8IHBhaXJbMV0pIHtcclxuICAgICAgbGV0IHRvQWRkID0gcGFpclswXVxyXG4gICAgICAgID8gd2hpdGVQYXduQXJyLnNwbGljZSgwLCBwYWlyWzBdKVxyXG4gICAgICAgIDogYmxhY2tQYXduQXJyLnNwbGljZSgwLCBwYWlyWzFdKVxyXG5cclxuICAgICAgbGluZUFyclxyXG4gICAgICAgIC5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IGkpXHJcbiAgICAgICAgLmFkZENoaWxkKC4uLnRvQWRkKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGdhbWUuYnJva2VuLndoaXRlICYmIGJyb2tlbkxpbmVBcnIuZmluZChsaW5lID0+IGxpbmUuY29sb3IgPT09ICd3aGl0ZScpLmFkZENoaWxkKC4uLndoaXRlUGF3bkFyci5zcGxpY2UoMCwgZ2FtZS5icm9rZW4ud2hpdGUpKVxyXG4gIGdhbWUuYnJva2VuLmJsYWNrICYmIGJyb2tlbkxpbmVBcnIuZmluZChsaW5lID0+IGxpbmUuY29sb3IgPT09ICdibGFjaycpLmFkZENoaWxkKC4uLmJsYWNrUGF3bkFyci5zcGxpY2UoMCwgZ2FtZS5icm9rZW4uYmxhY2spKVxyXG5cclxuICBnYW1lLmZpbmlzaC53aGl0ZSAmJiBmaW5pc2hMaW5lQXJyLmZpbmQobGluZSA9PiBsaW5lLmNvbG9yID09PSAnd2hpdGUnKS5hZGRDaGlsZCguLi53aGl0ZVBhd25BcnIuc3BsaWNlKDAsIGdhbWUuZmluaXNoLndoaXRlKSlcclxuICBnYW1lLmZpbmlzaC5ibGFjayAmJiBmaW5pc2hMaW5lQXJyLmZpbmQobGluZSA9PiBsaW5lLmNvbG9yID09PSAnYmxhY2snKS5hZGRDaGlsZCguLi5ibGFja1Bhd25BcnIuc3BsaWNlKDAsIGdhbWUuZmluaXNoLmJsYWNrKSlcclxuXHJcbiAgYm9hcmRDb250YWluZXIuY2FsY3VsYXRlQm9hcmRDb250YWluZXIoYXBwKVxyXG5cclxuICBhcHAuc3RhZ2UuYWRkQ2hpbGQoYm9hcmRDb250YWluZXIpXHJcblxyXG4gIGNvbnN0IHJlc2l6ZSA9ICgpID0+IGJvYXJkQ29udGFpbmVyLmNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyKGFwcClcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplKVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHJlc2l6ZSlcclxuICBcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmFwcGVuZENoaWxkKGFwcC52aWV3KVxyXG5cclxuICByZXNpemUoKVxyXG59XHJcblxyXG5jb25zdCBwaXhpTG9hZGVyID0gKCkgPT4ge1xyXG4gIGxvYWRlclxyXG4gICAgLmFkZChbXHJcbiAgICAgIGltZy5ib2FyZFBuZyxcclxuICAgICAgaW1nLndoaXRlUGF3blBuZyxcclxuICAgICAgaW1nLndoaXRlUGF3blNpZGVQbmcsXHJcbiAgICAgIGltZy53aGl0ZVBhd25TZWxlY3RlZFBuZyxcclxuICAgICAgaW1nLmJsYWNrUGF3blBuZyxcclxuICAgICAgaW1nLmJsYWNrUGF3blNpZGVQbmcsXHJcbiAgICAgIGltZy5ibGFja1Bhd25TZWxlY3RlZFBuZyxcclxuICAgICAgaW1nLmxpbmVTZWxlY3RlZFBuZ1xyXG4gICAgXSlcclxuICAgIC5sb2FkKHNldHVwKVxyXG59XHJcblxyXG5waXhpTG9hZGVyKClcclxuIiwiZXhwb3J0IGNvbnN0IEggPSA3NjhcclxuZXhwb3J0IGNvbnN0IFcgPSAxMTQ3XHJcbmV4cG9ydCBjb25zdCBUT1AgPSAyMFxyXG5leHBvcnQgY29uc3QgTEVGVCA9IDEwOFxyXG5leHBvcnQgY29uc3QgTUlERExFID0gODJcclxuZXhwb3J0IGNvbnN0IFBBV04gPSA3MVxyXG5leHBvcnQgY29uc3QgU0VDX1BFUkMgPSA4NVxyXG5leHBvcnQgY29uc3QgQ09VTlRfSEVJR0hUID0gNTBcclxuXHJcbmV4cG9ydCBjb25zdCB0b3BIZWlnaHRSYXRpbyA9IFRPUCAqIDEwMCAvIEhcclxuZXhwb3J0IGNvbnN0IGxlZnRXaWR0aFJhdGlvID0gTEVGVCAqIDEwMCAvIFdcclxuZXhwb3J0IGNvbnN0IG1pZGRsZVdpZHRoUmF0aW8gPSBNSURETEUgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBwYXduSGVpZ2h0UmF0aW8gPSBQQVdOICogMTAwIC8gSFxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb25XaWR0aFJhdGlvID0gKChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAyKSAqIDEwMCAvIFdcclxuZXhwb3J0IGNvbnN0IHNlY3Rpb25IZWlnaHRSYXRpbyA9ICgoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDApICogMTAwIC8gSFxyXG5leHBvcnQgY29uc3QgbGluZVdpZHRoUmF0aW8gPSBzZWN0aW9uV2lkdGhSYXRpbyAvIDZcclxuZXhwb3J0IGNvbnN0IGxpbmVIZWlnaHRSYXRpbyA9IHNlY3Rpb25IZWlnaHRSYXRpb1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmUgPSB7XHJcbiAgd2lkdGg6IChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAxMixcclxuICBoZWlnaHQ6IChIIC0gKFRPUCAqIDIpKSAvIDIgKiBTRUNfUEVSQyAvIDEwMFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VjdGlvbiA9IHtcclxuICB3aWR0aDogKFcgLSAoTEVGVCAqIDIpIC0gTUlERExFKSAvIDIsXHJcbiAgaGVpZ2h0OiAoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJvYXJkID0ge1xyXG4gIHdpZHRoOiAxMTQ3LFxyXG4gIGhlaWdodDogNzY4XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWRlTGluZSA9IHtcclxuICB3aWR0aDogNjUsXHJcbiAgaGVpZ2h0OiAyMTAsXHJcbiAgdG9wOiAxMzMsXHJcbiAgc2lkZTogKExFRlQgLSA2NSkgLyAyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXduX3NpZGUgPSB7XHJcbiAgd2lkdGg6IDY1LFxyXG4gIGhlaWdodDogMTRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJyb2tlbl9saW5lID0ge1xyXG4gIHdpZHRoOiBQQVdOLFxyXG4gIGhlaWdodDogUEFXTiArIENPVU5UX0hFSUdIVCxcclxuICB4OiBMRUZUICsgc2VjdGlvbi53aWR0aCArICgoTUlERExFIC0gUEFXTikgLyAyKSxcclxuICB5X29wcDogKEggLyAyKSAtICgoUEFXTiArIENPVU5UX0hFSUdIVCkgKiAyKSxcclxuICB5X3VzZXI6IChIIC8gMikgKyAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMSlcclxufSIsImV4cG9ydCBjb25zdCBCT0FSRF9DT05UQUlORVIgPSAnQk9BUkRfQ09OVEFJTkVSJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9MSU5FID0gJ0dBTUVfTElORSdcclxuZXhwb3J0IGNvbnN0IEZJTklTSF9MSU5FID0gJ0ZJTklTSF9MSU5FJ1xyXG5leHBvcnQgY29uc3QgQlJPS0VOX0xJTkUgPSAnQlJPS0VOX0xJTkUnXHJcbmV4cG9ydCBjb25zdCBHQU1FX1BBV04gPSAnR0FNRV9QQVdOJ1xyXG5leHBvcnQgY29uc3QgQlJPS0VOX0NPVU5URVIgPSAnQlJPS0VOX0NPVU5URVInXHJcbmV4cG9ydCBjb25zdCBMSU5FX0hJR0hMSUdIVCA9ICdMSU5FX0hJR0hMSUdIVCciLCJmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7Il0sInNvdXJjZVJvb3QiOiIifQ==