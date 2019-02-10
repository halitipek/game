import withBase from './withBase'
import * as types from '../types'
import * as ratios from '../ratios'

class GameLine extends PIXI.Container {
  constructor(props) {
    super()
    this.xType = types.GAME_LINE
    this.width = ratios.line.width
    this.height = ratios.line.height
    this.blocked = false

    let hitRec = new PIXI.Graphics()
    hitRec.xType = types.HIT_REC
    hitRec.drawRect(0, 0, ratios.line.width, ratios.line.height)
    hitRec.visible = false

    this.addChild(hitRec)
  }

  orderPawns (args = {}) {
    const pawnArr = this.children.filter(child => child.name && child.xType === types.GAME_PAWN)
    const { fake, reverse = this.parent.number > 1 } = args
    const length = fake ? pawnArr.length + 1 : pawnArr.length

    let row = ratios.line.height / length

    if (row < ratios.PAWN) {
      row = row - ((ratios.PAWN - row) / length)
    } else {
      row = ratios.PAWN
    }

    pawnArr.forEach((pawn, i, arr) => {
      pawn.unSubscribe()
      reverse
          ? TweenMax.to(pawn.position, .5, { x: 0, y: ratios.line.height - (row * i) - ratios.PAWN })
          : TweenMax.to(pawn.position, .5, { x: 0, y: row * i })

      if (i + 1 === arr.length && pawn.isUser && !this.blocked) {
        pawn.subscribe()
      }
    })

    this.toSit = true

    if (pawnArr.length === 1 && !pawnArr[0].isUser) {
      this.toHit = true
    }

    if (pawnArr.length > 1 && !pawnArr[0].isUser) {
      this.toSit = false
      this.toHit = false
    }
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

  blockLine () {
    this.blocked = true
    this.orderPawns()
  }
}

export default withBase(GameLine)
