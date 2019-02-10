import withBase from './withBase'
import * as functions from '../functions'
import * as types from '../types'

class Pawn extends PIXI.Sprite {
  constructor(pawnObj, color, isUser) {
    super(PIXI.loader.resources[pawnObj.solid].texture)

    this.solidTexture = PIXI.loader.resources[pawnObj.solid].texture
    this.sideTexture = PIXI.loader.resources[pawnObj.side].texture
    this.selectedTexture = PIXI.loader.resources[pawnObj.selected].texture
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

    const newPosition = newParent.toLocal(this.getGlobalPosition())
    this.position.x = newPosition.x
    this.position.y = newPosition.y
    this.setParent(newParent)
  }

  setSolid () {
    this.texture = this.solidTexture
  }

  setSide () {
    this.texture = this.sideTexture
  }

  setSelected () {
    this.texture = this.selectedTexture
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
}

export default withBase(Pawn)
