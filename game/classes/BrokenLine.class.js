import withBase from './withBase'
import * as types from '../types'
import * as ratios from '../ratios'

class BrokenLine extends PIXI.Container {
  constructor(props) {
    super()
    this.xType = types.BROKEN_LINE
    this.width = ratios.broken_line.width
    this.height = ratios.broken_line.height
    this.countStyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 42,
      fill: "white",
      stroke: '#ff3300',
      strokeThickness: 1,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowDistance: -2,
      dropShadowAngle: 30,
      dropShadowAlpha: .6,
    })

    let count = new PIXI.Text(0, this.countStyle)
    count.xType = types.BROKEN_COUNTER
    count.height = ratios.COUNT_HEIGHT
    count.pivot.set(count.width / 2, count.height / 2)
    count.position.set(ratios.broken_line.width / 2, 0)
    count.visible = false

    this.addChild(count)
  }

  updateCount () {
    const newCount = this.children.filter(child => child && child.xType && child.xType === types.GAME_PAWN).length
    const countChild = this.children.find(child => child && child.xType && child.xType === types.BROKEN_COUNTER)
    countChild.text = newCount
    countChild.visible = newCount

    if (newCount && this.number === 0) {
      this._lockGamePawns()
    }
  }

  orderPawns () {
    const pawns = this.children.filter(child => child && child.xType && child.xType === types.GAME_PAWN)
    pawns.forEach((pawn, i, arr) => {
      TweenMax.to(pawn.position, .5, { x: 0, y: ratios.COUNT_HEIGHT })
    })

    this.updateCount()
  }
}

export default withBase(BrokenLine)
