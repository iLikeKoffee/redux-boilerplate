import React, {Component} from 'react'

const ImgPath = require('../../../img/face3.png')

export default class Comments extends Component {

  renderComments (comments) {
    const items = comments
      .map(c => (
        <div className='comment'>
          <div className='img f-blue'>
            <div><img src={ImgPath}/></div>
            {c.status}
          </div>
          <a href='' className='f-blue'>{c.surname}<br/> {c.name}</a>
          <p className='f-gray'>{c.comment}</p>
          <a href='' className='f-light s12'>ответить</a>
        </div>
      ))
    return (
      <div>
        {items}
      </div>
    )
  }

  render () {
    return (
      <div className='bg-white pt40'>
        <div className='container'>
          <div className='row b40'>
            <div className='col-md-8'>
              <h3 className='b10'>Оставить комментарий</h3>
              <div className='input b20'>
                <textarea></textarea>
              </div>
              <div className='p-right'>
                <a href='' className='btn bg-light sm'>Отмена</a>
                &nbsp;
                <a href='' className='btn bg-aqua sm'>Отправить</a>
              </div>
            </div>
          </div>
          <div className='row b40'>
            <div className='col-md-8'>
              <h1 className='bubble'>Комментарии</h1>
              {this.renderComments(this.props.comments)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
