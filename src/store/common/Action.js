// Modal
export const SHOW_MODAL_TRUE = "SHOW_MODAL_TRUE";
export const SHOW_MODAL_FALSE = "SHOW_MODAL_FALSE";
// export const SHOW_MODAL_REPORT = 'SHOW_MODAL_REPORT';
// export const FINAL_CONFIRMATION = "FINAL_CONFIRMATION";
// export const END_MODAL = "END_MODAL";
export const SHOW_MODAL_FRONT = "SHOW_MODAL_FRONT";
export const SHOW_MODAL_BACK = "SHOW_MODAL_BACK";
export const MODAL_CHECK = "MODAL_CHECK";

export const showModalTrue = (category, key, data) => {
	return {
		type: SHOW_MODAL_TRUE,
		category: category,
		key: key,
		payload: data,
	}
}

export const showModalFalse = () => {
	return {
		type: SHOW_MODAL_FALSE,
		category: null,
		payload: {},
	}
}

export const showModalFront = (category, key, data) => {
	return {
		type: SHOW_MODAL_FRONT,
		category: category,
		key: key,
		payload: data,
	}
}

export const showModalBack = () => {
	return {
		type: SHOW_MODAL_BACK,
	}
}

export const modalCheck = (data, toggle) => {
	return {
		type: MODAL_CHECK,
		payload: data,
		toggle: toggle,
	}
}

//HeaderMenu
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