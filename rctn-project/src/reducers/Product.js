import { REHYDRATE } from 'redux-persist';

import {
  LOGOUT,
} from '../constants/Types';

const initialState = {
  productList: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return action.payload ? (action.payload.product ? action.payload.product : state) : state

    case LOGOUT:
      return {
        productList: {}
      };

    default:
      return state;
  }
};
