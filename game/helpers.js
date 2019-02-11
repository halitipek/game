import * as ratios from './ratios'
import {
  Pawn,
  GameLine,
  FinishLine,
  BrokenLine
} from './classes'

export function createPawns (pawnObj, color, isUser = false, count = 15) {
  return new Array(count).fill(0).map((elem, i) => {
    const sprite = new Pawn(pawnObj, color, isUser)

    return sprite
  })
}


export function createGameLines (user) {
  const lines = new Array(24).fill(0)

  return lines.map((line, i, arr) => {
    let number = user.color === 'white' ? i : arr.length - i - 1
    line = new GameLine()
    line.number = number

    let factor = i % 6

    if (i < 6) line.position.set(ratios.LEFT + (ratios.section.width * 2) + ratios.MIDDLE - (ratios.line.width * (factor + 1)), ratios.TOP)
    else if (i < 12) line.position.set(ratios.LEFT + ratios.section.width - (ratios.line.width * (factor + 1)), ratios.TOP)

    else if (i < 18) line.position.set(ratios.LEFT + (ratios.line.width * factor), ratios.H - ratios.TOP - ratios.section.height)
    else if (i < 24) line.position.set(ratios.LEFT + ratios.section.width + ratios.MIDDLE + (ratios.line.width * factor), ratios.H - ratios.TOP - ratios.section.height)

    return line
  })
}

export function createBrokenLine (user) {
  const lines = new Array(2).fill(0)

  return lines.map((line, i, arr) => {
    line = new BrokenLine()
    line.number = 24 + i

    if (i === 0) {
      line.color = user.color === 'white' ? 'white' : 'black'
    } else {
      line.color = user.color === 'white' ? 'black' : 'white'
    }

    line.isUser = !i

    if (i === 0) line.position.set(ratios.broken_line.x, ratios.broken_line.y_user)
    if (i === 1) line.position.set(ratios.broken_line.x, ratios.broken_line.y_opp)

    return line
  })
}

export function createFinishLines (user) {
  const lines = new Array(2).fill(0)

  return lines.map((line, i, arr) => {
    line = new FinishLine()
    line.number = 26 + i

    if (i === 0) {
      line.color = user.color === 'white' ? 'white' : 'black'
    } else {
      line.color = user.color === 'white' ? 'black' : 'white'
    }

    line.isUser = !i

    if (i === 0) line.position.set(ratios.W - ratios.sideLine.side - ratios.sideLine.width, ratios.H - ratios.TOP - ratios.sideLine.height)
    if (i === 1) line.position.set(ratios.W - ratios.sideLine.side - ratios.sideLine.width, ratios.sideLine.top)

    return line
  })
}
