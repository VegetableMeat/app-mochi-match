import {
  GET_GAME_TITLE_REQ,
  GET_GAME_TITLE_OK,
  GET_GAME_TITLE_NG,
  SET_FAVORITE_GAME,
  INPUT_USER_NAME,
  INPUT_FAVORITE_GAME,
} from "./Action";

const initialState = {
  get: {
    title: [],
  },
  profile: {
    name: null,
    icon: null,
    favorite: [],
  },
  error: {
    get: {
      title: false,
    },
    msg: {},
    flag: {
      name: false,
      icon: false,
      favorite: false,
    },
  },
  value: {},
};

const profileState = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME_TITLE_REQ:
      return {
        ...state,
      };
    case GET_GAME_TITLE_OK:
      return {
        ...state,
        get: {
          ...state.get,
          title: action.payload.data,
        },
        error: {
          ...state.error,
          get: {
            ...state.error.get,
            title: false,
          },
        },
      };
    case GET_GAME_TITLE_NG:
      return {
        ...state,
        error: {
          ...state.error,
          get: {
            ...state.error.get,
            title: true,
          },
        },
      };
    case SET_FAVORITE_GAME:
      return {
        ...state,
        profile: {
          ...state.profile,
          favorite: action.payload,
        },
      };
    case INPUT_USER_NAME:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default profileState;
