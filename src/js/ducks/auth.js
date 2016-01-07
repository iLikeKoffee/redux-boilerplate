import {Map} from 'immutable'
import User from '../records/user'
import Error from '../records/error'

const initialState = new Map({isFetching: false, isAuthenticated: false, user: null, error: null})

const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
const LOGGED_IN = 'LOGGED_IN'
const LOGIN_FAILED = 'LOGIN_FAILED'
const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED'
const LOGGED_OUT = 'LOGGED_OUT'
const LOGOUT_FAILED = 'LOGOUT_FAILED'

/**
 * request ActionCreator
 * @param login
 * @param password
 * @returns {{type: string, payload: {login: *, password: *}}}
 */
export function requestLogin (login, password) {
  return {
    type: LOGIN_REQUESTED,
    payload: {
      login: login,
      password: password
    }
  }
}

/**
 * login response action creator
 * @param response
 * @returns {*}
 */
export function handleLogin (response) {
  if (response.status === 200) {
    return {
      type: LOGGED_IN,
      payload: new User(response.body)
    }
  } else {
    return {
      type: LOGIN_FAILED,
      payload: new Error({code: response.status, message: response.body.message})
    }
  }
}

/**
 * Request logout action creator
 * @returns {{type: string}}
 */
export function requestLogout () {
  return {
    type: LOGOUT_REQUESTED
  }
}

/**
 * Logout response action creator
 * @param response
 * @returns {*}
 */
export function handleLogout (response) {
  if (response.status === 200) {
    return {
      type: LOGGED_OUT
    }
  } else {
    return {
      type: LOGOUT_FAILED
    }
  }
}

/**
 * Asyncronous action creator for login
 * @param login
 * @param password
 * @returns {Function}
 */
export function loginAsync (login, password) {
  return (dispatch, getState) => {
    dispatch(requestLogin(login, password))
    setTimeout(() => {
      dispatch(handleLogin({
        status: 200,
        body: {
          login: 'John Doe',
          email: 'johndoe@example.com',
          token: 'SOME_SECRET_TOKEN'
        }
      }))
    }, 2500)
  }
}

/**
 * Asyncronous action creator for logout
 * @returns {Function}
 */
export function logoutAsync () {
  return (dispatch, getState) => {
    dispatch(requestLogout())
    setTimeout(() => {
      dispatch(handleLogout({
        status: 200
      }))
    }, 2500)
  }
}

/**
 *
 * @param {Object} state - old state
 * @param {Object} action - action
 * @returns {Object} new state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return state.asMutable()
        .set('isFetching', true)
        .set('isAuthenticated', false)
        .set('user', null)
        .set('error', null)
        .asImmutable()
    case LOGGED_IN:
      return state.asMutable()
        .set('isFetching', false)
        .set('isAuthenticated', true)
        .set('user', action.payload)
        .set('error', null)
        .asImmutable()
    case LOGIN_FAILED:
      return state.asMutable()
        .set('isFetching', false)
        .set('isAuthenticated', false)
        .set('user', null)
        .set('error', action.payload)
        .asImmutable()
    case LOGOUT_REQUESTED:
      return state.asMutable()
        .set('isFetching', true)
        .set('isAuthenticated', false)
        .set('user', null)
        .set('error', null)
        .asImmutable()
    case LOGGED_OUT:
      return state.asMutable()
        .set('isFetching', false)
        .set('isAuthenticated', false)
        .set('user', null)
        .set('error', null)
        .asImmutable()
    case LOGOUT_FAILED:
      return state.asMutable()
        .set('isFetching', false)
        .set('isAuthenticated', false)
        .set('user', null)
        .set('error', action.payload)
        .asImmutable()
    default:
      return state
  }
}
