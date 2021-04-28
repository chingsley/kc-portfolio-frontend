import React from 'react';
import AuthPage from '../pages/AuthPage';
// import { Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProfilePage from '../pages/ProfilePage';
import ContactsPage from '../pages/ContactsPage';
import HomePage from '../pages/HomePage'; // if I remove this, the AOS animation stops working!!! Find out why.

const AppRoutes = () => (
  <div className="app-main">
    <Switch>
      <Route exact path="/" component={ProfilePage} />
      <Route exact path="/login" component={AuthPage} />
      <Route path="/contacts" component={ContactsPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route exact path="/notfound" component={NotFoundPage} />
      <Route component={NotFoundPage} />
      {/* <Redirect to="/notfound" /> */}
    </Switch>
  </div>
);

export default AppRoutes;
