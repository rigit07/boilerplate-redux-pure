import { applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { legacy_createStore as createStore } from 'redux'
import counterReducer from './reducers/counterReducer'
import multupleReducer from './reducers/multipleReducer'
import generalReducer from './reducers/generalReducer'

const Store_1 = createStore(counterReducer);
const Store_2 = createStore(multupleReducer, applyMiddleware(reduxThunk));
const Store_3 = createStore(generalReducer);

export {Store_1, Store_2, Store_3};