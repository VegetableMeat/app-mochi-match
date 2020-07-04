import { all, fork } from 'redux-saga/effects';
import { roomListSaga } from './room/Saga';
import { favoriteGamesSaga, popularGamesSaga } from './game/Saga';
import { loginSaga, authSaga, adminTitleGetSaga, adminTitleAddSaga, adminTitleDeleteSaga, adminTitleUpdateSaga } from './common/Saga';
import { handleRoomJoinRequest, handleRoomJoinSuccess, handleRoomLeaveRequest } from './room/Saga'

export default function* rootSaga() {
  yield all([
    ...roomListSaga,
    ...favoriteGamesSaga,
    ...popularGamesSaga,
    ...loginSaga,
    ...authSaga,
    ...adminTitleGetSaga,
    ...adminTitleAddSaga,
    ...adminTitleDeleteSaga,
    ...adminTitleUpdateSaga,
  ]);
  yield fork(handleRoomJoinRequest);
  yield fork(handleRoomJoinSuccess);
  yield fork(handleRoomLeaveRequest);
}
