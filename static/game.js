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
  width: 800,
  height: 800,
  antialias: true,
  transparent: false,
  resolution: devicePixelRatio
};
var app = new Application(config);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL0JvYXJkQ29udGFpbmVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9Ccm9rZW5MaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9GaW5pc2hMaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9HYW1lTGluZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NsYXNzZXMvR2FtZVNlY3Rpb24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL1Bhd24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy93aXRoQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3JhdGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkJvYXJkQ29udGFpbmVyIiwidXNlciIsIm9wcG9uZW50Iiwid2lkdGgiLCJyYXRpb3MiLCJoZWlnaHQiLCJ4VHlwZSIsInR5cGVzIiwibmFtZSIsInBvc2l0aW9uIiwic2V0IiwiYXBwIiwicmF0aW8iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInJlbmRlcmVyIiwicmVzaXplIiwic2NhbGUiLCJQSVhJIiwiQ29udGFpbmVyIiwid2l0aEJhc2UiLCJCcm9rZW5MaW5lIiwicHJvcHMiLCJjb3VudFN0eWxlIiwiVGV4dFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVRoaWNrbmVzcyIsImRyb3BTaGFkb3ciLCJkcm9wU2hhZG93Q29sb3IiLCJkcm9wU2hhZG93Qmx1ciIsImRyb3BTaGFkb3dEaXN0YW5jZSIsImRyb3BTaGFkb3dBbmdsZSIsImRyb3BTaGFkb3dBbHBoYSIsImNvdW50IiwiVGV4dCIsInBpdm90IiwidmlzaWJsZSIsImFkZENoaWxkIiwibmV3Q291bnQiLCJjaGlsZHJlbiIsImZpbHRlciIsImNoaWxkIiwibGVuZ3RoIiwiY291bnRDaGlsZCIsImZpbmQiLCJ0ZXh0IiwibnVtYmVyIiwiX2xvY2tHYW1lUGF3bnMiLCJwYXducyIsImZvckVhY2giLCJwYXduIiwiaSIsImFyciIsIlR3ZWVuTWF4IiwidG8iLCJ4IiwieSIsIkNPVU5UX0hFSUdIVCIsInVwZGF0ZUNvdW50IiwiRmluaXNoTGluZSIsInRvU2l0IiwiaGl0UmVjIiwiR3JhcGhpY3MiLCJkcmF3UmVjdCIsInVuU3Vic2NyaWJlIiwicG9pbnQiLCJHYW1lTGluZSIsImJsb2NrZWQiLCJhcmdzIiwicGF3bkFyciIsImZha2UiLCJyZXZlcnNlIiwicGFyZW50Iiwicm93IiwiUEFXTiIsImlzVXNlciIsInN1YnNjcmliZSIsInRvSGl0Iiwib3JkZXJQYXducyIsIkdhbWVTZWN0aW9uIiwibGluZSIsImxpbmVJbmRleCIsIlBhd24iLCJwYXduT2JqIiwiY29sb3IiLCJsb2FkZXIiLCJyZXNvdXJjZXMiLCJzb2xpZCIsInRleHR1cmUiLCJzb2xpZFRleHR1cmUiLCJzaWRlVGV4dHVyZSIsInNpZGUiLCJzZWxlY3RlZFRleHR1cmUiLCJzZWxlY3RlZCIsImN1cnNvciIsIm9uIiwiZnVuY3Rpb25zIiwibmV3UGFyZW50IiwiaGl0dGVkUGF3biIsImdvVG9Ccm9rZW5MaW5lIiwic2V0U2lkZSIsIm5ld1Bvc2l0aW9uIiwidG9Mb2NhbCIsImdldEdsb2JhbFBvc2l0aW9uIiwic2V0UGFyZW50IiwiaW50ZXJhY3RpdmUiLCJicm9rZW5MaW5lcyIsIl9nZXRCcm9rZW5MaW5lcyIsIl9nZXRVc2VyIiwic2V0UGFyZW50Q3VzdG9tIiwiU3ByaXRlIiwiY29tcCIsInByb3RvdHlwZSIsIl9nZXRCb2FyZCIsIm9iaiIsIl9nZXRPcHBvbmVudCIsIl9nZXRTZWN0aW9ucyIsImJvYXJkQ29udGFpbmVyIiwiX2dldExpbmVzIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwibGluZXMiLCJwdXNoIiwiX2dldEZpbmlzaExpbmVzIiwiX2dldE15RmluaXNoTGluZSIsIl9nZXRPcHBvbmVudEZpbmlzaExpbmUiLCJvcHAiLCJfZ2V0TXlCcm9rZW5MaW5lIiwiX2dldE9wcG9uZW50QnJva2VuTGluZSIsImJsb2NrTGluZSIsIm9uRHJhZ1N0YXJ0IiwiZXZlbnQiLCJkcmFnZ2luZyIsInN0YXJ0UG9pbnQiLCJkYXRhIiwiZ2xvYmFsIiwiaG9tZVBhcmVudCIsInByZXZpb3VzUGFyZW50IiwiZHJhZ1BvaW50Iiwic2V0U2VsZWN0ZWQiLCJvbkRyYWdNb3ZlIiwiZSIsImdsb2JhbFBvaW50IiwiY2VudGVyIiwidGVzdEhpdCIsIm9uRHJhZ0VuZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTb2xpZCIsIm9uQWRkZWQiLCJjb250YWluZXIiLCJvblJlbW92ZWQiLCJjYWxjdWxhdGVCb2FyZENvbnRhaW5lciIsInZpZXciLCJIIiwiVyIsImNyZWF0ZVNlY3Rpb25zIiwic2VjdGlvbnMiLCJBcnJheSIsIm1hcCIsInNlYyIsImNyZWF0ZUdhbWVMaW5lcyIsImNyZWF0ZVBhd25zIiwiZWxlbSIsInNwcml0ZSIsImNyZWF0ZUZpbmlzaExpbmVzIiwidW4iLCJudW0iLCJ0b3AiLCJyb3RhdGlvbiIsIk1hdGgiLCJQSSIsImNyZWF0ZUJyb2tlbkxpbmUiLCJ5MCIsInkxIiwiYm9hcmQiLCJzZWN0aW9uQXJyIiwibGluZUFyciIsInVzZXJQYXduQXJyIiwib3Bwb25lbnRQYXduQXJyIiwic2lkZUxpbmVBcnIiLCJicm9rZW5MaW5lQXJyIiwiYm9hcmRQbmciLCJ1c2VyUGF3blBuZyIsInVzZXJQYXduU2lkZVBuZyIsInVzZXJQYXduU2VsZWN0ZWRQbmciLCJvcHBvbmVudFBhd25QbmciLCJvcHBvbmVudFBhd25TaWRlUG5nIiwib3Bwb25lbnRQYXduU2VsZWN0ZWRQbmciLCJsaW5lU2VsZWN0ZWRQbmciLCJ1c2VyUGF3bnMiLCJvcHBvbmVudFBhd25zIiwidXRpbHMiLCJza2lwSGVsbG8iLCJBcHBsaWNhdGlvbiIsImNvbmZpZyIsImFudGlhbGlhcyIsInRyYW5zcGFyZW50IiwicmVzb2x1dGlvbiIsImRldmljZVBpeGVsUmF0aW8iLCJzdHlsZSIsImRpc3BsYXkiLCJhdXRvUmVzaXplIiwic2V0dXAiLCJCb2FyZENvbnRhaW5lckNsYXNzIiwiaGVscGVycyIsImNodW5rIiwic2xpY2UiLCJvcmRlckxpbmVzIiwic3RhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwicGl4aUxvYWRlciIsImFkZCIsImxvYWQiLCJUT1AiLCJMRUZUIiwiTUlERExFIiwiU0VDX1BFUkMiLCJ0b3BIZWlnaHRSYXRpbyIsImxlZnRXaWR0aFJhdGlvIiwibWlkZGxlV2lkdGhSYXRpbyIsInBhd25IZWlnaHRSYXRpbyIsInNlY3Rpb25XaWR0aFJhdGlvIiwic2VjdGlvbkhlaWdodFJhdGlvIiwibGluZVdpZHRoUmF0aW8iLCJsaW5lSGVpZ2h0UmF0aW8iLCJzZWN0aW9uIiwic2lkZUxpbmUiLCJwYXduX3NpZGUiLCJicm9rZW5fbGluZSIsIkJPQVJEX0NPTlRBSU5FUiIsIkdBTUVfU0VDVElPTiIsIkdBTUVfTElORSIsIkZJTklTSF9MSU5FIiwiQlJPS0VOX0xJTkUiLCJHQU1FX1BBV04iLCJISVRfUkVDIiwiQlJPS0VOX0NPVU5URVIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QUFFQSw0Qzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDVEEsd0JBQXdCLG1CQUFPLENBQUMsdUZBQXFCOztBQUVyRCxzQkFBc0IsbUJBQU8sQ0FBQyxtRkFBbUI7O0FBRWpELHdCQUF3QixtQkFBTyxDQUFDLHVGQUFxQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ1ZBLHdCQUF3QiwyRUFBMkUsb0NBQW9DLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxvQ0FBb0MsOEhBQThILEdBQUcsRUFBRSxzQkFBc0I7O0FBRW5XO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QiIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZ2FtZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEJvYXJkQ29udGFpbmVyIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXIsIG9wcG9uZW50KSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZXIgPSB1c2VyXHJcbiAgICB0aGlzLm9wcG9uZW50ID0gb3Bwb25lbnRcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MuV1xyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MuSFxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkJPQVJEX0NPTlRBSU5FUlxyXG4gICAgdGhpcy5uYW1lID0gdHlwZXMuQk9BUkRfQ09OVEFJTkVSXHJcbiAgICB0aGlzLnBvc2l0aW9uLnNldCgwLCAwKVxyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlQm9hcmRDb250YWluZXIgKGFwcCkge1xyXG4gICAgbGV0IHJhdGlvID0gKDEwMCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyByYXRpb3MuSCAvIDEwMFxyXG5cclxuICAgIGFwcC5yZW5kZXJlci5yZXNpemUocmF0aW9zLlcgKiByYXRpbywgcmF0aW9zLkggKiByYXRpbylcclxuICAgIFxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5XICogcmF0aW9cclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLkggKiByYXRpb1xyXG4gICAgdGhpcy5zY2FsZS5zZXQocmF0aW8sIHJhdGlvKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoQm9hcmRDb250YWluZXIpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEJyb2tlbkxpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5CUk9LRU5fTElORVxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5icm9rZW5fbGluZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3MuYnJva2VuX2xpbmUuaGVpZ2h0XHJcbiAgICB0aGlzLmNvdW50U3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgIGZvbnRTaXplOiA0MixcclxuICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxyXG4gICAgICBzdHJva2U6ICcjZmYzMzAwJyxcclxuICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAxLFxyXG4gICAgICBkcm9wU2hhZG93OiB0cnVlLFxyXG4gICAgICBkcm9wU2hhZG93Q29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gICAgICBkcm9wU2hhZG93Qmx1cjogNCxcclxuICAgICAgZHJvcFNoYWRvd0Rpc3RhbmNlOiAtMixcclxuICAgICAgZHJvcFNoYWRvd0FuZ2xlOiAzMCxcclxuICAgICAgZHJvcFNoYWRvd0FscGhhOiAuNixcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGNvdW50ID0gbmV3IFBJWEkuVGV4dCgwLCB0aGlzLmNvdW50U3R5bGUpXHJcbiAgICBjb3VudC54VHlwZSA9IHR5cGVzLkJST0tFTl9DT1VOVEVSXHJcbiAgICBjb3VudC5oZWlnaHQgPSByYXRpb3MuQ09VTlRfSEVJR0hUXHJcbiAgICBjb3VudC5waXZvdC5zZXQoY291bnQud2lkdGggLyAyLCBjb3VudC5oZWlnaHQgLyAyKVxyXG4gICAgY291bnQucG9zaXRpb24uc2V0KHJhdGlvcy5icm9rZW5fbGluZS53aWR0aCAvIDIsIDApXHJcbiAgICBjb3VudC52aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLmFkZENoaWxkKGNvdW50KVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ291bnQgKCkge1xyXG4gICAgY29uc3QgbmV3Q291bnQgPSB0aGlzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKS5sZW5ndGhcclxuICAgIGNvbnN0IGNvdW50Q2hpbGQgPSB0aGlzLmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkJST0tFTl9DT1VOVEVSKVxyXG4gICAgY291bnRDaGlsZC50ZXh0ID0gbmV3Q291bnRcclxuICAgIGNvdW50Q2hpbGQudmlzaWJsZSA9IG5ld0NvdW50XHJcblxyXG4gICAgaWYgKG5ld0NvdW50ICYmIHRoaXMubnVtYmVyID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX2xvY2tHYW1lUGF3bnMoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3JkZXJQYXducyAoKSB7XHJcbiAgICBjb25zdCBwYXducyA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pXHJcbiAgICBwYXducy5mb3JFYWNoKChwYXduLCBpLCBhcnIpID0+IHtcclxuICAgICAgVHdlZW5NYXgudG8ocGF3bi5wb3NpdGlvbiwgLjUsIHsgeDogMCwgeTogcmF0aW9zLkNPVU5UX0hFSUdIVCB9KVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNvdW50KClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEJyb2tlbkxpbmUpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEZpbmlzaExpbmUgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5GSU5JU0hfTElORVxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5zaWRlTGluZS53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0XHJcbiAgICB0aGlzLnRvU2l0ID0gdHJ1ZVxyXG5cclxuICAgIGxldCBoaXRSZWMgPSBuZXcgUElYSS5HcmFwaGljcygpXHJcbiAgICBoaXRSZWMueFR5cGUgPSB0eXBlcy5ISVRfUkVDXHJcbiAgICBoaXRSZWMuZHJhd1JlY3QoMCwgMCwgcmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0KVxyXG4gICAgaGl0UmVjLnZpc2libGUgPSBmYWxzZVxyXG5cclxuICAgIHRoaXMuYWRkQ2hpbGQoaGl0UmVjKVxyXG4gIH1cclxuXHJcbiAgb3JkZXJQYXducyAoKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuXHJcbiAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgIT09IHR5cGVzLkhJVF9SRUMpXHJcbiAgICAgIC5mb3JFYWNoKChwYXduLCBpLCBhcnIpID0+IHtcclxuICAgICAgICBwYXduLnVuU3Vic2NyaWJlKClcclxuICAgICAgICBwYXduLnBvc2l0aW9uLnNldCgwLCByYXRpb3MucGF3bl9zaWRlLmhlaWdodCAqIGkpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICB0ZXN0SGl0IChwb2ludCkge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkhJVF9SRUMpXHJcbiAgICBcclxuICAgIGlmIChcclxuICAgICAgcG9pbnQueCA+PSAwXHJcbiAgICAgICYmIHBvaW50LnggPD0gd2lkdGhcclxuICAgICAgJiYgcG9pbnQueSA+PSAwXHJcbiAgICAgICYmIHBvaW50LnkgPD0gaGVpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEZpbmlzaExpbmUpXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4uL3JhdGlvcydcclxuXHJcbmNsYXNzIEdhbWVMaW5lIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuR0FNRV9MSU5FXHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLmxpbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLmxpbmUuaGVpZ2h0XHJcbiAgICB0aGlzLmJsb2NrZWQgPSBmYWxzZVxyXG5cclxuICAgIGxldCBoaXRSZWMgPSBuZXcgUElYSS5HcmFwaGljcygpXHJcbiAgICBoaXRSZWMueFR5cGUgPSB0eXBlcy5ISVRfUkVDXHJcbiAgICBoaXRSZWMuZHJhd1JlY3QoMCwgMCwgcmF0aW9zLmxpbmUud2lkdGgsIHJhdGlvcy5saW5lLmhlaWdodClcclxuICAgIGhpdFJlYy52aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLmFkZENoaWxkKGhpdFJlYylcclxuICB9XHJcblxyXG4gIG9yZGVyUGF3bnMgKGFyZ3MgPSB7fSkge1xyXG4gICAgY29uc3QgcGF3bkFyciA9IHRoaXMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5hbWUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfUEFXTilcclxuICAgIGNvbnN0IHsgZmFrZSwgcmV2ZXJzZSA9IHRoaXMucGFyZW50Lm51bWJlciA+IDEgfSA9IGFyZ3NcclxuICAgIGNvbnN0IGxlbmd0aCA9IGZha2UgPyBwYXduQXJyLmxlbmd0aCArIDEgOiBwYXduQXJyLmxlbmd0aFxyXG5cclxuICAgIGxldCByb3cgPSByYXRpb3MubGluZS5oZWlnaHQgLyBsZW5ndGhcclxuXHJcbiAgICBpZiAocm93IDwgcmF0aW9zLlBBV04pIHtcclxuICAgICAgcm93ID0gcm93IC0gKChyYXRpb3MuUEFXTiAtIHJvdykgLyBsZW5ndGgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3cgPSByYXRpb3MuUEFXTlxyXG4gICAgfVxyXG5cclxuICAgIHBhd25BcnIuZm9yRWFjaCgocGF3biwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIHBhd24udW5TdWJzY3JpYmUoKVxyXG4gICAgICByZXZlcnNlXHJcbiAgICAgICAgICA/IFR3ZWVuTWF4LnRvKHBhd24ucG9zaXRpb24sIC41LCB7IHg6IDAsIHk6IHJhdGlvcy5saW5lLmhlaWdodCAtIChyb3cgKiBpKSAtIHJhdGlvcy5QQVdOIH0pXHJcbiAgICAgICAgICA6IFR3ZWVuTWF4LnRvKHBhd24ucG9zaXRpb24sIC41LCB7IHg6IDAsIHk6IHJvdyAqIGkgfSlcclxuXHJcbiAgICAgIGlmIChpICsgMSA9PT0gYXJyLmxlbmd0aCAmJiBwYXduLmlzVXNlciAmJiAhdGhpcy5ibG9ja2VkKSB7XHJcbiAgICAgICAgcGF3bi5zdWJzY3JpYmUoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMudG9TaXQgPSB0cnVlXHJcblxyXG4gICAgaWYgKHBhd25BcnIubGVuZ3RoID09PSAxICYmICFwYXduQXJyWzBdLmlzVXNlcikge1xyXG4gICAgICB0aGlzLnRvSGl0ID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXduQXJyLmxlbmd0aCA+IDEgJiYgIXBhd25BcnJbMF0uaXNVc2VyKSB7XHJcbiAgICAgIHRoaXMudG9TaXQgPSBmYWxzZVxyXG4gICAgICB0aGlzLnRvSGl0ID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlc3RIaXQgKHBvaW50KSB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuSElUX1JFQylcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHBvaW50LnggPj0gMFxyXG4gICAgICAmJiBwb2ludC54IDw9IHdpZHRoXHJcbiAgICAgICYmIHBvaW50LnkgPj0gMFxyXG4gICAgICAmJiBwb2ludC55IDw9IGhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBibG9ja0xpbmUgKCkge1xyXG4gICAgdGhpcy5ibG9ja2VkID0gdHJ1ZVxyXG4gICAgdGhpcy5vcmRlclBhd25zKClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEdhbWVMaW5lKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBHYW1lU2VjdGlvbiBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkdBTUVfU0VDVElPTlxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5zZWN0aW9uLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5zZWN0aW9uLmhlaWdodFxyXG4gIH1cclxuXHJcbiAgb3JkZXJMaW5lcyAoKSB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuXHJcblxyXG4gICAgaWYgKHRoaXMubnVtYmVyID4gMSkge1xyXG4gICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLnJldmVyc2UoKVxyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkcmVuLmZvckVhY2goKGxpbmUsIGxpbmVJbmRleCwgYXJyKSA9PiB7XHJcbiAgICAgIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5saW5lLndpZHRoICogKGFyci5sZW5ndGggLSBsaW5lSW5kZXggLSAxKSwgMClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShHYW1lU2VjdGlvbilcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tICcuLi9mdW5jdGlvbnMnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuY2xhc3MgUGF3biBleHRlbmRzIFBJWEkuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihwYXduT2JqLCBjb2xvciwgaXNVc2VyKSB7XHJcbiAgICBzdXBlcihQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zb2xpZF0udGV4dHVyZSlcclxuXHJcbiAgICB0aGlzLnNvbGlkVGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNvbGlkXS50ZXh0dXJlXHJcbiAgICB0aGlzLnNpZGVUZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW3Bhd25PYmouc2lkZV0udGV4dHVyZVxyXG4gICAgdGhpcy5zZWxlY3RlZFRleHR1cmUgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zZWxlY3RlZF0udGV4dHVyZVxyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXHJcbiAgICB0aGlzLmlzVXNlciA9IGlzVXNlclxyXG4gICAgdGhpcy5jdXJzb3IgPSAncG9pbnRlcidcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5HQU1FX1BBV05cclxuICAgIHRoaXMub24oJ2FkZGVkJywgZnVuY3Rpb25zLm9uQWRkZWQpXHJcbiAgICB0aGlzLm9uKCdyZW1vdmVkJywgZnVuY3Rpb25zLm9uUmVtb3ZlZClcclxuICB9XHJcblxyXG4gIHNldFBhcmVudEN1c3RvbSAobmV3UGFyZW50KSB7XHJcbiAgICBpZiAobmV3UGFyZW50LnRvSGl0KSB7XHJcbiAgICAgIG5ld1BhcmVudC50b0hpdCA9IGZhbHNlXHJcbiAgICAgIG5ld1BhcmVudC50b1NpdCA9IHRydWVcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGhpdHRlZFBhd24gPSBuZXdQYXJlbnQuY2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKVxyXG4gICAgICBoaXR0ZWRQYXduLmdvVG9Ccm9rZW5MaW5lKClcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3UGFyZW50LnhUeXBlID09PSB0eXBlcy5GSU5JU0hfTElORSkge1xyXG4gICAgICB0aGlzLnNldFNpZGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gbmV3UGFyZW50LnRvTG9jYWwodGhpcy5nZXRHbG9iYWxQb3NpdGlvbigpKVxyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0gbmV3UG9zaXRpb24ueFxyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0gbmV3UG9zaXRpb24ueVxyXG4gICAgdGhpcy5zZXRQYXJlbnQobmV3UGFyZW50KVxyXG4gIH1cclxuXHJcbiAgc2V0U29saWQgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zb2xpZFRleHR1cmVcclxuICB9XHJcblxyXG4gIHNldFNpZGUgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zaWRlVGV4dHVyZVxyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWQgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zZWxlY3RlZFRleHR1cmVcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZSAoKSB7XHJcbiAgICBmdW5jdGlvbnMuc3Vic2NyaWJlKHRoaXMpXHJcbiAgfVxyXG5cclxuICB1blN1YnNjcmliZSAoKSB7XHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gZmFsc2VcclxuICB9XHJcblxyXG4gIGdvVG9Ccm9rZW5MaW5lICgpIHtcclxuICAgIGNvbnN0IGJyb2tlbkxpbmVzID0gdGhpcy5fZ2V0QnJva2VuTGluZXMoKVxyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuX2dldFVzZXIoKVxyXG4gICAgdXNlci5jb2xvciA9PT0gdGhpcy5jb2xvclxyXG4gICAgICA/IHRoaXMuc2V0UGFyZW50Q3VzdG9tKGJyb2tlbkxpbmVzWzFdKVxyXG4gICAgICA6IHRoaXMuc2V0UGFyZW50Q3VzdG9tKGJyb2tlbkxpbmVzWzBdKVxyXG4gIH1cclxuXHJcbiAgZ29Ub0ZpbmlzaExpbmUgKCkge1xyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShQYXduKVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBhd24gfSBmcm9tICcuL1Bhd24uY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtZVNlY3Rpb24gfSBmcm9tICcuL0dhbWVTZWN0aW9uLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWVMaW5lIH0gZnJvbSAnLi9HYW1lTGluZS5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaW5pc2hMaW5lIH0gZnJvbSAnLi9GaW5pc2hMaW5lLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJyb2tlbkxpbmUgfSBmcm9tICcuL0Jyb2tlbkxpbmUuY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm9hcmRDb250YWluZXIgfSBmcm9tICcuL0JvYXJkQ29udGFpbmVyLmNsYXNzJyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbXApID0+IHtcclxuICBjb21wLnByb3RvdHlwZS5fZ2V0Qm9hcmQgPSBmdW5jdGlvbiAob2JqID0gdGhpcykge1xyXG4gICAgaWYgKG9iai54VHlwZSA9PT0gdHlwZXMuQk9BUkRfQ09OVEFJTkVSKSB7XHJcbiAgICAgIHJldHVybiBvYmpcclxuICAgIH1cclxuICBcclxuICAgIGlmICghb2JqLnBhcmVudCkge1xyXG4gICAgICByZXR1cm4gb2JqLmNoaWxkcmVuWzBdXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Qm9hcmQob2JqLnBhcmVudClcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJvYXJkKCkudXNlclxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE9wcG9uZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJvYXJkKCkub3Bwb25lbnRcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRTZWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9TRUNUSU9OKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldExpbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldFNlY3Rpb25zKCkucmVkdWNlKChhY2MsIGN1ciwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpbmVzID0gY3VyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9MSU5FKVxyXG5cclxuICAgICAgYWNjLnB1c2goLi4ubGluZXMpXHJcblxyXG4gICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCBbXSkgICBcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRGaW5pc2hMaW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuRklOSVNIX0xJTkUpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0TXlGaW5pc2hMaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMuX2dldFVzZXIoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEZpbmlzaExpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSB1c2VyLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRPcHBvbmVudEZpbmlzaExpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBvcHAgPSB0aGlzLl9nZXRPcHBvbmVudCgpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0RmluaXNoTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IG9wcC5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0QnJva2VuTGluZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIHJldHVybiBib2FyZENvbnRhaW5lci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkJST0tFTl9MSU5FKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE15QnJva2VuTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLl9nZXRVc2VyKClcclxuICAgIHJldHVybiB0aGlzLl9nZXRCcm9rZW5MaW5lcygpLmZpbmQobGluZSA9PiBsaW5lLm51bWJlciA9PT0gdXNlci5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0T3Bwb25lbnRCcm9rZW5MaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgb3BwID0gdGhpcy5fZ2V0T3Bwb25lbnQoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJyb2tlbkxpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSBvcHAubnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2xvY2tHYW1lUGF3bnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IHRoaXMuX2dldExpbmVzKClcclxuICAgIGxpbmVzXHJcbiAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfTElORSlcclxuICAgICAgLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgbGluZS5ibG9ja0xpbmUoKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBcclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQpIHtcclxuICBpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcclxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHsgLi4uZXZlbnQuZGF0YS5nbG9iYWwgfVxyXG4gICAgdGhpcy5ob21lUGFyZW50ID0gdGhpcy5wYXJlbnRcclxuICAgIHRoaXMucHJldmlvdXNQYXJlbnQgPSB0aGlzLnBhcmVudFxyXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWVcclxuICAgIHRoaXMuZHJhZ1BvaW50ID0gdGhpcy5nZXRHbG9iYWxQb3NpdGlvbigpXHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIHRoaXMuc2V0UGFyZW50Q3VzdG9tKGJvYXJkQ29udGFpbmVyKVxyXG4gICAgdGhpcy5zZXRTZWxlY3RlZCgpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnTW92ZShlKSB7XHJcbiAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gdGhpcy5fZ2V0Qm9hcmQoKVxyXG4gICAgXHJcbiAgICB0aGlzLmdsb2JhbFBvaW50ID0geyB4OiB0aGlzLmRyYWdQb2ludC54IC0gKHRoaXMuc3RhcnRQb2ludC54IC0gZS5kYXRhLmdsb2JhbC54KSwgeTogdGhpcy5kcmFnUG9pbnQueSAtICh0aGlzLnN0YXJ0UG9pbnQueSAtIGUuZGF0YS5nbG9iYWwueSkgfVxyXG5cclxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gdGhpcy5wYXJlbnQudG9Mb2NhbCh0aGlzLmdsb2JhbFBvaW50KVxyXG4gICAgdGhpcy5wb3NpdGlvbi54ID0gbmV3UG9zaXRpb24ueFxyXG4gICAgdGhpcy5wb3NpdGlvbi55ID0gbmV3UG9zaXRpb24ueVxyXG5cclxuICAgIG5ld1Bvc2l0aW9uLnggKz0gdGhpcy53aWR0aCAvIDJcclxuICAgIG5ld1Bvc2l0aW9uLnkgKz0gdGhpcy5oZWlnaHQgLyAyXHJcblxyXG4gICAgY29uc3QgbmV3UGFyZW50ID0gdGhpcy5fZ2V0TGluZXMoKS5maW5kKGxpbmUgPT4ge1xyXG4gICAgICBsZXQgY2VudGVyID0gbGluZS50b0xvY2FsKHRoaXMuZ2xvYmFsUG9pbnQpXHJcbiAgICAgIGNlbnRlci54ICs9IHRoaXMud2lkdGggLyAyXHJcbiAgICAgIGNlbnRlci55ICs9IHRoaXMuaGVpZ2h0IC8gMlxyXG5cclxuICAgICAgcmV0dXJuIGxpbmUudGVzdEhpdChjZW50ZXIpXHJcbiAgICB9KSB8fCBib2FyZENvbnRhaW5lclxyXG5cclxuICAgIGlmIChuZXdQYXJlbnQubmFtZSAhPT0gdGhpcy5wcmV2aW91c1BhcmVudC5uYW1lKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNQYXJlbnQub3JkZXJQYXducyAmJiB0aGlzLnByZXZpb3VzUGFyZW50Lm9yZGVyUGF3bnMoKVxyXG5cclxuICAgICAgaWYgKG5ld1BhcmVudC5vcmRlclBhd25zICYmIChuZXdQYXJlbnQudG9IaXQgfHwgbmV3UGFyZW50LnRvU2l0KSkge1xyXG4gICAgICAgIG5ld1BhcmVudC5vcmRlclBhd25zKHsgZmFrZTogdHJ1ZSB9KVxyXG4gICAgICAgIHRoaXMucHJldmlvdXNQYXJlbnQgPSBuZXdQYXJlbnRcclxuICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ0VuZCgpIHtcclxuICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlXHJcbiAgICBcclxuICAgIGxldCBsaW5lcyA9IHRoaXMuX2dldExpbmVzKClcclxuICAgIGxpbmVzLnB1c2godGhpcy5fZ2V0TXlGaW5pc2hMaW5lKCkpXHJcblxyXG4gICAgY29uc3QgbmV3UGFyZW50ID0gbGluZXMuZmluZChsaW5lID0+IHtcclxuICAgICAgY29uc29sZS5sb2cobGluZSlcclxuICAgICAgbGV0IGNlbnRlciA9IGxpbmUudG9Mb2NhbCh0aGlzLmdldEdsb2JhbFBvc2l0aW9uKCkpXHJcbiAgICAgIGNlbnRlci54ICs9IHRoaXMud2lkdGggLyAyXHJcbiAgICAgIGNlbnRlci55ICs9IHRoaXMuaGVpZ2h0IC8gMlxyXG5cclxuICAgICAgcmV0dXJuIGxpbmUudGVzdEhpdChjZW50ZXIpICYmIChsaW5lLnRvSGl0IHx8IGxpbmUudG9TaXQpXHJcbiAgICB9KSB8fCB0aGlzLmhvbWVQYXJlbnRcclxuXHJcbiAgICB0aGlzLnNldFNvbGlkKClcclxuICAgIHRoaXMuc2V0UGFyZW50Q3VzdG9tKG5ld1BhcmVudClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkFkZGVkIChjb250YWluZXIpIHtcclxuICBjb250YWluZXIub3JkZXJQYXducyAmJiBjb250YWluZXIub3JkZXJQYXducygpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvblJlbW92ZWQgKGNvbnRhaW5lcikge1xyXG4gIGNvbnRhaW5lci5vcmRlclBhd25zICYmIGNvbnRhaW5lci5vcmRlclBhd25zKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZSAob2JqKSB7XHJcbiAgb2JqLmludGVyYWN0aXZlID0gdHJ1ZVxyXG4gIG9iai5vbignbW91c2Vkb3duJywgb25EcmFnU3RhcnQpXHJcbiAgICAub24oJ3RvdWNoc3RhcnQnLCBvbkRyYWdTdGFydClcclxuICAgIC5vbignbW91c2V1cCcsIG9uRHJhZ0VuZClcclxuICAgIC5vbignbW91c2V1cG91dHNpZGUnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ3RvdWNoZW5kJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCd0b3VjaGVuZG91dHNpZGUnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ21vdXNlbW92ZScsIG9uRHJhZ01vdmUpXHJcbiAgICAub24oJ3RvdWNobW92ZScsIG9uRHJhZ01vdmUpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1blN1YnNjcmliZSAob2JqKSB7XHJcbiAgb2JqLmludGVyYWN0aXZlID0gdHJ1ZVxyXG4gIG9iai5vbignbW91c2Vkb3duJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2V1cCcsICgpID0+IHt9KVxyXG4gICAgLm9uKCdtb3VzZXVwb3V0c2lkZScsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaGVuZCcsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaGVuZG91dHNpZGUnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2Vtb3ZlJywgKCkgPT4ge30pXHJcbiAgICAub24oJ3RvdWNobW92ZScsICgpID0+IHt9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQm9hcmRDb250YWluZXIgKGJvYXJkQ29udGFpbmVyLCBhcHAsIHJhdGlvcykge1xyXG4gIGxldCByYXRpbyA9ICgxMDAgKiBhcHAucmVuZGVyZXIudmlldy5oZWlnaHQpIC8gcmF0aW9zLkggLyAxMDBcclxuXHJcbiAgYm9hcmRDb250YWluZXIud2lkdGggPSByYXRpb3MuVyAvIDEwMCAqIHJhdGlvXHJcbiAgYm9hcmRDb250YWluZXIuaGVpZ2h0ID0gcmF0aW9zLkggLyAxMDAgKiByYXRpb1xyXG5cclxuICBib2FyZENvbnRhaW5lci5wb3NpdGlvbi5zZXQoYXBwLnJlbmRlcmVyLnZpZXcud2lkdGggLyAyLCBhcHAucmVuZGVyZXIudmlldy5oZWlnaHQgLyAyKVxyXG4gIGJvYXJkQ29udGFpbmVyLnNjYWxlLnNldChyYXRpbywgcmF0aW8pXHJcbiAgYm9hcmRDb250YWluZXIucGl2b3Quc2V0KHJhdGlvcy5XIC8gMiwgcmF0aW9zLkggLyAyKVxyXG59IiwiaW1wb3J0ICogYXMgcmF0aW9zIGZyb20gJy4vcmF0aW9zJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQge1xyXG4gIFBhd24sXHJcbiAgR2FtZVNlY3Rpb24sXHJcbiAgR2FtZUxpbmUsXHJcbiAgRmluaXNoTGluZSxcclxuICBCcm9rZW5MaW5lXHJcbn0gZnJvbSAnLi9jbGFzc2VzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb25zICgpIHtcclxuICBjb25zdCBzZWN0aW9ucyA9IG5ldyBBcnJheSg0KS5maWxsKDApXHJcblxyXG4gIHJldHVybiBzZWN0aW9ucy5tYXAoKHNlYywgaSkgPT4ge1xyXG4gICAgc2VjID0gbmV3IEdhbWVTZWN0aW9uKClcclxuICAgIHNlYy5uYW1lID0gdHlwZXMuR0FNRV9TRUNUSU9OICsgJ18nICsgaVxyXG4gICAgc2VjLm51bWJlciA9IGlcclxuICAgIFxyXG4gICAgaWYgKGkgPT09IDApIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQgKyByYXRpb3Muc2VjdGlvbi53aWR0aCArIHJhdGlvcy5NSURETEUsIHJhdGlvcy5UT1ApXHJcbiAgICBpZiAoaSA9PT0gMSkgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCwgcmF0aW9zLlRPUClcclxuICAgIGlmIChpID09PSAyKSBzZWMucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZULCByYXRpb3MuSCAtIHJhdGlvcy5UT1AgLSByYXRpb3Muc2VjdGlvbi5oZWlnaHQpXHJcbiAgICBpZiAoaSA9PT0gMykgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCArIHJhdGlvcy5zZWN0aW9uLndpZHRoICsgcmF0aW9zLk1JRERMRSwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNlY3Rpb24uaGVpZ2h0KVxyXG5cclxuICAgIHJldHVybiBzZWNcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZUxpbmVzICgpIHtcclxuICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgyNCkuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gbGluZXMubWFwKChsaW5lLCBpLCBhcnIpID0+IHtcclxuICAgIGxpbmUgPSBuZXcgR2FtZUxpbmUoKVxyXG4gICAgbGluZS5uYW1lID0gdHlwZXMuR0FNRV9MSU5FICsgJ18nICsgaVxyXG4gICAgbGluZS5udW1iZXIgPSBpXHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGF3bnMgKHBhd25PYmosIGNvbG9yLCBpc1VzZXIgPSBmYWxzZSwgY291bnQgPSAxNSkge1xyXG4gIHJldHVybiBuZXcgQXJyYXkoY291bnQpLmZpbGwoMCkubWFwKChlbGVtLCBpKSA9PiB7XHJcbiAgICBjb25zdCBzcHJpdGUgPSBuZXcgUGF3bihwYXduT2JqLCBjb2xvciwgaXNVc2VyKVxyXG4gICAgc3ByaXRlLm5hbWUgPSBgJHtjb2xvcn1fJHt0eXBlcy5HQU1FX1BBV059XyR7aX1gXHJcbiAgICBzcHJpdGUubnVtYmVyID0gaVxyXG5cclxuICAgIHJldHVybiBzcHJpdGVcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmluaXNoTGluZXMgKHVuLCBvbikge1xyXG4gIGNvbnN0IGxpbmVzID0gbmV3IEFycmF5KDIpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIGxpbmVzLm1hcCgobGluZSwgaSwgYXJyKSA9PiB7XHJcbiAgICBsZXQgbnVtID0gaSA9PT0gMSA/IG9uIDogdW5cclxuXHJcbiAgICBsaW5lID0gbmV3IEZpbmlzaExpbmUoKVxyXG4gICAgbGluZS5uYW1lID0gdHlwZXMuRklOSVNIX0xJTkUgKyAnXycgKyBudW1cclxuICAgIGxpbmUubnVtYmVyID0gbnVtXHJcblxyXG4gICAgaWYgKGkgPT09IDApIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5XIC0gcmF0aW9zLnNpZGVMaW5lLnNpZGUgLSByYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5zaWRlTGluZS50b3ApXHJcbiAgICBpZiAoaSA9PT0gMSkge1xyXG4gICAgICBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuVyAtIHJhdGlvcy5zaWRlTGluZS5zaWRlIC0gcmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3MuSCAtIHJhdGlvcy5UT1AgLSByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0KVxyXG4gICAgICBsaW5lLnJvdGF0aW9uID0gTWF0aC5QSVxyXG4gICAgICBsaW5lLnBpdm90LnNldChyYXRpb3Muc2lkZUxpbmUud2lkdGgsIHJhdGlvcy5zaWRlTGluZS5oZWlnaHQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnJva2VuTGluZSAodW4sIG9uKSB7XHJcbiAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXkoMikuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gbGluZXMubWFwKChsaW5lLCBpLCBhcnIpID0+IHtcclxuICAgIGxldCBudW0gPSBpID09PSAwID8gb24gOiB1blxyXG5cclxuICAgIGxpbmUgPSBuZXcgQnJva2VuTGluZSgpXHJcbiAgICBsaW5lLm5hbWUgPSB0eXBlcy5CUk9LRU5fTElORSArICdfJyArIG51bVxyXG4gICAgbGluZS5udW1iZXIgPSBudW1cclxuXHJcbiAgICBpZiAoaSA9PT0gMCkgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLmJyb2tlbl9saW5lLngsIHJhdGlvcy5icm9rZW5fbGluZS55MClcclxuICAgIGlmIChpID09PSAxKSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuYnJva2VuX2xpbmUueCwgcmF0aW9zLmJyb2tlbl9saW5lLnkxKVxyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4vaGVscGVycydcclxuaW1wb3J0IHsgQm9hcmRDb250YWluZXIgYXMgQm9hcmRDb250YWluZXJDbGFzcyB9IGZyb20gJy4vY2xhc3NlcydcclxuXHJcbmxldCBib2FyZENvbnRhaW5lciwgYm9hcmQsIHNlY3Rpb25BcnIgPSBbXSwgbGluZUFyciA9IFtdLCB1c2VyUGF3bkFyciA9IFtdLCBvcHBvbmVudFBhd25BcnIgPSBbXSwgc2lkZUxpbmVBcnIgPSBbXSwgYnJva2VuTGluZUFyciA9IFtdXHJcblxyXG5jb25zdCB1c2VyID0ge1xyXG4gIGNvbG9yOiAnd2hpdGUnLFxyXG4gIGJvYXJkOiBbXHJcbiAgICAyLCAwLCAwLCAwLCAwLCAwLFxyXG4gICAgMCwgMCwgMCwgMCwgMCwgNSxcclxuICAgIDAsIDAsIDAsIDAsIDMsIDAsXHJcbiAgICA1LCAwLCAwLCAwLCAwLCAwXHJcbiAgXSxcclxuICBudW1iZXI6IDBcclxufVxyXG5cclxuY29uc3Qgb3Bwb25lbnQgPSB7XHJcbiAgY29sb3I6ICdibGFjaycsXHJcbiAgYm9hcmQ6IFtcclxuICAgIDAsIDAsIDAsIDAsIDAsIDUsXHJcbiAgICAwLCAxLCAwLCAwLCAwLCAwLFxyXG4gICAgNSwgMCwgMCwgMCwgMCwgMCxcclxuICAgIDAsIDAsIDAsIDAsIDAsIDFcclxuICBdLFxyXG4gIG51bWJlcjogMVxyXG59XHJcblxyXG5jb25zdCBib2FyZFBuZyA9ICdib2FyZC5wbmcnXHJcbmNvbnN0IHVzZXJQYXduUG5nID0gYCR7dXNlci5jb2xvcn1fcGF3bi5wbmdgXHJcbmNvbnN0IHVzZXJQYXduU2lkZVBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd24yLnBuZ2BcclxuY29uc3QgdXNlclBhd25TZWxlY3RlZFBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd25fc2VsZWN0ZWQucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25QbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bi5wbmdgXHJcbmNvbnN0IG9wcG9uZW50UGF3blNpZGVQbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bjIucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25TZWxlY3RlZFBuZyA9IGAke29wcG9uZW50LmNvbG9yfV9wYXduX3NlbGVjdGVkLnBuZ2BcclxuY29uc3QgbGluZVNlbGVjdGVkUG5nID0gJ2xpbmVfc2VsZWN0ZWQucG5nJ1xyXG5cclxuY29uc3QgdXNlclBhd25zID0ge1xyXG4gIHNvbGlkOiB1c2VyUGF3blBuZyxcclxuICBzaWRlOiB1c2VyUGF3blNpZGVQbmcsXHJcbiAgc2VsZWN0ZWQ6IHVzZXJQYXduU2VsZWN0ZWRQbmdcclxufVxyXG5cclxuY29uc3Qgb3Bwb25lbnRQYXducyA9IHtcclxuICBzb2xpZDogb3Bwb25lbnRQYXduUG5nLFxyXG4gIHNpZGU6IG9wcG9uZW50UGF3blNpZGVQbmcsXHJcbiAgc2VsZWN0ZWQ6IG9wcG9uZW50UGF3blNlbGVjdGVkUG5nXHJcbn1cclxuXHJcblBJWEkudXRpbHMuc2tpcEhlbGxvKClcclxuXHJcbmxldCBBcHBsaWNhdGlvbiA9IFBJWEkuQXBwbGljYXRpb24sXHJcbiAgICBsb2FkZXIgPSBQSVhJLmxvYWRlcixcclxuICAgIHJlc291cmNlcyA9IFBJWEkubG9hZGVyLnJlc291cmNlcyxcclxuICAgIFNwcml0ZSA9IFBJWEkuU3ByaXRlXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgd2lkdGg6IDgwMCxcclxuICBoZWlnaHQ6IDgwMCxcclxuICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgdHJhbnNwYXJlbnQ6IGZhbHNlLFxyXG4gIHJlc29sdXRpb246IGRldmljZVBpeGVsUmF0aW9cclxufVxyXG5cclxubGV0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbihjb25maWcpXHJcbmFwcC5yZW5kZXJlci52aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXHJcbmFwcC5yZW5kZXJlci52aWV3LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuYXBwLnJlbmRlcmVyLmF1dG9SZXNpemUgPSB0cnVlXHJcblxyXG4vLyBTRVRVUFxyXG5jb25zdCBzZXR1cCA9ICgpID0+IHtcclxuICBib2FyZENvbnRhaW5lciA9IG5ldyBCb2FyZENvbnRhaW5lckNsYXNzKHVzZXIsIG9wcG9uZW50KVxyXG5cclxuICBib2FyZCA9IG5ldyBTcHJpdGUocmVzb3VyY2VzW2JvYXJkUG5nXS50ZXh0dXJlKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKGJvYXJkKVxyXG4gIFxyXG4gIHNlY3Rpb25BcnIgPSBoZWxwZXJzLmNyZWF0ZVNlY3Rpb25zKClcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZCguLi5zZWN0aW9uQXJyKVxyXG5cclxuICBsaW5lQXJyID0gaGVscGVycy5jcmVhdGVHYW1lTGluZXMoKVxyXG4gIHNlY3Rpb25BcnIuZm9yRWFjaCgoc2VjLCBpLCBhcnIpID0+IHtcclxuICAgIGNvbnN0IGNodW5rID0gbGluZUFyci5sZW5ndGggLyBhcnIubGVuZ3RoXHJcbiAgICBzZWMuYWRkQ2hpbGQoXHJcbiAgICAgIC4uLmxpbmVBcnIuc2xpY2UoY2h1bmsgKiBpLCBjaHVuayAqIChpICsgMSkpXHJcbiAgICApXHJcblxyXG4gICAgc2VjLm9yZGVyTGluZXMoKVxyXG4gIH0pXHJcblxyXG4gIHNpZGVMaW5lQXJyID0gaGVscGVycy5jcmVhdGVGaW5pc2hMaW5lcyh1c2VyLm51bWJlciwgb3Bwb25lbnQubnVtYmVyKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKC4uLnNpZGVMaW5lQXJyKVxyXG5cclxuICBicm9rZW5MaW5lQXJyID0gaGVscGVycy5jcmVhdGVCcm9rZW5MaW5lKHVzZXIubnVtYmVyLCBvcHBvbmVudC5udW1iZXIpXHJcbiAgYm9hcmRDb250YWluZXIuYWRkQ2hpbGQoLi4uYnJva2VuTGluZUFycilcclxuXHJcbiAgdXNlclBhd25BcnIgPSBoZWxwZXJzLmNyZWF0ZVBhd25zKHVzZXJQYXducywgdXNlci5jb2xvciwgdHJ1ZSwgMTUpXHJcbiAgb3Bwb25lbnRQYXduQXJyID0gaGVscGVycy5jcmVhdGVQYXducyhvcHBvbmVudFBhd25zLCBvcHBvbmVudC5jb2xvciwgZmFsc2UsIDE1KVxyXG5cclxuICBsaW5lQXJyLnJlZHVjZSgoYWNjLCBjdXIsIGksIGFycikgPT4ge1xyXG4gICAgaWYgKHVzZXIuYm9hcmRbaV0gPiAwKSB7XHJcbiAgICAgIGN1ci5hZGRDaGlsZCguLi51c2VyUGF3bkFyci5zbGljZShhY2MudXNlciwgYWNjLnVzZXIgKyB1c2VyLmJvYXJkW2ldKSlcclxuICAgICAgYWNjLnVzZXIgKz0gdXNlci5ib2FyZFtpXVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHBvbmVudC5ib2FyZFtpXSA+IDApIHtcclxuICAgICAgY3VyLmFkZENoaWxkKC4uLm9wcG9uZW50UGF3bkFyci5zbGljZShhY2Mub3Bwb25lbnQsIGFjYy5vcHBvbmVudCArIG9wcG9uZW50LmJvYXJkW2ldKSlcclxuICAgICAgYWNjLm9wcG9uZW50ICs9IG9wcG9uZW50LmJvYXJkW2ldXHJcbiAgICB9XHJcblxyXG4gICAgY3VyLm9yZGVyUGF3bnMoKVxyXG5cclxuICAgIHJldHVybiBhY2NcclxuICB9LCB7IHVzZXI6IDAsIG9wcG9uZW50OiAwIH0pXHJcblxyXG4gIGJvYXJkQ29udGFpbmVyLmNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyKGFwcClcclxuXHJcbiAgYXBwLnN0YWdlLmFkZENoaWxkKGJvYXJkQ29udGFpbmVyKVxyXG5cclxuICBjb25zdCByZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBhcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICBib2FyZENvbnRhaW5lci5jYWxjdWxhdGVCb2FyZENvbnRhaW5lcihhcHApXHJcbiAgfVxyXG4gIFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgcmVzaXplKVxyXG4gIFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuYXBwZW5kQ2hpbGQoYXBwLnZpZXcpXHJcbiAgXHJcbiAgcmVzaXplKClcclxufVxyXG5cclxuY29uc3QgcGl4aUxvYWRlciA9ICgpID0+IHtcclxuICBsb2FkZXJcclxuICAgIC5hZGQoW1xyXG4gICAgICBib2FyZFBuZywgXHJcbiAgICAgIHVzZXJQYXduUG5nLCBcclxuICAgICAgb3Bwb25lbnRQYXduUG5nLFxyXG4gICAgICB1c2VyUGF3blNpZGVQbmcsXHJcbiAgICAgIG9wcG9uZW50UGF3blNpZGVQbmcsXHJcbiAgICAgIHVzZXJQYXduU2VsZWN0ZWRQbmcsXHJcbiAgICAgIG9wcG9uZW50UGF3blNlbGVjdGVkUG5nLFxyXG4gICAgICBsaW5lU2VsZWN0ZWRQbmdcclxuICAgIF0pXHJcbiAgICAubG9hZChzZXR1cClcclxufVxyXG5cclxucGl4aUxvYWRlcigpXHJcbiIsImV4cG9ydCBjb25zdCBIID0gNzY4XHJcbmV4cG9ydCBjb25zdCBXID0gMTE0N1xyXG5leHBvcnQgY29uc3QgVE9QID0gMjBcclxuZXhwb3J0IGNvbnN0IExFRlQgPSAxMDhcclxuZXhwb3J0IGNvbnN0IE1JRERMRSA9IDgyXHJcbmV4cG9ydCBjb25zdCBQQVdOID0gNzFcclxuZXhwb3J0IGNvbnN0IFNFQ19QRVJDID0gODVcclxuZXhwb3J0IGNvbnN0IENPVU5UX0hFSUdIVCA9IDUwXHJcblxyXG5leHBvcnQgY29uc3QgdG9wSGVpZ2h0UmF0aW8gPSBUT1AgKiAxMDAgLyBIXHJcbmV4cG9ydCBjb25zdCBsZWZ0V2lkdGhSYXRpbyA9IExFRlQgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBtaWRkbGVXaWR0aFJhdGlvID0gTUlERExFICogMTAwIC8gV1xyXG5leHBvcnQgY29uc3QgcGF3bkhlaWdodFJhdGlvID0gUEFXTiAqIDEwMCAvIEhcclxuXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uV2lkdGhSYXRpbyA9ICgoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMikgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uSGVpZ2h0UmF0aW8gPSAoKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwKSAqIDEwMCAvIEhcclxuZXhwb3J0IGNvbnN0IGxpbmVXaWR0aFJhdGlvID0gc2VjdGlvbldpZHRoUmF0aW8gLyA2XHJcbmV4cG9ydCBjb25zdCBsaW5lSGVpZ2h0UmF0aW8gPSBzZWN0aW9uSGVpZ2h0UmF0aW9cclxuXHJcbmV4cG9ydCBjb25zdCBsaW5lID0ge1xyXG4gIHdpZHRoOiAoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMTIsXHJcbiAgaGVpZ2h0OiAoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb24gPSB7XHJcbiAgd2lkdGg6IChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAyLFxyXG4gIGhlaWdodDogKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBib2FyZCA9IHtcclxuICB3aWR0aDogMTE0NyxcclxuICBoZWlnaHQ6IDc2OFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZUxpbmUgPSB7XHJcbiAgd2lkdGg6IDY1LFxyXG4gIGhlaWdodDogMjEwLFxyXG4gIHRvcDogMTMzLFxyXG4gIHNpZGU6IChMRUZUIC0gNjUpIC8gMlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGF3bl9zaWRlID0ge1xyXG4gIHdpZHRoOiA2NSxcclxuICBoZWlnaHQ6IDE0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBicm9rZW5fbGluZSA9IHtcclxuICB3aWR0aDogUEFXTixcclxuICBoZWlnaHQ6IFBBV04gKyBDT1VOVF9IRUlHSFQsXHJcbiAgeDogTEVGVCArIHNlY3Rpb24ud2lkdGggKyAoKE1JRERMRSAtIFBBV04pIC8gMiksXHJcbiAgeTA6IChIIC8gMikgLSAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMiksXHJcbiAgeTE6IChIIC8gMikgKyAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMSlcclxufSIsImV4cG9ydCBjb25zdCBCT0FSRF9DT05UQUlORVIgPSAnQk9BUkRfQ09OVEFJTkVSJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9TRUNUSU9OID0gJ0dBTUVfU0VDVElPTidcclxuZXhwb3J0IGNvbnN0IEdBTUVfTElORSA9ICdHQU1FX0xJTkUnXHJcbmV4cG9ydCBjb25zdCBGSU5JU0hfTElORSA9ICdGSU5JU0hfTElORSdcclxuZXhwb3J0IGNvbnN0IEJST0tFTl9MSU5FID0gJ0JST0tFTl9MSU5FJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9QQVdOID0gJ0dBTUVfUEFXTidcclxuZXhwb3J0IGNvbnN0IEhJVF9SRUMgPSAnSElUX1JFQydcclxuZXhwb3J0IGNvbnN0IEJST0tFTl9DT1VOVEVSID0gJ0JST0tFTl9DT1VOVEVSJyIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiXSwic291cmNlUm9vdCI6IiJ9