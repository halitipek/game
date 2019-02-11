import withBase from './withBase'
import * as types from '../types'
import * as ratios from '../ratios'
import { lineSelectedPng } from '../image_constants'

class GameLine extends PIXI.Container {
  constructor(props) {
    super()
    this.xType = types.GAME_LINE
    this.width = ratios.line.width
    this.height = ratios.line.height
    this.interactive = true
    this.cursor = 'pointer'
    this.moves = []

    let highlight = new PIXI.Sprite(PIXI.loader.resources[lineSelectedPng].texture)
    highlight.xType = types.LINE_HIGHLIGHT
    
    highlight.position.set(ratios.line.width / 2, 0)
    highlight.pivot.set(highlight.width / 2, 0)
    highlight.visible = false
    
    this.addChild(highlight)
  }

  orderPawns () {
    const pawnArr = this.children.slice(1)
    const reverse = this.number >= 12
    let row = ratios.line.height / pawnArr.length

    if (row < ratios.PAWN) {
      row = row - ((ratios.PAWN - row) / pawnArr.length)
    } else {
      row = ratios.PAWN
    }

    pawnArr.forEach((pawn, i, arr) => {
      reverse
        ? TweenMax.to(pawn.position, .5, { x: 0, y: ratios.line.height - (row * i) - ratios.PAWN })
        : TweenMax.to(pawn.position, .5, { x: 0, y: row * i })
    })
  }

  toggleHighlight (val) {
    this.children[0].visible = val
  }

  toggleSelected (val) {
    if (this.children.length > 1) {
      val && this.children[this.children.length - 1].setSelected()
      !val && this.children[this.children.length - 1].setSolid()
    }
  }
}

export default withBase(GameLine)
