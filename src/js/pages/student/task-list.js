import React, {Component} from 'react'

export default class Task extends Component {
  render () {
    return (
      <div className='col-md-8 b20'>
        <h1 className='bubble'>Лента заданий</h1>

        <div className='list-item number'>
          <div className='counter'>
            <div className='num bg-red'><span>1</span>
              <div className='day'>день</div>
            </div>
            <div className='deadline'>
              <div className='f-blue'>сдать до</div>
              26.08.2010
            </div>
          </div>
          <h3 className='b25'>Экономический анализ производственно-хозяйственной деятельности</h3>
          <a href='' className='f-blue lnk-list'>Лекция 1: Анализ маркетинговой деятельности</a>
          <a href='' className='f-blue lnk-apply'>Тест: Анализ использования основных фондов организации</a>
        </div>

        <div className='list-item number'>
          <div className='counter'>
            <div className='num bg-orange'><span>3</span>
              <div className='day'>дня</div>
            </div>
            <div className='deadline'>
              <div className='f-blue'>сдать до</div>
              26.08.2010
            </div>
          </div>
          <h3 className='b25'>Бухгалтерский финансовый учет</h3>
          <a href='' className='f-blue lnk-list'>Лекция 1: Анализ маркетинговой деятельности</a>
          <a href='' className='f-blue lnk-apply'>Тест: Анализ использования основных фондов организации</a>
          <a href='' className='f-blue lnk-list'>Лекция 1: Анализ маркетинговой деятельности</a>
          <a href='' className='f-blue lnk-apply'>Тест: Анализ использования основных фондов организации</a>
        </div>

        <div className='list-item number'>
          <div className='counter'>
            <div className='num bg-aqua'><span>7</span>
              <div className='day'>дней</div>
            </div>
            <div className='deadline'>
              <div className='f-blue'>сдать до</div>
              26.08.2010
            </div>
          </div>
          <h3 className='b25'>Экономический анализ производственно-хозяйственной деятельности</h3>
          <a href='' className='f-blue lnk-list'>Лекция 1: Анализ маркетинговой деятельности</a>
        </div>

        <div className='list-item number'>
          <div className='counter'>
            <div className='num bg-aqua'><span>8</span>
              <div className='day'>дней</div>
            </div>
            <div className='deadline'>
              <div className='f-blue'>сдать до</div>
              26.08.2010
            </div>
          </div>
          <h3 className='b25'>Бухгалтерский финансовый учет</h3>
          <a href='' className='f-blue lnk-list'>Лекция 1: Анализ маркетинговой деятельности</a>
          <a href='' className='f-blue lnk-apply'>Тест: Анализ использования основных фондов организации</a>
          <a href='' className='f-blue lnk-list'>Лекция 1: Анализ маркетинговой деятельности</a>
          <a href='' className='f-blue lnk-apply'>Тест: Анализ использования основных фондов организации</a>
        </div>

        <div className='list-item number'>
          <div className='counter'>
            <div className='num bg-light'><span>12</span>
              <div className='day'> дней</div>
            </div>
            <div className='deadline'>
              <div className='f-blue'>сдать до</div>
              26.08.2010
            </div>
          </div>
          <h3 className='b25'>Экономический анализ производственно-хозяйственной деятельности</h3>
          <a href='' className='f-blue lnk-list'>Лекция 1: Анализ маркетинговой деятельности</a>
        </div>

        <div className='list-item number'>
          <div className='counter'>
            <div className='num bg-light'><span>17</span>
              <div className='day'>дней</div>
            </div>
            <div className='deadline'>
              <div className='f-blue'>сдать до</div>
              26.08.2010
            </div>
          </div>
          <h3 className='b25'>Бухгалтерский финансовый учет</h3>
          <a href='' className='f-blue lnk-list'>Лекция 1: Анализ маркетинговой деятельности</a>
          <a href='' className='f-blue lnk-apply'>Тест: Анализ использования основных фондов организации</a>
          <a href='' className='f-blue lnk-list'>Лекция 1: Анализ маркетинговой деятельности</a>
          <a href='' className='f-blue lnk-apply'>Тест: Анализ использования основных фондов организации</a>
        </div>
      </div>
    )
  }
}
