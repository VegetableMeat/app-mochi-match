import { takeLatest, put, call, take, fork, takeEvery } from 'redux-saga/effects';
import { fetchRoomList } from './../room/Saga'
import { handleCheckEntryRequest, handleGetMeRequest } from './../user/Saga'
import { INIT } from './Action'

function* initProduct(action) {
  yield call(fetchRoomList)
  // TODO トークンがあれば
  yield call(handleGetMeRequest)
  yield call(handleCheckEntryRequest, action)
}

export function* watchInit() {
  yield takeEvery(INIT, initProduct);
}


