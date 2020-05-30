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
    type: SHOW_MODAL_FALSE
  }
}