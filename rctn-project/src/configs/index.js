import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

// import thunk from 'redux-thunk';
//
// const store = createStore(
//   compose(
//     applyMiddleware(
//       thunk,
//     ),
//   ),
// );

const store = createStore(rootReducer);

export default store;
