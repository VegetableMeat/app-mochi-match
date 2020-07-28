import io from "socket.io-client";
import { createdChatpost } from "./../store/room/Action";
import {
  OPEN_SOCKET,
  CLOSE_SOCKET,
  JOIN_ROOM_SOCKET,
  LEAVE_ROOM_SOCKET,
  updateSocketObject,
} from "./../store/socket/Action";

let socket;

const socketMiddleware = (store) => (next) => (action) => {
  // socket通信の開始
  if (action.type === OPEN_SOCKET) {
    socket = io("wss://mochi-match.work/chatroom");

    socket.on("notify_entry", function (data) {
      console.log(data);
    });

    socket.on("notify_leave", function (data) {
      store.dispatch(createdChatpost(data));
      console.log("msg", data);
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
    console.log("close socket");
  }

  let userState;
  let room_id;

  // socketルームへの参加
  if (action.type === JOIN_ROOM_SOCKET) {
    userState = store.getState().userState;
    room_id = action.payload.room_id;

    socket.emit("join_req", {
      room_id: room_id,
      user: {
        user_name: userState.user_name,
      },
    });
  }

  // socketルームからの切断
  if (action.type === LEAVE_ROOM_SOCKET) {
    userState = store.getState().userState;
    room_id = action.payload.room_id;

    socket.emit("leave", {
      room_id: room_id,
      user: {
        user_name: userState.user_name,
      },
    });
  }
  next(action);
};

export default socketMiddleware;
