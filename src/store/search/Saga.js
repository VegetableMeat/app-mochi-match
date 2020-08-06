import { axios_instance } from "../axios/axios";
import {
  GET_SEARCH_GAME_TITLE_REQ,
  GET_SEARCH_GAME_HARD_REQ,
  getSearchGameHardOk,
  getSearchGameHardNg,
  getSearchGameTitleOk,
  getSearchGameTitleNg,
} from "./Action";
import { getGameTitle, getGameHard } from "../room/Saga";
import { call, put, takeEvery, take } from "redux-saga/effects";
import { TOKEN_REFRESH_SUCCESS, tokenRefleshRequest } from "../auth/Action";

function* fetchGameTitle(get) {
  const { res, error } = yield call(getGameTitle, get);
  if (!error) {
    return yield put(getSearchGameTitleOk(res.data));
  }
  yield put(getSearchGameTitleNg());
}

function* fetchGameHard(get) {
  const { res, error } = yield call(getGameHard, get);
  if (!error) {
    return yield put(getSearchGameHardOk(res.data));
  }
  return yield put(getSearchGameHardNg());
}

export const searchSaga = [
  takeEvery(GET_SEARCH_GAME_TITLE_REQ, fetchGameTitle),
  takeEvery(GET_SEARCH_GAME_HARD_REQ, fetchGameHard),
];
