import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Main from './pages/main'
import Login from './pages/login'
import NotFound from './pages/not-found'
import Student from './pages/student'
import Teacher from './pages/teacher'
import TeacherLecture from './pages/techer-lecture'
import News from './pages/news'
import SandBox from './components/sandbox'
import Profile from './pages/profile'
import ListCourses from './pages/list-courses'

const config = [
  <Route path='/'>
    <IndexRoute component={Main}/>,
    <Route path='student' component={Student}/>
    <Route path='teacher' component={Teacher}/>
    <Route path='teacher-lecture' component={TeacherLecture}/>
    <Route path='sandbox' component={SandBox}/>
    <Route path='news' component={News}/>
    <Route path='profile' component={Profile}/>
    <Route path='list-courses' component={ListCourses}/>
    <Route path='login' component={Login}/>,
    <Route path='*' component={NotFound}/>
  </Route>
]

export default config
