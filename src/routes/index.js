import React from 'react';
import AuthPage from '../pages/AuthPage';
// import { Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProfilePage from '../pages/ProfilePage';
import ContactsPage from '../pages/ContactsPage';

const AppRoutes = () => (
  <div className="app-main">
    <Switch>
      <Route exact path="/" component={ProfilePage} />
      <Route exact path="/login" component={AuthPage} />
      {/* <Route exact path="/password/forgot" component={AuthPage} /> */}
      {/* <Route path="/password/reset/:resetToken" component={AuthPage} /> */}
      {/* <Route exact path="/profile" component={ProfilePage} /> */}
      <Route path="/contacts" component={ContactsPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route exact path="/notfound" component={NotFoundPage} />
      <Route component={NotFoundPage} />
      {/* <Redirect to="/notfound" /> */}
    </Switch>
  </div>
);

export default AppRoutes;
