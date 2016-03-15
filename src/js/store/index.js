import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {reduxReactRouter} from 'redux-router'
import {createHistory} from 'history'
import * as reducers from '../ducks/reducers'
import DevTools from '../utils/dev-tools'
import routes from '../routing'
import apiMiddleware from '../api/middleware'

let createStoreWithMiddleware
if (__DEV__) {
  createStoreWithMiddleware = compose(
    applyMiddleware(apiMiddleware),
    reduxReactRouter({
      routes,
      createHistory
    }),
    DevTools.instrument()
  )(createStore)
} else {
  createStoreWithMiddleware = compose(
    applyMiddleware(apiMiddleware),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)
}

const rootReducer = combineReducers(reducers)

export default function configureStore (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
