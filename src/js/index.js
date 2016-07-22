import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import store from './store'
import '../css/index.less'
import DevTools from './utils/dev-tools'

ReactDOM.render(<App store={store}/>, document.getElementById('main'))

if (__DEBUG__) {
  const devToolsContainer = document.createElement('div')
  document.body.appendChild(devToolsContainer)
  ReactDOM.render(<DevTools store={store}/>, devToolsContainer)
}
