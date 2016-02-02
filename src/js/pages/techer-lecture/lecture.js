import React, {Component} from 'react'

const logoPath1 = require('../../../img/l1.jpg')
const logoPath2 = require('../../../img/l2.jpg')
const logoPath3 = require('../../../img/l3.jpg')

export default class Lecture extends Component {

  renderImages(images){
    const items = images
      .map(c => (
        <div>
          <img src={logoPath1}/>
          <h3 className='f-blue'>{c.name}</h3>
          <p className='f-blue b30'>{c.info}</p>
        </div>
      ))

    return(
      <div>{items}</div>
    )
  }

  renderLectureText(lecture){
    const items = lecture
      .map(c => (
        <div>
            <h3>{c.subtitle}</h3>
            <p>{c.text}</p>
        </div>
      ))

    return(
      <div>{items}</div>
    )
  }





  render () {
    return (
      <div className='col-md-8 b30'>
        <h1 className='bubble'>{this.props.title}</h1>

        <div className='text f-gray'>
          {this.renderLectureText(this.props.lecture)}
          {this.renderImages(this.props.images)}

        </div>
      </div>
    )
  }
}
