import React from 'react';
// import './styles/signupForm.css';
import styled from 'styled-components';

const AuthForm = styled.form`
  // border: 1px solid salmon;
  /* width: 30vw; */
  text-align: center;
  width: 18rem;
  padding: 1em;
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
class PasswordChangeForm extends React.Component {
  render() {
    return (
      <AuthForm>
        <input className="form-control" type="email" placeholder="email" />
        <input
          className="form-control"
          type="new-password"
          placeholder="password"
        />
        <input
          className="form-control"
          type="new-password"
          placeholder="confirm-password"
        />
        <button className="auth-btn">Change Password</button>
      </AuthForm>
    );
  }
}

export default PasswordChangeForm;
