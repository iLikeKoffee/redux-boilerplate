import React, {Component} from 'react'

export default class Courses extends Component {
    render () {
      return (
            <div className='col-md-4 b30'>
                <div className='right'>
                    <h2 className='b30'>Курсы</h2>
                    <div className='list-item'> <a href='' className='f-blue'>Бухгалтерский финансовый учет</a> </div>
                    <div className='list-item'> <a href='' className='f-orange'>Экономический анализ производственно-хозяйственной деятельности</a> </div>
                    <div className='list-item'> <a href='' className='f-blue'>Антикризисное управление персоналом</a></div>
                    <div className='list-item'> <a href='' className='f-blue'>Введение в теорию межкультурной коммуникации</a></div>
                    <div className='list-item'> <a href='' className='f-blue'>Экономический анализ производственно-хозяйственной деятельности</a></div>
                    <div className='b40'></div>
                    <a href='' className='btn bg-aqua btn-add'>Добавить курс</a>
                </div>
            </div>
        ) }
}
