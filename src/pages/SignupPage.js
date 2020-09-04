import React from 'react';
import { connect } from 'react-redux';
import loginImage from '../assets/loginImage.png';
import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import PasswordResetForm from '../components/PasswordResetForm';
import PasswordChangeForm from '../components/PasswordChangeForm';

import '../styles/signupPage.css';

class SignupPage extends React.Component {
  state = {
    login: this.props.login,
    signup: this.props.signup,
    passwordReset: this.props.passwordReset,
    passwordChange: this.props.passwordChange,
    form: this.props.form,
  };

  changeForm = (e) => {
    e.persist();

    this.setState((prevState) => {
      if (e.target.dataset.name === 'signup') {
        this.props.history.push('/signup');
      } else {
        this.props.history.push('/account');
      }
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
    console.log(this.props, this.state);
    return (
      <div className="signup-page">
        <div className="error">{this.props.error}</div>
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, {})(SignupPage);
