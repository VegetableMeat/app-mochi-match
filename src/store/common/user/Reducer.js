const initialState = {
  user: {
    user_id: null,
    user_name: null,
    icon: null,
  },
}

const userState = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userState;
