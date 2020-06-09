import { put, call, takeLatest } from 'redux-saga/effects';
import { 
	AUTH_REQ,
	LOGIN_REQ,
	loginOk,
	loginNg
} from './Action';

// Login
const responseLogin = () => {
	localStorage.setItem('jwt', 'aaaaaaa');
	return true;
}

function* fetchLogin() {
	if(yield call(responseLogin)) {
		yield put(loginOk())
	} else {
		yield put(loginNg())
	}
}

export const loginSaga = [takeLatest(LOGIN_REQ, fetchLogin)];

// Auth
const responseAuth = () => {
	if(localStorage.getItem('jwt')) {
		return true;
	}
	return false;
}

function* fetchAuth() {
	if(yield call(responseAuth)) {
		yield put(loginOk())
	} else {
		yield put(loginNg())
	}
}

export const authSaga = [takeLatest(AUTH_REQ, fetchAuth)];