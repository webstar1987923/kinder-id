import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {navReducer} from '../reducers'; //authReducer, loadingReducer, errorMessageReducer,
import authReducer from '../reducers/authReducer';
import regReducer from '../reducers/regReducer';
import childrenReducer from '../reducers/childrenReducer';
import sockets from '../reducers/sockets';
import paymentReducer from '../reducers/paymentReducer';

const configure = (initialState = {}) => {
  const REDUCERS_OBJECT = {
    nav: navReducer,
    auth: authReducer,
    reg: regReducer,
    sockets,
    childrenReducer,
    pay: paymentReducer
    // error: errorMessageReducer,
  };
  const reducer = combineReducers(REDUCERS_OBJECT);
  const store = createStore(reducer, initialState, compose(applyMiddleware(thunk), applyMiddleware(logger), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));
  return store;
};
export { configure };
