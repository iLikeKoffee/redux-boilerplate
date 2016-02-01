import React, {Component} from 'react'

export default class CourseList extends Component {

  renderRequiredCourses (courses) {
    const items = courses
      .filter(c => c.required)
      .map(c => (
        <div className='list-item'>
          <a href='' className='f-blue'>{c.name}</a>
        </div>
      ))

    return (
      <div>
        {items}
      </div>
    )
  }

  renderSuggestedCourses (courses) {
    const items = courses
      .filter(c => !c.required)
      .map(c => (
        <div className='list-item'>
          <a href='' className='f-blue'>{c.name}</a>
        </div>
      ))

    return (
      <div>
        {items}
      </div>
    )
  }

  renderSuggestedArticles (articles) {
    const items = articles
      .map(c => (
        <div className='list-item'>
          <a href='' className='f-blue'>{c.name}</a>
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
      <div className='col-md-4 b30'>
        <div className='right'>
          <h2 className='b30'>Курсы</h2>

          <h3 className='bubble'>Обязательная программа</h3>
          {this.renderRequiredCourses(this.props.courses)}

          <h3 className='bubble'>Дополнительная программа</h3>
          {this.renderSuggestedCourses(this.props.courses)}

          <h3 className='bubble'>Полезные статьи</h3>
          {this.renderSuggestedArticles(this.props.articles)}

          <br/>
        </div>
      </div>
    )
  }
}
