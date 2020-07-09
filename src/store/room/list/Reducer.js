import {
  GET_ROOM_REQ,
  GET_ROOM_OK,
  GET_ROOM_NG
} from '../Action';

const initiaState = {
  data: [],
  loadingFlag: false,
};

const roomListState = (state = initiaState, action) => {
  switch (action.type) {
    case GET_ROOM_REQ:
      return {
        ...state,
        loadingFlag: true,
      };
    case GET_ROOM_OK:
      return {
        ...state,
        data: action.payload,
        loadingFlag: false,
      };
    case GET_ROOM_NG:
      return {
        ...state,
        loadingFlag: false,
      };
    default:
      return state;
  }
};

export default roomListState;
