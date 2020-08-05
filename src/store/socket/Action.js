export const OPEN_SOCKET = "OPEN_SOCKET";
export const CLOSE_SOCKET = "CLOSE_SOCKET";
export const JOIN_ROOM_SOCKET = "JOIN_ROOM_SOCKET";
export const LEAVE_ROOM_SOCKET = "LEAVE_ROOM_SOCKET";
export const UPDATE_SOCKET_OBJECT = "UPDATE_SOCKET_OBJECT";

export const openSocket = () => {
  return {
    type: OPEN_SOCKET,
  };
};

export const closeSocket = () => {
  return {
    type: CLOSE_SOCKET,
  };
};

export const joinRoomSocket = (room_id) => {
  console.log(room_id);
  return {
    type: JOIN_ROOM_SOCKET,
    payload: room_id,
  };
};

export const leaveRoomSocket = (room_id) => {
  return {
    type: LEAVE_ROOM_SOCKET,
    payload: room_id,
  };
};

export const updateSocketObject = (socket) => {
  return {
    type: UPDATE_SOCKET_OBJECT,
    payload: socket,
  };
};
