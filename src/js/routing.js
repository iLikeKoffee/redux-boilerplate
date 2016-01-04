import React from 'react'
import {Route} from 'react-router'
import Main from './pages/main'
import NotFound from './pages/not-found'

const config = [
  <Route path='/' component={Main}/>,
  <Route path='*' component={NotFound}/>
]

export default config
