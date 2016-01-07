import React, {Component} from 'react'
import LoginForm from '../components/login-form'
import Loader from '../components/loader'
import {loginAsync} from '../ducks/auth'
import {connect} from 'react-redux'

class LoginFormContainer extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    isFetching: React.PropTypes.bool
  }

  handleSubmit = (data, e) => {
    e.preventDefault()
    this.props.dispatch(loginAsync(data.login, data.password))
  }

  render () {
    if (this.props.isFetching) {
      return (
        <Loader/>
      )
    } else {
      return (
        <LoginForm onSubmit={this.handleSubmit}/>
      )
    }
  }
}

export default connect(state => ({isFetching: state.auth.get('isFetching')}))(LoginFormContainer)
