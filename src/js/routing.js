import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Main from './pages/main'

const config = (
  <Route path='/'>
    <IndexRoute component={Main}/>,
  </Route>)

export default config
