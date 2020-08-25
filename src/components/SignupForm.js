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
class SignupForm extends React.Component {
  render() {
    return (
      <AuthForm>
        <p>CREATE YOUR ACCOUNT</p>
        <input type="file" />
        <input className="form-control" type="text" placeholder="first name" />
        <input className="form-control" type="text" placeholder="last name" />
        <input className="form-control" type="text" placeholder="username" />
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
        <button className="auth-btn">Singn up</button>
        <p>
          Already a member? Login <a href="http://www.here.com">here</a>
        </p>
      </AuthForm>
    );
  }
}

export default SignupForm;
