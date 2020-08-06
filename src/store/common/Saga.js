import axios from "axios";
import { axios_instance } from "../axios/axios";
import { put, call, takeLatest } from "redux-saga/effects";
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
  ADMIN_GAME_HARD_GET_REQ,
  ADMIN_GAME_HARD_ADD_REQ,
  ADMIN_GAME_HARD_DELETE_REQ,
  ADMIN_GAME_HARD_UPDATE_REQ,
  adminGameHardGetOk,
  adminGameHardGetNg,
  adminGameHardAddOk,
  adminGameHardAddNg,
  adminGameHardDeleteOk,
  adminGameHardDeleteNg,
  adminGameHardUpdateOk,
  adminGameHardUpdateNg,
  POST_REPORT_REQ,
  postReportOk,
} from "./Action";

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
  if (localStorage.getItem("access_token")) {
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
 * 管理画面でゲームハードを取得する処理
 */
const resAdminHardGet = (get) => {
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
  const game_title = add.payload || "入力しろや";
  if (game_title !== "入力しろや") {
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
/**
 * 管理画面でゲームハードを登録する処理
 * @param {string} add - 追加したいゲームハード
 */
const resAdminHardAdd = (add) => {
  const game_hard = add.payload || "入力しろや";
  if (game_hard !== "入力しろや") {
    return axios_instance
      .post(add.url, {
        hard_name: add.payload,
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
};
//管理画面でゲームタイトルを削除する処理
const resAdminDelete = (del) => {
  const check = del.payload[0] || "チェックしろや";
  if (check !== "チェックしろや") {
    let query = "/?id=" + check;
    del.payload = del.payload.filter((id) => {
      return id !== del.payload[0];
    });
    del.payload.forEach((id) => {
      query += "&id=" + id;
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

//管理画面でゲームハードを削除する処理

const resAdminHardDelete = (del) => {
  const check = del.payload[0] || "チェックしろや";
  if (check !== "チェックしろや") {
    let query = "/?id=" + check;
    del.payload = del.payload.filter((id) => {
      return id !== del.payload[0];
    });
    del.payload.forEach((id) => {
      query += "&id=" + id;
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
//管理画面でゲームタイトルを更新する処理
const resAdminUpdate = (up) => {
  const check =
    (up.text && up.check.length === 1) ||
    "チェック数が１つでないか、未入力です";
  if (check !== "チェック数が１つでないか、未入力です") {
    const url = up.url + "/" + up.check;
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
//管理画面でゲームハードを更新する処理
const resAdminHardUpdate = (up) => {
  const check =
    (up.text && up.check.length === 1) ||
    "チェック数が１つでないか、未入力です";
  if (check !== "チェック数が１つでないか、未入力です") {
    const url = up.url + "/" + up.check;
    return axios_instance
      .put(url, {
        hard_name: up.text,
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
  const { data, error } = yield call(resAdminHardGet, get);

  if (data && !error) {
    return yield put(adminGameHardGetOk(data));
  }

  return yield put(adminGameHardGetNg(error));
}

function* fetchAdminGameHardAdd(add) {
  const { data, error } = yield call(resAdminHardAdd, add);

  if (data && !error) {
    yield put(adminGameHardAddOk(data));
    window.location.reload();
    return;
  }

  return yield put(adminGameHardAddNg(error));
}

function* fetchAdminGameHardDelete(del) {
  const { data, error } = yield call(resAdminHardDelete, del);

  if (data && !error) {
    yield put(adminGameHardDeleteOk(data));
    window.location.reload();
    return;
  }

  return yield put(adminGameHardDeleteNg(error));
}

function* fetchAdminGameHardUpdate(up) {
  const { data, error } = yield call(resAdminHardUpdate, up);

  if (data && !error) {
    yield put(adminGameHardUpdateOk(data));
    window.location.reload();
    return;
  }

  return yield put(adminGameHardUpdateNg(error));
}

export const adminTitleSaga = [
  takeLatest(ADMIN_GAME_TITLE_GET_REQ, fetchAdminGameTitleGet),
  takeLatest(ADMIN_GAME_TITLE_ADD_REQ, fetchAdminGameTitleAdd),
  takeLatest(ADMIN_GAME_TITLE_DELETE_REQ, fetchAdminGameTitleDelete),
  takeLatest(ADMIN_GAME_TITLE_UPDATE_REQ, fetchAdminGameTitleUpdate),
];

export const adminHardSaga = [
  takeLatest(ADMIN_GAME_HARD_GET_REQ, fetchAdminHardGet),
  takeLatest(ADMIN_GAME_HARD_ADD_REQ, fetchAdminGameHardAdd),
  takeLatest(ADMIN_GAME_HARD_DELETE_REQ, fetchAdminGameHardDelete),
  takeLatest(ADMIN_GAME_HARD_UPDATE_REQ, fetchAdminGameHardUpdate),
];

const resPostReport = (post) => {
  let report = [];
  post.payload.check.forEach((value) => {
    report.push(post.payload.report[value]);
  });

  return axios_instance
    .post(post.url, {
      vaiolator_id: post.payload.owner_id,
      detail: report,
    })
    .then((res) => {
      return { res };
    })
    .catch((e) => {
      const error = e.toString();
      return { error };
    });
};

function* postReport(post) {
  const { data, err } = yield call(resPostReport, post);
  console.log(data);
  if (!err) {
    return yield put(postReportOk());
  }
}

export const reportSaga = [takeLatest(POST_REPORT_REQ, postReport)];
