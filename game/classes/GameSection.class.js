import withBase from './withBase'
import * as types from '../types'
import * as ratios from '../ratios'

class GameSection extends PIXI.Container {
  constructor(props) {
    super()
    this.xType = types.GAME_SECTION
    this.width = ratios.section.width
    this.height = ratios.section.height
  }

  orderLines () {
    let children = this.children

    if (this.number > 1) {
      children = children.reverse()
    }

    children.forEach((line, lineIndex, arr) => {
      line.position.set(ratios.line.width * (arr.length - lineIndex - 1), 0)
    })
  }
}

export default withBase(GameSection)
