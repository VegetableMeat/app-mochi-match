import { SHOW_MODAL_TRUE, SHOW_MODAL_FALSE, SHOW_MODAL_REPORT, FINAL_CONFIRMATION, END_MODAL } from '../Action';

const initiaState = {
  showFlag: false,
  category: null,
  data: {}//選択されたデータ
  
}

const modalState = (state = initiaState, action) => {
  switch (action.type) {
    case SHOW_MODAL_TRUE:
      return {
        ...state,
        showFlag: true,
        category: action.category,
        data: action.data
      }
    case SHOW_MODAL_FALSE:
      return {
        ...state,
        showFlag: false,
        category: action.category,
        data: action.data
      }
    case SHOW_MODAL_REPORT:
      return {
        ...state,
        showFlag: false,
        category: action.category,
        data: action.data
      }
    case FINAL_CONFIRMATION:
      return {
        ...state,
        showFlag: false,
        category: action.category,
        data: action.data
      }
    case END_MODAL:
      return {
        ...state,
        showFlag: false,
        category: action.category,
        data: action.data
      }
    default:
      return state
  }
}

export default modalState;