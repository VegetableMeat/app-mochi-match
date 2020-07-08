export const GET_ROOM_REQ = 'GET_ROOM_REQ';
export const GET_ROOM_OK = 'GET_ROOM_OK';
export const GET_ROOM_NG = 'GET_ROOM_NG';

export const getRoomReq = () => {
  console.log("getRoomReq")
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

export const JOIN_ROOM_REQUEST = "JOIN_ROOM_REQUEST"
export const JOIN_ROOM_SUCCESS = "JOIN_ROOM_SUCCESS"
export const JOIN_ROOM_ERROR = "JOIN_ROOM_ERROR"

export const joinRoomRequest = (data, callback) => {
  return {
    type: JOIN_ROOM_REQUEST,
    payload: {
      room: data,
      callback: callback
    }
  };
};

export const joinRoomSuccess = (data, callback) => {
  return {
    type: JOIN_ROOM_SUCCESS,
    payload: { room_id: data, callback: callback }
  };
};

export const joinRoomError = (data) => {
  return {
    type: JOIN_ROOM_ERROR,
    payload: { data: data }
  };
};

export const LEAVE_ROOM_REQUEST = "LEAVE_ROOM_REQUEST"
export const LEAVE_ROOM_SUCCESS = "LEAVE_ROOM_SUCCESS"
export const LEAVE_ROOM_ERROR = "LEAVE_ROOM_ERROR"

export const leaveRoomRequest = (data, history) => {
  return {
    type: LEAVE_ROOM_REQUEST,
    payload: {
      room: data,
    },
    history: history
  };
};

export const leaveRoomSuccess = (data, callback) => {
  return {
    type: LEAVE_ROOM_SUCCESS,
    payload: { room_id: data, callback: callback }
  };
};

export const leaveRoomError = (data) => {
  return {
    type: LEAVE_ROOM_ERROR,
    payload: { data: data }
  };
};

export const GET_ROOM_DETAIL_REQUEST = "GET_ROOM_REQUEST"
export const GET_ROOM_DETAIL_SUCCESS = "GET_ROOM_SUCCESS"
export const GET_ROOM_DETAIL_ERROR = "GET_ROOM_ERROR"

export const getRoomDetailRequest = (data) => {
  return {
    type: JOIN_ROOM_REQUEST,
    payload: {
      room_id: data
    }
  };
};

export const getRoomDetailSuccess = (data) => {
  return {
    type: GET_ROOM_DETAIL_SUCCESS,
    payload: data
  };
};

export const getRoomDetailError = (data) => {
  return {
    type: GET_ROOM_DETAIL_ERROR
  };
};

export const ALREADY_ENTRY = "ALREADY_ENTRY"

export const alreadyEntry = (data) => {
  return {
    type: ALREADY_ENTRY,
    payload: data
  };
};