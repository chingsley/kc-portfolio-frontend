import React from 'react';
// import './styles/signupForm.css';
import styled from 'styled-components';

const AuthForm = styled.form`
  text-align: center;
  width: 18rem;
  padding: 1em;
  // border: 1px solid red;
  * {
    box-sizing: border-box;
    height: 2.2rem;
    margin: 0.5rem 0;
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
  }
`;
class PasswordResetForm extends React.Component {
  render() {
    return (
      <AuthForm>
        <input className="form-control" type="email" placeholder="email" />
        <button className="auth-btn">Reset Password</button>
      </AuthForm>
    );
  }
}

export default PasswordResetForm;
