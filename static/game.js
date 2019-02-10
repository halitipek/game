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
    this.setParentCustom(this._getBoard());
    this.setSelected();
  }
}
function onDragMove(e) {
  var _this = this;

  if (this.dragging) {
    //this.globalPoint = { x: this.dragPoint.x - (this.startPoint.x - e.data.global.x), y: this.dragPoint.y - (this.startPoint.y - e.data.global.y) }
    var newPosition = this.parent.toLocal(e.data.global);
    this.position.x = newPosition.x;
    this.position.y = newPosition.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL0JvYXJkQ29udGFpbmVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9Ccm9rZW5MaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9GaW5pc2hMaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9HYW1lTGluZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NsYXNzZXMvR2FtZVNlY3Rpb24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL1Bhd24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy93aXRoQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3JhdGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkJvYXJkQ29udGFpbmVyIiwidXNlciIsIm9wcG9uZW50Iiwid2lkdGgiLCJyYXRpb3MiLCJoZWlnaHQiLCJ4VHlwZSIsInR5cGVzIiwibmFtZSIsInBvc2l0aW9uIiwic2V0IiwiYXBwIiwicmF0aW8iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInJlbmRlcmVyIiwicmVzaXplIiwic2NhbGUiLCJQSVhJIiwiQ29udGFpbmVyIiwid2l0aEJhc2UiLCJCcm9rZW5MaW5lIiwicHJvcHMiLCJjb3VudFN0eWxlIiwiVGV4dFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVRoaWNrbmVzcyIsImRyb3BTaGFkb3ciLCJkcm9wU2hhZG93Q29sb3IiLCJkcm9wU2hhZG93Qmx1ciIsImRyb3BTaGFkb3dEaXN0YW5jZSIsImRyb3BTaGFkb3dBbmdsZSIsImRyb3BTaGFkb3dBbHBoYSIsImNvdW50IiwiVGV4dCIsInBpdm90IiwidmlzaWJsZSIsImFkZENoaWxkIiwibmV3Q291bnQiLCJjaGlsZHJlbiIsImZpbHRlciIsImNoaWxkIiwibGVuZ3RoIiwiY291bnRDaGlsZCIsImZpbmQiLCJ0ZXh0IiwibnVtYmVyIiwiX2xvY2tHYW1lUGF3bnMiLCJwYXducyIsImZvckVhY2giLCJwYXduIiwiaSIsImFyciIsIlR3ZWVuTWF4IiwidG8iLCJ4IiwieSIsIkNPVU5UX0hFSUdIVCIsInVwZGF0ZUNvdW50IiwiRmluaXNoTGluZSIsInRvU2l0IiwiaGl0UmVjIiwiR3JhcGhpY3MiLCJkcmF3UmVjdCIsInVuU3Vic2NyaWJlIiwicG9pbnQiLCJHYW1lTGluZSIsImJsb2NrZWQiLCJhcmdzIiwicGF3bkFyciIsImZha2UiLCJyZXZlcnNlIiwicGFyZW50Iiwicm93IiwiUEFXTiIsImlzVXNlciIsInN1YnNjcmliZSIsInRvSGl0Iiwib3JkZXJQYXducyIsIkdhbWVTZWN0aW9uIiwibGluZSIsImxpbmVJbmRleCIsIlBhd24iLCJwYXduT2JqIiwiY29sb3IiLCJsb2FkZXIiLCJyZXNvdXJjZXMiLCJzb2xpZCIsInRleHR1cmUiLCJzb2xpZFRleHR1cmUiLCJzaWRlVGV4dHVyZSIsInNpZGUiLCJzZWxlY3RlZFRleHR1cmUiLCJzZWxlY3RlZCIsImN1cnNvciIsIm9uIiwiZnVuY3Rpb25zIiwibmV3UGFyZW50IiwiaGl0dGVkUGF3biIsImdvVG9Ccm9rZW5MaW5lIiwic2V0U2lkZSIsInRvTG9jYWwiLCJQb2ludCIsImludGVyYWN0aXZlIiwiYnJva2VuTGluZXMiLCJfZ2V0QnJva2VuTGluZXMiLCJfZ2V0VXNlciIsInNldFBhcmVudEN1c3RvbSIsIlNwcml0ZSIsImNvbXAiLCJwcm90b3R5cGUiLCJfZ2V0Qm9hcmQiLCJvYmoiLCJfZ2V0T3Bwb25lbnQiLCJfZ2V0U2VjdGlvbnMiLCJib2FyZENvbnRhaW5lciIsIl9nZXRMaW5lcyIsInJlZHVjZSIsImFjYyIsImN1ciIsImxpbmVzIiwicHVzaCIsIl9nZXRGaW5pc2hMaW5lcyIsIl9nZXRNeUZpbmlzaExpbmUiLCJfZ2V0T3Bwb25lbnRGaW5pc2hMaW5lIiwib3BwIiwiX2dldE15QnJva2VuTGluZSIsIl9nZXRPcHBvbmVudEJyb2tlbkxpbmUiLCJibG9ja0xpbmUiLCJhbnRpYWxpYXMiLCJ0cmFuc3BhcmVudCIsInJlc29sdXRpb24iLCJkZXZpY2VQaXhlbFJhdGlvIiwibGVnYWN5Iiwib25EcmFnU3RhcnQiLCJldmVudCIsImRyYWdnaW5nIiwic3RhcnRQb2ludCIsImRhdGEiLCJnbG9iYWwiLCJob21lUGFyZW50IiwicHJldmlvdXNQYXJlbnQiLCJkcmFnUG9pbnQiLCJnZXRHbG9iYWxQb3NpdGlvbiIsInNldFNlbGVjdGVkIiwib25EcmFnTW92ZSIsImUiLCJuZXdQb3NpdGlvbiIsImNlbnRlciIsImdsb2JhbFBvaW50IiwidGVzdEhpdCIsIm9uRHJhZ0VuZCIsInNldFNvbGlkIiwib25BZGRlZCIsImNvbnRhaW5lciIsIm9uUmVtb3ZlZCIsImNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyIiwidmlldyIsIkgiLCJXIiwiY3JlYXRlU2VjdGlvbnMiLCJzZWN0aW9ucyIsIkFycmF5IiwibWFwIiwic2VjIiwiY3JlYXRlR2FtZUxpbmVzIiwiY3JlYXRlUGF3bnMiLCJlbGVtIiwic3ByaXRlIiwiY3JlYXRlRmluaXNoTGluZXMiLCJ1biIsIm51bSIsInRvcCIsInJvdGF0aW9uIiwiTWF0aCIsIlBJIiwiY3JlYXRlQnJva2VuTGluZSIsInkwIiwieTEiLCJib2FyZCIsInNlY3Rpb25BcnIiLCJsaW5lQXJyIiwidXNlclBhd25BcnIiLCJvcHBvbmVudFBhd25BcnIiLCJzaWRlTGluZUFyciIsImJyb2tlbkxpbmVBcnIiLCJib2FyZFBuZyIsInVzZXJQYXduUG5nIiwidXNlclBhd25TaWRlUG5nIiwidXNlclBhd25TZWxlY3RlZFBuZyIsIm9wcG9uZW50UGF3blBuZyIsIm9wcG9uZW50UGF3blNpZGVQbmciLCJvcHBvbmVudFBhd25TZWxlY3RlZFBuZyIsImxpbmVTZWxlY3RlZFBuZyIsInVzZXJQYXducyIsIm9wcG9uZW50UGF3bnMiLCJ1dGlscyIsInNraXBIZWxsbyIsIkFwcGxpY2F0aW9uIiwiY29uZmlnIiwic3R5bGUiLCJkaXNwbGF5IiwiYXV0b1Jlc2l6ZSIsInNldHVwIiwiQm9hcmRDb250YWluZXJDbGFzcyIsImhlbHBlcnMiLCJjaHVuayIsInNsaWNlIiwib3JkZXJMaW5lcyIsInN0YWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsInBpeGlMb2FkZXIiLCJhZGQiLCJsb2FkIiwiVE9QIiwiTEVGVCIsIk1JRERMRSIsIlNFQ19QRVJDIiwidG9wSGVpZ2h0UmF0aW8iLCJsZWZ0V2lkdGhSYXRpbyIsIm1pZGRsZVdpZHRoUmF0aW8iLCJwYXduSGVpZ2h0UmF0aW8iLCJzZWN0aW9uV2lkdGhSYXRpbyIsInNlY3Rpb25IZWlnaHRSYXRpbyIsImxpbmVXaWR0aFJhdGlvIiwibGluZUhlaWdodFJhdGlvIiwic2VjdGlvbiIsInNpZGVMaW5lIiwicGF3bl9zaWRlIiwiYnJva2VuX2xpbmUiLCJCT0FSRF9DT05UQUlORVIiLCJHQU1FX1NFQ1RJT04iLCJHQU1FX0xJTkUiLCJGSU5JU0hfTElORSIsIkJST0tFTl9MSU5FIiwiR0FNRV9QQVdOIiwiSElUX1JFQyIsIkJST0tFTl9DT1VOVEVSIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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YW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZ2FtZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEJvYXJkQ29udGFpbmVyIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXIsIG9wcG9uZW50KSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyXHJcbiAgICB0aGlzLm9wcG9uZW50ID0gb3Bwb25lbnRcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MuV1xyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MuSFxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkJPQVJEX0NPTlRBSU5FUlxyXG4gICAgdGhpcy5uYW1lID0gdHlwZXMuQk9BUkRfQ09OVEFJTkVSXHJcbiAgICB0aGlzLnBvc2l0aW9uLnNldCgwLCAwKVxyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlQm9hcmRDb250YWluZXIgKGFwcCkge1xyXG4gICAgbGV0IHJhdGlvID0gKDEwMCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyByYXRpb3MuSCAvIDEwMFxyXG5cclxuICAgIGFwcC5yZW5kZXJlci5yZXNpemUocmF0aW9zLlcgKiByYXRpbywgcmF0aW9zLkggKiByYXRpbylcclxuICAgIFxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5XICogcmF0aW9cclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLkggKiByYXRpb1xyXG4gICAgdGhpcy5zY2FsZS5zZXQocmF0aW8sIHJhdGlvKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoQm9hcmRDb250YWluZXIpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEJyb2tlbkxpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5CUk9LRU5fTElORVxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5icm9rZW5fbGluZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MuYnJva2VuX2xpbmUuaGVpZ2h0XHJcbiAgICB0aGlzLmNvdW50U3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgIGZvbnRTaXplOiA0MixcclxuICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxyXG4gICAgICBzdHJva2U6ICcjZmYzMzAwJyxcclxuICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAxLFxyXG4gICAgICBkcm9wU2hhZG93OiB0cnVlLFxyXG4gICAgICBkcm9wU2hhZG93Q29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICBkcm9wU2hhZG93Qmx1cjogNCxcclxuICAgICAgZHJvcFNoYWRvd0Rpc3RhbmNlOiAtMixcclxuICAgICAgZHJvcFNoYWRvd0FuZ2xlOiAzMCxcclxuICAgICAgZHJvcFNoYWRvd0FscGhhOiAuNixcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGNvdW50ID0gbmV3IFBJWEkuVGV4dCgwLCB0aGlzLmNvdW50U3R5bGUpXHJcbiAgICBjb3VudC54VHlwZSA9IHR5cGVzLkJST0tFTl9DT1VOVEVSXHJcbiAgICBjb3VudC5oZWlnaHQgPSByYXRpb3MuQ09VTlRfSEVJR0hUXHJcbiAgICBjb3VudC5waXZvdC5zZXQoY291bnQud2lkdGggLyAyLCBjb3VudC5oZWlnaHQgLyAyKVxyXG4gICAgY291bnQucG9zaXRpb24uc2V0KHJhdGlvcy5icm9rZW5fbGluZS53aWR0aCAvIDIsIDApXHJcbiAgICBjb3VudC52aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLmFkZENoaWxkKGNvdW50KVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ291bnQgKCkge1xyXG4gICAgY29uc3QgbmV3Q291bnQgPSB0aGlzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKS5sZW5ndGhcclxuICAgIGNvbnN0IGNvdW50Q2hpbGQgPSB0aGlzLmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkJST0tFTl9DT1VOVEVSKVxyXG4gICAgY291bnRDaGlsZC50ZXh0ID0gbmV3Q291bnRcclxuICAgIGNvdW50Q2hpbGQudmlzaWJsZSA9IG5ld0NvdW50XHJcblxyXG4gICAgaWYgKG5ld0NvdW50ICYmIHRoaXMubnVtYmVyID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX2xvY2tHYW1lUGF3bnMoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3JkZXJQYXducyAoKSB7XHJcbiAgICBjb25zdCBwYXducyA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pXHJcbiAgICBwYXducy5mb3JFYWNoKChwYXduLCBpLCBhcnIpID0+IHtcclxuICAgICAgVHdlZW5NYXgudG8ocGF3bi5wb3NpdGlvbiwgLjUsIHsgeDogMCwgeTogcmF0aW9zLkNPVU5UX0hFSUdIVCB9KVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNvdW50KClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEJyb2tlbkxpbmUpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEZpbmlzaExpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5GSU5JU0hfTElORVxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5zaWRlTGluZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0XHJcbiAgICB0aGlzLnRvU2l0ID0gdHJ1ZVxyXG5cclxuICAgIGxldCBoaXRSZWMgPSBuZXcgUElYSS5HcmFwaGljcygpXHJcbiAgICBoaXRSZWMueFR5cGUgPSB0eXBlcy5ISVRfUkVDXHJcbiAgICBoaXRSZWMuZHJhd1JlY3QoMCwgMCwgcmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0KVxyXG4gICAgaGl0UmVjLnZpc2libGUgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuYWRkQ2hpbGQoaGl0UmVjKVxyXG4gIH1cclxuXHJcbiAgb3JkZXJQYXducyAoKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuXHJcbiAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgIT09IHR5cGVzLkhJVF9SRUMpXHJcbiAgICAgIC5mb3JFYWNoKChwYXduLCBpLCBhcnIpID0+IHtcclxuICAgICAgICBwYXduLnVuU3Vic2NyaWJlKClcclxuICAgICAgICBwYXduLnBvc2l0aW9uLnNldCgwLCByYXRpb3MucGF3bl9zaWRlLmhlaWdodCAqIGkpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICB0ZXN0SGl0IChwb2ludCkge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkhJVF9SRUMpXHJcbiAgICBcclxuICAgIGlmIChcclxuICAgICAgcG9pbnQueCA+PSAwXHJcbiAgICAgICYmIHBvaW50LnggPD0gd2lkdGhcclxuICAgICAgJiYgcG9pbnQueSA+PSAwXHJcbiAgICAgICYmIHBvaW50LnkgPD0gaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEZpbmlzaExpbmUpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEdhbWVMaW5lIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuR0FNRV9MSU5FXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLmxpbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLmxpbmUuaGVpZ2h0XHJcbiAgICB0aGlzLmJsb2NrZWQgPSBmYWxzZVxyXG5cclxuICAgIGxldCBoaXRSZWMgPSBuZXcgUElYSS5HcmFwaGljcygpXHJcbiAgICBoaXRSZWMueFR5cGUgPSB0eXBlcy5ISVRfUkVDXHJcbiAgICBoaXRSZWMuZHJhd1JlY3QoMCwgMCwgcmF0aW9zLmxpbmUud2lkdGgsIHJhdGlvcy5saW5lLmhlaWdodClcclxuICAgIGhpdFJlYy52aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLmFkZENoaWxkKGhpdFJlYylcclxuICB9XHJcblxyXG4gIG9yZGVyUGF3bnMgKGFyZ3MgPSB7fSkge1xyXG4gICAgY29uc3QgcGF3bkFyciA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5hbWUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfUEFXTilcclxuICAgIGNvbnN0IHsgZmFrZSwgcmV2ZXJzZSA9IHRoaXMucGFyZW50Lm51bWJlciA+IDEgfSA9IGFyZ3NcclxuICAgIGNvbnN0IGxlbmd0aCA9IGZha2UgPyBwYXduQXJyLmxlbmd0aCArIDEgOiBwYXduQXJyLmxlbmd0aFxyXG5cclxuICAgIGxldCByb3cgPSByYXRpb3MubGluZS5oZWlnaHQgLyBsZW5ndGhcclxuXHJcbiAgICBpZiAocm93IDwgcmF0aW9zLlBBV04pIHtcclxuICAgICAgcm93ID0gcm93IC0gKChyYXRpb3MuUEFXTiAtIHJvdykgLyBsZW5ndGgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3cgPSByYXRpb3MuUEFXTlxyXG4gICAgfVxyXG5cclxuICAgIHBhd25BcnIuZm9yRWFjaCgocGF3biwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIHBhd24udW5TdWJzY3JpYmUoKVxyXG4gICAgICByZXZlcnNlXHJcbiAgICAgICAgICA/IFR3ZWVuTWF4LnRvKHBhd24ucG9zaXRpb24sIC41LCB7IHg6IDAsIHk6IHJhdGlvcy5saW5lLmhlaWdodCAtIChyb3cgKiBpKSAtIHJhdGlvcy5QQVdOIH0pXHJcbiAgICAgICAgICA6IFR3ZWVuTWF4LnRvKHBhd24ucG9zaXRpb24sIC41LCB7IHg6IDAsIHk6IHJvdyAqIGkgfSlcclxuXHJcbiAgICAgIGlmIChpICsgMSA9PT0gYXJyLmxlbmd0aCAmJiBwYXduLmlzVXNlciAmJiAhdGhpcy5ibG9ja2VkKSB7XHJcbiAgICAgICAgcGF3bi5zdWJzY3JpYmUoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMudG9TaXQgPSB0cnVlXHJcblxyXG4gICAgaWYgKHBhd25BcnIubGVuZ3RoID09PSAxICYmICFwYXduQXJyWzBdLmlzVXNlcikge1xyXG4gICAgICB0aGlzLnRvSGl0ID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXduQXJyLmxlbmd0aCA+IDEgJiYgIXBhd25BcnJbMF0uaXNVc2VyKSB7XHJcbiAgICAgIHRoaXMudG9TaXQgPSBmYWxzZVxyXG4gICAgICB0aGlzLnRvSGl0ID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlc3RIaXQgKHBvaW50KSB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuSElUX1JFQylcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHBvaW50LnggPj0gMFxyXG4gICAgICAmJiBwb2ludC54IDw9IHdpZHRoXHJcbiAgICAgICYmIHBvaW50LnkgPj0gMFxyXG4gICAgICAmJiBwb2ludC55IDw9IGhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBibG9ja0xpbmUgKCkge1xyXG4gICAgdGhpcy5ibG9ja2VkID0gdHJ1ZVxyXG4gICAgdGhpcy5vcmRlclBhd25zKClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEdhbWVMaW5lKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBHYW1lU2VjdGlvbiBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkdBTUVfU0VDVElPTlxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5zZWN0aW9uLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5zZWN0aW9uLmhlaWdodFxyXG4gIH1cclxuXHJcbiAgb3JkZXJMaW5lcyAoKSB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuXHJcblxyXG4gICAgaWYgKHRoaXMubnVtYmVyID4gMSkge1xyXG4gICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLnJldmVyc2UoKVxyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkcmVuLmZvckVhY2goKGxpbmUsIGxpbmVJbmRleCwgYXJyKSA9PiB7XHJcbiAgICAgIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5saW5lLndpZHRoICogKGFyci5sZW5ndGggLSBsaW5lSW5kZXggLSAxKSwgMClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShHYW1lU2VjdGlvbilcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tICcuLi9mdW5jdGlvbnMnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuY2xhc3MgUGF3biBleHRlbmRzIFBJWEkuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihwYXduT2JqLCBjb2xvciwgaXNVc2VyKSB7XHJcbiAgICBzdXBlcihQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zb2xpZF0udGV4dHVyZSlcclxuXHJcbiAgICB0aGlzLnNvbGlkVGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNvbGlkXS50ZXh0dXJlXHJcbiAgICB0aGlzLnNpZGVUZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW3Bhd25PYmouc2lkZV0udGV4dHVyZVxyXG4gICAgdGhpcy5zZWxlY3RlZFRleHR1cmUgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zZWxlY3RlZF0udGV4dHVyZVxyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXHJcbiAgICB0aGlzLmlzVXNlciA9IGlzVXNlclxyXG4gICAgdGhpcy5jdXJzb3IgPSAncG9pbnRlcidcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5HQU1FX1BBV05cclxuICAgIHRoaXMub24oJ2FkZGVkJywgZnVuY3Rpb25zLm9uQWRkZWQpXHJcbiAgICB0aGlzLm9uKCdyZW1vdmVkJywgZnVuY3Rpb25zLm9uUmVtb3ZlZClcclxuICB9XHJcblxyXG4gIHNldFBhcmVudEN1c3RvbSAobmV3UGFyZW50KSB7XHJcbiAgICBpZiAobmV3UGFyZW50LnRvSGl0KSB7XHJcbiAgICAgIG5ld1BhcmVudC50b0hpdCA9IGZhbHNlXHJcbiAgICAgIG5ld1BhcmVudC50b1NpdCA9IHRydWVcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGhpdHRlZFBhd24gPSBuZXdQYXJlbnQuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKVxyXG4gICAgICBoaXR0ZWRQYXduLmdvVG9Ccm9rZW5MaW5lKClcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3UGFyZW50LnhUeXBlID09PSB0eXBlcy5GSU5JU0hfTElORSkge1xyXG4gICAgICB0aGlzLnNldFNpZGUoKVxyXG4gICAgfVxyXG4gICAgbmV3UGFyZW50LnRvTG9jYWwobmV3IFBJWEkuUG9pbnQoMCwwKSwgdGhpcywgdGhpcy5wb3NpdGlvbilcclxuICAgIG5ld1BhcmVudC5hZGRDaGlsZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgc2V0U29saWQgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zb2xpZFRleHR1cmVcclxuICB9XHJcblxyXG4gIHNldFNpZGUgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zaWRlVGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWQgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zZWxlY3RlZFRleHR1cmVcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZSAoKSB7XHJcbiAgICBmdW5jdGlvbnMuc3Vic2NyaWJlKHRoaXMpXHJcbiAgfVxyXG5cclxuICB1blN1YnNjcmliZSAoKSB7XHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gZmFsc2VcclxuICB9XHJcblxyXG4gIGdvVG9Ccm9rZW5MaW5lICgpIHtcclxuICAgIGNvbnN0IGJyb2tlbkxpbmVzID0gdGhpcy5fZ2V0QnJva2VuTGluZXMoKVxyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuX2dldFVzZXIoKVxyXG4gICAgdXNlci5jb2xvciA9PT0gdGhpcy5jb2xvclxyXG4gICAgICA/IHRoaXMuc2V0UGFyZW50Q3VzdG9tKGJyb2tlbkxpbmVzWzFdKVxyXG4gICAgICA6IHRoaXMuc2V0UGFyZW50Q3VzdG9tKGJyb2tlbkxpbmVzWzBdKVxyXG4gIH1cclxuXHJcbiAgZ29Ub0ZpbmlzaExpbmUgKCkge1xyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShQYXduKVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBhd24gfSBmcm9tICcuL1Bhd24uY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtZVNlY3Rpb24gfSBmcm9tICcuL0dhbWVTZWN0aW9uLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWVMaW5lIH0gZnJvbSAnLi9HYW1lTGluZS5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaW5pc2hMaW5lIH0gZnJvbSAnLi9GaW5pc2hMaW5lLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJyb2tlbkxpbmUgfSBmcm9tICcuL0Jyb2tlbkxpbmUuY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm9hcmRDb250YWluZXIgfSBmcm9tICcuL0JvYXJkQ29udGFpbmVyLmNsYXNzJyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbXApID0+IHtcclxuICBjb21wLnByb3RvdHlwZS5fZ2V0Qm9hcmQgPSBmdW5jdGlvbiAob2JqID0gdGhpcykge1xyXG4gICAgaWYgKG9iai54VHlwZSA9PT0gdHlwZXMuQk9BUkRfQ09OVEFJTkVSKSB7XHJcbiAgICAgIHJldHVybiBvYmpcclxuICAgIH1cclxuICBcclxuICAgIGlmICghb2JqLnBhcmVudCkge1xyXG4gICAgICByZXR1cm4gb2JqLmNoaWxkcmVuWzBdXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQob2JqLnBhcmVudClcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJvYXJkKCkudXNlclxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE9wcG9uZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJvYXJkKCkub3Bwb25lbnRcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRTZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9TRUNUSU9OKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldExpbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldFNlY3Rpb25zKCkucmVkdWNlKChhY2MsIGN1ciwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpbmVzID0gY3VyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9MSU5FKVxyXG5cclxuICAgICAgYWNjLnB1c2goLi4ubGluZXMpXHJcblxyXG4gICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCBbXSkgICBcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRGaW5pc2hMaW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuRklOSVNIX0xJTkUpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0TXlGaW5pc2hMaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuX2dldFVzZXIoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEZpbmlzaExpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSB1c2VyLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRPcHBvbmVudEZpbmlzaExpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBvcHAgPSB0aGlzLl9nZXRPcHBvbmVudCgpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0RmluaXNoTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IG9wcC5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0QnJva2VuTGluZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIHJldHVybiBib2FyZENvbnRhaW5lci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkJST0tFTl9MSU5FKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE15QnJva2VuTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLl9nZXRVc2VyKClcclxuICAgIHJldHVybiB0aGlzLl9nZXRCcm9rZW5MaW5lcygpLmZpbmQobGluZSA9PiBsaW5lLm51bWJlciA9PT0gdXNlci5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0T3Bwb25lbnRCcm9rZW5MaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgb3BwID0gdGhpcy5fZ2V0T3Bwb25lbnQoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJyb2tlbkxpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSBvcHAubnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2xvY2tHYW1lUGF3bnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IHRoaXMuX2dldExpbmVzKClcclxuICAgIGxpbmVzXHJcbiAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfTElORSlcclxuICAgICAgLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgbGluZS5ibG9ja0xpbmUoKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB3aWR0aDogODAwLFxyXG4gIGhlaWdodDogODAwLFxyXG4gIGFudGlhbGlhczogdHJ1ZSxcclxuICB0cmFuc3BhcmVudDogZmFsc2UsXHJcbiAgcmVzb2x1dGlvbjogZGV2aWNlUGl4ZWxSYXRpbyxcclxuICBsZWdhY3k6dHJ1ZSxcclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQpIHtcclxuICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcclxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHsgLi4uZXZlbnQuZGF0YS5nbG9iYWwgfVxyXG4gICAgdGhpcy5ob21lUGFyZW50ID0gdGhpcy5wYXJlbnRcclxuICAgIHRoaXMucHJldmlvdXNQYXJlbnQgPSB0aGlzLnBhcmVudFxyXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWVcclxuXHJcbiAgICB0aGlzLmRyYWdQb2ludCA9IHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKVxyXG4gICAgdGhpcy5zZXRQYXJlbnRDdXN0b20odGhpcy5fZ2V0Qm9hcmQoKSlcclxuICAgIHRoaXMuc2V0U2VsZWN0ZWQoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ01vdmUoZSkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7ICAgIFxyXG4gICAgLy90aGlzLmdsb2JhbFBvaW50ID0geyB4OiB0aGlzLmRyYWdQb2ludC54IC0gKHRoaXMuc3RhcnRQb2ludC54IC0gZS5kYXRhLmdsb2JhbC54KSwgeTogdGhpcy5kcmFnUG9pbnQueSAtICh0aGlzLnN0YXJ0UG9pbnQueSAtIGUuZGF0YS5nbG9iYWwueSkgfVxyXG5cclxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gdGhpcy5wYXJlbnQudG9Mb2NhbChlLmRhdGEuZ2xvYmFsKVxyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0gbmV3UG9zaXRpb24ueFxyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0gbmV3UG9zaXRpb24ueVxyXG5cclxuICAgIGNvbnN0IG5ld1BhcmVudCA9IHRoaXMuX2dldExpbmVzKCkuZmluZChsaW5lID0+IHtcclxuICAgICAgbGV0IGNlbnRlciA9IGxpbmUudG9Mb2NhbCh0aGlzLmdsb2JhbFBvaW50KVxyXG4gICAgICBjZW50ZXIueCArPSB0aGlzLndpZHRoIC8gMlxyXG4gICAgICBjZW50ZXIueSArPSB0aGlzLmhlaWdodCAvIDJcclxuXHJcbiAgICAgIHJldHVybiBsaW5lLnRlc3RIaXQoY2VudGVyKVxyXG4gICAgfSkgfHwgYm9hcmRDb250YWluZXJcclxuXHJcbiAgICBpZiAobmV3UGFyZW50Lm5hbWUgIT09IHRoaXMucHJldmlvdXNQYXJlbnQubmFtZSkge1xyXG4gICAgICB0aGlzLnByZXZpb3VzUGFyZW50Lm9yZGVyUGF3bnMgJiYgdGhpcy5wcmV2aW91c1BhcmVudC5vcmRlclBhd25zKClcclxuXHJcbiAgICAgIGlmIChuZXdQYXJlbnQub3JkZXJQYXducyAmJiAobmV3UGFyZW50LnRvSGl0IHx8IG5ld1BhcmVudC50b1NpdCkpIHtcclxuICAgICAgICBuZXdQYXJlbnQub3JkZXJQYXducyh7IGZha2U6IHRydWUgfSlcclxuICAgICAgICB0aGlzLnByZXZpb3VzUGFyZW50ID0gbmV3UGFyZW50XHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdFbmQoKSB7XHJcbiAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZVxyXG5cclxuICAgIGxldCBsaW5lcyA9IHRoaXMuX2dldExpbmVzKClcclxuICAgIGxpbmVzLnB1c2godGhpcy5fZ2V0TXlGaW5pc2hMaW5lKCkpXHJcblxyXG4gICAgY29uc3QgbmV3UGFyZW50ID0gbGluZXMuZmluZChsaW5lID0+IHtcclxuICAgICAgbGV0IGNlbnRlciA9IGxpbmUudG9Mb2NhbCh0aGlzLmdldEdsb2JhbFBvc2l0aW9uKCkpXHJcbiAgICAgIGNlbnRlci54ICs9IHRoaXMud2lkdGggLyAyXHJcbiAgICAgIGNlbnRlci55ICs9IHRoaXMuaGVpZ2h0IC8gMlxyXG5cclxuICAgICAgcmV0dXJuIGxpbmUudGVzdEhpdChjZW50ZXIpICYmIChsaW5lLnRvSGl0IHx8IGxpbmUudG9TaXQpXHJcbiAgICB9KSB8fCB0aGlzLmhvbWVQYXJlbnRcclxuXHJcbiAgICB0aGlzLnNldFNvbGlkKClcclxuICAgIHRoaXMuc2V0UGFyZW50Q3VzdG9tKG5ld1BhcmVudClcclxuXHJcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBudWxsXHJcbiAgICB0aGlzLmhvbWVQYXJlbnQgPSBudWxsXHJcbiAgICB0aGlzLnByZXZpb3VzUGFyZW50ID0gbnVsbFxyXG4gICAgdGhpcy5kcmFnUG9pbnQgPSBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25BZGRlZCAoY29udGFpbmVyKSB7XHJcbiAgY29udGFpbmVyLm9yZGVyUGF3bnMgJiYgY29udGFpbmVyLm9yZGVyUGF3bnMoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25SZW1vdmVkIChjb250YWluZXIpIHtcclxuICBjb250YWluZXIub3JkZXJQYXducyAmJiBjb250YWluZXIub3JkZXJQYXducygpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUgKG9iaikge1xyXG4gIG9iai5pbnRlcmFjdGl2ZSA9IHRydWVcclxuICBvYmoub24oJ21vdXNlZG93bicsIG9uRHJhZ1N0YXJ0KVxyXG4gICAgLm9uKCd0b3VjaHN0YXJ0Jywgb25EcmFnU3RhcnQpXHJcbiAgICAub24oJ21vdXNldXAnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ21vdXNldXBvdXRzaWRlJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCd0b3VjaGVuZCcsIG9uRHJhZ0VuZClcclxuICAgIC5vbigndG91Y2hlbmRvdXRzaWRlJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCdtb3VzZW1vdmUnLCBvbkRyYWdNb3ZlKVxyXG4gICAgLm9uKCd0b3VjaG1vdmUnLCBvbkRyYWdNb3ZlKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5TdWJzY3JpYmUgKG9iaikge1xyXG4gIG9iai5pbnRlcmFjdGl2ZSA9IHRydWVcclxuICBvYmoub24oJ21vdXNlZG93bicsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaHN0YXJ0JywgKCkgPT4ge30pXHJcbiAgICAub24oJ21vdXNldXAnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2V1cG91dHNpZGUnLCAoKSA9PiB7fSlcclxuICAgIC5vbigndG91Y2hlbmQnLCAoKSA9PiB7fSlcclxuICAgIC5vbigndG91Y2hlbmRvdXRzaWRlJywgKCkgPT4ge30pXHJcbiAgICAub24oJ21vdXNlbW92ZScsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaG1vdmUnLCAoKSA9PiB7fSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyIChib2FyZENvbnRhaW5lciwgYXBwLCByYXRpb3MpIHtcclxuICBsZXQgcmF0aW8gPSAoMTAwICogYXBwLnJlbmRlcmVyLnZpZXcuaGVpZ2h0KSAvIHJhdGlvcy5IIC8gMTAwXHJcblxyXG4gIGJvYXJkQ29udGFpbmVyLndpZHRoID0gcmF0aW9zLlcgLyAxMDAgKiByYXRpb1xyXG4gIGJvYXJkQ29udGFpbmVyLmhlaWdodCA9IHJhdGlvcy5IIC8gMTAwICogcmF0aW9cclxuXHJcbiAgYm9hcmRDb250YWluZXIucG9zaXRpb24uc2V0KGFwcC5yZW5kZXJlci52aWV3LndpZHRoIC8gMiwgYXBwLnJlbmRlcmVyLnZpZXcuaGVpZ2h0IC8gMilcclxuICBib2FyZENvbnRhaW5lci5zY2FsZS5zZXQocmF0aW8sIHJhdGlvKVxyXG4gIGJvYXJkQ29udGFpbmVyLnBpdm90LnNldChyYXRpb3MuVyAvIDIsIHJhdGlvcy5IIC8gMilcclxufSIsImltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuL3JhdGlvcydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuaW1wb3J0IHtcclxuICBQYXduLFxyXG4gIEdhbWVTZWN0aW9uLFxyXG4gIEdhbWVMaW5lLFxyXG4gIEZpbmlzaExpbmUsXHJcbiAgQnJva2VuTGluZVxyXG59IGZyb20gJy4vY2xhc3NlcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWN0aW9ucyAoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbnMgPSBuZXcgQXJyYXkoNCkuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gc2VjdGlvbnMubWFwKChzZWMsIGkpID0+IHtcclxuICAgIHNlYyA9IG5ldyBHYW1lU2VjdGlvbigpXHJcbiAgICBzZWMubmFtZSA9IHR5cGVzLkdBTUVfU0VDVElPTiArICdfJyArIGlcclxuICAgIHNlYy5udW1iZXIgPSBpXHJcbiAgICBcclxuICAgIGlmIChpID09PSAwKSBzZWMucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZUICsgcmF0aW9zLnNlY3Rpb24ud2lkdGggKyByYXRpb3MuTUlERExFLCByYXRpb3MuVE9QKVxyXG4gICAgaWYgKGkgPT09IDEpIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQsIHJhdGlvcy5UT1ApXHJcbiAgICBpZiAoaSA9PT0gMikgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNlY3Rpb24uaGVpZ2h0KVxyXG4gICAgaWYgKGkgPT09IDMpIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQgKyByYXRpb3Muc2VjdGlvbi53aWR0aCArIHJhdGlvcy5NSURETEUsIHJhdGlvcy5IIC0gcmF0aW9zLlRPUCAtIHJhdGlvcy5zZWN0aW9uLmhlaWdodClcclxuXHJcbiAgICByZXR1cm4gc2VjXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVMaW5lcyAoKSB7XHJcbiAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXkoMjQpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIGxpbmVzLm1hcCgobGluZSwgaSwgYXJyKSA9PiB7XHJcbiAgICBsaW5lID0gbmV3IEdhbWVMaW5lKClcclxuICAgIGxpbmUubmFtZSA9IHR5cGVzLkdBTUVfTElORSArICdfJyArIGlcclxuICAgIGxpbmUubnVtYmVyID0gaVxyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhd25zIChwYXduT2JqLCBjb2xvciwgaXNVc2VyID0gZmFsc2UsIGNvdW50ID0gMTUpIHtcclxuICByZXR1cm4gbmV3IEFycmF5KGNvdW50KS5maWxsKDApLm1hcCgoZWxlbSwgaSkgPT4ge1xyXG4gICAgY29uc3Qgc3ByaXRlID0gbmV3IFBhd24ocGF3bk9iaiwgY29sb3IsIGlzVXNlcilcclxuICAgIHNwcml0ZS5uYW1lID0gYCR7Y29sb3J9XyR7dHlwZXMuR0FNRV9QQVdOfV8ke2l9YFxyXG4gICAgc3ByaXRlLm51bWJlciA9IGlcclxuXHJcbiAgICByZXR1cm4gc3ByaXRlXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbmlzaExpbmVzICh1biwgb24pIHtcclxuICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgyKS5maWxsKDApXHJcblxyXG4gIHJldHVybiBsaW5lcy5tYXAoKGxpbmUsIGksIGFycikgPT4ge1xyXG4gICAgbGV0IG51bSA9IGkgPT09IDEgPyBvbiA6IHVuXHJcblxyXG4gICAgbGluZSA9IG5ldyBGaW5pc2hMaW5lKClcclxuICAgIGxpbmUubmFtZSA9IHR5cGVzLkZJTklTSF9MSU5FICsgJ18nICsgbnVtXHJcbiAgICBsaW5lLm51bWJlciA9IG51bVxyXG5cclxuICAgIGlmIChpID09PSAwKSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuVyAtIHJhdGlvcy5zaWRlTGluZS5zaWRlIC0gcmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3Muc2lkZUxpbmUudG9wKVxyXG4gICAgaWYgKGkgPT09IDEpIHtcclxuICAgICAgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLlcgLSByYXRpb3Muc2lkZUxpbmUuc2lkZSAtIHJhdGlvcy5zaWRlTGluZS53aWR0aCwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNpZGVMaW5lLmhlaWdodClcclxuICAgICAgbGluZS5yb3RhdGlvbiA9IE1hdGguUElcclxuICAgICAgbGluZS5waXZvdC5zZXQocmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJyb2tlbkxpbmUgKHVuLCBvbikge1xyXG4gIGNvbnN0IGxpbmVzID0gbmV3IEFycmF5KDIpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIGxpbmVzLm1hcCgobGluZSwgaSwgYXJyKSA9PiB7XHJcbiAgICBsZXQgbnVtID0gaSA9PT0gMCA/IG9uIDogdW5cclxuXHJcbiAgICBsaW5lID0gbmV3IEJyb2tlbkxpbmUoKVxyXG4gICAgbGluZS5uYW1lID0gdHlwZXMuQlJPS0VOX0xJTkUgKyAnXycgKyBudW1cclxuICAgIGxpbmUubnVtYmVyID0gbnVtXHJcblxyXG4gICAgaWYgKGkgPT09IDApIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5icm9rZW5fbGluZS54LCByYXRpb3MuYnJva2VuX2xpbmUueTApXHJcbiAgICBpZiAoaSA9PT0gMSkgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLmJyb2tlbl9saW5lLngsIHJhdGlvcy5icm9rZW5fbGluZS55MSlcclxuXHJcbiAgICByZXR1cm4gbGluZVxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuL2hlbHBlcnMnXHJcbmltcG9ydCB7IEJvYXJkQ29udGFpbmVyIGFzIEJvYXJkQ29udGFpbmVyQ2xhc3MgfSBmcm9tICcuL2NsYXNzZXMnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcblxyXG5sZXQgYm9hcmRDb250YWluZXIsIGJvYXJkLCBzZWN0aW9uQXJyID0gW10sIGxpbmVBcnIgPSBbXSwgdXNlclBhd25BcnIgPSBbXSwgb3Bwb25lbnRQYXduQXJyID0gW10sIHNpZGVMaW5lQXJyID0gW10sIGJyb2tlbkxpbmVBcnIgPSBbXVxyXG5cclxuY29uc3QgdXNlciA9IHtcclxuICBjb2xvcjogJ3doaXRlJyxcclxuICBib2FyZDogW1xyXG4gICAgMSwgMCwgMCwgMCwgMCwgMCxcclxuICAgIDAsIDAsIDAsIDAsIDAsIDEsXHJcbiAgICAxLCAwLCAwLCAwLCAzLCAwLFxyXG4gICAgNSwgMCwgMCwgMCwgMCwgMVxyXG4gIF0sXHJcbiAgbnVtYmVyOiAwXHJcbn1cclxuXHJcbmNvbnN0IG9wcG9uZW50ID0ge1xyXG4gIGNvbG9yOiAnYmxhY2snLFxyXG4gIGJvYXJkOiBbXHJcbiAgICAwLCAxLCAwLCAwLCAwLCAwLFxyXG4gICAgMCwgMCwgMCwgMCwgMCwgMCxcclxuICAgIDAsIDAsIDAsIDAsIDAsIDAsXHJcbiAgICAwLCAwLCAwLCAwLCAwLCAwXHJcbiAgXSxcclxuICBudW1iZXI6IDFcclxufVxyXG5cclxuY29uc3QgYm9hcmRQbmcgPSAnYm9hcmQucG5nJ1xyXG5jb25zdCB1c2VyUGF3blBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd24ucG5nYFxyXG5jb25zdCB1c2VyUGF3blNpZGVQbmcgPSBgJHt1c2VyLmNvbG9yfV9wYXduMi5wbmdgXHJcbmNvbnN0IHVzZXJQYXduU2VsZWN0ZWRQbmcgPSBgJHt1c2VyLmNvbG9yfV9wYXduX3NlbGVjdGVkLnBuZ2BcclxuY29uc3Qgb3Bwb25lbnRQYXduUG5nID0gYCR7b3Bwb25lbnQuY29sb3J9X3Bhd24ucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25TaWRlUG5nID0gYCR7b3Bwb25lbnQuY29sb3J9X3Bhd24yLnBuZ2BcclxuY29uc3Qgb3Bwb25lbnRQYXduU2VsZWN0ZWRQbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bl9zZWxlY3RlZC5wbmdgXHJcbmNvbnN0IGxpbmVTZWxlY3RlZFBuZyA9ICdsaW5lX3NlbGVjdGVkLnBuZydcclxuXHJcbmNvbnN0IHVzZXJQYXducyA9IHtcclxuICBzb2xpZDogdXNlclBhd25QbmcsXHJcbiAgc2lkZTogdXNlclBhd25TaWRlUG5nLFxyXG4gIHNlbGVjdGVkOiB1c2VyUGF3blNlbGVjdGVkUG5nXHJcbn1cclxuXHJcbmNvbnN0IG9wcG9uZW50UGF3bnMgPSB7XHJcbiAgc29saWQ6IG9wcG9uZW50UGF3blBuZyxcclxuICBzaWRlOiBvcHBvbmVudFBhd25TaWRlUG5nLFxyXG4gIHNlbGVjdGVkOiBvcHBvbmVudFBhd25TZWxlY3RlZFBuZ1xyXG59XHJcblxyXG5QSVhJLnV0aWxzLnNraXBIZWxsbygpXHJcblxyXG5sZXQgQXBwbGljYXRpb24gPSBQSVhJLkFwcGxpY2F0aW9uLFxyXG4gICAgbG9hZGVyID0gUElYSS5sb2FkZXIsXHJcbiAgICByZXNvdXJjZXMgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXMsXHJcbiAgICBTcHJpdGUgPSBQSVhJLlNwcml0ZVxyXG5cclxubGV0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbihjb25maWcpXHJcbmFwcC5yZW5kZXJlci52aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXHJcbmFwcC5yZW5kZXJlci52aWV3LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuYXBwLnJlbmRlcmVyLmF1dG9SZXNpemUgPSB0cnVlXHJcblxyXG4vLyBTRVRVUFxyXG5jb25zdCBzZXR1cCA9ICgpID0+IHtcclxuICBib2FyZENvbnRhaW5lciA9IG5ldyBCb2FyZENvbnRhaW5lckNsYXNzKHVzZXIsIG9wcG9uZW50KVxyXG5cclxuICBib2FyZCA9IG5ldyBTcHJpdGUocmVzb3VyY2VzW2JvYXJkUG5nXS50ZXh0dXJlKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKGJvYXJkKVxyXG4gIFxyXG4gIHNlY3Rpb25BcnIgPSBoZWxwZXJzLmNyZWF0ZVNlY3Rpb25zKClcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZCguLi5zZWN0aW9uQXJyKVxyXG5cclxuICBsaW5lQXJyID0gaGVscGVycy5jcmVhdGVHYW1lTGluZXMoKVxyXG4gIHNlY3Rpb25BcnIuZm9yRWFjaCgoc2VjLCBpLCBhcnIpID0+IHtcclxuICAgIGNvbnN0IGNodW5rID0gbGluZUFyci5sZW5ndGggLyBhcnIubGVuZ3RoXHJcbiAgICBzZWMuYWRkQ2hpbGQoXHJcbiAgICAgIC4uLmxpbmVBcnIuc2xpY2UoY2h1bmsgKiBpLCBjaHVuayAqIChpICsgMSkpXHJcbiAgICApXHJcblxyXG4gICAgc2VjLm9yZGVyTGluZXMoKVxyXG4gIH0pXHJcblxyXG4gIHNpZGVMaW5lQXJyID0gaGVscGVycy5jcmVhdGVGaW5pc2hMaW5lcyh1c2VyLm51bWJlciwgb3Bwb25lbnQubnVtYmVyKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKC4uLnNpZGVMaW5lQXJyKVxyXG5cclxuICBicm9rZW5MaW5lQXJyID0gaGVscGVycy5jcmVhdGVCcm9rZW5MaW5lKHVzZXIubnVtYmVyLCBvcHBvbmVudC5udW1iZXIpXHJcbiAgYm9hcmRDb250YWluZXIuYWRkQ2hpbGQoLi4uYnJva2VuTGluZUFycilcclxuXHJcbiAgdXNlclBhd25BcnIgPSBoZWxwZXJzLmNyZWF0ZVBhd25zKHVzZXJQYXducywgdXNlci5jb2xvciwgdHJ1ZSwgMTUpXHJcbiAgb3Bwb25lbnRQYXduQXJyID0gaGVscGVycy5jcmVhdGVQYXducyhvcHBvbmVudFBhd25zLCBvcHBvbmVudC5jb2xvciwgZmFsc2UsIDE1KVxyXG5cclxuICBsaW5lQXJyLnJlZHVjZSgoYWNjLCBjdXIsIGksIGFycikgPT4ge1xyXG4gICAgaWYgKHVzZXIuYm9hcmRbaV0gPiAwKSB7XHJcbiAgICAgIGN1ci5hZGRDaGlsZCguLi51c2VyUGF3bkFyci5zbGljZShhY2MudXNlciwgYWNjLnVzZXIgKyB1c2VyLmJvYXJkW2ldKSlcclxuICAgICAgYWNjLnVzZXIgKz0gdXNlci5ib2FyZFtpXVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHBvbmVudC5ib2FyZFtpXSA+IDApIHtcclxuICAgICAgY3VyLmFkZENoaWxkKC4uLm9wcG9uZW50UGF3bkFyci5zbGljZShhY2Mub3Bwb25lbnQsIGFjYy5vcHBvbmVudCArIG9wcG9uZW50LmJvYXJkW2ldKSlcclxuICAgICAgYWNjLm9wcG9uZW50ICs9IG9wcG9uZW50LmJvYXJkW2ldXHJcbiAgICB9XHJcblxyXG4gICAgY3VyLm9yZGVyUGF3bnMoKVxyXG5cclxuICAgIHJldHVybiBhY2NcclxuICB9LCB7IHVzZXI6IDAsIG9wcG9uZW50OiAwIH0pXHJcblxyXG4gIGJvYXJkQ29udGFpbmVyLmNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyKGFwcClcclxuXHJcbiAgYXBwLnN0YWdlLmFkZENoaWxkKGJvYXJkQ29udGFpbmVyKVxyXG5cclxuICBjb25zdCByZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBhcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICBib2FyZENvbnRhaW5lci5jYWxjdWxhdGVCb2FyZENvbnRhaW5lcihhcHApXHJcbiAgfVxyXG4gIFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgcmVzaXplKVxyXG4gIFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuYXBwZW5kQ2hpbGQoYXBwLnZpZXcpXHJcbiAgXHJcbiAgcmVzaXplKClcclxufVxyXG5cclxuY29uc3QgcGl4aUxvYWRlciA9ICgpID0+IHtcclxuICBsb2FkZXJcclxuICAgIC5hZGQoW1xyXG4gICAgICBib2FyZFBuZywgXHJcbiAgICAgIHVzZXJQYXduUG5nLCBcclxuICAgICAgb3Bwb25lbnRQYXduUG5nLFxyXG4gICAgICB1c2VyUGF3blNpZGVQbmcsXHJcbiAgICAgIG9wcG9uZW50UGF3blNpZGVQbmcsXHJcbiAgICAgIHVzZXJQYXduU2VsZWN0ZWRQbmcsXHJcbiAgICAgIG9wcG9uZW50UGF3blNlbGVjdGVkUG5nLFxyXG4gICAgICBsaW5lU2VsZWN0ZWRQbmdcclxuICAgIF0pXHJcbiAgICAubG9hZChzZXR1cClcclxufVxyXG5cclxucGl4aUxvYWRlcigpXHJcbiIsImV4cG9ydCBjb25zdCBIID0gNzY4XHJcbmV4cG9ydCBjb25zdCBXID0gMTE0N1xyXG5leHBvcnQgY29uc3QgVE9QID0gMjBcclxuZXhwb3J0IGNvbnN0IExFRlQgPSAxMDhcclxuZXhwb3J0IGNvbnN0IE1JRERMRSA9IDgyXHJcbmV4cG9ydCBjb25zdCBQQVdOID0gNzFcclxuZXhwb3J0IGNvbnN0IFNFQ19QRVJDID0gODVcclxuZXhwb3J0IGNvbnN0IENPVU5UX0hFSUdIVCA9IDUwXHJcblxyXG5leHBvcnQgY29uc3QgdG9wSGVpZ2h0UmF0aW8gPSBUT1AgKiAxMDAgLyBIXHJcbmV4cG9ydCBjb25zdCBsZWZ0V2lkdGhSYXRpbyA9IExFRlQgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBtaWRkbGVXaWR0aFJhdGlvID0gTUlERExFICogMTAwIC8gV1xyXG5leHBvcnQgY29uc3QgcGF3bkhlaWdodFJhdGlvID0gUEFXTiAqIDEwMCAvIEhcclxuXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uV2lkdGhSYXRpbyA9ICgoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMikgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uSGVpZ2h0UmF0aW8gPSAoKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwKSAqIDEwMCAvIEhcclxuZXhwb3J0IGNvbnN0IGxpbmVXaWR0aFJhdGlvID0gc2VjdGlvbldpZHRoUmF0aW8gLyA2XHJcbmV4cG9ydCBjb25zdCBsaW5lSGVpZ2h0UmF0aW8gPSBzZWN0aW9uSGVpZ2h0UmF0aW9cclxuXHJcbmV4cG9ydCBjb25zdCBsaW5lID0ge1xyXG4gIHdpZHRoOiAoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMTIsXHJcbiAgaGVpZ2h0OiAoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb24gPSB7XHJcbiAgd2lkdGg6IChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAyLFxyXG4gIGhlaWdodDogKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBib2FyZCA9IHtcclxuICB3aWR0aDogMTE0NyxcclxuICBoZWlnaHQ6IDc2OFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZUxpbmUgPSB7XHJcbiAgd2lkdGg6IDY1LFxyXG4gIGhlaWdodDogMjEwLFxyXG4gIHRvcDogMTMzLFxyXG4gIHNpZGU6IChMRUZUIC0gNjUpIC8gMlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGF3bl9zaWRlID0ge1xyXG4gIHdpZHRoOiA2NSxcclxuICBoZWlnaHQ6IDE0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBicm9rZW5fbGluZSA9IHtcclxuICB3aWR0aDogUEFXTixcclxuICBoZWlnaHQ6IFBBV04gKyBDT1VOVF9IRUlHSFQsXHJcbiAgeDogTEVGVCArIHNlY3Rpb24ud2lkdGggKyAoKE1JRERMRSAtIFBBV04pIC8gMiksXHJcbiAgeTA6IChIIC8gMikgLSAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMiksXHJcbiAgeTE6IChIIC8gMikgKyAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMSlcclxufSIsImV4cG9ydCBjb25zdCBCT0FSRF9DT05UQUlORVIgPSAnQk9BUkRfQ09OVEFJTkVSJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9TRUNUSU9OID0gJ0dBTUVfU0VDVElPTidcclxuZXhwb3J0IGNvbnN0IEdBTUVfTElORSA9ICdHQU1FX0xJTkUnXHJcbmV4cG9ydCBjb25zdCBGSU5JU0hfTElORSA9ICdGSU5JU0hfTElORSdcclxuZXhwb3J0IGNvbnN0IEJST0tFTl9MSU5FID0gJ0JST0tFTl9MSU5FJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9QQVdOID0gJ0dBTUVfUEFXTidcclxuZXhwb3J0IGNvbnN0IEhJVF9SRUMgPSAnSElUX1JFQydcclxuZXhwb3J0IGNvbnN0IEJST0tFTl9DT1VOVEVSID0gJ0JST0tFTl9DT1VOVEVSJyIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiXSwic291cmNlUm9vdCI6IiJ9