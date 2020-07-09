import { takeLatest, put, call, take, fork, takeEvery } from 'redux-saga/effects';
import { fetchRoomList } from './../room/Saga'
import { handleCheckEntryRequest, handleGetMeRequest } from './../user/Saga'
import { INIT } from './Action'
import { openSocket } from './../socket/Action'

function* initProduct(action) {
  yield put(openSocket())
  yield call(fetchRoomList)
  // TODO トークンがあれば
  yield call(handleGetMeRequest)
  yield call(handleCheckEntryRequest, action.payload)
}

export function* watchInit() {
  yield takeEvery(INIT, initProduct);
}


