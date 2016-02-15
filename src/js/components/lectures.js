import React, {Component} from 'react'

export default class Lecture extends Component {

  renderLections (lectures) {
    const items = lectures
      .map(c => (
        <div>
          <div className='list-item'>
            <div className='f-blue glyphicon glyphicon-edit'>
              <a href='' className='lnk'>{c.name}</a>
            </div>
          </div>
          <div className='list-item'>
            <div className='f-blue glyphicon glyphicon-ok '>
              <a href='' className='lnk'>{c.nameTest}</a>
            </div>
          </div>
        </div>
          ))
    return (
      <div>{items}</div>
    )
  }

  render () {
    return (
      <div className='col-md-8 b30'>
        <h1 className='bubble'>Экономический анализ производственно-хозяйственной деятельности</h1>
        {this.renderLections(this.props.lectures)}
        <a href='' className='btn bg-orange'>
          <div className='glyphicon glyphicon-cog btn-sign-margin '></div>
          Редактировать курс</a>
      </div>
    )
  }
}
