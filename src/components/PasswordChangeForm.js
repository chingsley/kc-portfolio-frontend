import React from 'react';
import { AuthForm } from './SignupForm';

class PasswordChangeForm extends React.Component {
  render() {
    return (
      <AuthForm>
        <div className="left-inputs-in-form">
          <input className="form-control" type="email" placeholder="Email" />
          <input
            className="form-control"
            type="new-password"
            placeholder="Password"
          />
          <input
            className="form-control"
            type="new-password"
            placeholder="Confirm Password"
          />
          <button className="auth-btn">Change Password</button>
        </div>
      </AuthForm>
    );
  }
}

export default PasswordChangeForm;
