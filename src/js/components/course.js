import React, {Component} from 'react'

export default class Course extends Component {

  renderNameLectures (nameLectures) {
    const items = nameLectures
      .map(c => (
        <div className='list-item'><a href='' className='f-blue lnk-list'>{c.name}</a></div>
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
        <div className='hide-on-small right '>
          <h2 className='b30'>Курс</h2>
          <h3 className='bubble'>{this.props.nameCourse}</h3>
          {this.renderNameLectures(this.props.nameLectures)}
          <div className='b40'></div>
          <a href='' className=' btn bg-orange'>
            <div className='glyphicon glyphicon-cog btn-sign-margin '></div>
            Редактировать лекцию</a>
        </div>
      </div>
    )
  }
}
