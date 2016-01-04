import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reduxReactRouter} from 'redux-router'
import {createHistory} from 'history'
import * as reducers from '../ducks/root'
import DevTools from '../utils/dev-tools'
import routes from '../routing'

let createStoreWithMiddleware
if (__DEV__) {
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    reduxReactRouter({
      routes,
      createHistory
    }),
    DevTools.instrument()
  )(createStore)
} else {
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
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
