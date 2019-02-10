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
    _this.name = _types__WEBPACK_IMPORTED_MODULE_6__["BOARD_CONTAINER"];
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BoardContainer, [{
    key: "calculateBoardContainer",
    value: function calculateBoardContainer(app) {
      var ratio = 100 * window.innerHeight / _ratios__WEBPACK_IMPORTED_MODULE_7__["H"] / 100;
      this.width = _ratios__WEBPACK_IMPORTED_MODULE_7__["W"] / 100 * ratio;
      this.height = _ratios__WEBPACK_IMPORTED_MODULE_7__["H"] / 100 * ratio;
      this.position.set(window.innerWidth / 2, window.innerHeight / 2);
      this.scale.set(ratio, ratio);
      this.pivot.set(_ratios__WEBPACK_IMPORTED_MODULE_7__["W"] / 2, _ratios__WEBPACK_IMPORTED_MODULE_7__["H"] / 2);
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
    _this.countStyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 42,
      fill: "white",
      stroke: '#ff3300',
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
      var newCount = this.children.filter(function (child) {
        return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_6__["GAME_PAWN"];
      }).length;
      var countChild = this.children.find(function (child) {
        return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_6__["BROKEN_COUNTER"];
      });
      countChild.text = newCount;
      countChild.visible = newCount;

      if (newCount && this.number === 0) {
        this._lockGamePawns();
      }
    }
  }, {
    key: "orderPawns",
    value: function orderPawns() {
      var pawns = this.children.filter(function (child) {
        return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_6__["GAME_PAWN"];
      });
      pawns.forEach(function (pawn, i, arr) {
        TweenMax.to(pawn.position, .5, {
          x: 0,
          y: _ratios__WEBPACK_IMPORTED_MODULE_7__["COUNT_HEIGHT"]
        });
      });
      this.updateCount();
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

  function FinishLine(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FinishLine);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FinishLine).call(this));
    _this.xType = _types__WEBPACK_IMPORTED_MODULE_6__["FINISH_LINE"];
    _this.width = _ratios__WEBPACK_IMPORTED_MODULE_7__["sideLine"].width;
    _this.height = _ratios__WEBPACK_IMPORTED_MODULE_7__["sideLine"].height;
    _this.toSit = true;
    var hitRec = new PIXI.Graphics();
    hitRec.xType = _types__WEBPACK_IMPORTED_MODULE_6__["HIT_REC"];
    hitRec.drawRect(0, 0, _ratios__WEBPACK_IMPORTED_MODULE_7__["sideLine"].width, _ratios__WEBPACK_IMPORTED_MODULE_7__["sideLine"].height);
    hitRec.visible = false;

    _this.addChild(hitRec);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FinishLine, [{
    key: "orderPawns",
    value: function orderPawns() {
      this.children.filter(function (child) {
        return child && child.xType && child.xType !== _types__WEBPACK_IMPORTED_MODULE_6__["HIT_REC"];
      }).forEach(function (pawn, i, arr) {
        pawn.unSubscribe();
        pawn.position.set(0, _ratios__WEBPACK_IMPORTED_MODULE_7__["pawn_side"].height * i);
      });
    }
  }, {
    key: "testHit",
    value: function testHit(point) {
      var _this$children$find = this.children.find(function (child) {
        return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_6__["HIT_REC"];
      }),
          width = _this$children$find.width,
          height = _this$children$find.height;

      if (point.x >= 0 && point.x <= width && point.y >= 0 && point.y <= height) {
        return true;
      }

      return false;
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
    _this.blocked = false;
    var hitRec = new PIXI.Graphics();
    hitRec.xType = _types__WEBPACK_IMPORTED_MODULE_6__["HIT_REC"];
    hitRec.drawRect(0, 0, _ratios__WEBPACK_IMPORTED_MODULE_7__["line"].width, _ratios__WEBPACK_IMPORTED_MODULE_7__["line"].height);
    hitRec.visible = false;

    _this.addChild(hitRec);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GameLine, [{
    key: "orderPawns",
    value: function orderPawns() {
      var _this2 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var pawnArr = this.children.filter(function (child) {
        return child.name && child.xType === _types__WEBPACK_IMPORTED_MODULE_6__["GAME_PAWN"];
      });
      var fake = args.fake,
          _args$reverse = args.reverse,
          reverse = _args$reverse === void 0 ? this.parent.number > 1 : _args$reverse;
      var length = fake ? pawnArr.length + 1 : pawnArr.length;
      var row = _ratios__WEBPACK_IMPORTED_MODULE_7__["line"].height / length;

      if (row < _ratios__WEBPACK_IMPORTED_MODULE_7__["PAWN"]) {
        row = row - (_ratios__WEBPACK_IMPORTED_MODULE_7__["PAWN"] - row) / length;
      } else {
        row = _ratios__WEBPACK_IMPORTED_MODULE_7__["PAWN"];
      }

      pawnArr.forEach(function (pawn, i, arr) {
        pawn.unSubscribe();
        reverse ? TweenMax.to(pawn.position, .5, {
          x: 0,
          y: _ratios__WEBPACK_IMPORTED_MODULE_7__["line"].height - row * i - _ratios__WEBPACK_IMPORTED_MODULE_7__["PAWN"]
        }) : TweenMax.to(pawn.position, .5, {
          x: 0,
          y: row * i
        });

        if (i + 1 === arr.length && pawn.isUser && !_this2.blocked) {
          pawn.subscribe();
        }
      });
      this.toSit = true;

      if (pawnArr.length === 1 && !pawnArr[0].isUser) {
        this.toHit = true;
      }

      if (pawnArr.length > 1 && !pawnArr[0].isUser) {
        this.toSit = false;
        this.toHit = false;
      }
    }
  }, {
    key: "testHit",
    value: function testHit(point) {
      var _this$children$find = this.children.find(function (child) {
        return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_6__["HIT_REC"];
      }),
          width = _this$children$find.width,
          height = _this$children$find.height;

      if (point.x >= 0 && point.x <= width && point.y >= 0 && point.y <= height) {
        return true;
      }

      return false;
    }
  }, {
    key: "blockLine",
    value: function blockLine() {
      this.blocked = true;
      this.orderPawns();
    }
  }]);

  return GameLine;
}(PIXI.Container);

/* harmony default export */ __webpack_exports__["default"] = (Object(_withBase__WEBPACK_IMPORTED_MODULE_5__["default"])(GameLine));

/***/ }),

/***/ "./game/classes/GameSection.class.js":
/*!*******************************************!*\
  !*** ./game/classes/GameSection.class.js ***!
  \*******************************************/
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









var GameSection =
/*#__PURE__*/
function (_PIXI$Container) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(GameSection, _PIXI$Container);

  function GameSection(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GameSection);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(GameSection).call(this));
    _this.xType = _types__WEBPACK_IMPORTED_MODULE_6__["GAME_SECTION"];
    _this.width = _ratios__WEBPACK_IMPORTED_MODULE_7__["section"].width;
    _this.height = _ratios__WEBPACK_IMPORTED_MODULE_7__["section"].height;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GameSection, [{
    key: "orderLines",
    value: function orderLines() {
      var children = this.children;

      if (this.number > 1) {
        children = children.reverse();
      }

      children.forEach(function (line, lineIndex, arr) {
        line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_7__["line"].width * (arr.length - lineIndex - 1), 0);
      });
    }
  }]);

  return GameSection;
}(PIXI.Container);

/* harmony default export */ __webpack_exports__["default"] = (Object(_withBase__WEBPACK_IMPORTED_MODULE_5__["default"])(GameSection));

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
    _this.solidTexture = PIXI.loader.resources[pawnObj.solid].texture;
    _this.sideTexture = PIXI.loader.resources[pawnObj.side].texture;
    _this.selectedTexture = PIXI.loader.resources[pawnObj.selected].texture;
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

      var newPosition = newParent.toLocal(this.getGlobalPosition());
      this.position.x = newPosition.x;
      this.position.y = newPosition.y;
      this.setParent(newParent);
    }
  }, {
    key: "setSolid",
    value: function setSolid() {
      this.texture = this.solidTexture;
    }
  }, {
    key: "setSide",
    value: function setSide() {
      this.texture = this.sideTexture;
    }
  }, {
    key: "setSelected",
    value: function setSelected() {
      this.texture = this.selectedTexture;
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
  }]);

  return Pawn;
}(PIXI.Sprite);

/* harmony default export */ __webpack_exports__["default"] = (Object(_withBase__WEBPACK_IMPORTED_MODULE_5__["default"])(Pawn));

/***/ }),

/***/ "./game/classes/index.js":
/*!*******************************!*\
  !*** ./game/classes/index.js ***!
  \*******************************/
