import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Main from './pages/main'
import Login from './pages/login'
import NotFound from './pages/not-found'
import Student from './pages/student'

const config = [
  <Route path='/'>
    <IndexRoute component={Main}/>,
    <Route path='student' component={Student}/>
    <Route path='login' component={Login}/>,
    <Route path='*' component={NotFound}/>
  </Route>
]

export default config
