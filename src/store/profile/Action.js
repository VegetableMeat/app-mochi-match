export const INPUT_USER_NAME = "INPUT_USER_NAME";

export const inputUserName = (name) => {
  return {
    type: INPUT_USER_NAME,
    payload: name,
  };
};
