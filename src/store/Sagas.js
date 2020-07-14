import { all, fork, call } from "redux-saga/effects";
import {
  watchGetRoomListRequest,
  watchRoomJoinRequest,
  handleRoomJoinSuccess,
  watchLeaveRoomRequest,
  watchDeleteRoomRequest,
  watchGetChatpostRequest,
  watchCreateChatpostRequest,
} from "./room/Saga";
import { favoriteGamesSaga, popularGamesSaga } from "./game/Saga";
import {
  loginSaga,
  authSaga,
  adminTitleSaga,
  adminHardSaga,
} from "./common/Saga";
import { watchInit } from "./init/Saga";
import { watchCheckEntryRequest, watchCheckEntrySuccess } from "./user/Saga";
import { watchTokenRefleshRequest } from "./auth/Saga";

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
    call(watchGetChatpostRequest),
    call(watchCreateChatpostRequest),
    call(watchLeaveRoomRequest),
    call(watchDeleteRoomRequest),
    call(watchCheckEntryRequest),
    call(watchCheckEntrySuccess),
    call(watchTokenRefleshRequest),
  ]);
}
