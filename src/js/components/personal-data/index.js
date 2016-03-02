import React, {Component} from 'react'
import './styles.less'

const ImgPath = require('../../../img/19.png')

export default class PersonalData extends Component {

  render () {
    return (
      <div className='wrap col-md-5 '>
        <div className='list-group data-panel row'>
          <div className='col-md-5'>
            <div className='thumbnail'>
              <img src={ImgPath} width='100'/>
              <div className='caption'>
                <div href='#' className='btn-download btn btn-primary' role='button'>Загрузить</div>
              </div>
            </div>
          </div>
          <div className='col-md-12 '>
            <div className='list-group-item'><input type='text' className='form-control' placeholder='Фамилия'/></div>
            <div className='list-group-item'><input type='text' className='form-control' placeholder='Имя'/></div>
            <div className='list-group-item'><input type='text' className='form-control' placeholder='Отчество'/></div>
          </div>
          <div className='col-md-12'>
            <div className='list-group-item'><input type='text' className='form-control'
                                                    placeholder='Электронная почта'/>
            </div>
            <div className='list-group-item'><input type='text' className='form-control' placeholder='Курс'/></div>
            <div className='list-group-item'><input type='text' className='form-control' placeholder='Специальность'/>
            </div>
            <div className='list-group-item'>
              <div className='caption'>
                <div type='button' className='btn btn-ok'>Применить</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
