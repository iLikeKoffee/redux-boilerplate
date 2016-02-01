import React, {Component} from 'react'
import Task from './task-list'
import CourseList from './course-list'


const courses = [
  {
    required: true,
    name: 'Экономика',
    description: 'Экономика'
  },
  {
    required: false,
    name: 'Биология',
    description: 'Биология'
  }
]

const articles = [
  {
    name: 'Очень полезная статья',
    description: 'Очень полезная статья'
  }
]


export default class Student extends Component {
  render () {
    return (
      <div className='pt40'>
        <div className='container'>
          <div className='row'>
            <Task/>
            <CourseList courses={courses} articles={articles}/>
          </div>
        </div>
      </div>
    )
  }
}
