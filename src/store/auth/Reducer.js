import {
  TOKEN_REFRESH_REQUEST,
  TOKEN_REFRESH_SUCCESS,
  TOKEN_REFRESH_ERROR,
} from "./Action";

const initialState = {
  loggedIn: false,
  refleshToken: null,
  accessToken: null,
  expiresIn: null,
};

const authState = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_REFRESH_REQUEST:
      return {
        ...state,
      };
    case TOKEN_REFRESH_SUCCESS:
      return {
        ...state,
      };
    case TOKEN_REFRESH_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authState;
