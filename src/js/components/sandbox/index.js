import React, {Component} from 'react'
import './styles.less'

export default class SandBox extends Component {
  render () {
    return (
      <div>
        <div className='hide-on-md'> Для больших экранов</div>
        <div className='hide-on-sm hide-on-lg' > Для средних экранов</div>
        <div className='hide-on-xs hide-on-md hide-on-lg show-on-sm'> Для маленьких экранов</div>
        <div className='hide-on-sm hide-on-md hide-on-lg show-on-xs'> Для очень маленьких экранов</div>
      </div>
    )
  }
}
