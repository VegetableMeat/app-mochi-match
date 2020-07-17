export const GET_HISTORY_REQUEST = "GET_HISTORY_REQUEST";
export const GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS";
export const GET_HISTORY_ERROR = "GET_HISTORY_ERROR";

export const getHistoryRequest = () => {
  console.log("getHistoryRequest");
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
