import axios from "axios";
import { axios_instance } from "../axios/axios";
import { select, put, call, takeEvery } from "redux-saga/effects";
import { TOKEN_REFRESH_REQUEST, tokenRefleshSuccess } from "./Action";

/**
 * トークンのリフレッシュ処理
 */
const requestTokenRefreshApi = (refreshToken) => {
  const url = "https://api.mochi-match.work/v1/auth/refresh";
  const data = { refresh_token: refreshToken };
  return axios_instance
    .post(url, data)
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export function* handleTokenRefreshRequest() {
  const refreshToken = localStorage.getItem("refresh_token");
  const { res, error } = yield call(requestTokenRefreshApi, refreshToken);

  if (!error) {
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    localStorage.setItem("expires_in", res.data.expires_in);
    yield put(tokenRefleshSuccess());
  } else {
  }
  return res, error;
}

export function* watchTokenRefleshRequest() {
  yield takeEvery(TOKEN_REFRESH_REQUEST, handleTokenRefreshRequest);
}
