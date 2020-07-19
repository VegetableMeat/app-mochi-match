import { axios_instance } from "../axios/axios";
import { take, put, call, takeLatest, takeEvery } from "redux-saga/effects";
import {
  GET_ROOM_REQ,
  getRoomReq,
  getRoomOk,
  getRoomNg,
  GET_GAME_TITLE_REQ,
  getGameTitleOk,
  getGameTitleNg,
  GET_GAME_HARD_REQ,
  getGameHardOk,
  getGameHardNg,
  POST_ROOM_CREATION_REQ,
  postRoomCreationOk,
  postRoomCreationNg,
  JOIN_ROOM_REQUEST,
  JOIN_ROOM_SUCCESS,
  joinRoomSuccess,
  joinRoomError,
  LEAVE_ROOM_REQUEST,
  leaveRoomRequest,
  leaveRoomSuccess,
  leaveRoomError,
  DELETE_ROOM_REQUEST,
  getRoomDetailSuccess,
  getRoomDetailError,
  GET_CHATPOSTLIST_REQUEST,
  getChatpostListRequest,
  getChatpostListSuccess,
  CREATE_CHATPOSTLIST_REQUEST,
  roomCreateResponse,
} from "./Action";
import { showModalFalse, showModalTrue } from "../common/Action";
import { joinRoomSocket, leaveRoomSocket } from "../socket/Action";
import { TOKEN_REFRESH_SUCCESS, tokenRefleshRequest } from "../auth/Action";

/**
 * ルームリスト取得リクエスト
 */
