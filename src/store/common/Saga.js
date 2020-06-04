import { put, call, takeLatest } from 'redux-saga/effects';
import { 
	AUTH_REQ,
	authOk,
	authNg
} from './Action';

// Auth
const responseAuth = () => {
	// TEST
	// localStorage.setItem('jwt', 'aaaaaaaaaaaaaaaaa');
	// localStorage.removeItem('jwt');
	const data = localStorage.getItem('jwt');
	if(data != null) {
		return true
	}
	return false
}

function* fetchAuth() {
	if(yield call(responseAuth)) {
		yield put(authOk())
	} else {
		yield put(authNg())
	}
}

export const authSaga = [takeLatest(AUTH_REQ, fetchAuth)];