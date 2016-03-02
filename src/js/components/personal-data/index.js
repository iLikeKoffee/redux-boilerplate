import React, {Component} from 'react'
import './styles.less'

const ImgPath = require('../../../img/19.png')

export default class PersonalData extends Component {

  render() {
    return (
      <div className='wrap col-md-5 '>
        <ul className='list-group data-panel row'>
          <div className='thumbnail col-md-5'>
            <img src={ImgPath} width='100'/>
            <div className='caption'>
              <div href='#' className='btn-download btn btn-primary' role='button'>Загрузить</div>
            </div>
          </div>
          <div className='col-md-12 '>
            <li className='list-group-item'><input type='text' className='form-control' placeholder='Фамилия'/></li>
            <li className='list-group-item'><input type='text' className='form-control' placeholder='Имя'/></li>
            <li className='list-group-item'><input type='text' className='form-control' placeholder='Отчество'/></li>
          </div>
          <div className='col-md-12'>
            <li className='list-group-item'><input type='text' className='form-control'
                                                   placeholder='Электронная почта'/>
            </li>
            <li className='list-group-item'><input type='text' className='form-control' placeholder='Курс'/></li>
            <li className='list-group-item'><input type='text' className='form-control' placeholder='Специальность'/>
            </li>
            <li className="list-group-item">
              <div className='caption'>
                <div type='button' className='btn btn-ok'>Применить</div>
              </div>
            </li>
          </div>
        </ul>


      </div>
    )
  }
}
