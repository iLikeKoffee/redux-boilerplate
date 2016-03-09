import React, {Component} from 'react'
import {Router, Route,Link} from 'react-router'
import './styles.less'
import Notice from '../notice/index'

const messages = 128
const notice = 12
const students = 8

export default class Header extends Component {

  state = {
    isOpen: false
  }

  clickBut = e => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <div className='container-fluid header-wrap'>
        <header className='nav container'>
          <ul className='row hide-nav-small'>
            <li className='nav-item'>
              <a href=''>Сообщения</a>
              <Notice notice={messages}/>
            </li>
            <li className='nav-item'>
              <a href=''>Уведомления</a>
              <Notice notice={notice}/>
            </li>
            <li className='nav-item'>
              <a href=''>
                <Link to="/news">Новости</Link>
              </a>
            </li>
            <li className='nav-item'>
              <a href=''>
                <Link to="/list-courses">Курсы</Link>
              </a>
            </li>
            <li className='nav-item'>
              <a href=''>База знаний</a>
            </li>
            <li className='nav-item'>
              <a href=''>Студенты</a>
              <Notice notice={students}/>
            </li>
            <li className='nav-item'>
              <a href=''>
                <Link to="/profile">Кабинет</Link>
              </a>
            </li>
          </ul>

          <div className='but glyphicon glyphicon-th-list' onClick={e => this.clickBut()}></div>
          <ul className={`mob-menu nav navbar-nav ${this.state.isOpen ? 'show-nav': 'hide-nav'}`}>
            <li>
              <a href=''>Сообщения
                <Notice notice={messages}/>
              </a>
            </li>
            <li>
              <a href=''>Уведомления
                <Notice notice={notice}/>
              </a>
            </li>
            <li>
              <a href=''>
                <Link to="/news">Новости</Link>
              </a>
            </li>
            <li><a href=''>Курсы</a></li>
            <li><a href=''>База знаний</a></li>
            <li>
              <a href=''>Студенты
                <Notice notice={students}/>
              </a>
            </li>
            <li>
              <a href=''>
                <Link to="/profile">Кабинет</Link>
              </a>
            </li>
          </ul>
        </header>
      </div>
    )
  }
}
