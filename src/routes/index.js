import React from 'react';
import AuthPage from '../pages/AuthPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const AppRoutes = () => (
  <div className="app-main">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={AuthPage} />
      <Route path="/signup" component={AuthPage} />
      <Route exact path="/password/forgot" component={AuthPage} />
      <Route path="/password/reset/:resetToken" component={AuthPage} />
    </Switch>
  </div>
);

export default AppRoutes;
