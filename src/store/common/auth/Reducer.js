import { AUTH_REQ, AUTH_OK, AUTH_NG } from '../Action';

const initiaState = {
	loggedIn: false,
	init: true
}

const authState = (state = initiaState, action) => {
	switch(action.type) {
		case AUTH_REQ:
			return {
				...state,
				init: false
			}
		case AUTH_OK:
			return {
				...state,
				loggedIn: true
			}
		case AUTH_NG:
			return {
				...state,
				loggedIn: false
			}
		default: 
			return state
	}
}

export default authState;