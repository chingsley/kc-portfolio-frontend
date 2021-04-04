import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Modal from './components/Modal';

import NavBar from './components/NavBarResponsive';
import AppRoutes from './routes';
function App() {
  // const wrapper = React.createRef();
  return (
    <Router>
      <div className="App">
        <ToastContainer
          // ref={wrapper}
          autoClose={8000}
          position="top-right"
          className="toast-container"
          toastClassName="dark-toast"
          hideProgressBar
        />
        <NavBar />
        <AppRoutes />
        <Modal />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
