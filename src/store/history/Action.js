export const GET_HISTORY_REQUEST = "GET_HISTORY_REQUEST";
export const GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS";
export const GET_HISTORY_ERROR = "GET_HISTORY_ERROR";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const getHistoryRequest = () => {
  return {
    type: GET_HISTORY_REQUEST,
  };
};

export const getHistorySuccess = (payload) => {
  return {
    type: GET_HISTORY_SUCCESS,
    payload: payload,
  };
};

export const getHistoryError = (error) => {
  return {
    type: GET_HISTORY_ERROR,
    payload: error,
  };
};

export const getUserRequest = (id) => {
  return {
    type: GET_USER_REQUEST,
    payload: id,
  };
};

export const getUserSuccess = (id) => {
  return {
    type: GET_USER_SUCCESS,
    payload: id,
  };
};

export const getUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    payload: error,
  };
};
