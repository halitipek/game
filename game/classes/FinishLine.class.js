import withBase from './withBase'
import * as types from '../types'
import * as ratios from '../ratios'

class FinishLine extends PIXI.Container {
  constructor() {
    super()
    this.xType = types.FINISH_LINE
    this.width = ratios.sideLine.width
    this.height = ratios.sideLine.height
  }

  orderPawns () {
    this.children.forEach((pawn, i, arr) => {
      pawn.position.set(0, ratios.pawn_side.height * i)
    })
  }
}

export default withBase(FinishLine)
