export const GET_ROOM_REQ = 'GET_ROOM_REQ';
export const GET_ROOM_OK = 'GET_ROOM_OK';
export const GET_ROOM_NG = 'GET_ROOM_NG';

export const getRoomReq = () => {
  return {
    type: GET_ROOM_REQ,
    payload: [],
  };
};

export const getRoomOk = (payload) => {
  return {
    type: GET_ROOM_OK,
    payload: payload,
  };
};

export const getRoomNg = (error) => {
  return {
    type: GET_ROOM_NG,
    payload: error,
  };
};

// RoomCreation
export const GET_GAME_TITLE_REQ = 'GET_GAME_TITLE_REQ';
export const GET_GAME_TITLE_OK = 'GET_GAME_TITLE_OK';
export const GET_GAME_TITLE_NG = 'GET_GAME_TITLE_NG';
export const GET_GAME_HARD_REQ = 'GET_GAME_HARD_REQ';
export const GET_GAME_HARD_OK = 'GET_GAME_HARD_OK';
export const GET_GAME_HARD_NG = 'GET_GAME_HARD_NG';
export const POST_ROOM_CREATION_REQ = 'POST_ROOM_CREATION_REQ';
export const POST_ROOM_CREATION_OK = 'POST_ROOM_CREATION_OK';
export const POST_ROOM_CREATION_NG = 'POST_ROOM_CREATION_NG';
export const SELECT_GAME_TITLE = 'SELECT_GAME_TITLE';
export const SELECT_GAME_HARD = 'SELECT_GAME_HARD';
export const SELECT_START_TIME = 'SELECT_START_TIME';
export const INPUT_TEXT = 'INPUT_TEXT';

const POST_ROOM_CREATION_URL = '';
const GET_GAME_TITLE_URL = `/v1/gamelist`;
const GET_GAME_HARD_URL = '';

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

export const getGameTitleNg = (error) => {
  return {
    type: GET_GAME_TITLE_NG,
    error: error,
  };
};

export const postRoomCreationReq = (data) => {
  return {
    type: POST_ROOM_CREATION_REQ,
    payload: data,
    url: POST_ROOM_CREATION_URL,
  };
};

export const postRoomCreationOk = () => {
  return {
    type: POST_ROOM_CREATION_OK,
  };
};

export const postRoomCreationNg = () => {
  return {
    type: POST_ROOM_CREATION_NG,
  };
};

export const selectGameTitle = (data) => {
  return {
    type: SELECT_GAME_TITLE,
    payload: data,
  };
};

export const selectGameHard = (data) => {
  return {
    type: SELECT_GAME_HARD,
    payload: data,
  };
};

export const selectStartTime = () => {
  return {
    type: SELECT_START_TIME,
  };
};

export const inputText = (data) => {
  return {
    type: INPUT_TEXT,
    payload: data,
  };
};
