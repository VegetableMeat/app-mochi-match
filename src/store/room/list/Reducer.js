import { GET_ROOM_REQ, GET_ROOM_OK, GET_ROOM_NG } from "../Action";

const initiaState = {
  data: [],
  pageCount: 0,
  selectPage: 1,
  loadingFlag: false,
};

const roomListState = (state = initiaState, action) => {
  switch (action.type) {
    case GET_ROOM_REQ:
      return {
        ...state,
        data: [],
        selectPage: action.payload,
        loadingFlag: true,
      };
    case GET_ROOM_OK:
      const newPageCont =
        action.payload.roomCnt / 12 - Math.floor(action.payload.roomCnt / 12) <
          0 || action.payload.roomCnt % 12 === 0
          ? Math.floor(action.payload.roomCnt / 12)
          : Math.floor(action.payload.roomCnt / 12 + 1);
      return {
        ...state,
        data: action.payload.rooms,
        pageCount: newPageCont,
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
