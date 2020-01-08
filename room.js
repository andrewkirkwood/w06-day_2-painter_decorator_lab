const Room = function (area, color) {
  this.area = area
  this.painted = 0
  this.color = color
}

Room.prototype.paintRoom = function () {
  this.painted += 1
}

module.exports = Room
