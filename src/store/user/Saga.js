import { axios_instance } from '../axios/axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import { getChatpostListRequest } from './../room/Action'
import { alreadyEntry } from './../room/Action'
import {
  GET_ME_REQUEST,
  getMeSuccess,
  getMeError,
  CHECK_ENTRY_SUCCESS,
  CHECK_ENTRY_REQUEST,
  checkEntrySuccess,
  checkEntryError,
} from './Action';

/**
 * ユーザー情報取得処理
 */
const requestGetMeApi = () => {
  const url = 'https://api.mochi-match.work/v1/users';
  return axios_instance
    .get(url)
    .then((res) => {
      return { res }
    })
    .catch((error) => {
      return { error };
    });
};

export function* handleGetMeRequest() {
  // TODO :
  const { res, error } = yield call(requestGetMeApi);
  if (!error) {
    yield put(getMeSuccess(res))
  } else {
    yield put(getMeError(error))
  }
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
  }
}

export function* watchCheckEntrySuccess() {
  yield takeEvery(CHECK_ENTRY_SUCCESS, handleCheckEntrySuccess);
}