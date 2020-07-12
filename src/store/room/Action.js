export const GET_ROOM_REQ = 'GET_ROOM_REQ';
export const GET_ROOM_OK = 'GET_ROOM_OK';
export const GET_ROOM_NG = 'GET_ROOM_NG';

export const getRoomReq = () => {
  return {
    type: GET_ROOM_REQ,
  };
};

export const getRoomOk = (data) => {
  return {
    type: GET_ROOM_OK,
    payload: data,
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

export const DELETE_ROOM_REQUEST = "DELETE_ROOM_REQUEST"
export const DELETE_ROOM_SUCCESS = "DELETE_ROOM_SUCCESS"
export const DELETE_ROOM_ERROR = "DELETE_ROOM_ERROR"

export const deleteRoomRequest = (data, history) => {
  return {
    type: DELETE_ROOM_REQUEST,
    payload: {
      room: data,
    },
    history: history
  };
};

export const deleteRoomSuccess = (data, callback) => {
  return {
    type: DELETE_ROOM_SUCCESS,
    payload: { room_id: data, callback: callback }
  };
};

export const deleteRoomError = (data) => {
  return {
    type: DELETE_ROOM_ERROR,
    payload: { data: data }
  };
};

export const GET_ROOM_DETAIL_REQUEST = "GET_ROOM_DETAIL_REQUEST"
export const GET_ROOM_DETAIL_SUCCESS = "GET_ROOM_DETAIL_SUCCESS"
export const GET_ROOM_DETAIL_ERROR = "GET_ROOM_DETAIL_ERROR"

export const getRoomDetailRequest = (data) => {
  return {
    type: GET_ROOM_DETAIL_REQUEST,
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

export const CREATED_CHATPOST = "CREATED_CHATPOST"

export const createdChatpost = (data) => {
  return {
    type: CREATED_CHATPOST,
    payload: data
  };
};

export const GET_CHATPOSTLIST_REQUEST = "GET_CHATPOSTLIST"
export const GET_CHATPOSTLIST_SUCCESS = "GET_CHATPOSTLIST_SUCCESS"
export const GET_CHATPOSTLIST_ERROR = "GET_CHATPOSTLIST_ERROR"

export const getChatpostListRequest = (room_id) => {
  return {
    type: GET_CHATPOSTLIST_REQUEST,
    payload: room_id
  };
};

export const getChatpostListSuccess = (data) => {
  return {
    type: GET_CHATPOSTLIST_SUCCESS,
    payload: data
  };
};

export const getChatpostListError = (err) => {
  return {
    type: GET_CHATPOSTLIST_ERROR,
    payload: err
  };
};

export const CREATE_CHATPOSTLIST_REQUEST = "CREATE_CHATPOSTLIST_REQUEST"
export const CREATE_CHATPOSTLIST_SUCCESS = "CREATE_CHATPOSTLIST_SUCCESS"
export const CREATE_CHATPOSTLIST_ERROR = "CREATE_CHATPOSTLIST_ERROR"

export const createChatpostListRequest = (room_id, message) => {
  return {
    type: CREATE_CHATPOSTLIST_REQUEST,
    payload: {
      room_id: room_id,
      message: message,
    }
  };
};

export const createChatpostListSuccess = (data) => {
  return {
    type: CREATE_CHATPOSTLIST_SUCCESS,
    payload: data
  };
};

export const createChatpostListError = (err) => {
  return {
    type: CREATE_CHATPOSTLIST_ERROR,
    payload: err
  };
};
