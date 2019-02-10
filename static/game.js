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

      newParent.toLocal(new PIXI.Point(0, 0), this, this.position);
      newParent.addChild(this);
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./game/config.js");




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
  board: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 3, 0, 5, 0, 0, 0, 0, 1],
  number: 0
};
var opponent = {
  color: 'black',
  board: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
var app = new Application(_config__WEBPACK_IMPORTED_MODULE_3__["default"]);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true; // SETUP

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
  window.addEventListener('orientationchange', resize);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL0JvYXJkQ29udGFpbmVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9Ccm9rZW5MaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9GaW5pc2hMaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9HYW1lTGluZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NsYXNzZXMvR2FtZVNlY3Rpb24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL1Bhd24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy93aXRoQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3JhdGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkJvYXJkQ29udGFpbmVyIiwidXNlciIsIm9wcG9uZW50Iiwid2lkdGgiLCJyYXRpb3MiLCJoZWlnaHQiLCJ4VHlwZSIsInR5cGVzIiwibmFtZSIsInBvc2l0aW9uIiwic2V0IiwiYXBwIiwicmF0aW8iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInJlbmRlcmVyIiwicmVzaXplIiwic2NhbGUiLCJQSVhJIiwiQ29udGFpbmVyIiwid2l0aEJhc2UiLCJCcm9rZW5MaW5lIiwicHJvcHMiLCJjb3VudFN0eWxlIiwiVGV4dFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVRoaWNrbmVzcyIsImRyb3BTaGFkb3ciLCJkcm9wU2hhZG93Q29sb3IiLCJkcm9wU2hhZG93Qmx1ciIsImRyb3BTaGFkb3dEaXN0YW5jZSIsImRyb3BTaGFkb3dBbmdsZSIsImRyb3BTaGFkb3dBbHBoYSIsImNvdW50IiwiVGV4dCIsInBpdm90IiwidmlzaWJsZSIsImFkZENoaWxkIiwibmV3Q291bnQiLCJjaGlsZHJlbiIsImZpbHRlciIsImNoaWxkIiwibGVuZ3RoIiwiY291bnRDaGlsZCIsImZpbmQiLCJ0ZXh0IiwibnVtYmVyIiwiX2xvY2tHYW1lUGF3bnMiLCJwYXducyIsImZvckVhY2giLCJwYXduIiwiaSIsImFyciIsIlR3ZWVuTWF4IiwidG8iLCJ4IiwieSIsIkNPVU5UX0hFSUdIVCIsInVwZGF0ZUNvdW50IiwiRmluaXNoTGluZSIsInRvU2l0IiwiaGl0UmVjIiwiR3JhcGhpY3MiLCJkcmF3UmVjdCIsInVuU3Vic2NyaWJlIiwicG9pbnQiLCJHYW1lTGluZSIsImJsb2NrZWQiLCJhcmdzIiwicGF3bkFyciIsImZha2UiLCJyZXZlcnNlIiwicGFyZW50Iiwicm93IiwiUEFXTiIsImlzVXNlciIsInN1YnNjcmliZSIsInRvSGl0Iiwib3JkZXJQYXducyIsIkdhbWVTZWN0aW9uIiwibGluZSIsImxpbmVJbmRleCIsIlBhd24iLCJwYXduT2JqIiwiY29sb3IiLCJsb2FkZXIiLCJyZXNvdXJjZXMiLCJzb2xpZCIsInRleHR1cmUiLCJzb2xpZFRleHR1cmUiLCJzaWRlVGV4dHVyZSIsInNpZGUiLCJzZWxlY3RlZFRleHR1cmUiLCJzZWxlY3RlZCIsImN1cnNvciIsIm9uIiwiZnVuY3Rpb25zIiwibmV3UGFyZW50IiwiaGl0dGVkUGF3biIsImdvVG9Ccm9rZW5MaW5lIiwic2V0U2lkZSIsInRvTG9jYWwiLCJQb2ludCIsImludGVyYWN0aXZlIiwiYnJva2VuTGluZXMiLCJfZ2V0QnJva2VuTGluZXMiLCJfZ2V0VXNlciIsInNldFBhcmVudEN1c3RvbSIsIlNwcml0ZSIsImNvbXAiLCJwcm90b3R5cGUiLCJfZ2V0Qm9hcmQiLCJvYmoiLCJfZ2V0T3Bwb25lbnQiLCJfZ2V0U2VjdGlvbnMiLCJib2FyZENvbnRhaW5lciIsIl9nZXRMaW5lcyIsInJlZHVjZSIsImFjYyIsImN1ciIsImxpbmVzIiwicHVzaCIsIl9nZXRGaW5pc2hMaW5lcyIsIl9nZXRNeUZpbmlzaExpbmUiLCJfZ2V0T3Bwb25lbnRGaW5pc2hMaW5lIiwib3BwIiwiX2dldE15QnJva2VuTGluZSIsIl9nZXRPcHBvbmVudEJyb2tlbkxpbmUiLCJibG9ja0xpbmUiLCJhbnRpYWxpYXMiLCJ0cmFuc3BhcmVudCIsInJlc29sdXRpb24iLCJkZXZpY2VQaXhlbFJhdGlvIiwibGVnYWN5Iiwib25EcmFnU3RhcnQiLCJldmVudCIsImRyYWdnaW5nIiwic3RhcnRQb2ludCIsImRhdGEiLCJnbG9iYWwiLCJob21lUGFyZW50IiwicHJldmlvdXNQYXJlbnQiLCJkcmFnUG9pbnQiLCJnZXRHbG9iYWxQb3NpdGlvbiIsInNldFNlbGVjdGVkIiwib25EcmFnTW92ZSIsImUiLCJnbG9iYWxQb2ludCIsIm5ld1Bvc2l0aW9uIiwiY2VudGVyIiwidGVzdEhpdCIsIm9uRHJhZ0VuZCIsInNldFNvbGlkIiwib25BZGRlZCIsImNvbnRhaW5lciIsIm9uUmVtb3ZlZCIsImNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyIiwidmlldyIsIkgiLCJXIiwiY3JlYXRlU2VjdGlvbnMiLCJzZWN0aW9ucyIsIkFycmF5IiwibWFwIiwic2VjIiwiY3JlYXRlR2FtZUxpbmVzIiwiY3JlYXRlUGF3bnMiLCJlbGVtIiwic3ByaXRlIiwiY3JlYXRlRmluaXNoTGluZXMiLCJ1biIsIm51bSIsInRvcCIsInJvdGF0aW9uIiwiTWF0aCIsIlBJIiwiY3JlYXRlQnJva2VuTGluZSIsInkwIiwieTEiLCJib2FyZCIsInNlY3Rpb25BcnIiLCJsaW5lQXJyIiwidXNlclBhd25BcnIiLCJvcHBvbmVudFBhd25BcnIiLCJzaWRlTGluZUFyciIsImJyb2tlbkxpbmVBcnIiLCJib2FyZFBuZyIsInVzZXJQYXduUG5nIiwidXNlclBhd25TaWRlUG5nIiwidXNlclBhd25TZWxlY3RlZFBuZyIsIm9wcG9uZW50UGF3blBuZyIsIm9wcG9uZW50UGF3blNpZGVQbmciLCJvcHBvbmVudFBhd25TZWxlY3RlZFBuZyIsImxpbmVTZWxlY3RlZFBuZyIsInVzZXJQYXducyIsIm9wcG9uZW50UGF3bnMiLCJ1dGlscyIsInNraXBIZWxsbyIsIkFwcGxpY2F0aW9uIiwiY29uZmlnIiwic3R5bGUiLCJkaXNwbGF5IiwiYXV0b1Jlc2l6ZSIsInNldHVwIiwiQm9hcmRDb250YWluZXJDbGFzcyIsImhlbHBlcnMiLCJjaHVuayIsInNsaWNlIiwib3JkZXJMaW5lcyIsInN0YWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsInBpeGlMb2FkZXIiLCJhZGQiLCJsb2FkIiwiVE9QIiwiTEVGVCIsIk1JRERMRSIsIlNFQ19QRVJDIiwidG9wSGVpZ2h0UmF0aW8iLCJsZWZ0V2lkdGhSYXRpbyIsIm1pZGRsZVdpZHRoUmF0aW8iLCJwYXduSGVpZ2h0UmF0aW8iLCJzZWN0aW9uV2lkdGhSYXRpbyIsInNlY3Rpb25IZWlnaHRSYXRpbyIsImxpbmVXaWR0aFJhdGlvIiwibGluZUhlaWdodFJhdGlvIiwic2VjdGlvbiIsInNpZGVMaW5lIiwicGF3bl9zaWRlIiwiYnJva2VuX2xpbmUiLCJCT0FSRF9DT05UQUlORVIiLCJHQU1FX1NFQ1RJT04iLCJHQU1FX0xJTkUiLCJGSU5JU0hfTElORSIsIkJST0tFTl9MSU5FIiwiR0FNRV9QQVdOIiwiSElUX1JFQyIsIkJST0tFTl9DT1VOVEVSIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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Qjs7QUFFekMsNEJBQTRCLG1CQUFPLENBQUMsK0ZBQXlCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRDOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNUQSx3QkFBd0IsbUJBQU8sQ0FBQyx1RkFBcUI7O0FBRXJELHNCQUFzQixtQkFBTyxDQUFDLG1GQUFtQjs7QUFFakQsd0JBQXdCLG1CQUFPLENBQUMsdUZBQXFCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDVkEsd0JBQXdCLDJFQUEyRSxvQ0FBb0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLG9DQUFvQyw4SEFBOEgsR0FBRyxFQUFFLHNCQUFzQjs7QUFFblc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9nYW1lL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgQm9hcmRDb250YWluZXIgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IodXNlciwgb3Bwb25lbnQpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlciA9IHVzZXJcclxuICAgIHRoaXMub3Bwb25lbnQgPSBvcHBvbmVudFxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5XXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5IXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuQk9BUkRfQ09OVEFJTkVSXHJcbiAgICB0aGlzLm5hbWUgPSB0eXBlcy5CT0FSRF9DT05UQUlORVJcclxuICAgIHRoaXMucG9zaXRpb24uc2V0KDAsIDApXHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVCb2FyZENvbnRhaW5lciAoYXBwKSB7XHJcbiAgICBsZXQgcmF0aW8gPSAoMTAwICogd2luZG93LmlubmVySGVpZ2h0KSAvIHJhdGlvcy5IIC8gMTAwXHJcblxyXG4gICAgYXBwLnJlbmRlcmVyLnJlc2l6ZShyYXRpb3MuVyAqIHJhdGlvLCByYXRpb3MuSCAqIHJhdGlvKVxyXG4gICAgXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLlcgKiByYXRpb1xyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MuSCAqIHJhdGlvXHJcbiAgICB0aGlzLnNjYWxlLnNldChyYXRpbywgcmF0aW8pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShCb2FyZENvbnRhaW5lcilcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgQnJva2VuTGluZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkJST0tFTl9MSU5FXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLmJyb2tlbl9saW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5icm9rZW5fbGluZS5oZWlnaHRcclxuICAgIHRoaXMuY291bnRTdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgZm9udFNpemU6IDQyLFxyXG4gICAgICBmaWxsOiBcIndoaXRlXCIsXHJcbiAgICAgIHN0cm9rZTogJyNmZjMzMDAnLFxyXG4gICAgICBzdHJva2VUaGlja25lc3M6IDEsXHJcbiAgICAgIGRyb3BTaGFkb3c6IHRydWUsXHJcbiAgICAgIGRyb3BTaGFkb3dDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgIGRyb3BTaGFkb3dCbHVyOiA0LFxyXG4gICAgICBkcm9wU2hhZG93RGlzdGFuY2U6IC0yLFxyXG4gICAgICBkcm9wU2hhZG93QW5nbGU6IDMwLFxyXG4gICAgICBkcm9wU2hhZG93QWxwaGE6IC42LFxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgY291bnQgPSBuZXcgUElYSS5UZXh0KDAsIHRoaXMuY291bnRTdHlsZSlcclxuICAgIGNvdW50LnhUeXBlID0gdHlwZXMuQlJPS0VOX0NPVU5URVJcclxuICAgIGNvdW50LmhlaWdodCA9IHJhdGlvcy5DT1VOVF9IRUlHSFRcclxuICAgIGNvdW50LnBpdm90LnNldChjb3VudC53aWR0aCAvIDIsIGNvdW50LmhlaWdodCAvIDIpXHJcbiAgICBjb3VudC5wb3NpdGlvbi5zZXQocmF0aW9zLmJyb2tlbl9saW5lLndpZHRoIC8gMiwgMClcclxuICAgIGNvdW50LnZpc2libGUgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuYWRkQ2hpbGQoY291bnQpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb3VudCAoKSB7XHJcbiAgICBjb25zdCBuZXdDb3VudCA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pLmxlbmd0aFxyXG4gICAgY29uc3QgY291bnRDaGlsZCA9IHRoaXMuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuQlJPS0VOX0NPVU5URVIpXHJcbiAgICBjb3VudENoaWxkLnRleHQgPSBuZXdDb3VudFxyXG4gICAgY291bnRDaGlsZC52aXNpYmxlID0gbmV3Q291bnRcclxuXHJcbiAgICBpZiAobmV3Q291bnQgJiYgdGhpcy5udW1iZXIgPT09IDApIHtcclxuICAgICAgdGhpcy5fbG9ja0dhbWVQYXducygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcmRlclBhd25zICgpIHtcclxuICAgIGNvbnN0IHBhd25zID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfUEFXTilcclxuICAgIHBhd25zLmZvckVhY2goKHBhd24sIGksIGFycikgPT4ge1xyXG4gICAgICBUd2Vlbk1heC50byhwYXduLnBvc2l0aW9uLCAuNSwgeyB4OiAwLCB5OiByYXRpb3MuQ09VTlRfSEVJR0hUIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMudXBkYXRlQ291bnQoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoQnJva2VuTGluZSlcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgRmluaXNoTGluZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkZJTklTSF9MSU5FXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLnNpZGVMaW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5zaWRlTGluZS5oZWlnaHRcclxuICAgIHRoaXMudG9TaXQgPSB0cnVlXHJcblxyXG4gICAgbGV0IGhpdFJlYyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcclxuICAgIGhpdFJlYy54VHlwZSA9IHR5cGVzLkhJVF9SRUNcclxuICAgIGhpdFJlYy5kcmF3UmVjdCgwLCAwLCByYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5zaWRlTGluZS5oZWlnaHQpXHJcbiAgICBoaXRSZWMudmlzaWJsZSA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5hZGRDaGlsZChoaXRSZWMpXHJcbiAgfVxyXG5cclxuICBvcmRlclBhd25zICgpIHtcclxuICAgIHRoaXMuY2hpbGRyZW5cclxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSAhPT0gdHlwZXMuSElUX1JFQylcclxuICAgICAgLmZvckVhY2goKHBhd24sIGksIGFycikgPT4ge1xyXG4gICAgICAgIHBhd24udW5TdWJzY3JpYmUoKVxyXG4gICAgICAgIHBhd24ucG9zaXRpb24uc2V0KDAsIHJhdGlvcy5wYXduX3NpZGUuaGVpZ2h0ICogaSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHRlc3RIaXQgKHBvaW50KSB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuSElUX1JFQylcclxuICAgIFxyXG4gICAgaWYgKFxyXG4gICAgICBwb2ludC54ID49IDBcclxuICAgICAgJiYgcG9pbnQueCA8PSB3aWR0aFxyXG4gICAgICAmJiBwb2ludC55ID49IDBcclxuICAgICAgJiYgcG9pbnQueSA8PSBoZWlnaHRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoRmluaXNoTGluZSlcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgR2FtZUxpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5HQU1FX0xJTkVcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MubGluZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MubGluZS5oZWlnaHRcclxuICAgIHRoaXMuYmxvY2tlZCA9IGZhbHNlXHJcblxyXG4gICAgbGV0IGhpdFJlYyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcclxuICAgIGhpdFJlYy54VHlwZSA9IHR5cGVzLkhJVF9SRUNcclxuICAgIGhpdFJlYy5kcmF3UmVjdCgwLCAwLCByYXRpb3MubGluZS53aWR0aCwgcmF0aW9zLmxpbmUuaGVpZ2h0KVxyXG4gICAgaGl0UmVjLnZpc2libGUgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuYWRkQ2hpbGQoaGl0UmVjKVxyXG4gIH1cclxuXHJcbiAgb3JkZXJQYXducyAoYXJncyA9IHt9KSB7XHJcbiAgICBjb25zdCBwYXduQXJyID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubmFtZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKVxyXG4gICAgY29uc3QgeyBmYWtlLCByZXZlcnNlID0gdGhpcy5wYXJlbnQubnVtYmVyID4gMSB9ID0gYXJnc1xyXG4gICAgY29uc3QgbGVuZ3RoID0gZmFrZSA/IHBhd25BcnIubGVuZ3RoICsgMSA6IHBhd25BcnIubGVuZ3RoXHJcblxyXG4gICAgbGV0IHJvdyA9IHJhdGlvcy5saW5lLmhlaWdodCAvIGxlbmd0aFxyXG5cclxuICAgIGlmIChyb3cgPCByYXRpb3MuUEFXTikge1xyXG4gICAgICByb3cgPSByb3cgLSAoKHJhdGlvcy5QQVdOIC0gcm93KSAvIGxlbmd0aClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdyA9IHJhdGlvcy5QQVdOXHJcbiAgICB9XHJcblxyXG4gICAgcGF3bkFyci5mb3JFYWNoKChwYXduLCBpLCBhcnIpID0+IHtcclxuICAgICAgcGF3bi51blN1YnNjcmliZSgpXHJcbiAgICAgIHJldmVyc2VcclxuICAgICAgICAgID8gVHdlZW5NYXgudG8ocGF3bi5wb3NpdGlvbiwgLjUsIHsgeDogMCwgeTogcmF0aW9zLmxpbmUuaGVpZ2h0IC0gKHJvdyAqIGkpIC0gcmF0aW9zLlBBV04gfSlcclxuICAgICAgICAgIDogVHdlZW5NYXgudG8ocGF3bi5wb3NpdGlvbiwgLjUsIHsgeDogMCwgeTogcm93ICogaSB9KVxyXG5cclxuICAgICAgaWYgKGkgKyAxID09PSBhcnIubGVuZ3RoICYmIHBhd24uaXNVc2VyICYmICF0aGlzLmJsb2NrZWQpIHtcclxuICAgICAgICBwYXduLnN1YnNjcmliZSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy50b1NpdCA9IHRydWVcclxuXHJcbiAgICBpZiAocGF3bkFyci5sZW5ndGggPT09IDEgJiYgIXBhd25BcnJbMF0uaXNVc2VyKSB7XHJcbiAgICAgIHRoaXMudG9IaXQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhd25BcnIubGVuZ3RoID4gMSAmJiAhcGF3bkFyclswXS5pc1VzZXIpIHtcclxuICAgICAgdGhpcy50b1NpdCA9IGZhbHNlXHJcbiAgICAgIHRoaXMudG9IaXQgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGVzdEhpdCAocG9pbnQpIHtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5ISVRfUkVDKVxyXG5cclxuICAgIGlmIChcclxuICAgICAgcG9pbnQueCA+PSAwXHJcbiAgICAgICYmIHBvaW50LnggPD0gd2lkdGhcclxuICAgICAgJiYgcG9pbnQueSA+PSAwXHJcbiAgICAgICYmIHBvaW50LnkgPD0gaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGJsb2NrTGluZSAoKSB7XHJcbiAgICB0aGlzLmJsb2NrZWQgPSB0cnVlXHJcbiAgICB0aGlzLm9yZGVyUGF3bnMoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoR2FtZUxpbmUpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEdhbWVTZWN0aW9uIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuR0FNRV9TRUNUSU9OXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLnNlY3Rpb24ud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLnNlY3Rpb24uaGVpZ2h0XHJcbiAgfVxyXG5cclxuICBvcmRlckxpbmVzICgpIHtcclxuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5cclxuXHJcbiAgICBpZiAodGhpcy5udW1iZXIgPiAxKSB7XHJcbiAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ucmV2ZXJzZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgobGluZSwgbGluZUluZGV4LCBhcnIpID0+IHtcclxuICAgICAgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLmxpbmUud2lkdGggKiAoYXJyLmxlbmd0aCAtIGxpbmVJbmRleCAtIDEpLCAwKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEdhbWVTZWN0aW9uKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgZnVuY3Rpb25zIGZyb20gJy4uL2Z1bmN0aW9ucydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5jbGFzcyBQYXduIGV4dGVuZHMgUElYSS5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhd25PYmosIGNvbG9yLCBpc1VzZXIpIHtcclxuICAgIHN1cGVyKFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNvbGlkXS50ZXh0dXJlKVxyXG5cclxuICAgIHRoaXMuc29saWRUZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW3Bhd25PYmouc29saWRdLnRleHR1cmVcclxuICAgIHRoaXMuc2lkZVRleHR1cmUgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zaWRlXS50ZXh0dXJlXHJcbiAgICB0aGlzLnNlbGVjdGVkVGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNlbGVjdGVkXS50ZXh0dXJlXHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcclxuICAgIHRoaXMuaXNVc2VyID0gaXNVc2VyXHJcbiAgICB0aGlzLmN1cnNvciA9ICdwb2ludGVyJ1xyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkdBTUVfUEFXTlxyXG4gICAgdGhpcy5vbignYWRkZWQnLCBmdW5jdGlvbnMub25BZGRlZClcclxuICAgIHRoaXMub24oJ3JlbW92ZWQnLCBmdW5jdGlvbnMub25SZW1vdmVkKVxyXG4gIH1cclxuXHJcbiAgc2V0UGFyZW50Q3VzdG9tIChuZXdQYXJlbnQpIHtcclxuICAgIGlmIChuZXdQYXJlbnQudG9IaXQpIHtcclxuICAgICAgbmV3UGFyZW50LnRvSGl0ID0gZmFsc2VcclxuICAgICAgbmV3UGFyZW50LnRvU2l0ID0gdHJ1ZVxyXG4gICAgICBcclxuICAgICAgY29uc3QgaGl0dGVkUGF3biA9IG5ld1BhcmVudC5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pXHJcbiAgICAgIGhpdHRlZFBhd24uZ29Ub0Jyb2tlbkxpbmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdQYXJlbnQueFR5cGUgPT09IHR5cGVzLkZJTklTSF9MSU5FKSB7XHJcbiAgICAgIHRoaXMuc2V0U2lkZSgpXHJcbiAgICB9XHJcbiAgICBuZXdQYXJlbnQudG9Mb2NhbChuZXcgUElYSS5Qb2ludCgwLDApLCB0aGlzLCB0aGlzLnBvc2l0aW9uKVxyXG4gICAgbmV3UGFyZW50LmFkZENoaWxkKHRoaXMpXHJcbiAgfVxyXG5cclxuICBzZXRTb2xpZCAoKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0aGlzLnNvbGlkVGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc2V0U2lkZSAoKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0aGlzLnNpZGVUZXh0dXJlXHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZCAoKSB7XHJcbiAgICB0aGlzLnRleHR1cmUgPSB0aGlzLnNlbGVjdGVkVGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlICgpIHtcclxuICAgIGZ1bmN0aW9ucy5zdWJzY3JpYmUodGhpcylcclxuICB9XHJcblxyXG4gIHVuU3Vic2NyaWJlICgpIHtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgZ29Ub0Jyb2tlbkxpbmUgKCkge1xyXG4gICAgY29uc3QgYnJva2VuTGluZXMgPSB0aGlzLl9nZXRCcm9rZW5MaW5lcygpXHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5fZ2V0VXNlcigpXHJcbiAgICB1c2VyLmNvbG9yID09PSB0aGlzLmNvbG9yXHJcbiAgICAgID8gdGhpcy5zZXRQYXJlbnRDdXN0b20oYnJva2VuTGluZXNbMV0pXHJcbiAgICAgIDogdGhpcy5zZXRQYXJlbnRDdXN0b20oYnJva2VuTGluZXNbMF0pXHJcbiAgfVxyXG5cclxuICBnb1RvRmluaXNoTGluZSAoKSB7XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKFBhd24pXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUGF3biB9IGZyb20gJy4vUGF3bi5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1lU2VjdGlvbiB9IGZyb20gJy4vR2FtZVNlY3Rpb24uY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtZUxpbmUgfSBmcm9tICcuL0dhbWVMaW5lLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbmlzaExpbmUgfSBmcm9tICcuL0ZpbmlzaExpbmUuY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnJva2VuTGluZSB9IGZyb20gJy4vQnJva2VuTGluZS5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb2FyZENvbnRhaW5lciB9IGZyb20gJy4vQm9hcmRDb250YWluZXIuY2xhc3MnIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29tcCkgPT4ge1xyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRCb2FyZCA9IGZ1bmN0aW9uIChvYmogPSB0aGlzKSB7XHJcbiAgICBpZiAob2JqLnhUeXBlID09PSB0eXBlcy5CT0FSRF9DT05UQUlORVIpIHtcclxuICAgICAgcmV0dXJuIG9ialxyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKCFvYmoucGFyZW50KSB7XHJcbiAgICAgIHJldHVybiBvYmouY2hpbGRyZW5bMF1cclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB0aGlzLl9nZXRCb2FyZChvYmoucGFyZW50KVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQoKS51c2VyXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0T3Bwb25lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQoKS5vcHBvbmVudFxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldFNlY3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1NFQ1RJT04pXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0TGluZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0U2VjdGlvbnMoKS5yZWR1Y2UoKGFjYywgY3VyLCBpLCBhcnIpID0+IHtcclxuICAgICAgY29uc3QgbGluZXMgPSBjdXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX0xJTkUpXHJcblxyXG4gICAgICBhY2MucHVzaCguLi5saW5lcylcclxuXHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIFtdKSAgIFxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldEZpbmlzaExpbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5GSU5JU0hfTElORSlcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRNeUZpbmlzaExpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5fZ2V0VXNlcigpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0RmluaXNoTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IHVzZXIubnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE9wcG9uZW50RmluaXNoTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG9wcCA9IHRoaXMuX2dldE9wcG9uZW50KClcclxuICAgIHJldHVybiB0aGlzLl9nZXRGaW5pc2hMaW5lcygpLmZpbmQobGluZSA9PiBsaW5lLm51bWJlciA9PT0gb3BwLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRCcm9rZW5MaW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuQlJPS0VOX0xJTkUpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0TXlCcm9rZW5MaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuX2dldFVzZXIoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJyb2tlbkxpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSB1c2VyLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRPcHBvbmVudEJyb2tlbkxpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBvcHAgPSB0aGlzLl9nZXRPcHBvbmVudCgpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0QnJva2VuTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IG9wcC5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fbG9ja0dhbWVQYXducyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5fZ2V0TGluZXMoKVxyXG4gICAgbGluZXNcclxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9MSU5FKVxyXG4gICAgICAuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICBsaW5lLmJsb2NrTGluZSgpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcFxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdpZHRoOiA4MDAsXHJcbiAgaGVpZ2h0OiA4MDAsXHJcbiAgYW50aWFsaWFzOiB0cnVlLFxyXG4gIHRyYW5zcGFyZW50OiBmYWxzZSxcclxuICByZXNvbHV0aW9uOiBkZXZpY2VQaXhlbFJhdGlvLFxyXG4gIGxlZ2FjeTp0cnVlLFxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdTdGFydChldmVudCkge1xyXG4gIGlmICghdGhpcy5kcmFnZ2luZykge1xyXG4gICAgdGhpcy5zdGFydFBvaW50ID0geyAuLi5ldmVudC5kYXRhLmdsb2JhbCB9XHJcbiAgICB0aGlzLmhvbWVQYXJlbnQgPSB0aGlzLnBhcmVudFxyXG4gICAgdGhpcy5wcmV2aW91c1BhcmVudCA9IHRoaXMucGFyZW50XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZVxyXG4gICAgdGhpcy5kcmFnUG9pbnQgPSB0aGlzLmdldEdsb2JhbFBvc2l0aW9uKClcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgdGhpcy5zZXRQYXJlbnRDdXN0b20oYm9hcmRDb250YWluZXIpXHJcbiAgICB0aGlzLnNldFNlbGVjdGVkKClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdNb3ZlKGUpIHtcclxuICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICBcclxuICAgIHRoaXMuZ2xvYmFsUG9pbnQgPSB7IHg6IHRoaXMuZHJhZ1BvaW50LnggLSAodGhpcy5zdGFydFBvaW50LnggLSBlLmRhdGEuZ2xvYmFsLngpLCB5OiB0aGlzLmRyYWdQb2ludC55IC0gKHRoaXMuc3RhcnRQb2ludC55IC0gZS5kYXRhLmdsb2JhbC55KSB9XHJcblxyXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSB0aGlzLnBhcmVudC50b0xvY2FsKHRoaXMuZ2xvYmFsUG9pbnQpXHJcbiAgICB0aGlzLnBvc2l0aW9uLnggPSBuZXdQb3NpdGlvbi54XHJcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSBuZXdQb3NpdGlvbi55XHJcblxyXG4gICAgbmV3UG9zaXRpb24ueCArPSB0aGlzLndpZHRoIC8gMlxyXG4gICAgbmV3UG9zaXRpb24ueSArPSB0aGlzLmhlaWdodCAvIDJcclxuXHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSB0aGlzLl9nZXRMaW5lcygpLmZpbmQobGluZSA9PiB7XHJcbiAgICAgIGxldCBjZW50ZXIgPSBsaW5lLnRvTG9jYWwodGhpcy5nbG9iYWxQb2ludClcclxuICAgICAgY2VudGVyLnggKz0gdGhpcy53aWR0aCAvIDJcclxuICAgICAgY2VudGVyLnkgKz0gdGhpcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgICByZXR1cm4gbGluZS50ZXN0SGl0KGNlbnRlcilcclxuICAgIH0pIHx8IGJvYXJkQ29udGFpbmVyXHJcblxyXG4gICAgaWYgKG5ld1BhcmVudC5uYW1lICE9PSB0aGlzLnByZXZpb3VzUGFyZW50Lm5hbWUpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1BhcmVudC5vcmRlclBhd25zICYmIHRoaXMucHJldmlvdXNQYXJlbnQub3JkZXJQYXducygpXHJcblxyXG4gICAgICBpZiAobmV3UGFyZW50Lm9yZGVyUGF3bnMgJiYgKG5ld1BhcmVudC50b0hpdCB8fCBuZXdQYXJlbnQudG9TaXQpKSB7XHJcbiAgICAgICAgbmV3UGFyZW50Lm9yZGVyUGF3bnMoeyBmYWtlOiB0cnVlIH0pXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1BhcmVudCA9IG5ld1BhcmVudFxyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnRW5kKCkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2VcclxuICAgIFxyXG4gICAgbGV0IGxpbmVzID0gdGhpcy5fZ2V0TGluZXMoKVxyXG4gICAgbGluZXMucHVzaCh0aGlzLl9nZXRNeUZpbmlzaExpbmUoKSlcclxuXHJcbiAgICBjb25zdCBuZXdQYXJlbnQgPSBsaW5lcy5maW5kKGxpbmUgPT4ge1xyXG4gICAgICBsZXQgY2VudGVyID0gbGluZS50b0xvY2FsKHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKSlcclxuICAgICAgY2VudGVyLnggKz0gdGhpcy53aWR0aCAvIDJcclxuICAgICAgY2VudGVyLnkgKz0gdGhpcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgICByZXR1cm4gbGluZS50ZXN0SGl0KGNlbnRlcikgJiYgKGxpbmUudG9IaXQgfHwgbGluZS50b1NpdClcclxuICAgIH0pIHx8IHRoaXMuaG9tZVBhcmVudFxyXG5cclxuICAgIHRoaXMuc2V0U29saWQoKVxyXG4gICAgdGhpcy5zZXRQYXJlbnRDdXN0b20obmV3UGFyZW50KVxyXG5cclxuICAgIHRoaXMuc3RhcnRQb2ludCA9IG51bGxcclxuICAgIHRoaXMuaG9tZVBhcmVudCA9IG51bGxcclxuICAgIHRoaXMucHJldmlvdXNQYXJlbnQgPSBudWxsXHJcbiAgICB0aGlzLmRyYWdQb2ludCA9IG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkFkZGVkIChjb250YWluZXIpIHtcclxuICBjb250YWluZXIub3JkZXJQYXducyAmJiBjb250YWluZXIub3JkZXJQYXducygpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvblJlbW92ZWQgKGNvbnRhaW5lcikge1xyXG4gIGNvbnRhaW5lci5vcmRlclBhd25zICYmIGNvbnRhaW5lci5vcmRlclBhd25zKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZSAob2JqKSB7XHJcbiAgb2JqLmludGVyYWN0aXZlID0gdHJ1ZVxyXG4gIG9iai5vbignbW91c2Vkb3duJywgb25EcmFnU3RhcnQpXHJcbiAgICAub24oJ3RvdWNoc3RhcnQnLCBvbkRyYWdTdGFydClcclxuICAgIC5vbignbW91c2V1cCcsIG9uRHJhZ0VuZClcclxuICAgIC5vbignbW91c2V1cG91dHNpZGUnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ3RvdWNoZW5kJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCd0b3VjaGVuZG91dHNpZGUnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ21vdXNlbW92ZScsIG9uRHJhZ01vdmUpXHJcbiAgICAub24oJ3RvdWNobW92ZScsIG9uRHJhZ01vdmUpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1blN1YnNjcmliZSAob2JqKSB7XHJcbiAgb2JqLmludGVyYWN0aXZlID0gdHJ1ZVxyXG4gIG9iai5vbignbW91c2Vkb3duJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2V1cCcsICgpID0+IHt9KVxyXG4gICAgLm9uKCdtb3VzZXVwb3V0c2lkZScsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaGVuZCcsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaGVuZG91dHNpZGUnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2Vtb3ZlJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNobW92ZScsICgpID0+IHt9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQm9hcmRDb250YWluZXIgKGJvYXJkQ29udGFpbmVyLCBhcHAsIHJhdGlvcykge1xyXG4gIGxldCByYXRpbyA9ICgxMDAgKiBhcHAucmVuZGVyZXIudmlldy5oZWlnaHQpIC8gcmF0aW9zLkggLyAxMDBcclxuXHJcbiAgYm9hcmRDb250YWluZXIud2lkdGggPSByYXRpb3MuVyAvIDEwMCAqIHJhdGlvXHJcbiAgYm9hcmRDb250YWluZXIuaGVpZ2h0ID0gcmF0aW9zLkggLyAxMDAgKiByYXRpb1xyXG5cclxuICBib2FyZENvbnRhaW5lci5wb3NpdGlvbi5zZXQoYXBwLnJlbmRlcmVyLnZpZXcud2lkdGggLyAyLCBhcHAucmVuZGVyZXIudmlldy5oZWlnaHQgLyAyKVxyXG4gIGJvYXJkQ29udGFpbmVyLnNjYWxlLnNldChyYXRpbywgcmF0aW8pXHJcbiAgYm9hcmRDb250YWluZXIucGl2b3Quc2V0KHJhdGlvcy5XIC8gMiwgcmF0aW9zLkggLyAyKVxyXG59IiwiaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4vcmF0aW9zJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQge1xyXG4gIFBhd24sXHJcbiAgR2FtZVNlY3Rpb24sXHJcbiAgR2FtZUxpbmUsXHJcbiAgRmluaXNoTGluZSxcclxuICBCcm9rZW5MaW5lXHJcbn0gZnJvbSAnLi9jbGFzc2VzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb25zICgpIHtcclxuICBjb25zdCBzZWN0aW9ucyA9IG5ldyBBcnJheSg0KS5maWxsKDApXHJcblxyXG4gIHJldHVybiBzZWN0aW9ucy5tYXAoKHNlYywgaSkgPT4ge1xyXG4gICAgc2VjID0gbmV3IEdhbWVTZWN0aW9uKClcclxuICAgIHNlYy5uYW1lID0gdHlwZXMuR0FNRV9TRUNUSU9OICsgJ18nICsgaVxyXG4gICAgc2VjLm51bWJlciA9IGlcclxuICAgIFxyXG4gICAgaWYgKGkgPT09IDApIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQgKyByYXRpb3Muc2VjdGlvbi53aWR0aCArIHJhdGlvcy5NSURETEUsIHJhdGlvcy5UT1ApXHJcbiAgICBpZiAoaSA9PT0gMSkgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCwgcmF0aW9zLlRPUClcclxuICAgIGlmIChpID09PSAyKSBzZWMucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZULCByYXRpb3MuSCAtIHJhdGlvcy5UT1AgLSByYXRpb3Muc2VjdGlvbi5oZWlnaHQpXHJcbiAgICBpZiAoaSA9PT0gMykgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCArIHJhdGlvcy5zZWN0aW9uLndpZHRoICsgcmF0aW9zLk1JRERMRSwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNlY3Rpb24uaGVpZ2h0KVxyXG5cclxuICAgIHJldHVybiBzZWNcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZUxpbmVzICgpIHtcclxuICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgyNCkuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gbGluZXMubWFwKChsaW5lLCBpLCBhcnIpID0+IHtcclxuICAgIGxpbmUgPSBuZXcgR2FtZUxpbmUoKVxyXG4gICAgbGluZS5uYW1lID0gdHlwZXMuR0FNRV9MSU5FICsgJ18nICsgaVxyXG4gICAgbGluZS5udW1iZXIgPSBpXHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGF3bnMgKHBhd25PYmosIGNvbG9yLCBpc1VzZXIgPSBmYWxzZSwgY291bnQgPSAxNSkge1xyXG4gIHJldHVybiBuZXcgQXJyYXkoY291bnQpLmZpbGwoMCkubWFwKChlbGVtLCBpKSA9PiB7XHJcbiAgICBjb25zdCBzcHJpdGUgPSBuZXcgUGF3bihwYXduT2JqLCBjb2xvciwgaXNVc2VyKVxyXG4gICAgc3ByaXRlLm5hbWUgPSBgJHtjb2xvcn1fJHt0eXBlcy5HQU1FX1BBV059XyR7aX1gXHJcbiAgICBzcHJpdGUubnVtYmVyID0gaVxyXG5cclxuICAgIHJldHVybiBzcHJpdGVcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmluaXNoTGluZXMgKHVuLCBvbikge1xyXG4gIGNvbnN0IGxpbmVzID0gbmV3IEFycmF5KDIpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIGxpbmVzLm1hcCgobGluZSwgaSwgYXJyKSA9PiB7XHJcbiAgICBsZXQgbnVtID0gaSA9PT0gMSA/IG9uIDogdW5cclxuXHJcbiAgICBsaW5lID0gbmV3IEZpbmlzaExpbmUoKVxyXG4gICAgbGluZS5uYW1lID0gdHlwZXMuRklOSVNIX0xJTkUgKyAnXycgKyBudW1cclxuICAgIGxpbmUubnVtYmVyID0gbnVtXHJcblxyXG4gICAgaWYgKGkgPT09IDApIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5XIC0gcmF0aW9zLnNpZGVMaW5lLnNpZGUgLSByYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5zaWRlTGluZS50b3ApXHJcbiAgICBpZiAoaSA9PT0gMSkge1xyXG4gICAgICBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuVyAtIHJhdGlvcy5zaWRlTGluZS5zaWRlIC0gcmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3MuSCAtIHJhdGlvcy5UT1AgLSByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0KVxyXG4gICAgICBsaW5lLnJvdGF0aW9uID0gTWF0aC5QSVxyXG4gICAgICBsaW5lLnBpdm90LnNldChyYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5zaWRlTGluZS5oZWlnaHQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnJva2VuTGluZSAodW4sIG9uKSB7XHJcbiAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXkoMikuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gbGluZXMubWFwKChsaW5lLCBpLCBhcnIpID0+IHtcclxuICAgIGxldCBudW0gPSBpID09PSAwID8gb24gOiB1blxyXG5cclxuICAgIGxpbmUgPSBuZXcgQnJva2VuTGluZSgpXHJcbiAgICBsaW5lLm5hbWUgPSB0eXBlcy5CUk9LRU5fTElORSArICdfJyArIG51bVxyXG4gICAgbGluZS5udW1iZXIgPSBudW1cclxuXHJcbiAgICBpZiAoaSA9PT0gMCkgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLmJyb2tlbl9saW5lLngsIHJhdGlvcy5icm9rZW5fbGluZS55MClcclxuICAgIGlmIChpID09PSAxKSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuYnJva2VuX2xpbmUueCwgcmF0aW9zLmJyb2tlbl9saW5lLnkxKVxyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4vaGVscGVycydcclxuaW1wb3J0IHsgQm9hcmRDb250YWluZXIgYXMgQm9hcmRDb250YWluZXJDbGFzcyB9IGZyb20gJy4vY2xhc3NlcydcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZydcclxuXHJcbmxldCBib2FyZENvbnRhaW5lciwgYm9hcmQsIHNlY3Rpb25BcnIgPSBbXSwgbGluZUFyciA9IFtdLCB1c2VyUGF3bkFyciA9IFtdLCBvcHBvbmVudFBhd25BcnIgPSBbXSwgc2lkZUxpbmVBcnIgPSBbXSwgYnJva2VuTGluZUFyciA9IFtdXHJcblxyXG5jb25zdCB1c2VyID0ge1xyXG4gIGNvbG9yOiAnd2hpdGUnLFxyXG4gIGJvYXJkOiBbXHJcbiAgICAxLCAwLCAwLCAwLCAwLCAwLFxyXG4gICAgMCwgMCwgMCwgMCwgMCwgMSxcclxuICAgIDEsIDAsIDAsIDAsIDMsIDAsXHJcbiAgICA1LCAwLCAwLCAwLCAwLCAxXHJcbiAgXSxcclxuICBudW1iZXI6IDBcclxufVxyXG5cclxuY29uc3Qgb3Bwb25lbnQgPSB7XHJcbiAgY29sb3I6ICdibGFjaycsXHJcbiAgYm9hcmQ6IFtcclxuICAgIDAsIDEsIDAsIDAsIDAsIDAsXHJcbiAgICAwLCAwLCAwLCAwLCAwLCAwLFxyXG4gICAgMCwgMCwgMCwgMCwgMCwgMCxcclxuICAgIDAsIDAsIDAsIDAsIDAsIDBcclxuICBdLFxyXG4gIG51bWJlcjogMVxyXG59XHJcblxyXG5jb25zdCBib2FyZFBuZyA9ICdib2FyZC5wbmcnXHJcbmNvbnN0IHVzZXJQYXduUG5nID0gYCR7dXNlci5jb2xvcn1fcGF3bi5wbmdgXHJcbmNvbnN0IHVzZXJQYXduU2lkZVBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd24yLnBuZ2BcclxuY29uc3QgdXNlclBhd25TZWxlY3RlZFBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd25fc2VsZWN0ZWQucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25QbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bi5wbmdgXHJcbmNvbnN0IG9wcG9uZW50UGF3blNpZGVQbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bjIucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25TZWxlY3RlZFBuZyA9IGAke29wcG9uZW50LmNvbG9yfV9wYXduX3NlbGVjdGVkLnBuZ2BcclxuY29uc3QgbGluZVNlbGVjdGVkUG5nID0gJ2xpbmVfc2VsZWN0ZWQucG5nJ1xyXG5cclxuY29uc3QgdXNlclBhd25zID0ge1xyXG4gIHNvbGlkOiB1c2VyUGF3blBuZyxcclxuICBzaWRlOiB1c2VyUGF3blNpZGVQbmcsXHJcbiAgc2VsZWN0ZWQ6IHVzZXJQYXduU2VsZWN0ZWRQbmdcclxufVxyXG5cclxuY29uc3Qgb3Bwb25lbnRQYXducyA9IHtcclxuICBzb2xpZDogb3Bwb25lbnRQYXduUG5nLFxyXG4gIHNpZGU6IG9wcG9uZW50UGF3blNpZGVQbmcsXHJcbiAgc2VsZWN0ZWQ6IG9wcG9uZW50UGF3blNlbGVjdGVkUG5nXHJcbn1cclxuXHJcblBJWEkudXRpbHMuc2tpcEhlbGxvKClcclxuXHJcbmxldCBBcHBsaWNhdGlvbiA9IFBJWEkuQXBwbGljYXRpb24sXHJcbiAgICBsb2FkZXIgPSBQSVhJLmxvYWRlcixcclxuICAgIHJlc291cmNlcyA9IFBJWEkubG9hZGVyLnJlc291cmNlcyxcclxuICAgIFNwcml0ZSA9IFBJWEkuU3ByaXRlXHJcblxyXG5sZXQgYXBwID0gbmV3IEFwcGxpY2F0aW9uKGNvbmZpZylcclxuYXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcclxuYXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG5hcHAucmVuZGVyZXIuYXV0b1Jlc2l6ZSA9IHRydWVcclxuXHJcbi8vIFNFVFVQXHJcbmNvbnN0IHNldHVwID0gKCkgPT4ge1xyXG4gIGJvYXJkQ29udGFpbmVyID0gbmV3IEJvYXJkQ29udGFpbmVyQ2xhc3ModXNlciwgb3Bwb25lbnQpXHJcblxyXG4gIGJvYXJkID0gbmV3IFNwcml0ZShyZXNvdXJjZXNbYm9hcmRQbmddLnRleHR1cmUpXHJcbiAgYm9hcmRDb250YWluZXIuYWRkQ2hpbGQoYm9hcmQpXHJcbiAgXHJcbiAgc2VjdGlvbkFyciA9IGhlbHBlcnMuY3JlYXRlU2VjdGlvbnMoKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKC4uLnNlY3Rpb25BcnIpXHJcblxyXG4gIGxpbmVBcnIgPSBoZWxwZXJzLmNyZWF0ZUdhbWVMaW5lcygpXHJcbiAgc2VjdGlvbkFyci5mb3JFYWNoKChzZWMsIGksIGFycikgPT4ge1xyXG4gICAgY29uc3QgY2h1bmsgPSBsaW5lQXJyLmxlbmd0aCAvIGFyci5sZW5ndGhcclxuICAgIHNlYy5hZGRDaGlsZChcclxuICAgICAgLi4ubGluZUFyci5zbGljZShjaHVuayAqIGksIGNodW5rICogKGkgKyAxKSlcclxuICAgIClcclxuXHJcbiAgICBzZWMub3JkZXJMaW5lcygpXHJcbiAgfSlcclxuXHJcbiAgc2lkZUxpbmVBcnIgPSBoZWxwZXJzLmNyZWF0ZUZpbmlzaExpbmVzKHVzZXIubnVtYmVyLCBvcHBvbmVudC5udW1iZXIpXHJcbiAgYm9hcmRDb250YWluZXIuYWRkQ2hpbGQoLi4uc2lkZUxpbmVBcnIpXHJcblxyXG4gIGJyb2tlbkxpbmVBcnIgPSBoZWxwZXJzLmNyZWF0ZUJyb2tlbkxpbmUodXNlci5udW1iZXIsIG9wcG9uZW50Lm51bWJlcilcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZCguLi5icm9rZW5MaW5lQXJyKVxyXG5cclxuICB1c2VyUGF3bkFyciA9IGhlbHBlcnMuY3JlYXRlUGF3bnModXNlclBhd25zLCB1c2VyLmNvbG9yLCB0cnVlLCAxNSlcclxuICBvcHBvbmVudFBhd25BcnIgPSBoZWxwZXJzLmNyZWF0ZVBhd25zKG9wcG9uZW50UGF3bnMsIG9wcG9uZW50LmNvbG9yLCBmYWxzZSwgMTUpXHJcblxyXG4gIGxpbmVBcnIucmVkdWNlKChhY2MsIGN1ciwgaSwgYXJyKSA9PiB7XHJcbiAgICBpZiAodXNlci5ib2FyZFtpXSA+IDApIHtcclxuICAgICAgY3VyLmFkZENoaWxkKC4uLnVzZXJQYXduQXJyLnNsaWNlKGFjYy51c2VyLCBhY2MudXNlciArIHVzZXIuYm9hcmRbaV0pKVxyXG4gICAgICBhY2MudXNlciArPSB1c2VyLmJvYXJkW2ldXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wcG9uZW50LmJvYXJkW2ldID4gMCkge1xyXG4gICAgICBjdXIuYWRkQ2hpbGQoLi4ub3Bwb25lbnRQYXduQXJyLnNsaWNlKGFjYy5vcHBvbmVudCwgYWNjLm9wcG9uZW50ICsgb3Bwb25lbnQuYm9hcmRbaV0pKVxyXG4gICAgICBhY2Mub3Bwb25lbnQgKz0gb3Bwb25lbnQuYm9hcmRbaV1cclxuICAgIH1cclxuXHJcbiAgICBjdXIub3JkZXJQYXducygpXHJcblxyXG4gICAgcmV0dXJuIGFjY1xyXG4gIH0sIHsgdXNlcjogMCwgb3Bwb25lbnQ6IDAgfSlcclxuXHJcbiAgYm9hcmRDb250YWluZXIuY2FsY3VsYXRlQm9hcmRDb250YWluZXIoYXBwKVxyXG5cclxuICBhcHAuc3RhZ2UuYWRkQ2hpbGQoYm9hcmRDb250YWluZXIpXHJcblxyXG4gIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcclxuICAgIC8vIGFwcC5yZW5kZXJlci5yZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgIGJvYXJkQ29udGFpbmVyLmNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyKGFwcClcclxuICB9XHJcbiAgXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSlcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCByZXNpemUpXHJcbiAgXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS5hcHBlbmRDaGlsZChhcHAudmlldylcclxuICBcclxuICByZXNpemUoKVxyXG59XHJcblxyXG5jb25zdCBwaXhpTG9hZGVyID0gKCkgPT4ge1xyXG4gIGxvYWRlclxyXG4gICAgLmFkZChbXHJcbiAgICAgIGJvYXJkUG5nLCBcclxuICAgICAgdXNlclBhd25QbmcsIFxyXG4gICAgICBvcHBvbmVudFBhd25QbmcsXHJcbiAgICAgIHVzZXJQYXduU2lkZVBuZyxcclxuICAgICAgb3Bwb25lbnRQYXduU2lkZVBuZyxcclxuICAgICAgdXNlclBhd25TZWxlY3RlZFBuZyxcclxuICAgICAgb3Bwb25lbnRQYXduU2VsZWN0ZWRQbmcsXHJcbiAgICAgIGxpbmVTZWxlY3RlZFBuZ1xyXG4gICAgXSlcclxuICAgIC5sb2FkKHNldHVwKVxyXG59XHJcblxyXG5waXhpTG9hZGVyKClcclxuIiwiZXhwb3J0IGNvbnN0IEggPSA3NjhcclxuZXhwb3J0IGNvbnN0IFcgPSAxMTQ3XHJcbmV4cG9ydCBjb25zdCBUT1AgPSAyMFxyXG5leHBvcnQgY29uc3QgTEVGVCA9IDEwOFxyXG5leHBvcnQgY29uc3QgTUlERExFID0gODJcclxuZXhwb3J0IGNvbnN0IFBBV04gPSA3MVxyXG5leHBvcnQgY29uc3QgU0VDX1BFUkMgPSA4NVxyXG5leHBvcnQgY29uc3QgQ09VTlRfSEVJR0hUID0gNTBcclxuXHJcbmV4cG9ydCBjb25zdCB0b3BIZWlnaHRSYXRpbyA9IFRPUCAqIDEwMCAvIEhcclxuZXhwb3J0IGNvbnN0IGxlZnRXaWR0aFJhdGlvID0gTEVGVCAqIDEwMCAvIFdcclxuZXhwb3J0IGNvbnN0IG1pZGRsZVdpZHRoUmF0aW8gPSBNSURETEUgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBwYXduSGVpZ2h0UmF0aW8gPSBQQVdOICogMTAwIC8gSFxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb25XaWR0aFJhdGlvID0gKChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAyKSAqIDEwMCAvIFdcclxuZXhwb3J0IGNvbnN0IHNlY3Rpb25IZWlnaHRSYXRpbyA9ICgoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDApICogMTAwIC8gSFxyXG5leHBvcnQgY29uc3QgbGluZVdpZHRoUmF0aW8gPSBzZWN0aW9uV2lkdGhSYXRpbyAvIDZcclxuZXhwb3J0IGNvbnN0IGxpbmVIZWlnaHRSYXRpbyA9IHNlY3Rpb25IZWlnaHRSYXRpb1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmUgPSB7XHJcbiAgd2lkdGg6IChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAxMixcclxuICBoZWlnaHQ6IChIIC0gKFRPUCAqIDIpKSAvIDIgKiBTRUNfUEVSQyAvIDEwMFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VjdGlvbiA9IHtcclxuICB3aWR0aDogKFcgLSAoTEVGVCAqIDIpIC0gTUlERExFKSAvIDIsXHJcbiAgaGVpZ2h0OiAoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJvYXJkID0ge1xyXG4gIHdpZHRoOiAxMTQ3LFxyXG4gIGhlaWdodDogNzY4XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWRlTGluZSA9IHtcclxuICB3aWR0aDogNjUsXHJcbiAgaGVpZ2h0OiAyMTAsXHJcbiAgdG9wOiAxMzMsXHJcbiAgc2lkZTogKExFRlQgLSA2NSkgLyAyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXduX3NpZGUgPSB7XHJcbiAgd2lkdGg6IDY1LFxyXG4gIGhlaWdodDogMTRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJyb2tlbl9saW5lID0ge1xyXG4gIHdpZHRoOiBQQVdOLFxyXG4gIGhlaWdodDogUEFXTiArIENPVU5UX0hFSUdIVCxcclxuICB4OiBMRUZUICsgc2VjdGlvbi53aWR0aCArICgoTUlERExFIC0gUEFXTikgLyAyKSxcclxuICB5MDogKEggLyAyKSAtICgoUEFXTiArIENPVU5UX0hFSUdIVCkgKiAyKSxcclxuICB5MTogKEggLyAyKSArICgoUEFXTiArIENPVU5UX0hFSUdIVCkgKiAxKVxyXG59IiwiZXhwb3J0IGNvbnN0IEJPQVJEX0NPTlRBSU5FUiA9ICdCT0FSRF9DT05UQUlORVInXHJcbmV4cG9ydCBjb25zdCBHQU1FX1NFQ1RJT04gPSAnR0FNRV9TRUNUSU9OJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9MSU5FID0gJ0dBTUVfTElORSdcclxuZXhwb3J0IGNvbnN0IEZJTklTSF9MSU5FID0gJ0ZJTklTSF9MSU5FJ1xyXG5leHBvcnQgY29uc3QgQlJPS0VOX0xJTkUgPSAnQlJPS0VOX0xJTkUnXHJcbmV4cG9ydCBjb25zdCBHQU1FX1BBV04gPSAnR0FNRV9QQVdOJ1xyXG5leHBvcnQgY29uc3QgSElUX1JFQyA9ICdISVRfUkVDJ1xyXG5leHBvcnQgY29uc3QgQlJPS0VOX0NPVU5URVIgPSAnQlJPS0VOX0NPVU5URVInIiwiZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyJdLCJzb3VyY2VSb290IjoiIn0=