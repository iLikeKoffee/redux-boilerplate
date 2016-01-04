import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store'
import {ReduxRouter} from 'redux-router'
import routes from './routing'
import {renderDevTools} from './utils/dev-tools'

const store = configureStore()

export default function () {
  return (
    <div>
      <Provider store={store}>
        <ReduxRouter children={routes}/>
      </Provider>
      {renderDevTools(store)}
    </div>
  )
}
