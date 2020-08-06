import {
  POST_ROOM_CREATION_OK,
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
  USER_JOIN,
  USER_LEAVE,
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
    case POST_ROOM_CREATION_OK:
      return {
        ...state,
        isEntry: true,
      };
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
      if (action.payload.data.join_users == null) {
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
          join_users: [],
        };
      }
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
      if (action.payload.join_users == null) {
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
          join_users: [],
          isEntry: true,
        };
      }
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
      let newState = [...state.chatLog, ...action.payload];
      const map = new Map(newState.map((o) => [o.created_at, o]));
      newState = Array.from(map.values());
      newState.sort(function (a, b) {
        if (a.created_at < b.created_at) return -1;
        if (a.created_at > b.created_at) return 1;
        return 0;
      });
      return {
        ...state,
        chatLog: newState,
      };
    case GET_CHATPOSTLIST_ERROR:
      return {
        ...state,
      };
    case USER_JOIN:
      if (
        state.join_users.some(
          (user) => user.user_id === action.payload.user.user_id
        )
      ) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        room: {
          ...state.room,
          count: state.room.count + 1,
        },
        join_users: [...state.join_users, action.payload.user],
      };
    case USER_LEAVE:
      let newJoinUsers = state.join_users;
      let leaveCount = 0;
      newJoinUsers.some(function (v, i) {
        if (v.user_id == action.payload.user.user_id) {
          newJoinUsers.splice(i, 1);
          leaveCount++;
        }
      });
      return {
        ...state,
        room: {
          ...state.room,
          count: state.room.count - leaveCount,
        },
        join_users: newJoinUsers,
      };
    default:
      return state;
  }
};

export default roomState;
