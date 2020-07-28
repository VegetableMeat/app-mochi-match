import {
  GET_HISTORY_REQUEST,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_ERROR,
} from "./Action";

const initialState = {
  history: [],
  modalUser: [],
};

const historyState = (state = initialState, action) => {
  switch (action.type) {
    case GET_HISTORY_REQUEST:
      return {
        ...state,
      };
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload.data,
      };
    case GET_HISTORY_ERROR:
      return {
        ...state,
        socketConnected: true,
      };
    default:
      return state;
  }
};

export default historyState;
