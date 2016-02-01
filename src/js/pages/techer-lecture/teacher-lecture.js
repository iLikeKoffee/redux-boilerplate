import React, {Component} from 'react'
import Lecture from './lecture'
import Course from './course'
import Comments from './comments'

export default class TeacherLecture extends Component {
  render () {
    return (
      <div>
        <div className='shad pt40'>
          <div className='container'>
            <div className='row'>
              <Lecture/>
              <Course/>
            </div>
          </div>
        </div>
        <Comments/>
      </div>
    )
  }
}
