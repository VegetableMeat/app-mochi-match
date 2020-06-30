import { GET_FAVORITE_GAMES_REQ, GET_FAVORITE_GAMES_OK, GET_FAVORITE_GAMES_NG } from '../Action';

const initiaState = {
  data: [],
  loadingFlag: false,
};

const favoriteGamesState = (state = initiaState, action) => {
  switch (action.type) {
    case GET_FAVORITE_GAMES_REQ:
      return {
        ...state,
        loadingFlag: true,
      };
    case GET_FAVORITE_GAMES_OK:
      return {
        ...state,
        data: action.payload,
        loadingFlag: false,
      };
    case GET_FAVORITE_GAMES_NG:
      return {
        ...state,
        loadingFlag: false,
      };
    default:
      return state;
  }
};

export default favoriteGamesState;
