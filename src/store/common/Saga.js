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
  ADMIN_GAME_TITLE_DELETE_REQ,
  ADMIN_GAME_TITLE_UPDATE_REQ,
  adminGameTitleGetOk,
  adminGameTitleGetNg,
  adminGameTitleAddOk,
  adminGameTitleAddNg,
  adminGameTitleDeleteOk,
  adminGameTitleDeleteNg,
  adminGameTitleUpdateOk,
  adminGameTitleUpdateNg,
} from './Action';

// Login
const responseLogin = () => {
  const url = `https://api.mochi-match.work/v1/auth/google/login`;
  return axios
    .get(url, {
      withCredentials: true,
    })
    .then((res) => {
      window.location.replace(res.data);
    })
    .catch((error) => {
      return { error };
    });
};

function* fetchLogin() {
  if (yield call(responseLogin)) {
    yield put(loginOk());
  } else {
    yield put(loginNg());
  }
}

export const loginSaga = [takeLatest(LOGIN_REQ, fetchLogin)];

// Auth
/**
 * ローカルストレージの jwt の中身を見て、存在していたなら Login フラグを true にする処理
 */
const responseAuth = () => {
  if (localStorage.getItem('jwt')) {
    return true;
  }
  return false;
};

function* fetchAuth() {
  if (yield call(responseAuth)) {
    yield put(loginOk());
  } else {
    yield put(loginNg());
  }
}

export const authSaga = [takeLatest(AUTH_REQ, fetchAuth)];

// Admin
/**
 * 管理画面でゲームタイトルを取得する処理
 */
const resAdminGet = (get) => {
  return axios_instance
    .get(get.url)
    .then((res) => {
      const data = res.data;
      return { data };
    })
    .catch((e) => {
      const error = e.toString();
      return { error };
    });
};

/**
 * 管理画面でゲームタイトルを登録する処理
 * @param {string} add - 追加したいゲームタイトル
 */
const resAdminAdd = (add) => {
  const game_title = add.payload || '入力しろや';
  if (game_title !== '入力しろや') {
    return axios_instance
      .post(add.url, {
        game_title: add.payload,
      })
      .then((res) => {
        const data = res.data.message;
        return { data };
      })
      .catch((e) => {
        const error = e.toString();
        return { error };
      });
  }

  const error = game_title.toString();
  return { error };
};

const resAdminDelete = (del) => {
  const check = del.payload[0] || 'チェックしろや';
  if (check !== 'チェックしろや') {
    let query = '/?id=' + check;
    del.payload = del.payload.filter((id) => {
      return id !== del.payload[0];
    });
    del.payload.forEach((id) => {
      query += '&id=' + id;
    });

    return axios_instance
      .delete(del.url + query)
      .then((res) => {
        const data = res.data.message;
        return { data };
      })
      .catch((e) => {
        const error = e.toString();
        return { error };
      });
  }

  const error = check.toString();
  return { error };
};

const resAdminUpdate = (up) => {
  const check = (up.text && up.check.length === 1) || 'チェック数が１つでないか、未入力です';
  if (check !== 'チェック数が１つでないか、未入力です') {
    const url = up.url + '/' + up.check;
    return axios_instance
      .put(url, {
        game_title: up.text,
      })
      .then((res) => {
        const data = res.data.message;
        return { data };
      })
      .catch((e) => {
        const error = e.toString();
        return { error };
      });
  }

  const error = check.toString();
  return { error };
};

function* fetchAdminGameTitleGet(get) {
  const { data, error } = yield call(resAdminGet, get);

  if (data && !error) {
    return yield put(adminGameTitleGetOk(data));
  }

  return yield put(adminGameTitleGetNg(error));
}

function* fetchAdminGameTitleAdd(add) {
  const { data, error } = yield call(resAdminAdd, add);

  if (data && !error) {
    yield put(adminGameTitleAddOk(data));
    window.location.reload();
    return;
  }

  return yield put(adminGameTitleAddNg(error));
}

function* fetchAdminGameTitleDelete(del) {
  const { data, error } = yield call(resAdminDelete, del);

  if (data && !error) {
    yield put(adminGameTitleDeleteOk(data));
    window.location.reload();
    return;
  }

  return yield put(adminGameTitleDeleteNg(error));
}

function* fetchAdminGameTitleUpdate(up) {
  const { data, error } = yield call(resAdminUpdate, up);

  if (data && !error) {
    yield put(adminGameTitleUpdateOk(data));
    window.location.reload();
    return;
  }

  return yield put(adminGameTitleUpdateNg(error));
}

function* fetchAdminHardGet(get) {
  const { data, error } = yield call(resAdminGet, get);

  if (data && !error) {
    return yield put(adminGameTitleGetOk(data));
  }

  return yield put(adminGameTitleGetNg(error));
}

function* fetchAdminHardAdd(add) {}

function* fetchAdminHardDelete(del) {}

export const adminTitleGetSaga = [takeLatest(ADMIN_GAME_TITLE_GET_REQ, fetchAdminGameTitleGet)];
export const adminTitleAddSaga = [takeLatest(ADMIN_GAME_TITLE_ADD_REQ, fetchAdminGameTitleAdd)];
export const adminTitleDeleteSaga = [
  takeLatest(ADMIN_GAME_TITLE_DELETE_REQ, fetchAdminGameTitleDelete),
];
export const adminTitleUpdateSaga = [
  takeLatest(ADMIN_GAME_TITLE_UPDATE_REQ, fetchAdminGameTitleUpdate),
];

// export const adminHardGetSaga = [takeLatest(ADMIN_GAME_TITLE_GET_REQ, fetchAdminHardGet)];
// export const adminHardAddSaga = [takeLatest(ADMIN_GAME_TITLE_ADD_REQ, fetchAdminHardAdd)];
// export const adminHardDeleteSaga = [takeLatest(ADMIN_GAME_TITLE_DELETE_REQ, fetchAdminHardDelete)];
