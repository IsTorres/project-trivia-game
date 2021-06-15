import { getFullAPI } from '../Services/API';

export const GET_TOKEN = 'GET_TOKEN';
export const ERROR = 'ERROR';

// export const requestApi = () => ({
//   type: GET_TRIVIA_API,
//   payload,
// });

export const getToken = (param) => ({
  type: GET_TOKEN,
  payload: param,
});

const errorApi = (error) => ({
  type: ERROR,
  payload: error,
});

export const requestToken = () => async (dispatch) => getFullAPI()
  .then((response) => dispatch(getToken(response)))
  .catch((error) => dispatch(errorApi(error)));

export const userAction = (name, email, hash, rank) => ({
  type: 'USER',
  payload: {
    name,
    email,
    hash,
    rank,
  },
}
);