/*! exports provided: Pawn, GameSection, GameLine, FinishLine, BrokenLine, BoardContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pawn_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pawn.class */ "./game/classes/Pawn.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pawn", function() { return _Pawn_class__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _GameSection_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameSection.class */ "./game/classes/GameSection.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameSection", function() { return _GameSection_class__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _GameLine_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameLine.class */ "./game/classes/GameLine.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameLine", function() { return _GameLine_class__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FinishLine_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FinishLine.class */ "./game/classes/FinishLine.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinishLine", function() { return _FinishLine_class__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _BrokenLine_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BrokenLine.class */ "./game/classes/BrokenLine.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrokenLine", function() { return _BrokenLine_class__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _BoardContainer_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardContainer.class */ "./game/classes/BoardContainer.class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoardContainer", function() { return _BoardContainer_class__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./game/classes/withBase.js":
/*!**********************************!*\
  !*** ./game/classes/withBase.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./game/types.js");


/* harmony default export */ __webpack_exports__["default"] = (function (comp) {
  comp.prototype._getBoard = function () {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

    if (obj.xType === _types__WEBPACK_IMPORTED_MODULE_1__["BOARD_CONTAINER"]) {
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

  comp.prototype._getSections = function () {
    var boardContainer = this._getBoard();

    return boardContainer.children.filter(function (child) {
      return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_1__["GAME_SECTION"];
    });
  };

  comp.prototype._getLines = function () {
    return this._getSections().reduce(function (acc, cur, i, arr) {
      var lines = cur.children.filter(function (child) {
        return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_1__["GAME_LINE"];
      });
      acc.push.apply(acc, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(lines));
      return acc;
    }, []);
  };

  comp.prototype._getFinishLines = function () {
    var boardContainer = this._getBoard();

    return boardContainer.children.filter(function (child) {
      return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_1__["FINISH_LINE"];
    });
  };

  comp.prototype._getMyFinishLine = function () {
    var user = this._getUser();

    return this._getFinishLines().find(function (line) {
      return line.number === user.number;
    });
  };

  comp.prototype._getOpponentFinishLine = function () {
    var opp = this._getOpponent();

    return this._getFinishLines().find(function (line) {
      return line.number === opp.number;
    });
  };

  comp.prototype._getBrokenLines = function () {
    var boardContainer = this._getBoard();

    return boardContainer.children.filter(function (child) {
      return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_1__["BROKEN_LINE"];
    });
  };

  comp.prototype._getMyBrokenLine = function () {
    var user = this._getUser();

    return this._getBrokenLines().find(function (line) {
      return line.number === user.number;
    });
  };

  comp.prototype._getOpponentBrokenLine = function () {
    var opp = this._getOpponent();

    return this._getBrokenLines().find(function (line) {
      return line.number === opp.number;
    });
  };

  comp.prototype._lockGamePawns = function () {
    var lines = this._getLines();

    lines.filter(function (child) {
      return child && child.xType && child.xType === _types__WEBPACK_IMPORTED_MODULE_1__["GAME_LINE"];
    }).forEach(function (line) {
      line.blockLine();
    });
  };

  return comp;
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
      console.log(line);
      var center = line.toLocal(_this2.getGlobalPosition());
      center.x += _this2.width / 2;
      center.y += _this2.height / 2;
      return line.testHit(center) && (line.toHit || line.toSit);
    }) || this.homeParent;
    this.setSolid();
    this.setParentCustom(newParent);
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
/*! exports provided: createSections, createGameLines, createPawns, createFinishLines, createBrokenLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSections", function() { return createSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGameLines", function() { return createGameLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPawns", function() { return createPawns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFinishLines", function() { return createFinishLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrokenLine", function() { return createBrokenLine; });
/* harmony import */ var _ratios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratios */ "./game/ratios.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./game/types.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./game/classes/index.js");



function createSections() {
  var sections = new Array(4).fill(0);
  return sections.map(function (sec, i) {
    sec = new _classes__WEBPACK_IMPORTED_MODULE_2__["GameSection"]();
    sec.name = _types__WEBPACK_IMPORTED_MODULE_1__["GAME_SECTION"] + '_' + i;
    sec.number = i;
    if (i === 0) sec.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["LEFT"] + _ratios__WEBPACK_IMPORTED_MODULE_0__["section"].width + _ratios__WEBPACK_IMPORTED_MODULE_0__["MIDDLE"], _ratios__WEBPACK_IMPORTED_MODULE_0__["TOP"]);
    if (i === 1) sec.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["LEFT"], _ratios__WEBPACK_IMPORTED_MODULE_0__["TOP"]);
    if (i === 2) sec.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["LEFT"], _ratios__WEBPACK_IMPORTED_MODULE_0__["H"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["TOP"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["section"].height);
    if (i === 3) sec.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["LEFT"] + _ratios__WEBPACK_IMPORTED_MODULE_0__["section"].width + _ratios__WEBPACK_IMPORTED_MODULE_0__["MIDDLE"], _ratios__WEBPACK_IMPORTED_MODULE_0__["H"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["TOP"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["section"].height);
    return sec;
  });
}
function createGameLines() {
  var lines = new Array(24).fill(0);
  return lines.map(function (line, i, arr) {
    line = new _classes__WEBPACK_IMPORTED_MODULE_2__["GameLine"]();
    line.name = _types__WEBPACK_IMPORTED_MODULE_1__["GAME_LINE"] + '_' + i;
    line.number = i;
    return line;
  });
}
function createPawns(pawnObj, color) {
  var isUser = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 15;
  return new Array(count).fill(0).map(function (elem, i) {
    var sprite = new _classes__WEBPACK_IMPORTED_MODULE_2__["Pawn"](pawnObj, color, isUser);
    sprite.name = "".concat(color, "_").concat(_types__WEBPACK_IMPORTED_MODULE_1__["GAME_PAWN"], "_").concat(i);
    sprite.number = i;
    return sprite;
  });
}
function createFinishLines(un, on) {
  var lines = new Array(2).fill(0);
  return lines.map(function (line, i, arr) {
    var num = i === 1 ? on : un;
    line = new _classes__WEBPACK_IMPORTED_MODULE_2__["FinishLine"]();
    line.name = _types__WEBPACK_IMPORTED_MODULE_1__["FINISH_LINE"] + '_' + num;
    line.number = num;
    if (i === 0) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["W"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].side - _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].width, _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].top);

    if (i === 1) {
      line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["W"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].side - _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].width, _ratios__WEBPACK_IMPORTED_MODULE_0__["H"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["TOP"] - _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].height);
      line.rotation = Math.PI;
      line.pivot.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].width, _ratios__WEBPACK_IMPORTED_MODULE_0__["sideLine"].height);
    }

    return line;
  });
}
function createBrokenLine(un, on) {
  var lines = new Array(2).fill(0);
  return lines.map(function (line, i, arr) {
    var num = i === 0 ? on : un;
    line = new _classes__WEBPACK_IMPORTED_MODULE_2__["BrokenLine"]();
    line.name = _types__WEBPACK_IMPORTED_MODULE_1__["BROKEN_LINE"] + '_' + num;
    line.number = num;
    if (i === 0) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["broken_line"].x, _ratios__WEBPACK_IMPORTED_MODULE_0__["broken_line"].y0);
    if (i === 1) line.position.set(_ratios__WEBPACK_IMPORTED_MODULE_0__["broken_line"].x, _ratios__WEBPACK_IMPORTED_MODULE_0__["broken_line"].y1);
    return line;
  });
}

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



var boardContainer,
    board,
    sectionArr = [],
    lineArr = [],
    userPawnArr = [],
    opponentPawnArr = [],
    sideLineArr = [],
    brokenLineArr = [];
var user = {
  color: 'white',
  board: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 3, 0, 5, 0, 0, 0, 0, 0],
  number: 0
};
var opponent = {
  color: 'black',
  board: [0, 0, 0, 0, 0, 5, 0, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  number: 1
};
var boardPng = 'board.png';
var userPawnPng = "".concat(user.color, "_pawn.png");
var userPawnSidePng = "".concat(user.color, "_pawn2.png");
var userPawnSelectedPng = "".concat(user.color, "_pawn_selected.png");
var opponentPawnPng = "".concat(opponent.color, "_pawn.png");
var opponentPawnSidePng = "".concat(opponent.color, "_pawn2.png");
var opponentPawnSelectedPng = "".concat(opponent.color, "_pawn_selected.png");
var lineSelectedPng = 'line_selected.png';
var userPawns = {
  solid: userPawnPng,
  side: userPawnSidePng,
  selected: userPawnSelectedPng
};
var opponentPawns = {
  solid: opponentPawnPng,
  side: opponentPawnSidePng,
  selected: opponentPawnSelectedPng
};
PIXI.utils.skipHello();
var Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;
var config = {
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  transparent: false,
  resolution: devicePixelRatio
};
var app = new Application(config);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block"; //app.renderer.autoResize = true
// SETUP

var setup = function setup() {
  var _boardContainer, _boardContainer2, _boardContainer3;

  boardContainer = new _classes__WEBPACK_IMPORTED_MODULE_2__["BoardContainer"](user, opponent);
  board = new Sprite(resources[boardPng].texture);
  boardContainer.addChild(board);
  sectionArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createSections"]();

  (_boardContainer = boardContainer).addChild.apply(_boardContainer, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sectionArr));

  lineArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createGameLines"]();
  sectionArr.forEach(function (sec, i, arr) {
    var chunk = lineArr.length / arr.length;
    sec.addChild.apply(sec, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(lineArr.slice(chunk * i, chunk * (i + 1))));
    sec.orderLines();
  });
  sideLineArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createFinishLines"](user.number, opponent.number);

  (_boardContainer2 = boardContainer).addChild.apply(_boardContainer2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sideLineArr));

  brokenLineArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createBrokenLine"](user.number, opponent.number);

  (_boardContainer3 = boardContainer).addChild.apply(_boardContainer3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(brokenLineArr));

  userPawnArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createPawns"](userPawns, user.color, true, 15);
  opponentPawnArr = _helpers__WEBPACK_IMPORTED_MODULE_1__["createPawns"](opponentPawns, opponent.color, false, 15);
  lineArr.reduce(function (acc, cur, i, arr) {
    if (user.board[i] > 0) {
      cur.addChild.apply(cur, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(userPawnArr.slice(acc.user, acc.user + user.board[i])));
      acc.user += user.board[i];
    }

    if (opponent.board[i] > 0) {
      cur.addChild.apply(cur, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(opponentPawnArr.slice(acc.opponent, acc.opponent + opponent.board[i])));
      acc.opponent += opponent.board[i];
    }

    cur.orderPawns();
    return acc;
  }, {
    user: 0,
    opponent: 0
  });
  boardContainer.calculateBoardContainer(app);
  app.stage.addChild(boardContainer);

  var resize = function resize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    boardContainer.calculateBoardContainer(app);
  };

  window.addEventListener('resize', resize);
  document.getElementById('game').appendChild(app.view);
  resize();
};

