import {
	ADMIN_GAME_TITLE_GET_REQ,
	ADMIN_GAME_TITLE_GET_OK, 
	ADMIN_GAME_TITLE_GET_NG, 
	ADMIN_GAME_TITLE_ADD_REQ, 
	ADMIN_GAME_TITLE_ADD_OK, 
	ADMIN_GAME_TITLE_ADD_NG, 
	ADMIN_GAME_TITLE_DELETE_REQ, 
	ADMIN_GAME_TITLE_DELETE_OK,
	ADMIN_GAME_TITLE_DELETE_NG,
	GAME_TITLE_CHECK, 
	GAME_TITLE_TEXT 
} from '../Action';

const initiaState = {
	data: {
		title: [],
		hard: []
	},
	checked: {
		title: [],
		hard: []
	},
	text: {
		title: "",
		hard: ""
	},
	result: {
		add: {
			title: "",
			hard: ""
		},
		delete: {
			title: "",
			hard: ""
		}
	},
	error: {
		get: {
			title: "",
			hard: ""
		},
		add: {
			title: "",
			hard: ""
		},
		delete: {
			title: "",
			hard: ""
		},
	},
}

const adminState = (state = initiaState, action) => {
	switch(action.type) {
		case ADMIN_GAME_TITLE_GET_REQ:
			return {
				...state,
			}
		case ADMIN_GAME_TITLE_GET_OK:
			return {
				...state,
				data: {
					...state.data,
					title: action.payload
				},
				result: {
					// add: {
					// 	title: "",
					// 	hard: ""
					// }
					...state.result,
				},
			}
		case ADMIN_GAME_TITLE_GET_NG:
			return {
				...state,
				error: {
					...state.error,
					get: {
						...state.error.get,
						title: action.error
					}
				}
			}
		case ADMIN_GAME_TITLE_ADD_REQ:
			return {
				...state,
			}
		case ADMIN_GAME_TITLE_ADD_OK:
			return {
				...state,
				result: {
					...state.result,
					add: {
						...state.result.add,
						title: action.payload
					}
				},
				error: {
					// get: {
					// 	title: "",
					// 	hard: ""
					// },
					// add: {
					// 	title: "",
					// 	hard: ""
					// }
					...state.error
				},
			}
		case ADMIN_GAME_TITLE_ADD_NG:
			return {
				...state,
				error: {
					...state.error,
					add: {
						...state.error.add,
						title: action.error
					}
				}
			}
		case ADMIN_GAME_TITLE_DELETE_REQ:
			return {
				...state,
			}
		case ADMIN_GAME_TITLE_DELETE_OK:
			return {
				...state,
				result: {
					...state.result,
					delete: {
						...state.result.delete,
						title: action.payload
					}
				},
				error: {
					...state.error,
				},
			}
		case ADMIN_GAME_TITLE_DELETE_NG:
			return {
				...state,
				error: {
					...state.error,
					delete: {
						...state.error.delete,
						title: action.error
					}
				}
			}
		case GAME_TITLE_TEXT:
			return {
				...state,
				text: {
					...state.text,
					title: action.payload
				}
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