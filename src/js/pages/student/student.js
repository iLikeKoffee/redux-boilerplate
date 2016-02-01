import React, {Component} from 'react'
import Task from './task-list'
import Course from './course'

export default class Teacher extends Component {
  render() {
    return (
      <div className='pt40'>
        <div className='container'>
          <div className='row'>
            <Task/>
            <Course/>
          </div>
        </div>
      </div>
    )
  }
}
