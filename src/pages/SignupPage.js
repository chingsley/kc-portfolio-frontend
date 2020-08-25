import React from 'react';
import loginImage from '../assets/loginImage.png';
import SignupForm from '../components/SignupForm';

import '../styles/signupPage.css';

class SignupPage extends React.Component {
  render() {
    return (
      <div className="signup-page">
        <div className="page-content">
          <div className="content-left">
            <img src={loginImage} alt="person-reading" width="235" />
          </div>
          <div className="content-right">
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
