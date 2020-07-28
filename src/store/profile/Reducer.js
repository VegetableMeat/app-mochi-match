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
  // cancel: {
  //   name: null,
  //   icon: null,
  //   favorite: [],
  // },
  error: {
    get: {
      title: true,
    },
    msg: {
      name: null,
    },
    flag: {
      name: false,
      // icon: false,
      // favorite: false,
    },
  },
  list: {
    title: [],
  },
  select: {
    title: [],
  },
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
    default:
      return state;
  }
};

export default profileState;

const dataSort = (a, b) => {
  let A = a.game_title.toUpperCase();
  let B = b.game_title.toUpperCase();
  if (A < B) return -1;
  if (A > B) return 1;
  return 0;
};
