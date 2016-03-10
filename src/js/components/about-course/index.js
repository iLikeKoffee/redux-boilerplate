import React, {Component} from 'react'
import './styles.less'

const fond = require('../../../img/religion.jpg')
const ImgPath = require('../../../img/19.png')

export default class AboutCourse extends Component {

  renderNewsList (newsList) {
    const items = newsList
      .map(c => (
        <div className='list-item number'>
          <div className='bubble'>
            <div className='clearfix'>
              <div className='cover' style={{backgroundImage: `url(${fond})`}}/>
              <div className="data-right">
                <h1 className='title'>{c.title}</h1>
                <p className='text'>{c.text}</p>
              </div>
            </div>
          </div>
          <a href="">
            <div className='teacher'>
              <div className='img-teacher'><img src={ImgPath} width='100'/></div>
              <div className='name-teacher'> {c.surname}<br/> {c.name}</div>
            </div>
          </a>
        </div>
      ))
    return (
      <div>{items}</div>
    )
  }

  render () {
    return (
      <div>
        {this.renderNewsList(this.props.data)}
      </div>
    )
  }
}
