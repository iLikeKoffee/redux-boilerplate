import {createStore, combineReducers, compose} from 'redux'
import * as reducers from '../ducks/reducers'
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
  module.hot.accept('../ducks/reducers', () => {
    store.replaceReducer(combineReducers(require('../ducks/reducers')))
  });
}

export default store
