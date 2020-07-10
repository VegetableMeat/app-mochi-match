import { SHOW_MODAL_TRUE, SHOW_MODAL_FALSE, SHOW_MODAL_FRONT, SHOW_MODAL_BACK, MODAL_CHECK, JOIN_ROOM } from '../Action';

const initiaState = {
	showFlag: false,
	category: null,
	history_category: null,
	data: {},
	report: ["性的な表現がされている", "出会い、異性交際を希望している", "各種法令違反している", "差別、罵倒、誹謗中傷などしている", "その他"]
}

const modalState = (state = initiaState, action) => {
	switch (action.type) {
		case SHOW_MODAL_TRUE:
			return {
				...state,
				showFlag: true,
				category: action.category,
				data: {
					...state.data,
					[action.key]: action.payload
				}
			}
		case SHOW_MODAL_FALSE:
			return {
				...state,
				showFlag: false,
				category: action.category,
				history_category: action.category,
				data: action.paylaod
			}
		case SHOW_MODAL_FRONT: {
			if (action.key) {
				return {
					...state,
					history_category: state.category,
					category: action.category,
					data: {
						...state.data,
						[action.key]: action.payload,
					}
				}
			}
			return {
				...state,
				history_category: state.category,
				category: action.category,
				data: {
					...state.data,
				}
			}
		}
		case SHOW_MODAL_BACK: {
			return {
				...state,
				category: state.history_category,
			}
		}
		case MODAL_CHECK:
			if (action.toggle) {
				return {
					...state,
					data: {
						...state.data,
						check: [
							...state.data.check,
							action.payload,
						]
					}
				}
			}

			return {
				...state,
				data: {
					...state.data,
					check: checkedFilter(state.data.check, action.payload)
				}
			}
		default:
			return state
	}
};

function checkedFilter(state, pay) {
	return state.filter((data) => {
		return data !== pay
	})
}

export default modalState;
