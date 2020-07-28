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
import { call, put, takeEvery } from "redux-saga/effects";

function* fetchGameTitle(get) {
  const { res, err } = yield call(getGameTitle, get);
  if (!err) {
    return yield put(getGameTitleOk(res));
  }
  yield put(getGameTitleNg(err));
}

const userProfile = (update) => {
  console.log("update", update.payload);
  const favorite = update.payload.profile.favorite.map((fav) => {
    return { game_title: fav.game_title };
  });
  console.log("favorite", favorite);
  return axios_instance
    .put(update.url, {
      user_name: update.payload.name,
      icon: update.payload.icon,
      favorite_games: [
        { game_title: "test1" },
        { game_title: "test2" },
        { game_title: "test3" },
        { game_title: "test4" },
        { game_title: "test5" },
      ],
    })
    .then((res) => {
      return { res };
    })
    .catch((e) => {
      const error = e.toString();
      return { error };
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
    return yield put(updateUserProfileOk());
  }
  yield put(updateUserProfileNg(err));
}

export const profileSaga = [
  takeEvery(GET_GAME_TITLE_REQ, fetchGameTitle),
  takeEvery(UPDATE_USER_PROFILE_REQ, updateUserProfile),
];
