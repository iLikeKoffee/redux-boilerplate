import React, {Component} from 'react'
import Counter from '../containers/counter'

export default class Main extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1>Counter example</h1>
          </div>
        </div>
        <Counter/>
      </div>
    )
  }
}
