import {
  GET_GAME_TITLE_REQ,
  GET_GAME_TITLE_OK,
  GET_GAME_TITLE_NG,
  GET_GAME_HARD_REQ,
  GET_GAME_HARD_OK,
  GET_GAME_HARD_NG,
  POST_ROOM_CREATION_REQ,
  POST_ROOM_CREATION_OK,
  POST_ROOM_CREATION_NG,
  INPUT_SELECT_GAME_TITLE,
  CLICK_SELECT_GAME_TITLE,
  SELECT_TITLE_ON_CLICK,
  SELECT_GAME_HARD,
  SELECT_CAPACITY,
  SELECT_START,
  SELECT_START_DATE,
  SELECT_START_TIME,
  INPUT_TEXT,
  ROOM_CREATION_INIT,
} from "../Action";

const initiaState = {
  data: {
    get_data: {
      title: [],
      hard: [],
    },
    error: {
      msg: {
        title: "ゲームタイトルが選択されていません",
        hard: "ゲームハードが選択されていません",
        date: "日付が選択されていません",
        time: "時間が選択されていません",
        text: "募集テキストは必ず入力して下さい",
      },
      flag: {
        title: true,
        hard: true,
        start: false,
        date: true,
        time: true,
        text: false,
      },
      default: {
        title: false,
        hard: false,
      },
      get_title: "",
      get_hard: "",
    },
    select: {
      title: null,
      input_title: "",
      title_click_flg: null,
      hard: null,
      capacity: 4,
      start: false,
      date: null,
      time: null,
      text: "よろしくお願いします。",
    },
  },
};

const roomCreationState = (state = initiaState, action) => {
  switch (action.type) {
    case ROOM_CREATION_INIT:
      return {
        ...state,
        data: initiaState.data,
      };
    case GET_GAME_TITLE_REQ:
      return {
        ...state,
      };
    case GET_GAME_TITLE_OK:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            get_title: initiaState.data.error.get_title,
          },
          get_data: {
            ...state.data.get_data,
            title: action.payload.sort((a, b) => {
              return dataSort(a, b);
            }),
          },
        },
      };
    case GET_GAME_TITLE_NG:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            get_title: action.error,
          },
          get_data: {
            ...state.data.get_data,
            title: initiaState.data.get_data.title,
          },
        },
      };
    case GET_GAME_HARD_REQ:
      return {
        ...state,
      };
    case GET_GAME_HARD_OK:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            get_hard: initiaState.data.error.get_hard,
          },
          get_data: {
            ...state.data.get_data,
            hard: action.payload,
          },
        },
      };
    case GET_GAME_HARD_NG:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            get_hard: action.error,
          },
          get_data: {
            ...state.data.get_data,
            hard: initiaState.data.get_data.hard,
          },
        },
      };
    case POST_ROOM_CREATION_REQ:
      return {
        ...state,
      };
    case POST_ROOM_CREATION_OK:
      return {
        ...state,
      };
    case POST_ROOM_CREATION_NG:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            default: {
              ...state.data.error.default,
              title: action.err.title,
              hard: action.err.hard,
            },
          },
        },
      };
    case INPUT_SELECT_GAME_TITLE:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            flag: {
              ...state.data.error.flag,
              title: action.payload.error,
            },
          },
          select: {
            ...state.data.select,
            input_title: action.payload.text,
            title: state.data.get_data.title.filter((data) => {
              return data.game_title === action.payload.data;
            })[0].id,
            title_click_flg: false,
          },
        },
      };
    case CLICK_SELECT_GAME_TITLE:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            flag: {
              ...state.data.error.flag,
              title: false,
            },
          },
          select: {
            ...state.data.select,
            input_title: state.data.get_data.title.filter((data) => {
              return data.id === action.payload;
            })[0].game_title,
            title: action.payload,
            title_click_flg: true,
          },
        },
      };
    case SELECT_TITLE_ON_CLICK:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            default: {
              ...state.data.error.default,
              title: true,
            },
          },
        },
      };
    case SELECT_GAME_HARD:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            flag: {
              ...state.data.error.flag,
              hard: false,
            },
          },
          select: {
            ...state.data.select,
            hard: action.payload,
          },
        },
      };
    case SELECT_CAPACITY:
      return {
        ...state,
        data: {
          ...state.data,
          select: {
            ...state.data.select,
            capacity: action.payload,
          },
        },
      };
    case SELECT_START:
      return {
        ...state,
        data: {
          ...state.data,
          select: {
            ...state.data.select,
            start: action.payload,
          },
        },
      };
    case SELECT_START_DATE:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            flag: {
              ...state.data.error.flag,
              date: false,
            },
          },
          select: {
            ...state.data.select,
            date: action.payload,
          },
        },
      };
    case SELECT_START_TIME:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            flag: {
              ...state.data.error.flag,
              time: false,
            },
          },
          select: {
            ...state.data.select,
            time: action.payload,
          },
        },
      };
    case INPUT_TEXT:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            flag: {
              ...state.data.error.flag,
              text: action.payload.error,
            },
          },
          select: {
            ...state.data.select,
            text: action.payload.text,
          },
        },
      };
    default:
      return state;
  }
};

export default roomCreationState;

const dataSort = (a, b) => {
  let A = a.game_title.toUpperCase();
  let B = b.game_title.toUpperCase();
  if (A < B) return -1;
  if (A > B) return 1;
  return 0;
};
