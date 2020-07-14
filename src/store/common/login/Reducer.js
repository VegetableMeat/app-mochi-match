import { LOGIN_REQ, LOGIN_OK, LOGIN_NG } from "../Action";

const initiaState = {
  loadingFlag: true,
  loggedIn: false,
};

const loginState = (state = initiaState, action) => {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        ...state,
        loadingFlag: true,
      };
    case LOGIN_OK:
      return {
        ...state,
        loadingFlag: false,
        loggedIn: true,
      };
    case LOGIN_NG:
      return {
        ...state,
        loadingFlag: false,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default loginState;
