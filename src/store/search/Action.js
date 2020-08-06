export const GET_SEARCH_GAME_TITLE_REQ = "GET_SEARCH_GAME_TITLE_REQ";
export const GET_SEARCH_GAME_TITLE_OK = "GET_SEARCH_GAME_TITLE_OK";
export const GET_SEARCH_GAME_TITLE_NG = "GET_SEARCH_GAME_TITLE_NG";
export const GET_SEARCH_GAME_HARD_REQ = "GET_SEARCH_GAME_HARD_REQ";
export const GET_SEARCH_GAME_HARD_OK = "GET_SEARCH_GAME_HARD_OK";
export const GET_SEARCH_GAME_HARD_NG = "GET_SEARCH_GAME_HARD_NG";
export const POST_SEARCH_ROOM_REQ = "POST_SEARCH_ROOM_REQ";
export const POST_SEARCH_ROOM_OK = "POST_SEARCH_ROOM_OK";
export const POST_SEARCH_ROOM_NG = "POST_SEARCH_ROOM_NG";
export const SET_SEARCH_TITLE = "SET_SEARCH_TITLE";
export const SET_SEARCH_HARD = "SET_SEARCH_HARD";
export const REMOVE_SEARCH_TITLE = "REMOVE_SEARCH_TITLE";
export const REMOVE_SEARCH_HARD = "REMOVE_SEARCH_HARD";

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

export const postSearchRoomReq = () => {
  return {
    type: POST_SEARCH_ROOM_REQ,
  };
};

export const postSearchRoomOk = () => {
  return {
    type: POST_SEARCH_ROOM_OK,
  };
};

export const postSearchRoomNg = () => {
  return {
    type: POST_SEARCH_ROOM_NG,
  };
};

export const setSearchTitle = (data) => {
  return {
    type: SET_SEARCH_TITLE,
    payload: data,
  };
};

export const setSearchHard = (data) => {
  return {
    type: SET_SEARCH_HARD,
    payload: data,
  };
};

export const removeSearchTitle = (data) => {
  return {
    type: REMOVE_SEARCH_TITLE,
    payload: data,
  };
};

export const removeSearchHard = (data) => {
  return {
    type: REMOVE_SEARCH_HARD,
    payload: data,
  };
};
