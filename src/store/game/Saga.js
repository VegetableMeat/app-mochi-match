import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { 
  GET_FAVORITE_GAMES_REQ,
  getFavoriteGamesOk,
  getFavoriteGamesNg
} from './Action';

const requestFavoriteGamesApi = () => {
  const url = `http://192.168.1.42:3000/favorite-game/1`;
  return axios
    .get(url)
    .then((res) => {
      const data = res.data;
      return { data }
    })
    .catch((error) => {
      return { error }
    })
}

function* fetchFavoriteGames() {
  const { data, error } = yield call(requestFavoriteGamesApi)
  
  if(data) {
    yield put(getFavoriteGamesOk(data))
  } else {
    yield put(getFavoriteGamesNg(error))
  }
}

export const favoriteGamesSaga = [takeLatest(GET_FAVORITE_GAMES_REQ, fetchFavoriteGames)];