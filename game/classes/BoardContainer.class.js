import withBase from './withBase'
import * as types from '../types'
import * as ratios from '../ratios'
import isMobile from '../isMobile'

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
    let width = window.innerWidth, height = window.innerHeight

    if (isMobile()) {
      width = screen.availWidth
      height = screen.availHeight
    }
    
    app.renderer.resize(width, height)
    let ratio = (100 * height) / ratios.H / 100 / devicePixelRatio
    
    this.width = ratios.W / 100 * ratio
    this.height = ratios.H / 100 * ratio
  
    this.position.set(0, 0)
    this.scale.set(ratio, ratio)
    //this.pivot.set(ratios.W / 2, ratios.H / 2)
  }
}

export default withBase(BoardContainer)
