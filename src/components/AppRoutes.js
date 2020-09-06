import React from 'react';
import SignupPage from '../pages/SignupPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRoutes = () => (
  <>
    <div className="app-main">
      <Route
        path="/login"
        render={(props) => (
          <SignupPage {...props} form={'login'} login={true} />
        )}
      />
      <Route
        path="/signup"
        render={(props) => (
          <SignupPage {...props} form={'signup'} signup={true} />
        )}
      />
      <Route
        path="/passwordReset"
        render={(props) => (
          <SignupPage {...props} form={'signup'} passwordReset={true} />
        )}
      />
    </div>
  </>
);

export default AppRoutes;
