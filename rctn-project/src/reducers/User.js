import {
  LOGIN,
  REGISTER,
  LOGOUT,
  UPDATE_PROFILE,
} from '../constants/Types';

const initialState = {
  member: {
    token: '',
  },
  hasLoggedOut: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
    case REGISTER:
    case LOGIN:
      return state
        .set('member', action.payload)
        .set('hasLoggedOut', false);

    case LOGOUT:
      return initialState
        .set('hasLoggedOut', true);

    default:
      return state;
  }
};
