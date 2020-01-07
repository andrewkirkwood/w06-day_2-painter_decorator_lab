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
  it('can empty paint', function() {
    paint.emptyPaint()
    const actual = paint.litres
    assert.strictEqual(actual, 0)
  })
})

describe('Decorator', function() {
  it('has empty paint stock', function () {
    const actual = decorator.paintStock
    assert.deepStrictEqual(actual, [])
  })
  it('can add can of paint to paint stock', function() {
    decorator.addPaintToStock(paint)
    const actual = decorator.paintStock.length
    assert.strictEqual(actual, 1)
  })
})

})
