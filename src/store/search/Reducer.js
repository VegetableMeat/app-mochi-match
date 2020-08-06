import {
  GET_SEARCH_GAME_TITLE_REQ,
  GET_SEARCH_GAME_TITLE_OK,
  GET_SEARCH_GAME_TITLE_NG,
  GET_SEARCH_GAME_HARD_REQ,
  GET_SEARCH_GAME_HARD_OK,
  GET_SEARCH_GAME_HARD_NG,
} from "./Action";

const initiaState = {
  get: {
    title: [],
    hard: [],
  },
};

const searchState = (state = initiaState, action) => {
  switch (action.type) {
    case GET_SEARCH_GAME_TITLE_REQ:
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
    case GET_SEARCH_GAME_TITLE_NG:
      return {
        ...state,
      };
    case GET_SEARCH_GAME_HARD_REQ:
      return {
        ...state,
      };
    case GET_SEARCH_GAME_HARD_OK:
      return {
        ...state,
        get: {
          ...state.get,
          hard: action.payload,
        },
      };
    case GET_SEARCH_GAME_HARD_NG:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default searchState;
