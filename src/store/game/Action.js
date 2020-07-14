// Favorite
export const GET_FAVORITE_GAMES_REQ = "GET_FAVORITE_GAMES_REQ";
export const GET_FAVORITE_GAMES_OK = "GET_FAVORITE_GAMES_OK";
export const GET_FAVORITE_GAMES_NG = "GET_FAVORITE_GAMES_NG";

export const getFavoriteGamesReq = () => {
  return {
    type: GET_FAVORITE_GAMES_REQ,
    payload: [],
  };
};

export const getFavoriteGamesOk = (payload) => {
  return {
    type: GET_FAVORITE_GAMES_OK,
    payload: payload,
  };
};

export const getFavoriteGamesNg = (error) => {
  return {
    type: GET_FAVORITE_GAMES_NG,
    payload: error,
  };
};

// Popular
export const GET_POPULAR_GAMES_REQ = "GET_POPULAR_GAMES_REQ";
export const GET_POPULAR_GAMES_OK = "GET_POPULAR_GAMES_OK";
export const GET_POPULAR_GAMES_NG = "GET_POPULAR_GAMES_NG";

export const getPopularGamesReq = () => {
  return {
    type: GET_POPULAR_GAMES_REQ,
    payload: [],
  };
};

export const getPopularGamesOk = (payload) => {
  return {
    type: GET_POPULAR_GAMES_OK,
    payload: payload,
  };
};

export const getPopularGamesNg = (error) => {
  return {
    type: GET_POPULAR_GAMES_NG,
    payload: error,
  };
};
