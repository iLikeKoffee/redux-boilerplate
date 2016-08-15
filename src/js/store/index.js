import {createStore, combineReducers, compose} from 'redux'
import * as reducers from '../state/reducers'
import middleware from './middleware'
import DevTools from '../utils/dev-tools'

const storeEnhancer = compose(
  middleware,
  DevTools.instrument()
)

const store = createStore(
  combineReducers(reducers),
  storeEnhancer
)

if (module.hot) {
  module.hot.accept('../state/reducers', () => {
    store.replaceReducer(combineReducers(require('../state/reducers')))
  });
}

export default store
