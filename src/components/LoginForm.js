import React from 'react';
// import './styles/signupForm.css';
import styled from 'styled-components';

const AuthForm = styled.form`
  text-align: center;
  width: 18rem;

  .form-control,
  .auth-btn {
    box-sizing: border-box;
    height: 2.2rem;
    margin: 0.5rem 0;
    font-size: 14px;
  }

  .form-control {
    display: inline-block;
    width: 100%;
    padding-left: 1.5rem;
  }

  .auth-btn {
    display: inline-block;
    /* width: 16rem; */
    cursor: pointer;
    width: 100%;
    margin-bottom: 2rem;
  }
`;
class LoginForm extends React.Component {
  render() {
    return (
      <AuthForm>
        <input className="form-control" type="email" placeholder="email" />
        <input
          className="form-control"
          type="new-password"
          placeholder="password"
        />
        <button className="auth-btn">Login</button>
      </AuthForm>
    );
  }
}

export default LoginForm;
