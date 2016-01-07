import React, {Component} from 'react'
import LoginForm from '../components/login-form'
export default class Login extends Component {
  render () {
    return (
      <div className='flex full-height'>
        <LoginForm/>
      </div>
    )
  }
}
