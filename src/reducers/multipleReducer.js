import {combineReducers} from 'redux'

const initialState = {
  value: 2,
  my_value: {
    group_1:{
      some_value: 4,
      group_2:{
        some_value: 3,
        group_4:{
          here_is_a_value: 2
        }
      }
    }
  },
  some_value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MULTIPLE_2':
      return { ...state, value: state.value * 2 }
    case 'MULTIPLE_3':
      return { ...state, value: state.value * 3 }
    case 'MULTIPLE_CUSTOM':
      return { 
        ...state, 
        my_value: {
          ...state.my_value,
          group_1: {
            ...state.my_value.group_1,
            [action.payload.nested_group]: {
              ...state.my_value.group_1[action.payload.nested_group],
              group_4:{
                ...state.my_value.group_1[action.payload.nested_group].group_4.here_is_a_value,
                here_is_a_value: state.my_value.group_1[action.payload.nested_group].group_4.here_is_a_value * action.payload.target_value
              }
            }
          }
        }
       }
    default:
      return state
  }
}


export default combineReducers({counter: counterReducer})

