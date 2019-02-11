import * as types from '../types'

export default (comp) => {
  comp.prototype._getBoard = function (obj = this) {
    if (obj.xType === types.BOARD_CONTAINER) {
      return obj
    }
  
    if (!obj.parent) {
      return obj.children[0]
    }
  
    return this._getBoard(obj.parent)
  }

  comp.prototype._getUser = function () {
    return this._getBoard().user
  }

  comp.prototype._getOpponent = function () {
    return this._getBoard().opponent
  }

  comp.prototype._getGameLines = function () {
    return this._getBoard().filter(child => child && child.xType && child.xType === types.GAME_LINE)
  }

  comp.prototype._getGameLineByNumber = function (lineNumber) {
    return this._getBoard().children.find(child => child && child.xType && child.xType === types.GAME_LINE && child.number === lineNumber)
  }

  comp.prototype._getFinishLines = function () {
    return this._getBoard().children.filter(child => child && child.xType && child.xType === types.FINISH_LINE)
  }

  comp.prototype._getMyFinishLine = function () {
    return this._getFinishLines()[0]
  }

  comp.prototype._getOpponentFinishLine = function () {
    return this._getFinishLines()[1]
  }

  comp.prototype._getBrokenLines = function () {
    return this._getBoard().children.filter(child => child && child.xType && child.xType === types.BROKEN_LINE)
  }

  comp.prototype._getMyBrokenLine = function () {
    return this._getBrokenLines()[0]
  }

  comp.prototype._getOpponentBrokenLine = function () {
    return this._getBrokenLines()[1]
  }

  return comp
}