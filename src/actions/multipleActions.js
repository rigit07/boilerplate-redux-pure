import { asyncFn } from '../api'

export const multiple_2 = () => {
  return { type: "MULTIPLE_2" };
}

export const multiple_3 = () => {
  return { type: "MULTIPLE_3" };
}

export const multiple_custom = (amount) => {
  return { type: "MULTIPLE_CUSTOM", payload: amount };
}

export const multipleAsync = (amount) => (dispatch) => asyncFn(amount).then((res) => {
  return dispatch({ type: "MULTIPLE_CUSTOM", payload: res });
})
