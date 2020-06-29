import axios from 'axios';
import { axios_instance } from '../axios/axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { 
	AUTH_REQ,
	LOGIN_REQ,
	loginOk,
	loginNg,
	ADMIN_GAME_TITLE_GET_REQ,
	ADMIN_GAME_TITLE_ADD_REQ,
	ADMIN_GAME_TITLE_DELETE,
	adminGameTitleGetOk,
	adminGameTitleGetNg,
	adminGameTitleAddOk,
	adminGameTitleAddNg,
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
/**
 * 管理画面でゲームタイトルを取得する処理
 */
const game_list_url = `/v1/gamelist`;
const resAdminGameTitleGet = () => {
	return axios_instance
	.get(game_list_url)
	.then((res) => {
		const data = res.data;
		return { data }
	})
	.catch((e) => {
		const error = e.toString();
		return { error }
	})
}

/**
 * 管理画面でゲームタイトルを登録する処理
 * @param {string} title - ゲームタイトル
 */
const resAdminGameTitleAdd = (title) => {
	const game_title = title.payload || "入力しろや";
	if(game_title != "入力しろや") {
		return axios_instance
		.post(game_list_url, {
			game_title: title.payload
		})
		.then((res) => {
			const data = res.data.message
			return { data }
		})
		.catch((e) => {
			const error = e.toString();
			return { error }
		})
	}

	const error = game_title.toString();
	return { error }
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

function* fetchAdminGameTitleAdd(title) {
	const { data, error } = yield call(resAdminGameTitleAdd, title)

	if(data && !error) {
		yield put(adminGameTitleAddOk(data))
		window.location.reload()
		return
	}

	return yield put(adminGameTitleAddNg(error))
}

function* fetchAdminGameTitleDelete() {
	
}

export const adminGetSaga = [takeLatest(ADMIN_GAME_TITLE_GET_REQ, fetchAdminGameTitleGet)];
export const adminAddSaga = [takeLatest(ADMIN_GAME_TITLE_ADD_REQ, fetchAdminGameTitleAdd)];
export const adminDeleteSaga = [takeLatest(ADMIN_GAME_TITLE_DELETE, fetchAdminGameTitleDelete)];