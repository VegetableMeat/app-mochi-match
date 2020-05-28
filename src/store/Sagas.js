import { all } from 'redux-saga/effects';
import { roomListSaga } from './room/Saga';
import { favoriteGamesSaga } from './game/Saga';

export default function* rootSaga() {
  yield all([
    ...roomListSaga,
    ...favoriteGamesSaga
  ])
}