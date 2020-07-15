export const GET_ME_REQUEST = "GET_ME_REQUEST";
export const GET_ME_SUCCESS = "GET_ME_SUCCESS";
export const GET_ME_ERROR = "GET_ME_ERROR";

export const getMeRequest = () => {
  console.log("getMeRequest");
  return {
    type: GET_ME_REQUEST,
  };
};

export const getMeSuccess = (payload) => {
  return {
    type: GET_ME_SUCCESS,
    payload: payload,
  };
};

export const getMeError = (error) => {
  return {
    type: GET_ME_ERROR,
    payload: error,
  };
};

export const CHECK_ENTRY_REQUEST = "CHECK_ENTRY_REQUEST";
export const CHECK_ENTRY_SUCCESS = "CHECK_ENTRY_SUCCESS";
export const CHECK_ENTRY_ERROR = "CHECK_ENTRY_ERROR";

export const checkEntryRequest = () => {
  return {
    type: CHECK_ENTRY_REQUEST,
  };
};

export const checkEntrySuccess = (payload, action) => {
  return {
    type: CHECK_ENTRY_SUCCESS,
    payload: payload,
    history: action,
  };
};

export const checkEntryError = (error) => {
  return {
    type: CHECK_ENTRY_ERROR,
    payload: error,
  };
};
