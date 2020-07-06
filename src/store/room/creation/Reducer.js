import {
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
    title_list: '',
    hard_list: [{ hard_icon: 0 }, { hard_icon: 1 }, { hard_icon: 2 }, { hard_icon: 3 }],
    select_title: '',
    select_hard: null,
    select_hard_flg: null,
    select_start: null,
    select_text: '',
  },
};

const roomCreationState = (state = initiaState, action) => {
  switch (action.type) {
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
          select_title: action.payload,
        },
      };
    case SELECT_GAME_HARD:
      return {
        ...state,
        data: {
          ...state.data,
          select_hard: action.payload,
          select_hard_flg: action.payload,
        },
      };
    case SELECT_START_TIME:
      return {};
    case INPUT_TEXT:
      return {
        ...state,
        data: {
          ...state.data,
          select_text: action.payload,
        },
      };
    default:
      return state;
  }
};

export default roomCreationState;
