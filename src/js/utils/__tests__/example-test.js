jest.dontMock('../example')
const {increment, decrement} = require('../example')

describe('example', () => {
  it('Increments and decrements numbers', () => {
    expect(increment(2)).toBe(3)
    expect(decrement(2)).toBe(1)
  })
})
