import {
  GET_GAME_TITLE_REQ,
  GET_GAME_TITLE_OK,
  GET_GAME_TITLE_NG,
  POST_ROOM_CREATION_REQ,
  POST_ROOM_CREATION_OK,
  POST_ROOM_CREATION_NG,
  SELECT_GAME_TITLE,
  SELECT_GAME_HARD,
  SELECT_START_TIME,
  INPUT_TEXT,
} from '../Action';

const initiaState = {
  data: {
    get_data: {
      title: [],
      hard: [{ hard_icon: 0 }, { hard_icon: 1 }, { hard_icon: 2 }, { hard_icon: 3 }],
    },
    error: {
      title: '',
      hard: '',
    },
    select: {
      title: '',
      hard: null,
      hard_flg: null,
      start: null,
      text: '',
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
          get_data: {
            ...state.data.get_data,
            title: action.payload,
          },
          error: {
            ...state.data.error,
            title: initiaState.data.error.title,
          },
        },
      };
    case GET_GAME_TITLE_NG:
      return {
        ...state,
        data: {
          ...state.data,
          get_data: {
            ...state.data.get_data,
            title: initiaState.data.get_data.title,
          },
          error: {
            ...state.data.error,
            title: action.error,
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
    case SELECT_GAME_TITLE:
      return {
        ...state,
        data: {
          ...state.data,
          select: {
            title: action.payload,
          },
        },
      };
    case SELECT_GAME_HARD:
      return {
        ...state,
        data: {
          ...state.data,
          select: {
            ...state.data.select,
            hard: action.payload,
            hard_flg: action.payload,
          },
        },
      };
    case SELECT_START_TIME:
      return {};
    case INPUT_TEXT:
      return {
        ...state,
        data: {
          ...state.data,
          select: {
            ...state.data.select,
            text: action.payload,
          },
        },
      };
    default:
      return state;
  }
};

export default roomCreationState;
