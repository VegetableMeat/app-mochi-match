import { all, fork, call } from "redux-saga/effects";
import {
  roomCreationSaga,
  watchGetRoomListRequest,
  watchRoomJoinRequest,
  watchRoomJoinSuccess,
  watchLeaveRoomRequest,
  watchLeaveRoomAndJoinRequest,
  watchDeleteRoomAndJoinRequest,
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
  reportSaga,
} from "./common/Saga";
import { watchInit } from "./init/Saga";
import { watchCheckEntryRequest, watchCheckEntrySuccess } from "./user/Saga";
import { watchTokenRefleshRequest } from "./auth/Saga";
import { historySaga } from "./history/Saga";
import { profileSaga } from "./profile/Saga";
import { searchSaga } from "./search/Saga";

export default function* rootSaga() {
  yield all([
    ...favoriteGamesSaga,
    ...popularGamesSaga,
    ...loginSaga,
    ...authSaga,
    ...adminTitleSaga,
    ...adminHardSaga,
    ...roomCreationSaga,
    ...historySaga,
    ...profileSaga,
    ...reportSaga,
    ...searchSaga,
    call(watchInit),
    call(watchGetRoomListRequest),
    call(watchRoomJoinRequest),
    call(watchRoomJoinSuccess),
    call(watchGetChatpostRequest),
    call(watchCreateChatpostRequest),
    call(watchLeaveRoomRequest),
    call(watchLeaveRoomAndJoinRequest),
    call(watchDeleteRoomAndJoinRequest),
    call(watchDeleteRoomRequest),
    call(watchCheckEntryRequest),
    call(watchCheckEntrySuccess),
    call(watchTokenRefleshRequest),
  ]);
}
