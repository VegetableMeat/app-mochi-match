import { axios_instance } from '../axios/axios';
import { take, put, call, takeEvery, fork } from 'redux-saga/effects';
import {
  GET_ROOM_REQ,
  getRoomOk,
  getRoomNg,
  JOIN_ROOM_REQUEST,
  JOIN_ROOM_SUCCESS,
  joinRoomSuccess,
  joinRoomError,
  LEAVE_ROOM_REQUEST,
  leaveRoomSuccess,
  leaveRoomError,
  getRoomDetailSuccess,
  getRoomDetailError,
  GET_CHATPOSTLIST_REQUEST,
  getChatpostListRequest,
  getChatpostListSuccess,
  getChatpostListError,
  CREATE_CHATPOSTLIST_REQUEST,
  CREATE_CHATPOSTLIST_SUCCESS,
  CREATE_CHATPOSTLIST_ERROR,
  createChatpostListRequest,
  createChatpostListSuccess,
  createChatpostListError,
} from './Action';
import {
  showModalFalse
} from './../common/Action'

import { joinRoomSocket, leaveRoomSocket } from './../socket/Action'


/**
 * ルームリスト取得リクエスト
 */
const requestRoomListApi = () => {
  const url = 'https://api.mochi-match.work/v1/rooms?page=1';
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
    yield put(getRoomNg(error));
  }
}

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
  yield put(showModalFalse())
  const room_id = action.payload.room.room_id
  const { res, error } = yield call(joinRoomReqApi, room_id);

  if (res.status === 200 && !error) {
    yield put(joinRoomSocket(room_id))
    yield put(joinRoomSuccess(room_id, action.payload.callback))
    yield put(getChatpostListRequest(room_id))
  } else {
    yield put(joinRoomError())
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

export function* handleRoomJoinSuccess() {
  while (true) {
    const action = yield take(JOIN_ROOM_SUCCESS);
    const room_id = action.payload.room_id

    const { res, error } = yield call(getRoomDetailReqApi, room_id);

    if (res.status === 200 && !error) {
      yield put(getRoomDetailSuccess(res))

    } else {
      yield put(getRoomDetailError(error))
    }
    action.payload.callback()
  }
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

export function* handleRoomLeaveRequest(action) {
  const room_id = action.payload.room.room_id

  const { res, error } = yield call(leaveRoomReqApi, room_id);
  if (!error) {
    action.history.push("/")
    yield put(leaveRoomSocket(room_id))
    yield put(leaveRoomSuccess(room_id))

  } else {
    yield put(leaveRoomError())
    action.history.push("/")
  }
}

export function* watchRoomLeaveRequest() {
  yield takeEvery(LEAVE_ROOM_REQUEST, handleRoomLeaveRequest);
}

/**
 * チャットポスト取得リクエスト
 */
const getChatpostReqApi = (room_id) => {
  const url = `https://api.mochi-match.work/v1/rooms/${room_id}/messages`;
  return axios_instance
    .get(url)
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export function* handleGetChatpostRequest(action) {
  const room_id = action.payload

  const { res, error } = yield call(getChatpostReqApi, room_id);
  if (!error) {
    yield put(getChatpostListSuccess(res.data))
  } else {
    console.log(error)
  }
}

export function* watchGetChatpostRequest() {
  yield takeEvery(GET_CHATPOSTLIST_REQUEST, handleGetChatpostRequest);
}

/**
 * チャットポスト作成リクエスト
 */
const createChatpostReqApi = (room_id, message) => {
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
  const room_id = action.payload.room_id
  const message = action.payload.message

  const { res, error } = yield call(createChatpostReqApi, room_id, message);
  if (!error) {
    console.log(res)
  } else {
    console.log(error)
  }
}

export function* watchCreateChatpostRequest() {
  yield takeEvery(CREATE_CHATPOSTLIST_REQUEST, handleCreateChatpostRequest);
}