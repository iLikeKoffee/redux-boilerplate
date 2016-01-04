jest.dontMock('../example')
import {increment, decrement} from '../example'

describe('example', () => {
  it('Increments and decrements numbers', () => {
    expect(increment(2)).toBe(3)
    expect(decrement(2)).toBe(1)
  })
})
