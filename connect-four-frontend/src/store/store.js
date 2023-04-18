import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const initialState = {
  user: {
    username: '',
    password: '',
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_SUBMITTED':
      return {
        ...state,
        user: {
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    default:
      return state;
  }
}
const middleWare = [logger];

const composedEnhancer = compose(applyMiddleware(...middleWare));

const store = createStore(reducer, undefined, composedEnhancer);

export default store;
