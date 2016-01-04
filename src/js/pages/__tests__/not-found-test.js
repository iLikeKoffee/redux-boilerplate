jest.dontMock('../main')
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

const Main = require('../not-found')

describe('Counter', () => {
  it('Is rendered correctly', () => {
    const main = TestUtils.renderIntoDocument(<Main />)
    expect(TestUtils.isCompositeComponent(main)).toBe(true)
    const h1 = TestUtils.findRenderedDOMComponentWithTag(main, 'h1')
    expect(TestUtils.isDOMComponent(h1)).toBe(true)
    expect(ReactDOM.findDOMNode(h1).textContent).toBe('Not found')
  })
})
