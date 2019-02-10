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
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../isMobile */ "./game/isMobile.js");










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
      var width = window.innerWidth,
          height = window.innerHeight;

      if (Object(_isMobile__WEBPACK_IMPORTED_MODULE_8__["default"])()) {
        width = screen.availWidth;
        height = screen.availHeight;
      }

      app.renderer.resize(width, height);
      var ratio = 100 * height / _ratios__WEBPACK_IMPORTED_MODULE_7__["H"] / 100 / devicePixelRatio;
      this.width = _ratios__WEBPACK_IMPORTED_MODULE_7__["W"] / 100 * ratio;
      this.height = _ratios__WEBPACK_IMPORTED_MODULE_7__["H"] / 100 * ratio;
      this.position.set(0, 0);
      this.scale.set(ratio, ratio); //this.pivot.set(ratios.W / 2, ratios.H / 2)
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
/* harmony import */ var _scaleToWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scaleToWindow */ "./game/scaleToWindow.js");




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

/***/ "./game/isMobile.js":
/*!**************************!*\
  !*** ./game/isMobile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
});
;

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

/***/ "./game/scaleToWindow.js":
/*!*******************************!*\
  !*** ./game/scaleToWindow.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function scaleToWindow(canvas, backgroundColor) {
  var scaleX, scaleY, scale, center; //1. Scale the canvas to the correct size
  //Figure out the scale amount on each axis

  scaleX = window.innerWidth / canvas.offsetWidth;
  scaleY = window.innerHeight / canvas.offsetHeight; //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`

  scale = Math.min(scaleX, scaleY);
  canvas.style.transformOrigin = "0 0";
  canvas.style.transform = "scale(" + scale + ")"; //2. Center the canvas.
  //Decide whether to center the canvas vertically or horizontally.
  //Wide canvases should be centered vertically, and 
  //square or tall canvases should be centered horizontally

  if (canvas.offsetWidth > canvas.offsetHeight) {
    if (canvas.offsetWidth * scale < window.innerWidth) {
      center = "horizontally";
    } else {
      center = "vertically";
    }
  } else {
    if (canvas.offsetHeight * scale < window.innerHeight) {
      center = "vertically";
    } else {
      center = "horizontally";
    }
  } //Center horizontally (for square or tall canvases)


  var margin;

  if (center === "horizontally") {
    margin = (window.innerWidth - canvas.offsetWidth * scale) / 2;
    canvas.style.marginTop = 0 + "px";
    canvas.style.marginBottom = 0 + "px";
    canvas.style.marginLeft = margin + "px";
    canvas.style.marginRight = margin + "px";
  } //Center vertically (for wide canvases) 


  if (center === "vertically") {
    margin = (window.innerHeight - canvas.offsetHeight * scale) / 2;
    canvas.style.marginTop = margin + "px";
    canvas.style.marginBottom = margin + "px";
    canvas.style.marginLeft = 0 + "px";
    canvas.style.marginRight = 0 + "px";
  } //3. Remove any padding from the canvas  and body and set the canvas
  //display style to "block"


  canvas.style.paddingLeft = 0 + "px";
  canvas.style.paddingRight = 0 + "px";
  canvas.style.paddingTop = 0 + "px";
  canvas.style.paddingBottom = 0 + "px";
  canvas.style.display = "block"; //4. Set the color of the HTML body background

  document.body.style.backgroundColor = backgroundColor; //Fix some quirkiness in scaling for Safari

  var ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf("safari") != -1) {
    if (ua.indexOf("chrome") > -1) {// Chrome
    } else {// Safari
        //canvas.style.maxHeight = "100%";
        //canvas.style.minHeight = "100%";
      }
  } //5. Return the `scale` value. This is important, because you'll nee this value 
  //for correct hit testing between the pointer and sprites


  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (scaleToWindow);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL0JvYXJkQ29udGFpbmVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9Ccm9rZW5MaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9GaW5pc2hMaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9HYW1lTGluZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NsYXNzZXMvR2FtZVNlY3Rpb24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL1Bhd24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy93aXRoQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2lzTW9iaWxlLmpzIiwid2VicGFjazovLy8uL2dhbWUvcmF0aW9zLmpzIiwid2VicGFjazovLy8uL2dhbWUvc2NhbGVUb1dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkJvYXJkQ29udGFpbmVyIiwidXNlciIsIm9wcG9uZW50Iiwid2lkdGgiLCJyYXRpb3MiLCJoZWlnaHQiLCJ4VHlwZSIsInR5cGVzIiwibmFtZSIsImFwcCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImlzTW9iaWxlIiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsImF2YWlsSGVpZ2h0IiwicmVuZGVyZXIiLCJyZXNpemUiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJwb3NpdGlvbiIsInNldCIsInNjYWxlIiwiUElYSSIsIkNvbnRhaW5lciIsIndpdGhCYXNlIiwiQnJva2VuTGluZSIsInByb3BzIiwiY291bnRTdHlsZSIsIlRleHRTdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VUaGlja25lc3MiLCJkcm9wU2hhZG93IiwiZHJvcFNoYWRvd0NvbG9yIiwiZHJvcFNoYWRvd0JsdXIiLCJkcm9wU2hhZG93RGlzdGFuY2UiLCJkcm9wU2hhZG93QW5nbGUiLCJkcm9wU2hhZG93QWxwaGEiLCJjb3VudCIsIlRleHQiLCJwaXZvdCIsInZpc2libGUiLCJhZGRDaGlsZCIsIm5ld0NvdW50IiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJjaGlsZCIsImxlbmd0aCIsImNvdW50Q2hpbGQiLCJmaW5kIiwidGV4dCIsIm51bWJlciIsIl9sb2NrR2FtZVBhd25zIiwicGF3bnMiLCJmb3JFYWNoIiwicGF3biIsImkiLCJhcnIiLCJUd2Vlbk1heCIsInRvIiwieCIsInkiLCJDT1VOVF9IRUlHSFQiLCJ1cGRhdGVDb3VudCIsIkZpbmlzaExpbmUiLCJ0b1NpdCIsImhpdFJlYyIsIkdyYXBoaWNzIiwiZHJhd1JlY3QiLCJ1blN1YnNjcmliZSIsInBvaW50IiwiR2FtZUxpbmUiLCJibG9ja2VkIiwiYXJncyIsInBhd25BcnIiLCJmYWtlIiwicmV2ZXJzZSIsInBhcmVudCIsInJvdyIsIlBBV04iLCJpc1VzZXIiLCJzdWJzY3JpYmUiLCJ0b0hpdCIsIm9yZGVyUGF3bnMiLCJHYW1lU2VjdGlvbiIsImxpbmUiLCJsaW5lSW5kZXgiLCJQYXduIiwicGF3bk9iaiIsImNvbG9yIiwibG9hZGVyIiwicmVzb3VyY2VzIiwic29saWQiLCJ0ZXh0dXJlIiwic29saWRUZXh0dXJlIiwic2lkZVRleHR1cmUiLCJzaWRlIiwic2VsZWN0ZWRUZXh0dXJlIiwic2VsZWN0ZWQiLCJjdXJzb3IiLCJvbiIsImZ1bmN0aW9ucyIsIm5ld1BhcmVudCIsImhpdHRlZFBhd24iLCJnb1RvQnJva2VuTGluZSIsInNldFNpZGUiLCJuZXdQb3NpdGlvbiIsInRvTG9jYWwiLCJnZXRHbG9iYWxQb3NpdGlvbiIsInNldFBhcmVudCIsImludGVyYWN0aXZlIiwiYnJva2VuTGluZXMiLCJfZ2V0QnJva2VuTGluZXMiLCJfZ2V0VXNlciIsInNldFBhcmVudEN1c3RvbSIsIlNwcml0ZSIsImNvbXAiLCJwcm90b3R5cGUiLCJfZ2V0Qm9hcmQiLCJvYmoiLCJfZ2V0T3Bwb25lbnQiLCJfZ2V0U2VjdGlvbnMiLCJib2FyZENvbnRhaW5lciIsIl9nZXRMaW5lcyIsInJlZHVjZSIsImFjYyIsImN1ciIsImxpbmVzIiwicHVzaCIsIl9nZXRGaW5pc2hMaW5lcyIsIl9nZXRNeUZpbmlzaExpbmUiLCJfZ2V0T3Bwb25lbnRGaW5pc2hMaW5lIiwib3BwIiwiX2dldE15QnJva2VuTGluZSIsIl9nZXRPcHBvbmVudEJyb2tlbkxpbmUiLCJibG9ja0xpbmUiLCJvbkRyYWdTdGFydCIsImV2ZW50IiwiZHJhZ2dpbmciLCJzdGFydFBvaW50IiwiZGF0YSIsImdsb2JhbCIsImhvbWVQYXJlbnQiLCJwcmV2aW91c1BhcmVudCIsImRyYWdQb2ludCIsInNldFNlbGVjdGVkIiwib25EcmFnTW92ZSIsImUiLCJnbG9iYWxQb2ludCIsImNlbnRlciIsInRlc3RIaXQiLCJvbkRyYWdFbmQiLCJjb25zb2xlIiwibG9nIiwic2V0U29saWQiLCJvbkFkZGVkIiwiY29udGFpbmVyIiwib25SZW1vdmVkIiwiY2FsY3VsYXRlQm9hcmRDb250YWluZXIiLCJ2aWV3IiwiSCIsIlciLCJjcmVhdGVTZWN0aW9ucyIsInNlY3Rpb25zIiwiQXJyYXkiLCJtYXAiLCJzZWMiLCJjcmVhdGVHYW1lTGluZXMiLCJjcmVhdGVQYXducyIsImVsZW0iLCJzcHJpdGUiLCJjcmVhdGVGaW5pc2hMaW5lcyIsInVuIiwibnVtIiwidG9wIiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJjcmVhdGVCcm9rZW5MaW5lIiwieTAiLCJ5MSIsImJvYXJkIiwic2VjdGlvbkFyciIsImxpbmVBcnIiLCJ1c2VyUGF3bkFyciIsIm9wcG9uZW50UGF3bkFyciIsInNpZGVMaW5lQXJyIiwiYnJva2VuTGluZUFyciIsImJvYXJkUG5nIiwidXNlclBhd25QbmciLCJ1c2VyUGF3blNpZGVQbmciLCJ1c2VyUGF3blNlbGVjdGVkUG5nIiwib3Bwb25lbnRQYXduUG5nIiwib3Bwb25lbnRQYXduU2lkZVBuZyIsIm9wcG9uZW50UGF3blNlbGVjdGVkUG5nIiwibGluZVNlbGVjdGVkUG5nIiwidXNlclBhd25zIiwib3Bwb25lbnRQYXducyIsInV0aWxzIiwic2tpcEhlbGxvIiwiQXBwbGljYXRpb24iLCJjb25maWciLCJhbnRpYWxpYXMiLCJ0cmFuc3BhcmVudCIsInJlc29sdXRpb24iLCJzdHlsZSIsImRpc3BsYXkiLCJzZXR1cCIsIkJvYXJkQ29udGFpbmVyQ2xhc3MiLCJoZWxwZXJzIiwiY2h1bmsiLCJzbGljZSIsIm9yZGVyTGluZXMiLCJzdGFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJwaXhpTG9hZGVyIiwiYWRkIiwibG9hZCIsImNoZWNrIiwiYSIsInRlc3QiLCJzdWJzdHIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJvcGVyYSIsIlRPUCIsIkxFRlQiLCJNSURETEUiLCJTRUNfUEVSQyIsInRvcEhlaWdodFJhdGlvIiwibGVmdFdpZHRoUmF0aW8iLCJtaWRkbGVXaWR0aFJhdGlvIiwicGF3bkhlaWdodFJhdGlvIiwic2VjdGlvbldpZHRoUmF0aW8iLCJzZWN0aW9uSGVpZ2h0UmF0aW8iLCJsaW5lV2lkdGhSYXRpbyIsImxpbmVIZWlnaHRSYXRpbyIsInNlY3Rpb24iLCJzaWRlTGluZSIsInBhd25fc2lkZSIsImJyb2tlbl9saW5lIiwic2NhbGVUb1dpbmRvdyIsImNhbnZhcyIsImJhY2tncm91bmRDb2xvciIsInNjYWxlWCIsInNjYWxlWSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwibWluIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJvZHkiLCJ1YSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIkJPQVJEX0NPTlRBSU5FUiIsIkdBTUVfU0VDVElPTiIsIkdBTUVfTElORSIsIkZJTklTSF9MSU5FIiwiQlJPS0VOX0xJTkUiLCJHQU1FX1BBV04iLCJISVRfUkVDIiwiQlJPS0VOX0NPVU5URVIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7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QUNBOztBQUVBO0FBQ0E7O0FBRUEseUIiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2dhbWUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcbmltcG9ydCBpc01vYmlsZSBmcm9tICcuLi9pc01vYmlsZSdcclxuXHJcbmNsYXNzIEJvYXJkQ29udGFpbmVyIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXIsIG9wcG9uZW50KSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyXHJcbiAgICB0aGlzLm9wcG9uZW50ID0gb3Bwb25lbnRcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MuV1xyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MuSFxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkJPQVJEX0NPTlRBSU5FUlxyXG4gICAgdGhpcy5uYW1lID0gdHlwZXMuQk9BUkRfQ09OVEFJTkVSXHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVCb2FyZENvbnRhaW5lciAoYXBwKSB7XHJcbiAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XHJcblxyXG4gICAgaWYgKGlzTW9iaWxlKCkpIHtcclxuICAgICAgd2lkdGggPSBzY3JlZW4uYXZhaWxXaWR0aFxyXG4gICAgICBoZWlnaHQgPSBzY3JlZW4uYXZhaWxIZWlnaHRcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXBwLnJlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgbGV0IHJhdGlvID0gKDEwMCAqIGhlaWdodCkgLyByYXRpb3MuSCAvIDEwMCAvIGRldmljZVBpeGVsUmF0aW9cclxuICAgIFxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5XIC8gMTAwICogcmF0aW9cclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLkggLyAxMDAgKiByYXRpb1xyXG4gIFxyXG4gICAgdGhpcy5wb3NpdGlvbi5zZXQoMCwgMClcclxuICAgIHRoaXMuc2NhbGUuc2V0KHJhdGlvLCByYXRpbylcclxuICAgIC8vdGhpcy5waXZvdC5zZXQocmF0aW9zLlcgLyAyLCByYXRpb3MuSCAvIDIpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShCb2FyZENvbnRhaW5lcilcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgQnJva2VuTGluZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkJST0tFTl9MSU5FXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLmJyb2tlbl9saW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5icm9rZW5fbGluZS5oZWlnaHRcclxuICAgIHRoaXMuY291bnRTdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgZm9udFNpemU6IDQyLFxyXG4gICAgICBmaWxsOiBcIndoaXRlXCIsXHJcbiAgICAgIHN0cm9rZTogJyNmZjMzMDAnLFxyXG4gICAgICBzdHJva2VUaGlja25lc3M6IDEsXHJcbiAgICAgIGRyb3BTaGFkb3c6IHRydWUsXHJcbiAgICAgIGRyb3BTaGFkb3dDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgIGRyb3BTaGFkb3dCbHVyOiA0LFxyXG4gICAgICBkcm9wU2hhZG93RGlzdGFuY2U6IC0yLFxyXG4gICAgICBkcm9wU2hhZG93QW5nbGU6IDMwLFxyXG4gICAgICBkcm9wU2hhZG93QWxwaGE6IC42LFxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgY291bnQgPSBuZXcgUElYSS5UZXh0KDAsIHRoaXMuY291bnRTdHlsZSlcclxuICAgIGNvdW50LnhUeXBlID0gdHlwZXMuQlJPS0VOX0NPVU5URVJcclxuICAgIGNvdW50LmhlaWdodCA9IHJhdGlvcy5DT1VOVF9IRUlHSFRcclxuICAgIGNvdW50LnBpdm90LnNldChjb3VudC53aWR0aCAvIDIsIGNvdW50LmhlaWdodCAvIDIpXHJcbiAgICBjb3VudC5wb3NpdGlvbi5zZXQocmF0aW9zLmJyb2tlbl9saW5lLndpZHRoIC8gMiwgMClcclxuICAgIGNvdW50LnZpc2libGUgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuYWRkQ2hpbGQoY291bnQpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb3VudCAoKSB7XHJcbiAgICBjb25zdCBuZXdDb3VudCA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pLmxlbmd0aFxyXG4gICAgY29uc3QgY291bnRDaGlsZCA9IHRoaXMuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuQlJPS0VOX0NPVU5URVIpXHJcbiAgICBjb3VudENoaWxkLnRleHQgPSBuZXdDb3VudFxyXG4gICAgY291bnRDaGlsZC52aXNpYmxlID0gbmV3Q291bnRcclxuXHJcbiAgICBpZiAobmV3Q291bnQgJiYgdGhpcy5udW1iZXIgPT09IDApIHtcclxuICAgICAgdGhpcy5fbG9ja0dhbWVQYXducygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcmRlclBhd25zICgpIHtcclxuICAgIGNvbnN0IHBhd25zID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfUEFXTilcclxuICAgIHBhd25zLmZvckVhY2goKHBhd24sIGksIGFycikgPT4ge1xyXG4gICAgICBUd2Vlbk1heC50byhwYXduLnBvc2l0aW9uLCAuNSwgeyB4OiAwLCB5OiByYXRpb3MuQ09VTlRfSEVJR0hUIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMudXBkYXRlQ291bnQoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoQnJva2VuTGluZSlcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgRmluaXNoTGluZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkZJTklTSF9MSU5FXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLnNpZGVMaW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5zaWRlTGluZS5oZWlnaHRcclxuICAgIHRoaXMudG9TaXQgPSB0cnVlXHJcblxyXG4gICAgbGV0IGhpdFJlYyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcclxuICAgIGhpdFJlYy54VHlwZSA9IHR5cGVzLkhJVF9SRUNcclxuICAgIGhpdFJlYy5kcmF3UmVjdCgwLCAwLCByYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5zaWRlTGluZS5oZWlnaHQpXHJcbiAgICBoaXRSZWMudmlzaWJsZSA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5hZGRDaGlsZChoaXRSZWMpXHJcbiAgfVxyXG5cclxuICBvcmRlclBhd25zICgpIHtcclxuICAgIHRoaXMuY2hpbGRyZW5cclxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSAhPT0gdHlwZXMuSElUX1JFQylcclxuICAgICAgLmZvckVhY2goKHBhd24sIGksIGFycikgPT4ge1xyXG4gICAgICAgIHBhd24udW5TdWJzY3JpYmUoKVxyXG4gICAgICAgIHBhd24ucG9zaXRpb24uc2V0KDAsIHJhdGlvcy5wYXduX3NpZGUuaGVpZ2h0ICogaSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHRlc3RIaXQgKHBvaW50KSB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuSElUX1JFQylcclxuICAgIFxyXG4gICAgaWYgKFxyXG4gICAgICBwb2ludC54ID49IDBcclxuICAgICAgJiYgcG9pbnQueCA8PSB3aWR0aFxyXG4gICAgICAmJiBwb2ludC55ID49IDBcclxuICAgICAgJiYgcG9pbnQueSA8PSBoZWlnaHRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoRmluaXNoTGluZSlcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgR2FtZUxpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5HQU1FX0xJTkVcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MubGluZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MubGluZS5oZWlnaHRcclxuICAgIHRoaXMuYmxvY2tlZCA9IGZhbHNlXHJcblxyXG4gICAgbGV0IGhpdFJlYyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcclxuICAgIGhpdFJlYy54VHlwZSA9IHR5cGVzLkhJVF9SRUNcclxuICAgIGhpdFJlYy5kcmF3UmVjdCgwLCAwLCByYXRpb3MubGluZS53aWR0aCwgcmF0aW9zLmxpbmUuaGVpZ2h0KVxyXG4gICAgaGl0UmVjLnZpc2libGUgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuYWRkQ2hpbGQoaGl0UmVjKVxyXG4gIH1cclxuXHJcbiAgb3JkZXJQYXducyAoYXJncyA9IHt9KSB7XHJcbiAgICBjb25zdCBwYXduQXJyID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubmFtZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKVxyXG4gICAgY29uc3QgeyBmYWtlLCByZXZlcnNlID0gdGhpcy5wYXJlbnQubnVtYmVyID4gMSB9ID0gYXJnc1xyXG4gICAgY29uc3QgbGVuZ3RoID0gZmFrZSA/IHBhd25BcnIubGVuZ3RoICsgMSA6IHBhd25BcnIubGVuZ3RoXHJcblxyXG4gICAgbGV0IHJvdyA9IHJhdGlvcy5saW5lLmhlaWdodCAvIGxlbmd0aFxyXG5cclxuICAgIGlmIChyb3cgPCByYXRpb3MuUEFXTikge1xyXG4gICAgICByb3cgPSByb3cgLSAoKHJhdGlvcy5QQVdOIC0gcm93KSAvIGxlbmd0aClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdyA9IHJhdGlvcy5QQVdOXHJcbiAgICB9XHJcblxyXG4gICAgcGF3bkFyci5mb3JFYWNoKChwYXduLCBpLCBhcnIpID0+IHtcclxuICAgICAgcGF3bi51blN1YnNjcmliZSgpXHJcbiAgICAgIHJldmVyc2VcclxuICAgICAgICAgID8gVHdlZW5NYXgudG8ocGF3bi5wb3NpdGlvbiwgLjUsIHsgeDogMCwgeTogcmF0aW9zLmxpbmUuaGVpZ2h0IC0gKHJvdyAqIGkpIC0gcmF0aW9zLlBBV04gfSlcclxuICAgICAgICAgIDogVHdlZW5NYXgudG8ocGF3bi5wb3NpdGlvbiwgLjUsIHsgeDogMCwgeTogcm93ICogaSB9KVxyXG5cclxuICAgICAgaWYgKGkgKyAxID09PSBhcnIubGVuZ3RoICYmIHBhd24uaXNVc2VyICYmICF0aGlzLmJsb2NrZWQpIHtcclxuICAgICAgICBwYXduLnN1YnNjcmliZSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy50b1NpdCA9IHRydWVcclxuXHJcbiAgICBpZiAocGF3bkFyci5sZW5ndGggPT09IDEgJiYgIXBhd25BcnJbMF0uaXNVc2VyKSB7XHJcbiAgICAgIHRoaXMudG9IaXQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhd25BcnIubGVuZ3RoID4gMSAmJiAhcGF3bkFyclswXS5pc1VzZXIpIHtcclxuICAgICAgdGhpcy50b1NpdCA9IGZhbHNlXHJcbiAgICAgIHRoaXMudG9IaXQgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGVzdEhpdCAocG9pbnQpIHtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5ISVRfUkVDKVxyXG5cclxuICAgIGlmIChcclxuICAgICAgcG9pbnQueCA+PSAwXHJcbiAgICAgICYmIHBvaW50LnggPD0gd2lkdGhcclxuICAgICAgJiYgcG9pbnQueSA+PSAwXHJcbiAgICAgICYmIHBvaW50LnkgPD0gaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGJsb2NrTGluZSAoKSB7XHJcbiAgICB0aGlzLmJsb2NrZWQgPSB0cnVlXHJcbiAgICB0aGlzLm9yZGVyUGF3bnMoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoR2FtZUxpbmUpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEdhbWVTZWN0aW9uIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuR0FNRV9TRUNUSU9OXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLnNlY3Rpb24ud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLnNlY3Rpb24uaGVpZ2h0XHJcbiAgfVxyXG5cclxuICBvcmRlckxpbmVzICgpIHtcclxuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5cclxuXHJcbiAgICBpZiAodGhpcy5udW1iZXIgPiAxKSB7XHJcbiAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ucmV2ZXJzZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgobGluZSwgbGluZUluZGV4LCBhcnIpID0+IHtcclxuICAgICAgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLmxpbmUud2lkdGggKiAoYXJyLmxlbmd0aCAtIGxpbmVJbmRleCAtIDEpLCAwKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEdhbWVTZWN0aW9uKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgZnVuY3Rpb25zIGZyb20gJy4uL2Z1bmN0aW9ucydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5jbGFzcyBQYXduIGV4dGVuZHMgUElYSS5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhd25PYmosIGNvbG9yLCBpc1VzZXIpIHtcclxuICAgIHN1cGVyKFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNvbGlkXS50ZXh0dXJlKVxyXG5cclxuICAgIHRoaXMuc29saWRUZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW3Bhd25PYmouc29saWRdLnRleHR1cmVcclxuICAgIHRoaXMuc2lkZVRleHR1cmUgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zaWRlXS50ZXh0dXJlXHJcbiAgICB0aGlzLnNlbGVjdGVkVGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNlbGVjdGVkXS50ZXh0dXJlXHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcclxuICAgIHRoaXMuaXNVc2VyID0gaXNVc2VyXHJcbiAgICB0aGlzLmN1cnNvciA9ICdwb2ludGVyJ1xyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkdBTUVfUEFXTlxyXG4gICAgdGhpcy5vbignYWRkZWQnLCBmdW5jdGlvbnMub25BZGRlZClcclxuICAgIHRoaXMub24oJ3JlbW92ZWQnLCBmdW5jdGlvbnMub25SZW1vdmVkKVxyXG4gIH1cclxuXHJcbiAgc2V0UGFyZW50Q3VzdG9tIChuZXdQYXJlbnQpIHtcclxuICAgIGlmIChuZXdQYXJlbnQudG9IaXQpIHtcclxuICAgICAgbmV3UGFyZW50LnRvSGl0ID0gZmFsc2VcclxuICAgICAgbmV3UGFyZW50LnRvU2l0ID0gdHJ1ZVxyXG4gICAgICBcclxuICAgICAgY29uc3QgaGl0dGVkUGF3biA9IG5ld1BhcmVudC5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pXHJcbiAgICAgIGhpdHRlZFBhd24uZ29Ub0Jyb2tlbkxpbmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdQYXJlbnQueFR5cGUgPT09IHR5cGVzLkZJTklTSF9MSU5FKSB7XHJcbiAgICAgIHRoaXMuc2V0U2lkZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBuZXdQYXJlbnQudG9Mb2NhbCh0aGlzLmdldEdsb2JhbFBvc2l0aW9uKCkpXHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSBuZXdQb3NpdGlvbi54XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSBuZXdQb3NpdGlvbi55XHJcbiAgICB0aGlzLnNldFBhcmVudChuZXdQYXJlbnQpXHJcbiAgfVxyXG5cclxuICBzZXRTb2xpZCAoKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0aGlzLnNvbGlkVGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc2V0U2lkZSAoKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0aGlzLnNpZGVUZXh0dXJlXHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZCAoKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0aGlzLnNlbGVjdGVkVGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlICgpIHtcclxuICAgIGZ1bmN0aW9ucy5zdWJzY3JpYmUodGhpcylcclxuICB9XHJcblxyXG4gIHVuU3Vic2NyaWJlICgpIHtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgZ29Ub0Jyb2tlbkxpbmUgKCkge1xyXG4gICAgY29uc3QgYnJva2VuTGluZXMgPSB0aGlzLl9nZXRCcm9rZW5MaW5lcygpXHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5fZ2V0VXNlcigpXHJcbiAgICB1c2VyLmNvbG9yID09PSB0aGlzLmNvbG9yXHJcbiAgICAgID8gdGhpcy5zZXRQYXJlbnRDdXN0b20oYnJva2VuTGluZXNbMV0pXHJcbiAgICAgIDogdGhpcy5zZXRQYXJlbnRDdXN0b20oYnJva2VuTGluZXNbMF0pXHJcbiAgfVxyXG5cclxuICBnb1RvRmluaXNoTGluZSAoKSB7XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKFBhd24pXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUGF3biB9IGZyb20gJy4vUGF3bi5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1lU2VjdGlvbiB9IGZyb20gJy4vR2FtZVNlY3Rpb24uY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtZUxpbmUgfSBmcm9tICcuL0dhbWVMaW5lLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmlzaExpbmUgfSBmcm9tICcuL0ZpbmlzaExpbmUuY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnJva2VuTGluZSB9IGZyb20gJy4vQnJva2VuTGluZS5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb2FyZENvbnRhaW5lciB9IGZyb20gJy4vQm9hcmRDb250YWluZXIuY2xhc3MnIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29tcCkgPT4ge1xyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRCb2FyZCA9IGZ1bmN0aW9uIChvYmogPSB0aGlzKSB7XHJcbiAgICBpZiAob2JqLnhUeXBlID09PSB0eXBlcy5CT0FSRF9DT05UQUlORVIpIHtcclxuICAgICAgcmV0dXJuIG9ialxyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKCFvYmoucGFyZW50KSB7XHJcbiAgICAgIHJldHVybiBvYmouY2hpbGRyZW5bMF1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB0aGlzLl9nZXRCb2FyZChvYmoucGFyZW50KVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQoKS51c2VyXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0T3Bwb25lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQoKS5vcHBvbmVudFxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldFNlY3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1NFQ1RJT04pXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0TGluZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0U2VjdGlvbnMoKS5yZWR1Y2UoKGFjYywgY3VyLCBpLCBhcnIpID0+IHtcclxuICAgICAgY29uc3QgbGluZXMgPSBjdXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX0xJTkUpXHJcblxyXG4gICAgICBhY2MucHVzaCguLi5saW5lcylcclxuXHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIFtdKSAgIFxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldEZpbmlzaExpbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5GSU5JU0hfTElORSlcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRNeUZpbmlzaExpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5fZ2V0VXNlcigpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0RmluaXNoTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IHVzZXIubnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE9wcG9uZW50RmluaXNoTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG9wcCA9IHRoaXMuX2dldE9wcG9uZW50KClcclxuICAgIHJldHVybiB0aGlzLl9nZXRGaW5pc2hMaW5lcygpLmZpbmQobGluZSA9PiBsaW5lLm51bWJlciA9PT0gb3BwLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRCcm9rZW5MaW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuQlJPS0VOX0xJTkUpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0TXlCcm9rZW5MaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuX2dldFVzZXIoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJyb2tlbkxpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSB1c2VyLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRPcHBvbmVudEJyb2tlbkxpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBvcHAgPSB0aGlzLl9nZXRPcHBvbmVudCgpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0QnJva2VuTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IG9wcC5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fbG9ja0dhbWVQYXducyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5fZ2V0TGluZXMoKVxyXG4gICAgbGluZXNcclxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9MSU5FKVxyXG4gICAgICAuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICBsaW5lLmJsb2NrTGluZSgpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcFxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdTdGFydChldmVudCkge1xyXG4gIGlmICghdGhpcy5kcmFnZ2luZykge1xyXG4gICAgdGhpcy5zdGFydFBvaW50ID0geyAuLi5ldmVudC5kYXRhLmdsb2JhbCB9XHJcbiAgICB0aGlzLmhvbWVQYXJlbnQgPSB0aGlzLnBhcmVudFxyXG4gICAgdGhpcy5wcmV2aW91c1BhcmVudCA9IHRoaXMucGFyZW50XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5kcmFnUG9pbnQgPSB0aGlzLmdldEdsb2JhbFBvc2l0aW9uKClcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgdGhpcy5zZXRQYXJlbnRDdXN0b20oYm9hcmRDb250YWluZXIpXHJcbiAgICB0aGlzLnNldFNlbGVjdGVkKClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdNb3ZlKGUpIHtcclxuICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICBcclxuICAgIHRoaXMuZ2xvYmFsUG9pbnQgPSB7IHg6IHRoaXMuZHJhZ1BvaW50LnggLSAodGhpcy5zdGFydFBvaW50LnggLSBlLmRhdGEuZ2xvYmFsLngpLCB5OiB0aGlzLmRyYWdQb2ludC55IC0gKHRoaXMuc3RhcnRQb2ludC55IC0gZS5kYXRhLmdsb2JhbC55KSB9XHJcblxyXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSB0aGlzLnBhcmVudC50b0xvY2FsKHRoaXMuZ2xvYmFsUG9pbnQpXHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSBuZXdQb3NpdGlvbi54XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSBuZXdQb3NpdGlvbi55XHJcblxyXG4gICAgbmV3UG9zaXRpb24ueCArPSB0aGlzLndpZHRoIC8gMlxyXG4gICAgbmV3UG9zaXRpb24ueSArPSB0aGlzLmhlaWdodCAvIDJcclxuXHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSB0aGlzLl9nZXRMaW5lcygpLmZpbmQobGluZSA9PiB7XHJcbiAgICAgIGxldCBjZW50ZXIgPSBsaW5lLnRvTG9jYWwodGhpcy5nbG9iYWxQb2ludClcclxuICAgICAgY2VudGVyLnggKz0gdGhpcy53aWR0aCAvIDJcclxuICAgICAgY2VudGVyLnkgKz0gdGhpcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgICByZXR1cm4gbGluZS50ZXN0SGl0KGNlbnRlcilcclxuICAgIH0pIHx8IGJvYXJkQ29udGFpbmVyXHJcblxyXG4gICAgaWYgKG5ld1BhcmVudC5uYW1lICE9PSB0aGlzLnByZXZpb3VzUGFyZW50Lm5hbWUpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1BhcmVudC5vcmRlclBhd25zICYmIHRoaXMucHJldmlvdXNQYXJlbnQub3JkZXJQYXducygpXHJcblxyXG4gICAgICBpZiAobmV3UGFyZW50Lm9yZGVyUGF3bnMgJiYgKG5ld1BhcmVudC50b0hpdCB8fCBuZXdQYXJlbnQudG9TaXQpKSB7XHJcbiAgICAgICAgbmV3UGFyZW50Lm9yZGVyUGF3bnMoeyBmYWtlOiB0cnVlIH0pXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1BhcmVudCA9IG5ld1BhcmVudFxyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnRW5kKCkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2VcclxuICAgIFxyXG4gICAgbGV0IGxpbmVzID0gdGhpcy5fZ2V0TGluZXMoKVxyXG4gICAgbGluZXMucHVzaCh0aGlzLl9nZXRNeUZpbmlzaExpbmUoKSlcclxuXHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSBsaW5lcy5maW5kKGxpbmUgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhsaW5lKVxyXG4gICAgICBsZXQgY2VudGVyID0gbGluZS50b0xvY2FsKHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKSlcclxuICAgICAgY2VudGVyLnggKz0gdGhpcy53aWR0aCAvIDJcclxuICAgICAgY2VudGVyLnkgKz0gdGhpcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgICByZXR1cm4gbGluZS50ZXN0SGl0KGNlbnRlcikgJiYgKGxpbmUudG9IaXQgfHwgbGluZS50b1NpdClcclxuICAgIH0pIHx8IHRoaXMuaG9tZVBhcmVudFxyXG5cclxuICAgIHRoaXMuc2V0U29saWQoKVxyXG4gICAgdGhpcy5zZXRQYXJlbnRDdXN0b20obmV3UGFyZW50KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uQWRkZWQgKGNvbnRhaW5lcikge1xyXG4gIGNvbnRhaW5lci5vcmRlclBhd25zICYmIGNvbnRhaW5lci5vcmRlclBhd25zKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVtb3ZlZCAoY29udGFpbmVyKSB7XHJcbiAgY29udGFpbmVyLm9yZGVyUGF3bnMgJiYgY29udGFpbmVyLm9yZGVyUGF3bnMoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlIChvYmopIHtcclxuICBvYmouaW50ZXJhY3RpdmUgPSB0cnVlXHJcbiAgb2JqLm9uKCdtb3VzZWRvd24nLCBvbkRyYWdTdGFydClcclxuICAgIC5vbigndG91Y2hzdGFydCcsIG9uRHJhZ1N0YXJ0KVxyXG4gICAgLm9uKCdtb3VzZXVwJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCdtb3VzZXVwb3V0c2lkZScsIG9uRHJhZ0VuZClcclxuICAgIC5vbigndG91Y2hlbmQnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ3RvdWNoZW5kb3V0c2lkZScsIG9uRHJhZ0VuZClcclxuICAgIC5vbignbW91c2Vtb3ZlJywgb25EcmFnTW92ZSlcclxuICAgIC5vbigndG91Y2htb3ZlJywgb25EcmFnTW92ZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuU3Vic2NyaWJlIChvYmopIHtcclxuICBvYmouaW50ZXJhY3RpdmUgPSB0cnVlXHJcbiAgb2JqLm9uKCdtb3VzZWRvd24nLCAoKSA9PiB7fSlcclxuICAgIC5vbigndG91Y2hzdGFydCcsICgpID0+IHt9KVxyXG4gICAgLm9uKCdtb3VzZXVwJywgKCkgPT4ge30pXHJcbiAgICAub24oJ21vdXNldXBvdXRzaWRlJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNoZW5kJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNoZW5kb3V0c2lkZScsICgpID0+IHt9KVxyXG4gICAgLm9uKCdtb3VzZW1vdmUnLCAoKSA9PiB7fSlcclxuICAgIC5vbigndG91Y2htb3ZlJywgKCkgPT4ge30pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCb2FyZENvbnRhaW5lciAoYm9hcmRDb250YWluZXIsIGFwcCwgcmF0aW9zKSB7XHJcbiAgbGV0IHJhdGlvID0gKDEwMCAqIGFwcC5yZW5kZXJlci52aWV3LmhlaWdodCkgLyByYXRpb3MuSCAvIDEwMFxyXG5cclxuICBib2FyZENvbnRhaW5lci53aWR0aCA9IHJhdGlvcy5XIC8gMTAwICogcmF0aW9cclxuICBib2FyZENvbnRhaW5lci5oZWlnaHQgPSByYXRpb3MuSCAvIDEwMCAqIHJhdGlvXHJcblxyXG4gIGJvYXJkQ29udGFpbmVyLnBvc2l0aW9uLnNldChhcHAucmVuZGVyZXIudmlldy53aWR0aCAvIDIsIGFwcC5yZW5kZXJlci52aWV3LmhlaWdodCAvIDIpXHJcbiAgYm9hcmRDb250YWluZXIuc2NhbGUuc2V0KHJhdGlvLCByYXRpbylcclxuICBib2FyZENvbnRhaW5lci5waXZvdC5zZXQocmF0aW9zLlcgLyAyLCByYXRpb3MuSCAvIDIpXHJcbn0iLCJpbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi9yYXRpb3MnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcbmltcG9ydCB7XHJcbiAgUGF3bixcclxuICBHYW1lU2VjdGlvbixcclxuICBHYW1lTGluZSxcclxuICBGaW5pc2hMaW5lLFxyXG4gIEJyb2tlbkxpbmVcclxufSBmcm9tICcuL2NsYXNzZXMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VjdGlvbnMgKCkge1xyXG4gIGNvbnN0IHNlY3Rpb25zID0gbmV3IEFycmF5KDQpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb25zLm1hcCgoc2VjLCBpKSA9PiB7XHJcbiAgICBzZWMgPSBuZXcgR2FtZVNlY3Rpb24oKVxyXG4gICAgc2VjLm5hbWUgPSB0eXBlcy5HQU1FX1NFQ1RJT04gKyAnXycgKyBpXHJcbiAgICBzZWMubnVtYmVyID0gaVxyXG4gICAgXHJcbiAgICBpZiAoaSA9PT0gMCkgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCArIHJhdGlvcy5zZWN0aW9uLndpZHRoICsgcmF0aW9zLk1JRERMRSwgcmF0aW9zLlRPUClcclxuICAgIGlmIChpID09PSAxKSBzZWMucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZULCByYXRpb3MuVE9QKVxyXG4gICAgaWYgKGkgPT09IDIpIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQsIHJhdGlvcy5IIC0gcmF0aW9zLlRPUCAtIHJhdGlvcy5zZWN0aW9uLmhlaWdodClcclxuICAgIGlmIChpID09PSAzKSBzZWMucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZUICsgcmF0aW9zLnNlY3Rpb24ud2lkdGggKyByYXRpb3MuTUlERExFLCByYXRpb3MuSCAtIHJhdGlvcy5UT1AgLSByYXRpb3Muc2VjdGlvbi5oZWlnaHQpXHJcblxyXG4gICAgcmV0dXJuIHNlY1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lTGluZXMgKCkge1xyXG4gIGNvbnN0IGxpbmVzID0gbmV3IEFycmF5KDI0KS5maWxsKDApXHJcblxyXG4gIHJldHVybiBsaW5lcy5tYXAoKGxpbmUsIGksIGFycikgPT4ge1xyXG4gICAgbGluZSA9IG5ldyBHYW1lTGluZSgpXHJcbiAgICBsaW5lLm5hbWUgPSB0eXBlcy5HQU1FX0xJTkUgKyAnXycgKyBpXHJcbiAgICBsaW5lLm51bWJlciA9IGlcclxuXHJcbiAgICByZXR1cm4gbGluZVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXducyAocGF3bk9iaiwgY29sb3IsIGlzVXNlciA9IGZhbHNlLCBjb3VudCA9IDE1KSB7XHJcbiAgcmV0dXJuIG5ldyBBcnJheShjb3VudCkuZmlsbCgwKS5tYXAoKGVsZW0sIGkpID0+IHtcclxuICAgIGNvbnN0IHNwcml0ZSA9IG5ldyBQYXduKHBhd25PYmosIGNvbG9yLCBpc1VzZXIpXHJcbiAgICBzcHJpdGUubmFtZSA9IGAke2NvbG9yfV8ke3R5cGVzLkdBTUVfUEFXTn1fJHtpfWBcclxuICAgIHNwcml0ZS5udW1iZXIgPSBpXHJcblxyXG4gICAgcmV0dXJuIHNwcml0ZVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaW5pc2hMaW5lcyAodW4sIG9uKSB7XHJcbiAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXkoMikuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gbGluZXMubWFwKChsaW5lLCBpLCBhcnIpID0+IHtcclxuICAgIGxldCBudW0gPSBpID09PSAxID8gb24gOiB1blxyXG5cclxuICAgIGxpbmUgPSBuZXcgRmluaXNoTGluZSgpXHJcbiAgICBsaW5lLm5hbWUgPSB0eXBlcy5GSU5JU0hfTElORSArICdfJyArIG51bVxyXG4gICAgbGluZS5udW1iZXIgPSBudW1cclxuXHJcbiAgICBpZiAoaSA9PT0gMCkgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLlcgLSByYXRpb3Muc2lkZUxpbmUuc2lkZSAtIHJhdGlvcy5zaWRlTGluZS53aWR0aCwgcmF0aW9zLnNpZGVMaW5lLnRvcClcclxuICAgIGlmIChpID09PSAxKSB7XHJcbiAgICAgIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5XIC0gcmF0aW9zLnNpZGVMaW5lLnNpZGUgLSByYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5IIC0gcmF0aW9zLlRPUCAtIHJhdGlvcy5zaWRlTGluZS5oZWlnaHQpXHJcbiAgICAgIGxpbmUucm90YXRpb24gPSBNYXRoLlBJXHJcbiAgICAgIGxpbmUucGl2b3Quc2V0KHJhdGlvcy5zaWRlTGluZS53aWR0aCwgcmF0aW9zLnNpZGVMaW5lLmhlaWdodClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCcm9rZW5MaW5lICh1biwgb24pIHtcclxuICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgyKS5maWxsKDApXHJcblxyXG4gIHJldHVybiBsaW5lcy5tYXAoKGxpbmUsIGksIGFycikgPT4ge1xyXG4gICAgbGV0IG51bSA9IGkgPT09IDAgPyBvbiA6IHVuXHJcblxyXG4gICAgbGluZSA9IG5ldyBCcm9rZW5MaW5lKClcclxuICAgIGxpbmUubmFtZSA9IHR5cGVzLkJST0tFTl9MSU5FICsgJ18nICsgbnVtXHJcbiAgICBsaW5lLm51bWJlciA9IG51bVxyXG5cclxuICAgIGlmIChpID09PSAwKSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuYnJva2VuX2xpbmUueCwgcmF0aW9zLmJyb2tlbl9saW5lLnkwKVxyXG4gICAgaWYgKGkgPT09IDEpIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5icm9rZW5fbGluZS54LCByYXRpb3MuYnJva2VuX2xpbmUueTEpXHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJ1xyXG5pbXBvcnQgeyBCb2FyZENvbnRhaW5lciBhcyBCb2FyZENvbnRhaW5lckNsYXNzIH0gZnJvbSAnLi9jbGFzc2VzJ1xyXG5pbXBvcnQgc2NhbGVUb1dpbmRvdyBmcm9tICcuL3NjYWxlVG9XaW5kb3cnXHJcblxyXG5sZXQgYm9hcmRDb250YWluZXIsIGJvYXJkLCBzZWN0aW9uQXJyID0gW10sIGxpbmVBcnIgPSBbXSwgdXNlclBhd25BcnIgPSBbXSwgb3Bwb25lbnRQYXduQXJyID0gW10sIHNpZGVMaW5lQXJyID0gW10sIGJyb2tlbkxpbmVBcnIgPSBbXVxyXG5cclxuY29uc3QgdXNlciA9IHtcclxuICBjb2xvcjogJ3doaXRlJyxcclxuICBib2FyZDogW1xyXG4gICAgMiwgMCwgMCwgMCwgMCwgMCxcclxuICAgIDAsIDAsIDAsIDAsIDAsIDUsXHJcbiAgICAwLCAwLCAwLCAwLCAzLCAwLFxyXG4gICAgNSwgMCwgMCwgMCwgMCwgMFxyXG4gIF0sXHJcbiAgbnVtYmVyOiAwXHJcbn1cclxuXHJcbmNvbnN0IG9wcG9uZW50ID0ge1xyXG4gIGNvbG9yOiAnYmxhY2snLFxyXG4gIGJvYXJkOiBbXHJcbiAgICAwLCAwLCAwLCAwLCAwLCA1LFxyXG4gICAgMCwgMSwgMCwgMCwgMCwgMCxcclxuICAgIDUsIDAsIDAsIDAsIDAsIDAsXHJcbiAgICAwLCAwLCAwLCAwLCAwLCAxXHJcbiAgXSxcclxuICBudW1iZXI6IDFcclxufVxyXG5cclxuY29uc3QgYm9hcmRQbmcgPSAnYm9hcmQucG5nJ1xyXG5jb25zdCB1c2VyUGF3blBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd24ucG5nYFxyXG5jb25zdCB1c2VyUGF3blNpZGVQbmcgPSBgJHt1c2VyLmNvbG9yfV9wYXduMi5wbmdgXHJcbmNvbnN0IHVzZXJQYXduU2VsZWN0ZWRQbmcgPSBgJHt1c2VyLmNvbG9yfV9wYXduX3NlbGVjdGVkLnBuZ2BcclxuY29uc3Qgb3Bwb25lbnRQYXduUG5nID0gYCR7b3Bwb25lbnQuY29sb3J9X3Bhd24ucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25TaWRlUG5nID0gYCR7b3Bwb25lbnQuY29sb3J9X3Bhd24yLnBuZ2BcclxuY29uc3Qgb3Bwb25lbnRQYXduU2VsZWN0ZWRQbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bl9zZWxlY3RlZC5wbmdgXHJcbmNvbnN0IGxpbmVTZWxlY3RlZFBuZyA9ICdsaW5lX3NlbGVjdGVkLnBuZydcclxuXHJcbmNvbnN0IHVzZXJQYXducyA9IHtcclxuICBzb2xpZDogdXNlclBhd25QbmcsXHJcbiAgc2lkZTogdXNlclBhd25TaWRlUG5nLFxyXG4gIHNlbGVjdGVkOiB1c2VyUGF3blNlbGVjdGVkUG5nXHJcbn1cclxuXHJcbmNvbnN0IG9wcG9uZW50UGF3bnMgPSB7XHJcbiAgc29saWQ6IG9wcG9uZW50UGF3blBuZyxcclxuICBzaWRlOiBvcHBvbmVudFBhd25TaWRlUG5nLFxyXG4gIHNlbGVjdGVkOiBvcHBvbmVudFBhd25TZWxlY3RlZFBuZ1xyXG59XHJcblxyXG5QSVhJLnV0aWxzLnNraXBIZWxsbygpXHJcblxyXG5sZXQgQXBwbGljYXRpb24gPSBQSVhJLkFwcGxpY2F0aW9uLFxyXG4gICAgbG9hZGVyID0gUElYSS5sb2FkZXIsXHJcbiAgICByZXNvdXJjZXMgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXMsXHJcbiAgICBTcHJpdGUgPSBQSVhJLlNwcml0ZVxyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgdHJhbnNwYXJlbnQ6IGZhbHNlLFxyXG4gIHJlc29sdXRpb246IGRldmljZVBpeGVsUmF0aW9cclxufVxyXG5cclxubGV0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbihjb25maWcpXHJcbmFwcC5yZW5kZXJlci52aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXHJcbmFwcC5yZW5kZXJlci52aWV3LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuLy9hcHAucmVuZGVyZXIuYXV0b1Jlc2l6ZSA9IHRydWVcclxuXHJcbi8vIFNFVFVQXHJcbmNvbnN0IHNldHVwID0gKCkgPT4ge1xyXG4gIGJvYXJkQ29udGFpbmVyID0gbmV3IEJvYXJkQ29udGFpbmVyQ2xhc3ModXNlciwgb3Bwb25lbnQpXHJcblxyXG4gIGJvYXJkID0gbmV3IFNwcml0ZShyZXNvdXJjZXNbYm9hcmRQbmddLnRleHR1cmUpXHJcbiAgYm9hcmRDb250YWluZXIuYWRkQ2hpbGQoYm9hcmQpXHJcbiAgXHJcbiAgc2VjdGlvbkFyciA9IGhlbHBlcnMuY3JlYXRlU2VjdGlvbnMoKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKC4uLnNlY3Rpb25BcnIpXHJcblxyXG4gIGxpbmVBcnIgPSBoZWxwZXJzLmNyZWF0ZUdhbWVMaW5lcygpXHJcbiAgc2VjdGlvbkFyci5mb3JFYWNoKChzZWMsIGksIGFycikgPT4ge1xyXG4gICAgY29uc3QgY2h1bmsgPSBsaW5lQXJyLmxlbmd0aCAvIGFyci5sZW5ndGhcclxuICAgIHNlYy5hZGRDaGlsZChcclxuICAgICAgLi4ubGluZUFyci5zbGljZShjaHVuayAqIGksIGNodW5rICogKGkgKyAxKSlcclxuICAgIClcclxuXHJcbiAgICBzZWMub3JkZXJMaW5lcygpXHJcbiAgfSlcclxuXHJcbiAgc2lkZUxpbmVBcnIgPSBoZWxwZXJzLmNyZWF0ZUZpbmlzaExpbmVzKHVzZXIubnVtYmVyLCBvcHBvbmVudC5udW1iZXIpXHJcbiAgYm9hcmRDb250YWluZXIuYWRkQ2hpbGQoLi4uc2lkZUxpbmVBcnIpXHJcblxyXG4gIGJyb2tlbkxpbmVBcnIgPSBoZWxwZXJzLmNyZWF0ZUJyb2tlbkxpbmUodXNlci5udW1iZXIsIG9wcG9uZW50Lm51bWJlcilcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZCguLi5icm9rZW5MaW5lQXJyKVxyXG5cclxuICB1c2VyUGF3bkFyciA9IGhlbHBlcnMuY3JlYXRlUGF3bnModXNlclBhd25zLCB1c2VyLmNvbG9yLCB0cnVlLCAxNSlcclxuICBvcHBvbmVudFBhd25BcnIgPSBoZWxwZXJzLmNyZWF0ZVBhd25zKG9wcG9uZW50UGF3bnMsIG9wcG9uZW50LmNvbG9yLCBmYWxzZSwgMTUpXHJcblxyXG4gIGxpbmVBcnIucmVkdWNlKChhY2MsIGN1ciwgaSwgYXJyKSA9PiB7XHJcbiAgICBpZiAodXNlci5ib2FyZFtpXSA+IDApIHtcclxuICAgICAgY3VyLmFkZENoaWxkKC4uLnVzZXJQYXduQXJyLnNsaWNlKGFjYy51c2VyLCBhY2MudXNlciArIHVzZXIuYm9hcmRbaV0pKVxyXG4gICAgICBhY2MudXNlciArPSB1c2VyLmJvYXJkW2ldXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wcG9uZW50LmJvYXJkW2ldID4gMCkge1xyXG4gICAgICBjdXIuYWRkQ2hpbGQoLi4ub3Bwb25lbnRQYXduQXJyLnNsaWNlKGFjYy5vcHBvbmVudCwgYWNjLm9wcG9uZW50ICsgb3Bwb25lbnQuYm9hcmRbaV0pKVxyXG4gICAgICBhY2Mub3Bwb25lbnQgKz0gb3Bwb25lbnQuYm9hcmRbaV1cclxuICAgIH1cclxuXHJcbiAgICBjdXIub3JkZXJQYXducygpXHJcblxyXG4gICAgcmV0dXJuIGFjY1xyXG4gIH0sIHsgdXNlcjogMCwgb3Bwb25lbnQ6IDAgfSlcclxuXHJcbiAgYm9hcmRDb250YWluZXIuY2FsY3VsYXRlQm9hcmRDb250YWluZXIoYXBwKVxyXG5cclxuICBhcHAuc3RhZ2UuYWRkQ2hpbGQoYm9hcmRDb250YWluZXIpXHJcblxyXG4gIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcclxuICAgIGFwcC5yZW5kZXJlci5yZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgIGJvYXJkQ29udGFpbmVyLmNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyKGFwcClcclxuICB9XHJcbiAgXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSlcclxuICBcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmFwcGVuZENoaWxkKGFwcC52aWV3KVxyXG4gIFxyXG4gIHJlc2l6ZSgpXHJcbn1cclxuXHJcbmNvbnN0IHBpeGlMb2FkZXIgPSAoKSA9PiB7XHJcbiAgbG9hZGVyXHJcbiAgICAuYWRkKFtcclxuICAgICAgYm9hcmRQbmcsIFxyXG4gICAgICB1c2VyUGF3blBuZywgXHJcbiAgICAgIG9wcG9uZW50UGF3blBuZyxcclxuICAgICAgdXNlclBhd25TaWRlUG5nLFxyXG4gICAgICBvcHBvbmVudFBhd25TaWRlUG5nLFxyXG4gICAgICB1c2VyUGF3blNlbGVjdGVkUG5nLFxyXG4gICAgICBvcHBvbmVudFBhd25TZWxlY3RlZFBuZyxcclxuICAgICAgbGluZVNlbGVjdGVkUG5nXHJcbiAgICBdKVxyXG4gICAgLmxvYWQoc2V0dXApXHJcbn1cclxuXHJcbnBpeGlMb2FkZXIoKVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICB2YXIgY2hlY2sgPSBmYWxzZTtcclxuICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gIHJldHVybiBjaGVjaztcclxufTsiLCJleHBvcnQgY29uc3QgSCA9IDc2OFxyXG5leHBvcnQgY29uc3QgVyA9IDExNDdcclxuZXhwb3J0IGNvbnN0IFRPUCA9IDIwXHJcbmV4cG9ydCBjb25zdCBMRUZUID0gMTA4XHJcbmV4cG9ydCBjb25zdCBNSURETEUgPSA4MlxyXG5leHBvcnQgY29uc3QgUEFXTiA9IDcxXHJcbmV4cG9ydCBjb25zdCBTRUNfUEVSQyA9IDg1XHJcbmV4cG9ydCBjb25zdCBDT1VOVF9IRUlHSFQgPSA1MFxyXG5cclxuZXhwb3J0IGNvbnN0IHRvcEhlaWdodFJhdGlvID0gVE9QICogMTAwIC8gSFxyXG5leHBvcnQgY29uc3QgbGVmdFdpZHRoUmF0aW8gPSBMRUZUICogMTAwIC8gV1xyXG5leHBvcnQgY29uc3QgbWlkZGxlV2lkdGhSYXRpbyA9IE1JRERMRSAqIDEwMCAvIFdcclxuZXhwb3J0IGNvbnN0IHBhd25IZWlnaHRSYXRpbyA9IFBBV04gKiAxMDAgLyBIXHJcblxyXG5leHBvcnQgY29uc3Qgc2VjdGlvbldpZHRoUmF0aW8gPSAoKFcgLSAoTEVGVCAqIDIpIC0gTUlERExFKSAvIDIpICogMTAwIC8gV1xyXG5leHBvcnQgY29uc3Qgc2VjdGlvbkhlaWdodFJhdGlvID0gKChIIC0gKFRPUCAqIDIpKSAvIDIgKiBTRUNfUEVSQyAvIDEwMCkgKiAxMDAgLyBIXHJcbmV4cG9ydCBjb25zdCBsaW5lV2lkdGhSYXRpbyA9IHNlY3Rpb25XaWR0aFJhdGlvIC8gNlxyXG5leHBvcnQgY29uc3QgbGluZUhlaWdodFJhdGlvID0gc2VjdGlvbkhlaWdodFJhdGlvXHJcblxyXG5leHBvcnQgY29uc3QgbGluZSA9IHtcclxuICB3aWR0aDogKFcgLSAoTEVGVCAqIDIpIC0gTUlERExFKSAvIDEyLFxyXG4gIGhlaWdodDogKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uID0ge1xyXG4gIHdpZHRoOiAoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMixcclxuICBoZWlnaHQ6IChIIC0gKFRPUCAqIDIpKSAvIDIgKiBTRUNfUEVSQyAvIDEwMFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYm9hcmQgPSB7XHJcbiAgd2lkdGg6IDExNDcsXHJcbiAgaGVpZ2h0OiA3NjhcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZGVMaW5lID0ge1xyXG4gIHdpZHRoOiA2NSxcclxuICBoZWlnaHQ6IDIxMCxcclxuICB0b3A6IDEzMyxcclxuICBzaWRlOiAoTEVGVCAtIDY1KSAvIDJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhd25fc2lkZSA9IHtcclxuICB3aWR0aDogNjUsXHJcbiAgaGVpZ2h0OiAxNFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnJva2VuX2xpbmUgPSB7XHJcbiAgd2lkdGg6IFBBV04sXHJcbiAgaGVpZ2h0OiBQQVdOICsgQ09VTlRfSEVJR0hULFxyXG4gIHg6IExFRlQgKyBzZWN0aW9uLndpZHRoICsgKChNSURETEUgLSBQQVdOKSAvIDIpLFxyXG4gIHkwOiAoSCAvIDIpIC0gKChQQVdOICsgQ09VTlRfSEVJR0hUKSAqIDIpLFxyXG4gIHkxOiAoSCAvIDIpICsgKChQQVdOICsgQ09VTlRfSEVJR0hUKSAqIDEpXHJcbn0iLCJmdW5jdGlvbiBzY2FsZVRvV2luZG93KGNhbnZhcywgYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgdmFyIHNjYWxlWCwgc2NhbGVZLCBzY2FsZSwgY2VudGVyO1xyXG5cclxuICAvLzEuIFNjYWxlIHRoZSBjYW52YXMgdG8gdGhlIGNvcnJlY3Qgc2l6ZVxyXG4gIC8vRmlndXJlIG91dCB0aGUgc2NhbGUgYW1vdW50IG9uIGVhY2ggYXhpc1xyXG4gIHNjYWxlWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gY2FudmFzLm9mZnNldFdpZHRoO1xyXG4gIHNjYWxlWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIGNhbnZhcy5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gIC8vU2NhbGUgdGhlIGNhbnZhcyBiYXNlZCBvbiB3aGljaGV2ZXIgdmFsdWUgaXMgbGVzczogYHNjYWxlWGAgb3IgYHNjYWxlWWBcclxuICBzY2FsZSA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcclxuICBjYW52YXMuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCIwIDBcIjtcclxuICBjYW52YXMuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZShcIiArIHNjYWxlICsgXCIpXCI7XHJcblxyXG4gIC8vMi4gQ2VudGVyIHRoZSBjYW52YXMuXHJcbiAgLy9EZWNpZGUgd2hldGhlciB0byBjZW50ZXIgdGhlIGNhbnZhcyB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS5cclxuICAvL1dpZGUgY2FudmFzZXMgc2hvdWxkIGJlIGNlbnRlcmVkIHZlcnRpY2FsbHksIGFuZCBcclxuICAvL3NxdWFyZSBvciB0YWxsIGNhbnZhc2VzIHNob3VsZCBiZSBjZW50ZXJlZCBob3Jpem9udGFsbHlcclxuICBpZiAoY2FudmFzLm9mZnNldFdpZHRoID4gY2FudmFzLm9mZnNldEhlaWdodCkge1xyXG4gICAgaWYgKGNhbnZhcy5vZmZzZXRXaWR0aCAqIHNjYWxlIDwgd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgICAgY2VudGVyID0gXCJob3Jpem9udGFsbHlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNlbnRlciA9IFwidmVydGljYWxseVwiO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoY2FudmFzLm9mZnNldEhlaWdodCAqIHNjYWxlIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgIGNlbnRlciA9IFwidmVydGljYWxseVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VudGVyID0gXCJob3Jpem9udGFsbHlcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQ2VudGVyIGhvcml6b250YWxseSAoZm9yIHNxdWFyZSBvciB0YWxsIGNhbnZhc2VzKVxyXG4gIHZhciBtYXJnaW47XHJcbiAgaWYgKGNlbnRlciA9PT0gXCJob3Jpem9udGFsbHlcIikge1xyXG4gICAgbWFyZ2luID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gY2FudmFzLm9mZnNldFdpZHRoICogc2NhbGUpIC8gMjtcclxuICAgIGNhbnZhcy5zdHlsZS5tYXJnaW5Ub3AgPSAwICsgXCJweFwiO1xyXG4gICAgY2FudmFzLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDAgKyBcInB4XCI7XHJcbiAgICBjYW52YXMuc3R5bGUubWFyZ2luTGVmdCA9IG1hcmdpbiArIFwicHhcIjtcclxuICAgIGNhbnZhcy5zdHlsZS5tYXJnaW5SaWdodCA9IG1hcmdpbiArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIC8vQ2VudGVyIHZlcnRpY2FsbHkgKGZvciB3aWRlIGNhbnZhc2VzKSBcclxuICBpZiAoY2VudGVyID09PSBcInZlcnRpY2FsbHlcIikge1xyXG4gICAgbWFyZ2luID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIGNhbnZhcy5vZmZzZXRIZWlnaHQgKiBzY2FsZSkgLyAyO1xyXG4gICAgY2FudmFzLnN0eWxlLm1hcmdpblRvcCA9IG1hcmdpbiArIFwicHhcIjtcclxuICAgIGNhbnZhcy5zdHlsZS5tYXJnaW5Cb3R0b20gPSBtYXJnaW4gKyBcInB4XCI7XHJcbiAgICBjYW52YXMuc3R5bGUubWFyZ2luTGVmdCA9IDAgKyBcInB4XCI7XHJcbiAgICBjYW52YXMuc3R5bGUubWFyZ2luUmlnaHQgPSAwICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgLy8zLiBSZW1vdmUgYW55IHBhZGRpbmcgZnJvbSB0aGUgY2FudmFzICBhbmQgYm9keSBhbmQgc2V0IHRoZSBjYW52YXNcclxuICAvL2Rpc3BsYXkgc3R5bGUgdG8gXCJibG9ja1wiXHJcbiAgY2FudmFzLnN0eWxlLnBhZGRpbmdMZWZ0ID0gMCArIFwicHhcIjtcclxuICBjYW52YXMuc3R5bGUucGFkZGluZ1JpZ2h0ID0gMCArIFwicHhcIjtcclxuICBjYW52YXMuc3R5bGUucGFkZGluZ1RvcCA9IDAgKyBcInB4XCI7XHJcbiAgY2FudmFzLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwICsgXCJweFwiO1xyXG4gIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAvLzQuIFNldCB0aGUgY29sb3Igb2YgdGhlIEhUTUwgYm9keSBiYWNrZ3JvdW5kXHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gIC8vRml4IHNvbWUgcXVpcmtpbmVzcyBpbiBzY2FsaW5nIGZvciBTYWZhcmlcclxuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgaWYgKHVhLmluZGV4T2YoXCJzYWZhcmlcIikgIT0gLTEpIHtcclxuICAgIGlmICh1YS5pbmRleE9mKFwiY2hyb21lXCIpID4gLTEpIHtcclxuICAgICAgLy8gQ2hyb21lXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTYWZhcmlcclxuICAgICAgLy9jYW52YXMuc3R5bGUubWF4SGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgIC8vY2FudmFzLnN0eWxlLm1pbkhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy81LiBSZXR1cm4gdGhlIGBzY2FsZWAgdmFsdWUuIFRoaXMgaXMgaW1wb3J0YW50LCBiZWNhdXNlIHlvdSdsbCBuZWUgdGhpcyB2YWx1ZSBcclxuICAvL2ZvciBjb3JyZWN0IGhpdCB0ZXN0aW5nIGJldHdlZW4gdGhlIHBvaW50ZXIgYW5kIHNwcml0ZXNcclxuICByZXR1cm4gc2NhbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjYWxlVG9XaW5kb3ciLCJleHBvcnQgY29uc3QgQk9BUkRfQ09OVEFJTkVSID0gJ0JPQVJEX0NPTlRBSU5FUidcclxuZXhwb3J0IGNvbnN0IEdBTUVfU0VDVElPTiA9ICdHQU1FX1NFQ1RJT04nXHJcbmV4cG9ydCBjb25zdCBHQU1FX0xJTkUgPSAnR0FNRV9MSU5FJ1xyXG5leHBvcnQgY29uc3QgRklOSVNIX0xJTkUgPSAnRklOSVNIX0xJTkUnXHJcbmV4cG9ydCBjb25zdCBCUk9LRU5fTElORSA9ICdCUk9LRU5fTElORSdcclxuZXhwb3J0IGNvbnN0IEdBTUVfUEFXTiA9ICdHQU1FX1BBV04nXHJcbmV4cG9ydCBjb25zdCBISVRfUkVDID0gJ0hJVF9SRUMnXHJcbmV4cG9ydCBjb25zdCBCUk9LRU5fQ09VTlRFUiA9ICdCUk9LRU5fQ09VTlRFUiciLCJmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7Il0sInNvdXJjZVJvb3QiOiIifQ==