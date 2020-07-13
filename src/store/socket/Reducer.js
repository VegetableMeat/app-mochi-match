import { OPEN_SOCKET, CLOSE_SOCKET, UPDATE_SOCKET_OBJECT } from "./Action";

const initialState = {
  socket: null,
  socketConnected: false,
};

const socketState = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SOCKET:
      return {
        ...state,
        socketConnected: true,
      };
    case CLOSE_SOCKET:
      return {
        ...state,
        socketConnected: false,
      };
    case UPDATE_SOCKET_OBJECT:
      return {
        ...state,
        socket: action.payload,
      };
    default:
      return state;
  }
};

export default socketState;
