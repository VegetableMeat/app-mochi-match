import { SHOW_MODAL_TRUE, SHOW_MODAL_FALSE } from '../Action';

const initiaState = {
  showFlag: false,
  category: null,
  data: {}
}

const modalState = (state = initiaState, action) => {
  switch(action.type) {
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
    default: 
      return state
  }
}

export default modalState;