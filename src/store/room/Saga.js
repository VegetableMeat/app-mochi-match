import axios from 'axios';
import { axios_instance } from '../axios/axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_ROOM_REQ,
  getRoomOk,
  getRoomNg,
  POST_ROOM_CREATION_REQ,
  postRoomCreationOk,
  postRoomCreationNg,
} from './Action';

const resRoomList = () => {
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
  const { data, error } = yield call(resRoomList);

  if (data) {
    yield put(getRoomOk(data));
  } else {
    yield put(getRoomNg(error));
  }
}

export const roomListSaga = [takeLatest(GET_ROOM_REQ, fetchRoomList)];

// RoomCreation
const resRoomCreation = () => {
  // return axios_instance
  // .get()
  // .then()
  // .catch();
};

const getGameTitle = (data) => {
  return axios_instance
    .post(data.url)
    .then((res) => {
      const data = res.data.message;
      return { data };
    })
    .catch((e) => {
      const error = e.toString();
      return { error };
    });
};

function* fetchRoomCreation(data) {
  // const { data, error } = yield call(resRoomCreation);
  console.log('入ったよ');
  console.log(data);

  // if (data && !error) {
  //   return yield put();
  // }

  // return yield put();
}

function* fetchRoomCreationTitle(data) {
  const { res, error } = yield call(getGameTitle, data);
}

export const roomCreationSaga = [takeLatest(POST_ROOM_CREATION_REQ, fetchRoomCreation)];
export const roomCreationTitleSaga = [takeLatest(POST_ROOM_CREATION_REQ, fetchRoomCreation)];
