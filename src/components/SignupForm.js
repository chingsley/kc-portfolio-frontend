import React from 'react';
// import './styles/signupForm.css';
import styled from 'styled-components';
import ImageUpload from './ImageUpload';

export const AuthForm = styled.form`
  // border: 1px solid salmon;
  text-align: center;
  display: flex;
  justify-content: space-between;
  // margin-right: 2rem;

  .left-inputs-in-form {
    // width: 18rem;
    width: 55%;
    .form-control,
    .auth-btn {
      box-sizing: border-box;
      height: 2.5rem;
      margin: 0.3rem 0;
      font-size: 12px;
    }

    .form-control {
      display: inline-block;
      width: 100%;
      padding-left: 1.5rem;
    }

    .auth-btn {
      display: inline-block;
      cursor: pointer;
      width: 100%;
      margin-bottom: 2rem;
      background-color: black;
      color: white;
      font-weight: bold;
      border-radius: 0.25rem;
      border: none;
    }
  }
  .right-content-in-form {
    // border: 1px solid red;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
class SignupForm extends React.Component {
  render() {
    return (
      <AuthForm>
        <div className="left-inputs-in-form">
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
          />
          <input className="form-control" type="text" placeholder="Last Name" />
          <input className="form-control" type="text" placeholder="Username" />
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
          <button className="auth-btn">Sign Up</button>
        </div>
        <div className="right-content-in-form">
          <ImageUpload />
        </div>
      </AuthForm>
    );
  }
}

export default SignupForm;
