import axios from 'axios';
import { axios_instance } from '../axios/axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { 
	AUTH_REQ,
	LOGIN_REQ,
	loginOk,
	loginNg,
	ADMIN_GAME_TITLE_GET_REQ,
	ADMIN_GAME_TITLE_ADD,
	ADMIN_GAME_TITLE_DELETE,
	adminGameTitleGetOk,
	adminGameTitleGetNg,
	adminGameTitleAdd,
	adminGameTitleDelete
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

// Admin
const resAdminGameTitleGet = () => {
	const url = `/v1/gamelist`;
	return axios_instance
	.get(url)
	.then((res) => {
		const data = res.data;
		return { data }
	})
	.catch((error) => {
		return { error }
	})
}

const resAdminGameTitleAdd = () => {
	// console.log()
}

const resAdminGameTitleDelete = () => {
	
}

function* fetchAdminGameTitleGet() {
	const { data, error } = yield call(resAdminGameTitleGet)

	if(data && !error) {
		return yield put(adminGameTitleGetOk(data))
	}
	return yield put(adminGameTitleGetNg(error))
}

function* fetchAdminGameTitleAdd() {
	
}

function* fetchAdminGameTitleDelete() {
	
}

export const adminGetSaga = [takeLatest(ADMIN_GAME_TITLE_GET_REQ, fetchAdminGameTitleGet)];
export const adminAddSaga = [takeLatest(ADMIN_GAME_TITLE_ADD, fetchAdminGameTitleAdd)];
export const adminDeleteSaga = [takeLatest(ADMIN_GAME_TITLE_DELETE, fetchAdminGameTitleDelete)];