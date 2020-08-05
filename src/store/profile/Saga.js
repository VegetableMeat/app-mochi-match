import { axios_instance } from "../axios/axios";
import {
  GET_GAME_TITLE_REQ,
  getGameTitleOk,
  getGameTitleNg,
  UPDATE_USER_PROFILE_REQ,
  updateUserProfileOk,
  updateUserProfileNg,
} from "./Action";
import { showModalTrue } from "../common/Action";
import { getGameTitle } from "../room/Saga";
import { call, put, takeEvery, take } from "redux-saga/effects";
import { TOKEN_REFRESH_SUCCESS, tokenRefleshRequest } from "../auth/Action";
import { handleGetMeRequest } from "./../user/Saga";

function* fetchGameTitle(get) {
  const { res, err } = yield call(getGameTitle, get);
  if (!err) {
    return yield put(getGameTitleOk(res));
  }
  yield put(getGameTitleNg(err));
}

const userProfile = (update) => {
  const favorite = update.payload.profile.favorite.map((fav) => {
    return { game_title: fav.game_title };
  });

  return axios_instance
    .put(update.url, {
      user_name: update.payload.profile.name,
      icon: update.payload.profile.icon,
      favorite_games: favorite,
    })
    .then((res) => {
      console.log("resss", res);
      return { res };
    })
    .catch((err) => {
      return { err };
    });
};

const allErrorCheck = (err) => {
  let err_flag = false;
  let err_msg = [];

  if (err.flag.name) {
    err_flag = true;
    err_msg.push(err.msg.name);
  }

  return { err_flag, err_msg };
};

function* updateUserProfile(update) {
  const { err_flag, err_msg } = yield call(allErrorCheck, update.payload.error);
  if (err_flag) {
    return yield put(
      showModalTrue("UPDATE_USER_PROFILE_ERROR", "user_profile_error", {
        title: "入力エラー",
        msg: err_msg,
      })
    );
  }

  const { res, err } = yield call(userProfile, update);
  if (!err) {
    yield call(handleGetMeRequest);
    return yield put(updateUserProfileOk());
  } else if (err.response.status === 401) {
    yield put(tokenRefleshRequest());
    yield take(TOKEN_REFRESH_SUCCESS);
    yield call(updateUserProfile, update);
  }
  yield put(updateUserProfileNg(err));
}

export const profileSaga = [
  takeEvery(GET_GAME_TITLE_REQ, fetchGameTitle),
  takeEvery(UPDATE_USER_PROFILE_REQ, updateUserProfile),
];
