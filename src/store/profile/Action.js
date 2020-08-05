export const GET_GAME_TITLE_REQ = "PROFIFE_GET_GAME_TITLE_REQ";
export const GET_GAME_TITLE_OK = "PROFIFE_GET_GAME_TITLE_OK";
export const GET_GAME_TITLE_NG = "PROFIFE_GET_GAME_TITLE_NG";
export const SET_FAVORITE_GAME = "SET_FAVORITE_GAME";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_ICON = "SET_ICON";
export const ADD_FAVORITE_GAME = "ADD_FAVORITE_GAME";
export const DELETE_FAVORITE_GAME = "DELETE_FAVORITE_GAME";
export const INPUT_USER_NAME = "INPUT_USER_NAME";
export const INPUT_USER_ICON = "INPUT_USER_ICON";
export const UPDATE_USER_PROFILE_REQ = "UPDATE_USER_PROFILE_REQ";
export const UPDATE_USER_PROFILE_OK = "UPDATE_USER_PROFILE_OK";
export const UPDATE_USER_PROFILE_NG = "UPDATE_USER_PROFILE_NG";
export const DELETE_SUCCESS_MESSAGE = "DELETE_SUCCESS_MESSAGE";

const GET_GAME_TITLE_URL = `/v1/gamelist`;
const PUT_USER_PROFILE_URL = `/v1/users`;

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

export const setUserName = (name) => {
  return {
    type: SET_USER_NAME,
    payload: name,
  };
};

export const setIcon = (icon) => {
  return {
    type: SET_ICON,
    payload: icon,
  };
};

export const addFavoriteGame = (favo) => {
  return {
    type: ADD_FAVORITE_GAME,
    payload: favo,
  };
};

export const deleteFavoriteGame = (favo) => {
  return {
    type: DELETE_FAVORITE_GAME,
    payload: favo,
  };
};

export const inputUserName = (data) => {
  return {
    type: INPUT_USER_NAME,
    payload: data,
  };
};

export const inputUserIcon = (icon) => {
  return {
    type: INPUT_USER_ICON,
    payload: icon,
  };
};

export const updateUserProfileReq = (data) => {
  return {
    type: UPDATE_USER_PROFILE_REQ,
    url: PUT_USER_PROFILE_URL,
    payload: data,
  };
};

export const updateUserProfileOk = () => {
  return {
    type: UPDATE_USER_PROFILE_OK,
  };
};

export const updateUserProfileNg = (data) => {
  return {
    type: UPDATE_USER_PROFILE_NG,
    payload: data,
  };
};

export const deleteSuccessMessage = () => {
  return {
    type: DELETE_SUCCESS_MESSAGE,
  };
};
