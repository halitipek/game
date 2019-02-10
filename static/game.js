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
  resolution: 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL0JvYXJkQ29udGFpbmVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9Ccm9rZW5MaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9GaW5pc2hMaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9HYW1lTGluZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NsYXNzZXMvR2FtZVNlY3Rpb24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL1Bhd24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy93aXRoQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3JhdGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkJvYXJkQ29udGFpbmVyIiwidXNlciIsIm9wcG9uZW50Iiwid2lkdGgiLCJyYXRpb3MiLCJoZWlnaHQiLCJ4VHlwZSIsInR5cGVzIiwibmFtZSIsImFwcCIsInJhdGlvIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInNldCIsImlubmVyV2lkdGgiLCJzY2FsZSIsInBpdm90IiwiUElYSSIsIkNvbnRhaW5lciIsIndpdGhCYXNlIiwiQnJva2VuTGluZSIsInByb3BzIiwiY291bnRTdHlsZSIsIlRleHRTdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VUaGlja25lc3MiLCJkcm9wU2hhZG93IiwiZHJvcFNoYWRvd0NvbG9yIiwiZHJvcFNoYWRvd0JsdXIiLCJkcm9wU2hhZG93RGlzdGFuY2UiLCJkcm9wU2hhZG93QW5nbGUiLCJkcm9wU2hhZG93QWxwaGEiLCJjb3VudCIsIlRleHQiLCJ2aXNpYmxlIiwiYWRkQ2hpbGQiLCJuZXdDb3VudCIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY2hpbGQiLCJsZW5ndGgiLCJjb3VudENoaWxkIiwiZmluZCIsInRleHQiLCJudW1iZXIiLCJfbG9ja0dhbWVQYXducyIsInBhd25zIiwiZm9yRWFjaCIsInBhd24iLCJpIiwiYXJyIiwiVHdlZW5NYXgiLCJ0byIsIngiLCJ5IiwiQ09VTlRfSEVJR0hUIiwidXBkYXRlQ291bnQiLCJGaW5pc2hMaW5lIiwidG9TaXQiLCJoaXRSZWMiLCJHcmFwaGljcyIsImRyYXdSZWN0IiwidW5TdWJzY3JpYmUiLCJwb2ludCIsIkdhbWVMaW5lIiwiYmxvY2tlZCIsImFyZ3MiLCJwYXduQXJyIiwiZmFrZSIsInJldmVyc2UiLCJwYXJlbnQiLCJyb3ciLCJQQVdOIiwiaXNVc2VyIiwic3Vic2NyaWJlIiwidG9IaXQiLCJvcmRlclBhd25zIiwiR2FtZVNlY3Rpb24iLCJsaW5lIiwibGluZUluZGV4IiwiUGF3biIsInBhd25PYmoiLCJjb2xvciIsImxvYWRlciIsInJlc291cmNlcyIsInNvbGlkIiwidGV4dHVyZSIsInNvbGlkVGV4dHVyZSIsInNpZGVUZXh0dXJlIiwic2lkZSIsInNlbGVjdGVkVGV4dHVyZSIsInNlbGVjdGVkIiwiY3Vyc29yIiwib24iLCJmdW5jdGlvbnMiLCJuZXdQYXJlbnQiLCJoaXR0ZWRQYXduIiwiZ29Ub0Jyb2tlbkxpbmUiLCJzZXRTaWRlIiwibmV3UG9zaXRpb24iLCJ0b0xvY2FsIiwiZ2V0R2xvYmFsUG9zaXRpb24iLCJzZXRQYXJlbnQiLCJpbnRlcmFjdGl2ZSIsImJyb2tlbkxpbmVzIiwiX2dldEJyb2tlbkxpbmVzIiwiX2dldFVzZXIiLCJzZXRQYXJlbnRDdXN0b20iLCJTcHJpdGUiLCJjb21wIiwicHJvdG90eXBlIiwiX2dldEJvYXJkIiwib2JqIiwiX2dldE9wcG9uZW50IiwiX2dldFNlY3Rpb25zIiwiYm9hcmRDb250YWluZXIiLCJfZ2V0TGluZXMiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJsaW5lcyIsInB1c2giLCJfZ2V0RmluaXNoTGluZXMiLCJfZ2V0TXlGaW5pc2hMaW5lIiwiX2dldE9wcG9uZW50RmluaXNoTGluZSIsIm9wcCIsIl9nZXRNeUJyb2tlbkxpbmUiLCJfZ2V0T3Bwb25lbnRCcm9rZW5MaW5lIiwiYmxvY2tMaW5lIiwib25EcmFnU3RhcnQiLCJldmVudCIsImRyYWdnaW5nIiwic3RhcnRQb2ludCIsImRhdGEiLCJnbG9iYWwiLCJob21lUGFyZW50IiwicHJldmlvdXNQYXJlbnQiLCJkcmFnUG9pbnQiLCJzZXRTZWxlY3RlZCIsIm9uRHJhZ01vdmUiLCJlIiwiZ2xvYmFsUG9pbnQiLCJjZW50ZXIiLCJ0ZXN0SGl0Iiwib25EcmFnRW5kIiwiY29uc29sZSIsImxvZyIsInNldFNvbGlkIiwib25BZGRlZCIsImNvbnRhaW5lciIsIm9uUmVtb3ZlZCIsImNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyIiwicmVuZGVyZXIiLCJ2aWV3IiwiSCIsIlciLCJjcmVhdGVTZWN0aW9ucyIsInNlY3Rpb25zIiwiQXJyYXkiLCJtYXAiLCJzZWMiLCJjcmVhdGVHYW1lTGluZXMiLCJjcmVhdGVQYXducyIsImVsZW0iLCJzcHJpdGUiLCJjcmVhdGVGaW5pc2hMaW5lcyIsInVuIiwibnVtIiwidG9wIiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJjcmVhdGVCcm9rZW5MaW5lIiwieTAiLCJ5MSIsImJvYXJkIiwic2VjdGlvbkFyciIsImxpbmVBcnIiLCJ1c2VyUGF3bkFyciIsIm9wcG9uZW50UGF3bkFyciIsInNpZGVMaW5lQXJyIiwiYnJva2VuTGluZUFyciIsImJvYXJkUG5nIiwidXNlclBhd25QbmciLCJ1c2VyUGF3blNpZGVQbmciLCJ1c2VyUGF3blNlbGVjdGVkUG5nIiwib3Bwb25lbnRQYXduUG5nIiwib3Bwb25lbnRQYXduU2lkZVBuZyIsIm9wcG9uZW50UGF3blNlbGVjdGVkUG5nIiwibGluZVNlbGVjdGVkUG5nIiwidXNlclBhd25zIiwib3Bwb25lbnRQYXducyIsInV0aWxzIiwic2tpcEhlbGxvIiwiQXBwbGljYXRpb24iLCJjb25maWciLCJhbnRpYWxpYXMiLCJ0cmFuc3BhcmVudCIsInJlc29sdXRpb24iLCJzdHlsZSIsImRpc3BsYXkiLCJzZXR1cCIsIkJvYXJkQ29udGFpbmVyQ2xhc3MiLCJoZWxwZXJzIiwiY2h1bmsiLCJzbGljZSIsIm9yZGVyTGluZXMiLCJzdGFnZSIsInJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJwaXhpTG9hZGVyIiwiYWRkIiwibG9hZCIsIlRPUCIsIkxFRlQiLCJNSURETEUiLCJTRUNfUEVSQyIsInRvcEhlaWdodFJhdGlvIiwibGVmdFdpZHRoUmF0aW8iLCJtaWRkbGVXaWR0aFJhdGlvIiwicGF3bkhlaWdodFJhdGlvIiwic2VjdGlvbldpZHRoUmF0aW8iLCJzZWN0aW9uSGVpZ2h0UmF0aW8iLCJsaW5lV2lkdGhSYXRpbyIsImxpbmVIZWlnaHRSYXRpbyIsInNlY3Rpb24iLCJzaWRlTGluZSIsInBhd25fc2lkZSIsImJyb2tlbl9saW5lIiwiQk9BUkRfQ09OVEFJTkVSIiwiR0FNRV9TRUNUSU9OIiwiR0FNRV9MSU5FIiwiRklOSVNIX0xJTkUiLCJCUk9LRU5fTElORSIsIkdBTUVfUEFXTiIsIkhJVF9SRUMiLCJCUk9LRU5fQ09VTlRFUiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7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QywrRkFBeUI7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEM7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ1RBLHdCQUF3QixtQkFBTyxDQUFDLHVGQUFxQjs7QUFFckQsc0JBQXNCLG1CQUFPLENBQUMsbUZBQW1COztBQUVqRCx3QkFBd0IsbUJBQU8sQ0FBQyx1RkFBcUI7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNWQSx3QkFBd0IsMkVBQTJFLG9DQUFvQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sb0NBQW9DLDhIQUE4SCxHQUFHLEVBQUUsc0JBQXNCOztBQUVuVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUIiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2dhbWUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBCb2FyZENvbnRhaW5lciBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcih1c2VyLCBvcHBvbmVudCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2VyID0gdXNlclxyXG4gICAgdGhpcy5vcHBvbmVudCA9IG9wcG9uZW50XHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLldcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLkhcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5CT0FSRF9DT05UQUlORVJcclxuICAgIHRoaXMubmFtZSA9IHR5cGVzLkJPQVJEX0NPTlRBSU5FUlxyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlQm9hcmRDb250YWluZXIgKGFwcCkge1xyXG4gICAgbGV0IHJhdGlvID0gKDEwMCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyByYXRpb3MuSCAvIDEwMFxyXG5cclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MuVyAvIDEwMCAqIHJhdGlvXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5IIC8gMTAwICogcmF0aW9cclxuICBcclxuICAgIHRoaXMucG9zaXRpb24uc2V0KHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0IC8gMilcclxuICAgIHRoaXMuc2NhbGUuc2V0KHJhdGlvLCByYXRpbylcclxuICAgIHRoaXMucGl2b3Quc2V0KHJhdGlvcy5XIC8gMiwgcmF0aW9zLkggLyAyKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoQm9hcmRDb250YWluZXIpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEJyb2tlbkxpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5CUk9LRU5fTElORVxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5icm9rZW5fbGluZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MuYnJva2VuX2xpbmUuaGVpZ2h0XHJcbiAgICB0aGlzLmNvdW50U3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgIGZvbnRTaXplOiA0MixcclxuICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxyXG4gICAgICBzdHJva2U6ICcjZmYzMzAwJyxcclxuICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAxLFxyXG4gICAgICBkcm9wU2hhZG93OiB0cnVlLFxyXG4gICAgICBkcm9wU2hhZG93Q29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICBkcm9wU2hhZG93Qmx1cjogNCxcclxuICAgICAgZHJvcFNoYWRvd0Rpc3RhbmNlOiAtMixcclxuICAgICAgZHJvcFNoYWRvd0FuZ2xlOiAzMCxcclxuICAgICAgZHJvcFNoYWRvd0FscGhhOiAuNixcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGNvdW50ID0gbmV3IFBJWEkuVGV4dCgwLCB0aGlzLmNvdW50U3R5bGUpXHJcbiAgICBjb3VudC54VHlwZSA9IHR5cGVzLkJST0tFTl9DT1VOVEVSXHJcbiAgICBjb3VudC5oZWlnaHQgPSByYXRpb3MuQ09VTlRfSEVJR0hUXHJcbiAgICBjb3VudC5waXZvdC5zZXQoY291bnQud2lkdGggLyAyLCBjb3VudC5oZWlnaHQgLyAyKVxyXG4gICAgY291bnQucG9zaXRpb24uc2V0KHJhdGlvcy5icm9rZW5fbGluZS53aWR0aCAvIDIsIDApXHJcbiAgICBjb3VudC52aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLmFkZENoaWxkKGNvdW50KVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ291bnQgKCkge1xyXG4gICAgY29uc3QgbmV3Q291bnQgPSB0aGlzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKS5sZW5ndGhcclxuICAgIGNvbnN0IGNvdW50Q2hpbGQgPSB0aGlzLmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkJST0tFTl9DT1VOVEVSKVxyXG4gICAgY291bnRDaGlsZC50ZXh0ID0gbmV3Q291bnRcclxuICAgIGNvdW50Q2hpbGQudmlzaWJsZSA9IG5ld0NvdW50XHJcblxyXG4gICAgaWYgKG5ld0NvdW50ICYmIHRoaXMubnVtYmVyID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX2xvY2tHYW1lUGF3bnMoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3JkZXJQYXducyAoKSB7XHJcbiAgICBjb25zdCBwYXducyA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pXHJcbiAgICBwYXducy5mb3JFYWNoKChwYXduLCBpLCBhcnIpID0+IHtcclxuICAgICAgVHdlZW5NYXgudG8ocGF3bi5wb3NpdGlvbiwgLjUsIHsgeDogMCwgeTogcmF0aW9zLkNPVU5UX0hFSUdIVCB9KVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNvdW50KClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEJyb2tlbkxpbmUpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEZpbmlzaExpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5GSU5JU0hfTElORVxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5zaWRlTGluZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0XHJcbiAgICB0aGlzLnRvU2l0ID0gdHJ1ZVxyXG5cclxuICAgIGxldCBoaXRSZWMgPSBuZXcgUElYSS5HcmFwaGljcygpXHJcbiAgICBoaXRSZWMueFR5cGUgPSB0eXBlcy5ISVRfUkVDXHJcbiAgICBoaXRSZWMuZHJhd1JlY3QoMCwgMCwgcmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0KVxyXG4gICAgaGl0UmVjLnZpc2libGUgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuYWRkQ2hpbGQoaGl0UmVjKVxyXG4gIH1cclxuXHJcbiAgb3JkZXJQYXducyAoKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuXHJcbiAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgIT09IHR5cGVzLkhJVF9SRUMpXHJcbiAgICAgIC5mb3JFYWNoKChwYXduLCBpLCBhcnIpID0+IHtcclxuICAgICAgICBwYXduLnVuU3Vic2NyaWJlKClcclxuICAgICAgICBwYXduLnBvc2l0aW9uLnNldCgwLCByYXRpb3MucGF3bl9zaWRlLmhlaWdodCAqIGkpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICB0ZXN0SGl0IChwb2ludCkge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkhJVF9SRUMpXHJcbiAgICBcclxuICAgIGlmIChcclxuICAgICAgcG9pbnQueCA+PSAwXHJcbiAgICAgICYmIHBvaW50LnggPD0gd2lkdGhcclxuICAgICAgJiYgcG9pbnQueSA+PSAwXHJcbiAgICAgICYmIHBvaW50LnkgPD0gaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEZpbmlzaExpbmUpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEdhbWVMaW5lIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuR0FNRV9MSU5FXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLmxpbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLmxpbmUuaGVpZ2h0XHJcbiAgICB0aGlzLmJsb2NrZWQgPSBmYWxzZVxyXG5cclxuICAgIGxldCBoaXRSZWMgPSBuZXcgUElYSS5HcmFwaGljcygpXHJcbiAgICBoaXRSZWMueFR5cGUgPSB0eXBlcy5ISVRfUkVDXHJcbiAgICBoaXRSZWMuZHJhd1JlY3QoMCwgMCwgcmF0aW9zLmxpbmUud2lkdGgsIHJhdGlvcy5saW5lLmhlaWdodClcclxuICAgIGhpdFJlYy52aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLmFkZENoaWxkKGhpdFJlYylcclxuICB9XHJcblxyXG4gIG9yZGVyUGF3bnMgKGFyZ3MgPSB7fSkge1xyXG4gICAgY29uc3QgcGF3bkFyciA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5hbWUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfUEFXTilcclxuICAgIGNvbnN0IHsgZmFrZSwgcmV2ZXJzZSA9IHRoaXMucGFyZW50Lm51bWJlciA+IDEgfSA9IGFyZ3NcclxuICAgIGNvbnN0IGxlbmd0aCA9IGZha2UgPyBwYXduQXJyLmxlbmd0aCArIDEgOiBwYXduQXJyLmxlbmd0aFxyXG5cclxuICAgIGxldCByb3cgPSByYXRpb3MubGluZS5oZWlnaHQgLyBsZW5ndGhcclxuXHJcbiAgICBpZiAocm93IDwgcmF0aW9zLlBBV04pIHtcclxuICAgICAgcm93ID0gcm93IC0gKChyYXRpb3MuUEFXTiAtIHJvdykgLyBsZW5ndGgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3cgPSByYXRpb3MuUEFXTlxyXG4gICAgfVxyXG5cclxuICAgIHBhd25BcnIuZm9yRWFjaCgocGF3biwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIHBhd24udW5TdWJzY3JpYmUoKVxyXG4gICAgICByZXZlcnNlXHJcbiAgICAgICAgICA/IFR3ZWVuTWF4LnRvKHBhd24ucG9zaXRpb24sIC41LCB7IHg6IDAsIHk6IHJhdGlvcy5saW5lLmhlaWdodCAtIChyb3cgKiBpKSAtIHJhdGlvcy5QQVdOIH0pXHJcbiAgICAgICAgICA6IFR3ZWVuTWF4LnRvKHBhd24ucG9zaXRpb24sIC41LCB7IHg6IDAsIHk6IHJvdyAqIGkgfSlcclxuXHJcbiAgICAgIGlmIChpICsgMSA9PT0gYXJyLmxlbmd0aCAmJiBwYXduLmlzVXNlciAmJiAhdGhpcy5ibG9ja2VkKSB7XHJcbiAgICAgICAgcGF3bi5zdWJzY3JpYmUoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMudG9TaXQgPSB0cnVlXHJcblxyXG4gICAgaWYgKHBhd25BcnIubGVuZ3RoID09PSAxICYmICFwYXduQXJyWzBdLmlzVXNlcikge1xyXG4gICAgICB0aGlzLnRvSGl0ID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXduQXJyLmxlbmd0aCA+IDEgJiYgIXBhd25BcnJbMF0uaXNVc2VyKSB7XHJcbiAgICAgIHRoaXMudG9TaXQgPSBmYWxzZVxyXG4gICAgICB0aGlzLnRvSGl0ID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlc3RIaXQgKHBvaW50KSB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuSElUX1JFQylcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHBvaW50LnggPj0gMFxyXG4gICAgICAmJiBwb2ludC54IDw9IHdpZHRoXHJcbiAgICAgICYmIHBvaW50LnkgPj0gMFxyXG4gICAgICAmJiBwb2ludC55IDw9IGhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBibG9ja0xpbmUgKCkge1xyXG4gICAgdGhpcy5ibG9ja2VkID0gdHJ1ZVxyXG4gICAgdGhpcy5vcmRlclBhd25zKClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEdhbWVMaW5lKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBHYW1lU2VjdGlvbiBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkdBTUVfU0VDVElPTlxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5zZWN0aW9uLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5zZWN0aW9uLmhlaWdodFxyXG4gIH1cclxuXHJcbiAgb3JkZXJMaW5lcyAoKSB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuXHJcblxyXG4gICAgaWYgKHRoaXMubnVtYmVyID4gMSkge1xyXG4gICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLnJldmVyc2UoKVxyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkcmVuLmZvckVhY2goKGxpbmUsIGxpbmVJbmRleCwgYXJyKSA9PiB7XHJcbiAgICAgIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5saW5lLndpZHRoICogKGFyci5sZW5ndGggLSBsaW5lSW5kZXggLSAxKSwgMClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShHYW1lU2VjdGlvbilcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tICcuLi9mdW5jdGlvbnMnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuY2xhc3MgUGF3biBleHRlbmRzIFBJWEkuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihwYXduT2JqLCBjb2xvciwgaXNVc2VyKSB7XHJcbiAgICBzdXBlcihQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zb2xpZF0udGV4dHVyZSlcclxuXHJcbiAgICB0aGlzLnNvbGlkVGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNvbGlkXS50ZXh0dXJlXHJcbiAgICB0aGlzLnNpZGVUZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW3Bhd25PYmouc2lkZV0udGV4dHVyZVxyXG4gICAgdGhpcy5zZWxlY3RlZFRleHR1cmUgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zZWxlY3RlZF0udGV4dHVyZVxyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXHJcbiAgICB0aGlzLmlzVXNlciA9IGlzVXNlclxyXG4gICAgdGhpcy5jdXJzb3IgPSAncG9pbnRlcidcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5HQU1FX1BBV05cclxuICAgIHRoaXMub24oJ2FkZGVkJywgZnVuY3Rpb25zLm9uQWRkZWQpXHJcbiAgICB0aGlzLm9uKCdyZW1vdmVkJywgZnVuY3Rpb25zLm9uUmVtb3ZlZClcclxuICB9XHJcblxyXG4gIHNldFBhcmVudEN1c3RvbSAobmV3UGFyZW50KSB7XHJcbiAgICBpZiAobmV3UGFyZW50LnRvSGl0KSB7XHJcbiAgICAgIG5ld1BhcmVudC50b0hpdCA9IGZhbHNlXHJcbiAgICAgIG5ld1BhcmVudC50b1NpdCA9IHRydWVcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGhpdHRlZFBhd24gPSBuZXdQYXJlbnQuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKVxyXG4gICAgICBoaXR0ZWRQYXduLmdvVG9Ccm9rZW5MaW5lKClcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3UGFyZW50LnhUeXBlID09PSB0eXBlcy5GSU5JU0hfTElORSkge1xyXG4gICAgICB0aGlzLnNldFNpZGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gbmV3UGFyZW50LnRvTG9jYWwodGhpcy5nZXRHbG9iYWxQb3NpdGlvbigpKVxyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0gbmV3UG9zaXRpb24ueFxyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0gbmV3UG9zaXRpb24ueVxyXG4gICAgdGhpcy5zZXRQYXJlbnQobmV3UGFyZW50KVxyXG4gIH1cclxuXHJcbiAgc2V0U29saWQgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zb2xpZFRleHR1cmVcclxuICB9XHJcblxyXG4gIHNldFNpZGUgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zaWRlVGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWQgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zZWxlY3RlZFRleHR1cmVcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZSAoKSB7XHJcbiAgICBmdW5jdGlvbnMuc3Vic2NyaWJlKHRoaXMpXHJcbiAgfVxyXG5cclxuICB1blN1YnNjcmliZSAoKSB7XHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gZmFsc2VcclxuICB9XHJcblxyXG4gIGdvVG9Ccm9rZW5MaW5lICgpIHtcclxuICAgIGNvbnN0IGJyb2tlbkxpbmVzID0gdGhpcy5fZ2V0QnJva2VuTGluZXMoKVxyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuX2dldFVzZXIoKVxyXG4gICAgdXNlci5jb2xvciA9PT0gdGhpcy5jb2xvclxyXG4gICAgICA/IHRoaXMuc2V0UGFyZW50Q3VzdG9tKGJyb2tlbkxpbmVzWzFdKVxyXG4gICAgICA6IHRoaXMuc2V0UGFyZW50Q3VzdG9tKGJyb2tlbkxpbmVzWzBdKVxyXG4gIH1cclxuXHJcbiAgZ29Ub0ZpbmlzaExpbmUgKCkge1xyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShQYXduKVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBhd24gfSBmcm9tICcuL1Bhd24uY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtZVNlY3Rpb24gfSBmcm9tICcuL0dhbWVTZWN0aW9uLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWVMaW5lIH0gZnJvbSAnLi9HYW1lTGluZS5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaW5pc2hMaW5lIH0gZnJvbSAnLi9GaW5pc2hMaW5lLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJyb2tlbkxpbmUgfSBmcm9tICcuL0Jyb2tlbkxpbmUuY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm9hcmRDb250YWluZXIgfSBmcm9tICcuL0JvYXJkQ29udGFpbmVyLmNsYXNzJyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbXApID0+IHtcclxuICBjb21wLnByb3RvdHlwZS5fZ2V0Qm9hcmQgPSBmdW5jdGlvbiAob2JqID0gdGhpcykge1xyXG4gICAgaWYgKG9iai54VHlwZSA9PT0gdHlwZXMuQk9BUkRfQ09OVEFJTkVSKSB7XHJcbiAgICAgIHJldHVybiBvYmpcclxuICAgIH1cclxuICBcclxuICAgIGlmICghb2JqLnBhcmVudCkge1xyXG4gICAgICByZXR1cm4gb2JqLmNoaWxkcmVuWzBdXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQob2JqLnBhcmVudClcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJvYXJkKCkudXNlclxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE9wcG9uZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJvYXJkKCkub3Bwb25lbnRcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRTZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9TRUNUSU9OKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldExpbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldFNlY3Rpb25zKCkucmVkdWNlKChhY2MsIGN1ciwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpbmVzID0gY3VyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9MSU5FKVxyXG5cclxuICAgICAgYWNjLnB1c2goLi4ubGluZXMpXHJcblxyXG4gICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCBbXSkgICBcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRGaW5pc2hMaW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuRklOSVNIX0xJTkUpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0TXlGaW5pc2hMaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuX2dldFVzZXIoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEZpbmlzaExpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSB1c2VyLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRPcHBvbmVudEZpbmlzaExpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBvcHAgPSB0aGlzLl9nZXRPcHBvbmVudCgpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0RmluaXNoTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IG9wcC5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0QnJva2VuTGluZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIHJldHVybiBib2FyZENvbnRhaW5lci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkJST0tFTl9MSU5FKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE15QnJva2VuTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLl9nZXRVc2VyKClcclxuICAgIHJldHVybiB0aGlzLl9nZXRCcm9rZW5MaW5lcygpLmZpbmQobGluZSA9PiBsaW5lLm51bWJlciA9PT0gdXNlci5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0T3Bwb25lbnRCcm9rZW5MaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgb3BwID0gdGhpcy5fZ2V0T3Bwb25lbnQoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJyb2tlbkxpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSBvcHAubnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2xvY2tHYW1lUGF3bnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IHRoaXMuX2dldExpbmVzKClcclxuICAgIGxpbmVzXHJcbiAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfTElORSlcclxuICAgICAgLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgbGluZS5ibG9ja0xpbmUoKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBcclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQpIHtcclxuICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcclxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHsgLi4uZXZlbnQuZGF0YS5nbG9iYWwgfVxyXG4gICAgdGhpcy5ob21lUGFyZW50ID0gdGhpcy5wYXJlbnRcclxuICAgIHRoaXMucHJldmlvdXNQYXJlbnQgPSB0aGlzLnBhcmVudFxyXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWVcclxuICAgIHRoaXMuZHJhZ1BvaW50ID0gdGhpcy5nZXRHbG9iYWxQb3NpdGlvbigpXHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIHRoaXMuc2V0UGFyZW50Q3VzdG9tKGJvYXJkQ29udGFpbmVyKVxyXG4gICAgdGhpcy5zZXRTZWxlY3RlZCgpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnTW92ZShlKSB7XHJcbiAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgXHJcbiAgICB0aGlzLmdsb2JhbFBvaW50ID0geyB4OiB0aGlzLmRyYWdQb2ludC54IC0gKHRoaXMuc3RhcnRQb2ludC54IC0gZS5kYXRhLmdsb2JhbC54KSwgeTogdGhpcy5kcmFnUG9pbnQueSAtICh0aGlzLnN0YXJ0UG9pbnQueSAtIGUuZGF0YS5nbG9iYWwueSkgfVxyXG5cclxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gdGhpcy5wYXJlbnQudG9Mb2NhbCh0aGlzLmdsb2JhbFBvaW50KVxyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0gbmV3UG9zaXRpb24ueFxyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0gbmV3UG9zaXRpb24ueVxyXG5cclxuICAgIG5ld1Bvc2l0aW9uLnggKz0gdGhpcy53aWR0aCAvIDJcclxuICAgIG5ld1Bvc2l0aW9uLnkgKz0gdGhpcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgY29uc3QgbmV3UGFyZW50ID0gdGhpcy5fZ2V0TGluZXMoKS5maW5kKGxpbmUgPT4ge1xyXG4gICAgICBsZXQgY2VudGVyID0gbGluZS50b0xvY2FsKHRoaXMuZ2xvYmFsUG9pbnQpXHJcbiAgICAgIGNlbnRlci54ICs9IHRoaXMud2lkdGggLyAyXHJcbiAgICAgIGNlbnRlci55ICs9IHRoaXMuaGVpZ2h0IC8gMlxyXG5cclxuICAgICAgcmV0dXJuIGxpbmUudGVzdEhpdChjZW50ZXIpXHJcbiAgICB9KSB8fCBib2FyZENvbnRhaW5lclxyXG5cclxuICAgIGlmIChuZXdQYXJlbnQubmFtZSAhPT0gdGhpcy5wcmV2aW91c1BhcmVudC5uYW1lKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNQYXJlbnQub3JkZXJQYXducyAmJiB0aGlzLnByZXZpb3VzUGFyZW50Lm9yZGVyUGF3bnMoKVxyXG5cclxuICAgICAgaWYgKG5ld1BhcmVudC5vcmRlclBhd25zICYmIChuZXdQYXJlbnQudG9IaXQgfHwgbmV3UGFyZW50LnRvU2l0KSkge1xyXG4gICAgICAgIG5ld1BhcmVudC5vcmRlclBhd25zKHsgZmFrZTogdHJ1ZSB9KVxyXG4gICAgICAgIHRoaXMucHJldmlvdXNQYXJlbnQgPSBuZXdQYXJlbnRcclxuICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ0VuZCgpIHtcclxuICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlXHJcbiAgICBcclxuICAgIGxldCBsaW5lcyA9IHRoaXMuX2dldExpbmVzKClcclxuICAgIGxpbmVzLnB1c2godGhpcy5fZ2V0TXlGaW5pc2hMaW5lKCkpXHJcblxyXG4gICAgY29uc3QgbmV3UGFyZW50ID0gbGluZXMuZmluZChsaW5lID0+IHtcclxuICAgICAgY29uc29sZS5sb2cobGluZSlcclxuICAgICAgbGV0IGNlbnRlciA9IGxpbmUudG9Mb2NhbCh0aGlzLmdldEdsb2JhbFBvc2l0aW9uKCkpXHJcbiAgICAgIGNlbnRlci54ICs9IHRoaXMud2lkdGggLyAyXHJcbiAgICAgIGNlbnRlci55ICs9IHRoaXMuaGVpZ2h0IC8gMlxyXG5cclxuICAgICAgcmV0dXJuIGxpbmUudGVzdEhpdChjZW50ZXIpICYmIChsaW5lLnRvSGl0IHx8IGxpbmUudG9TaXQpXHJcbiAgICB9KSB8fCB0aGlzLmhvbWVQYXJlbnRcclxuXHJcbiAgICB0aGlzLnNldFNvbGlkKClcclxuICAgIHRoaXMuc2V0UGFyZW50Q3VzdG9tKG5ld1BhcmVudClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkFkZGVkIChjb250YWluZXIpIHtcclxuICBjb250YWluZXIub3JkZXJQYXducyAmJiBjb250YWluZXIub3JkZXJQYXducygpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvblJlbW92ZWQgKGNvbnRhaW5lcikge1xyXG4gIGNvbnRhaW5lci5vcmRlclBhd25zICYmIGNvbnRhaW5lci5vcmRlclBhd25zKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZSAob2JqKSB7XHJcbiAgb2JqLmludGVyYWN0aXZlID0gdHJ1ZVxyXG4gIG9iai5vbignbW91c2Vkb3duJywgb25EcmFnU3RhcnQpXHJcbiAgICAub24oJ3RvdWNoc3RhcnQnLCBvbkRyYWdTdGFydClcclxuICAgIC5vbignbW91c2V1cCcsIG9uRHJhZ0VuZClcclxuICAgIC5vbignbW91c2V1cG91dHNpZGUnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ3RvdWNoZW5kJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCd0b3VjaGVuZG91dHNpZGUnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ21vdXNlbW92ZScsIG9uRHJhZ01vdmUpXHJcbiAgICAub24oJ3RvdWNobW92ZScsIG9uRHJhZ01vdmUpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1blN1YnNjcmliZSAob2JqKSB7XHJcbiAgb2JqLmludGVyYWN0aXZlID0gdHJ1ZVxyXG4gIG9iai5vbignbW91c2Vkb3duJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2V1cCcsICgpID0+IHt9KVxyXG4gICAgLm9uKCdtb3VzZXVwb3V0c2lkZScsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaGVuZCcsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaGVuZG91dHNpZGUnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2Vtb3ZlJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNobW92ZScsICgpID0+IHt9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQm9hcmRDb250YWluZXIgKGJvYXJkQ29udGFpbmVyLCBhcHAsIHJhdGlvcykge1xyXG4gIGxldCByYXRpbyA9ICgxMDAgKiBhcHAucmVuZGVyZXIudmlldy5oZWlnaHQpIC8gcmF0aW9zLkggLyAxMDBcclxuXHJcbiAgYm9hcmRDb250YWluZXIud2lkdGggPSByYXRpb3MuVyAvIDEwMCAqIHJhdGlvXHJcbiAgYm9hcmRDb250YWluZXIuaGVpZ2h0ID0gcmF0aW9zLkggLyAxMDAgKiByYXRpb1xyXG5cclxuICBib2FyZENvbnRhaW5lci5wb3NpdGlvbi5zZXQoYXBwLnJlbmRlcmVyLnZpZXcud2lkdGggLyAyLCBhcHAucmVuZGVyZXIudmlldy5oZWlnaHQgLyAyKVxyXG4gIGJvYXJkQ29udGFpbmVyLnNjYWxlLnNldChyYXRpbywgcmF0aW8pXHJcbiAgYm9hcmRDb250YWluZXIucGl2b3Quc2V0KHJhdGlvcy5XIC8gMiwgcmF0aW9zLkggLyAyKVxyXG59IiwiaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4vcmF0aW9zJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQge1xyXG4gIFBhd24sXHJcbiAgR2FtZVNlY3Rpb24sXHJcbiAgR2FtZUxpbmUsXHJcbiAgRmluaXNoTGluZSxcclxuICBCcm9rZW5MaW5lXHJcbn0gZnJvbSAnLi9jbGFzc2VzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb25zICgpIHtcclxuICBjb25zdCBzZWN0aW9ucyA9IG5ldyBBcnJheSg0KS5maWxsKDApXHJcblxyXG4gIHJldHVybiBzZWN0aW9ucy5tYXAoKHNlYywgaSkgPT4ge1xyXG4gICAgc2VjID0gbmV3IEdhbWVTZWN0aW9uKClcclxuICAgIHNlYy5uYW1lID0gdHlwZXMuR0FNRV9TRUNUSU9OICsgJ18nICsgaVxyXG4gICAgc2VjLm51bWJlciA9IGlcclxuICAgIFxyXG4gICAgaWYgKGkgPT09IDApIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQgKyByYXRpb3Muc2VjdGlvbi53aWR0aCArIHJhdGlvcy5NSURETEUsIHJhdGlvcy5UT1ApXHJcbiAgICBpZiAoaSA9PT0gMSkgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCwgcmF0aW9zLlRPUClcclxuICAgIGlmIChpID09PSAyKSBzZWMucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZULCByYXRpb3MuSCAtIHJhdGlvcy5UT1AgLSByYXRpb3Muc2VjdGlvbi5oZWlnaHQpXHJcbiAgICBpZiAoaSA9PT0gMykgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCArIHJhdGlvcy5zZWN0aW9uLndpZHRoICsgcmF0aW9zLk1JRERMRSwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNlY3Rpb24uaGVpZ2h0KVxyXG5cclxuICAgIHJldHVybiBzZWNcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZUxpbmVzICgpIHtcclxuICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgyNCkuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gbGluZXMubWFwKChsaW5lLCBpLCBhcnIpID0+IHtcclxuICAgIGxpbmUgPSBuZXcgR2FtZUxpbmUoKVxyXG4gICAgbGluZS5uYW1lID0gdHlwZXMuR0FNRV9MSU5FICsgJ18nICsgaVxyXG4gICAgbGluZS5udW1iZXIgPSBpXHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGF3bnMgKHBhd25PYmosIGNvbG9yLCBpc1VzZXIgPSBmYWxzZSwgY291bnQgPSAxNSkge1xyXG4gIHJldHVybiBuZXcgQXJyYXkoY291bnQpLmZpbGwoMCkubWFwKChlbGVtLCBpKSA9PiB7XHJcbiAgICBjb25zdCBzcHJpdGUgPSBuZXcgUGF3bihwYXduT2JqLCBjb2xvciwgaXNVc2VyKVxyXG4gICAgc3ByaXRlLm5hbWUgPSBgJHtjb2xvcn1fJHt0eXBlcy5HQU1FX1BBV059XyR7aX1gXHJcbiAgICBzcHJpdGUubnVtYmVyID0gaVxyXG5cclxuICAgIHJldHVybiBzcHJpdGVcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmluaXNoTGluZXMgKHVuLCBvbikge1xyXG4gIGNvbnN0IGxpbmVzID0gbmV3IEFycmF5KDIpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIGxpbmVzLm1hcCgobGluZSwgaSwgYXJyKSA9PiB7XHJcbiAgICBsZXQgbnVtID0gaSA9PT0gMSA/IG9uIDogdW5cclxuXHJcbiAgICBsaW5lID0gbmV3IEZpbmlzaExpbmUoKVxyXG4gICAgbGluZS5uYW1lID0gdHlwZXMuRklOSVNIX0xJTkUgKyAnXycgKyBudW1cclxuICAgIGxpbmUubnVtYmVyID0gbnVtXHJcblxyXG4gICAgaWYgKGkgPT09IDApIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5XIC0gcmF0aW9zLnNpZGVMaW5lLnNpZGUgLSByYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5zaWRlTGluZS50b3ApXHJcbiAgICBpZiAoaSA9PT0gMSkge1xyXG4gICAgICBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuVyAtIHJhdGlvcy5zaWRlTGluZS5zaWRlIC0gcmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3MuSCAtIHJhdGlvcy5UT1AgLSByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0KVxyXG4gICAgICBsaW5lLnJvdGF0aW9uID0gTWF0aC5QSVxyXG4gICAgICBsaW5lLnBpdm90LnNldChyYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5zaWRlTGluZS5oZWlnaHQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnJva2VuTGluZSAodW4sIG9uKSB7XHJcbiAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXkoMikuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gbGluZXMubWFwKChsaW5lLCBpLCBhcnIpID0+IHtcclxuICAgIGxldCBudW0gPSBpID09PSAwID8gb24gOiB1blxyXG5cclxuICAgIGxpbmUgPSBuZXcgQnJva2VuTGluZSgpXHJcbiAgICBsaW5lLm5hbWUgPSB0eXBlcy5CUk9LRU5fTElORSArICdfJyArIG51bVxyXG4gICAgbGluZS5udW1iZXIgPSBudW1cclxuXHJcbiAgICBpZiAoaSA9PT0gMCkgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLmJyb2tlbl9saW5lLngsIHJhdGlvcy5icm9rZW5fbGluZS55MClcclxuICAgIGlmIChpID09PSAxKSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuYnJva2VuX2xpbmUueCwgcmF0aW9zLmJyb2tlbl9saW5lLnkxKVxyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4vaGVscGVycydcclxuaW1wb3J0IHsgQm9hcmRDb250YWluZXIgYXMgQm9hcmRDb250YWluZXJDbGFzcyB9IGZyb20gJy4vY2xhc3NlcydcclxuXHJcbmxldCBib2FyZENvbnRhaW5lciwgYm9hcmQsIHNlY3Rpb25BcnIgPSBbXSwgbGluZUFyciA9IFtdLCB1c2VyUGF3bkFyciA9IFtdLCBvcHBvbmVudFBhd25BcnIgPSBbXSwgc2lkZUxpbmVBcnIgPSBbXSwgYnJva2VuTGluZUFyciA9IFtdXHJcblxyXG5jb25zdCB1c2VyID0ge1xyXG4gIGNvbG9yOiAnd2hpdGUnLFxyXG4gIGJvYXJkOiBbXHJcbiAgICAyLCAwLCAwLCAwLCAwLCAwLFxyXG4gICAgMCwgMCwgMCwgMCwgMCwgNSxcclxuICAgIDAsIDAsIDAsIDAsIDMsIDAsXHJcbiAgICA1LCAwLCAwLCAwLCAwLCAwXHJcbiAgXSxcclxuICBudW1iZXI6IDBcclxufVxyXG5cclxuY29uc3Qgb3Bwb25lbnQgPSB7XHJcbiAgY29sb3I6ICdibGFjaycsXHJcbiAgYm9hcmQ6IFtcclxuICAgIDAsIDAsIDAsIDAsIDAsIDUsXHJcbiAgICAwLCAxLCAwLCAwLCAwLCAwLFxyXG4gICAgNSwgMCwgMCwgMCwgMCwgMCxcclxuICAgIDAsIDAsIDAsIDAsIDAsIDFcclxuICBdLFxyXG4gIG51bWJlcjogMVxyXG59XHJcblxyXG5jb25zdCBib2FyZFBuZyA9ICdib2FyZC5wbmcnXHJcbmNvbnN0IHVzZXJQYXduUG5nID0gYCR7dXNlci5jb2xvcn1fcGF3bi5wbmdgXHJcbmNvbnN0IHVzZXJQYXduU2lkZVBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd24yLnBuZ2BcclxuY29uc3QgdXNlclBhd25TZWxlY3RlZFBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd25fc2VsZWN0ZWQucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25QbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bi5wbmdgXHJcbmNvbnN0IG9wcG9uZW50UGF3blNpZGVQbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bjIucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25TZWxlY3RlZFBuZyA9IGAke29wcG9uZW50LmNvbG9yfV9wYXduX3NlbGVjdGVkLnBuZ2BcclxuY29uc3QgbGluZVNlbGVjdGVkUG5nID0gJ2xpbmVfc2VsZWN0ZWQucG5nJ1xyXG5cclxuY29uc3QgdXNlclBhd25zID0ge1xyXG4gIHNvbGlkOiB1c2VyUGF3blBuZyxcclxuICBzaWRlOiB1c2VyUGF3blNpZGVQbmcsXHJcbiAgc2VsZWN0ZWQ6IHVzZXJQYXduU2VsZWN0ZWRQbmdcclxufVxyXG5cclxuY29uc3Qgb3Bwb25lbnRQYXducyA9IHtcclxuICBzb2xpZDogb3Bwb25lbnRQYXduUG5nLFxyXG4gIHNpZGU6IG9wcG9uZW50UGF3blNpZGVQbmcsXHJcbiAgc2VsZWN0ZWQ6IG9wcG9uZW50UGF3blNlbGVjdGVkUG5nXHJcbn1cclxuXHJcblBJWEkudXRpbHMuc2tpcEhlbGxvKClcclxuXHJcbmxldCBBcHBsaWNhdGlvbiA9IFBJWEkuQXBwbGljYXRpb24sXHJcbiAgICBsb2FkZXIgPSBQSVhJLmxvYWRlcixcclxuICAgIHJlc291cmNlcyA9IFBJWEkubG9hZGVyLnJlc291cmNlcyxcclxuICAgIFNwcml0ZSA9IFBJWEkuU3ByaXRlXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gIGFudGlhbGlhczogdHJ1ZSxcclxuICB0cmFuc3BhcmVudDogZmFsc2UsXHJcbiAgcmVzb2x1dGlvbjogMVxyXG59XHJcblxyXG5sZXQgYXBwID0gbmV3IEFwcGxpY2F0aW9uKGNvbmZpZylcclxuYXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcclxuYXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4vL2FwcC5yZW5kZXJlci5hdXRvUmVzaXplID0gdHJ1ZVxyXG5cclxuLy8gU0VUVVBcclxuY29uc3Qgc2V0dXAgPSAoKSA9PiB7XHJcbiAgYm9hcmRDb250YWluZXIgPSBuZXcgQm9hcmRDb250YWluZXJDbGFzcyh1c2VyLCBvcHBvbmVudClcclxuXHJcbiAgYm9hcmQgPSBuZXcgU3ByaXRlKHJlc291cmNlc1tib2FyZFBuZ10udGV4dHVyZSlcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZChib2FyZClcclxuICBcclxuICBzZWN0aW9uQXJyID0gaGVscGVycy5jcmVhdGVTZWN0aW9ucygpXHJcbiAgYm9hcmRDb250YWluZXIuYWRkQ2hpbGQoLi4uc2VjdGlvbkFycilcclxuXHJcbiAgbGluZUFyciA9IGhlbHBlcnMuY3JlYXRlR2FtZUxpbmVzKClcclxuICBzZWN0aW9uQXJyLmZvckVhY2goKHNlYywgaSwgYXJyKSA9PiB7XHJcbiAgICBjb25zdCBjaHVuayA9IGxpbmVBcnIubGVuZ3RoIC8gYXJyLmxlbmd0aFxyXG4gICAgc2VjLmFkZENoaWxkKFxyXG4gICAgICAuLi5saW5lQXJyLnNsaWNlKGNodW5rICogaSwgY2h1bmsgKiAoaSArIDEpKVxyXG4gICAgKVxyXG5cclxuICAgIHNlYy5vcmRlckxpbmVzKClcclxuICB9KVxyXG5cclxuICBzaWRlTGluZUFyciA9IGhlbHBlcnMuY3JlYXRlRmluaXNoTGluZXModXNlci5udW1iZXIsIG9wcG9uZW50Lm51bWJlcilcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZCguLi5zaWRlTGluZUFycilcclxuXHJcbiAgYnJva2VuTGluZUFyciA9IGhlbHBlcnMuY3JlYXRlQnJva2VuTGluZSh1c2VyLm51bWJlciwgb3Bwb25lbnQubnVtYmVyKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKC4uLmJyb2tlbkxpbmVBcnIpXHJcblxyXG4gIHVzZXJQYXduQXJyID0gaGVscGVycy5jcmVhdGVQYXducyh1c2VyUGF3bnMsIHVzZXIuY29sb3IsIHRydWUsIDE1KVxyXG4gIG9wcG9uZW50UGF3bkFyciA9IGhlbHBlcnMuY3JlYXRlUGF3bnMob3Bwb25lbnRQYXducywgb3Bwb25lbnQuY29sb3IsIGZhbHNlLCAxNSlcclxuXHJcbiAgbGluZUFyci5yZWR1Y2UoKGFjYywgY3VyLCBpLCBhcnIpID0+IHtcclxuICAgIGlmICh1c2VyLmJvYXJkW2ldID4gMCkge1xyXG4gICAgICBjdXIuYWRkQ2hpbGQoLi4udXNlclBhd25BcnIuc2xpY2UoYWNjLnVzZXIsIGFjYy51c2VyICsgdXNlci5ib2FyZFtpXSkpXHJcbiAgICAgIGFjYy51c2VyICs9IHVzZXIuYm9hcmRbaV1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3Bwb25lbnQuYm9hcmRbaV0gPiAwKSB7XHJcbiAgICAgIGN1ci5hZGRDaGlsZCguLi5vcHBvbmVudFBhd25BcnIuc2xpY2UoYWNjLm9wcG9uZW50LCBhY2Mub3Bwb25lbnQgKyBvcHBvbmVudC5ib2FyZFtpXSkpXHJcbiAgICAgIGFjYy5vcHBvbmVudCArPSBvcHBvbmVudC5ib2FyZFtpXVxyXG4gICAgfVxyXG5cclxuICAgIGN1ci5vcmRlclBhd25zKClcclxuXHJcbiAgICByZXR1cm4gYWNjXHJcbiAgfSwgeyB1c2VyOiAwLCBvcHBvbmVudDogMCB9KVxyXG5cclxuICBib2FyZENvbnRhaW5lci5jYWxjdWxhdGVCb2FyZENvbnRhaW5lcihhcHApXHJcblxyXG4gIGFwcC5zdGFnZS5hZGRDaGlsZChib2FyZENvbnRhaW5lcilcclxuXHJcbiAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xyXG4gICAgYXBwLnJlbmRlcmVyLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgYm9hcmRDb250YWluZXIuY2FsY3VsYXRlQm9hcmRDb250YWluZXIoYXBwKVxyXG4gIH1cclxuICBcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplKVxyXG4gIFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuYXBwZW5kQ2hpbGQoYXBwLnZpZXcpXHJcbiAgXHJcbiAgcmVzaXplKClcclxufVxyXG5cclxuY29uc3QgcGl4aUxvYWRlciA9ICgpID0+IHtcclxuICBsb2FkZXJcclxuICAgIC5hZGQoW1xyXG4gICAgICBib2FyZFBuZywgXHJcbiAgICAgIHVzZXJQYXduUG5nLCBcclxuICAgICAgb3Bwb25lbnRQYXduUG5nLFxyXG4gICAgICB1c2VyUGF3blNpZGVQbmcsXHJcbiAgICAgIG9wcG9uZW50UGF3blNpZGVQbmcsXHJcbiAgICAgIHVzZXJQYXduU2VsZWN0ZWRQbmcsXHJcbiAgICAgIG9wcG9uZW50UGF3blNlbGVjdGVkUG5nLFxyXG4gICAgICBsaW5lU2VsZWN0ZWRQbmdcclxuICAgIF0pXHJcbiAgICAubG9hZChzZXR1cClcclxufVxyXG5cclxucGl4aUxvYWRlcigpXHJcbiIsImV4cG9ydCBjb25zdCBIID0gNzY4XHJcbmV4cG9ydCBjb25zdCBXID0gMTE0N1xyXG5leHBvcnQgY29uc3QgVE9QID0gMjBcclxuZXhwb3J0IGNvbnN0IExFRlQgPSAxMDhcclxuZXhwb3J0IGNvbnN0IE1JRERMRSA9IDgyXHJcbmV4cG9ydCBjb25zdCBQQVdOID0gNzFcclxuZXhwb3J0IGNvbnN0IFNFQ19QRVJDID0gODVcclxuZXhwb3J0IGNvbnN0IENPVU5UX0hFSUdIVCA9IDUwXHJcblxyXG5leHBvcnQgY29uc3QgdG9wSGVpZ2h0UmF0aW8gPSBUT1AgKiAxMDAgLyBIXHJcbmV4cG9ydCBjb25zdCBsZWZ0V2lkdGhSYXRpbyA9IExFRlQgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBtaWRkbGVXaWR0aFJhdGlvID0gTUlERExFICogMTAwIC8gV1xyXG5leHBvcnQgY29uc3QgcGF3bkhlaWdodFJhdGlvID0gUEFXTiAqIDEwMCAvIEhcclxuXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uV2lkdGhSYXRpbyA9ICgoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMikgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uSGVpZ2h0UmF0aW8gPSAoKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwKSAqIDEwMCAvIEhcclxuZXhwb3J0IGNvbnN0IGxpbmVXaWR0aFJhdGlvID0gc2VjdGlvbldpZHRoUmF0aW8gLyA2XHJcbmV4cG9ydCBjb25zdCBsaW5lSGVpZ2h0UmF0aW8gPSBzZWN0aW9uSGVpZ2h0UmF0aW9cclxuXHJcbmV4cG9ydCBjb25zdCBsaW5lID0ge1xyXG4gIHdpZHRoOiAoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMTIsXHJcbiAgaGVpZ2h0OiAoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb24gPSB7XHJcbiAgd2lkdGg6IChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAyLFxyXG4gIGhlaWdodDogKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBib2FyZCA9IHtcclxuICB3aWR0aDogMTE0NyxcclxuICBoZWlnaHQ6IDc2OFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZUxpbmUgPSB7XHJcbiAgd2lkdGg6IDY1LFxyXG4gIGhlaWdodDogMjEwLFxyXG4gIHRvcDogMTMzLFxyXG4gIHNpZGU6IChMRUZUIC0gNjUpIC8gMlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGF3bl9zaWRlID0ge1xyXG4gIHdpZHRoOiA2NSxcclxuICBoZWlnaHQ6IDE0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBicm9rZW5fbGluZSA9IHtcclxuICB3aWR0aDogUEFXTixcclxuICBoZWlnaHQ6IFBBV04gKyBDT1VOVF9IRUlHSFQsXHJcbiAgeDogTEVGVCArIHNlY3Rpb24ud2lkdGggKyAoKE1JRERMRSAtIFBBV04pIC8gMiksXHJcbiAgeTA6IChIIC8gMikgLSAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMiksXHJcbiAgeTE6IChIIC8gMikgKyAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMSlcclxufSIsImV4cG9ydCBjb25zdCBCT0FSRF9DT05UQUlORVIgPSAnQk9BUkRfQ09OVEFJTkVSJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9TRUNUSU9OID0gJ0dBTUVfU0VDVElPTidcclxuZXhwb3J0IGNvbnN0IEdBTUVfTElORSA9ICdHQU1FX0xJTkUnXHJcbmV4cG9ydCBjb25zdCBGSU5JU0hfTElORSA9ICdGSU5JU0hfTElORSdcclxuZXhwb3J0IGNvbnN0IEJST0tFTl9MSU5FID0gJ0JST0tFTl9MSU5FJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9QQVdOID0gJ0dBTUVfUEFXTidcclxuZXhwb3J0IGNvbnN0IEhJVF9SRUMgPSAnSElUX1JFQydcclxuZXhwb3J0IGNvbnN0IEJST0tFTl9DT1VOVEVSID0gJ0JST0tFTl9DT1VOVEVSJyIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiXSwic291cmNlUm9vdCI6IiJ9