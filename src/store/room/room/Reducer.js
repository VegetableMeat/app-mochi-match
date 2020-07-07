import {
  JOIN_ROOM_REQUEST,
  JOIN_ROOM_SUCCESS,
  JOIN_ROOM_ERROR,
  LEAVE_ROOM_REQUEST,
  LEAVE_ROOM_SUCCESS,
  LEAVE_ROOM_ERROR,
  GET_ROOM_DETAIL_REQUEST,
  GET_ROOM_DETAIL_SUCCESS,
  GET_ROOM_DETAIL_ERROR,
} from './../Action';

const initialState = {
  room: {
    room_id: null,
    owner_id: null,
    hard: null,
    title: null,
    capacity: null,
    count: null,
    text: null,
  },
  join_users: [],
  chatLog: [
    {
      message: "aaa",
      user: "yaa",
      created_at: "2020/01/01"
    },
    {
      message: "aassasdafa",
      user: "yafwa",
      created_at: "2020/01/01"
    }
  ],
}

const roomState = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_ROOM_REQUEST:
      return {
        ...state,
      };
    case JOIN_ROOM_SUCCESS:
      return {
        ...state,
      };
    case JOIN_ROOM_ERROR:
      return {
        ...state,
      };
    case LEAVE_ROOM_REQUEST:
      return {
        ...state,
      };
    case LEAVE_ROOM_SUCCESS:
      return initialState
    case LEAVE_ROOM_ERROR:
      return {
        ...state,
      };
    case GET_ROOM_DETAIL_REQUEST:
      return {
        ...state,
      };
    case GET_ROOM_DETAIL_SUCCESS:
      console.log(action)
      return {
        ...state,
        room: {
          ...state.room,
          room_id: action.payload.data.room_id,
          owner_id: action.payload.data.owner_id,
          hard: action.payload.data.hard,
          title: action.payload.data.title,
          capacity: action.payload.data.capacity,
          count: action.payload.data.count,
          text: action.payload.data.text,
        },
        join_users: [
          ...state.join_users,
          ...action.payload.data.join_users
        ]
      };
    case GET_ROOM_DETAIL_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default roomState;
