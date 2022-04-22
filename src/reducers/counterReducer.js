import {combineReducers} from 'redux'

const initialState = {
  value: 0,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 }
    case 'DECREMENT':
      return { ...state, value: state.value - 1 }
    case 'INCREMENT_BY_AMOUNT':
      return { ...state, value: state.value + action.value }
    default:
      return state
  }
}

export default combineReducers({counter: counterReducer})