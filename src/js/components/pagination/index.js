import React, {Component} from 'react'
import './styles.less'

export default class Pager extends Component {
  static defaultProps = {
    current: 1,
    onClick: () => {
    }
  };

  renderPages (list, current) {
    return list
      .filter((page) => (page > current - 5) && (page < current + 5))
      .map((page) => (
        <li className={(current === page) ? 'active' : ''}>
          <a href='#' onClick = {(e) => this.props.onClick(page, e)}>
            {page}
          </a>
        </li>
      ))
  }

  renderDots (condition) {
    if (condition) {
      return (<li><a>...</a></li>)
    } else {
      return null
    }
  }

  render () {
    if (!this.props.pages.length) {
      return null
    }
    return (
      <div className='center-pager'>
        <ul className='pagination'>
          <li>
            <a href='#' aria-label='Previous'>
              <span aria-hidden='true'>&laquo;</span>
            </a>
          </li>
          {this.renderDots(this.props.current > 5)}
          {this.renderPages(this.props.pages, this.props.current)}
          {this.renderDots(this.props.current <= (this.props.pages.length - 5))}
          <li>
            <a href='#' aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
