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
export const POST_ROOM_CREATION_REQ = 'POST_ROOM_CREATION_REQ';
export const POST_ROOM_CREATION_OK = 'POST_ROOM_CREATION_OK';
export const POST_ROOM_CREATION_NG = 'POST_ROOM_CREATION_NG';
export const SELECT_GAME_TITLE = 'SELECT_GAME_TITLE';
export const SELECT_GAME_HARD = 'SELECT_GAME_HARD';
export const SELECT_START_TIME = 'SELECT_START_TIME';
export const INPUT_TEXT = 'INPUT_TEXT';

const POST_ROOM_CREATION_URL = ``;

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
