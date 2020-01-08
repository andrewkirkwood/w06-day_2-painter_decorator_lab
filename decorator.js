const Decorator = function (name) {
  this.name = name
  this.paintStock = []
}

Decorator.prototype.addPaintToStock = function (paint) {
  this.paintStock.push(paint)
}

Decorator.prototype.calculateStockTotal = function () {
  total = 0
  for (let paintcan of this.paintStock) {
    total += paintcan.litres
  }
  return total
}

Decorator.prototype.enoughPaint = function (room) {
  if (this.calculateStockTotal() >= room.area ) {
    return true
  }
  else {
    return false
  }
}

Decorator.prototype.paintRoom = function (room) {
  if (this.enoughPaint(room) === true) {
    for (let paintcan of this.paintStock) {
      if (room.color === paintcan.color ) {
        paintcan.litres -= room.area
      }
    }
  }
  return this.calculateStockTotal()
}






module.exports = Decorator
