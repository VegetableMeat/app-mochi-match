import { INPUT_USER_NAME } from "./Action";

const initialState = {
  profile: {
    name: null,
    icon: null,
    favorite: [],
  },
  error: {
    msg: {},
    flag: {
      name: true,
      icon: true,
      favorite: true,
    },
  },
  value: {},
};

const profileState = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_USER_NAME:
      return {
        ...state,
        value: { value: action.payload, label: action.payload },
      };
    default:
      return state;
  }
};

export default profileState;
