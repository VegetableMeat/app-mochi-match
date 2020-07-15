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
  SELECT_GAME_HARD,
  SELECT_CAPACITY,
  SELECT_START,
  SELECT_START_DATE,
  SELECT_START_TIME,
  INPUT_TEXT,
} from "../Action";

const initiaState = {
  data: {
    get_data: {
      title: [],
      hard: [],
    },
    error: {
      get_title: "",
      get_hard: "",
      input_title: true,
      input_hard: true,
      input_start: true,
      input_date: true,
      input_time: true,
      input_text: false,
      rec_text_msg: "何か入力してください",
    },
    select: {
      title: "選択してください",
      input_title: "",
      title_click_flg: null,
      hard: "選択してください",
      capacity: 4,
      start: false,
      date: "選択してください",
      time: "選択してください",
      text: "よろしくお願いします。",
    },
    button: {
      disable: true,
    },
  },
};

const roomCreationState = (state = initiaState, action) => {
  switch (action.type) {
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
            get_title: initiaState.data.error.title,
          },
          get_data: {
            ...state.data.get_data,
            title: action.payload,
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
            get_hard: initiaState.data.error.hard,
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
      };
    case INPUT_SELECT_GAME_TITLE:
      return {
        ...state,
        data: {
          ...state.data,
          error: {
            ...state.data.error,
            input_title: action.payload.error,
          },
          select: {
            ...state.data.select,
            input_title: action.payload.text,
            title: action.payload.data,
            title_click_flg: false,
          },
          button: {
            ...state.data.button,
            disable: allErrorCheck(state.data.error),
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
            input_title: false,
          },
          select: {
            ...state.data.select,
            input_title: "",
            title: action.payload,
            title_click_flg: true,
          },
          button: {
            ...state.data.button,
            disable: allErrorCheck(state.data.error),
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
            input_hard: false,
          },
          select: {
            ...state.data.select,
            hard: action.payload,
          },
          button: {
            ...state.data.button,
            disable: allErrorCheck(state.data.error),
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
          button: {
            ...state.data.button,
            disable: allErrorCheck(state.data.error),
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
          button: {
            ...state.data.button,
            disable: allErrorCheck(state.data.error),
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
            input_date: false,
          },
          select: {
            ...state.data.select,
            date: action.payload,
          },
          button: {
            ...state.data.button,
            disable: allErrorCheck(state.data.error),
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
            input_time: false,
          },
          select: {
            ...state.data.select,
            time: action.payload,
          },
          button: {
            ...state.data.button,
            disable: allErrorCheck(state.data.error),
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
            input_text: action.payload.error,
          },
          select: {
            ...state.data.select,
            text: action.payload.text,
          },
          button: {
            ...state.data.button,
            disable: allErrorCheck(state.data.error),
          },
        },
      };
    default:
      return state;
  }
};

// TODO: 後で実装する
const allErrorCheck = (error) => {
  // console.log("error", error);
};

export default roomCreationState;
