import React, {Component} from 'react'
import './styles.less'

export default class LoginForm extends Component {
  static propTypes = {
    onSubmit: React.PropTypes.Function
  }
  static defaultProps = {
    onSubmit: (data, e) => {
    }
  }
  state = {
    login: null,
    password: null
  }

  handleSubmit = (e) => {
    this.props.onSubmit({login: this.state.login, password: this.state.password}, e)
  }

  render () {
    return (
      <form className='login-wrap container'
            onSubmit={this.handleSubmit}>
        <div className='row login-form-header'>
          <div className='col-md-12'>
            <h1>Вход</h1>
          </div>
        </div>
        <div className='row row-v-gap'>
          <div className='col-sm-12 col-md-3 col-lg-2'>
            <label htmlFor='login-input'>Логин</label>
          </div>
          <div className='col-sm-12 col-md-9 col-lg-10'>
            <input id='login-input'
                   type='text'
                   className='form-control'
                   value={this.state.login}
                   onChange={(e) => this.setState({login: e.target.value})}/>
          </div>
        </div>
        <div className='row row-v-gap'>
          <div className='col-sm-12 col-md-3 col-lg-2'>
            <label htmlFor='password-input'>Пароль</label>
          </div>
          <div className='col-sm-12 col-md-9 col-lg-10'>
            <input id='password-input'
                   type='password'
                   className='form-control'
                   value={this.state.password}
                   onChange={(e) => this.setState({password: e.target.password})}/>
          </div>
        </div>
        <div className='row row-gap'>
          <div className='pull-right'>
            <button className='btn btn-primary btn-lg'>
              <span className='glyphicon glyphicon-user'/> Войти
            </button>
          </div>
        </div>
      </form>
    )
  }
}
