import React, {Component} from 'react'
import Header from '../components/header'
import Teacher from './teacher/teacher'
import TeacherLecture from './techer-lecture/teacher-lecture'
import Student from './student/index'
import Footer from '../components/footer'
import Logo from '../components/ksu-logo'


export default class Main extends Component {

  render () {
    return (
      <div>
        <div className='wrapper'>
          <Header/>
          <Logo />

          <Student/>

        </div>
        <Footer/>
      </div>

    )
  }
}
