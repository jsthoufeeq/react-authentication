import * as actions from './actionTypes';
import axios from 'axios';
import constants from './../common/constants';
import auth from './../utils/auth'

export const signIn = (credentials) => dispatch => {
  axios.post(constants.loginUrl, { email: credentials.email, password: credentials.password })
    .then(result => {
      dispatch({
        type: actions.SET_TOKEN,
        payload: result.data.token
      });
      auth.setToken(result.data.token);
      }
    );
};

export const signUp = (details) => dispatch => {
  axios.post(constants.signUpUrl, details)
    .then(result => {
      dispatch({
        type: actions.REGISTER_USER,
        payload: result.data.message
      })
      auth.setToken(result.data.message);
      }
    );
};
