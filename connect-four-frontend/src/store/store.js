import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { userReducer } from './user/user.reducer';
import logger from 'redux-logger';

const middleWare = [logger];

const composedEnhancer = compose(applyMiddleware(...middleWare));

const store = createStore(userReducer, undefined, composedEnhancer);

export default store;
