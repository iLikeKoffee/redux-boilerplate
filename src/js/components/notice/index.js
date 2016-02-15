import React, {Component} from 'react'
import './styles.less'

export default class Notice extends Component {
  render () {
    return (
      <span className = 'notice'>{this.props.notice}</span>
    )
  }
}
