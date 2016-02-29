import React, {Component} from 'react'
import './styles.less'

const logoPath = require('../../../img/logo.png')

export default class PersonalSetting extends Component {

  render () {
    return (
      <div className='setting-panel-right '>
        <div className='panel panel-default '>
          <a href='' className='logo logo-panel'>
            <img src={logoPath}/>
            <span>Портал дистанционного образования КГУ</span>
          </a>
          <div className='panel-body'>
            <div className='list-group'>
              <a href='#' className='list-group-item active'>
                Cras justo odio
              </a>
              <a href='#' className='list-group-item'>Dapibus ac facilisis in</a>
              <a href='#' className='list-group-item'>Morbi leo risus</a>
              <a href='#' className='list-group-item'>Porta ac consectetur ac</a>
              <a href='#' className='list-group-item'>Vestibulum at eros</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
