import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './pages/main';
import NotFound from './pages/not-found';

const config = (
  <Route path='/'>
    <IndexRoute component={Main}/>,
    <Route path='*' component={NotFound}/>
  </Route>
)

export default config
