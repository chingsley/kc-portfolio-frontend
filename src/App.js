import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/NavBar';
import AppRoutes from './components/AppRoutes';
function App() {
  // const wrapper = React.createRef();
  return (
    <Router>
      <div className="App">
        <ToastContainer
          // ref={wrapper}
          autoClose={8000}
          position="bottom-right"
          className="toast-container"
          toastClassName="dark-toast"
          hideProgressBar
        />
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
