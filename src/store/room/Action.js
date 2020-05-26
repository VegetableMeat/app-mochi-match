export const GET_ROOM_REQ = 'GET_ROOM_REQ';
export const GET_ROOM_OK = 'GET_ROOM_OK';
export const GET_ROOM_NG = 'GET_ROOM_NG';

export const getRoomReq = () => {
  return {
    type: GET_ROOM_REQ,
    payload: []
  }
}

export const getRoomOk = (payload) => {
  return {
    type: GET_ROOM_OK,
    payload: payload
  }
}

export const getRoomNg = (error) => {
  return {
    type: GET_ROOM_NG,
    payload: error
  }
}