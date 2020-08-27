import React from 'react';
import loginImage from '../assets/loginImage.png';
import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import PasswordResetForm from '../components/PasswordResetForm';
import PasswordChangeForm from '../components/PasswordChangeForm';

import '../styles/signupPage.css';
import ImageUpload from '../components/ImageUpload';

class SignupPage extends React.Component {
  state = {
    login: false,
    signup: true,
    passwordReset: false,
    passwordChange: false,
  };

  changeForm = (e) => {
    e.persist();

    this.setState((prevState) => {
      const newState = Object.keys(prevState).reduce((obj, key) => {
        if (key !== e.target.dataset.name) {
          return { ...obj, [key]: false };
        }

        return { ...obj, [e.target.dataset.name]: true };
      }, {});
      return { ...prevState, ...newState };
    });
  };
  render() {
    // console.log(this.state);
    return (
      <div className="signup-page">
        <div className="page-content">
          <div className="content-left">
            <img src={loginImage} alt="person-reading" width="235" />
          </div>
          <div className="content-right">
            {/* <div className="content-right-right"> */}
            <Logo />
            {this.state.signup && (
              <>
                <SignupForm />
                <p
                  // data-name="login"
                  data-name="login"
                  className="auth-nav"
                  onClick={this.changeForm}
                >
                  Already a member? Login here
                </p>
              </>
            )}
            {this.state.login && (
              <>
                <LoginForm />
                <p
                  data-name="passwordReset"
                  className="auth-nav"
                  onClick={this.changeForm}
                >
                  Forgot Password?{' '}
                </p>
                <p
                  data-name="signup"
                  className="auth-nav"
                  onClick={this.changeForm}
                >
                  Don't have an account? signup here
                </p>
              </>
            )}
            {this.state.passwordReset && (
              <>
                <PasswordResetForm />
                <p
                  data-name="signup"
                  className="auth-nav"
                  onClick={this.changeForm}
                >
                  Don't have an account? signup here
                </p>
              </>
            )}
            {this.state.passwordChange && <PasswordChangeForm />}
            {/* </div> */}
            {/* <ImageUpload /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
