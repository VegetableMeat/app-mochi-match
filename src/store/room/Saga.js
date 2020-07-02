import axios from 'axios';
import { axios_instance } from '../axios/axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_ROOM_REQ, getRoomOk, getRoomNg } from './Action';

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

function* fetchRoomList() {
  const { data, error } = yield call(requestRoomListApi);

  if (data) {
    yield put(getRoomOk(data));
  } else {
    yield put(getRoomNg(error));
  }
}

export const roomListSaga = [takeLatest(GET_ROOM_REQ, fetchRoomList)];
