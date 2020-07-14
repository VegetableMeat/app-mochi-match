import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import {
  GET_FAVORITE_GAMES_REQ,
  getFavoriteGamesOk,
  getFavoriteGamesNg,
  GET_POPULAR_GAMES_REQ,
  getPopularGamesOk,
  getPopularGamesNg,
} from "./Action";

// Favorite
const requestFavoriteGamesApi = () => {
  const url = `http://localhost:3000/favorite-game/1`;
  return axios
    .get(url)
    .then((res) => {
      const data = res.data;
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};

function* fetchFavoriteGames() {
  const { data, error } = yield call(requestFavoriteGamesApi);

  if (data) {
    yield put(getFavoriteGamesOk(data));
  } else {
    yield put(getFavoriteGamesNg(error));
  }
}

export const favoriteGamesSaga = [
  takeLatest(GET_FAVORITE_GAMES_REQ, fetchFavoriteGames),
];

// Popular
const requestPopularGamesApi = () => {
  const url = `http://localhost:3000/popular-game`;
  return axios
    .get(url)
    .then((res) => {
      const data = res.data;
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};

function* fetchPopularGames() {
  const { data, error } = yield call(requestPopularGamesApi);

  if (data) {
    yield put(getPopularGamesOk(data));
  } else {
    yield put(getPopularGamesNg(error));
  }
}

export const popularGamesSaga = [
  takeLatest(GET_POPULAR_GAMES_REQ, fetchPopularGames),
];
