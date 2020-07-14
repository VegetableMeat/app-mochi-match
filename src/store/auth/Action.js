export const TOKEN_REFRESH_REQUEST = "TOKEN_REFRESH_REQUEST";
export const TOKEN_REFRESH_SUCCESS = "TOKEN_REFRESH_SUCCESS";
export const TOKEN_REFRESH_ERROR = "TOKEN_REFRESH_ERROR";

export const tokenRefleshRequest = () => {
  return {
    type: TOKEN_REFRESH_REQUEST,
  };
};

export const tokenRefleshSuccess = () => {
  return {
    type: TOKEN_REFRESH_SUCCESS,
  };
};

export const tokenRefleshError = () => {
  return {
    type: TOKEN_REFRESH_ERROR,
  };
};
