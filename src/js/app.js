import React from 'react'
import {Provider} from 'react-redux'
import router from './routing'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={this.props.store}>
        {router}
      </Provider>
    )
  }
}
