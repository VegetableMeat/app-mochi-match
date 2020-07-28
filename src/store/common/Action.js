// Modal
export const SHOW_MODAL_TRUE = "SHOW_MODAL_TRUE";
export const SHOW_MODAL_FALSE = "SHOW_MODAL_FALSE";
// export const SHOW_MODAL_REPORT = 'SHOW_MODAL_REPORT';
// export const FINAL_CONFIRMATION = "FINAL_CONFIRMATION";
// export const END_MODAL = "END_MODAL";
export const SHOW_MODAL_FRONT = "SHOW_MODAL_FRONT";
export const SHOW_MODAL_BACK = "SHOW_MODAL_BACK";
export const MODAL_CHECK = "MODAL_CHECK";

export const showModalTrue = (category, key, data) => {
  return {
    type: SHOW_MODAL_TRUE,
    category: category,
    key: key,
    payload: data,
  };
};

export const showModalFalse = () => {
  return {
    type: SHOW_MODAL_FALSE,
    category: null,
    payload: {},
  };
};

export const showModalFront = (category, key, data) => {
  return {
    type: SHOW_MODAL_FRONT,
    category: category,
    key: key,
    payload: data,
  };
};

export const showModalBack = () => {
  return {
    type: SHOW_MODAL_BACK,
  };
};

export const modalCheck = (data, toggle) => {
  return {
    type: MODAL_CHECK,
    payload: data,
    toggle: toggle,
  };
};

//HeaderMenu
export const SHOW_HEADER_MENU_TRUE = "SHOW_HEADER_MENU_TRUE";
export const SHOW_HEADER_MENU_FALSE = "SHOW_HEADER_MENU_FALSE";
export const INIT_HEADER_MENU = "INIT_HEADER_MENU";

export const showHeaderMenuTrue = () => {
  return {
    type: SHOW_HEADER_MENU_TRUE,
  };
};

export const showHeaderMenuFalse = () => {
  return {
    type: SHOW_HEADER_MENU_FALSE,
  };
};

export const initHeaderMenu = () => {
  return {
    type: INIT_HEADER_MENU,
  };
};

// Auth
export const AUTH_REQ = "AUTH_REQ";

export const authReq = () => {
  return {
    type: AUTH_REQ,
  };
};

// Login
export const LOGIN_REQ = "LOGIN_REQ";
export const LOGIN_OK = "LOGIN_OK";
export const LOGIN_NG = "LOGIN_NG";
export const LOGOUT_REQ = "LOGOUT_REQ";
export const LOGOUT = "LOGOUT";

export const loginReq = () => {
  return {
    type: LOGIN_REQ,
  };
};

export const loginOk = () => {
  return {
    type: LOGIN_OK,
  };
};

export const loginNg = () => {
  return {
    type: LOGIN_NG,
  };
};

