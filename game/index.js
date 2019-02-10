import * as helpers from './helpers'
import { BoardContainer as BoardContainerClass } from './classes'
import scaleToWindow from './scaleToWindow'

let boardContainer, board, sectionArr = [], lineArr = [], userPawnArr = [], opponentPawnArr = [], sideLineArr = [], brokenLineArr = []

const user = {
  color: 'white',
  board: [
    2, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 5,
    0, 0, 0, 0, 3, 0,
    5, 0, 0, 0, 0, 0
  ],
  number: 0
}

const opponent = {
  color: 'black',
  board: [
    0, 0, 0, 0, 0, 5,
    0, 1, 0, 0, 0, 0,
    5, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1
  ],
  number: 1
}

const boardPng = 'board.png'
const userPawnPng = `${user.color}_pawn.png`
const userPawnSidePng = `${user.color}_pawn2.png`
const userPawnSelectedPng = `${user.color}_pawn_selected.png`
const opponentPawnPng = `${opponent.color}_pawn.png`
const opponentPawnSidePng = `${opponent.color}_pawn2.png`
const opponentPawnSelectedPng = `${opponent.color}_pawn_selected.png`
const lineSelectedPng = 'line_selected.png'

const userPawns = {
  solid: userPawnPng,
  side: userPawnSidePng,
  selected: userPawnSelectedPng
}

const opponentPawns = {
  solid: opponentPawnPng,
  side: opponentPawnSidePng,
  selected: opponentPawnSelectedPng
}

PIXI.utils.skipHello()

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite

const config = {
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  transparent: false,
  resolution: devicePixelRatio
}

let app = new Application(config)
app.renderer.view.style.position = "absolute"
app.renderer.view.style.display = "block"
//app.renderer.autoResize = true

// SETUP
const setup = () => {
  boardContainer = new BoardContainerClass(user, opponent)

  board = new Sprite(resources[boardPng].texture)
  boardContainer.addChild(board)
  
  sectionArr = helpers.createSections()
  boardContainer.addChild(...sectionArr)

  lineArr = helpers.createGameLines()
  sectionArr.forEach((sec, i, arr) => {
    const chunk = lineArr.length / arr.length
    sec.addChild(
      ...lineArr.slice(chunk * i, chunk * (i + 1))
    )

    sec.orderLines()
  })

  sideLineArr = helpers.createFinishLines(user.number, opponent.number)
  boardContainer.addChild(...sideLineArr)

  brokenLineArr = helpers.createBrokenLine(user.number, opponent.number)
  boardContainer.addChild(...brokenLineArr)

  userPawnArr = helpers.createPawns(userPawns, user.color, true, 15)
  opponentPawnArr = helpers.createPawns(opponentPawns, opponent.color, false, 15)

  lineArr.reduce((acc, cur, i, arr) => {
    if (user.board[i] > 0) {
      cur.addChild(...userPawnArr.slice(acc.user, acc.user + user.board[i]))
      acc.user += user.board[i]
    }

    if (opponent.board[i] > 0) {
      cur.addChild(...opponentPawnArr.slice(acc.opponent, acc.opponent + opponent.board[i]))
      acc.opponent += opponent.board[i]
    }

    cur.orderPawns()

    return acc
  }, { user: 0, opponent: 0 })

  boardContainer.calculateBoardContainer(app)

  app.stage.addChild(boardContainer)

  const resize = () => {
    // app.renderer.resize(window.innerWidth, window.innerHeight)
    boardContainer.calculateBoardContainer(app)
  }
  
  window.addEventListener('resize', resize)
  
  document.getElementById('game').appendChild(app.view)
  
  resize()
}

const pixiLoader = () => {
  loader
    .add([
      boardPng, 
      userPawnPng, 
      opponentPawnPng,
      userPawnSidePng,
      opponentPawnSidePng,
      userPawnSelectedPng,
      opponentPawnSelectedPng,
      lineSelectedPng
    ])
    .load(setup)
}

pixiLoader()
