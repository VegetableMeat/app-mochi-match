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
  ALREADY_ENTRY,
  CREATED_CHATPOST,
  GET_CHATPOSTLIST_REQUEST,
  GET_CHATPOSTLIST_SUCCESS,
  GET_CHATPOSTLIST_ERROR,
} from "./../Action";

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
  chatLog: [],
  isEntry: false,
};

const roomState = (state = initialState, action) => {
  switch (action.type) {
    case CREATED_CHATPOST:
      return {
        ...state,
        chatLog: [...state.chatLog, action.payload],
      };
    case JOIN_ROOM_REQUEST:
      return {
        ...state,
      };
    case JOIN_ROOM_SUCCESS:
      return {
        ...state,
        isEntry: true,
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
      return initialState;
    case LEAVE_ROOM_ERROR:
      return {
        ...state,
      };
    case GET_ROOM_DETAIL_REQUEST:
      return {
        ...state,
      };
    case GET_ROOM_DETAIL_SUCCESS:
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
        join_users: [...state.join_users, ...action.payload.data.join_users],
      };
    case GET_ROOM_DETAIL_ERROR:
      return {
        ...state,
      };
    case ALREADY_ENTRY:
      return {
        ...state,
        room: {
          ...state.room,
          room_id: action.payload.room_id,
          owner_id: action.payload.owner_id,
          hard: action.payload.hard,
          title: action.payload.title,
          capacity: action.payload.capacity,
          count: action.payload.count,
          text: action.payload.text,
        },
        join_users: [...state.join_users, ...action.payload.join_users],
        isEntry: true,
      };
    case GET_CHATPOSTLIST_REQUEST:
      return {
        ...state,
      };
    case GET_CHATPOSTLIST_SUCCESS:
      return {
        ...state,
        chatLog: [...state.chatLog, ...action.payload],
      };
    case GET_CHATPOSTLIST_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default roomState;
