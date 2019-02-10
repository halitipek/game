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

  comp.prototype._getSections = function () {
    const boardContainer = this._getBoard()
    return boardContainer.children.filter(child => child && child.xType && child.xType === types.GAME_SECTION)
  }

  comp.prototype._getLines = function () {
    return this._getSections().reduce((acc, cur, i, arr) => {
      const lines = cur.children.filter(child => child && child.xType && child.xType === types.GAME_LINE)

      acc.push(...lines)

      return acc
    }, [])   
  }

  comp.prototype._getFinishLines = function () {
    const boardContainer = this._getBoard()
    return boardContainer.children.filter(child => child && child.xType && child.xType === types.FINISH_LINE)
  }

  comp.prototype._getMyFinishLine = function () {
    const user = this._getUser()
    return this._getFinishLines().find(line => line.number === user.number)
  }

  comp.prototype._getOpponentFinishLine = function () {
    const opp = this._getOpponent()
    return this._getFinishLines().find(line => line.number === opp.number)
  }

  comp.prototype._getBrokenLines = function () {
    const boardContainer = this._getBoard()
    return boardContainer.children.filter(child => child && child.xType && child.xType === types.BROKEN_LINE)
  }

  comp.prototype._getMyBrokenLine = function () {
    const user = this._getUser()
    return this._getBrokenLines().find(line => line.number === user.number)
  }

  comp.prototype._getOpponentBrokenLine = function () {
    const opp = this._getOpponent()
    return this._getBrokenLines().find(line => line.number === opp.number)
  }

  comp.prototype._lockGamePawns = function () {
    const lines = this._getLines()
    lines
      .filter(child => child && child.xType && child.xType === types.GAME_LINE)
      .forEach(line => {
        line.blockLine()
      })
  }

  return comp
}