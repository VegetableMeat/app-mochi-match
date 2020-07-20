import { GET_GAME_TITLE_REQ, getGameTitleOk, getGameTitleNg } from "./Action";
import { getGameTitle } from "../room/Saga";
import { call, put, takeEvery } from "redux-saga/effects";

function* fetchGameTitle(get) {
  const { res, err } = yield call(getGameTitle, get);
  if (!err) {
    return yield put(getGameTitleOk(res));
  }
  yield put(getGameTitleNg(err));
}

export const profileSaga = [takeEvery(GET_GAME_TITLE_REQ, fetchGameTitle)];
