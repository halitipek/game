import withBase from './withBase'
import * as types from '../types'
import * as ratios from '../ratios'

class BoardContainer extends PIXI.Container {
  constructor(user, opponent) {
    super()
    this.user = user
    this.opponent = opponent
    this.width = ratios.W
    this.height = ratios.H
    this.xType = types.BOARD_CONTAINER
    this.position.set(0, 0)
  }

  calculateBoardContainer (app) {
    let ratio = (100 * window.innerHeight) / ratios.H / 100

    app.renderer.resize(ratios.W * ratio, ratios.H * ratio)
    
    this.width = ratios.W * ratio
    this.height = ratios.H * ratio
    this.scale.set(ratio, ratio)
  }

  updateBoard () {
    this.children.forEach(child => {
      if (child.xType.includes('LINE')) {
        child.orderPawns && child.orderPawns()
      }
    })
  }
}

export default withBase(BoardContainer)
