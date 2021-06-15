import { GET_TOKEN } from '../Actions/index';

const intialState = {};

const loginReducer = (state = intialState, { type, payload }) => {
  switch (type) {
  case GET_TOKEN:
    return { ...state, tokenId: payload.token };

  default:
    return state;
  }
};

export default loginReducer;
