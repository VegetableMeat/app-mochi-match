// Modal
export const SHOW_MODAL_TRUE = 'SHOW_MODAL_TRUE';
export const SHOW_MODAL_FALSE = 'SHOW_MODAL_FALSE';

export const showModalTrue = (category, data) => {
  return {
    type: SHOW_MODAL_TRUE,
    category: category,
    data: data
  }
}

export const showModalFalse = () => {
  return {
    type: SHOW_MODAL_FALSE,
    category: null,
    data: {}
  }
}

// HeaderMenu
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