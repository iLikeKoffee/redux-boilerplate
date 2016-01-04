import React, {Component} from 'react'

export default class NotFound extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <h1>Not found</h1>
          </div>
          <div className="col-md-12 col-lg-6 padding">
            <p>Error #404 occurred</p>
          </div>
        </div>
      </div>
    )
  }
}
