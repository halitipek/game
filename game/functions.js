
export function onDragStart(event) {
  if (!this.dragging) {
    this.startPoint = { ...event.data.global }
    this.homeParent = this.parent
    this.previousParent = this.parent
    this.dragging = true
    this.dragPoint = this.getGlobalPosition()
    const boardContainer = this._getBoard()
    this.setParentCustom(boardContainer)
    this.setSelected()
  }
}

export function onDragMove(e) {
  if (this.dragging) {
    const boardContainer = this._getBoard()
    
    this.globalPoint = { x: this.dragPoint.x - (this.startPoint.x - e.data.global.x), y: this.dragPoint.y - (this.startPoint.y - e.data.global.y) }

    const newPosition = this.parent.toLocal(this.globalPoint)
    this.position.x = newPosition.x
    this.position.y = newPosition.y

    newPosition.x += this.width / 2
    newPosition.y += this.height / 2

    const newParent = this._getLines().find(line => {
      let center = line.toLocal(this.globalPoint)
      center.x += this.width / 2
      center.y += this.height / 2

      return line.testHit(center)
    }) || boardContainer

    if (newParent.name !== this.previousParent.name) {
      this.previousParent.orderPawns && this.previousParent.orderPawns()

      if (newParent.orderPawns && (newParent.toHit || newParent.toSit)) {
        newParent.orderPawns({ fake: true })
        this.previousParent = newParent
      }      
    }
  }
}

export function onDragEnd() {
  if (this.dragging) {
    this.dragging = false
    
    let lines = this._getLines()
    lines.push(this._getMyFinishLine())

    const newParent = lines.find(line => {
      console.log(line)
      let center = line.toLocal(this.getGlobalPosition())
      center.x += this.width / 2
      center.y += this.height / 2

      return line.testHit(center) && (line.toHit || line.toSit)
    }) || this.homeParent

    this.setSolid()
    this.setParentCustom(newParent)
  }
}

export function onAdded (container) {
  container.orderPawns && container.orderPawns()
}

export function onRemoved (container) {
  container.orderPawns && container.orderPawns()
}

export function subscribe (obj) {
  obj.interactive = true
  obj.on('mousedown', onDragStart)
    .on('touchstart', onDragStart)
    .on('mouseup', onDragEnd)
    .on('mouseupoutside', onDragEnd)
    .on('touchend', onDragEnd)
    .on('touchendoutside', onDragEnd)
    .on('mousemove', onDragMove)
    .on('touchmove', onDragMove)
}

export function unSubscribe (obj) {
  obj.interactive = true
  obj.on('mousedown', () => {})
    .on('touchstart', () => {})
    .on('mouseup', () => {})
    .on('mouseupoutside', () => {})
    .on('touchend', () => {})
    .on('touchendoutside', () => {})
    .on('mousemove', () => {})
    .on('touchmove', () => {})
}

export function calculateBoardContainer (boardContainer, app, ratios) {
  let ratio = (100 * app.renderer.view.height) / ratios.H / 100

  boardContainer.width = ratios.W / 100 * ratio
  boardContainer.height = ratios.H / 100 * ratio

  boardContainer.position.set(app.renderer.view.width / 2, app.renderer.view.height / 2)
  boardContainer.scale.set(ratio, ratio)
  boardContainer.pivot.set(ratios.W / 2, ratios.H / 2)
}