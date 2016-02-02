import React, {Component} from 'react'

export default class Lecture extends Component {

  renderLections (lectures){
    const items=lectures
      .map(c => (
        <div>
        <div className='list-item'><a href='' className='f-blue lnk-list'>{c.name}</a></div>
        <div className='list-item'><a href='' className='f-blue lnk-apply'>{c.nameTest}</a></div>
      </div>
          ))

    return(
      <div>{items}</div>
    )
  }

  render () {
    return (
      <div className='col-md-8 b30'>
        <h1 className='bubble'>Экономический анализ производственно-хозяйственной деятельности</h1>
        {this.renderLections(this.props.lectures)}
        <a href='' className='btn bg-orange btn-edit'>Редактировать курс</a>
      </div>
    )
  }
}
