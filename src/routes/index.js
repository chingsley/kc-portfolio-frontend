import React from 'react';
import SignupPage from '../pages/SignupPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const AppRoutes = () => (
  <div className="app-main">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={SignupPage} />
      <Route path="/signup" component={SignupPage} />
      <Route exact path="/password/forgot" component={SignupPage} />
      <Route path="/password/reset/:resetToken" component={SignupPage} />
    </Switch>
  </div>
);

export default AppRoutes;
