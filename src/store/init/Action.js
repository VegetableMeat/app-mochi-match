export const INIT = 'GET_ROOM_NG';

export const init = (history) => {
  return {
    type: INIT,
    payload: history
  };
};