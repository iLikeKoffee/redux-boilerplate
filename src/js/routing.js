import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Main from './pages/main'
import store from './store'
import {syncHistoryWithStore} from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store)

export default (
  <Router history={history}>
    <Route path='/'>
      <IndexRoute component={Main}/>,
    </Route>
  </Router>
)
