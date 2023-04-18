import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { userReducer } from './user/user.reducer';
import logger from 'redux-logger';

// const initialState = {
//   currentUser: null,
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'SET_CURRENT_USER':
//       return {
//         ...state,
//         currentUser: action.payload,
//       };
//     default:
//       return state;
//   }
// }
const middleWare = [logger];

const composedEnhancer = compose(applyMiddleware(...middleWare));

const store = createStore(userReducer, undefined, composedEnhancer);

export default store;
