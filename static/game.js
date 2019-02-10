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
    // app.renderer.resize(window.innerWidth, window.innerHeight)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL0JvYXJkQ29udGFpbmVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9Ccm9rZW5MaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9GaW5pc2hMaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9HYW1lTGluZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NsYXNzZXMvR2FtZVNlY3Rpb24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL1Bhd24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy93aXRoQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2lzTW9iaWxlLmpzIiwid2VicGFjazovLy8uL2dhbWUvcmF0aW9zLmpzIiwid2VicGFjazovLy8uL2dhbWUvc2NhbGVUb1dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkJvYXJkQ29udGFpbmVyIiwidXNlciIsIm9wcG9uZW50Iiwid2lkdGgiLCJyYXRpb3MiLCJoZWlnaHQiLCJ4VHlwZSIsInR5cGVzIiwibmFtZSIsImFwcCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImlzTW9iaWxlIiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsImF2YWlsSGVpZ2h0IiwicmVuZGVyZXIiLCJyZXNpemUiLCJyYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJwb3NpdGlvbiIsInNldCIsInNjYWxlIiwiUElYSSIsIkNvbnRhaW5lciIsIndpdGhCYXNlIiwiQnJva2VuTGluZSIsInByb3BzIiwiY291bnRTdHlsZSIsIlRleHRTdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VUaGlja25lc3MiLCJkcm9wU2hhZG93IiwiZHJvcFNoYWRvd0NvbG9yIiwiZHJvcFNoYWRvd0JsdXIiLCJkcm9wU2hhZG93RGlzdGFuY2UiLCJkcm9wU2hhZG93QW5nbGUiLCJkcm9wU2hhZG93QWxwaGEiLCJjb3VudCIsIlRleHQiLCJwaXZvdCIsInZpc2libGUiLCJhZGRDaGlsZCIsIm5ld0NvdW50IiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJjaGlsZCIsImxlbmd0aCIsImNvdW50Q2hpbGQiLCJmaW5kIiwidGV4dCIsIm51bWJlciIsIl9sb2NrR2FtZVBhd25zIiwicGF3bnMiLCJmb3JFYWNoIiwicGF3biIsImkiLCJhcnIiLCJUd2Vlbk1heCIsInRvIiwieCIsInkiLCJDT1VOVF9IRUlHSFQiLCJ1cGRhdGVDb3VudCIsIkZpbmlzaExpbmUiLCJ0b1NpdCIsImhpdFJlYyIsIkdyYXBoaWNzIiwiZHJhd1JlY3QiLCJ1blN1YnNjcmliZSIsInBvaW50IiwiR2FtZUxpbmUiLCJibG9ja2VkIiwiYXJncyIsInBhd25BcnIiLCJmYWtlIiwicmV2ZXJzZSIsInBhcmVudCIsInJvdyIsIlBBV04iLCJpc1VzZXIiLCJzdWJzY3JpYmUiLCJ0b0hpdCIsIm9yZGVyUGF3bnMiLCJHYW1lU2VjdGlvbiIsImxpbmUiLCJsaW5lSW5kZXgiLCJQYXduIiwicGF3bk9iaiIsImNvbG9yIiwibG9hZGVyIiwicmVzb3VyY2VzIiwic29saWQiLCJ0ZXh0dXJlIiwic29saWRUZXh0dXJlIiwic2lkZVRleHR1cmUiLCJzaWRlIiwic2VsZWN0ZWRUZXh0dXJlIiwic2VsZWN0ZWQiLCJjdXJzb3IiLCJvbiIsImZ1bmN0aW9ucyIsIm5ld1BhcmVudCIsImhpdHRlZFBhd24iLCJnb1RvQnJva2VuTGluZSIsInNldFNpZGUiLCJuZXdQb3NpdGlvbiIsInRvTG9jYWwiLCJnZXRHbG9iYWxQb3NpdGlvbiIsInNldFBhcmVudCIsImludGVyYWN0aXZlIiwiYnJva2VuTGluZXMiLCJfZ2V0QnJva2VuTGluZXMiLCJfZ2V0VXNlciIsInNldFBhcmVudEN1c3RvbSIsIlNwcml0ZSIsImNvbXAiLCJwcm90b3R5cGUiLCJfZ2V0Qm9hcmQiLCJvYmoiLCJfZ2V0T3Bwb25lbnQiLCJfZ2V0U2VjdGlvbnMiLCJib2FyZENvbnRhaW5lciIsIl9nZXRMaW5lcyIsInJlZHVjZSIsImFjYyIsImN1ciIsImxpbmVzIiwicHVzaCIsIl9nZXRGaW5pc2hMaW5lcyIsIl9nZXRNeUZpbmlzaExpbmUiLCJfZ2V0T3Bwb25lbnRGaW5pc2hMaW5lIiwib3BwIiwiX2dldE15QnJva2VuTGluZSIsIl9nZXRPcHBvbmVudEJyb2tlbkxpbmUiLCJibG9ja0xpbmUiLCJvbkRyYWdTdGFydCIsImV2ZW50IiwiZHJhZ2dpbmciLCJzdGFydFBvaW50IiwiZGF0YSIsImdsb2JhbCIsImhvbWVQYXJlbnQiLCJwcmV2aW91c1BhcmVudCIsImRyYWdQb2ludCIsInNldFNlbGVjdGVkIiwib25EcmFnTW92ZSIsImUiLCJnbG9iYWxQb2ludCIsImNlbnRlciIsInRlc3RIaXQiLCJvbkRyYWdFbmQiLCJjb25zb2xlIiwibG9nIiwic2V0U29saWQiLCJvbkFkZGVkIiwiY29udGFpbmVyIiwib25SZW1vdmVkIiwiY2FsY3VsYXRlQm9hcmRDb250YWluZXIiLCJ2aWV3IiwiSCIsIlciLCJjcmVhdGVTZWN0aW9ucyIsInNlY3Rpb25zIiwiQXJyYXkiLCJtYXAiLCJzZWMiLCJjcmVhdGVHYW1lTGluZXMiLCJjcmVhdGVQYXducyIsImVsZW0iLCJzcHJpdGUiLCJjcmVhdGVGaW5pc2hMaW5lcyIsInVuIiwibnVtIiwidG9wIiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJjcmVhdGVCcm9rZW5MaW5lIiwieTAiLCJ5MSIsImJvYXJkIiwic2VjdGlvbkFyciIsImxpbmVBcnIiLCJ1c2VyUGF3bkFyciIsIm9wcG9uZW50UGF3bkFyciIsInNpZGVMaW5lQXJyIiwiYnJva2VuTGluZUFyciIsImJvYXJkUG5nIiwidXNlclBhd25QbmciLCJ1c2VyUGF3blNpZGVQbmciLCJ1c2VyUGF3blNlbGVjdGVkUG5nIiwib3Bwb25lbnRQYXduUG5nIiwib3Bwb25lbnRQYXduU2lkZVBuZyIsIm9wcG9uZW50UGF3blNlbGVjdGVkUG5nIiwibGluZVNlbGVjdGVkUG5nIiwidXNlclBhd25zIiwib3Bwb25lbnRQYXducyIsInV0aWxzIiwic2tpcEhlbGxvIiwiQXBwbGljYXRpb24iLCJjb25maWciLCJhbnRpYWxpYXMiLCJ0cmFuc3BhcmVudCIsInJlc29sdXRpb24iLCJzdHlsZSIsImRpc3BsYXkiLCJzZXR1cCIsIkJvYXJkQ29udGFpbmVyQ2xhc3MiLCJoZWxwZXJzIiwiY2h1bmsiLCJzbGljZSIsIm9yZGVyTGluZXMiLCJzdGFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJwaXhpTG9hZGVyIiwiYWRkIiwibG9hZCIsImNoZWNrIiwiYSIsInRlc3QiLCJzdWJzdHIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJvcGVyYSIsIlRPUCIsIkxFRlQiLCJNSURETEUiLCJTRUNfUEVSQyIsInRvcEhlaWdodFJhdGlvIiwibGVmdFdpZHRoUmF0aW8iLCJtaWRkbGVXaWR0aFJhdGlvIiwicGF3bkhlaWdodFJhdGlvIiwic2VjdGlvbldpZHRoUmF0aW8iLCJzZWN0aW9uSGVpZ2h0UmF0aW8iLCJsaW5lV2lkdGhSYXRpbyIsImxpbmVIZWlnaHRSYXRpbyIsInNlY3Rpb24iLCJzaWRlTGluZSIsInBhd25fc2lkZSIsImJyb2tlbl9saW5lIiwic2NhbGVUb1dpbmRvdyIsImNhbnZhcyIsImJhY2tncm91bmRDb2xvciIsInNjYWxlWCIsInNjYWxlWSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwibWluIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJvZHkiLCJ1YSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsIkJPQVJEX0NPTlRBSU5FUiIsIkdBTUVfU0VDVElPTiIsIkdBTUVfTElORSIsIkZJTklTSF9MSU5FIiwiQlJPS0VOX0xJTkUiLCJHQU1FX1BBV04iLCJISVRfUkVDIiwiQlJPS0VOX0NPVU5URVIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7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ZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZ2FtZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuaW1wb3J0IGlzTW9iaWxlIGZyb20gJy4uL2lzTW9iaWxlJ1xyXG5cclxuY2xhc3MgQm9hcmRDb250YWluZXIgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IodXNlciwgb3Bwb25lbnQpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlciA9IHVzZXJcclxuICAgIHRoaXMub3Bwb25lbnQgPSBvcHBvbmVudFxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5XXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5IXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuQk9BUkRfQ09OVEFJTkVSXHJcbiAgICB0aGlzLm5hbWUgPSB0eXBlcy5CT0FSRF9DT05UQUlORVJcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyIChhcHApIHtcclxuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHJcbiAgICBpZiAoaXNNb2JpbGUoKSkge1xyXG4gICAgICB3aWR0aCA9IHNjcmVlbi5hdmFpbFdpZHRoXHJcbiAgICAgIGhlaWdodCA9IHNjcmVlbi5hdmFpbEhlaWdodFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhcHAucmVuZGVyZXIucmVzaXplKHdpZHRoLCBoZWlnaHQpXHJcbiAgICBsZXQgcmF0aW8gPSAoMTAwICogaGVpZ2h0KSAvIHJhdGlvcy5IIC8gMTAwIC8gZGV2aWNlUGl4ZWxSYXRpb1xyXG4gICAgXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLlcgLyAxMDAgKiByYXRpb1xyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MuSCAvIDEwMCAqIHJhdGlvXHJcbiAgXHJcbiAgICB0aGlzLnBvc2l0aW9uLnNldCgwLCAwKVxyXG4gICAgdGhpcy5zY2FsZS5zZXQocmF0aW8sIHJhdGlvKVxyXG4gICAgLy90aGlzLnBpdm90LnNldChyYXRpb3MuVyAvIDIsIHJhdGlvcy5IIC8gMilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEJvYXJkQ29udGFpbmVyKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBCcm9rZW5MaW5lIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuQlJPS0VOX0xJTkVcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MuYnJva2VuX2xpbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLmJyb2tlbl9saW5lLmhlaWdodFxyXG4gICAgdGhpcy5jb3VudFN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHtcclxuICAgICAgZm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG4gICAgICBmb250U2l6ZTogNDIsXHJcbiAgICAgIGZpbGw6IFwid2hpdGVcIixcclxuICAgICAgc3Ryb2tlOiAnI2ZmMzMwMCcsXHJcbiAgICAgIHN0cm9rZVRoaWNrbmVzczogMSxcclxuICAgICAgZHJvcFNoYWRvdzogdHJ1ZSxcclxuICAgICAgZHJvcFNoYWRvd0NvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgZHJvcFNoYWRvd0JsdXI6IDQsXHJcbiAgICAgIGRyb3BTaGFkb3dEaXN0YW5jZTogLTIsXHJcbiAgICAgIGRyb3BTaGFkb3dBbmdsZTogMzAsXHJcbiAgICAgIGRyb3BTaGFkb3dBbHBoYTogLjYsXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBjb3VudCA9IG5ldyBQSVhJLlRleHQoMCwgdGhpcy5jb3VudFN0eWxlKVxyXG4gICAgY291bnQueFR5cGUgPSB0eXBlcy5CUk9LRU5fQ09VTlRFUlxyXG4gICAgY291bnQuaGVpZ2h0ID0gcmF0aW9zLkNPVU5UX0hFSUdIVFxyXG4gICAgY291bnQucGl2b3Quc2V0KGNvdW50LndpZHRoIC8gMiwgY291bnQuaGVpZ2h0IC8gMilcclxuICAgIGNvdW50LnBvc2l0aW9uLnNldChyYXRpb3MuYnJva2VuX2xpbmUud2lkdGggLyAyLCAwKVxyXG4gICAgY291bnQudmlzaWJsZSA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5hZGRDaGlsZChjb3VudClcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvdW50ICgpIHtcclxuICAgIGNvbnN0IG5ld0NvdW50ID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfUEFXTikubGVuZ3RoXHJcbiAgICBjb25zdCBjb3VudENoaWxkID0gdGhpcy5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5CUk9LRU5fQ09VTlRFUilcclxuICAgIGNvdW50Q2hpbGQudGV4dCA9IG5ld0NvdW50XHJcbiAgICBjb3VudENoaWxkLnZpc2libGUgPSBuZXdDb3VudFxyXG5cclxuICAgIGlmIChuZXdDb3VudCAmJiB0aGlzLm51bWJlciA9PT0gMCkge1xyXG4gICAgICB0aGlzLl9sb2NrR2FtZVBhd25zKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9yZGVyUGF3bnMgKCkge1xyXG4gICAgY29uc3QgcGF3bnMgPSB0aGlzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKVxyXG4gICAgcGF3bnMuZm9yRWFjaCgocGF3biwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKHBhd24ucG9zaXRpb24sIC41LCB7IHg6IDAsIHk6IHJhdGlvcy5DT1VOVF9IRUlHSFQgfSlcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy51cGRhdGVDb3VudCgpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShCcm9rZW5MaW5lKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBGaW5pc2hMaW5lIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuRklOSVNIX0xJTkVcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3Muc2lkZUxpbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLnNpZGVMaW5lLmhlaWdodFxyXG4gICAgdGhpcy50b1NpdCA9IHRydWVcclxuXHJcbiAgICBsZXQgaGl0UmVjID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxyXG4gICAgaGl0UmVjLnhUeXBlID0gdHlwZXMuSElUX1JFQ1xyXG4gICAgaGl0UmVjLmRyYXdSZWN0KDAsIDAsIHJhdGlvcy5zaWRlTGluZS53aWR0aCwgcmF0aW9zLnNpZGVMaW5lLmhlaWdodClcclxuICAgIGhpdFJlYy52aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLmFkZENoaWxkKGhpdFJlYylcclxuICB9XHJcblxyXG4gIG9yZGVyUGF3bnMgKCkge1xyXG4gICAgdGhpcy5jaGlsZHJlblxyXG4gICAgICAuZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlICE9PSB0eXBlcy5ISVRfUkVDKVxyXG4gICAgICAuZm9yRWFjaCgocGF3biwgaSwgYXJyKSA9PiB7XHJcbiAgICAgICAgcGF3bi51blN1YnNjcmliZSgpXHJcbiAgICAgICAgcGF3bi5wb3NpdGlvbi5zZXQoMCwgcmF0aW9zLnBhd25fc2lkZS5oZWlnaHQgKiBpKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgdGVzdEhpdCAocG9pbnQpIHtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5ISVRfUkVDKVxyXG4gICAgXHJcbiAgICBpZiAoXHJcbiAgICAgIHBvaW50LnggPj0gMFxyXG4gICAgICAmJiBwb2ludC54IDw9IHdpZHRoXHJcbiAgICAgICYmIHBvaW50LnkgPj0gMFxyXG4gICAgICAmJiBwb2ludC55IDw9IGhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShGaW5pc2hMaW5lKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBHYW1lTGluZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkdBTUVfTElORVxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5saW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5saW5lLmhlaWdodFxyXG4gICAgdGhpcy5ibG9ja2VkID0gZmFsc2VcclxuXHJcbiAgICBsZXQgaGl0UmVjID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxyXG4gICAgaGl0UmVjLnhUeXBlID0gdHlwZXMuSElUX1JFQ1xyXG4gICAgaGl0UmVjLmRyYXdSZWN0KDAsIDAsIHJhdGlvcy5saW5lLndpZHRoLCByYXRpb3MubGluZS5oZWlnaHQpXHJcbiAgICBoaXRSZWMudmlzaWJsZSA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5hZGRDaGlsZChoaXRSZWMpXHJcbiAgfVxyXG5cclxuICBvcmRlclBhd25zIChhcmdzID0ge30pIHtcclxuICAgIGNvbnN0IHBhd25BcnIgPSB0aGlzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5uYW1lICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pXHJcbiAgICBjb25zdCB7IGZha2UsIHJldmVyc2UgPSB0aGlzLnBhcmVudC5udW1iZXIgPiAxIH0gPSBhcmdzXHJcbiAgICBjb25zdCBsZW5ndGggPSBmYWtlID8gcGF3bkFyci5sZW5ndGggKyAxIDogcGF3bkFyci5sZW5ndGhcclxuXHJcbiAgICBsZXQgcm93ID0gcmF0aW9zLmxpbmUuaGVpZ2h0IC8gbGVuZ3RoXHJcblxyXG4gICAgaWYgKHJvdyA8IHJhdGlvcy5QQVdOKSB7XHJcbiAgICAgIHJvdyA9IHJvdyAtICgocmF0aW9zLlBBV04gLSByb3cpIC8gbGVuZ3RoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm93ID0gcmF0aW9zLlBBV05cclxuICAgIH1cclxuXHJcbiAgICBwYXduQXJyLmZvckVhY2goKHBhd24sIGksIGFycikgPT4ge1xyXG4gICAgICBwYXduLnVuU3Vic2NyaWJlKClcclxuICAgICAgcmV2ZXJzZVxyXG4gICAgICAgICAgPyBUd2Vlbk1heC50byhwYXduLnBvc2l0aW9uLCAuNSwgeyB4OiAwLCB5OiByYXRpb3MubGluZS5oZWlnaHQgLSAocm93ICogaSkgLSByYXRpb3MuUEFXTiB9KVxyXG4gICAgICAgICAgOiBUd2Vlbk1heC50byhwYXduLnBvc2l0aW9uLCAuNSwgeyB4OiAwLCB5OiByb3cgKiBpIH0pXHJcblxyXG4gICAgICBpZiAoaSArIDEgPT09IGFyci5sZW5ndGggJiYgcGF3bi5pc1VzZXIgJiYgIXRoaXMuYmxvY2tlZCkge1xyXG4gICAgICAgIHBhd24uc3Vic2NyaWJlKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnRvU2l0ID0gdHJ1ZVxyXG5cclxuICAgIGlmIChwYXduQXJyLmxlbmd0aCA9PT0gMSAmJiAhcGF3bkFyclswXS5pc1VzZXIpIHtcclxuICAgICAgdGhpcy50b0hpdCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGF3bkFyci5sZW5ndGggPiAxICYmICFwYXduQXJyWzBdLmlzVXNlcikge1xyXG4gICAgICB0aGlzLnRvU2l0ID0gZmFsc2VcclxuICAgICAgdGhpcy50b0hpdCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZXN0SGl0IChwb2ludCkge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkhJVF9SRUMpXHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBwb2ludC54ID49IDBcclxuICAgICAgJiYgcG9pbnQueCA8PSB3aWR0aFxyXG4gICAgICAmJiBwb2ludC55ID49IDBcclxuICAgICAgJiYgcG9pbnQueSA8PSBoZWlnaHRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgYmxvY2tMaW5lICgpIHtcclxuICAgIHRoaXMuYmxvY2tlZCA9IHRydWVcclxuICAgIHRoaXMub3JkZXJQYXducygpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShHYW1lTGluZSlcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgR2FtZVNlY3Rpb24gZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5HQU1FX1NFQ1RJT05cclxuICAgIHRoaXMud2lkdGggPSByYXRpb3Muc2VjdGlvbi53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3Muc2VjdGlvbi5oZWlnaHRcclxuICB9XHJcblxyXG4gIG9yZGVyTGluZXMgKCkge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlblxyXG5cclxuICAgIGlmICh0aGlzLm51bWJlciA+IDEpIHtcclxuICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5yZXZlcnNlKClcclxuICAgIH1cclxuXHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChsaW5lLCBsaW5lSW5kZXgsIGFycikgPT4ge1xyXG4gICAgICBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MubGluZS53aWR0aCAqIChhcnIubGVuZ3RoIC0gbGluZUluZGV4IC0gMSksIDApXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoR2FtZVNlY3Rpb24pXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyBmdW5jdGlvbnMgZnJvbSAnLi4vZnVuY3Rpb25zJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuXHJcbmNsYXNzIFBhd24gZXh0ZW5kcyBQSVhJLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IocGF3bk9iaiwgY29sb3IsIGlzVXNlcikge1xyXG4gICAgc3VwZXIoUElYSS5sb2FkZXIucmVzb3VyY2VzW3Bhd25PYmouc29saWRdLnRleHR1cmUpXHJcblxyXG4gICAgdGhpcy5zb2xpZFRleHR1cmUgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zb2xpZF0udGV4dHVyZVxyXG4gICAgdGhpcy5zaWRlVGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNpZGVdLnRleHR1cmVcclxuICAgIHRoaXMuc2VsZWN0ZWRUZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW3Bhd25PYmouc2VsZWN0ZWRdLnRleHR1cmVcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxyXG4gICAgdGhpcy5pc1VzZXIgPSBpc1VzZXJcclxuICAgIHRoaXMuY3Vyc29yID0gJ3BvaW50ZXInXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuR0FNRV9QQVdOXHJcbiAgICB0aGlzLm9uKCdhZGRlZCcsIGZ1bmN0aW9ucy5vbkFkZGVkKVxyXG4gICAgdGhpcy5vbigncmVtb3ZlZCcsIGZ1bmN0aW9ucy5vblJlbW92ZWQpXHJcbiAgfVxyXG5cclxuICBzZXRQYXJlbnRDdXN0b20gKG5ld1BhcmVudCkge1xyXG4gICAgaWYgKG5ld1BhcmVudC50b0hpdCkge1xyXG4gICAgICBuZXdQYXJlbnQudG9IaXQgPSBmYWxzZVxyXG4gICAgICBuZXdQYXJlbnQudG9TaXQgPSB0cnVlXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBoaXR0ZWRQYXduID0gbmV3UGFyZW50LmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfUEFXTilcclxuICAgICAgaGl0dGVkUGF3bi5nb1RvQnJva2VuTGluZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1BhcmVudC54VHlwZSA9PT0gdHlwZXMuRklOSVNIX0xJTkUpIHtcclxuICAgICAgdGhpcy5zZXRTaWRlKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IG5ld1BhcmVudC50b0xvY2FsKHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKSlcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uLnhcclxuICAgIHRoaXMucG9zaXRpb24ueSA9IG5ld1Bvc2l0aW9uLnlcclxuICAgIHRoaXMuc2V0UGFyZW50KG5ld1BhcmVudClcclxuICB9XHJcblxyXG4gIHNldFNvbGlkICgpIHtcclxuICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuc29saWRUZXh0dXJlXHJcbiAgfVxyXG5cclxuICBzZXRTaWRlICgpIHtcclxuICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuc2lkZVRleHR1cmVcclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGVkICgpIHtcclxuICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuc2VsZWN0ZWRUZXh0dXJlXHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmUgKCkge1xyXG4gICAgZnVuY3Rpb25zLnN1YnNjcmliZSh0aGlzKVxyXG4gIH1cclxuXHJcbiAgdW5TdWJzY3JpYmUgKCkge1xyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBnb1RvQnJva2VuTGluZSAoKSB7XHJcbiAgICBjb25zdCBicm9rZW5MaW5lcyA9IHRoaXMuX2dldEJyb2tlbkxpbmVzKClcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLl9nZXRVc2VyKClcclxuICAgIHVzZXIuY29sb3IgPT09IHRoaXMuY29sb3JcclxuICAgICAgPyB0aGlzLnNldFBhcmVudEN1c3RvbShicm9rZW5MaW5lc1sxXSlcclxuICAgICAgOiB0aGlzLnNldFBhcmVudEN1c3RvbShicm9rZW5MaW5lc1swXSlcclxuICB9XHJcblxyXG4gIGdvVG9GaW5pc2hMaW5lICgpIHtcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoUGF3bilcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXduIH0gZnJvbSAnLi9QYXduLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWVTZWN0aW9uIH0gZnJvbSAnLi9HYW1lU2VjdGlvbi5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1lTGluZSB9IGZyb20gJy4vR2FtZUxpbmUuY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmluaXNoTGluZSB9IGZyb20gJy4vRmluaXNoTGluZS5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCcm9rZW5MaW5lIH0gZnJvbSAnLi9Ccm9rZW5MaW5lLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJvYXJkQ29udGFpbmVyIH0gZnJvbSAnLi9Cb2FyZENvbnRhaW5lci5jbGFzcyciLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb21wKSA9PiB7XHJcbiAgY29tcC5wcm90b3R5cGUuX2dldEJvYXJkID0gZnVuY3Rpb24gKG9iaiA9IHRoaXMpIHtcclxuICAgIGlmIChvYmoueFR5cGUgPT09IHR5cGVzLkJPQVJEX0NPTlRBSU5FUikge1xyXG4gICAgICByZXR1cm4gb2JqXHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAoIW9iai5wYXJlbnQpIHtcclxuICAgICAgcmV0dXJuIG9iai5jaGlsZHJlblswXVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJvYXJkKG9iai5wYXJlbnQpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRCb2FyZCgpLnVzZXJcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRPcHBvbmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRCb2FyZCgpLm9wcG9uZW50XHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0U2VjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIHJldHVybiBib2FyZENvbnRhaW5lci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfU0VDVElPTilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRMaW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRTZWN0aW9ucygpLnJlZHVjZSgoYWNjLCBjdXIsIGksIGFycikgPT4ge1xyXG4gICAgICBjb25zdCBsaW5lcyA9IGN1ci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfTElORSlcclxuXHJcbiAgICAgIGFjYy5wdXNoKC4uLmxpbmVzKVxyXG5cclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwgW10pICAgXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0RmluaXNoTGluZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIHJldHVybiBib2FyZENvbnRhaW5lci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkZJTklTSF9MSU5FKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE15RmluaXNoTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLl9nZXRVc2VyKClcclxuICAgIHJldHVybiB0aGlzLl9nZXRGaW5pc2hMaW5lcygpLmZpbmQobGluZSA9PiBsaW5lLm51bWJlciA9PT0gdXNlci5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0T3Bwb25lbnRGaW5pc2hMaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgb3BwID0gdGhpcy5fZ2V0T3Bwb25lbnQoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEZpbmlzaExpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSBvcHAubnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldEJyb2tlbkxpbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5CUk9LRU5fTElORSlcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRNeUJyb2tlbkxpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5fZ2V0VXNlcigpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0QnJva2VuTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IHVzZXIubnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE9wcG9uZW50QnJva2VuTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG9wcCA9IHRoaXMuX2dldE9wcG9uZW50KClcclxuICAgIHJldHVybiB0aGlzLl9nZXRCcm9rZW5MaW5lcygpLmZpbmQobGluZSA9PiBsaW5lLm51bWJlciA9PT0gb3BwLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9sb2NrR2FtZVBhd25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbGluZXMgPSB0aGlzLl9nZXRMaW5lcygpXHJcbiAgICBsaW5lc1xyXG4gICAgICAuZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX0xJTkUpXHJcbiAgICAgIC5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICAgIGxpbmUuYmxvY2tMaW5lKClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wXHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGV2ZW50KSB7XHJcbiAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSB7IC4uLmV2ZW50LmRhdGEuZ2xvYmFsIH1cclxuICAgIHRoaXMuaG9tZVBhcmVudCA9IHRoaXMucGFyZW50XHJcbiAgICB0aGlzLnByZXZpb3VzUGFyZW50ID0gdGhpcy5wYXJlbnRcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlXHJcbiAgICB0aGlzLmRyYWdQb2ludCA9IHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKVxyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICB0aGlzLnNldFBhcmVudEN1c3RvbShib2FyZENvbnRhaW5lcilcclxuICAgIHRoaXMuc2V0U2VsZWN0ZWQoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ01vdmUoZSkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIFxyXG4gICAgdGhpcy5nbG9iYWxQb2ludCA9IHsgeDogdGhpcy5kcmFnUG9pbnQueCAtICh0aGlzLnN0YXJ0UG9pbnQueCAtIGUuZGF0YS5nbG9iYWwueCksIHk6IHRoaXMuZHJhZ1BvaW50LnkgLSAodGhpcy5zdGFydFBvaW50LnkgLSBlLmRhdGEuZ2xvYmFsLnkpIH1cclxuXHJcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRoaXMucGFyZW50LnRvTG9jYWwodGhpcy5nbG9iYWxQb2ludClcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uLnhcclxuICAgIHRoaXMucG9zaXRpb24ueSA9IG5ld1Bvc2l0aW9uLnlcclxuXHJcbiAgICBuZXdQb3NpdGlvbi54ICs9IHRoaXMud2lkdGggLyAyXHJcbiAgICBuZXdQb3NpdGlvbi55ICs9IHRoaXMuaGVpZ2h0IC8gMlxyXG5cclxuICAgIGNvbnN0IG5ld1BhcmVudCA9IHRoaXMuX2dldExpbmVzKCkuZmluZChsaW5lID0+IHtcclxuICAgICAgbGV0IGNlbnRlciA9IGxpbmUudG9Mb2NhbCh0aGlzLmdsb2JhbFBvaW50KVxyXG4gICAgICBjZW50ZXIueCArPSB0aGlzLndpZHRoIC8gMlxyXG4gICAgICBjZW50ZXIueSArPSB0aGlzLmhlaWdodCAvIDJcclxuXHJcbiAgICAgIHJldHVybiBsaW5lLnRlc3RIaXQoY2VudGVyKVxyXG4gICAgfSkgfHwgYm9hcmRDb250YWluZXJcclxuXHJcbiAgICBpZiAobmV3UGFyZW50Lm5hbWUgIT09IHRoaXMucHJldmlvdXNQYXJlbnQubmFtZSkge1xyXG4gICAgICB0aGlzLnByZXZpb3VzUGFyZW50Lm9yZGVyUGF3bnMgJiYgdGhpcy5wcmV2aW91c1BhcmVudC5vcmRlclBhd25zKClcclxuXHJcbiAgICAgIGlmIChuZXdQYXJlbnQub3JkZXJQYXducyAmJiAobmV3UGFyZW50LnRvSGl0IHx8IG5ld1BhcmVudC50b1NpdCkpIHtcclxuICAgICAgICBuZXdQYXJlbnQub3JkZXJQYXducyh7IGZha2U6IHRydWUgfSlcclxuICAgICAgICB0aGlzLnByZXZpb3VzUGFyZW50ID0gbmV3UGFyZW50XHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdFbmQoKSB7XHJcbiAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZVxyXG4gICAgXHJcbiAgICBsZXQgbGluZXMgPSB0aGlzLl9nZXRMaW5lcygpXHJcbiAgICBsaW5lcy5wdXNoKHRoaXMuX2dldE15RmluaXNoTGluZSgpKVxyXG5cclxuICAgIGNvbnN0IG5ld1BhcmVudCA9IGxpbmVzLmZpbmQobGluZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxpbmUpXHJcbiAgICAgIGxldCBjZW50ZXIgPSBsaW5lLnRvTG9jYWwodGhpcy5nZXRHbG9iYWxQb3NpdGlvbigpKVxyXG4gICAgICBjZW50ZXIueCArPSB0aGlzLndpZHRoIC8gMlxyXG4gICAgICBjZW50ZXIueSArPSB0aGlzLmhlaWdodCAvIDJcclxuXHJcbiAgICAgIHJldHVybiBsaW5lLnRlc3RIaXQoY2VudGVyKSAmJiAobGluZS50b0hpdCB8fCBsaW5lLnRvU2l0KVxyXG4gICAgfSkgfHwgdGhpcy5ob21lUGFyZW50XHJcblxyXG4gICAgdGhpcy5zZXRTb2xpZCgpXHJcbiAgICB0aGlzLnNldFBhcmVudEN1c3RvbShuZXdQYXJlbnQpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25BZGRlZCAoY29udGFpbmVyKSB7XHJcbiAgY29udGFpbmVyLm9yZGVyUGF3bnMgJiYgY29udGFpbmVyLm9yZGVyUGF3bnMoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25SZW1vdmVkIChjb250YWluZXIpIHtcclxuICBjb250YWluZXIub3JkZXJQYXducyAmJiBjb250YWluZXIub3JkZXJQYXducygpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUgKG9iaikge1xyXG4gIG9iai5pbnRlcmFjdGl2ZSA9IHRydWVcclxuICBvYmoub24oJ21vdXNlZG93bicsIG9uRHJhZ1N0YXJ0KVxyXG4gICAgLm9uKCd0b3VjaHN0YXJ0Jywgb25EcmFnU3RhcnQpXHJcbiAgICAub24oJ21vdXNldXAnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ21vdXNldXBvdXRzaWRlJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCd0b3VjaGVuZCcsIG9uRHJhZ0VuZClcclxuICAgIC5vbigndG91Y2hlbmRvdXRzaWRlJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCdtb3VzZW1vdmUnLCBvbkRyYWdNb3ZlKVxyXG4gICAgLm9uKCd0b3VjaG1vdmUnLCBvbkRyYWdNb3ZlKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5TdWJzY3JpYmUgKG9iaikge1xyXG4gIG9iai5pbnRlcmFjdGl2ZSA9IHRydWVcclxuICBvYmoub24oJ21vdXNlZG93bicsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaHN0YXJ0JywgKCkgPT4ge30pXHJcbiAgICAub24oJ21vdXNldXAnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2V1cG91dHNpZGUnLCAoKSA9PiB7fSlcclxuICAgIC5vbigndG91Y2hlbmQnLCAoKSA9PiB7fSlcclxuICAgIC5vbigndG91Y2hlbmRvdXRzaWRlJywgKCkgPT4ge30pXHJcbiAgICAub24oJ21vdXNlbW92ZScsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaG1vdmUnLCAoKSA9PiB7fSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyIChib2FyZENvbnRhaW5lciwgYXBwLCByYXRpb3MpIHtcclxuICBsZXQgcmF0aW8gPSAoMTAwICogYXBwLnJlbmRlcmVyLnZpZXcuaGVpZ2h0KSAvIHJhdGlvcy5IIC8gMTAwXHJcblxyXG4gIGJvYXJkQ29udGFpbmVyLndpZHRoID0gcmF0aW9zLlcgLyAxMDAgKiByYXRpb1xyXG4gIGJvYXJkQ29udGFpbmVyLmhlaWdodCA9IHJhdGlvcy5IIC8gMTAwICogcmF0aW9cclxuXHJcbiAgYm9hcmRDb250YWluZXIucG9zaXRpb24uc2V0KGFwcC5yZW5kZXJlci52aWV3LndpZHRoIC8gMiwgYXBwLnJlbmRlcmVyLnZpZXcuaGVpZ2h0IC8gMilcclxuICBib2FyZENvbnRhaW5lci5zY2FsZS5zZXQocmF0aW8sIHJhdGlvKVxyXG4gIGJvYXJkQ29udGFpbmVyLnBpdm90LnNldChyYXRpb3MuVyAvIDIsIHJhdGlvcy5IIC8gMilcclxufSIsImltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuL3JhdGlvcydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuaW1wb3J0IHtcclxuICBQYXduLFxyXG4gIEdhbWVTZWN0aW9uLFxyXG4gIEdhbWVMaW5lLFxyXG4gIEZpbmlzaExpbmUsXHJcbiAgQnJva2VuTGluZVxyXG59IGZyb20gJy4vY2xhc3NlcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWN0aW9ucyAoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbnMgPSBuZXcgQXJyYXkoNCkuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gc2VjdGlvbnMubWFwKChzZWMsIGkpID0+IHtcclxuICAgIHNlYyA9IG5ldyBHYW1lU2VjdGlvbigpXHJcbiAgICBzZWMubmFtZSA9IHR5cGVzLkdBTUVfU0VDVElPTiArICdfJyArIGlcclxuICAgIHNlYy5udW1iZXIgPSBpXHJcbiAgICBcclxuICAgIGlmIChpID09PSAwKSBzZWMucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZUICsgcmF0aW9zLnNlY3Rpb24ud2lkdGggKyByYXRpb3MuTUlERExFLCByYXRpb3MuVE9QKVxyXG4gICAgaWYgKGkgPT09IDEpIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQsIHJhdGlvcy5UT1ApXHJcbiAgICBpZiAoaSA9PT0gMikgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNlY3Rpb24uaGVpZ2h0KVxyXG4gICAgaWYgKGkgPT09IDMpIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQgKyByYXRpb3Muc2VjdGlvbi53aWR0aCArIHJhdGlvcy5NSURETEUsIHJhdGlvcy5IIC0gcmF0aW9zLlRPUCAtIHJhdGlvcy5zZWN0aW9uLmhlaWdodClcclxuXHJcbiAgICByZXR1cm4gc2VjXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVMaW5lcyAoKSB7XHJcbiAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXkoMjQpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIGxpbmVzLm1hcCgobGluZSwgaSwgYXJyKSA9PiB7XHJcbiAgICBsaW5lID0gbmV3IEdhbWVMaW5lKClcclxuICAgIGxpbmUubmFtZSA9IHR5cGVzLkdBTUVfTElORSArICdfJyArIGlcclxuICAgIGxpbmUubnVtYmVyID0gaVxyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhd25zIChwYXduT2JqLCBjb2xvciwgaXNVc2VyID0gZmFsc2UsIGNvdW50ID0gMTUpIHtcclxuICByZXR1cm4gbmV3IEFycmF5KGNvdW50KS5maWxsKDApLm1hcCgoZWxlbSwgaSkgPT4ge1xyXG4gICAgY29uc3Qgc3ByaXRlID0gbmV3IFBhd24ocGF3bk9iaiwgY29sb3IsIGlzVXNlcilcclxuICAgIHNwcml0ZS5uYW1lID0gYCR7Y29sb3J9XyR7dHlwZXMuR0FNRV9QQVdOfV8ke2l9YFxyXG4gICAgc3ByaXRlLm51bWJlciA9IGlcclxuXHJcbiAgICByZXR1cm4gc3ByaXRlXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbmlzaExpbmVzICh1biwgb24pIHtcclxuICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgyKS5maWxsKDApXHJcblxyXG4gIHJldHVybiBsaW5lcy5tYXAoKGxpbmUsIGksIGFycikgPT4ge1xyXG4gICAgbGV0IG51bSA9IGkgPT09IDEgPyBvbiA6IHVuXHJcblxyXG4gICAgbGluZSA9IG5ldyBGaW5pc2hMaW5lKClcclxuICAgIGxpbmUubmFtZSA9IHR5cGVzLkZJTklTSF9MSU5FICsgJ18nICsgbnVtXHJcbiAgICBsaW5lLm51bWJlciA9IG51bVxyXG5cclxuICAgIGlmIChpID09PSAwKSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuVyAtIHJhdGlvcy5zaWRlTGluZS5zaWRlIC0gcmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3Muc2lkZUxpbmUudG9wKVxyXG4gICAgaWYgKGkgPT09IDEpIHtcclxuICAgICAgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLlcgLSByYXRpb3Muc2lkZUxpbmUuc2lkZSAtIHJhdGlvcy5zaWRlTGluZS53aWR0aCwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNpZGVMaW5lLmhlaWdodClcclxuICAgICAgbGluZS5yb3RhdGlvbiA9IE1hdGguUElcclxuICAgICAgbGluZS5waXZvdC5zZXQocmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJyb2tlbkxpbmUgKHVuLCBvbikge1xyXG4gIGNvbnN0IGxpbmVzID0gbmV3IEFycmF5KDIpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIGxpbmVzLm1hcCgobGluZSwgaSwgYXJyKSA9PiB7XHJcbiAgICBsZXQgbnVtID0gaSA9PT0gMCA/IG9uIDogdW5cclxuXHJcbiAgICBsaW5lID0gbmV3IEJyb2tlbkxpbmUoKVxyXG4gICAgbGluZS5uYW1lID0gdHlwZXMuQlJPS0VOX0xJTkUgKyAnXycgKyBudW1cclxuICAgIGxpbmUubnVtYmVyID0gbnVtXHJcblxyXG4gICAgaWYgKGkgPT09IDApIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5icm9rZW5fbGluZS54LCByYXRpb3MuYnJva2VuX2xpbmUueTApXHJcbiAgICBpZiAoaSA9PT0gMSkgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLmJyb2tlbl9saW5lLngsIHJhdGlvcy5icm9rZW5fbGluZS55MSlcclxuXHJcbiAgICByZXR1cm4gbGluZVxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuL2hlbHBlcnMnXHJcbmltcG9ydCB7IEJvYXJkQ29udGFpbmVyIGFzIEJvYXJkQ29udGFpbmVyQ2xhc3MgfSBmcm9tICcuL2NsYXNzZXMnXHJcbmltcG9ydCBzY2FsZVRvV2luZG93IGZyb20gJy4vc2NhbGVUb1dpbmRvdydcclxuXHJcbmxldCBib2FyZENvbnRhaW5lciwgYm9hcmQsIHNlY3Rpb25BcnIgPSBbXSwgbGluZUFyciA9IFtdLCB1c2VyUGF3bkFyciA9IFtdLCBvcHBvbmVudFBhd25BcnIgPSBbXSwgc2lkZUxpbmVBcnIgPSBbXSwgYnJva2VuTGluZUFyciA9IFtdXHJcblxyXG5jb25zdCB1c2VyID0ge1xyXG4gIGNvbG9yOiAnd2hpdGUnLFxyXG4gIGJvYXJkOiBbXHJcbiAgICAyLCAwLCAwLCAwLCAwLCAwLFxyXG4gICAgMCwgMCwgMCwgMCwgMCwgNSxcclxuICAgIDAsIDAsIDAsIDAsIDMsIDAsXHJcbiAgICA1LCAwLCAwLCAwLCAwLCAwXHJcbiAgXSxcclxuICBudW1iZXI6IDBcclxufVxyXG5cclxuY29uc3Qgb3Bwb25lbnQgPSB7XHJcbiAgY29sb3I6ICdibGFjaycsXHJcbiAgYm9hcmQ6IFtcclxuICAgIDAsIDAsIDAsIDAsIDAsIDUsXHJcbiAgICAwLCAxLCAwLCAwLCAwLCAwLFxyXG4gICAgNSwgMCwgMCwgMCwgMCwgMCxcclxuICAgIDAsIDAsIDAsIDAsIDAsIDFcclxuICBdLFxyXG4gIG51bWJlcjogMVxyXG59XHJcblxyXG5jb25zdCBib2FyZFBuZyA9ICdib2FyZC5wbmcnXHJcbmNvbnN0IHVzZXJQYXduUG5nID0gYCR7dXNlci5jb2xvcn1fcGF3bi5wbmdgXHJcbmNvbnN0IHVzZXJQYXduU2lkZVBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd24yLnBuZ2BcclxuY29uc3QgdXNlclBhd25TZWxlY3RlZFBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd25fc2VsZWN0ZWQucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25QbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bi5wbmdgXHJcbmNvbnN0IG9wcG9uZW50UGF3blNpZGVQbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bjIucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25TZWxlY3RlZFBuZyA9IGAke29wcG9uZW50LmNvbG9yfV9wYXduX3NlbGVjdGVkLnBuZ2BcclxuY29uc3QgbGluZVNlbGVjdGVkUG5nID0gJ2xpbmVfc2VsZWN0ZWQucG5nJ1xyXG5cclxuY29uc3QgdXNlclBhd25zID0ge1xyXG4gIHNvbGlkOiB1c2VyUGF3blBuZyxcclxuICBzaWRlOiB1c2VyUGF3blNpZGVQbmcsXHJcbiAgc2VsZWN0ZWQ6IHVzZXJQYXduU2VsZWN0ZWRQbmdcclxufVxyXG5cclxuY29uc3Qgb3Bwb25lbnRQYXducyA9IHtcclxuICBzb2xpZDogb3Bwb25lbnRQYXduUG5nLFxyXG4gIHNpZGU6IG9wcG9uZW50UGF3blNpZGVQbmcsXHJcbiAgc2VsZWN0ZWQ6IG9wcG9uZW50UGF3blNlbGVjdGVkUG5nXHJcbn1cclxuXHJcblBJWEkudXRpbHMuc2tpcEhlbGxvKClcclxuXHJcbmxldCBBcHBsaWNhdGlvbiA9IFBJWEkuQXBwbGljYXRpb24sXHJcbiAgICBsb2FkZXIgPSBQSVhJLmxvYWRlcixcclxuICAgIHJlc291cmNlcyA9IFBJWEkubG9hZGVyLnJlc291cmNlcyxcclxuICAgIFNwcml0ZSA9IFBJWEkuU3ByaXRlXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gIGFudGlhbGlhczogdHJ1ZSxcclxuICB0cmFuc3BhcmVudDogZmFsc2UsXHJcbiAgcmVzb2x1dGlvbjogZGV2aWNlUGl4ZWxSYXRpb1xyXG59XHJcblxyXG5sZXQgYXBwID0gbmV3IEFwcGxpY2F0aW9uKGNvbmZpZylcclxuYXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcclxuYXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4vL2FwcC5yZW5kZXJlci5hdXRvUmVzaXplID0gdHJ1ZVxyXG5cclxuLy8gU0VUVVBcclxuY29uc3Qgc2V0dXAgPSAoKSA9PiB7XHJcbiAgYm9hcmRDb250YWluZXIgPSBuZXcgQm9hcmRDb250YWluZXJDbGFzcyh1c2VyLCBvcHBvbmVudClcclxuXHJcbiAgYm9hcmQgPSBuZXcgU3ByaXRlKHJlc291cmNlc1tib2FyZFBuZ10udGV4dHVyZSlcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZChib2FyZClcclxuICBcclxuICBzZWN0aW9uQXJyID0gaGVscGVycy5jcmVhdGVTZWN0aW9ucygpXHJcbiAgYm9hcmRDb250YWluZXIuYWRkQ2hpbGQoLi4uc2VjdGlvbkFycilcclxuXHJcbiAgbGluZUFyciA9IGhlbHBlcnMuY3JlYXRlR2FtZUxpbmVzKClcclxuICBzZWN0aW9uQXJyLmZvckVhY2goKHNlYywgaSwgYXJyKSA9PiB7XHJcbiAgICBjb25zdCBjaHVuayA9IGxpbmVBcnIubGVuZ3RoIC8gYXJyLmxlbmd0aFxyXG4gICAgc2VjLmFkZENoaWxkKFxyXG4gICAgICAuLi5saW5lQXJyLnNsaWNlKGNodW5rICogaSwgY2h1bmsgKiAoaSArIDEpKVxyXG4gICAgKVxyXG5cclxuICAgIHNlYy5vcmRlckxpbmVzKClcclxuICB9KVxyXG5cclxuICBzaWRlTGluZUFyciA9IGhlbHBlcnMuY3JlYXRlRmluaXNoTGluZXModXNlci5udW1iZXIsIG9wcG9uZW50Lm51bWJlcilcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZCguLi5zaWRlTGluZUFycilcclxuXHJcbiAgYnJva2VuTGluZUFyciA9IGhlbHBlcnMuY3JlYXRlQnJva2VuTGluZSh1c2VyLm51bWJlciwgb3Bwb25lbnQubnVtYmVyKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKC4uLmJyb2tlbkxpbmVBcnIpXHJcblxyXG4gIHVzZXJQYXduQXJyID0gaGVscGVycy5jcmVhdGVQYXducyh1c2VyUGF3bnMsIHVzZXIuY29sb3IsIHRydWUsIDE1KVxyXG4gIG9wcG9uZW50UGF3bkFyciA9IGhlbHBlcnMuY3JlYXRlUGF3bnMob3Bwb25lbnRQYXducywgb3Bwb25lbnQuY29sb3IsIGZhbHNlLCAxNSlcclxuXHJcbiAgbGluZUFyci5yZWR1Y2UoKGFjYywgY3VyLCBpLCBhcnIpID0+IHtcclxuICAgIGlmICh1c2VyLmJvYXJkW2ldID4gMCkge1xyXG4gICAgICBjdXIuYWRkQ2hpbGQoLi4udXNlclBhd25BcnIuc2xpY2UoYWNjLnVzZXIsIGFjYy51c2VyICsgdXNlci5ib2FyZFtpXSkpXHJcbiAgICAgIGFjYy51c2VyICs9IHVzZXIuYm9hcmRbaV1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3Bwb25lbnQuYm9hcmRbaV0gPiAwKSB7XHJcbiAgICAgIGN1ci5hZGRDaGlsZCguLi5vcHBvbmVudFBhd25BcnIuc2xpY2UoYWNjLm9wcG9uZW50LCBhY2Mub3Bwb25lbnQgKyBvcHBvbmVudC5ib2FyZFtpXSkpXHJcbiAgICAgIGFjYy5vcHBvbmVudCArPSBvcHBvbmVudC5ib2FyZFtpXVxyXG4gICAgfVxyXG5cclxuICAgIGN1ci5vcmRlclBhd25zKClcclxuXHJcbiAgICByZXR1cm4gYWNjXHJcbiAgfSwgeyB1c2VyOiAwLCBvcHBvbmVudDogMCB9KVxyXG5cclxuICBib2FyZENvbnRhaW5lci5jYWxjdWxhdGVCb2FyZENvbnRhaW5lcihhcHApXHJcblxyXG4gIGFwcC5zdGFnZS5hZGRDaGlsZChib2FyZENvbnRhaW5lcilcclxuXHJcbiAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xyXG4gICAgLy8gYXBwLnJlbmRlcmVyLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgYm9hcmRDb250YWluZXIuY2FsY3VsYXRlQm9hcmRDb250YWluZXIoYXBwKVxyXG4gIH1cclxuICBcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplKVxyXG4gIFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuYXBwZW5kQ2hpbGQoYXBwLnZpZXcpXHJcbiAgXHJcbiAgcmVzaXplKClcclxufVxyXG5cclxuY29uc3QgcGl4aUxvYWRlciA9ICgpID0+IHtcclxuICBsb2FkZXJcclxuICAgIC5hZGQoW1xyXG4gICAgICBib2FyZFBuZywgXHJcbiAgICAgIHVzZXJQYXduUG5nLCBcclxuICAgICAgb3Bwb25lbnRQYXduUG5nLFxyXG4gICAgICB1c2VyUGF3blNpZGVQbmcsXHJcbiAgICAgIG9wcG9uZW50UGF3blNpZGVQbmcsXHJcbiAgICAgIHVzZXJQYXduU2VsZWN0ZWRQbmcsXHJcbiAgICAgIG9wcG9uZW50UGF3blNlbGVjdGVkUG5nLFxyXG4gICAgICBsaW5lU2VsZWN0ZWRQbmdcclxuICAgIF0pXHJcbiAgICAubG9hZChzZXR1cClcclxufVxyXG5cclxucGl4aUxvYWRlcigpXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBjaGVjayA9IGZhbHNlO1xyXG4gIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSkgY2hlY2sgPSB0cnVlO30pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcbiAgcmV0dXJuIGNoZWNrO1xyXG59OyIsImV4cG9ydCBjb25zdCBIID0gNzY4XHJcbmV4cG9ydCBjb25zdCBXID0gMTE0N1xyXG5leHBvcnQgY29uc3QgVE9QID0gMjBcclxuZXhwb3J0IGNvbnN0IExFRlQgPSAxMDhcclxuZXhwb3J0IGNvbnN0IE1JRERMRSA9IDgyXHJcbmV4cG9ydCBjb25zdCBQQVdOID0gNzFcclxuZXhwb3J0IGNvbnN0IFNFQ19QRVJDID0gODVcclxuZXhwb3J0IGNvbnN0IENPVU5UX0hFSUdIVCA9IDUwXHJcblxyXG5leHBvcnQgY29uc3QgdG9wSGVpZ2h0UmF0aW8gPSBUT1AgKiAxMDAgLyBIXHJcbmV4cG9ydCBjb25zdCBsZWZ0V2lkdGhSYXRpbyA9IExFRlQgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBtaWRkbGVXaWR0aFJhdGlvID0gTUlERExFICogMTAwIC8gV1xyXG5leHBvcnQgY29uc3QgcGF3bkhlaWdodFJhdGlvID0gUEFXTiAqIDEwMCAvIEhcclxuXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uV2lkdGhSYXRpbyA9ICgoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMikgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uSGVpZ2h0UmF0aW8gPSAoKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwKSAqIDEwMCAvIEhcclxuZXhwb3J0IGNvbnN0IGxpbmVXaWR0aFJhdGlvID0gc2VjdGlvbldpZHRoUmF0aW8gLyA2XHJcbmV4cG9ydCBjb25zdCBsaW5lSGVpZ2h0UmF0aW8gPSBzZWN0aW9uSGVpZ2h0UmF0aW9cclxuXHJcbmV4cG9ydCBjb25zdCBsaW5lID0ge1xyXG4gIHdpZHRoOiAoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMTIsXHJcbiAgaGVpZ2h0OiAoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb24gPSB7XHJcbiAgd2lkdGg6IChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAyLFxyXG4gIGhlaWdodDogKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBib2FyZCA9IHtcclxuICB3aWR0aDogMTE0NyxcclxuICBoZWlnaHQ6IDc2OFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZUxpbmUgPSB7XHJcbiAgd2lkdGg6IDY1LFxyXG4gIGhlaWdodDogMjEwLFxyXG4gIHRvcDogMTMzLFxyXG4gIHNpZGU6IChMRUZUIC0gNjUpIC8gMlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGF3bl9zaWRlID0ge1xyXG4gIHdpZHRoOiA2NSxcclxuICBoZWlnaHQ6IDE0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBicm9rZW5fbGluZSA9IHtcclxuICB3aWR0aDogUEFXTixcclxuICBoZWlnaHQ6IFBBV04gKyBDT1VOVF9IRUlHSFQsXHJcbiAgeDogTEVGVCArIHNlY3Rpb24ud2lkdGggKyAoKE1JRERMRSAtIFBBV04pIC8gMiksXHJcbiAgeTA6IChIIC8gMikgLSAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMiksXHJcbiAgeTE6IChIIC8gMikgKyAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMSlcclxufSIsImZ1bmN0aW9uIHNjYWxlVG9XaW5kb3coY2FudmFzLCBiYWNrZ3JvdW5kQ29sb3IpIHtcclxuICB2YXIgc2NhbGVYLCBzY2FsZVksIHNjYWxlLCBjZW50ZXI7XHJcblxyXG4gIC8vMS4gU2NhbGUgdGhlIGNhbnZhcyB0byB0aGUgY29ycmVjdCBzaXplXHJcbiAgLy9GaWd1cmUgb3V0IHRoZSBzY2FsZSBhbW91bnQgb24gZWFjaCBheGlzXHJcbiAgc2NhbGVYID0gd2luZG93LmlubmVyV2lkdGggLyBjYW52YXMub2Zmc2V0V2lkdGg7XHJcbiAgc2NhbGVZID0gd2luZG93LmlubmVySGVpZ2h0IC8gY2FudmFzLm9mZnNldEhlaWdodDtcclxuXHJcbiAgLy9TY2FsZSB0aGUgY2FudmFzIGJhc2VkIG9uIHdoaWNoZXZlciB2YWx1ZSBpcyBsZXNzOiBgc2NhbGVYYCBvciBgc2NhbGVZYFxyXG4gIHNjYWxlID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xyXG4gIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIjAgMFwiO1xyXG4gIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKFwiICsgc2NhbGUgKyBcIilcIjtcclxuXHJcbiAgLy8yLiBDZW50ZXIgdGhlIGNhbnZhcy5cclxuICAvL0RlY2lkZSB3aGV0aGVyIHRvIGNlbnRlciB0aGUgY2FudmFzIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LlxyXG4gIC8vV2lkZSBjYW52YXNlcyBzaG91bGQgYmUgY2VudGVyZWQgdmVydGljYWxseSwgYW5kIFxyXG4gIC8vc3F1YXJlIG9yIHRhbGwgY2FudmFzZXMgc2hvdWxkIGJlIGNlbnRlcmVkIGhvcml6b250YWxseVxyXG4gIGlmIChjYW52YXMub2Zmc2V0V2lkdGggPiBjYW52YXMub2Zmc2V0SGVpZ2h0KSB7XHJcbiAgICBpZiAoY2FudmFzLm9mZnNldFdpZHRoICogc2NhbGUgPCB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG4gICAgICBjZW50ZXIgPSBcImhvcml6b250YWxseVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VudGVyID0gXCJ2ZXJ0aWNhbGx5XCI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChjYW52YXMub2Zmc2V0SGVpZ2h0ICogc2NhbGUgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgY2VudGVyID0gXCJ2ZXJ0aWNhbGx5XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZW50ZXIgPSBcImhvcml6b250YWxseVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9DZW50ZXIgaG9yaXpvbnRhbGx5IChmb3Igc3F1YXJlIG9yIHRhbGwgY2FudmFzZXMpXHJcbiAgdmFyIG1hcmdpbjtcclxuICBpZiAoY2VudGVyID09PSBcImhvcml6b250YWxseVwiKSB7XHJcbiAgICBtYXJnaW4gPSAod2luZG93LmlubmVyV2lkdGggLSBjYW52YXMub2Zmc2V0V2lkdGggKiBzY2FsZSkgLyAyO1xyXG4gICAgY2FudmFzLnN0eWxlLm1hcmdpblRvcCA9IDAgKyBcInB4XCI7XHJcbiAgICBjYW52YXMuc3R5bGUubWFyZ2luQm90dG9tID0gMCArIFwicHhcIjtcclxuICAgIGNhbnZhcy5zdHlsZS5tYXJnaW5MZWZ0ID0gbWFyZ2luICsgXCJweFwiO1xyXG4gICAgY2FudmFzLnN0eWxlLm1hcmdpblJpZ2h0ID0gbWFyZ2luICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgLy9DZW50ZXIgdmVydGljYWxseSAoZm9yIHdpZGUgY2FudmFzZXMpIFxyXG4gIGlmIChjZW50ZXIgPT09IFwidmVydGljYWxseVwiKSB7XHJcbiAgICBtYXJnaW4gPSAod2luZG93LmlubmVySGVpZ2h0IC0gY2FudmFzLm9mZnNldEhlaWdodCAqIHNjYWxlKSAvIDI7XHJcbiAgICBjYW52YXMuc3R5bGUubWFyZ2luVG9wID0gbWFyZ2luICsgXCJweFwiO1xyXG4gICAgY2FudmFzLnN0eWxlLm1hcmdpbkJvdHRvbSA9IG1hcmdpbiArIFwicHhcIjtcclxuICAgIGNhbnZhcy5zdHlsZS5tYXJnaW5MZWZ0ID0gMCArIFwicHhcIjtcclxuICAgIGNhbnZhcy5zdHlsZS5tYXJnaW5SaWdodCA9IDAgKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICAvLzMuIFJlbW92ZSBhbnkgcGFkZGluZyBmcm9tIHRoZSBjYW52YXMgIGFuZCBib2R5IGFuZCBzZXQgdGhlIGNhbnZhc1xyXG4gIC8vZGlzcGxheSBzdHlsZSB0byBcImJsb2NrXCJcclxuICBjYW52YXMuc3R5bGUucGFkZGluZ0xlZnQgPSAwICsgXCJweFwiO1xyXG4gIGNhbnZhcy5zdHlsZS5wYWRkaW5nUmlnaHQgPSAwICsgXCJweFwiO1xyXG4gIGNhbnZhcy5zdHlsZS5wYWRkaW5nVG9wID0gMCArIFwicHhcIjtcclxuICBjYW52YXMuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDAgKyBcInB4XCI7XHJcbiAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gIC8vNC4gU2V0IHRoZSBjb2xvciBvZiB0aGUgSFRNTCBib2R5IGJhY2tncm91bmRcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgLy9GaXggc29tZSBxdWlya2luZXNzIGluIHNjYWxpbmcgZm9yIFNhZmFyaVxyXG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICBpZiAodWEuaW5kZXhPZihcInNhZmFyaVwiKSAhPSAtMSkge1xyXG4gICAgaWYgKHVhLmluZGV4T2YoXCJjaHJvbWVcIikgPiAtMSkge1xyXG4gICAgICAvLyBDaHJvbWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNhZmFyaVxyXG4gICAgICAvL2NhbnZhcy5zdHlsZS5tYXhIZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgLy9jYW52YXMuc3R5bGUubWluSGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLzUuIFJldHVybiB0aGUgYHNjYWxlYCB2YWx1ZS4gVGhpcyBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgeW91J2xsIG5lZSB0aGlzIHZhbHVlIFxyXG4gIC8vZm9yIGNvcnJlY3QgaGl0IHRlc3RpbmcgYmV0d2VlbiB0aGUgcG9pbnRlciBhbmQgc3ByaXRlc1xyXG4gIHJldHVybiBzY2FsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NhbGVUb1dpbmRvdyIsImV4cG9ydCBjb25zdCBCT0FSRF9DT05UQUlORVIgPSAnQk9BUkRfQ09OVEFJTkVSJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9TRUNUSU9OID0gJ0dBTUVfU0VDVElPTidcclxuZXhwb3J0IGNvbnN0IEdBTUVfTElORSA9ICdHQU1FX0xJTkUnXHJcbmV4cG9ydCBjb25zdCBGSU5JU0hfTElORSA9ICdGSU5JU0hfTElORSdcclxuZXhwb3J0IGNvbnN0IEJST0tFTl9MSU5FID0gJ0JST0tFTl9MSU5FJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9QQVdOID0gJ0dBTUVfUEFXTidcclxuZXhwb3J0IGNvbnN0IEhJVF9SRUMgPSAnSElUX1JFQydcclxuZXhwb3J0IGNvbnN0IEJST0tFTl9DT1VOVEVSID0gJ0JST0tFTl9DT1VOVEVSJyIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiXSwic291cmNlUm9vdCI6IiJ9