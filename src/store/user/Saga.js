import { axios_instance } from '../axios/axios';
import { takeLatest, put, call, take, takeEvery } from 'redux-saga/effects';
import {
  GET_ME_REQUEST,
  CHECK_ENTRY_SUCCESS,
  getMeSuccess,
  getMeError,
  CHECK_ENTRY_REQUEST,
  checkEntrySuccess,
  checkEntryError,
} from './Action';

import { getChatpostListRequest } from './../room/Action'

import history from './../../history/history'

import { alreadyEntry } from './../room/Action'

/**
 * ユーザー情報取得処理
 */
const requestGetMeApi = () => {
  const url = 'https://api.mochi-match.work/v1/users';
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

export function* handleGetMeRequest() {
  const { data, error } = yield call(requestGetMeApi);
}

export function* watchGetMeRequest() {
  yield takeEvery(GET_ME_REQUEST, handleGetMeRequest);
}

/**
 * ルーム参加状況チェックリクエスト
 */
const requestCheckEntryApi = () => {
  const url = 'https://api.mochi-match.work/v1/check/entry';
  return axios_instance
    .get(url)
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export function* handleCheckEntryRequest(action) {
  const { res, error } = yield call(requestCheckEntryApi);
  if (res.status === 200 && !error) {
    yield put(checkEntrySuccess(res, action))
  } else {
    yield put(checkEntryError(error))
  }
}

export function* watchCheckEntryRequest(action) {
  yield takeEvery(CHECK_ENTRY_REQUEST, handleCheckEntryRequest);
}

/**
 * ルーム参加状況チェックサクセス
 */
export function* handleCheckEntrySuccess(action) {
  if (action.payload.data.room) {
    yield put(alreadyEntry(action.payload.data.room))
    yield put(getChatpostListRequest(action.payload.data.room.room_id))
    action.history.push("/intheroom")
  } else {
    action.history.push("/")
  }
}

export function* watchCheckEntrySuccess() {
  yield takeEvery(CHECK_ENTRY_SUCCESS, handleCheckEntrySuccess);
}