const API_URL = 'https://opentdb.com/api_token.php?command=request';

export const getTrivaQuestions = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const result = await response.json();
  return result;
};

export const getAPIWithToken = async () => {
  const response = await fetch(API_URL);
  const result = await response.json();
  if (result.response_code === 0) {
    getTrivaQuestions(result.token);
  } else {
    return Error;
  }
  return result;
};

export const getFullAPI = async () => {
  const response = await fetch(API_URL);
  const result = await response.json();
  if (result.response_code === 0) {
    return result;
  }
  return Error;
};
