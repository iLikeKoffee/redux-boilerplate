import {Map} from 'immutable'
const initialState = new Map({counter: 0})

// Action types
/**
 * @constant
 * @type {string}
 */
export const INCREMENT = 'INCREMENT'
/**
 * @constant
 * @type {string}
 */
export const DECREMENT = 'DECREMENT'

// Action creators
/**
 * Increment action creator
 * @function
 * @returns {{type: string}}
 */
export function increment() {
  return {
    type: INCREMENT
  }
}

/**
 * Decrement action creator
 * @function
 * @returns {{type: string}}
 */
export function decrement() {
  return {
    type: DECREMENT
  }
}

/**
 * Reducer. Handles all actions in this file
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.set('counter', parseInt(state.get('counter'), 10) + 1)
    case DECREMENT:
      return state.set('counter', parseInt(state.get('counter'), 10) - 1)
    default:
      return state
  }
}
