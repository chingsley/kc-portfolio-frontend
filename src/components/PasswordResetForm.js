import React from 'react';
import { AuthForm } from './SignupForm';

class PasswordResetForm extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.match.params.resetToken);
  };
  render() {
    return (
      <AuthForm onSubmit={this.handleFormSubmit}>
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
          <button className="auth-btn">Reset</button>
        </div>
      </AuthForm>
    );
  }
}

export default PasswordResetForm;
