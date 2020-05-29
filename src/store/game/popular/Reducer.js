import { GET_POPULAR_GAMES_REQ, GET_POPULAR_GAMES_OK, GET_POPULAR_GAMES_NG } from '../Action';

const initiaState = {
  data: [],
  loadingFlag: false
}

const popularGamesState = (state = initiaState, action) => {
  switch(action.type) {
    case GET_POPULAR_GAMES_REQ:
      return {
          ...state,
          loadingFlag: true
      }
    case GET_POPULAR_GAMES_OK:
      return {
          ...state,
          data: action.payload,
          loadingFlag: false
      }
    case GET_POPULAR_GAMES_NG:
      return {
          ...state,
          loadingFlag: false
      }
    default: 
      return state
  }
}

export default popularGamesState;