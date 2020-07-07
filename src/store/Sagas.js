import { all, fork } from 'redux-saga/effects';
import { roomListSaga } from './room/Saga';
import { favoriteGamesSaga, popularGamesSaga } from './game/Saga';
import { loginSaga, authSaga, adminTitleSaga, adminHardSaga } from './common/Saga';

export default function* rootSaga() {
  yield all([
    ...roomListSaga,
    ...favoriteGamesSaga,
    ...popularGamesSaga,
    ...loginSaga,
    ...authSaga,
    ...adminTitleSaga,
    ...adminHardSaga,
  ]);
  yield fork(handleRoomJoinRequest);
  yield fork(handleRoomJoinSuccess);
  yield fork(handleRoomLeaveRequest);
}
