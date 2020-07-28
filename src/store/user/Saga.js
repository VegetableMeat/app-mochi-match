import { axios_instance } from "../axios/axios";
import { take, put, call, delay, takeEvery } from "redux-saga/effects";
import { getChatpostListRequest } from "./../room/Action";
import { alreadyEntry } from "./../room/Action";
import {
  GET_ME_REQUEST,
  getMeRequest,
  getMeSuccess,
  getMeError,
  CHECK_ENTRY_SUCCESS,
  CHECK_ENTRY_REQUEST,
  checkEntrySuccess,
  checkEntryError,
} from "./Action";
import { TOKEN_REFRESH_SUCCESS, tokenRefleshRequest } from "./../auth/Action";

/**
 * ユーザー情報取得処理
 */
const requestGetMeApi = () => {
  const url = "https://api.mochi-match.work/v1/users";
  return axios_instance
    .get(url)
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export function* handleGetMeRequest() {
  const { res, error } = yield call(requestGetMeApi);
  if (!error) {
    yield put(getMeSuccess(res));
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield call(handleGetMeRequest);
    }
  }
}

export function* watchGetMeRequest() {
  yield takeEvery(GET_ME_REQUEST, handleGetMeRequest);
}

/**
 * ルーム参加状況チェックリクエスト
 */
const requestCheckEntryApi = () => {
  const url = "https://api.mochi-match.work/v1/check/entry";
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
  if (!error) {
    yield put(checkEntrySuccess(res, action));
  } else {
    if (error.response.status === 401) {
      yield put(tokenRefleshRequest());
      yield take(TOKEN_REFRESH_SUCCESS);
      yield put(handleCheckEntryRequest);
    }
  }
}

export function* watchCheckEntryRequest() {
  yield takeEvery(CHECK_ENTRY_REQUEST, handleCheckEntryRequest);
}

/**
 * ルーム参加状況チェックサクセス
 */
export function* handleCheckEntrySuccess(action) {
  if (action.payload.data.room) {
    yield put(alreadyEntry(action.payload.data.room));
    yield action.history.push("/intheroom");
  } else {
  }
}

export function* watchCheckEntrySuccess() {
  yield takeEvery(CHECK_ENTRY_SUCCESS, handleCheckEntrySuccess);
}
