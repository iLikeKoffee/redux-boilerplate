import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../ducks/counter'

class Counter extends Component {
  handleIncrement (e) {
    this.props.dispatch(increment())
  }

  handleDecrement (e) {
    this.props.dispatch(decrement())
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12 text-center padding">
          <h1 className='counter'>{this.props.counter}</h1>
        </div>
        <div className="col-md-12 text-center">
          <div className="btn-group">
            <button className="btn btn-default" onClick={this.handleDecrement.bind(this)}>
              <span className="glyphicon glyphicon-minus"/>
            </button>
            <button className="btn btn-primary" onClick={this.handleIncrement.bind(this)}>
              <span className="glyphicon glyphicon-plus"/>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    dispatch: state.dispatch,
    counter: state.counter.get('counter')
  }
})(Counter)
