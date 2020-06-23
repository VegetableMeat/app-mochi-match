import { ADMIN_GAME_TITLE_GET_REQ, ADMIN_GAME_TITLE_GET_OK, ADMIN_GAME_TITLE_GET_NG, ADMIN_GAME_TITLE_ADD, ADMIN_GAME_TITLE_DELETE, GAME_TITLE_CHECK } from '../Action';

const initiaState = {
	data: {
		title: [],
		hard: []
	},
	checked: {
		title: [],
		hard: []
	},
	error: {
		title: "",
		hard: ""
	},
	result: ""
}

const adminState = (state = initiaState, action) => {
	switch(action.type) {
		case ADMIN_GAME_TITLE_GET_REQ:
			return {
				...state,
				data: {
					title: [],
					hard: []
				},
				checked: {
					title: [],
					hard: []
				},
				error: {
					title: "",
					hard: ""
				}
			}
		case ADMIN_GAME_TITLE_GET_OK:
			return {
				...state,
				data: {
					...state.data,
					title: action.payload
				}
			}
		case ADMIN_GAME_TITLE_GET_NG:
			return {
				...state,
				error: {
					...state.error,
					title: action.error
				}
			}
		case ADMIN_GAME_TITLE_ADD:
			return {
				// ...state,
				// data: action.payload,
				// result: action.payload
			}
		case ADMIN_GAME_TITLE_DELETE:
			return {
				// ...state,
				// data: action.payload,
				// result: action.payload
			}
		case GAME_TITLE_CHECK:
			if(action.toggle) {
				return {
					...state,
					checked: {
						...state.checked,
						title: [
							...state.checked.title,
							action.payload
						]
					}
				}
			}
			return {
				...state,
				checked: {
					...state.checked,
					title: checkedFilter(state.checked.title, action.payload)
				}
			}
		default: 
			return state
	}
}

function checkedFilter(state, pay) {
	return state.filter((data) => {
		return data !== pay
	})
}

export default adminState;