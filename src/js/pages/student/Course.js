import React, {Component} from 'react'

export default class Course extends Component {

  render() {
    return (
      <div className='col-md-4 b30'>
        <div className='right'>
          <h2 className='b30'>Курсы</h2>

          <h3 className='bubble'>Обязательная программа</h3>
          <div>
            <div className='list-item'><a href='' className='f-blue'>Бухгалтерский финансовый учет</a></div>
            <div className='list-item'><a href='' className='f-blue'>Экономический анализ производственно-хозяйственной
              деятельности</a></div>
            <div className='list-item'><a href='' className='f-blue'>Антикризисное управление персоналом</a></div>
            <div className='list-item'><a href='' className='f-blue'>Введение в теорию межкультурной коммуникации</a>
            </div>
            <div className='list-item'><a href='' className='f-blue'>Экономический анализ производственно-хозяйственной
              деятельности</a></div>
          </div>

          <h3 className='bubble'>Дополнительная программа</h3>
          <div>
            <div className='list-item'><a href='' className='f-blue'>Бухгалтерский финансовый учет</a></div>
            <div className='list-item'><a href='' className='f-blue'>Экономический анализ производственно-хозяйственной
              деятельности</a></div>
            <div className='list-item'><a href='' className='f-blue'>Антикризисное управление персоналом</a></div>
          </div>

          <h3 className='bubble'>Полезные статьи</h3>
          <div className='list-item'><a href='' className='f-blue'>Бухгалтерский финансовый учет</a></div>
          <div className='list-item'><a href='' className='f-blue'>Экономический анализ производственно-хозяйственной
            деятельности</a></div>

          <br/>
        </div>
      </div>
    )
  }
}
