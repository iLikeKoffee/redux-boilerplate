import React, {Component} from 'react'
import './styles.less'

export default class NewsList extends Component {

  renderNewsList (newsList) {
    const items = newsList
      .map (c => (
        <div className='list-item number'>
          <h1 className='bubble'><div className='date'>{c.date}</div>{c.title} </h1>
          <p>{c.text}</p>
        </div>
      ))

    return (
      <div>{items}</div>
    )
  }

  render () {
    return (
      <div>
        {this.renderNewsList(this.props.newsList)}
      </div>
    )
  }
}