export const logoutReq = () => {
  return {
    type: LOGOUT_REQ,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// Admin
//ゲームタイトル
export const ADMIN_GAME_TITLE_GET_REQ = "ADMIN_GAME_TITLE_GET_REQ";
export const ADMIN_GAME_TITLE_GET_OK = "ADMIN_GAME_TITLE_GET_OK";
export const ADMIN_GAME_TITLE_GET_NG = "ADMIN_GAME_TITLE_GET_NG";
export const ADMIN_GAME_TITLE_ADD_REQ = "ADMIN_GAME_TITLE_ADD_REQ";
export const ADMIN_GAME_TITLE_ADD_OK = "ADMIN_GAME_TITLE_ADD_OK";
export const ADMIN_GAME_TITLE_ADD_NG = "ADMIN_GAME_TITLE_ADD_NG";
export const ADMIN_GAME_TITLE_DELETE_REQ = "ADMIN_GAME_TITLE_DELETE_REQ";
export const ADMIN_GAME_TITLE_DELETE_OK = "ADMIN_GAME_TITLE_DELETE_OK";
export const ADMIN_GAME_TITLE_DELETE_NG = "ADMIN_GAME_TITLE_DELETE_NG";
export const ADMIN_GAME_TITLE_UPDATE_REQ = "ADMIN_GAME_TITLE_UPDATE_REQ";
export const ADMIN_GAME_TITLE_UPDATE_OK = "ADMIN_GAME_TITLE_UPDATE_OK";
export const ADMIN_GAME_TITLE_UPDATE_NG = "ADMIN_GAME_TITLE_UPDATE_NG";
export const GAME_TITLE_TEXT = "GAME_TITLE_TEXT";
export const GAME_TITLE_CHECK = "GAME_TITLE_CHECK";
//ゲームハード
export const ADMIN_GAME_HARD_GET_REQ = "ADMIN_GAME_HARD_GET_REQ";
export const ADMIN_GAME_HARD_GET_OK = "ADMIN_GAME_HARD_GET_OK";
export const ADMIN_GAME_HARD_GET_NG = "ADMIN_GAME_HARD_GET_NG";
export const ADMIN_GAME_HARD_ADD_REQ = "ADMIN_GAME_HARD_ADD_REQ";
export const ADMIN_GAME_HARD_ADD_OK = "ADMIN_GAME_HARD_ADD_OK";
export const ADMIN_GAME_HARD_ADD_NG = "ADMIN_GAME_HARD_ADD_NG";
export const ADMIN_GAME_HARD_DELETE_REQ = "ADMIN_GAME_HARD_DELETE_REQ";
export const ADMIN_GAME_HARD_DELETE_OK = "ADMIN_GAME_HARD_DELETE_OK";
export const ADMIN_GAME_HARD_DELETE_NG = "ADMIN_GAME_HARD_DELETE_NG";
export const ADMIN_GAME_HARD_UPDATE_REQ = "ADMIN_GAME_HARD_UPDATE_REQ";
export const ADMIN_GAME_HARD_UPDATE_OK = "ADMIN_GAME_HARD_UPDATE_OK";
export const ADMIN_GAME_HARD_UPDATE_NG = "ADMIN_GAME_HARD_UPDATE_NG";
export const GAME_HARD_CHECK = "GAME_HARD_CHECK";
export const GAME_HARD_TEXT = "GAME_HARD_TEXT";

const GAME_TITLE_LIST_URL = `/v1/gamelist`;
const GAME_HARD_LIST_URL = `/v1/gamehard`;

export const adminGameTitleGetReq = () => {
  return {
    type: ADMIN_GAME_TITLE_GET_REQ,
    url: GAME_TITLE_LIST_URL,
  };
};

export const adminGameTitleGetOk = (data) => {
  return {
    type: ADMIN_GAME_TITLE_GET_OK,
    payload: data,
  };
};

export const adminGameTitleGetNg = (error) => {
  return {
    type: ADMIN_GAME_TITLE_GET_NG,
    error: error,
  };
};

export const adminGameTitleAddReq = (data) => {
  return {
    type: ADMIN_GAME_TITLE_ADD_REQ,
    payload: data,
    url: GAME_TITLE_LIST_URL,
  };
};

export const adminGameTitleAddOk = (data) => {
  return {
    type: ADMIN_GAME_TITLE_ADD_OK,
    payload: data,
  };
};

export const adminGameTitleAddNg = (error) => {
  return {
    type: ADMIN_GAME_TITLE_ADD_NG,
    error: error,
  };
};

export const adminGameTitleDeleteReq = (data) => {
  return {
    type: ADMIN_GAME_TITLE_DELETE_REQ,
    payload: data,
    url: GAME_TITLE_LIST_URL,
  };
};

export const adminGameTitleDeleteOk = (data) => {
  return {
    type: ADMIN_GAME_TITLE_DELETE_OK,
    payload: data,
  };
};

export const adminGameTitleDeleteNg = (error) => {
  return {
    type: ADMIN_GAME_TITLE_DELETE_NG,
    error: error,
  };
};

export const adminGameTitleUpdateReq = (text, check) => {
  return {
    type: ADMIN_GAME_TITLE_UPDATE_REQ,
    text: text,
    check: check,
    url: GAME_TITLE_LIST_URL,
  };
};

export const adminGameTitleUpdateOk = (data) => {
  return {
    type: ADMIN_GAME_TITLE_UPDATE_OK,
    payload: data,
  };
};

export const adminGameTitleUpdateNg = (error) => {
  return {
    type: ADMIN_GAME_TITLE_UPDATE_NG,
    error: error,
  };
};

export const gameTitleText = (data) => {
  return {
    type: GAME_TITLE_TEXT,
    payload: data,
  };
};

export const gameTitleCheck = (data, toggle) => {
  return {
    type: GAME_TITLE_CHECK,
    payload: data,
    toggle: toggle,
  };
};

export const adminGameHardGetReq = () => {
  return {
    type: ADMIN_GAME_HARD_GET_REQ,
    url: GAME_HARD_LIST_URL,
  };
};

export const adminGameHardGetOk = (data) => {
  return {
    type: ADMIN_GAME_HARD_GET_OK,
    payload: data,
  };
};

export const adminGameHardGetNg = (error) => {
  return {
    type: ADMIN_GAME_HARD_GET_NG,
    error: error,
  };
};

export const adminGameHardAddReq = (data) => {
  return {
    type: ADMIN_GAME_HARD_ADD_REQ,
    payload: data,
    url: GAME_HARD_LIST_URL,
  };
};

export const adminGameHardAddOk = (data) => {
  return {
    type: ADMIN_GAME_HARD_ADD_OK,
    payload: data,
  };
};

export const adminGameHardAddNg = (error) => {
  return {
    type: ADMIN_GAME_HARD_ADD_NG,
    error: error,
  };
};

export const adminGameHardDeleteReq = (data) => {
  return {
    type: ADMIN_GAME_HARD_DELETE_REQ,
    payload: data,
    url: GAME_HARD_LIST_URL,
  };
};

export const adminGameHardDeleteOk = (data) => {
  return {
    type: ADMIN_GAME_HARD_DELETE_OK,
    payload: data,
  };
};

export const adminGameHardDeleteNg = (error) => {
  return {
    type: ADMIN_GAME_HARD_DELETE_NG,
    error: error,
  };
};

export const adminGameHardUpdateReq = (text, check) => {
  return {
    type: ADMIN_GAME_HARD_UPDATE_REQ,
    text: text,
    check: check,
    url: GAME_HARD_LIST_URL,
  };
};

export const adminGameHardUpdateOk = (data) => {
  return {
    type: ADMIN_GAME_HARD_UPDATE_OK,
    payload: data,
  };
};

export const adminGameHardUpdateNg = (error) => {
  return {
    type: ADMIN_GAME_HARD_UPDATE_NG,
    error: error,
  };
};

export const gameHardText = (data) => {
  return {
    type: GAME_HARD_TEXT,
    payload: data,
  };
};

export const gameHardCheck = (data, toggle) => {
  return {
    type: GAME_HARD_CHECK,
    payload: data,
    toggle: toggle,
  };
};
