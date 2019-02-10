import withBase from './withBase'
import * as types from '../types'
import * as ratios from '../ratios'

class FinishLine extends PIXI.Container {
  constructor(props) {
    super()
    this.xType = types.FINISH_LINE
    this.width = ratios.sideLine.width
    this.height = ratios.sideLine.height
    this.toSit = true

    let hitRec = new PIXI.Graphics()
    hitRec.xType = types.HIT_REC
    hitRec.drawRect(0, 0, ratios.sideLine.width, ratios.sideLine.height)
    hitRec.visible = false

    this.addChild(hitRec)
  }

  orderPawns () {
    this.children
      .filter(child => child && child.xType && child.xType !== types.HIT_REC)
      .forEach((pawn, i, arr) => {
        pawn.unSubscribe()
        pawn.position.set(0, ratios.pawn_side.height * i)
      })
  }

  testHit (point) {
    const { width, height } = this.children.find(child => child && child.xType && child.xType === types.HIT_REC)
    
    if (
      point.x >= 0
      && point.x <= width
      && point.y >= 0
      && point.y <= height
    ) {
      return true
    }

    return false
  }
}

export default withBase(FinishLine)
