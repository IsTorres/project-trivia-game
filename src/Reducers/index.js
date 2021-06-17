import { combineReducers } from 'redux';
import loginReducer from './login';
import userReducer from './user';
import pointsReducer from './points';

const rootReducer = combineReducers({
  loginReducer,
  userReducer,
  pointsReducer,
});

export default rootReducer;
