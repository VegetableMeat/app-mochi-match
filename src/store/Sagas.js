import { all } from 'redux-saga/effects';
import { roomListSaga } from './room/Saga';

export default function* rootSaga() {
  yield all([
    ...roomListSaga
  ])
}