import {
  GET_HISTORY_REQUEST,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_ERROR,
} from "./Action";

const initialState = {
  history: null,
  modalUser: [],
  loadingFlag: true,
};

const historyState = (state = initialState, action) => {
  switch (action.type) {
    case GET_HISTORY_REQUEST:
      return {
        ...state,
        loadingFlag: true,
      };
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload.data,
        loadingFlag: false,
      };
    case GET_HISTORY_ERROR:
      return {
        ...state,
        socketConnected: true,
        loadingFlag: false,
      };
    default:
      return state;
  }
};

export default historyState;
