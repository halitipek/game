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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL0JvYXJkQ29udGFpbmVyLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9Ccm9rZW5MaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9GaW5pc2hMaW5lLmNsYXNzLmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy9HYW1lTGluZS5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NsYXNzZXMvR2FtZVNlY3Rpb24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL1Bhd24uY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2dhbWUvY2xhc3Nlcy93aXRoQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZ2FtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3JhdGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9nYW1lL3R5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIl0sIm5hbWVzIjpbIkJvYXJkQ29udGFpbmVyIiwidXNlciIsIm9wcG9uZW50Iiwid2lkdGgiLCJyYXRpb3MiLCJoZWlnaHQiLCJ4VHlwZSIsInR5cGVzIiwibmFtZSIsInBvc2l0aW9uIiwic2V0IiwiYXBwIiwicmF0aW8iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInJlbmRlcmVyIiwicmVzaXplIiwic2NhbGUiLCJQSVhJIiwiQ29udGFpbmVyIiwid2l0aEJhc2UiLCJCcm9rZW5MaW5lIiwicHJvcHMiLCJjb3VudFN0eWxlIiwiVGV4dFN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVRoaWNrbmVzcyIsImRyb3BTaGFkb3ciLCJkcm9wU2hhZG93Q29sb3IiLCJkcm9wU2hhZG93Qmx1ciIsImRyb3BTaGFkb3dEaXN0YW5jZSIsImRyb3BTaGFkb3dBbmdsZSIsImRyb3BTaGFkb3dBbHBoYSIsImNvdW50IiwiVGV4dCIsInBpdm90IiwidmlzaWJsZSIsImFkZENoaWxkIiwibmV3Q291bnQiLCJjaGlsZHJlbiIsImZpbHRlciIsImNoaWxkIiwibGVuZ3RoIiwiY291bnRDaGlsZCIsImZpbmQiLCJ0ZXh0IiwibnVtYmVyIiwiX2xvY2tHYW1lUGF3bnMiLCJwYXducyIsImZvckVhY2giLCJwYXduIiwiaSIsImFyciIsIlR3ZWVuTWF4IiwidG8iLCJ4IiwieSIsIkNPVU5UX0hFSUdIVCIsInVwZGF0ZUNvdW50IiwiRmluaXNoTGluZSIsInRvU2l0IiwiaGl0UmVjIiwiR3JhcGhpY3MiLCJkcmF3UmVjdCIsInVuU3Vic2NyaWJlIiwicG9pbnQiLCJHYW1lTGluZSIsImJsb2NrZWQiLCJhcmdzIiwicGF3bkFyciIsImZha2UiLCJyZXZlcnNlIiwicGFyZW50Iiwicm93IiwiUEFXTiIsImlzVXNlciIsInN1YnNjcmliZSIsInRvSGl0Iiwib3JkZXJQYXducyIsIkdhbWVTZWN0aW9uIiwibGluZSIsImxpbmVJbmRleCIsIlBhd24iLCJwYXduT2JqIiwiY29sb3IiLCJsb2FkZXIiLCJyZXNvdXJjZXMiLCJzb2xpZCIsInRleHR1cmUiLCJzb2xpZFRleHR1cmUiLCJzaWRlVGV4dHVyZSIsInNpZGUiLCJzZWxlY3RlZFRleHR1cmUiLCJzZWxlY3RlZCIsImN1cnNvciIsIm9uIiwiZnVuY3Rpb25zIiwibmV3UGFyZW50IiwiaGl0dGVkUGF3biIsImdvVG9Ccm9rZW5MaW5lIiwic2V0U2lkZSIsInRvTG9jYWwiLCJQb2ludCIsImludGVyYWN0aXZlIiwiYnJva2VuTGluZXMiLCJfZ2V0QnJva2VuTGluZXMiLCJfZ2V0VXNlciIsInNldFBhcmVudEN1c3RvbSIsIlNwcml0ZSIsImNvbXAiLCJwcm90b3R5cGUiLCJfZ2V0Qm9hcmQiLCJvYmoiLCJfZ2V0T3Bwb25lbnQiLCJfZ2V0U2VjdGlvbnMiLCJib2FyZENvbnRhaW5lciIsIl9nZXRMaW5lcyIsInJlZHVjZSIsImFjYyIsImN1ciIsImxpbmVzIiwicHVzaCIsIl9nZXRGaW5pc2hMaW5lcyIsIl9nZXRNeUZpbmlzaExpbmUiLCJfZ2V0T3Bwb25lbnRGaW5pc2hMaW5lIiwib3BwIiwiX2dldE15QnJva2VuTGluZSIsIl9nZXRPcHBvbmVudEJyb2tlbkxpbmUiLCJibG9ja0xpbmUiLCJhbnRpYWxpYXMiLCJ0cmFuc3BhcmVudCIsInJlc29sdXRpb24iLCJkZXZpY2VQaXhlbFJhdGlvIiwibGVnYWN5Iiwib25EcmFnU3RhcnQiLCJldmVudCIsImRyYWdnaW5nIiwic3RhcnRQb2ludCIsImRhdGEiLCJnbG9iYWwiLCJob21lUGFyZW50IiwicHJldmlvdXNQYXJlbnQiLCJkcmFnUG9pbnQiLCJnZXRHbG9iYWxQb3NpdGlvbiIsInNldFNlbGVjdGVkIiwib25EcmFnTW92ZSIsImUiLCJnbG9iYWxQb2ludCIsIm5ld1Bvc2l0aW9uIiwiY2VudGVyIiwidGVzdEhpdCIsIm9uRHJhZ0VuZCIsInNldFNvbGlkIiwib25BZGRlZCIsImNvbnRhaW5lciIsIm9uUmVtb3ZlZCIsImNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyIiwidmlldyIsIkgiLCJXIiwiY3JlYXRlU2VjdGlvbnMiLCJzZWN0aW9ucyIsIkFycmF5IiwibWFwIiwic2VjIiwiY3JlYXRlR2FtZUxpbmVzIiwiY3JlYXRlUGF3bnMiLCJlbGVtIiwic3ByaXRlIiwiY3JlYXRlRmluaXNoTGluZXMiLCJ1biIsIm51bSIsInRvcCIsInJvdGF0aW9uIiwiTWF0aCIsIlBJIiwiY3JlYXRlQnJva2VuTGluZSIsInkwIiwieTEiLCJib2FyZCIsInNlY3Rpb25BcnIiLCJsaW5lQXJyIiwidXNlclBhd25BcnIiLCJvcHBvbmVudFBhd25BcnIiLCJzaWRlTGluZUFyciIsImJyb2tlbkxpbmVBcnIiLCJib2FyZFBuZyIsInVzZXJQYXduUG5nIiwidXNlclBhd25TaWRlUG5nIiwidXNlclBhd25TZWxlY3RlZFBuZyIsIm9wcG9uZW50UGF3blBuZyIsIm9wcG9uZW50UGF3blNpZGVQbmciLCJvcHBvbmVudFBhd25TZWxlY3RlZFBuZyIsImxpbmVTZWxlY3RlZFBuZyIsInVzZXJQYXducyIsIm9wcG9uZW50UGF3bnMiLCJ1dGlscyIsInNraXBIZWxsbyIsIkFwcGxpY2F0aW9uIiwiY29uZmlnIiwic3R5bGUiLCJkaXNwbGF5IiwiYXV0b1Jlc2l6ZSIsInNldHVwIiwiQm9hcmRDb250YWluZXJDbGFzcyIsImhlbHBlcnMiLCJjaHVuayIsInNsaWNlIiwib3JkZXJMaW5lcyIsInN0YWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsInBpeGlMb2FkZXIiLCJhZGQiLCJsb2FkIiwiVE9QIiwiTEVGVCIsIk1JRERMRSIsIlNFQ19QRVJDIiwidG9wSGVpZ2h0UmF0aW8iLCJsZWZ0V2lkdGhSYXRpbyIsIm1pZGRsZVdpZHRoUmF0aW8iLCJwYXduSGVpZ2h0UmF0aW8iLCJzZWN0aW9uV2lkdGhSYXRpbyIsInNlY3Rpb25IZWlnaHRSYXRpbyIsImxpbmVXaWR0aFJhdGlvIiwibGluZUhlaWdodFJhdGlvIiwic2VjdGlvbiIsInNpZGVMaW5lIiwicGF3bl9zaWRlIiwiYnJva2VuX2xpbmUiLCJCT0FSRF9DT05UQUlORVIiLCJHQU1FX1NFQ1RJT04iLCJHQU1FX0xJTkUiLCJGSU5JU0hfTElORSIsIkJST0tFTl9MSU5FIiwiR0FNRV9QQVdOIiwiSElUX1JFQyIsIkJST0tFTl9DT1VOVEVSIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ1RBLHdCQUF3QixtQkFBTyxDQUFDLHVGQUFxQjs7QUFFckQsc0JBQXNCLG1CQUFPLENBQUMsbUZBQW1COztBQUVqRCx3QkFBd0IsbUJBQU8sQ0FBQyx1RkFBcUI7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNWQSx3QkFBd0IsMkVBQTJFLG9DQUFvQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sb0NBQW9DLDhIQUE4SCxHQUFHLEVBQUUsc0JBQXNCOztBQUVuVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUIiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2dhbWUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBCb2FyZENvbnRhaW5lciBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcih1c2VyLCBvcHBvbmVudCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2VyID0gdXNlclxyXG4gICAgdGhpcy5vcHBvbmVudCA9IG9wcG9uZW50XHJcbiAgICB0aGlzLndpZHRoID0gcmF0aW9zLldcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLkhcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5CT0FSRF9DT05UQUlORVJcclxuICAgIHRoaXMubmFtZSA9IHR5cGVzLkJPQVJEX0NPTlRBSU5FUlxyXG4gICAgdGhpcy5wb3NpdGlvbi5zZXQoMCwgMClcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyIChhcHApIHtcclxuICAgIGxldCByYXRpbyA9ICgxMDAgKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gcmF0aW9zLkggLyAxMDBcclxuXHJcbiAgICBhcHAucmVuZGVyZXIucmVzaXplKHJhdGlvcy5XICogcmF0aW8sIHJhdGlvcy5IICogcmF0aW8pXHJcbiAgICBcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MuVyAqIHJhdGlvXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5IICogcmF0aW9cclxuICAgIHRoaXMuc2NhbGUuc2V0KHJhdGlvLCByYXRpbylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhCYXNlKEJvYXJkQ29udGFpbmVyKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBCcm9rZW5MaW5lIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuQlJPS0VOX0xJTkVcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3MuYnJva2VuX2xpbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLmJyb2tlbl9saW5lLmhlaWdodFxyXG4gICAgdGhpcy5jb3VudFN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHtcclxuICAgICAgZm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG4gICAgICBmb250U2l6ZTogNDIsXHJcbiAgICAgIGZpbGw6IFwid2hpdGVcIixcclxuICAgICAgc3Ryb2tlOiAnI2ZmMzMwMCcsXHJcbiAgICAgIHN0cm9rZVRoaWNrbmVzczogMSxcclxuICAgICAgZHJvcFNoYWRvdzogdHJ1ZSxcclxuICAgICAgZHJvcFNoYWRvd0NvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgZHJvcFNoYWRvd0JsdXI6IDQsXHJcbiAgICAgIGRyb3BTaGFkb3dEaXN0YW5jZTogLTIsXHJcbiAgICAgIGRyb3BTaGFkb3dBbmdsZTogMzAsXHJcbiAgICAgIGRyb3BTaGFkb3dBbHBoYTogLjYsXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBjb3VudCA9IG5ldyBQSVhJLlRleHQoMCwgdGhpcy5jb3VudFN0eWxlKVxyXG4gICAgY291bnQueFR5cGUgPSB0eXBlcy5CUk9LRU5fQ09VTlRFUlxyXG4gICAgY291bnQuaGVpZ2h0ID0gcmF0aW9zLkNPVU5UX0hFSUdIVFxyXG4gICAgY291bnQucGl2b3Quc2V0KGNvdW50LndpZHRoIC8gMiwgY291bnQuaGVpZ2h0IC8gMilcclxuICAgIGNvdW50LnBvc2l0aW9uLnNldChyYXRpb3MuYnJva2VuX2xpbmUud2lkdGggLyAyLCAwKVxyXG4gICAgY291bnQudmlzaWJsZSA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5hZGRDaGlsZChjb3VudClcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvdW50ICgpIHtcclxuICAgIGNvbnN0IG5ld0NvdW50ID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfUEFXTikubGVuZ3RoXHJcbiAgICBjb25zdCBjb3VudENoaWxkID0gdGhpcy5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5CUk9LRU5fQ09VTlRFUilcclxuICAgIGNvdW50Q2hpbGQudGV4dCA9IG5ld0NvdW50XHJcbiAgICBjb3VudENoaWxkLnZpc2libGUgPSBuZXdDb3VudFxyXG5cclxuICAgIGlmIChuZXdDb3VudCAmJiB0aGlzLm51bWJlciA9PT0gMCkge1xyXG4gICAgICB0aGlzLl9sb2NrR2FtZVBhd25zKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9yZGVyUGF3bnMgKCkge1xyXG4gICAgY29uc3QgcGF3bnMgPSB0aGlzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZCAmJiBjaGlsZC54VHlwZSAmJiBjaGlsZC54VHlwZSA9PT0gdHlwZXMuR0FNRV9QQVdOKVxyXG4gICAgcGF3bnMuZm9yRWFjaCgocGF3biwgaSwgYXJyKSA9PiB7XHJcbiAgICAgIFR3ZWVuTWF4LnRvKHBhd24ucG9zaXRpb24sIC41LCB7IHg6IDAsIHk6IHJhdGlvcy5DT1VOVF9IRUlHSFQgfSlcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy51cGRhdGVDb3VudCgpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShCcm9rZW5MaW5lKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBGaW5pc2hMaW5lIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuRklOSVNIX0xJTkVcclxuICAgIHRoaXMud2lkdGggPSByYXRpb3Muc2lkZUxpbmUud2lkdGhcclxuICAgIHRoaXMuaGVpZ2h0ID0gcmF0aW9zLnNpZGVMaW5lLmhlaWdodFxyXG4gICAgdGhpcy50b1NpdCA9IHRydWVcclxuXHJcbiAgICBsZXQgaGl0UmVjID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxyXG4gICAgaGl0UmVjLnhUeXBlID0gdHlwZXMuSElUX1JFQ1xyXG4gICAgaGl0UmVjLmRyYXdSZWN0KDAsIDAsIHJhdGlvcy5zaWRlTGluZS53aWR0aCwgcmF0aW9zLnNpZGVMaW5lLmhlaWdodClcclxuICAgIGhpdFJlYy52aXNpYmxlID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLmFkZENoaWxkKGhpdFJlYylcclxuICB9XHJcblxyXG4gIG9yZGVyUGF3bnMgKCkge1xyXG4gICAgdGhpcy5jaGlsZHJlblxyXG4gICAgICAuZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlICE9PSB0eXBlcy5ISVRfUkVDKVxyXG4gICAgICAuZm9yRWFjaCgocGF3biwgaSwgYXJyKSA9PiB7XHJcbiAgICAgICAgcGF3bi51blN1YnNjcmliZSgpXHJcbiAgICAgICAgcGF3bi5wb3NpdGlvbi5zZXQoMCwgcmF0aW9zLnBhd25fc2lkZS5oZWlnaHQgKiBpKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgdGVzdEhpdCAocG9pbnQpIHtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5ISVRfUkVDKVxyXG4gICAgXHJcbiAgICBpZiAoXHJcbiAgICAgIHBvaW50LnggPj0gMFxyXG4gICAgICAmJiBwb2ludC54IDw9IHdpZHRoXHJcbiAgICAgICYmIHBvaW50LnkgPj0gMFxyXG4gICAgICAmJiBwb2ludC55IDw9IGhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShGaW5pc2hMaW5lKVxyXG4iLCJpbXBvcnQgd2l0aEJhc2UgZnJvbSAnLi93aXRoQmFzZSdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuLi9yYXRpb3MnXHJcblxyXG5jbGFzcyBHYW1lTGluZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy54VHlwZSA9IHR5cGVzLkdBTUVfTElORVxyXG4gICAgdGhpcy53aWR0aCA9IHJhdGlvcy5saW5lLndpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IHJhdGlvcy5saW5lLmhlaWdodFxyXG4gICAgdGhpcy5ibG9ja2VkID0gZmFsc2VcclxuXHJcbiAgICBsZXQgaGl0UmVjID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxyXG4gICAgaGl0UmVjLnhUeXBlID0gdHlwZXMuSElUX1JFQ1xyXG4gICAgaGl0UmVjLmRyYXdSZWN0KDAsIDAsIHJhdGlvcy5saW5lLndpZHRoLCByYXRpb3MubGluZS5oZWlnaHQpXHJcbiAgICBoaXRSZWMudmlzaWJsZSA9IGZhbHNlXHJcblxyXG4gICAgdGhpcy5hZGRDaGlsZChoaXRSZWMpXHJcbiAgfVxyXG5cclxuICBvcmRlclBhd25zIChhcmdzID0ge30pIHtcclxuICAgIGNvbnN0IHBhd25BcnIgPSB0aGlzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5uYW1lICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX1BBV04pXHJcbiAgICBjb25zdCB7IGZha2UsIHJldmVyc2UgPSB0aGlzLnBhcmVudC5udW1iZXIgPiAxIH0gPSBhcmdzXHJcbiAgICBjb25zdCBsZW5ndGggPSBmYWtlID8gcGF3bkFyci5sZW5ndGggKyAxIDogcGF3bkFyci5sZW5ndGhcclxuXHJcbiAgICBsZXQgcm93ID0gcmF0aW9zLmxpbmUuaGVpZ2h0IC8gbGVuZ3RoXHJcblxyXG4gICAgaWYgKHJvdyA8IHJhdGlvcy5QQVdOKSB7XHJcbiAgICAgIHJvdyA9IHJvdyAtICgocmF0aW9zLlBBV04gLSByb3cpIC8gbGVuZ3RoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm93ID0gcmF0aW9zLlBBV05cclxuICAgIH1cclxuXHJcbiAgICBwYXduQXJyLmZvckVhY2goKHBhd24sIGksIGFycikgPT4ge1xyXG4gICAgICBwYXduLnVuU3Vic2NyaWJlKClcclxuICAgICAgcmV2ZXJzZVxyXG4gICAgICAgICAgPyBUd2Vlbk1heC50byhwYXduLnBvc2l0aW9uLCAuNSwgeyB4OiAwLCB5OiByYXRpb3MubGluZS5oZWlnaHQgLSAocm93ICogaSkgLSByYXRpb3MuUEFXTiB9KVxyXG4gICAgICAgICAgOiBUd2Vlbk1heC50byhwYXduLnBvc2l0aW9uLCAuNSwgeyB4OiAwLCB5OiByb3cgKiBpIH0pXHJcblxyXG4gICAgICBpZiAoaSArIDEgPT09IGFyci5sZW5ndGggJiYgcGF3bi5pc1VzZXIgJiYgIXRoaXMuYmxvY2tlZCkge1xyXG4gICAgICAgIHBhd24uc3Vic2NyaWJlKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnRvU2l0ID0gdHJ1ZVxyXG5cclxuICAgIGlmIChwYXduQXJyLmxlbmd0aCA9PT0gMSAmJiAhcGF3bkFyclswXS5pc1VzZXIpIHtcclxuICAgICAgdGhpcy50b0hpdCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGF3bkFyci5sZW5ndGggPiAxICYmICFwYXduQXJyWzBdLmlzVXNlcikge1xyXG4gICAgICB0aGlzLnRvU2l0ID0gZmFsc2VcclxuICAgICAgdGhpcy50b0hpdCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZXN0SGl0IChwb2ludCkge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkhJVF9SRUMpXHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBwb2ludC54ID49IDBcclxuICAgICAgJiYgcG9pbnQueCA8PSB3aWR0aFxyXG4gICAgICAmJiBwb2ludC55ID49IDBcclxuICAgICAgJiYgcG9pbnQueSA8PSBoZWlnaHRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgYmxvY2tMaW5lICgpIHtcclxuICAgIHRoaXMuYmxvY2tlZCA9IHRydWVcclxuICAgIHRoaXMub3JkZXJQYXducygpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQmFzZShHYW1lTGluZSlcclxuIiwiaW1wb3J0IHdpdGhCYXNlIGZyb20gJy4vd2l0aEJhc2UnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyByYXRpb3MgZnJvbSAnLi4vcmF0aW9zJ1xyXG5cclxuY2xhc3MgR2FtZVNlY3Rpb24gZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMueFR5cGUgPSB0eXBlcy5HQU1FX1NFQ1RJT05cclxuICAgIHRoaXMud2lkdGggPSByYXRpb3Muc2VjdGlvbi53aWR0aFxyXG4gICAgdGhpcy5oZWlnaHQgPSByYXRpb3Muc2VjdGlvbi5oZWlnaHRcclxuICB9XHJcblxyXG4gIG9yZGVyTGluZXMgKCkge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlblxyXG5cclxuICAgIGlmICh0aGlzLm51bWJlciA+IDEpIHtcclxuICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5yZXZlcnNlKClcclxuICAgIH1cclxuXHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChsaW5lLCBsaW5lSW5kZXgsIGFycikgPT4ge1xyXG4gICAgICBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MubGluZS53aWR0aCAqIChhcnIubGVuZ3RoIC0gbGluZUluZGV4IC0gMSksIDApXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoR2FtZVNlY3Rpb24pXHJcbiIsImltcG9ydCB3aXRoQmFzZSBmcm9tICcuL3dpdGhCYXNlJ1xyXG5pbXBvcnQgKiBhcyBmdW5jdGlvbnMgZnJvbSAnLi4vZnVuY3Rpb25zJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuXHJcbmNsYXNzIFBhd24gZXh0ZW5kcyBQSVhJLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IocGF3bk9iaiwgY29sb3IsIGlzVXNlcikge1xyXG4gICAgc3VwZXIoUElYSS5sb2FkZXIucmVzb3VyY2VzW3Bhd25PYmouc29saWRdLnRleHR1cmUpXHJcblxyXG4gICAgdGhpcy5zb2xpZFRleHR1cmUgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNbcGF3bk9iai5zb2xpZF0udGV4dHVyZVxyXG4gICAgdGhpcy5zaWRlVGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1twYXduT2JqLnNpZGVdLnRleHR1cmVcclxuICAgIHRoaXMuc2VsZWN0ZWRUZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW3Bhd25PYmouc2VsZWN0ZWRdLnRleHR1cmVcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxyXG4gICAgdGhpcy5pc1VzZXIgPSBpc1VzZXJcclxuICAgIHRoaXMuY3Vyc29yID0gJ3BvaW50ZXInXHJcbiAgICB0aGlzLnhUeXBlID0gdHlwZXMuR0FNRV9QQVdOXHJcbiAgICB0aGlzLm9uKCdhZGRlZCcsIGZ1bmN0aW9ucy5vbkFkZGVkKVxyXG4gICAgdGhpcy5vbigncmVtb3ZlZCcsIGZ1bmN0aW9ucy5vblJlbW92ZWQpXHJcbiAgfVxyXG5cclxuICBzZXRQYXJlbnRDdXN0b20gKG5ld1BhcmVudCkge1xyXG4gICAgaWYgKG5ld1BhcmVudC50b0hpdCkge1xyXG4gICAgICBuZXdQYXJlbnQudG9IaXQgPSBmYWxzZVxyXG4gICAgICBuZXdQYXJlbnQudG9TaXQgPSB0cnVlXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBoaXR0ZWRQYXduID0gbmV3UGFyZW50LmNoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfUEFXTilcclxuICAgICAgaGl0dGVkUGF3bi5nb1RvQnJva2VuTGluZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1BhcmVudC54VHlwZSA9PT0gdHlwZXMuRklOSVNIX0xJTkUpIHtcclxuICAgICAgdGhpcy5zZXRTaWRlKClcclxuICAgIH1cclxuICAgIG5ld1BhcmVudC50b0xvY2FsKG5ldyBQSVhJLlBvaW50KDAsMCksIHRoaXMsIHRoaXMucG9zaXRpb24pXHJcbiAgICBuZXdQYXJlbnQuYWRkQ2hpbGQodGhpcylcclxuICB9XHJcblxyXG4gIHNldFNvbGlkICgpIHtcclxuICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuc29saWRUZXh0dXJlXHJcbiAgfVxyXG5cclxuICBzZXRTaWRlICgpIHtcclxuICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuc2lkZVRleHR1cmVcclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGVkICgpIHtcclxuICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuc2VsZWN0ZWRUZXh0dXJlXHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmUgKCkge1xyXG4gICAgZnVuY3Rpb25zLnN1YnNjcmliZSh0aGlzKVxyXG4gIH1cclxuXHJcbiAgdW5TdWJzY3JpYmUgKCkge1xyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICBnb1RvQnJva2VuTGluZSAoKSB7XHJcbiAgICBjb25zdCBicm9rZW5MaW5lcyA9IHRoaXMuX2dldEJyb2tlbkxpbmVzKClcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLl9nZXRVc2VyKClcclxuICAgIHVzZXIuY29sb3IgPT09IHRoaXMuY29sb3JcclxuICAgICAgPyB0aGlzLnNldFBhcmVudEN1c3RvbShicm9rZW5MaW5lc1sxXSlcclxuICAgICAgOiB0aGlzLnNldFBhcmVudEN1c3RvbShicm9rZW5MaW5lc1swXSlcclxuICB9XHJcblxyXG4gIGdvVG9GaW5pc2hMaW5lICgpIHtcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEJhc2UoUGF3bilcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXduIH0gZnJvbSAnLi9QYXduLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWVTZWN0aW9uIH0gZnJvbSAnLi9HYW1lU2VjdGlvbi5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1lTGluZSB9IGZyb20gJy4vR2FtZUxpbmUuY2xhc3MnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmluaXNoTGluZSB9IGZyb20gJy4vRmluaXNoTGluZS5jbGFzcydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCcm9rZW5MaW5lIH0gZnJvbSAnLi9Ccm9rZW5MaW5lLmNsYXNzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJvYXJkQ29udGFpbmVyIH0gZnJvbSAnLi9Cb2FyZENvbnRhaW5lci5jbGFzcyciLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb21wKSA9PiB7XHJcbiAgY29tcC5wcm90b3R5cGUuX2dldEJvYXJkID0gZnVuY3Rpb24gKG9iaiA9IHRoaXMpIHtcclxuICAgIGlmIChvYmoueFR5cGUgPT09IHR5cGVzLkJPQVJEX0NPTlRBSU5FUikge1xyXG4gICAgICByZXR1cm4gb2JqXHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAoIW9iai5wYXJlbnQpIHtcclxuICAgICAgcmV0dXJuIG9iai5jaGlsZHJlblswXVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEJvYXJkKG9iai5wYXJlbnQpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRCb2FyZCgpLnVzZXJcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRPcHBvbmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRCb2FyZCgpLm9wcG9uZW50XHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0U2VjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIHJldHVybiBib2FyZENvbnRhaW5lci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfU0VDVElPTilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRMaW5lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nZXRTZWN0aW9ucygpLnJlZHVjZSgoYWNjLCBjdXIsIGksIGFycikgPT4ge1xyXG4gICAgICBjb25zdCBsaW5lcyA9IGN1ci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkdBTUVfTElORSlcclxuXHJcbiAgICAgIGFjYy5wdXNoKC4uLmxpbmVzKVxyXG5cclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwgW10pICAgXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0RmluaXNoTGluZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIHJldHVybiBib2FyZENvbnRhaW5lci5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQgJiYgY2hpbGQueFR5cGUgJiYgY2hpbGQueFR5cGUgPT09IHR5cGVzLkZJTklTSF9MSU5FKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE15RmluaXNoTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLl9nZXRVc2VyKClcclxuICAgIHJldHVybiB0aGlzLl9nZXRGaW5pc2hMaW5lcygpLmZpbmQobGluZSA9PiBsaW5lLm51bWJlciA9PT0gdXNlci5udW1iZXIpXHJcbiAgfVxyXG5cclxuICBjb21wLnByb3RvdHlwZS5fZ2V0T3Bwb25lbnRGaW5pc2hMaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgb3BwID0gdGhpcy5fZ2V0T3Bwb25lbnQoKVxyXG4gICAgcmV0dXJuIHRoaXMuX2dldEZpbmlzaExpbmVzKCkuZmluZChsaW5lID0+IGxpbmUubnVtYmVyID09PSBvcHAubnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldEJyb2tlbkxpbmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXIuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5CUk9LRU5fTElORSlcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9nZXRNeUJyb2tlbkxpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5fZ2V0VXNlcigpXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0QnJva2VuTGluZXMoKS5maW5kKGxpbmUgPT4gbGluZS5udW1iZXIgPT09IHVzZXIubnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgY29tcC5wcm90b3R5cGUuX2dldE9wcG9uZW50QnJva2VuTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG9wcCA9IHRoaXMuX2dldE9wcG9uZW50KClcclxuICAgIHJldHVybiB0aGlzLl9nZXRCcm9rZW5MaW5lcygpLmZpbmQobGluZSA9PiBsaW5lLm51bWJlciA9PT0gb3BwLm51bWJlcilcclxuICB9XHJcblxyXG4gIGNvbXAucHJvdG90eXBlLl9sb2NrR2FtZVBhd25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbGluZXMgPSB0aGlzLl9nZXRMaW5lcygpXHJcbiAgICBsaW5lc1xyXG4gICAgICAuZmlsdGVyKGNoaWxkID0+IGNoaWxkICYmIGNoaWxkLnhUeXBlICYmIGNoaWxkLnhUeXBlID09PSB0eXBlcy5HQU1FX0xJTkUpXHJcbiAgICAgIC5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICAgIGxpbmUuYmxvY2tMaW5lKClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wXHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgd2lkdGg6IDgwMCxcclxuICBoZWlnaHQ6IDgwMCxcclxuICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgdHJhbnNwYXJlbnQ6IGZhbHNlLFxyXG4gIHJlc29sdXRpb246IGRldmljZVBpeGVsUmF0aW8sXHJcbiAgbGVnYWN5OnRydWUsXHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGV2ZW50KSB7XHJcbiAgaWYgKCF0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSB7IC4uLmV2ZW50LmRhdGEuZ2xvYmFsIH1cclxuICAgIHRoaXMuaG9tZVBhcmVudCA9IHRoaXMucGFyZW50XHJcbiAgICB0aGlzLnByZXZpb3VzUGFyZW50ID0gdGhpcy5wYXJlbnRcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlXHJcbiAgICB0aGlzLmRyYWdQb2ludCA9IHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKVxyXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSB0aGlzLl9nZXRCb2FyZCgpXHJcbiAgICB0aGlzLnNldFBhcmVudEN1c3RvbShib2FyZENvbnRhaW5lcilcclxuICAgIHRoaXMuc2V0U2VsZWN0ZWQoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRHJhZ01vdmUoZSkge1xyXG4gIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IHRoaXMuX2dldEJvYXJkKClcclxuICAgIFxyXG4gICAgdGhpcy5nbG9iYWxQb2ludCA9IHsgeDogdGhpcy5kcmFnUG9pbnQueCAtICh0aGlzLnN0YXJ0UG9pbnQueCAtIGUuZGF0YS5nbG9iYWwueCksIHk6IHRoaXMuZHJhZ1BvaW50LnkgLSAodGhpcy5zdGFydFBvaW50LnkgLSBlLmRhdGEuZ2xvYmFsLnkpIH1cclxuXHJcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHRoaXMucGFyZW50LnRvTG9jYWwodGhpcy5nbG9iYWxQb2ludClcclxuICAgIHRoaXMucG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uLnhcclxuICAgIHRoaXMucG9zaXRpb24ueSA9IG5ld1Bvc2l0aW9uLnlcclxuXHJcbiAgICBuZXdQb3NpdGlvbi54ICs9IHRoaXMud2lkdGggLyAyXHJcbiAgICBuZXdQb3NpdGlvbi55ICs9IHRoaXMuaGVpZ2h0IC8gMlxyXG5cclxuICAgIGNvbnN0IG5ld1BhcmVudCA9IHRoaXMuX2dldExpbmVzKCkuZmluZChsaW5lID0+IHtcclxuICAgICAgbGV0IGNlbnRlciA9IGxpbmUudG9Mb2NhbCh0aGlzLmdsb2JhbFBvaW50KVxyXG4gICAgICBjZW50ZXIueCArPSB0aGlzLndpZHRoIC8gMlxyXG4gICAgICBjZW50ZXIueSArPSB0aGlzLmhlaWdodCAvIDJcclxuXHJcbiAgICAgIHJldHVybiBsaW5lLnRlc3RIaXQoY2VudGVyKVxyXG4gICAgfSkgfHwgYm9hcmRDb250YWluZXJcclxuXHJcbiAgICBpZiAobmV3UGFyZW50Lm5hbWUgIT09IHRoaXMucHJldmlvdXNQYXJlbnQubmFtZSkge1xyXG4gICAgICB0aGlzLnByZXZpb3VzUGFyZW50Lm9yZGVyUGF3bnMgJiYgdGhpcy5wcmV2aW91c1BhcmVudC5vcmRlclBhd25zKClcclxuXHJcbiAgICAgIGlmIChuZXdQYXJlbnQub3JkZXJQYXducyAmJiAobmV3UGFyZW50LnRvSGl0IHx8IG5ld1BhcmVudC50b1NpdCkpIHtcclxuICAgICAgICBuZXdQYXJlbnQub3JkZXJQYXducyh7IGZha2U6IHRydWUgfSlcclxuICAgICAgICB0aGlzLnByZXZpb3VzUGFyZW50ID0gbmV3UGFyZW50XHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdFbmQoKSB7XHJcbiAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZVxyXG4gICAgXHJcbiAgICBsZXQgbGluZXMgPSB0aGlzLl9nZXRMaW5lcygpXHJcbiAgICBsaW5lcy5wdXNoKHRoaXMuX2dldE15RmluaXNoTGluZSgpKVxyXG5cclxuICAgIGNvbnN0IG5ld1BhcmVudCA9IGxpbmVzLmZpbmQobGluZSA9PiB7XHJcbiAgICAgIGxldCBjZW50ZXIgPSBsaW5lLnRvTG9jYWwodGhpcy5nZXRHbG9iYWxQb3NpdGlvbigpKVxyXG4gICAgICBjZW50ZXIueCArPSB0aGlzLndpZHRoIC8gMlxyXG4gICAgICBjZW50ZXIueSArPSB0aGlzLmhlaWdodCAvIDJcclxuXHJcbiAgICAgIHJldHVybiBsaW5lLnRlc3RIaXQoY2VudGVyKSAmJiAobGluZS50b0hpdCB8fCBsaW5lLnRvU2l0KVxyXG4gICAgfSkgfHwgdGhpcy5ob21lUGFyZW50XHJcblxyXG4gICAgdGhpcy5zZXRTb2xpZCgpXHJcbiAgICB0aGlzLnNldFBhcmVudEN1c3RvbShuZXdQYXJlbnQpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25BZGRlZCAoY29udGFpbmVyKSB7XHJcbiAgY29udGFpbmVyLm9yZGVyUGF3bnMgJiYgY29udGFpbmVyLm9yZGVyUGF3bnMoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25SZW1vdmVkIChjb250YWluZXIpIHtcclxuICBjb250YWluZXIub3JkZXJQYXducyAmJiBjb250YWluZXIub3JkZXJQYXducygpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUgKG9iaikge1xyXG4gIG9iai5pbnRlcmFjdGl2ZSA9IHRydWVcclxuICBvYmoub24oJ21vdXNlZG93bicsIG9uRHJhZ1N0YXJ0KVxyXG4gICAgLm9uKCd0b3VjaHN0YXJ0Jywgb25EcmFnU3RhcnQpXHJcbiAgICAub24oJ21vdXNldXAnLCBvbkRyYWdFbmQpXHJcbiAgICAub24oJ21vdXNldXBvdXRzaWRlJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCd0b3VjaGVuZCcsIG9uRHJhZ0VuZClcclxuICAgIC5vbigndG91Y2hlbmRvdXRzaWRlJywgb25EcmFnRW5kKVxyXG4gICAgLm9uKCdtb3VzZW1vdmUnLCBvbkRyYWdNb3ZlKVxyXG4gICAgLm9uKCd0b3VjaG1vdmUnLCBvbkRyYWdNb3ZlKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5TdWJzY3JpYmUgKG9iaikge1xyXG4gIG9iai5pbnRlcmFjdGl2ZSA9IHRydWVcclxuICBvYmoub24oJ21vdXNlZG93bicsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaHN0YXJ0JywgKCkgPT4ge30pXHJcbiAgICAub24oJ21vdXNldXAnLCAoKSA9PiB7fSlcclxuICAgIC5vbignbW91c2V1cG91dHNpZGUnLCAoKSA9PiB7fSlcclxuICAgIC5vbigndG91Y2hlbmQnLCAoKSA9PiB7fSlcclxuICAgIC5vbigndG91Y2hlbmRvdXRzaWRlJywgKCkgPT4ge30pXHJcbiAgICAub24oJ21vdXNlbW92ZScsICgpID0+IHt9KVxyXG4gICAgLm9uKCd0b3VjaG1vdmUnLCAoKSA9PiB7fSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyIChib2FyZENvbnRhaW5lciwgYXBwLCByYXRpb3MpIHtcclxuICBsZXQgcmF0aW8gPSAoMTAwICogYXBwLnJlbmRlcmVyLnZpZXcuaGVpZ2h0KSAvIHJhdGlvcy5IIC8gMTAwXHJcblxyXG4gIGJvYXJkQ29udGFpbmVyLndpZHRoID0gcmF0aW9zLlcgLyAxMDAgKiByYXRpb1xyXG4gIGJvYXJkQ29udGFpbmVyLmhlaWdodCA9IHJhdGlvcy5IIC8gMTAwICogcmF0aW9cclxuXHJcbiAgYm9hcmRDb250YWluZXIucG9zaXRpb24uc2V0KGFwcC5yZW5kZXJlci52aWV3LndpZHRoIC8gMiwgYXBwLnJlbmRlcmVyLnZpZXcuaGVpZ2h0IC8gMilcclxuICBib2FyZENvbnRhaW5lci5zY2FsZS5zZXQocmF0aW8sIHJhdGlvKVxyXG4gIGJvYXJkQ29udGFpbmVyLnBpdm90LnNldChyYXRpb3MuVyAvIDIsIHJhdGlvcy5IIC8gMilcclxufSIsImltcG9ydCAqIGFzIHJhdGlvcyBmcm9tICcuL3JhdGlvcydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuaW1wb3J0IHtcclxuICBQYXduLFxyXG4gIEdhbWVTZWN0aW9uLFxyXG4gIEdhbWVMaW5lLFxyXG4gIEZpbmlzaExpbmUsXHJcbiAgQnJva2VuTGluZVxyXG59IGZyb20gJy4vY2xhc3NlcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWN0aW9ucyAoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbnMgPSBuZXcgQXJyYXkoNCkuZmlsbCgwKVxyXG5cclxuICByZXR1cm4gc2VjdGlvbnMubWFwKChzZWMsIGkpID0+IHtcclxuICAgIHNlYyA9IG5ldyBHYW1lU2VjdGlvbigpXHJcbiAgICBzZWMubmFtZSA9IHR5cGVzLkdBTUVfU0VDVElPTiArICdfJyArIGlcclxuICAgIHNlYy5udW1iZXIgPSBpXHJcbiAgICBcclxuICAgIGlmIChpID09PSAwKSBzZWMucG9zaXRpb24uc2V0KHJhdGlvcy5MRUZUICsgcmF0aW9zLnNlY3Rpb24ud2lkdGggKyByYXRpb3MuTUlERExFLCByYXRpb3MuVE9QKVxyXG4gICAgaWYgKGkgPT09IDEpIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQsIHJhdGlvcy5UT1ApXHJcbiAgICBpZiAoaSA9PT0gMikgc2VjLnBvc2l0aW9uLnNldChyYXRpb3MuTEVGVCwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNlY3Rpb24uaGVpZ2h0KVxyXG4gICAgaWYgKGkgPT09IDMpIHNlYy5wb3NpdGlvbi5zZXQocmF0aW9zLkxFRlQgKyByYXRpb3Muc2VjdGlvbi53aWR0aCArIHJhdGlvcy5NSURETEUsIHJhdGlvcy5IIC0gcmF0aW9zLlRPUCAtIHJhdGlvcy5zZWN0aW9uLmhlaWdodClcclxuXHJcbiAgICByZXR1cm4gc2VjXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVMaW5lcyAoKSB7XHJcbiAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXkoMjQpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIGxpbmVzLm1hcCgobGluZSwgaSwgYXJyKSA9PiB7XHJcbiAgICBsaW5lID0gbmV3IEdhbWVMaW5lKClcclxuICAgIGxpbmUubmFtZSA9IHR5cGVzLkdBTUVfTElORSArICdfJyArIGlcclxuICAgIGxpbmUubnVtYmVyID0gaVxyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhd25zIChwYXduT2JqLCBjb2xvciwgaXNVc2VyID0gZmFsc2UsIGNvdW50ID0gMTUpIHtcclxuICByZXR1cm4gbmV3IEFycmF5KGNvdW50KS5maWxsKDApLm1hcCgoZWxlbSwgaSkgPT4ge1xyXG4gICAgY29uc3Qgc3ByaXRlID0gbmV3IFBhd24ocGF3bk9iaiwgY29sb3IsIGlzVXNlcilcclxuICAgIHNwcml0ZS5uYW1lID0gYCR7Y29sb3J9XyR7dHlwZXMuR0FNRV9QQVdOfV8ke2l9YFxyXG4gICAgc3ByaXRlLm51bWJlciA9IGlcclxuXHJcbiAgICByZXR1cm4gc3ByaXRlXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbmlzaExpbmVzICh1biwgb24pIHtcclxuICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgyKS5maWxsKDApXHJcblxyXG4gIHJldHVybiBsaW5lcy5tYXAoKGxpbmUsIGksIGFycikgPT4ge1xyXG4gICAgbGV0IG51bSA9IGkgPT09IDEgPyBvbiA6IHVuXHJcblxyXG4gICAgbGluZSA9IG5ldyBGaW5pc2hMaW5lKClcclxuICAgIGxpbmUubmFtZSA9IHR5cGVzLkZJTklTSF9MSU5FICsgJ18nICsgbnVtXHJcbiAgICBsaW5lLm51bWJlciA9IG51bVxyXG5cclxuICAgIGlmIChpID09PSAwKSBsaW5lLnBvc2l0aW9uLnNldChyYXRpb3MuVyAtIHJhdGlvcy5zaWRlTGluZS5zaWRlIC0gcmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3Muc2lkZUxpbmUudG9wKVxyXG4gICAgaWYgKGkgPT09IDEpIHtcclxuICAgICAgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLlcgLSByYXRpb3Muc2lkZUxpbmUuc2lkZSAtIHJhdGlvcy5zaWRlTGluZS53aWR0aCwgcmF0aW9zLkggLSByYXRpb3MuVE9QIC0gcmF0aW9zLnNpZGVMaW5lLmhlaWdodClcclxuICAgICAgbGluZS5yb3RhdGlvbiA9IE1hdGguUElcclxuICAgICAgbGluZS5waXZvdC5zZXQocmF0aW9zLnNpZGVMaW5lLndpZHRoLCByYXRpb3Muc2lkZUxpbmUuaGVpZ2h0KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJyb2tlbkxpbmUgKHVuLCBvbikge1xyXG4gIGNvbnN0IGxpbmVzID0gbmV3IEFycmF5KDIpLmZpbGwoMClcclxuXHJcbiAgcmV0dXJuIGxpbmVzLm1hcCgobGluZSwgaSwgYXJyKSA9PiB7XHJcbiAgICBsZXQgbnVtID0gaSA9PT0gMCA/IG9uIDogdW5cclxuXHJcbiAgICBsaW5lID0gbmV3IEJyb2tlbkxpbmUoKVxyXG4gICAgbGluZS5uYW1lID0gdHlwZXMuQlJPS0VOX0xJTkUgKyAnXycgKyBudW1cclxuICAgIGxpbmUubnVtYmVyID0gbnVtXHJcblxyXG4gICAgaWYgKGkgPT09IDApIGxpbmUucG9zaXRpb24uc2V0KHJhdGlvcy5icm9rZW5fbGluZS54LCByYXRpb3MuYnJva2VuX2xpbmUueTApXHJcbiAgICBpZiAoaSA9PT0gMSkgbGluZS5wb3NpdGlvbi5zZXQocmF0aW9zLmJyb2tlbl9saW5lLngsIHJhdGlvcy5icm9rZW5fbGluZS55MSlcclxuXHJcbiAgICByZXR1cm4gbGluZVxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuL2hlbHBlcnMnXHJcbmltcG9ydCB7IEJvYXJkQ29udGFpbmVyIGFzIEJvYXJkQ29udGFpbmVyQ2xhc3MgfSBmcm9tICcuL2NsYXNzZXMnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcblxyXG5sZXQgYm9hcmRDb250YWluZXIsIGJvYXJkLCBzZWN0aW9uQXJyID0gW10sIGxpbmVBcnIgPSBbXSwgdXNlclBhd25BcnIgPSBbXSwgb3Bwb25lbnRQYXduQXJyID0gW10sIHNpZGVMaW5lQXJyID0gW10sIGJyb2tlbkxpbmVBcnIgPSBbXVxyXG5cclxuY29uc3QgdXNlciA9IHtcclxuICBjb2xvcjogJ3doaXRlJyxcclxuICBib2FyZDogW1xyXG4gICAgMiwgMCwgMCwgMCwgMCwgMCxcclxuICAgIDAsIDAsIDAsIDAsIDAsIDUsXHJcbiAgICAwLCAwLCAwLCAwLCAzLCAwLFxyXG4gICAgNSwgMCwgMCwgMCwgMCwgMFxyXG4gIF0sXHJcbiAgbnVtYmVyOiAwXHJcbn1cclxuXHJcbmNvbnN0IG9wcG9uZW50ID0ge1xyXG4gIGNvbG9yOiAnYmxhY2snLFxyXG4gIGJvYXJkOiBbXHJcbiAgICAwLCAwLCAwLCAwLCAwLCA1LFxyXG4gICAgMCwgMSwgMCwgMCwgMCwgMCxcclxuICAgIDUsIDAsIDAsIDAsIDAsIDAsXHJcbiAgICAwLCAwLCAwLCAwLCAwLCAxXHJcbiAgXSxcclxuICBudW1iZXI6IDFcclxufVxyXG5cclxuY29uc3QgYm9hcmRQbmcgPSAnYm9hcmQucG5nJ1xyXG5jb25zdCB1c2VyUGF3blBuZyA9IGAke3VzZXIuY29sb3J9X3Bhd24ucG5nYFxyXG5jb25zdCB1c2VyUGF3blNpZGVQbmcgPSBgJHt1c2VyLmNvbG9yfV9wYXduMi5wbmdgXHJcbmNvbnN0IHVzZXJQYXduU2VsZWN0ZWRQbmcgPSBgJHt1c2VyLmNvbG9yfV9wYXduX3NlbGVjdGVkLnBuZ2BcclxuY29uc3Qgb3Bwb25lbnRQYXduUG5nID0gYCR7b3Bwb25lbnQuY29sb3J9X3Bhd24ucG5nYFxyXG5jb25zdCBvcHBvbmVudFBhd25TaWRlUG5nID0gYCR7b3Bwb25lbnQuY29sb3J9X3Bhd24yLnBuZ2BcclxuY29uc3Qgb3Bwb25lbnRQYXduU2VsZWN0ZWRQbmcgPSBgJHtvcHBvbmVudC5jb2xvcn1fcGF3bl9zZWxlY3RlZC5wbmdgXHJcbmNvbnN0IGxpbmVTZWxlY3RlZFBuZyA9ICdsaW5lX3NlbGVjdGVkLnBuZydcclxuXHJcbmNvbnN0IHVzZXJQYXducyA9IHtcclxuICBzb2xpZDogdXNlclBhd25QbmcsXHJcbiAgc2lkZTogdXNlclBhd25TaWRlUG5nLFxyXG4gIHNlbGVjdGVkOiB1c2VyUGF3blNlbGVjdGVkUG5nXHJcbn1cclxuXHJcbmNvbnN0IG9wcG9uZW50UGF3bnMgPSB7XHJcbiAgc29saWQ6IG9wcG9uZW50UGF3blBuZyxcclxuICBzaWRlOiBvcHBvbmVudFBhd25TaWRlUG5nLFxyXG4gIHNlbGVjdGVkOiBvcHBvbmVudFBhd25TZWxlY3RlZFBuZ1xyXG59XHJcblxyXG5QSVhJLnV0aWxzLnNraXBIZWxsbygpXHJcblxyXG5sZXQgQXBwbGljYXRpb24gPSBQSVhJLkFwcGxpY2F0aW9uLFxyXG4gICAgbG9hZGVyID0gUElYSS5sb2FkZXIsXHJcbiAgICByZXNvdXJjZXMgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXMsXHJcbiAgICBTcHJpdGUgPSBQSVhJLlNwcml0ZVxyXG5cclxubGV0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbihjb25maWcpXHJcbmFwcC5yZW5kZXJlci52aWV3LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXHJcbmFwcC5yZW5kZXJlci52aWV3LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuYXBwLnJlbmRlcmVyLmF1dG9SZXNpemUgPSB0cnVlXHJcblxyXG4vLyBTRVRVUFxyXG5jb25zdCBzZXR1cCA9ICgpID0+IHtcclxuICBib2FyZENvbnRhaW5lciA9IG5ldyBCb2FyZENvbnRhaW5lckNsYXNzKHVzZXIsIG9wcG9uZW50KVxyXG5cclxuICBib2FyZCA9IG5ldyBTcHJpdGUocmVzb3VyY2VzW2JvYXJkUG5nXS50ZXh0dXJlKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKGJvYXJkKVxyXG4gIFxyXG4gIHNlY3Rpb25BcnIgPSBoZWxwZXJzLmNyZWF0ZVNlY3Rpb25zKClcclxuICBib2FyZENvbnRhaW5lci5hZGRDaGlsZCguLi5zZWN0aW9uQXJyKVxyXG5cclxuICBsaW5lQXJyID0gaGVscGVycy5jcmVhdGVHYW1lTGluZXMoKVxyXG4gIHNlY3Rpb25BcnIuZm9yRWFjaCgoc2VjLCBpLCBhcnIpID0+IHtcclxuICAgIGNvbnN0IGNodW5rID0gbGluZUFyci5sZW5ndGggLyBhcnIubGVuZ3RoXHJcbiAgICBzZWMuYWRkQ2hpbGQoXHJcbiAgICAgIC4uLmxpbmVBcnIuc2xpY2UoY2h1bmsgKiBpLCBjaHVuayAqIChpICsgMSkpXHJcbiAgICApXHJcblxyXG4gICAgc2VjLm9yZGVyTGluZXMoKVxyXG4gIH0pXHJcblxyXG4gIHNpZGVMaW5lQXJyID0gaGVscGVycy5jcmVhdGVGaW5pc2hMaW5lcyh1c2VyLm51bWJlciwgb3Bwb25lbnQubnVtYmVyKVxyXG4gIGJvYXJkQ29udGFpbmVyLmFkZENoaWxkKC4uLnNpZGVMaW5lQXJyKVxyXG5cclxuICBicm9rZW5MaW5lQXJyID0gaGVscGVycy5jcmVhdGVCcm9rZW5MaW5lKHVzZXIubnVtYmVyLCBvcHBvbmVudC5udW1iZXIpXHJcbiAgYm9hcmRDb250YWluZXIuYWRkQ2hpbGQoLi4uYnJva2VuTGluZUFycilcclxuXHJcbiAgdXNlclBhd25BcnIgPSBoZWxwZXJzLmNyZWF0ZVBhd25zKHVzZXJQYXducywgdXNlci5jb2xvciwgdHJ1ZSwgMTUpXHJcbiAgb3Bwb25lbnRQYXduQXJyID0gaGVscGVycy5jcmVhdGVQYXducyhvcHBvbmVudFBhd25zLCBvcHBvbmVudC5jb2xvciwgZmFsc2UsIDE1KVxyXG5cclxuICBsaW5lQXJyLnJlZHVjZSgoYWNjLCBjdXIsIGksIGFycikgPT4ge1xyXG4gICAgaWYgKHVzZXIuYm9hcmRbaV0gPiAwKSB7XHJcbiAgICAgIGN1ci5hZGRDaGlsZCguLi51c2VyUGF3bkFyci5zbGljZShhY2MudXNlciwgYWNjLnVzZXIgKyB1c2VyLmJvYXJkW2ldKSlcclxuICAgICAgYWNjLnVzZXIgKz0gdXNlci5ib2FyZFtpXVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHBvbmVudC5ib2FyZFtpXSA+IDApIHtcclxuICAgICAgY3VyLmFkZENoaWxkKC4uLm9wcG9uZW50UGF3bkFyci5zbGljZShhY2Mub3Bwb25lbnQsIGFjYy5vcHBvbmVudCArIG9wcG9uZW50LmJvYXJkW2ldKSlcclxuICAgICAgYWNjLm9wcG9uZW50ICs9IG9wcG9uZW50LmJvYXJkW2ldXHJcbiAgICB9XHJcblxyXG4gICAgY3VyLm9yZGVyUGF3bnMoKVxyXG5cclxuICAgIHJldHVybiBhY2NcclxuICB9LCB7IHVzZXI6IDAsIG9wcG9uZW50OiAwIH0pXHJcblxyXG4gIGJvYXJkQ29udGFpbmVyLmNhbGN1bGF0ZUJvYXJkQ29udGFpbmVyKGFwcClcclxuXHJcbiAgYXBwLnN0YWdlLmFkZENoaWxkKGJvYXJkQ29udGFpbmVyKVxyXG5cclxuICBjb25zdCByZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBhcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICBib2FyZENvbnRhaW5lci5jYWxjdWxhdGVCb2FyZENvbnRhaW5lcihhcHApXHJcbiAgfVxyXG4gIFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgcmVzaXplKVxyXG4gIFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuYXBwZW5kQ2hpbGQoYXBwLnZpZXcpXHJcbiAgXHJcbiAgcmVzaXplKClcclxufVxyXG5cclxuY29uc3QgcGl4aUxvYWRlciA9ICgpID0+IHtcclxuICBsb2FkZXJcclxuICAgIC5hZGQoW1xyXG4gICAgICBib2FyZFBuZywgXHJcbiAgICAgIHVzZXJQYXduUG5nLCBcclxuICAgICAgb3Bwb25lbnRQYXduUG5nLFxyXG4gICAgICB1c2VyUGF3blNpZGVQbmcsXHJcbiAgICAgIG9wcG9uZW50UGF3blNpZGVQbmcsXHJcbiAgICAgIHVzZXJQYXduU2VsZWN0ZWRQbmcsXHJcbiAgICAgIG9wcG9uZW50UGF3blNlbGVjdGVkUG5nLFxyXG4gICAgICBsaW5lU2VsZWN0ZWRQbmdcclxuICAgIF0pXHJcbiAgICAubG9hZChzZXR1cClcclxufVxyXG5cclxucGl4aUxvYWRlcigpXHJcbiIsImV4cG9ydCBjb25zdCBIID0gNzY4XHJcbmV4cG9ydCBjb25zdCBXID0gMTE0N1xyXG5leHBvcnQgY29uc3QgVE9QID0gMjBcclxuZXhwb3J0IGNvbnN0IExFRlQgPSAxMDhcclxuZXhwb3J0IGNvbnN0IE1JRERMRSA9IDgyXHJcbmV4cG9ydCBjb25zdCBQQVdOID0gNzFcclxuZXhwb3J0IGNvbnN0IFNFQ19QRVJDID0gODVcclxuZXhwb3J0IGNvbnN0IENPVU5UX0hFSUdIVCA9IDUwXHJcblxyXG5leHBvcnQgY29uc3QgdG9wSGVpZ2h0UmF0aW8gPSBUT1AgKiAxMDAgLyBIXHJcbmV4cG9ydCBjb25zdCBsZWZ0V2lkdGhSYXRpbyA9IExFRlQgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBtaWRkbGVXaWR0aFJhdGlvID0gTUlERExFICogMTAwIC8gV1xyXG5leHBvcnQgY29uc3QgcGF3bkhlaWdodFJhdGlvID0gUEFXTiAqIDEwMCAvIEhcclxuXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uV2lkdGhSYXRpbyA9ICgoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMikgKiAxMDAgLyBXXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9uSGVpZ2h0UmF0aW8gPSAoKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwKSAqIDEwMCAvIEhcclxuZXhwb3J0IGNvbnN0IGxpbmVXaWR0aFJhdGlvID0gc2VjdGlvbldpZHRoUmF0aW8gLyA2XHJcbmV4cG9ydCBjb25zdCBsaW5lSGVpZ2h0UmF0aW8gPSBzZWN0aW9uSGVpZ2h0UmF0aW9cclxuXHJcbmV4cG9ydCBjb25zdCBsaW5lID0ge1xyXG4gIHdpZHRoOiAoVyAtIChMRUZUICogMikgLSBNSURETEUpIC8gMTIsXHJcbiAgaGVpZ2h0OiAoSCAtIChUT1AgKiAyKSkgLyAyICogU0VDX1BFUkMgLyAxMDBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlY3Rpb24gPSB7XHJcbiAgd2lkdGg6IChXIC0gKExFRlQgKiAyKSAtIE1JRERMRSkgLyAyLFxyXG4gIGhlaWdodDogKEggLSAoVE9QICogMikpIC8gMiAqIFNFQ19QRVJDIC8gMTAwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBib2FyZCA9IHtcclxuICB3aWR0aDogMTE0NyxcclxuICBoZWlnaHQ6IDc2OFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZUxpbmUgPSB7XHJcbiAgd2lkdGg6IDY1LFxyXG4gIGhlaWdodDogMjEwLFxyXG4gIHRvcDogMTMzLFxyXG4gIHNpZGU6IChMRUZUIC0gNjUpIC8gMlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGF3bl9zaWRlID0ge1xyXG4gIHdpZHRoOiA2NSxcclxuICBoZWlnaHQ6IDE0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBicm9rZW5fbGluZSA9IHtcclxuICB3aWR0aDogUEFXTixcclxuICBoZWlnaHQ6IFBBV04gKyBDT1VOVF9IRUlHSFQsXHJcbiAgeDogTEVGVCArIHNlY3Rpb24ud2lkdGggKyAoKE1JRERMRSAtIFBBV04pIC8gMiksXHJcbiAgeTA6IChIIC8gMikgLSAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMiksXHJcbiAgeTE6IChIIC8gMikgKyAoKFBBV04gKyBDT1VOVF9IRUlHSFQpICogMSlcclxufSIsImV4cG9ydCBjb25zdCBCT0FSRF9DT05UQUlORVIgPSAnQk9BUkRfQ09OVEFJTkVSJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9TRUNUSU9OID0gJ0dBTUVfU0VDVElPTidcclxuZXhwb3J0IGNvbnN0IEdBTUVfTElORSA9ICdHQU1FX0xJTkUnXHJcbmV4cG9ydCBjb25zdCBGSU5JU0hfTElORSA9ICdGSU5JU0hfTElORSdcclxuZXhwb3J0IGNvbnN0IEJST0tFTl9MSU5FID0gJ0JST0tFTl9MSU5FJ1xyXG5leHBvcnQgY29uc3QgR0FNRV9QQVdOID0gJ0dBTUVfUEFXTidcclxuZXhwb3J0IGNvbnN0IEhJVF9SRUMgPSAnSElUX1JFQydcclxuZXhwb3J0IGNvbnN0IEJST0tFTl9DT1VOVEVSID0gJ0JST0tFTl9DT1VOVEVSJyIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiXSwic291cmNlUm9vdCI6IiJ9