import {
  LOGOUT,
} from '../constants/Types';

const initialState = {
  productList: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        productList: {}
      };

    default:
      return state;
  }
};
