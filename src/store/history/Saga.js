import { axios_instance } from "../axios/axios";
import { take, put, call, takeEvery } from "redux-saga/effects";
import { requestGetMeApi } from "../user/Saga";

import {
  GET_HISTORY_REQUEST,
  getHistoryRequest,
  getHistorySuccess,
  getHistoryError,
  getUserSuccess,
  getUserError,
  getUserRequest,
  GET_USER_REQUEST,
} from "./Action";
import { showModalTrue } from "../common/Action";

/**
 * 履歴情報取得処理
 */
const requestGetHistoryApi = () => {
  const url = "https://api.mochi-match.work/v1/history";
  return axios_instance
    .get(url)
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

function* fetchHistory() {
  const { res, error } = yield call(requestGetHistoryApi);

  if (res) {
    yield put(getHistorySuccess(res));
  } else {
    yield put(getHistoryError(error));
  }
}

function* fetchUser(id) {
  const { res, error } = yield call(requestGetMeApi, id.payload);

  if (res) {
    //yield put(getUserSuccess(res));
    yield put(showModalTrue("USER_DETAILS", "data", res.data));
  } else {
    yield put(getUserError(error));
  }
}

export const historySaga = [
  takeEvery(GET_HISTORY_REQUEST, fetchHistory),
  takeEvery(GET_USER_REQUEST, fetchUser),
];
