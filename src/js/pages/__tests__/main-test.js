jest.dontMock('../main')
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

const Main = require('../main')

describe('Main', () => {
  it('Is rendered correctly', () => {
    const main = TestUtils.renderIntoDocument(<Main />)
    expect(TestUtils.isCompositeComponent(main)).toBe(true)
    const h1 = TestUtils.findRenderedDOMComponentWithTag(main, 'h1')
    expect(TestUtils.isDOMComponent(h1)).toBe(true)
    expect(ReactDOM.findDOMNode(h1).textContent).toBe('Main page')
  })
})
