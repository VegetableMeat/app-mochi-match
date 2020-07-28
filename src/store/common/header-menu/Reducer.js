import {
  SHOW_HEADER_MENU_TRUE,
  SHOW_HEADER_MENU_FALSE,
  INIT_HEADER_MENU,
} from "../Action";

const initiaState = {
  showFlag: false,
};

const headerMenuState = (state = initiaState, action) => {
  switch (action.type) {
    case INIT_HEADER_MENU:
      return {
        ...state,
      };
    case SHOW_HEADER_MENU_TRUE:
      return {
        ...state,
        showFlag: true,
      };
    case SHOW_HEADER_MENU_FALSE:
      return {
        ...state,
        showFlag: false,
      };
    default:
      return state;
  }
};

export default headerMenuState;
