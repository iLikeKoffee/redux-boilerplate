import React, {Component} from 'react'
import User from './about-user'

const logoPath = require('../../img/logo.png')

export default class KSULogo extends Component {
  static propTypes = {}

  static defaultProps = {}

  state = {}

  render () {
    return (
      <div className='subhead shad'>
        <div className='container'>
          <div className='row'>
            <User/>
            <div className='col-md-4'>
              <a href='' className='logo'> <img src={logoPath}/> <span>Портал дистанционного образования КГУ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
