import { GET_API } from '../Actions/index';

const intialState = {};

const loginReducer = (state = intialState, { type, payload }) => {
  switch (type) {
  case GET_API:
    return { ...state,
      payload };
  case 'TOKEN':
    return {
      ...state,
      payload,
    };
  default:
    return state;
  }
};

export default loginReducer;
