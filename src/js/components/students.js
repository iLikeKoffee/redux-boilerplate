import React, {Component} from 'react'

const ImgPath = require('../../img/face1.png')

export default class Students extends Component {

  renderStudents (students) {
    const items = students
      .map(c => (
        <div className='col-md-3 item-stud'>
          <div className='ava'><img src={ImgPath}/></div>
          <span className='status f-blue'>{c.status}</span>
          <a href=''>{c.surname}<br/>
            {c.name}</a>
        </div>
      ))
    return (
      <div className='row b20'>
        {items}
      </div>
    )
  }

  render () {
    return (
      <div className='bg-white pt40'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='row b20'>
                <div className='col-md-12'><h2>Студенты курса</h2></div>
              </div>
              {this.renderStudents(this.props.students)}
              </div>
            </div>
          </div>
        </div>

    )
  }
}
