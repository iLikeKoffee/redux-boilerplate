jest.dontMock('../main')
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import Main from '../main'

describe('Main', () => {
  it('Is rendered correctly', () => {
    const main = TestUtils.renderIntoDocument(<Main />)
    expect(TestUtils.isCompositeComponent(main)).toBe(true)
  })
})
