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
    this.name = types.BOARD_CONTAINER
  }

  calculateBoardContainer (app) {
    let ratio = (100 * window.innerHeight) / ratios.H / 100

    this.width = ratios.W / 100 * ratio
    this.height = ratios.H / 100 * ratio
  
    this.position.set(window.innerWidth / 2, window.innerHeight / 2)
    this.scale.set(ratio, ratio)
    this.pivot.set(ratios.W / 2, ratios.H / 2)
  }
}

export default withBase(BoardContainer)
