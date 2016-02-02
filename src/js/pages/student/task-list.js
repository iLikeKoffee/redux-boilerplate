import React, {Component} from 'react'

export default class Task extends Component {

  renderTaskList(tasks) {
    const items = tasks
      .map(c => (
        <div className='list-item number'>
          <div className='counter'>
            {this.renderColorDay(c.day)}
            <div className='deadline'>
              <div className='f-blue'>сдать до</div>
              {c.deadline}
            </div>
          </div>
          <h3 className='b25'>{c.nameCourse}</h3>
          <a href='' className='f-blue lnk-list'>{c.nameLection}</a>
          <a href='' className='f-blue lnk-apply'>{c.nameTest}</a>
        </div>
      ))

    return (
        <div>{items}</div>
    )
  }

  getNameDay(day){
        if(+day==1)
            return 'день';
        else
          if((+day>=2)&&(+day<=4))
                return 'дня';
          else return 'дней';

  }

  renderColorDay (day){
    var color;
    if(day<=2)
      color = 'num bg-red';
    else
    if((day>=3)&&(day<=5))
      color = 'num bg-orange';
    else
    if((day>=6)&&(day<=10))
      color = 'num bg-aqua';
    else
      color = 'num bg-light'
    return(
        <div className={color}>
          <span>{day}</span>
          <div className='day'>{this.getNameDay(day)}</div>
        </div>
      )

  }

  render () {
    return (
      <div className='col-md-8 b20'>
        <h1 className='bubble'>Лента заданий</h1>
        {this.renderTaskList(this.props.tasks)}
      </div>
    )
  }
}
