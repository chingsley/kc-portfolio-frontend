import React from 'react';
import SignupPage from '../pages/SignupPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const AppRoutes = () => (
  <>
    <div className="app-main">
      <Route exact path="/" render={(props) => <HomePage {...props} />} />
      <Route
        path="/login"
        render={(props) => <SignupPage {...props} login={true} />}
      />
      <Route
        path="/signup"
        render={(props) => <SignupPage {...props} signup={true} />}
      />
      <Route
        path="/passwordReset"
        render={(props) => <SignupPage {...props} passwordReset={true} />}
      />
    </div>
  </>
);

export default AppRoutes;
