import React, {Component} from 'react'

export default class Course extends Component {
  render() {
    return (
      <div className='col-md-4 b30'>
        <div className='right'>
          <h2 className='b30'>Курс</h2>
          <h3 className='bubble'>Экономический анализ производственно-хозяйственной деятельности</h3>
          <div className='list-item'><a href='' className='f-blue lnk-list'>Анализ маркетинговой деятельности</a></div>
          <div className='list-item'><a href='' className='f-orange lnk-list'>Романтизм и реализм во французской
            литературе 30-40-х годов XIX века</a></div>
          <div className='list-item'><a href='' className='f-blue lnk-list'>Антикризисное управление персоналом</a>
          </div>
          <div className='list-item'><a href='' className='f-blue lnk-list'>Анализ использования основных фондов
            организации</a></div>
          <div className='list-item'><a href='' className='f-blue lnk-list'>Анализ маркетинговой деятельности</a></div>
          <div className='list-item'><a href='' className='f-blue lnk-list'>Анализ использования основных фондов
            организации</a></div>
          <div className='b40'></div>
          <a href='' className='btn bg-orange btn-edit'>Редактировать лекцию</a>
        </div>
      </div>
    )
  }
}
