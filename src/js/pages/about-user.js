import React, {Component} from 'react'

const ImgPath = require('../../pict/19.png')

export default class User extends Component {
  render() {
    return <div>
      <div className='col-md-2'>
        <img src={ImgPath} width='150'/>
      </div>
      <div className='col-md-6'>
        <div className='s20 b25'>Михайлов <br/> Илья Пантелеевич</div>
        <div className='b25 profile-info'>
          <div><span className='f-blue'>Факультет: </span> Защита информации</div>
          <div><span className='f-blue'>Должность: </span> Доцент кафедры бухгалтерии</div>
          <div><span className='f-blue'>Email: </span> sdfj@sdf.ty</div>
        </div>
        <a href='' className='f-light lnk-edit'>Редактировать профиль</a>
      </div>
    </div>
  }
}
