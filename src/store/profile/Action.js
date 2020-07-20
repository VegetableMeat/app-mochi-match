export const GET_GAME_TITLE_REQ = "PROFIFE_GET_GAME_TITLE_REQ";
export const GET_GAME_TITLE_OK = "PROFIFE_GET_GAME_TITLE_OK";
export const GET_GAME_TITLE_NG = "PROFIFE_GET_GAME_TITLE_NG";
export const SET_FAVORITE_GAME = "SET_FAVORITE_GAME";
export const INPUT_USER_NAME = "INPUT_USER_NAME";
export const INPUT_FAVORITE_GAME = "INPUT_FAVORITE_GAME";

const GET_GAME_TITLE_URL = `/v1/gamelist`;

export const getGameTitleReq = () => {
  return {
    type: GET_GAME_TITLE_REQ,
    url: GET_GAME_TITLE_URL,
  };
};

export const getGameTitleOk = (data) => {
  return {
    type: GET_GAME_TITLE_OK,
    payload: data,
  };
};

export const getGameTitleNg = (err) => {
  return {
    type: GET_GAME_TITLE_NG,
    payload: err,
  };
};

export const setFavoriteGame = (favo) => {
  return {
    type: SET_FAVORITE_GAME,
    payload: favo,
  };
};

export const inputUserName = (name) => {
  return {
    type: INPUT_USER_NAME,
    payload: name,
  };
};

export const inputFavoriteGame = (game) => {
  return {
    type: INPUT_USER_NAME,
    payload: game,
  };
};
