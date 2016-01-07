import React from 'react'
import {Route} from 'react-router'
import Main from './pages/main'
import Login from './pages/login'
import NotFound from './pages/not-found'

const config = [
  <Route path='/' component={Main}/>,
  <Route path='login' component={Login}/>,
  <Route path='*' component={NotFound}/>
]

export default config
