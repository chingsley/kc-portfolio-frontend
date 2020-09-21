import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import loginImage from '../assets/loginImage.png';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import PasswordResetForm from '../components/PasswordResetForm';
import axios from 'axios';

import '../styles/signupPage.css';
import FormTitle from '../components/FormTitle';
import customToast from '../utils/customToast';

class AuthPage extends React.Component {
  state = {
    isValidResetToken: false,
  };

  componentDidMount() {
    const {
      location: { pathname },
      match: {
        params: { resetToken },
      },
    } = this.props;
    if (pathname.match(/password\/reset\/*/)) {
      console.log(this.props);
      const headers = { token: resetToken };
      axios
        .get(
          'http://localhost:3000/api/v1/auth/password/validate_reset_token',
          {
            headers,
          }
        )
        .then((response) => {
          this.setState({ isValidResetToken: true });
        })
        .catch((error) => {
          console.log(error.response);
          console.log('error.status = ', error.response.status);
          if (error.response?.data?.errorCode === 'PRT003') {
            customToast.error(
              'your reset link has expired. Please re-initiate the request'
            );
            this.props.history.push('/password/forgot');
          } else {
            // update this to redirect to 404 page after designing 404 page
            this.props.history.push('/');
          }
        });
    }
  }

  render() {
    const { pathname } = this.props.location;
    if (
      pathname.match(/^\/password\/reset\/*/) &&
      !this.state.isValidResetToken
    ) {
      return null;
    }
    return (
      <div className="auth-page">
        <div className="page-content">
          <div className="content-left">
            <img src={loginImage} alt="person-reading" />
          </div>
          <div className="content-right">
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

export default connect(mapStateToProps, {})(withRouter(AuthPage));
