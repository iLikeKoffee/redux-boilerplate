import React, {Component} from 'react'
import './styles.less'

const fond = require('../../../img/religion.jpg')
const ImgPath = require('../../../img/19.png')

export default class AboutCourse extends Component {

  renderNewsList(newsList) {
    const items = newsList
      .map (c => (
        <div className='list-item number'>
          <h1 className='bubble'>
            <div>
              <div> {c.title}</div>
              <div className='cover'><img src={fond} width = '200'/></div>
              <a href="">
                <div className='teacher'>
                  <div className='img-teacher'><img src={ImgPath} width='100'/></div>
                  <div className='name-teacher'> {c.surname}<br/> {c.name}</div>
                </div>
              </a>
            </div>
          </h1>
          <p>{c.text}</p>
        </div>
      ))
    return (
      <div>{items}</div>
    )
  }

  render() {
    return (
      <div>
        {this.renderNewsList(this.props.data)}
      </div>
    )
  }
}
