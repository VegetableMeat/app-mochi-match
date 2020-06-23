import { all } from 'redux-saga/effects';
import { roomListSaga } from './room/Saga';
import { favoriteGamesSaga, popularGamesSaga } from './game/Saga';
import { loginSaga, authSaga, adminGetSaga } from './common/Saga';

export default function* rootSaga() {
	yield all([
		...roomListSaga,
		...favoriteGamesSaga,
		...popularGamesSaga,
		...loginSaga,
		...authSaga,
		...adminGetSaga
	])
}