import {Map} from 'immutable'

const INCREMENT = 'INCREMENT', DECREMENT = 'DECREMENT'

export function increment () {
  return {
    type: INCREMENT
  }
}

export function decrement () {
  return {
    type: DECREMENT
  }
}

const initialState = new Map({
  counter: 0
})

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.set('counter', state.get('counter') + 1)
    case DECREMENT:
      return state.set('counter', state.get('counter') - 1)
    default:
      return state;
  }
}
