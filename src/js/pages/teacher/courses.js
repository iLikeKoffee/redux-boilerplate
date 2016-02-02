import React, {Component} from 'react'

export default class Courses extends Component {

  renderCourses (courses) {
    const items = courses
      .map(c => (
        <div className='list-item'><a href='' className='f-blue'>{c.name}</a></div>
      ))
    return (
      <div>
        {items}
      </div>
    )
  }

  render () {
    return (
      <div className='col-md-4 b30'>
        <div className='right'>
          <h2 className='b30'>Курсы</h2>
          {this.renderCourses(this.props.courses)}
          <div className='b40'></div>
          <a href='' className='btn bg-aqua btn-add'>Добавить курс</a>
        </div>
      </div>
    )
  }
}
