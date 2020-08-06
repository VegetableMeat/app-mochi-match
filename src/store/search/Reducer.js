import {
  GET_SEARCH_GAME_TITLE_REQ,
  GET_SEARCH_GAME_TITLE_OK,
  GET_SEARCH_GAME_TITLE_NG,
  GET_SEARCH_GAME_HARD_REQ,
  GET_SEARCH_GAME_HARD_OK,
  GET_SEARCH_GAME_HARD_NG,
  POST_SEARCH_ROOM_REQ,
  POST_SEARCH_ROOM_OK,
  POST_SEARCH_ROOM_NG,
  SET_SEARCH_TITLE,
  SET_SEARCH_HARD,
  REMOVE_SEARCH_TITLE,
  REMOVE_SEARCH_HARD,
} from "./Action";

const initiaState = {
  get: {
    title: [],
    hard: [],
  },
  post: {
    title: null,
    hard: null,
  },
};

const searchState = (state = initiaState, action) => {
  switch (action.type) {
    case GET_SEARCH_GAME_TITLE_REQ:
    case GET_SEARCH_GAME_TITLE_NG:
    case GET_SEARCH_GAME_HARD_REQ:
    case GET_SEARCH_GAME_HARD_NG:
    case POST_SEARCH_ROOM_REQ:
    case POST_SEARCH_ROOM_OK:
      return {
        ...state,
      };
    case GET_SEARCH_GAME_TITLE_OK:
      return {
        ...state,
        get: {
          ...state.get,
          title: action.payload,
        },
      };
    case GET_SEARCH_GAME_HARD_OK:
      return {
        ...state,
        get: {
          ...state.get,
          hard: action.payload,
        },
      };
    case SET_SEARCH_TITLE:
      return {
        ...state,
        post: {
          ...state.post,
          title: state.get.title.filter((data) => {
            return data.game_title === action.payload;
          })[0],
        },
      };
    case SET_SEARCH_HARD:
      return {
        ...state,
        post: {
          ...state.post,
          hard: state.get.hard.filter((data) => {
            return data.hard_name === action.payload;
          })[0],
        },
      };
    case REMOVE_SEARCH_TITLE:
      return {
        ...state,
        post: {
          ...state.post,
          title: action.payload,
        },
      };
    case REMOVE_SEARCH_HARD:
      return {
        ...state,
        post: {
          ...state.post,
          hard: action.payload,
        },
      };
    default:
      return state;
  }
};

export default searchState;
