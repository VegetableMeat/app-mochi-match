import io from "socket.io-client";
import {
  DELETE_ROOM_SUCCESS,
  createdChatpost,
  userJoin,
  userLeave,
  deleteRoom,
} from "./../store/room/Action";
import {
  OPEN_SOCKET,
  CLOSE_SOCKET,
  JOIN_ROOM_SOCKET,
  LEAVE_ROOM_SOCKET,
  updateSocketObject,
} from "./../store/socket/Action";

import { showModalTrue } from "./../store/common/Action";

let socket;

const socketMiddleware = (store) => (next) => (action) => {
  // socket通信の開始
  if (action.type === OPEN_SOCKET) {
    socket = io("wss://mochi-match.work/chatroom");

    socket.on("notify_entry", function (data) {
      store.dispatch(userJoin(data));
      console.log("notify_entry", data);
    });

    socket.on("notify_leave", function (data) {
      store.dispatch(userLeave(data));
      console.log("notify_leave", data);
    });

    socket.on("notify_delete_room", function () {
      console.log("notify_delete_room");
      store.dispatch(deleteRoom());
      store.dispatch(showModalTrue("NOTIFY_ROOM_DELETION", "room", null));
    });

    socket.on("user_input_start", function (data) {
      console.log(data);
    });

    socket.on("user_input_stop", function (data) {
      console.log(data);
    });

    socket.on("msg", function (data) {
      store.dispatch(createdChatpost(data));
      console.log("msg", data);
    });

    store.dispatch(updateSocketObject(socket));
  }

  // socket通信の切断
  if (action.type === CLOSE_SOCKET) {
    socket.disconnect();
  }

  let userState;
  let room_id;

  // socketルームへの参加
  if (action.type === JOIN_ROOM_SOCKET) {
    userState = store.getState().userState;
    room_id = action.payload;
    socket.emit("join_req", {
      room_id: room_id,
      user: userState.user,
    });
  }

  // socketルームからの切断
  if (action.type === LEAVE_ROOM_SOCKET) {
    userState = store.getState().userState;
    room_id = action.payload;

    socket.emit("leave", {
      room_id: room_id,
      user: userState.user,
    });
  }
  // ルームの解散
  if (action.type === DELETE_ROOM_SUCCESS) {
    console.log("DELETE_ROOM_SUCCESS", action.payload);
    socket.emit("delete_room", {
      room_id: action.payload.room_id,
    });
  }

  next(action);
};

export default socketMiddleware;
