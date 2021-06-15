const USER = 'USER';
const intialState = {
  name: '',
  email: '',
  hash: '',
  rank: 0,
};
// { type, payload: { name, email, hash } }
const userReducer = (state = intialState, { type, payload }) => {
  switch (type) {
  case USER:
    return { ...state,
      name: payload.name,
      email: payload.email,
      hash: payload.hash,
    };

  default:
    return state;
  }
};

export default userReducer;
