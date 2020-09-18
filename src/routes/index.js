import React from 'react';
import SignupPage from '../pages/SignupPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const AppRoutes = () => (
  <div className="app-main">
    {/* <Switch> */}
    <Route exact path="/" component={HomePage} />
    <Route
      path="/login"
      render={(props) => <SignupPage {...props} login={true} />}
    />
    <Route
      path="/signup"
      render={(props) => <SignupPage {...props} signup={true} />}
    />
    <Route
      exact
      path="/password/forgot"
      render={(props) => <SignupPage {...props} forgotPassword={true} />}
    />
    <Route
      path="/password/reset/:resetToken"
      component={(props) => <SignupPage {...props} passwordReset={true} />}
    />
    {/* </Switch> */}
  </div>
);

export default AppRoutes;
