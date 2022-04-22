const initialState = {
  general_value: 100,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TO_ZERO':
      return { ...state, general_value: 0 }
    default:
      return state
  }
}

export default counterReducer
