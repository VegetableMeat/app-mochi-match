import { axios_instance } from "../axios/axios";
import { take, put, call, takeEvery } from "redux-saga/effects";
import { requestGetMeApi } from "../user/Saga";

import {
  GET_HISTORY_REQUEST,
  getHistorySuccess,
  getHistoryError,
  getUserSuccess,
  getUserError,
  GET_USER_REQUEST,
} from "./Action";
import { showModalTrue } from "../common/Action";
import { TOKEN_REFRESH_SUCCESS, tokenRefleshRequest } from "../auth/Action";

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

  if (!error) {
    yield put(getHistorySuccess(res));
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield call(fetchHistory);
    }
    yield put(getHistoryError(error));
  }
}

function* fetchUser(id) {
  const { res, error } = yield call(requestGetMeApi, id.payload);

  if (!error) {
    //yield put(getUserSuccess(res));
    yield put(showModalTrue("USER_DETAILS", "data", res.data));
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield call(fetchUser, id);
    }
    yield put(getUserError(error));
  }
}

export const historySaga = [
  takeEvery(GET_HISTORY_REQUEST, fetchHistory),
  takeEvery(GET_USER_REQUEST, fetchUser),
];
