import { AUTH_REQ, AUTH_OK, AUTH_NG } from '../Action';

const initiaState = {
	init: true,
	loggedIn: false
}

const authState = (state = initiaState, action) => {
	switch(action.type) {
		case AUTH_REQ:
			console.log("REQに")
			return {
				...state,
				init: true
			}
		case AUTH_OK:
			console.log("OKに")
			return {
				...state,
				init: false,
				loggedIn: true
			}
		case AUTH_NG:
			console.log("NGに")
			return {
				...state,
				init: false,
				loggedIn: false
			}
		default: 
			return state
	}
}

export default authState;