export const GET_SEARCH_GAME_TITLE_REQ = "GET_SEARCH_GAME_TITLE_REQ";
export const GET_SEARCH_GAME_TITLE_OK = "GET_SEARCH_GAME_TITLE_OK";
export const GET_SEARCH_GAME_TITLE_NG = "GET_SEARCH_GAME_TITLE_NG";
export const GET_SEARCH_GAME_HARD_REQ = "GET_SEARCH_GAME_HARD_REQ";
export const GET_SEARCH_GAME_HARD_OK = "GET_SEARCH_GAME_HARD_OK";
export const GET_SEARCH_GAME_HARD_NG = "GET_SEARCH_GAME_HARD_NG";

const GET_GAME_TITLE_URL = `/v1/gamelist`;
const GET_GAME_HARD_URL = `/v1/gamehard`;

export const getSearchGameTitleReq = () => {
  return {
    type: GET_SEARCH_GAME_TITLE_REQ,
    url: GET_GAME_TITLE_URL,
  };
};

export const getSearchGameTitleOk = (data) => {
  return {
    type: GET_SEARCH_GAME_TITLE_OK,
    payload: data,
  };
};

export const getSearchGameTitleNg = (err) => {
  return {
    type: GET_SEARCH_GAME_TITLE_OK,
    err: err,
  };
};

export const getSearchGameHardReq = () => {
  return {
    type: GET_SEARCH_GAME_HARD_REQ,
    url: GET_GAME_HARD_URL,
  };
};

export const getSearchGameHardOk = (data) => {
  return {
    type: GET_SEARCH_GAME_HARD_OK,
    payload: data,
  };
};

export const getSearchGameHardNg = (err) => {
  return {
    type: GET_SEARCH_GAME_HARD_NG,
    err: err,
  };
};
