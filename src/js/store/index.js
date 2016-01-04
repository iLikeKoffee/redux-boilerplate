import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reduxReactRouter} from 'redux-router'
import {createHistory} from 'history'
import * as reducers from '../ducks/root'
import routes from '../routing'

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({
    routes,
    createHistory
  })
)(createStore)

const rootReducer = combineReducers(reducers)

export default function configureStore (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
