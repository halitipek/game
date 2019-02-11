import * as helpers from './helpers'
import { BoardContainer as BoardContainerClass } from './classes'
import config from './config'
import * as img from './image_constants'

let boardContainer, lineArr = [], whitePawnArr = [], blackPawnArr = [], finishLineArr = [], brokenLineArr = []

/* APP START */
PIXI.utils.skipHello()

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite

let app = new Application(config)
app.renderer.view.style.position = "absolute"
app.renderer.view.style.display = "block"
app.renderer.autoResize = true
/* APP END */

const user = {
  color: 'white',
}

const opponent = {
  color: 'black',
}

const game = {
  board: [
    [2, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 5],
    [0, 0], [0, 3], [0, 0], [0, 0], [0, 0], [5, 0],
    [0, 5], [0, 0], [0, 0], [0, 0], [3, 0], [0, 0],
    [5, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 2]
  ],
  broken: {
    white: 0,
    black: 0
  },
  finish: {
    white: 0,
    black: 0
  },
  canDouble: false
}

// SETUP
const setup = () => {
  boardContainer = new BoardContainerClass(user, opponent)

  let board = new Sprite(resources[img.boardPng].texture)
  boardContainer.addChild(board)

  lineArr = helpers.createGameLines(user)
  boardContainer.addChild(...lineArr)

  finishLineArr = helpers.createFinishLines(user)
  boardContainer.addChild(...finishLineArr)

  brokenLineArr = helpers.createBrokenLine(user)
  boardContainer.addChild(...brokenLineArr)

  whitePawnArr = helpers.createPawns(img.whitePawnObj, 'white', user.color === 'white')
  blackPawnArr = helpers.createPawns(img.blackPawnObj, 'black', user.color === 'black')

  game.board.forEach((pair, i) => {
    if (pair[0] || pair[1]) {
      let toAdd = pair[0]
        ? whitePawnArr.splice(0, pair[0])
        : blackPawnArr.splice(0, pair[1])

      lineArr
        .find(line => line.number === i)
        .addChild(...toAdd)
    }
  })

  game.broken.white && brokenLineArr.find(line => line.color === 'white').addChild(...whitePawnArr.splice(0, game.broken.white))
  game.broken.black && brokenLineArr.find(line => line.color === 'black').addChild(...blackPawnArr.splice(0, game.broken.black))

  game.finish.white && finishLineArr.find(line => line.color === 'white').addChild(...whitePawnArr.splice(0, game.finish.white))
  game.finish.black && finishLineArr.find(line => line.color === 'black').addChild(...blackPawnArr.splice(0, game.finish.black))

  boardContainer.calculateBoardContainer(app)

  app.stage.addChild(boardContainer)

  const resize = () => boardContainer.calculateBoardContainer(app)
  window.addEventListener('resize', resize)
  window.addEventListener('orientationchange', resize)
  
  document.getElementById('game').appendChild(app.view)

  resize()
}

const pixiLoader = () => {
  loader
    .add([
      img.boardPng,
      img.whitePawnPng,
      img.whitePawnSidePng,
      img.whitePawnSelectedPng,
      img.blackPawnPng,
      img.blackPawnSidePng,
      img.blackPawnSelectedPng,
      img.lineSelectedPng
    ])
    .load(setup)
}

pixiLoader()
