import { axios_instance } from "../axios/axios";
import { take, put, call, takeEvery } from "redux-saga/effects";

import {
  GET_HISTORY_REQUEST,
  getHistoryRequest,
  getHistorySuccess,
  getHistoryError,
} from "./Action";

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

export const historySaga = [takeEvery(GET_HISTORY_REQUEST, fetchHistory)];
