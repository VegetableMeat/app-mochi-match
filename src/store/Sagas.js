import { all, fork, call } from 'redux-saga/effects';
import { watchGetRoomListRequest, watchRoomJoinRequest, handleRoomJoinSuccess, watchRoomLeaveRequest } from './room/Saga';
import { favoriteGamesSaga, popularGamesSaga } from './game/Saga';
import { loginSaga, authSaga, adminTitleSaga, adminHardSaga } from './common/Saga';
import { watchInit } from './init/Saga'
import { watchCheckEntryRequest, watchCheckEntrySuccess } from './user/Saga'

export default function* rootSaga() {
  yield all([
    ...favoriteGamesSaga,
    ...popularGamesSaga,
    ...loginSaga,
    ...authSaga,
    ...adminTitleSaga,
    ...adminHardSaga,
    call(watchInit),
    call(watchGetRoomListRequest),
    call(watchRoomJoinRequest),
    call(handleRoomJoinSuccess),
    call(watchRoomLeaveRequest),
    call(watchCheckEntryRequest),
    call(watchCheckEntrySuccess),
  ]);
}
