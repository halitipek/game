import * as ratios from './ratios'
import * as types from './types'
import {
  Pawn,
  GameSection,
  GameLine,
  FinishLine,
  BrokenLine
} from './classes'

export function createSections () {
  const sections = new Array(4).fill(0)

  return sections.map((sec, i) => {
    sec = new GameSection()
    sec.name = types.GAME_SECTION + '_' + i
    sec.number = i
    
    if (i === 0) sec.position.set(ratios.LEFT + ratios.section.width + ratios.MIDDLE, ratios.TOP)
    if (i === 1) sec.position.set(ratios.LEFT, ratios.TOP)
    if (i === 2) sec.position.set(ratios.LEFT, ratios.H - ratios.TOP - ratios.section.height)
    if (i === 3) sec.position.set(ratios.LEFT + ratios.section.width + ratios.MIDDLE, ratios.H - ratios.TOP - ratios.section.height)

    return sec
  })
}

export function createGameLines () {
  const lines = new Array(24).fill(0)

  return lines.map((line, i, arr) => {
    line = new GameLine()
    line.name = types.GAME_LINE + '_' + i
    line.number = i

    return line
  })
}

export function createPawns (pawnObj, color, isUser = false, count = 15) {
  return new Array(count).fill(0).map((elem, i) => {
    const sprite = new Pawn(pawnObj, color, isUser)
    sprite.name = `${color}_${types.GAME_PAWN}_${i}`
    sprite.number = i

    return sprite
  })
}

export function createFinishLines (un, on) {
  const lines = new Array(2).fill(0)

  return lines.map((line, i, arr) => {
    let num = i === 1 ? on : un

    line = new FinishLine()
    line.name = types.FINISH_LINE + '_' + num
    line.number = num

    if (i === 0) line.position.set(ratios.W - ratios.sideLine.side - ratios.sideLine.width, ratios.sideLine.top)
    if (i === 1) {
      line.position.set(ratios.W - ratios.sideLine.side - ratios.sideLine.width, ratios.H - ratios.TOP - ratios.sideLine.height)
      line.rotation = Math.PI
      line.pivot.set(ratios.sideLine.width, ratios.sideLine.height)
    }

    return line
  })
}

export function createBrokenLine (un, on) {
  const lines = new Array(2).fill(0)

  return lines.map((line, i, arr) => {
    let num = i === 0 ? on : un

    line = new BrokenLine()
    line.name = types.BROKEN_LINE + '_' + num
    line.number = num

    if (i === 0) line.position.set(ratios.broken_line.x, ratios.broken_line.y0)
    if (i === 1) line.position.set(ratios.broken_line.x, ratios.broken_line.y1)

    return line
  })
}
