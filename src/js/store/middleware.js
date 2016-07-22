import {applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import createLogger from 'redux-logger'

let middleware

if (__DEBUG__) {
  middleware = applyMiddleware(promiseMiddleware(), createLogger())
} else {
  middleware = applyMiddleware(promiseMiddleware(), createLogger())
}

export default middleware
