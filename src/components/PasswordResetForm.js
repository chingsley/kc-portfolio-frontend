import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { AuthForm } from './SignupForm';
import { withRouter } from 'react-router-dom';

class PasswordResetForm extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.match.params.resetToken);
  };
  render() {
    return (
      <AuthForm {...this.props} onSubmit={this.handleFormSubmit}>
        <div className="left-inputs-in-form">
          <input
            className="form-control"
            type="password"
            placeholder="Enter your new password"
          />
          <input
            className="form-control"
            type="password"
            placeholder="Confirm password"
          />
          <button className="auth-btn">
            {this.props.isLoading ? (
              <>
                {'Loading '}
                <Loader
                  className="inline-display"
                  type="ThreeDots"
                  color="#fff"
                  height="20"
                  width="20"
                />
              </>
            ) : (
              'Reset'
            )}
          </button>
        </div>
      </AuthForm>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, {})(withRouter(PasswordResetForm));
