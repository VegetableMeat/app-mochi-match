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
	ADMIN_GAME_TITLE_UPDATE_REQ,
	ADMIN_GAME_TITLE_UPDATE_OK,
	ADMIN_GAME_TITLE_UPDATE_NG,
	GAME_TITLE_CHECK,
	GAME_TITLE_TEXT,
	////////////////////////////////////
	ADMIN_GAME_HARD_GET_REQ,
	ADMIN_GAME_HARD_GET_OK,
	ADMIN_GAME_HARD_GET_NG,
	ADMIN_GAME_HARD_ADD_REQ,
	ADMIN_GAME_HARD_ADD_OK,
	ADMIN_GAME_HARD_ADD_NG,
	ADMIN_GAME_HARD_DELETE_REQ,
	ADMIN_GAME_HARD_DELETE_OK,
	ADMIN_GAME_HARD_DELETE_NG,
	ADMIN_GAME_HARD_UPDATE_REQ,
	ADMIN_GAME_HARD_UPDATE_OK,
	ADMIN_GAME_HARD_UPDATE_NG,
	GAME_HARD_CHECK,
	GAME_HARD_TEXT

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
		},
		update: {
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
		update: {
			title: "",
			hard: ""
		}
	},
}

////////////////////////////////////////////////////////////
const adminState = (state = initiaState, action) => {
	switch (action.type) {
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
		case ADMIN_GAME_TITLE_UPDATE_REQ:
			return {
				...state,
			}
		case ADMIN_GAME_TITLE_UPDATE_OK:
			return {
				...state,
				result: {
					...state.result,
					update: {
						...state.result.update,
						title: action.payload
					}
				},
				error: {
					...state.error,
				},
			}
		case ADMIN_GAME_TITLE_UPDATE_NG:
			return {
				...state,
				error: {
					...state.error,
					update: {
						...state.error.update,
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
			if (action.toggle) {
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
					case ADMIN_GAME_HARD_GET_REQ:
			return {
				...state,
			}
		case ADMIN_GAME_HARD_GET_OK:
			return {
				...state,
				data: {
					...state.data,
					hard: action.payload
				},
				result: {
					...state.result,
				},
			}
		case ADMIN_GAME_HARD_GET_NG:
			return {
				...state,
				error: {
					...state.error,
					get: {
						...state.error.get,
						hard: action.error
					}
				}
			}
		case ADMIN_GAME_HARD_ADD_REQ:
			return {
				...state,
			}
		case ADMIN_GAME_HARD_ADD_OK:
			return {
				...state,
				result: {
					...state.result,
					add: {
						...state.result.add,
						hard: action.payload
					}
				},
				error: {
					...state.error
				},
			}
		case ADMIN_GAME_HARD_ADD_NG:
			return {
				...state,
				error: {
					...state.error,
					add: {
						...state.error.add,
						hard: action.error
					}
				}
			}
		case ADMIN_GAME_HARD_DELETE_REQ:
			return {
				...state,
			}
		case ADMIN_GAME_HARD_DELETE_OK:
			return {
				...state,
				result: {
					...state.result,
					delete: {
						...state.result.delete,
						hard: action.payload
					}
				},
				error: {
					...state.error,
				},
			}
		case ADMIN_GAME_HARD_DELETE_NG:
			return {
				...state,
				error: {
					...state.error,
					delete: {
						...state.error.delete,
						hard: action.error
					}
				}
			}
		case ADMIN_GAME_HARD_UPDATE_REQ:
			return {
				...state,
			}
		case ADMIN_GAME_HARD_UPDATE_OK:
			return {
				...state,
				result: {
					...state.result,
					update: {
						...state.result.update,
						hard: action.payload
					}
				},
				error: {
					...state.error,
				},
			}
		case ADMIN_GAME_HARD_UPDATE_NG:
			return {
				...state,
				error: {
					...state.error,
					update: {
						...state.error.update,
						hard: action.error
					}
				}
			}
		case GAME_HARD_TEXT:
			return {
				...state,
				text: {
					...state.text,
					hard: action.payload
				}
			}
		case GAME_HARD_CHECK:
			if (action.toggle) {
				return {
					...state,
					checked: {
						...state.checked,
						hard: [
							...state.checked.hard,
							action.payload
						]
					}
				}
			}
			return {
				...state,
				checked: {
					...state.checked,
					hard: checkedFilter(state.checked.hard, action.payload)
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
///////////////////////////////////////////////////////////////////


export default adminState