var pixiLoader = function pixiLoader() {
  loader.add([boardPng, userPawnPng, opponentPawnPng, userPawnSidePng, opponentPawnSidePng, userPawnSelectedPng, opponentPawnSelectedPng, lineSelectedPng]).load(setup);
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
  y0: H / 2 - (PAWN + COUNT_HEIGHT) * 2,
  y1: H / 2 + (PAWN + COUNT_HEIGHT) * 1
};

/***/ }),

/***/ "./game/types.js":
/*!***********************!*\
  !*** ./game/types.js ***!
  \***********************/
/*! exports provided: BOARD_CONTAINER, GAME_SECTION, GAME_LINE, FINISH_LINE, BROKEN_LINE, GAME_PAWN, HIT_REC, BROKEN_COUNTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_CONTAINER", function() { return BOARD_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_SECTION", function() { return GAME_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_LINE", function() { return GAME_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FINISH_LINE", function() { return FINISH_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROKEN_LINE", function() { return BROKEN_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_PAWN", function() { return GAME_PAWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIT_REC", function() { return HIT_REC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROKEN_COUNTER", function() { return BROKEN_COUNTER; });
var BOARD_CONTAINER = 'BOARD_CONTAINER';
var GAME_SECTION = 'GAME_SECTION';
var GAME_LINE = 'GAME_LINE';
var FINISH_LINE = 'FINISH_LINE';
var BROKEN_LINE = 'BROKEN_LINE';
var GAME_PAWN = 'GAME_PAWN';
var HIT_REC = 'HIT_REC';
var BROKEN_COUNTER = 'BROKEN_COUNTER';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL0JvYXJkQ29udGFpbmVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9Ccm9rZW5MaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9GaW5pc2hMaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9HYW1lTGluZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NsYXNzZXMvR2FtZVNlY3Rpb24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL1Bhd24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy93aXRoQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3JhdGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkJvYXJkQ29udGFpbmVyIiwidXNlciIsIm9wcG9uZW50Iiwid2lkdGgiLCJyYXRpb3MiLCJoZWlnaHQiLCJ4VHlwZSIsInR5cGVzIiwibmFtZSIsImFwcCIsInJhdGlvIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInNldCIsImlubmVyV2lkdGgiLCJzY2FsZSIsInBpdm90IiwiUElYSSIsIkNvbnRhaW5lciIsIndpdGhCYXNlIiwiQnJva2VuTGluZSIsInByb3BzIiwiY291bnRTdHlsZSIsIlRleHRTdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VUaGlja25lc3MiLCJkcm9wU2hhZG93IiwiZHJvcFNoYWRvd0NvbG9yIiwiZHJvcFNoYWRvd0JsdXIiLCJkcm9wU2hhZG93RGlzdGFuY2UiLCJkcm9wU2hhZG93QW5nbGUiLCJkcm9wU2hhZG93QWxwaGEiLCJjb3VudCIsIlRleHQiLCJ2aXNpYmxlIiwiYWRkQ2hpbGQiLCJuZXdDb3VudCIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY2hpbGQiLCJsZW5ndGgiLCJjb3VudENoaWxkIiwiZmluZCIsInRleHQiLCJudW1iZXIiLCJfbG9ja0dhbWVQYXducyIsInBhd25zIiwiZm9yRWFjaCIsInBhd24iLCJpIiwiYXJyIiwiVHdlZW5NYXgiLCJ0byIsIngiLCJ5IiwiQ09VTlRfSEVJR0hUIiwidXBkYXRlQ291bnQiLCJGaW5pc2hMaW5lIiwidG9TaXQiLCJoaXRSZWMiLCJHcmFwaGljcyIsImRyYXdSZWN0IiwidW5TdWJzY3JpYmUiLCJwb2ludCIsIkdhbWVMaW5lIiwiYmxvY2tlZCIsImFyZ3MiLCJwYXduQXJyIiwiZmFrZSIsInJldmVyc2UiLCJwYXJlbnQiLCJyb3ciLCJQQVdOIiwiaXNVc2VyIiwic3Vic2NyaWJlIiwidG9IaXQiLCJvcmRlclBhd25zIiwiR2FtZVNlY3Rpb24iLCJsaW5lIiwibGluZUluZGV4IiwiUGF3biIsInBhd25PYmoiLCJjb2xvciIsImxvYWRlciIsInJlc291cmNlcyIsInNvbGlkIiwidGV4dHVyZSIsInNvbGlkVGV4dHVyZSIsInNpZGVUZXh0dXJlIiwic2lkZSIsInNlbGVjdGVkVGV4dHVyZSIsInNlbGVjdGVkIiwiY3Vyc29yIiwib24iLCJmdW5jdGlvbnMiLCJuZXdQYXJlbnQiLCJoaXR0ZWRQYXduIiwiZ29Ub0Jyb2tlbkxpbmUiLCJzZXRTaWRlIiwibmV3UG9zaXRpb24iLCJ0b0xvY2FsIiwiZ2V0R2xvYmFsUG9zaXRpb24iLCJzZXRQYXJlbnQiLCJpbnRlcmFjdGl2ZSIsImJyb2tlbkxpbmVzIiwiX2dldEJyb2tlbkxpbmVzIiwiX2dldFVzZXIiLCJzZXRQYXJlbnRDdXN0b20iLCJTcHJpdGUiLCJjb21wIiwicHJvdG90eXBlIiwiX2dldEJvYXJkIiwib2JqIiwiX2dldE9wcG9uZW50IiwiX2dldFNlY3Rpb25zIiwiYm9hcmRDb250YWluZXIiLCJfZ2V0TGluZXMiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJsaW5lcyIsInB1c2giLCJfZ2V0RmluaXNoTGluZXMiLCJfZ2V0TXlGaW5pc2hMaW5lIiwiX2dldE9wcG9uZW50RmluaXNoTGluZSIsIm9wcCIsIl9nZXRNeUJyb2tlbkxpbmUiLCJfZ2V0T3Bwb25lbnRCcm9rZW5MaW5lIiwiYmxvY2tMaW5lIiwib25EcmFnU3RhcnQiLCJldmVudCIsImRyYWdnaW5nIiwic3RhcnRQb2ludCIsImRhdGEiLCJnbG9iYWwiLCJob21lUGFyZW50IiwicHJldmlvdXNQYXJlbnQiLCJkcmFnUG9pbnQiLCJzZXRTZWxlY3RlZCIsIm9uRHJhZ01vdmUiLCJlIiwiZ2xvYmFsUG9pbnQiLCJjZW50ZXIiLCJ0ZXN0SGl0Iiwib25EcmFnRW5kIiwiY29uc29sZSIsImxvZyIsInNldFNvbGlkIiwib25BZGRlZCIsImNvbnRhaW5lciIsIm9uUmVtb3ZlZCIsImNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyIiwicmVuZGVyZXIiLCJ2aWV3IiwiSCIsIlciLCJjcmVhdGVTZWN0aW9ucyIsInNlY3Rpb25zIiwiQXJyYXkiLCJtYXAiLCJzZWMiLCJjcmVhdGVHYW1lTGluZXMiLCJjcmVhdGVQYXducyIsImVsZW0iLCJzcHJpdGUiLCJjcmVhdGVGaW5pc2hMaW5lcyIsInVuIiwibnVtIiwidG9wIiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJjcmVhdGVCcm9rZW5MaW5lIiwieTAiLCJ5MSIsImJvYXJkIiwic2VjdGlvbkFyciIsImxpbmVBcnIiLCJ1c2VyUGF3bkFyciIsIm9wcG9uZW50UGF3bkFyciIsInNpZGVMaW5lQXJyIiwiYnJva2VuTGluZUFyciIsImJvYXJkUG5nIiwidXNlclBhd25QbmciLCJ1c2VyUGF3blNpZGVQbmciLCJ1c2VyUGF3blNlbGVjdGVkUG5nIiwib3Bwb25lbnRQYXduUG5nIiwib3Bwb25lbnRQYXduU2lkZVBuZyIsIm9wcG9uZW50UGF3blNlbGVjdGVkUG5nIiwibGluZVNlbGVjdGVkUG5nIiwidXNlclBhd25zIiwib3Bwb25lbnRQYXducyIsInV0aWxzIiwic2tpcEhlbGxvIiwiQXBwbGljYXRpb24iLCJjb25maWciLCJhbnRpYWxpYXMiLCJ0cmFuc3BhcmVudCIsInJlc29sdXRpb24iLCJkZXZpY2VQaXhlbFJhdGlvIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0dXAiLCJCb2FyZENvbnRhaW5lckNsYXNzIiwiaGVscGVycyIsImNodW5rIiwic2xpY2UiLCJvcmRlckxpbmVzIiwic3RhZ2UiLCJyZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwicGl4aUxvYWRlciIsImFkZCIsImxvYWQiLCJUT1AiLCJMRUZUIiwiTUlERExFIiwiU0VDX1BFUkMiLCJ0b3BIZWlnaHRSYXRpbyIsImxlZnRXaWR0aFJhdGlvIiwibWlkZGxlV2lkdGhSYXRpbyIsInBhd25IZWlnaHRSYXRpbyIsInNlY3Rpb25XaWR0aFJhdGlvIiwic2VjdGlvbkhlaWdodFJhdGlvIiwibGluZVdpZHRoUmF0aW8iLCJsaW5lSGVpZ2h0UmF0aW8iLCJzZWN0aW9uIiwic2lkZUxpbmUiLCJwYXduX3NpZGUiLCJicm9rZW5fbGluZSIsIkJPQVJEX0NPTlRBSU5FUiIsIkdBTUVfU0VDVElPTiIsIkdBTUVfTElORSIsIkZJTklTSF9MSU5FIiwiQlJPS0VOX0xJTkUiLCJHQU1FX1BBV04iLCJISVRfUkVDIiwiQlJPS0VOX0NPVU5URVIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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RXpDLDRCQUE0QixtQkFBTyxDQUFDLCtGQUF5Qjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0Qzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDVEEsd0JBQXdCLG1CQUFPLENBQUMsdUZBQXFCOztBQUVyRCxzQkFBc0IsbUJBQU8sQ0FBQyxtRkFBbUI7O0FBRWpELHdCQUF3QixtQkFBTyxDQUFDLHVGQUFxQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ1ZBLHdCQUF3QiwyRUFBMkUsb0NBQW9DLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxvQ0FBb0MsOEhBQThILEdBQUcsRUFBRSxzQkFBc0I7O0FBRW5XO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QiIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZ2FtZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEJvYXJkQ29udGFpbmVyIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXIsIG9wcG9uZW50KSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyXHJcbiAgICB0aGlzLm9wcG9uZW50ID0gb3Bwb25lbnRcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MuV1xyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MuSFxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkJPQVJEX0NPTlRBSU5FUlxyXG4gICAgdGhpcy5uYW1lID0gdHlwZXMuQk9BUkRfQ09OVEFJTkVSXHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVCb2FyZENvbnRhaW5lciAoYXBwKSB7XHJcbiAgICBsZXQgcmF0aW8gPSAoMTAwICogd2luZG93LmlubmVySGVpZ2h0KSAvIHJhdGlvcy5IIC8gMTAwXHJcblxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5XIC8gMTAwICogcmF0aW9cclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLkggLyAxMDAgKiByYXRpb1xyXG4gIFxyXG4gICAgdGhpcy5wb3NpdGlvbi5zZXQod2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKVxyXG4gICAgdGhpcy5zY2FsZS5zZXQocmF0aW8sIHJhdGlvKVxyXG4gICAgdGhpcy5waXZvdC5zZXQocmF0aW9zLlcgLyAyLCByYXRpb3MuSCAvIDIpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShCb2FyZENvbnRhaW5lcilcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgQnJva2VuTGluZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkJST0tFTl9MSU5FXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLmJyb2tlbl9saW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5icm9rZW5fbGluZS5oZWlnaHRcclxuICAgIHRoaXMuY291bnRTdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgZm9udFNpemU6IDQyLFxyXG4gICAgICBmaWxsOiBcIndoaXRlXCIsXHJcbiAgICAgIHN0cm9rZTogJyNmZjMzMDAnLFxyXG4gICAgICBzdHJva2VUaGlja25lc3M6IDEsXHJcbiAgICAgIGRyb3BTaGFkb3c6IHRydWUsXHJcbiAgICAgIGRyb3BTaGFkb3dDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgIGRyb3BTaGFkb3dCbHVyOiA0LFxyXG4gICAgICBkcm9wU2hhZG93RGlzdGFuY2U6IC0yLFxyXG4gICAgICBkcm9wU2hhZG93QW5nbGU6IDMwLFxyXG4gICAgICBkcm9wU2hhZG93QWxwaGE6IC42LFxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgY291bnQgPSBuZXcgUElYSS5UZXh0KDAsIHRoaXMuY291bnRTdHlsZSlcclxuICAgIGNvdW50LnhUeXBlID0gdHlwZXMuQlJPS0VOX0NPVU5URVJcclxuICAgIGNvdW50LmhlaWdodCA9IHJhdGlvcy5DT1VOVF9IRUlHSFRcclxuICAgIGNvdW50LnBpdm90LnNldChjb3VudC53aWR0aCAvIDIsIGNvdW50LmhlaWdodCAvIDIpXHJcbiAgICBjb3VudC5wb3NpdGlvbi5zZXQocmF0aW9zLmJyb2tlbl9saW5lLndpZHRoIC8gMiwgMClcclxuICAgIGNvdW50LnZpc2libGUgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuYWRkQ2hpbGQoY291bnQpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb3VudCAoKSB7XHJcbiAgICBjb25zdCBuZXdDb3VudCA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pLmxlbmd0aFxyXG4gICAgY29uc3QgY291bnRDaGlsZCA9IHRoaXMuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuQlJPS0VOX0NPVU5URVIpXHJcbiAgICBjb3VudENoaWxkLnRleHQgPSBuZXdDb3VudFxyXG4gICAgY291bnRDaGlsZC52aXNpYmxlID0gbmV3Q291bnRcclxuXHJcbiAgICBpZiAobmV3Q291bnQgJiYgdGhpcy5udW1iZXIgPT09IDApIHtcclxuICAgICAgdGhpcy5fbG9ja0dhbWVQYXducygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcmRlclBhd25zICgpIHtcclxuICAgIGNvbnN0IHBhd25zID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfUEFXTilcclxuICAgIHBhd25zLmZvckVhY2goKHBhd24sIGksIGFycikgPT4ge1xyXG4gICAgICBUd2Vlbk1heC50byhwYXduLnBvc2l0aW9uLCAuNSwgeyB4OiAwLCB5OiByYXRpb3MuQ09VTlRfSEVJR0hUIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMudXBkYXRlQ291bnQoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoQnJva2VuTGluZSlcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgRmluaXNoTGluZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkZJTklTSF9MSU5FXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLnNpZGVMaW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5zaWRlTGluZS5oZWlnaHRcclxuICAgIHRoaXMudG9TaXQgPSB0cnVlXHJcblxyXG4gICAgbGV0IGhpdFJlYyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcclxuICAgIGhpdFJlYy54VHlwZSA9IHR5cGVzLkhJVF9SRUNcclxuICAgIGhpdFJlYy5kcmF3UmVjdCgwLCAwLCByYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5zaWRlTGluZS5oZWlnaHQpXHJcbiAgICBoaXRSZWMudmlzaWJsZSA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5hZGRDaGlsZChoaXRSZWMpXHJcbiAgfVxyXG5cclxuICBvcmRlclBhd25zICgpIHtcclxuICAgIHRoaXMuY2hpbGRyZW5cclxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSAhPT0gdHlwZXMuSElUX1JFQylcclxuICAgICAgLmZvckVhY2goKHBhd24sIGksIGFycikgPT4ge1xyXG4gICAgICAgIHBhd24udW5TdWJzY3JpYmUoKVxyXG4gICAgICAgIHBhd24ucG9zaXRpb24uc2V0KDAsIHJhdGlvcy5wYXduX3NpZGUuaGVpZ2h0ICogaSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHRlc3RIaXQgKHBvaW50KSB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuSElUX1JFQylcclxuICAgIFxyXG4gICAgaWYgKFxyXG4gICAgICBwb2ludC54ID49IDBcclxuICAgICAgJiYgcG9pbnQueCA8PSB3aWR0aFxyXG4gICAgICAmJiBwb2ludC55ID49IDBcclxuICAgICAgJiYgcG9pbnQueSA8PSBoZWlnaHRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoRmluaXNoTGluZSlcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgR2FtZUxpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5HQU1FX0xJTkVcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MubGluZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MubGluZS5oZWlnaHRcclxuICAgIHRoaXMuYmxvY2tlZCA9IGZhbHNlXHJcblxyXG4gICAgbGV0IGhpdFJlYyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcclxuICAgIGhpdFJlYy54VHlwZSA9IHR5cGVzLkhJVF9SRUNcclxuICAgIGhpdFJlYy5kcmF3UmVjdCgwLCAwLCByYXRpb3MubGluZS53aWR0aCwgcmF0aW9zLmxpbmUuaGVpZ2h0KVxyXG4gICAgaGl0UmVjLnZpc2libGUgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuYWRkQ2hpbGQoaGl0UmVjKVxyXG4gIH1cclxuXHJcbiAgb3JkZXJQYXducyAoYXJncyA9IHt9KSB7XHJcbiAgICBjb25zdCBwYXduQXJyID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubmFtZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKVxyXG4gICAgY29uc3QgeyBmYWtlLCByZXZlcnNlID0gdGhpcy5wYXJlbnQubnVtYmVyID4gMSB9ID0gYXJnc1xyXG4gICAgY29uc3QgbGVuZ3RoID0gZmFrZSA/IHBhd25BcnIubGVuZ3RoICsgMSA6IHBhd25BcnIubGVuZ3RoXHJcblxyXG4gICAgbGV0IHJvdyA9IHJhdGlvcy5saW5lLmhlaWdodCAvIGxlbmd0aFxyXG5cclxuICAgIGlmIChyb3cgPCByYXRpb3MuUEFXTikge1xyXG4gICAgICByb3cgPSByb3cgLSAoKHJhdGlvcy5QQVdOIC0gcm93KSAvIGxlbmd0aClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdyA9IHJhdGlvcy5QQVdOXHJcbiAgICB9XHJcblxyXG4gICAgcGF3bkFyci5mb3JFYWNoKChwYXduLCBpLCBhcnIpID0+IHtcclxuICAgICAgcGF3bi51blN1YnNjcmliZSgpXHJcbiAgICAgIHJldmVyc2VcclxuICAgICAgICAgID8gVHdlZW5NYXgudG8ocGF3bi5wb3NpdGlvbiwgLjUsIHsgeDogMCwgeTogcmF0aW9zLmxpbmUuaGVpZ2h0IC0gKHJvdyAqIGkpIC0gcmF0aW9zLlBBV04gfSlcclxuICAgICAgICAgIDogVHdlZW5NYXgudG8ocGF3bi5wb3NpdGlvbiwgLjUsIHsgeDogMCwgeTogcm93ICogaSB9KVxyXG5cclxuICAgICAgaWYgKGkgKyAxID09PSBhcnIubGVuZ3RoICYmIHBhd24uaXNVc2VyICYmICF0aGlzLmJsb2NrZWQpIHtcclxuICAgICAgICBwYXduLnN1YnNjcmliZSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy50b1NpdCA9IHRydWVcclxuXHJcbiAgICBpZiAocGF3bkFyci5sZW5ndGggPT09IDEgJiYgIXBhd25BcnJbMF0uaXNVc2VyKSB7XHJcbiAgICAgIHRoaXMudG9IaXQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhd25BcnIubGVuZ3RoID4gMSAmJiAhcGF3bkFyclswXS5pc1VzZXIpIHtcclxuICAgICAgdGhpcy50b1NpdCA9IGZhbHNlXHJcbiAgICAgIHRoaXMudG9IaXQgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGVzdEhpdCAocG9pbnQpIHtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5ISVRfUkVDKVxyXG5cclxuICAgIGlmIChcclxuICAgICAgcG9pbnQueCA+PSAwXHJcbiAgICAgICYmIHBvaW50LnggPD0gd2lkdGhcclxuICAgICAgJiYgcG9pbnQueSA+PSAwXHJcbiAgICAgICYmIHBvaW50LnkgPD0gaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGJsb2NrTGluZSAoKSB7XHJcbiAgICB0aGlzLmJsb2NrZWQgPSB0cnVlXHJcbiAgICB0aGlzLm9yZGVyUGF3bnMoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoR2FtZUxpbmUpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEdhbWVTZWN0aW9uIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuR0FNRV9TRUNUSU9OXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLnNlY3Rpb24ud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLnNlY3Rpb24uaGVpZ2h0XHJcbiAgfVxyXG5cclxuICBvcmRlckxpbmVzICgpIHtcclxuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5cclxuXHJcbiAgICBpZiAodGhpcy5udW1iZXIgPiAxKSB7XHJcbiAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ucmV2ZXJzZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgobGluZSwgbGluZUluZGV4LCBhcnIpID0+IHtcclxuICAgICAgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLmxpbmUud2lkdGggKiAoYXJyLmxlbmd0aCAtIGxpbmVJbmRleCAtIDEpLCAwKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEdhbWVTZWN0aW9uKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgZnVuY3Rpb25zIGZyb20gJy4uL2Z1bmN0aW9ucydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5jbGFzcyBQYXduIGV4dGVuZHMgUElYSS5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhd25PYmosIGNvbG9yLCBpc1VzZXIpIHtcclxuICAgIHN1cGVyKFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNvbGlkXS50ZXh0dXJlKVxyXG5cclxuICAgIHRoaXMuc29saWRUZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW3Bhd25PYmouc29saWRdLnRleHR1cmVcclxuICAgIHRoaXMuc2lkZVRleHR1cmUgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zaWRlXS50ZXh0dXJlXHJcbiAgICB0aGlzLnNlbGVjdGVkVGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNlbGVjdGVkXS50ZXh0dXJlXHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcclxuICAgIHRoaXMuaXNVc2VyID0gaXNVc2VyXHJcbiAgICB0aGlzLmN1cnNvciA9ICdwb2ludGVyJ1xyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkdBTUVfUEFXTlxyXG4gICAgdGhpcy5vbignYWRkZWQnLCBmdW5jdGlvbnMub25BZGRlZClcclxuICAgIHRoaXMub24oJ3JlbW92ZWQnLCBmdW5jdGlvbnMub25SZW1vdmVkKVxyXG4gIH1cclxuXHJcbiAgc2V0UGFyZW50Q3VzdG9tIChuZXdQYXJlbnQpIHtcclxuICAgIGlmIChuZXdQYXJlbnQudG9IaXQpIHtcclxuICAgICAgbmV3UGFyZW50LnRvSGl0ID0gZmFsc2VcclxuICAgICAgbmV3UGFyZW50LnRvU2l0ID0gdHJ1ZVxyXG4gICAgICBcclxuICAgICAgY29uc3QgaGl0dGVkUGF3biA9IG5ld1BhcmVudC5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pXHJcbiAgICAgIGhpdHRlZFBhd24uZ29Ub0Jyb2tlbkxpbmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdQYXJlbnQueFR5cGUgPT09IHR5cGVzLkZJTklTSF9MSU5FKSB7XHJcbiAgICAgIHRoaXMuc2V0U2lkZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBuZXdQYXJlbnQudG9Mb2NhbCh0aGlzLmdldEdsb2JhbFBvc2l0aW9uKCkpXHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSBuZXdQb3NpdGlvbi54XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSBuZXdQb3NpdGlvbi55XHJcbiAgICB0aGlzLnNldFBhcmVudChuZXdQYXJlbnQpXHJcbiAgfVxyXG5cclxuICBzZXRTb2xpZCAoKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0aGlzLnNvbGlkVGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc2V0U2lkZSAoKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0aGlzLnNpZGVUZXh0dXJlXHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZCAoKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0aGlzLnNlbGVjdGVkVGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlICgpIHtcclxuICAgIGZ1bmN0aW9ucy5zdWJzY3JpYmUodGhpcylcclxuICB9XHJcblxyXG4gIHVuU3Vic2NyaWJlICgpIHtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgZ29Ub0Jyb2tlbkxpbmUgKCkge1xyXG4gICAgY29uc3QgYnJva2VuTGluZXMgPSB0aGlzLl9nZXRCcm9rZW5MaW5lcygpXHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5fZ2V0VXNlcigpXHJcbiAgICB1c2VyLmNvbG9yID09PSB0aGlzLmNvbG9yXHJcbiAgICAgID8gdGhpcy5zZXRQYXJlbnRDdXN0b20oYnJva2VuTGluZXNbMV0pXHJcbiAgICAgIDogdGhpcy5zZXRQYXJlbnRDdXN0b20oYnJva2VuTGluZXNbMF0pXHJcbiAgfVxyXG5cclxuICBnb1RvRmluaXNoTGluZSAoKSB7XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKFBhd24pXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUGF3biB9IGZyb20gJy4vUGF3bi5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1lU2VjdGlvbiB9IGZyb20gJy4vR2FtZVNlY3Rpb24uY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtZUxpbmUgfSBmcm9tICcuL0dhbWVMaW5lLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmlzaExpbmUgfSBmcm9tICcuL0ZpbmlzaExpbmUuY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnJva2VuTGluZSB9IGZyb20gJy4vQnJva2VuTGluZS5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb2FyZENvbnRhaW5lciB9IGZyb20gJy4vQm9hcmRDb250YWluZXIuY2xhc3MnIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29tcCkgPT4ge1xyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRCb2FyZCA9IGZ1bmN0aW9uIChvYmogPSB0aGlzKSB7XHJcbiAgICBpZiAob2JqLnhUeXBlID09PSB0eXBlcy5CT0FSRF9DT05UQUlORVIpIHtcclxuICAgICAgcmV0dXJuIG9ialxyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKCFvYmoucGFyZW50KSB7XHJcbiAgICAgIHJldHVybiBvYmouY2hpbGRyZW5bMF1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB0aGlzLl9nZXRCb2FyZChvYmoucGFyZW50KVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQoKS51c2VyXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0T3Bwb25lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQoKS5vcHBvbmVudFxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldFNlY3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1NFQ1RJT04pXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0TGluZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0U2VjdGlvbnMoKS5yZWR1Y2UoKGFjYywgY3VyLCBpLCBhcnIpID0+IHtcclxuICAgICAgY29uc3QgbGluZXMgPSBjdXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX0xJTkUpXHJcblxyXG4gICAgICBhY2MucHVzaCguLi5saW5lcylcclxuXHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIFtdKSAgIFxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldEZpbmlzaExpbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5GSU5JU0hfTElORSlcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRNeUZpbmlzaExpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5fZ2V0VXNlcigpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0RmluaXNoTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IHVzZXIubnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE9wcG9uZW50RmluaXNoTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG9wcCA9IHRoaXMuX2dldE9wcG9uZW50KClcclxuICAgIHJldHVybiB0aGlzLl9nZXRGaW5pc2hMaW5lcygpLmZpbmQobGluZSA9PiBsaW5lLm51bWJlciA9PT0gb3BwLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRCcm9rZW5MaW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuQlJPS0VOX0xJTkUpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0TXlCcm9rZW5MaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuX2dldFVzZXIoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJyb2tlbkxpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSB1c2VyLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRPcHBvbmVudEJyb2tlbkxpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBvcHAgPSB0aGlzLl9nZXRPcHBvbmVudCgpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0QnJva2VuTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IG9wcC5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fbG9ja0dhbWVQYXducyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5fZ2V0TGluZXMoKVxyXG4gICAgbGluZXNcclxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9MSU5FKVxyXG4gICAgICAuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICBsaW5lLmJsb2NrTGluZSgpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcFxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdTdGFydChldmVudCkge1xyXG4gIGlmICghdGhpcy5kcmFnZ2luZykge1xyXG4gICAgdGhpcy5zdGFydFBvaW50ID0geyAuLi5ldmVudC5kYXRhLmdsb2JhbCB9XHJcbiAgICB0aGlzLmhvbWVQYXJlbnQgPSB0aGlzLnBhcmVudFxyXG4gICAgdGhpcy5wcmV2aW91c1BhcmVudCA9IHRoaXMucGFyZW50XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5kcmFnUG9pbnQgPSB0aGlzLmdldEdsb2JhbFBvc2l0aW9uKClcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgdGhpcy5zZXRQYXJlbnRDdXN0b20oYm9hcmRDb250YWluZXIpXHJcbiAgICB0aGlzLnNldFNlbGVjdGVkKClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdNb3ZlKGUpIHtcclxuICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICBcclxuICAgIHRoaXMuZ2xvYmFsUG9pbnQgPSB7IHg6IHRoaXMuZHJhZ1BvaW50LnggLSAodGhpcy5zdGFydFBvaW50LnggLSBlLmRhdGEuZ2xvYmFsLngpLCB5OiB0aGlzLmRyYWdQb2ludC55IC0gKHRoaXMuc3RhcnRQb2ludC55IC0gZS5kYXRhLmdsb2JhbC55KSB9XHJcblxyXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSB0aGlzLnBhcmVudC50b0xvY2FsKHRoaXMuZ2xvYmFsUG9pbnQpXHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSBuZXdQb3NpdGlvbi54XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSBuZXdQb3NpdGlvbi55XHJcblxyXG4gICAgbmV3UG9zaXRpb24ueCArPSB0aGlzLndpZHRoIC8gMlxyXG4gICAgbmV3UG9zaXRpb24ueSArPSB0aGlzLmhlaWdodCAvIDJcclxuXHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSB0aGlzLl9nZXRMaW5lcygpLmZpbmQobGluZSA9PiB7XHJcbiAgICAgIGxldCBjZW50ZXIgPSBsaW5lLnRvTG9jYWwodGhpcy5nbG9iYWxQb2ludClcclxuICAgICAgY2VudGVyLnggKz0gdGhpcy53aWR0aCAvIDJcclxuICAgICAgY2VudGVyLnkgKz0gdGhpcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgICByZXR1cm4gbGluZS50ZXN0SGl0KGNlbnRlcilcclxuICAgIH0pIHx8IGJvYXJkQ29udGFpbmVyXHJcblxyXG4gICAgaWYgKG5ld1BhcmVudC5uYW1lICE9PSB0aGlzLnByZXZpb3VzUGFyZW50Lm5hbWUpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1BhcmVudC5vcmRlclBhd25zICYmIHRoaXMucHJldmlvdXNQYXJlbnQub3JkZXJQYXducygpXHJcblxyXG4gICAgICBpZiAobmV3UGFyZW50Lm9yZGVyUGF3bnMgJiYgKG5ld1BhcmVudC50b0hpdCB8fCBuZXdQYXJlbnQudG9TaXQpKSB7XHJcbiAgICAgICAgbmV3UGFyZW50Lm9yZGVyUGF3bnMoeyBmYWtlOiB0cnVlIH0pXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1BhcmVudCA9IG5ld1BhcmVudFxyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnRW5kKCkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2VcclxuICAgIFxyXG4gICAgbGV0IGxpbmVzID0gdGhpcy5fZ2V0TGluZXMoKVxyXG4gICAgbGluZXMucHVzaCh0aGlzLl9nZXRNeUZpbmlzaExpbmUoKSlcclxuXHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSBsaW5lcy5maW5kKGxpbmUgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhsaW5lKVxyXG4gICAgICBsZXQgY2VudGVyID0gbGluZS50b0xvY2FsKHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKSlcclxuICAgICAgY2VudGVyLnggKz0gdGhpcy53aWR0aCAvIDJcclxuICAgICAgY2VudGVyLnkgKz0gdGhpcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgICByZXR1cm4gbGluZS50ZXN0SGl0KGNlbnRlcikgJiYgKGxpbmUudG9IaXQgfHwgbGluZS50b1NpdClcclxuICAgIH0pIHx8IHRoaXMuaG9tZVBhcmVudFxyXG5cclxuICAgIHRoaXMuc2V0U29saWQoKVxyXG4gICAgdGhpcy5zZXRQYXJlbnRDdXN0b20obmV3UGFyZW50KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uQWRkZWQgKGNvbnRhaW5lcikge1xyXG4gIGNvbnRhaW5lci5vcmRlclBhd25zICYmIGNvbnRhaW5lci5vcmRlclBhd25zKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVtb3ZlZCAoY29udGFpbmVyKSB7XHJcbiAgY29udGFpbmVyLm9yZGVyUGF3bnMgJiYgY29udGFpbmVyLm9yZGVyUGF3bnMoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlIChvYmopIHtcclxuICBvYmouaW50ZXJhY3RpdmUgPSB0cnVlXHJcbiAgb2JqLm9uKCdtb3VzZWRvd24nLCBvbkRyYWdTdGFydClcclxuICAgIC5vbigndG91Y2hzdGFydCcsIG9uRHJhZ1N0YXJ0KVxyXG4gICAgLm9uKCdtb3VzZXVwJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCdtb3VzZXVwb3V0c2lkZScsIG9uRHJhZ0VuZClcclxuICAgIC5vbigndG91Y2hlbmQnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ3RvdWNoZW5kb3V0c2lkZScsIG9uRHJhZ0VuZClcclxuICAgIC5vbignbW91c2Vtb3ZlJywgb25EcmFnTW92ZSlcclxuICAgIC5vbigndG91Y2htb3ZlJywgb25EcmFnTW92ZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuU3Vic2NyaWJlIChvYmopIHtcclxuICBvYmouaW50ZXJhY3RpdmUgPSB0cnVlXHJcbiAgb2JqLm9uKCdtb3VzZWRvd24nLCAoKSA9PiB7fSlcclxuICAgIC5vbigndG91Y2hzdGFydCcsICgpID0+IHt9KVxyXG4gICAgLm9uKCdtb3VzZXVwJywgKCkgPT4ge30pXHJcbiAgICAub24oJ21vdXNldXBvdXRzaWRlJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNoZW5kJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNoZW5kb3V0c2lkZScsICgpID0+IHt9KVxyXG4gICAgLm9uKCdtb3VzZW1vdmUnLCAoKSA9PiB7fSlcclxuICAgIC5vbigndG91Y2htb3ZlJywgKCkgPT4ge30pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCb2FyZENvbnRhaW5lciAoYm9hcmRDb250YWluZXIsIGFwcCwgcmF0aW9zKSB7XHJcbiAgbGV0IHJhdGlvID0gKDEwMCAqIGFwcC5yZW5kZXJlci52aWV3LmhlaWdodCkgLyByYXRpb3MuSCAvIDEwMFxyXG5cclxuICBib2FyZENvbnRhaW5lci53aWR0aCA9IHJhdGlvcy5XIC8gMTAwICogcmF0aW9cclxuICBib2FyZENvbnRhaW5lci5oZWlnaHQgPSByYXRpb3MuSCAvIDEwMCAqIHJhdGlvXHJcblxyXG4gIGJvYXJkQ29udGFpbmVyLnBvc2l0aW9uLnNldChhcHAucmVuZGVyZXIudmlldy53aWR0aCAvIDIsIGFwcC5yZW5kZXJlci52aWV3LmhlaWdodCAvIDIpXHJcbiAgYm9hcmRDb250YWluZXIuc2NhbGUuc2V0KHJhdGlvLCByYXRpbylcclxuICBib2FyZENvbnRhaW5lci5waXZvdC5zZXQocmF0aW9zLlcgLyAyLCByYXRpb3MuSCAvIDIpXHJcbn0iLCJpbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi9yYXRpb3MnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcbmltcG9ydCB7XHJcbiAgUGF3bixcclxuICBHYW1lU2VjdGlvbixcclxuICBHYW1lTGluZSxcclxuICBGaW5pc2hMaW5lLFxyXG4gIEJyb2tlbkxpbmVcclxufSBmcm9tICcuL2NsYXNzZXMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VjdGlvbnMgKCkge1xyXG4gIGNvbnN0IHNlY3Rpb25zID0gbmV3IEFycmF5KDQpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb25zLm1hcCgoc2VjLCBpKSA9PiB7XHJcbiAgICBzZWMgPSBuZXcgR2FtZVNlY3Rpb24oKVxyXG4gICAgc2VjLm5hbWUgPSB0eXBlcy5HQU1FX1NFQ1RJT04gKyAnXycgKyBpXHJcbiAgICBzZWMubnVtYmVyID0gaVxyXG4gICAgXHJcbiAgICBpZiAoaSA9PT0gMCkgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCArIHJhdGlvcy5zZWN0aW9uLndpZHRoICsgcmF0aW9zLk1JRERMRSwgcmF0aW9zLlRPUClcclxuICAgIGlmIChpID09PSAxKSBzZWMucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZULCByYXRpb3MuVE9QKVxyXG4gICAgaWYgKGkgPT09IDIpIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQsIHJhdGlvcy5IIC0gcmF0aW9zLlRPUCAtIHJhdGlvcy5zZWN0aW9uLmhlaWdodClcclxuICAgIGlmIChpID09PSAzKSBzZWMucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZUICsgcmF0aW9zLnNlY3Rpb24ud2lkdGggKyByYXRpb3MuTUlERExFLCByYXRpb3MuSCAtIHJhdGlvcy5UT1AgLSByYXRpb3Muc2VjdGlvbi5oZWlnaHQpXHJcblxyXG4gICAgcmV0dXJuIHNlY1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lTGluZXMgKCkge1xyXG4gIGNvbnN0IGxpbmVzID0gbmV3IEFycmF5KDI0KS5maWxsKDApXHJcblxyXG4gIHJldHVybiBsaW5lcy5tYXAoKGxpbmUsIGksIGFycikgPT4ge1xyXG4gICAgbGluZSA9IG5ldyBHYW1lTGluZSgpXHJcbiAgICBsaW5lLm5hbWUgPSB0eXBlcy5HQU1FX0xJTkUgKyAnXycgKyBpXHJcbiAgICBsaW5lLm51bWJlciA9IGlcclxuXHJcbiAgICByZXR1cm4gbGluZVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXducyAocGF3bk9iaiwgY29sb3IsIGlzVXNlciA9IGZhbHNlLCBjb3VudCA9IDE1KSB7XHJcbiAgcmV0dXJuIG5ldyBBcnJheShjb3VudCkuZmlsbCgwKS5tYXAoKGVsZW0sIGkpID0+IHtcclxuICAgIGNvbnN0IHNwcml0ZSA9IG5ldyBQYXduKHBhd25PYmosIGNvbG9yLCBpc1VzZXIpXHJcbiAgICBzcHJpdGUubmFtZSA9IGAke2NvbG9yfV8ke3R5cGVzLkdBTUVfUEFXTn1fJHtpfWBcclxuICAgIHNwcml0ZS5udW1iZXIgPSBpXHJcblxyXG4gICAgcmV0dXJuIHNwcml0ZVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaW5pc2hMaW5lcyAodW4sIG9uKSB7XHJcbiAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXkoMikuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gbGluZXMubWFwKChsaW5lLCBpLCBhcnIpID0+IHtcclxuICAgIGxldCBudW0gPSBpID09PSAxID8gb24gOiB1blxyXG5cclxuICAgIGxpbmUgPSBuZXcgRmluaXNoTGluZSgpXHJcbiAgICBsaW5lLm5hbWUgPSB0eXBlcy5GSU5JU0hfTElORSArICdfJyArIG51bVxyXG4gICAgbGluZS5udW1iZXIgPSBudW1cclxuXHJcbiAgICBpZiAoaSA9PT0gMCkgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLlcgLSByYXRpb3Muc2lkZUxpbmUuc2lkZSAtIHJhdGlvcy5zaWRlTGluZS53aWR0aCwgcmF0aW9zLnNpZGVMaW5lLnRvcClcclxuICAgIGlmIChpID09PSAxKSB7XHJcbiAgICAgIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5XIC0gcmF0aW9zLnNpZGVMaW5lLnNpZGUgLSByYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5IIC0gcmF0aW9zLlRPUCAtIHJhdGlvcy5zaWRlTGluZS5oZWlnaHQpXHJcbiAgICAgIGxpbmUucm90YXRpb24gPSBNYXRoLlBJXHJcbiAgICAgIGxpbmUucGl2b3Quc2V0KHJhdGlvcy5zaWRlTGluZS53aWR0aCwgcmF0aW9zLnNpZGVMaW5lLmhlaWdodClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCcm9rZW5MaW5lICh1biwgb24pIHtcclxuICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgyKS5maWxsKDApXHJcblxyXG4gIHJldHVybiBsaW5lcy5tYXAoKGxpbmUsIGksIGFycikgPT4ge1xyXG4gICAgbGV0IG51bSA9IGkgPT09IDAgPyBvbiA6IHVuXHJcblxyXG4gICAgbGluZSA9IG5ldyBCcm9rZW5MaW5lKClcclxuICAgIGxpbmUubmFtZSA9IHR5cGVzLkJST0tFTl9MSU5FICsgJ18nICsgbnVtXHJcbiAgICBsaW5lLm51bWJlciA9IG51bVxyXG5cclxuICAgIGlmIChpID09PSAwKSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuYnJva2VuX2xpbmUueCwgcmF0aW9zLmJyb2tlbl9saW5lLnkwKVxyXG4gICAgaWYgKGkgPT09IDEpIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5icm9rZW5fbGluZS54LCByYXRpb3MuYnJva2VuX2xpbmUueTEpXHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJ1xyXG5pbXBvcnQgeyBCb2FyZENvbnRhaW5lciBhcyBCb2FyZENvbnRhaW5lckNsYXNzIH0gZnJvbSAnLi9jbGFzc2VzJ1xyXG5cclxubGV0IGJvYXJkQ29udGFpbmVyLCBib2FyZCwgc2VjdGlvbkFyciA9IFtdLCBsaW5lQXJyID0gW10sIHVzZXJQYXduQXJyID0gW10sIG9wcG9uZW50UGF3bkFyciA9IFtdLCBzaWRlTGluZUFyciA9IFtdLCBicm9rZW5MaW5lQXJyID0gW11cclxuXHJcbmNvbnN0IHVzZXIgPSB7XHJcbiAgY29sb3I6ICd3aGl0ZScsXHJcbiAgYm9hcmQ6IFtcclxuICAgIDIsIDAsIDAsIDAsIDAsIDAsXHJcbiAgICAwLCAwLCAwLCAwLCAwLCA1LFxyXG4gICAgMCwgMCwgMCwgMCwgMywgMCxcclxuICAgIDUsIDAsIDAsIDAsIDAsIDBcclxuICBdLFxyXG4gIG51bWJlcjogMFxyXG59XHJcblxyXG5jb25zdCBvcHBvbmVudCA9IHtcclxuICBjb2xvcjogJ2JsYWNrJyxcclxuICBib2FyZDogW1xyXG4gICAgMCwgMCwgMCwgMCwgMCwgNSxcclxuICAgIDAsIDEsIDAsIDAsIDAsIDAsXHJcbiAgICA1LCAwLCAwLCAwLCAwLCAwLFxyXG4gICAgMCwgMCwgMCwgMCwgMCwgMVxyXG4gIF0sXHJcbiAgbnVtYmVyOiAxXHJcbn1cclxuXHJcbmNvbnN0IGJvYXJkUG5nID0gJ2JvYXJkLnBuZydcclxuY29uc3QgdXNlclBhd25QbmcgPSBgJHt1c2VyLmNvbG9yfV9wYXduLnBuZ2BcclxuY29uc3QgdXNlclBhd25TaWRlUG5nID0gYCR7dXNlci5jb2xvcn1fcGF3bjIucG5nYFxyXG5jb25zdCB1c2VyUGF3blNlbGVjdGVkUG5nID0gYCR7dXNlci5jb2xvcn1fcGF3bl9zZWxlY3RlZC5wbmdgXHJcbmNvbnN0IG9wcG9uZW50UGF3blBuZyA9IGAke29wcG9uZW50LmNvbG9yfV9wYXduLnBuZ2BcclxuY29uc3Qgb3Bwb25lbnRQYXduU2lkZVBuZyA9IGAke29wcG9uZW50LmNvbG9yfV9wYXduMi5wbmdgXHJcbmNvbnN0IG9wcG9uZW50UGF3blNlbGVjdGVkUG5nID0gYCR7b3Bwb25lbnQuY29sb3J9X3Bhd25fc2VsZWN0ZWQucG5nYFxyXG5jb25zdCBsaW5lU2VsZWN0ZWRQbmcgPSAnbGluZV9zZWxlY3RlZC5wbmcnXHJcblxyXG5jb25zdCB1c2VyUGF3bnMgPSB7XHJcbiAgc29saWQ6IHVzZXJQYXduUG5nLFxyXG4gIHNpZGU6IHVzZXJQYXduU2lkZVBuZyxcclxuICBzZWxlY3RlZDogdXNlclBhd25TZWxlY3RlZFBuZ1xyXG59XHJcblxyXG5jb25zdCBvcHBvbmVudFBhd25zID0ge1xyXG4gIHNvbGlkOiBvcHBvbmVudFBhd25QbmcsXHJcbiAgc2lkZTogb3Bwb25lbnRQYXduU2lkZVBuZyxcclxuICBzZWxlY3RlZDogb3Bwb25lbnRQYXduU2VsZWN0ZWRQbmdcclxufVxyXG5cclxuUElYSS51dGlscy5za2lwSGVsbG8oKVxyXG5cclxubGV0IEFwcGxpY2F0aW9uID0gUElYSS5BcHBsaWNhdGlvbixcclxuICAgIGxvYWRlciA9IFBJWEkubG9hZGVyLFxyXG4gICAgcmVzb3VyY2VzID0gUElYSS5sb2FkZXIucmVzb3VyY2VzLFxyXG4gICAgU3ByaXRlID0gUElYSS5TcHJpdGVcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgYW50aWFsaWFzOiB0cnVlLFxyXG4gIHRyYW5zcGFyZW50OiBmYWxzZSxcclxuICByZXNvbHV0aW9uOiBkZXZpY2VQaXhlbFJhdGlvXHJcbn1cclxuXHJcbmxldCBhcHAgPSBuZXcgQXBwbGljYXRpb24oY29uZmlnKVxyXG5hcHAucmVuZGVyZXIudmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxyXG5hcHAucmVuZGVyZXIudmlldy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbi8vYXBwLnJlbmRlcmVyLmF1dG9SZXNpemUgPSB0cnVlXHJcblxyXG4vLyBTRVRVUFxyXG5jb25zdCBzZXR1cCA9ICgpID0+IHtcclxuICBib2FyZENvbnRhaW5lciA9IG5ldyBCb2FyZENvbnRhaW5lckNsYXNzKHVzZXIsIG9wcG9uZW50KVxyXG5cclxuICBib2FyZCA9IG5ldyBTcHJpdGUocmVzb3VyY2VzW2JvYXJkUG5nXS50ZXh0dXJlKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKGJvYXJkKVxyXG4gIFxyXG4gIHNlY3Rpb25BcnIgPSBoZWxwZXJzLmNyZWF0ZVNlY3Rpb25zKClcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZCguLi5zZWN0aW9uQXJyKVxyXG5cclxuICBsaW5lQXJyID0gaGVscGVycy5jcmVhdGVHYW1lTGluZXMoKVxyXG4gIHNlY3Rpb25BcnIuZm9yRWFjaCgoc2VjLCBpLCBhcnIpID0+IHtcclxuICAgIGNvbnN0IGNodW5rID0gbGluZUFyci5sZW5ndGggLyBhcnIubGVuZ3RoXHJcbiAgICBzZWMuYWRkQ2hpbGQoXHJcbiAgICAgIC4uLmxpbmVBcnIuc2xpY2UoY2h1bmsgKiBpLCBjaHVuayAqIChpICsgMSkpXHJcbiAgICApXHJcblxyXG4gICAgc2VjLm9yZGVyTGluZXMoKVxyXG4gIH0pXHJcblxyXG4gIHNpZGVMaW5lQXJyID0gaGVscGVycy5jcmVhdGVGaW5pc2hMaW5lcyh1c2VyLm51bWJlciwgb3Bwb25lbnQubnVtYmVyKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKC4uLnNpZGVMaW5lQXJyKVxyXG5cclxuICBicm9rZW5MaW5lQXJyID0gaGVscGVycy5jcmVhdGVCcm9rZW5MaW5lKHVzZXIubnVtYmVyLCBvcHBvbmVudC5udW1iZXIpXHJcbiAgYm9hcmRDb250YWluZXIuYWRkQ2hpbGQoLi4uYnJva2VuTGluZUFycilcclxuXHJcbiAgdXNlclBhd25BcnIgPSBoZWxwZXJzLmNyZWF0ZVBhd25zKHVzZXJQYXducywgdXNlci5jb2xvciwgdHJ1ZSwgMTUpXHJcbiAgb3Bwb25lbnRQYXduQXJyID0gaGVscGVycy5jcmVhdGVQYXducyhvcHBvbmVudFBhd25zLCBvcHBvbmVudC5jb2xvciwgZmFsc2UsIDE1KVxyXG5cclxuICBsaW5lQXJyLnJlZHVjZSgoYWNjLCBjdXIsIGksIGFycikgPT4ge1xyXG4gICAgaWYgKHVzZXIuYm9hcmRbaV0gPiAwKSB7XHJcbiAgICAgIGN1ci5hZGRDaGlsZCguLi51c2VyUGF3bkFyci5zbGljZShhY2MudXNlciwgYWNjLnVzZXIgKyB1c2VyLmJvYXJkW2ldKSlcclxuICAgICAgYWNjLnVzZXIgKz0gdXNlci5ib2FyZFtpXVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHBvbmVudC5ib2FyZFtpXSA+IDApIHtcclxuICAgICAgY3VyLmFkZENoaWxkKC4uLm9wcG9uZW50UGF3bkFyci5zbGljZShhY2Mub3Bwb25lbnQsIGFjYy5vcHBvbmVudCArIG9wcG9uZW50LmJvYXJkW2ldKSlcclxuICAgICAgYWNjLm9wcG9uZW50ICs9IG9wcG9uZW50LmJvYXJkW2ldXHJcbiAgICB9XHJcblxyXG4gICAgY3VyLm9yZGVyUGF3bnMoKVxyXG5cclxuICAgIHJldHVybiBhY2NcclxuICB9LCB7IHVzZXI6IDAsIG9wcG9uZW50OiAwIH0pXHJcblxyXG4gIGJvYXJkQ29udGFpbmVyLmNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyKGFwcClcclxuXHJcbiAgYXBwLnN0YWdlLmFkZENoaWxkKGJvYXJkQ29udGFpbmVyKVxyXG5cclxuICBjb25zdCByZXNpemUgPSAoKSA9PiB7XHJcbiAgICBhcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICBib2FyZENvbnRhaW5lci5jYWxjdWxhdGVCb2FyZENvbnRhaW5lcihhcHApXHJcbiAgfVxyXG4gIFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpXHJcbiAgXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS5hcHBlbmRDaGlsZChhcHAudmlldylcclxuICBcclxuICByZXNpemUoKVxyXG59XHJcblxyXG5jb25zdCBwaXhpTG9hZGVyID0gKCkgPT4ge1xyXG4gIGxvYWRlclxyXG4gICAgLmFkZChbXHJcbiAgICAgIGJvYXJkUG5nLCBcclxuICAgICAgdXNlclBhd25QbmcsIFxyXG4gICAgICBvcHBvbmVudFBhd25QbmcsXHJcbiAgICAgIHVzZXJQYXduU2lkZVBuZyxcclxuICAgICAgb3Bwb25lbnRQYXduU2lkZVBuZyxcclxuICAgICAgdXNlclBhd25TZWxlY3RlZFBuZyxcclxuICAgICAgb3Bwb25lbnRQYXduU2VsZWN0ZWRQbmcsXHJcbiAgICAgIGxpbmVTZWxlY3RlZFBuZ1xyXG4gICAgXSlcclxuICAgIC5sb2FkKHNldHVwKVxyXG59XHJcblxyXG5waXhpTG9hZGVyKClcclxuIiwiZXhwb3J0IGNvbnN0IEggPSA3NjhcclxuZXhwb3J0IGNvbnN0IFcgPSAxMTQ3XHJcbmV4cG9ydCBjb25zdCBUT1AgPSAyMFxyXG5leHBvcnQgY29uc3QgTEVGVCA9IDEwOFxyXG5leHBvcnQgY29uc3QgTUlERExFID0gODJcclxuZXhwb3J0IGNvbnN0IFBBV04gPSA3MVxyXG5leHBvcnQgY29uc3QgU0VDX1BFUkMgPSA4NVxyXG5leHBvcnQgY29uc3QgQ09VTlRfSEVJR0hUID0gNTBcclxuXHJcbmV4cG9ydCBjb25zdCB0b3BIZWlnaHRSYXRpbyA9IFRPUCAqIDEwMCAvIEhcclxuZXhwb3J0IGNvbnN0IGxlZnRXaWR0aFJhdGlvID0gTEVGVCAqIDEwMCAvIFdcclxuZXhwb3J0IGNvbnN0IG1pZGRsZVdpZHRoUmF0aW8gPSBNSURETEUgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBwYXduSGVpZ2h0UmF0aW8gPSBQQVdOICogMTAwIC8gSFxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb25XaWR0aFJhdGlvID0gKChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAyKSAqIDEwMCAvIFdcclxuZXhwb3J0IGNvbnN0IHNlY3Rpb25IZWlnaHRSYXRpbyA9ICgoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDApICogMTAwIC8gSFxyXG5leHBvcnQgY29uc3QgbGluZVdpZHRoUmF0aW8gPSBzZWN0aW9uV2lkdGhSYXRpbyAvIDZcclxuZXhwb3J0IGNvbnN0IGxpbmVIZWlnaHRSYXRpbyA9IHNlY3Rpb25IZWlnaHRSYXRpb1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmUgPSB7XHJcbiAgd2lkdGg6IChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAxMixcclxuICBoZWlnaHQ6IChIIC0gKFRPUCAqIDIpKSAvIDIgKiBTRUNfUEVSQyAvIDEwMFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VjdGlvbiA9IHtcclxuICB3aWR0aDogKFcgLSAoTEVGVCAqIDIpIC0gTUlERExFKSAvIDIsXHJcbiAgaGVpZ2h0OiAoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJvYXJkID0ge1xyXG4gIHdpZHRoOiAxMTQ3LFxyXG4gIGhlaWdodDogNzY4XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWRlTGluZSA9IHtcclxuICB3aWR0aDogNjUsXHJcbiAgaGVpZ2h0OiAyMTAsXHJcbiAgdG9wOiAxMzMsXHJcbiAgc2lkZTogKExFRlQgLSA2NSkgLyAyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXduX3NpZGUgPSB7XHJcbiAgd2lkdGg6IDY1LFxyXG4gIGhlaWdodDogMTRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJyb2tlbl9saW5lID0ge1xyXG4gIHdpZHRoOiBQQVdOLFxyXG4gIGhlaWdodDogUEFXTiArIENPVU5UX0hFSUdIVCxcclxuICB4OiBMRUZUICsgc2VjdGlvbi53aWR0aCArICgoTUlERExFIC0gUEFXTikgLyAyKSxcclxuICB5MDogKEggLyAyKSAtICgoUEFXTiArIENPVU5UX0hFSUdIVCkgKiAyKSxcclxuICB5MTogKEggLyAyKSArICgoUEFXTiArIENPVU5UX0hFSUdIVCkgKiAxKVxyXG59IiwiZXhwb3J0IGNvbnN0IEJPQVJEX0NPTlRBSU5FUiA9ICdCT0FSRF9DT05UQUlORVInXHJcbmV4cG9ydCBjb25zdCBHQU1FX1NFQ1RJT04gPSAnR0FNRV9TRUNUSU9OJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9MSU5FID0gJ0dBTUVfTElORSdcclxuZXhwb3J0IGNvbnN0IEZJTklTSF9MSU5FID0gJ0ZJTklTSF9MSU5FJ1xyXG5leHBvcnQgY29uc3QgQlJPS0VOX0xJTkUgPSAnQlJPS0VOX0xJTkUnXHJcbmV4cG9ydCBjb25zdCBHQU1FX1BBV04gPSAnR0FNRV9QQVdOJ1xyXG5leHBvcnQgY29uc3QgSElUX1JFQyA9ICdISVRfUkVDJ1xyXG5leHBvcnQgY29uc3QgQlJPS0VOX0NPVU5URVIgPSAnQlJPS0VOX0NPVU5URVInIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyJdLCJzb3VyY2VSb290IjoiIn0=