const requestRoomListApi = () => {
  const url = "https://api.mochi-match.work/v1/rooms?page=1";
  return axios_instance
    .get(url)
    .then((res) => {
      const data = res.data;
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};

export function* fetchRoomList() {
  const { data, error } = yield call(requestRoomListApi);
  if (data) {
    yield put(getRoomOk(data));
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield call(fetchRoomList);
    }
  }
}

export const roomListSaga = [takeLatest(GET_ROOM_REQ, fetchRoomList)];

// RoomCreation
const resRoomCreation = (post) => {
  let start = null;
  if (post.payload.select.start) {
    start = new Date(
      post.payload.select.date + " " + post.payload.select.time
    ).toISOString();
  }
  return axios_instance
    .post(post.url, {
      room_text: post.payload.select.text,
      game_list_id: post.payload.select.title,
      game_hard_id: post.payload.select.hard,
      capacity: post.payload.select.capacity,
      start: start,
    })
    .then((res) => {
      return { res };
    })
    .catch((e) => {
      const error = e;
      return { error };
    });
};

const getGameTitle = (get) => {
  return axios_instance
    .get(get.url)
    .then((res) => {
      return { res };
    })
    .catch((e) => {
      const error = e.toString();
      return { error };
    });
};

const getGameHard = (get) => {
  return axios_instance
    .get(get.url)
    .then((res) => {
      return { res };
    })
    .catch((e) => {
      const error = e.toString();
      return { error };
    });
};

const allErrorCheck = (post) => {
  let error_flg = false;
  let error_msg = [];
  Object.entries(post.error).map(([key, value]) => {
    if (key.match(/^input_[a-zA-Z0-9]*$/)) {
      if (key !== "input_time" && key !== "input_date") {
        if (value) {
          error_flg = true;
          error_msg.push(post.select[key.replace("input_", "")]);
        }
      } else if (post.select.start) {
        if (value) {
          error_flg = true;
          error_msg.push(post.select[key.replace("input_", "")]);
        }
      }
    }
  });
  return { error_flg, error_msg };
};

function* fetchRoomCreation(post) {
  const { error_flg, error_msg } = yield call(allErrorCheck, post.payload);
  if (error_flg) {
    return yield put(
      showModalTrue("POST_ROOM_ERROR", "room_creation_error", {
        title: "入力エラー！",
        msg: error_msg,
      })
    );
  }

  const { res, error } = yield call(resRoomCreation, post);
  if (!error) {
    yield put(postRoomCreationOk());
    yield put(getRoomDetailSuccess(res.data));
    yield call(post.payload.push, "/intheroom");
  } else {
    if (error.response.status === 400) {
      yield put(
        showModalTrue("POST_ROOM_ERROR", "room_creation_error", {
          title: "作成エラー！",
          msg: ["ルームを解散していないか、他のルームに参加中です"],
        })
      );
    }
  }
}

function* fetchTitleRoomCreation(get) {
  const { res, error } = yield call(getGameTitle, get);
  if (res.status === 200 && !error) {
    return yield put(getGameTitleOk(res.data));
  }
  return yield put(getGameTitleNg(error));
}

function* fetchHardRoomCreation(get) {
  const { res, error } = yield call(getGameHard, get);
  if (res.status === 200 && !error) {
    return yield put(getGameHardOk(res.data));
  }
  return yield put(getGameHardNg(error));
}

export const roomCreationSaga = [
  takeLatest(POST_ROOM_CREATION_REQ, fetchRoomCreation),
  takeLatest(GET_GAME_TITLE_REQ, fetchTitleRoomCreation),
  takeLatest(GET_GAME_HARD_REQ, fetchHardRoomCreation),
];

export function* watchGetRoomListRequest() {
  yield takeEvery(GET_ROOM_REQ, fetchRoomList);
}

/**
 * ルーム参加リクエスト
 */
const joinRoomReqApi = (room_id) => {
  const url = `https://api.mochi-match.work/v1/rooms/${room_id}/join`;
  return axios_instance
    .post(url)
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

function* handleRoomJoinRequest(action) {
  yield put(showModalFalse());
  const room_id = action.payload.room.room_id;
  const { res, error } = yield call(joinRoomReqApi, room_id);

  if (!error) {
    yield put(joinRoomSocket(room_id));
    yield put(joinRoomSuccess(room_id, action.payload.callback));
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield call(handleRoomJoinRequest, action);
    } else {
      switch (error.response.data.code) {
        case 5:
          yield put(showModalTrue("ROOM_CAPACITY_OVER", "room", null));
          break;
        default:
          yield put(showModalTrue("SERVER_ERROR", "room", null));
      }
    }
  }
}

export function* watchRoomJoinRequest() {
  yield takeEvery(JOIN_ROOM_REQUEST, handleRoomJoinRequest);
}

/**
 * ルーム参加サクセス
 */
const getRoomDetailReqApi = (room_id) => {
  const url = `https://api.mochi-match.work/v1/rooms/${room_id}`;
  return axios_instance
    .get(url)
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export function* handleRoomJoinSuccess(action) {
  const room_id = action.payload.room_id;

  const { res, error } = yield call(getRoomDetailReqApi, room_id);

  if (!error) {
    yield put(getRoomDetailSuccess(res));
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield call(handleRoomJoinSuccess, action);
    }
  }
  action.payload.callback();
}

export function* watchRoomJoinSuccess() {
  yield takeEvery(JOIN_ROOM_SUCCESS, handleRoomJoinSuccess);
}

/**
 * ルーム退室リクエスト
 */
const leaveRoomReqApi = (room_id) => {
  const url = `https://api.mochi-match.work/v1/rooms/${room_id}/leave`;
  return axios_instance
    .delete(url)
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export function* handleLeaveRoomRequest(action) {
  const room_id = action.payload.room.room_id;

  const { res, error } = yield call(leaveRoomReqApi, room_id);

  if (!error) {
    action.history.push("/");
    yield put(leaveRoomSocket(room_id));
    yield put(leaveRoomSuccess(room_id));
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield call(handleLeaveRoomRequest, action);
    }
  }
}

export function* watchLeaveRoomRequest() {
  yield takeEvery(LEAVE_ROOM_REQUEST, handleLeaveRoomRequest);
}

/**
 * ルーム削除リクエスト
 */
const deleteRoomReqApi = (room_id) => {
  const url = `https://api.mochi-match.work/v1/rooms/${room_id}`;
  return axios_instance
    .delete(url)
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export function* handleDeleteRoomRequest(action) {
  const room_id = action.payload.room.room_id;

  yield put(showModalFalse());
  yield put(leaveRoomRequest(action.payload.room, action.history));

  const { res, error } = yield call(deleteRoomReqApi, room_id);
  if (!error) {
    console.log(res);
    yield put(getRoomReq());
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield call(handleDeleteRoomRequest, action);
    }
  }
}

export function* watchDeleteRoomRequest() {
  yield takeEvery(DELETE_ROOM_REQUEST, handleDeleteRoomRequest);
}

/**
 * チャットポスト取得リクエスト
 */
const getChatpostReqApi = (room_id, limit, offset) => {
  const url = `https://api.mochi-match.work/v1/rooms/${room_id}/messages`;
  if (offset == null) {
    return axios_instance
      .get(url, {
        params: {
          limit: limit,
        },
      })
      .then((res) => {
        return { res };
      })
      .catch((error) => {
        return { error };
      });
  }
  return axios_instance
    .get(url, {
      params: {
        limit: limit,
        offset: offset,
      },
    })
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export function* handleGetChatpostRequest(action) {
  const { room_id, limit, offset } = action.payload;

  const { res, error } = yield call(getChatpostReqApi, room_id, limit, offset);

  if (!error) {
    yield put(getChatpostListSuccess(res.data));
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield call(handleGetChatpostRequest, action);
    }
  }
}

export function* watchGetChatpostRequest() {
  yield takeEvery(GET_CHATPOSTLIST_REQUEST, handleGetChatpostRequest);
}

/**
 * チャットポスト作成リクエスト
 */
const createChatpostReqApi = (room_id, message) => {
  console.log(room_id, message);
  const url = `https://api.mochi-match.work/v1/rooms/${room_id}/messages`;
  const data = { message: message };

  return axios_instance
    .post(url, data)
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export function* handleCreateChatpostRequest(action) {
  const room_id = action.payload.room_id;
  const message = action.payload.message;

  const { res, error } = yield call(createChatpostReqApi, room_id, message);
  if (!error) {
    console.log(res);
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield call(handleCreateChatpostRequest, action);
    }
  }
}

export function* watchCreateChatpostRequest() {
  yield takeEvery(CREATE_CHATPOSTLIST_REQUEST, handleCreateChatpostRequest);
}
