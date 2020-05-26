import { GET_ROOM_REQ, GET_ROOM_OK, GET_ROOM_NG } from './Action';

const initiaState = {
  type: '',
  payload: []
}

const roomListState = (state = initiaState, action) => {
  switch(action.type) {
    case GET_ROOM_REQ:
      return [
        ...state,
        {
          type: action.type,
          payload: action.payload
        }
      ]
    case GET_ROOM_OK:
      return [
        ...state,
        {
          type: action.type,
          payload: action.payload
        }
      ]
    case GET_ROOM_NG:
      return [
        ...state,
        {
          type: action.type,
          payload: action.payload
        }
      ]
    default: 
      return state
  }
}

export default roomListState;