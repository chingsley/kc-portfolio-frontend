import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignupPage from './pages/SignupPage';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
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
      </div>
    </Router>
  );
}

export default App;
