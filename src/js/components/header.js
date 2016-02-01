import React, {Component} from 'react'

export default class Header extends Component {
    render () {
      return (
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12' >
                            <ul className='menu' >
                                <li> <a href=''>Сообщения</a> <span className='notice'>124</span> </li>
                                <li> <a href=''>Уведомления</a> <span className='notice'>1</span> </li>
                                <li> <a href=''>Новости</a> </li>
                                <li> <a href=''>Курсы</a> </li>
                                <li> <a href=''>База знаний</a> </li>
                                <li> <a href=''>Студенты</a> <span className='notice aqua'>8</span> </li>
                                <li className='search'>
                                    <form>
                                        <input type='text' placeholder='Поиск'/>
                                        <button ></button>
                                     </form>
                                </li>
                                <li> <a href='' className='caret'>Кабинет</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }}
