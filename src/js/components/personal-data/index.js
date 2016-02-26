import React, {Component} from 'react'
import './styles.less'

const ImgPath = require('../../../img/19.png')

export default class PersonalData extends Component {

  render() {
    return (
      <div className='wrap' >

        <ul className='list-group data-panel'>
          <li className='list-group-item'><input type='text' className='form-control' placeholder='Фамилия'/></li>
          <li className='list-group-item'><input type='text' className='form-control' placeholder='Имя'/></li>
          <li className='list-group-item'><input type='text' className='form-control' placeholder='Отчество'/></li>
          <li className='list-group-item'><input type='text' className='form-control' placeholder='Электронная почта'/>
          </li>
          <li className='list-group-item'><input type='text' className='form-control' placeholder='Курс'/></li>
          <li className='list-group-item'><input type='text' className='form-control' placeholder='Специальность'/></li>
          <li className='list-group-item'><button type="button" className="btn btn-ok">Применить</button></li>
        </ul>

        <div className="thumbnail">
        <img src={ImgPath}  width='150' alt="..."/>
        <div className="caption">
          <a href="#" className="btn-download btn btn-primary" role="button">Загрузить</a>
        </div>
      </div>
      </div>


    )
  }
}

