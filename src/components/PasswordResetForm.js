import React from 'react';
import { AuthForm } from './SignupForm';

class PasswordResetForm extends React.Component {
  render() {
    return (
      <AuthForm>
        <div className="left-inputs-in-form">
          <input className="form-control" type="email" placeholder="Email" />
          <button className="auth-btn">Reset Password</button>
        </div>
      </AuthForm>
    );
  }
}

export default PasswordResetForm;
