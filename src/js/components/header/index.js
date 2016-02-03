import React, {Component} from 'react'
import './styles.less'


export default class Header extends Component {
  render () {
    return (
      <div className="container-fluid header-wrap">
        <header className='nav container'>
          <ul className='row'>
            <li className='nav-item'>
              <a href=''>Сообщения</a>
            </li>
            <li className='nav-item'>
              <a href=''>Уведомления</a>
            </li>
            <li className='nav-item'>
              <a href=''>Новости</a>
            </li>
            <li className='nav-item'>
              <a href=''>Курсы</a>
            </li>
            <li className='nav-item'>
              <a href=''>База знаний</a>
            </li>
            <li className='nav-item'>
              <a href=''>Студенты</a>
            </li>
            <li className='nav-item'>
              <a href=''>Кабинет</a>
            </li>
          </ul>
        </header>
      </div>
    )
  }
}
