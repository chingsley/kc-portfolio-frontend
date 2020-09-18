import React from 'react';
import { connect } from 'react-redux';
import loginImage from '../assets/loginImage.png';
import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import PasswordResetForm from '../components/PasswordResetForm';

import '../styles/signupPage.css';
import AppLoader from '../components/AppLoader';
import FormTitle from '../components/FormTitle';

class SignupPage extends React.Component {
  state = {
    login: this.props.login,
    signup: this.props.signup,
    forgotPassword: this.props.forgotPassword,
    passwordReset: this.props.passwordReset,
  };

  changeForm = (e) => {
    e.persist();

    this.setState((prevState) => {
      if (e.target.dataset.name === 'forgotPassword') {
        this.props.history.push('/password/forgot');
      } else {
        this.props.history.push(`/${e.target.dataset.name}`);
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
    return (
      <div className="signup-page">
        <div className="page-content">
          <div className="content-left">
            <img src={loginImage} alt="person-reading" />
          </div>
          <div className="content-right">
            <AppLoader isLoading={this.props.isLoading} />
            <FormTitle form={this.state} />
            {/* <i className="fas fa-user">
              <span className="form-title">Login</span>
            </i> */}

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
                  data-name="forgotPassword"
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
            {this.state.forgotPassword && (
              <>
                <ForgotPasswordForm />
                <p
                  data-name="login"
                  className="auth-nav"
                  onClick={this.changeForm}
                >
                  click here to login if you remember your password.
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
            {this.state.passwordReset && <PasswordResetForm {...this.props} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, {})(SignupPage);
