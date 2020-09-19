import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginImage from '../assets/loginImage.png';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import PasswordResetForm from '../components/PasswordResetForm';

import '../styles/signupPage.css';
import AppLoader from '../components/AppLoader';
import FormTitle from '../components/FormTitle';

class AuthPage extends React.Component {
  state = {
    login: this.props.login,
    signup: this.props.signup,
    forgotPassword: this.props.forgotPassword,
    passwordReset: this.props.passwordReset,
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <div className="auth-page">
        <div className="page-content">
          <div className="content-left">
            <img src={loginImage} alt="person-reading" />
          </div>
          <div className="content-right">
            <AppLoader isLoading={this.props.isLoading} />
            <FormTitle {...this.props} />

            {pathname.match(/\/signup/i) && (
              <>
                <SignupForm />
                <div className="div__auth-nav">
                  <Link to="/login" className="auth-nav">
                    Already a member? Login here
                  </Link>
                </div>
              </>
            )}
            {pathname.match(/\/login/) && (
              <>
                <LoginForm />
                <div className="div__auth-nav">
                  <Link to="/password/forgot" className="auth-nav">
                    Forgot Password?
                  </Link>
                </div>
                <div className="div__auth-nav">
                  <Link to="/signup" className="auth-nav">
                    Don't have an account? signup here
                  </Link>
                </div>
              </>
            )}
            {pathname.match(/\/password\/forgot/i) && (
              <>
                <ForgotPasswordForm />
                <div className="div__auth-nav">
                  <Link to="/signup" className="auth-nav">
                    Don't have an account? signup here
                  </Link>
                </div>
              </>
            )}
            {pathname.match(/^\/password\/reset\/*/) && (
              <>
                <PasswordResetForm {...this.props} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, {})(AuthPage);
