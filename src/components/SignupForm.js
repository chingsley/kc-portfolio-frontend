import React from 'react';
// import './styles/signupForm.css';
import styled from 'styled-components';
import ImageUpload from './ImageUpload';

const AuthForm = styled.form`
  // border: 1px solid salmon;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;

  .left-inputs-in-form {
    width: 18rem;
  }

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
    cursor: pointer;
    width: 100%;
    margin-bottom: 2rem;
  }
`;
class SignupForm extends React.Component {
  render() {
    return (
      <AuthForm>
        <div className="left-inputs-in-form">
          {/* <input type="file" /> */}
          <input
            className="form-control"
            type="text"
            placeholder="first name"
          />
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
          <button className="auth-btn">Singn Up</button>
        </div>
        <ImageUpload />
      </AuthForm>
    );
  }
}

export default SignupForm;
