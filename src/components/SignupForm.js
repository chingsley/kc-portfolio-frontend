import React from 'react';
// import './styles/signupForm.css';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import { registerUser } from '../store/actions';
import customToast from '../utils/customToast';
import ImageUploadMobile from './ImageUploadMobile';

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
    padding: 0;
  }
  @media only screen and (max-width: 600px) {
    // border: 1px solid blue;
    flex-direction: column-reverse;
    display: flex;
    flex-direction: column;
    align-items: center;

    .left-inputs-in-form {
      // border: 1px solid red;
      width: 80%;
    }
    .right-content-in-form {
      display: none;
    }
  }
`;

class SignupForm extends React.Component {
  state = {
    form: {
      firstName: 'kc',
      lastName: 'eneja',
      email: 'eneja.kc2@gmail.com',
      username: 'chingsley',
      password: 'Chinonxo*123',
      confirmPassword: 'Chinonxo*123',
      image: null,
    },
  };

  handleInputChange = (e) => {
    e.persist();
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [e.target.name]: e.target.value,
      },
    }));
  };

  handleImageChange = (e) => {
    // e.persist();
    const [pictureFile] = e.target.files;
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        image: pictureFile,
      },
    }));
  };

  submitForm = (e) => {
    e.preventDefault();

    const { confirmPassword, ...form } = this.state.form;
    if (confirmPassword !== form.password) {
      customToast.error('the two passwords do not match');
      return;
    }

    const formData = new FormData();
    Object.entries(form).map(([key, value]) => {
      if (key === 'image' && value instanceof Blob) {
        formData.append(key, value, value.name);
      }
      if (key !== 'image') {
        formData.append(key, value);
      }
    });

    this.props.registerUser(formData, this.props.history);
  };

  render() {
    return (
      <AuthForm onSubmit={this.submitForm}>
        <div className="left-inputs-in-form">
          <ImageUploadMobile className="image-upload-mobile" />
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.form.firstName}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.form.lastName}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.form.username}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.form.email}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.form.password}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={this.state.form.confirmPassword}
            onChange={this.handleInputChange}
          />
          <button className="auth-btn">Sign Up</button>
        </div>
        <div className="right-content-in-form">
          <ImageUpload handleImageChange={this.handleImageChange} />
        </div>
      </AuthForm>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(SignupForm)
);
