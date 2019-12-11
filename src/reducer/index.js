import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';

const weatherAppReducer = combineReducers({
  loginReducer, registerReducer
})

export default weatherAppReducer;
