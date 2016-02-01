import React, {Component} from 'react'

export default class Loader extends Component {
  state = {
    dots: 1
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({dots: (this.state.dots === 3) ? 1 : this.state.dots + 1})
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    let i = this.state.dots
    let dots = ''
    while (i-- > 0) {
      dots = dots + '.'
    }
    return (
      <div className='container text-center'>
        <h3>{`Загрузка${dots}`}</h3>
      </div>
    )
  }
}
