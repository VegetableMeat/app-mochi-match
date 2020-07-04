import { axios_instance } from '../axios/axios';
import { take, put, call, takeLatest } from 'redux-saga/effects';
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
} from './Action';
import {
  showModalFalse
} from './../common/Action'

import { joinRoomSocket, leaveRoomSocket } from './../socket/Action'

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

function* fetchRoomList() {
  const { data, error } = yield call(requestRoomListApi);

  if (data) {
    yield put(getRoomOk(data));
  } else {
    yield put(getRoomNg(error));
  }
}

export function* handleRoomJoinRequest() {
  while (true) {
    const action = yield take(JOIN_ROOM_REQUEST);
    yield put(showModalFalse())

    const room_id = action.payload.room.room_id

    const { res, error } = yield call(joinRoomReqApi, room_id);

    if (res.status === 200 && !error) {
      yield put(joinRoomSocket(room_id))
      yield put(joinRoomSuccess(room_id, action.payload.callback))
    } else {
      yield put(joinRoomError())
    }
  }
}

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
    console.log("action=", action)
    action.payload.callback()
  }
}


export function* handleRoomLeaveRequest() {
  while (true) {
    const action = yield take(LEAVE_ROOM_REQUEST);
    console.log("leave req")
    const room_id = action.payload.room.room_id

    const { res, error } = yield call(leaveRoomReqApi, room_id);

    if (res.status === 200 && !error) {
      yield put(leaveRoomSocket(room_id))
      yield put(leaveRoomSuccess(room_id, action.payload.callback))
      console.log("action2=", action)
      action.payload.callback()
    } else {
      yield put(leaveRoomError())
    }
  }
}


export const roomListSaga = [takeLatest(GET_ROOM_REQ, fetchRoomList)];

