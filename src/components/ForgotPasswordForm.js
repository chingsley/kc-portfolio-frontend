import React from 'react';
import { AuthForm } from './SignupForm';
import styled from 'styled-components';

const Label = styled.label`
  margin-top: 0.5rem;
  margin-bottom: 0;
  display: block;
  text-align: left;
`;

class ForgotPasswordForm extends React.Component {
  state = { email: '' };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <AuthForm onSubmit={this.handleFormSubmit}>
        <div className="left-inputs-in-form">
          <Label htmlFor="email">Enter the email you used to signup</Label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            className="form-control"
            id="email"
            type="email"
            placeholder="Email"
          />
          <button className="auth-btn">Initiate Request</button>
        </div>
      </AuthForm>
    );
  }
}

export default ForgotPasswordForm;
