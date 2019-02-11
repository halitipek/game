export const H = 768
export const W = 1147
export const TOP = 20
export const LEFT = 108
export const MIDDLE = 82
export const PAWN = 71
export const SEC_PERC = 85
export const COUNT_HEIGHT = 50

export const topHeightRatio = TOP * 100 / H
export const leftWidthRatio = LEFT * 100 / W
export const middleWidthRatio = MIDDLE * 100 / W
export const pawnHeightRatio = PAWN * 100 / H

export const sectionWidthRatio = ((W - (LEFT * 2) - MIDDLE) / 2) * 100 / W
export const sectionHeightRatio = ((H - (TOP * 2)) / 2 * SEC_PERC / 100) * 100 / H
export const lineWidthRatio = sectionWidthRatio / 6
export const lineHeightRatio = sectionHeightRatio

export const line = {
  width: (W - (LEFT * 2) - MIDDLE) / 12,
  height: (H - (TOP * 2)) / 2 * SEC_PERC / 100
}

export const section = {
  width: (W - (LEFT * 2) - MIDDLE) / 2,
  height: (H - (TOP * 2)) / 2 * SEC_PERC / 100
}

export const board = {
  width: 1147,
  height: 768
}

export const sideLine = {
  width: 65,
  height: 210,
  top: 133,
  side: (LEFT - 65) / 2
}

export const pawn_side = {
  width: 65,
  height: 14
}

export const broken_line = {
  width: PAWN,
  height: PAWN + COUNT_HEIGHT,
  x: LEFT + section.width + ((MIDDLE - PAWN) / 2),
  y_opp: (H / 2) - ((PAWN + COUNT_HEIGHT) * 2),
  y_user: (H / 2) + ((PAWN + COUNT_HEIGHT) * 1)
}