import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from './../utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.getToken() !== null ? (
      <Component {...props} />
    ) : (
        <Redirect to='/login' />
      )
  )} />
);

export default PrivateRoute;
