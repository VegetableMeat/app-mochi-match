import { INIT } from './Action';

const initiaState = {};

const initState = (state = initiaState, action) => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default initState;
