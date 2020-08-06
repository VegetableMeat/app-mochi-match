import {
  GET_GAME_TITLE_REQ,
  GET_GAME_TITLE_OK,
  GET_GAME_TITLE_NG,
  SET_FAVORITE_GAME,
  SET_USER_NAME,
  SET_ICON,
  ADD_FAVORITE_GAME,
  DELETE_FAVORITE_GAME,
  INPUT_USER_NAME,
  INPUT_USER_ICON,
  UPDATE_USER_PROFILE_OK,
  UPDATE_USER_PROFILE_NG,
  DELETE_SUCCESS_MESSAGE,
} from "./Action";

import dataSort from "../sort/Sort";

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
      title: true,
    },
    msg: {
      name: null,
    },
    flag: {
      name: false,
    },
  },
  list: {
    title: [],
  },
  select: {
    title: [],
  },
  success: false,
};

const profileState = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME_TITLE_REQ:
      return {
        ...state,
      };
    case GET_GAME_TITLE_OK:
      console.log("action.payload.data", action.payload.data);
      return {
        ...state,
        get: {
          ...state.get,
          title: action.payload.data.sort((a, b) => {
            return dataSort(a, b);
          }),
        },
        error: {
          ...state.error,
          get: {
            ...state.error.get,
            title: false,
          },
        },
        list: {
          ...state.list,
          title: state.profile.favorite.map((data) => data),
        },
        select: {
          ...state.select,
          title: action.payload.data.sort((a, b) => {
            return dataSort(a, b);
          }),
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
      if (!action.payload) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        profile: {
          ...state.profile,
          favorite: action.payload,
        },
        select: {
          ...state.select,
          title: action.payload.map((data) => {
            return state.select.title.filter((pay) => {
              return data.game_title !== pay.game_title;
            });
          })[0],
        },
      };
    case SET_USER_NAME:
      return {
        ...state,
        profile: {
          ...state.profile,
          name: action.payload,
        },
      };
    case SET_ICON:
      return {
        ...state,
        profile: {
          ...state.profile,
          icon: action.payload,
        },
      };
    case ADD_FAVORITE_GAME:
      return {
        ...state,
        profile: {
          ...state.profile,
          favorite: [
            ...state.profile.favorite,
            {
              game_id: state.get.title.filter((data) => {
                return data.game_title === action.payload;
              })[0].id,
              game_title: action.payload,
            },
          ].sort((a, b) => {
            return dataSort(a, b);
          }),
        },
        select: {
          ...state.select,
          title: state.select.title
            .filter((pay) => {
              return action.payload !== pay.game_title;
            })
            .sort((a, b) => {
              return dataSort(a, b);
            }),
        },
      };
    case DELETE_FAVORITE_GAME:
      return {
        ...state,
        profile: {
          ...state.profile,
          favorite: state.profile.favorite
            .filter((pay) => {
              return action.payload !== pay.game_title;
            })
            .sort((a, b) => {
              return dataSort(a, b);
            }),
        },
        select: {
          ...state.select,
          title: [
            ...state.select.title,
            {
              id: state.get.title.filter((data) => {
                return data.game_title === action.payload;
              })[0].game_id,
              game_title: action.payload,
            },
          ].sort((a, b) => {
            return dataSort(a, b);
          }),
        },
      };
    case INPUT_USER_NAME:
      if (action.payload.error) {
        return {
          ...state,
          profile: {
            ...state.profile,
            name: action.payload.text,
          },
          error: {
            ...state.error,
            msg: {
              ...state.error.msg,
              name: action.payload.msg,
            },
            flag: {
              ...state.error.flag,
              name: action.payload.error,
            },
          },
        };
      }
      return {
        ...state,
        profile: {
          ...state.profile,
          name: action.payload.text,
        },
        error: {
          ...state.error,
          flag: {
            ...state.error.flag,
            name: action.payload.error,
          },
        },
      };
    case INPUT_USER_ICON:
      return {
        ...state,
        profile: {
          ...state.profile,
          icon: action.payload,
        },
      };
    case UPDATE_USER_PROFILE_OK:
      return {
        ...state,
        success: true,
      };
    case UPDATE_USER_PROFILE_NG:
      return {
        ...state,
        success: false,
      };
    case DELETE_SUCCESS_MESSAGE:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export default profileState;
