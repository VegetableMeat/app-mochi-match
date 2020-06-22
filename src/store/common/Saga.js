import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { 
	AUTH_REQ,
	LOGIN_REQ,
	loginOk,
	loginNg
} from './Action';

// Login
const responseLogin = () => {
	const url = `https://api.mochi-match.work/v1/auth/google/login`;
	return axios
	.get(url, {
		withCredentials: true
	})
	.then((res) => {
		window.location.replace(res.data);
	})
	.catch((error) => {
		return { error }
	})
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
/**
 * ローカルストレージの jwt の中身を見て、存在していたなら Login フラグを true にする処理
 */
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