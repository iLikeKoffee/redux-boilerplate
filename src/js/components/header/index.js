import React, {Component} from 'react'
import './styles.less'
import Notice from '../notice/index'

const messages = 128
const notice = 12
const students = 8

export default class Header extends Component {
  render () {
    return (
      <div className='container-fluid header-wrap '>
        <header className='nav container'>

          <ul className='row hide-nav'>
            <li className='nav-item'>
              <a href=''>Сообщения</a>
              <Notice notice={messages}/>
            </li>
            <li className='nav-item'>
              <a href=''>Уведомления</a>
              <Notice notice={notice}/>
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
              <Notice notice={students}/>
            </li>
            <li className='nav-item'>
              <a href=''>Кабинет</a>
            </li>
          </ul>


          <div className='glyphicon glyphicon-th-list' tabindex="0" ></div>

          <ul className='nav navbar-navnavbar-nav show-nav'>
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
            <li><a href=''>Новости</a></li>
            <li><a href=''>Курсы</a></li>
            <li><a href=''>База знаний</a></li>
            <li>
              <a href=''>Студенты
                <Notice notice={students}/>
              </a>
            </li>
            <li><a href=''>Кабинет</a></li>
          </ul>
        </header>
      </div>
    )
  }
}

