const assert = require('assert')
const Decorator = require('../decorator.js')
const Room = require('../room.js')
const Paint = require('../paint.js')

describe('Painter Decorator', function(){

  let room
  let paint
  let decorator

  beforeEach(function() {
    room = new Room(3)
    paint = new Paint(10)
    decorator = new Decorator('Jim')
  })
  describe('Room', function() {
  it('should have an area', function(){
    const actual = room.area
    assert.strictEqual(actual, 3)
  })
  it('should start not painted', function (){
    const actual = room.painted
    assert.strictEqual(actual, 0)
  })
  it('should be able to be painted', function() {
    room.paintRoom();
    const actual = room.painted
    assert.strictEqual(actual, 1)
  })
})
describe('Paint', function() {
  it('should have litres of paint', function() {
    const actual = paint.litres
    assert.strictEqual(actual, 10)
  })
})

})
