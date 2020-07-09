import { put, call, takeEvery } from 'redux-saga/effects';
import { getRoomReq } from './../room/Action'
import { handleCheckEntryRequest, handleGetMeRequest } from './../user/Saga'
import { INIT } from './Action'
import { openSocket } from './../socket/Action'

function* initProduct(action) {
  yield put(openSocket())
  yield put(getRoomReq())
  // TODO トークンがあれば
  yield call(handleGetMeRequest)
  yield call(handleCheckEntryRequest, action.payload)
}

export function* watchInit() {
  yield takeEvery(INIT, initProduct);
}
