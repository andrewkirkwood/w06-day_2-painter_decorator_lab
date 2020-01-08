const Paint = function (litres, color) {
  this.color = color
  this.litres = litres
}

Paint.prototype.emptyPaint = function() {
  this.litres = 0
}

module.exports = Paint
