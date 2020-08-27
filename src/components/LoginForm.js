import React from 'react';
import { AuthForm } from './SignupForm';

class LoginForm extends React.Component {
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
          <button className="auth-btn">Sign In</button>
        </div>
      </AuthForm>
    );
  }
}

export default LoginForm;
