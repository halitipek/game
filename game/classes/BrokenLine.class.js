import withBase from './withBase'
import * as types from '../types'
import * as ratios from '../ratios'

class BrokenLine extends PIXI.Container {
  constructor(props) {
    super()
    this.xType = types.BROKEN_LINE
    this.width = ratios.broken_line.width
    this.height = ratios.broken_line.height
    this.moves = []

    this.countStyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 42,
      fill: "white",
      stroke: '#000000',
      strokeThickness: 1,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowDistance: -2,
      dropShadowAngle: 30,
      dropShadowAlpha: .6,
    })

    this.highLightStyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 42,
      fill: "#75ba0d",
      stroke: '#000000',
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
    const newCount = this.children.length - 1
    const counter = this.children[0]

    counter.text = newCount
    counter.visible = !!newCount
  }

  orderPawns () {
    const pawns = this.children.slice(1)
    pawns.forEach((pawn, i, arr) => {
      TweenMax.to(pawn.position, .5, { x: 0, y: ratios.COUNT_HEIGHT })
    })

    this.updateCount()
  }

  toggleHighlight (val) {
    this.children[0].style = val
      ? this.highLightStyle
      : this.countStyle
  }

  toggleSelected (val) {
    if (this.children.length > 1) {
      val && this.children[this.children.length - 1].setSelected()
      !val && this.children[this.children.length - 1].setSolid()
    }
  }
}

export default withBase(BrokenLine)
