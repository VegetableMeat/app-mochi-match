// Modal
export const SHOW_MODAL_TRUE = 'SHOW_MODAL_TRUE';
export const SHOW_MODAL_FALSE = 'SHOW_MODAL_FALSE';

export const showModalTrue = (category, data) => {
  return {
    type: SHOW_MODAL_TRUE,
    category: category,
    data: data
  }
}

export const showModalFalse = () => {
  return {
    type: SHOW_MODAL_FALSE,
    category: null,
    data: {}
  }
}

// HeaderMenu
export const SHOW_HEADER_MENU_TRUE = 'SHOW_HEADER_MENU_TRUE';
export const SHOW_HEADER_MENU_FALSE = 'SHOW_HEADER_MENU_FALSE';

export const showHeaderMenuTrue = () => {
  return {
    type: SHOW_HEADER_MENU_TRUE
  }
}

export const showHeaderMenuFalse = () => {
  return {
    type: SHOW_HEADER_MENU_FALSE
  }
}

// Auth
export const AUTH_REQ = 'AUTH_REQ';

export const authReq = () => {
	return {
		type: AUTH_REQ
	}
}

// Login
export const LOGIN_REQ = 'LOGIN_REQ';
export const LOGIN_OK = 'LOGIN_OK';
export const LOGIN_NG = 'LOGIn_NG';
export const LOGOUT_REQ = 'LOGOUT_REQ';
export const LOGOUT = 'LOGOUT';

export const loginReq = () => {
	return {
		type: LOGIN_REQ
	}
}

export const loginOk = () => {
	return {
		type: LOGIN_OK
	}
}

export const loginNg = () => {
	return {
		type: LOGIN_NG
	}
}

export const logoutReq = () => {
	return {
		type: LOGOUT_REQ
	}
}

export const logout = () => {
	return {
		type: LOGOUT
	}
}

// Admin
export const ADMIN_GAME_TITLE_GET_REQ = 'ADMIN_GAME_TITLE_GET_REQ';
export const ADMIN_GAME_TITLE_GET_OK = 'ADMIN_GAME_TITLE_GET_OK';
export const ADMIN_GAME_TITLE_GET_NG = 'ADMIN_GAME_TITLE_GET_NG';
export const ADMIN_GAME_TITLE_ADD = 'ADMIN_GAME_TITLE_ADD';
export const ADMIN_GAME_TITLE_DELETE = 'ADMIN_GAME_TITLE_DELETE';
export const GAME_TITLE_CHECK = 'GAME_TITLE_CHECK';

export const adminGameTitleGetReq = () => {
	return {
		type: ADMIN_GAME_TITLE_GET_REQ
	}
}

export const adminGameTitleGetOk = (data) => {
	return {
		type: ADMIN_GAME_TITLE_GET_OK,
		payload: data
	}
}

export const adminGameTitleGetNg = (error) => {
	return {
		type: ADMIN_GAME_TITLE_GET_NG,
		error: error
	}
}

export const adminGameTitleAdd = (data) => {
	return {
		type: ADMIN_GAME_TITLE_ADD,
		payload: data
	}
}

export const adminGameTitleDelete = (data) => {
	return {
		type: ADMIN_GAME_TITLE_DELETE,
		payload: data
	}
}

export const gameTitleCheck = (data, toggle) => {
	return {
		type: GAME_TITLE_CHECK,
		payload: data,
		toggle: toggle
	}
}