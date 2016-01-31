import React, {Component} from 'react'
import Header from './header'
import User from './about-user'
import Teacher from './teacher/teacher'
import TeacherLecture from './techer-lecture/teacher-lecture'
import Student from './student/student'
import Footer from './footer'

const logoPath = require('../../img/logo.png')

export default class Main extends Component {

  render () {
    return (
    <div>
        <div className='wrapper'>
            <Header/>
            <div className='subhead shad'>
                <div className='container'>
                    <div className='row'>
                          <User/>
                        <div className='col-md-4'>
                            <a href='' className='logo'> <img src={logoPath}/> <span>Портал дистанционного образования КГУ</span> </a>
                        </div>
                    </div>
                </div>
            </div>

           <Teacher/>

        </div>
         <Footer/>
    </div>

    )
  }
}
