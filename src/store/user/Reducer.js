import {
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
  GET_ME_ERROR,
  CHECK_ENTRY_REQUEST,
  CHECK_ENTRY_SUCCESS,
  CHECK_ENTRY_ERROR
} from './Action'

const initialState = {
  user: {
    user_id: null,
    user_name: null,
    icon: null,
  },
}

const userState = (state = initialState, action) => {
  switch (action.type) {
    case GET_ME_REQUEST:
      return {
        ...state,
      }
    case GET_ME_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          user_id: action.payload.data.user_id,
          user_name: action.payload.data.user_name,
          icon: action.payload.data.user_name,
        }
      }
    case GET_ME_ERROR:
      return {
        ...state,
        socketConnected: true,
      }
    case CHECK_ENTRY_REQUEST:
      return {
        ...state,
      }
    case CHECK_ENTRY_SUCCESS:
      return {
        ...state,
      }
    case CHECK_ENTRY_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default userState;
