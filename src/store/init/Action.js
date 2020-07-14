export const INIT = "INIT";

export const init = (history) => {
  return {
    type: INIT,
    payload: history,
  };
};
