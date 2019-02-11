import withBase from './withBase'
import * as functions from '../functions'
import * as types from '../types'

class Pawn extends PIXI.Sprite {
  constructor(pawnObj, color, isUser) {
    super(PIXI.loader.resources[pawnObj.solid].texture)
    
    this.pawnObj = pawnObj
    this.color = color
    this.isUser = isUser
    this.cursor = 'pointer'
    this.xType = types.GAME_PAWN
    this.on('added', functions.onAdded)
    this.on('removed', functions.onRemoved)
  }

  setParentCustom (newParent) {
    if (newParent.toHit) {
      newParent.toHit = false
      newParent.toSit = true
      
      const hittedPawn = newParent.children.find(child => child && child.xType && child.xType === types.GAME_PAWN)
      hittedPawn.goToBrokenLine()
    }

    if (newParent.xType === types.FINISH_LINE) {
      this.setSide()
    }
    newParent.toLocal(new PIXI.Point(0,0), this, this.position)
    newParent.addChild(this)
  }

  setSolid () {
    this.texture = PIXI.loader.resources[this.pawnObj.solid].texture
  }

  setSide () {
    this.texture = PIXI.loader.resources[this.pawnObj.side].texture
  }

  setSelected () {
    this.texture = PIXI.loader.resources[this.pawnObj.selected].texture
  }

  subscribe () {
    functions.subscribe(this)
  }

  unSubscribe () {
    this.interactive = false
  }

  goToBrokenLine () {
    const brokenLines = this._getBrokenLines()
    const user = this._getUser()
    user.color === this.color
      ? this.setParentCustom(brokenLines[1])
      : this.setParentCustom(brokenLines[0])
  }

  goToFinishLine () {
    
  }

  goToLine (lineNumber) {
   this.setParentCustom(this._getOneLine(lineNumber))
  }
}

export default withBase(Pawn)
