import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../store/actions';
import style, { css } from 'styled-components';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';
const FormContainer = style.div`
${(props) => {
  return css`
    // border: 1px solid yellow;
    height: 100%;
    .form {
      // border: 1px solid green;
      height: 100%;
      display: flex;
      flex-direction: column;
      &__control {
        margin-bottom: 1.5rem;
      }
    }
    @media only screen and (max-width: 768px) {
      height: auto;
      margin-bottom: 2rem;
      .form {
        &__control {
          margin-bottom: 1.5rem;
        }
      }
    }
  `;
}}`;

class LoginForm extends React.Component {
  state = {
    emailOrUsername: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const form = Object.keys(this.state).reduce((obj, key) => {
      if (key === 'emailOrUsername' && this.state[key].includes('@')) {
        return { ...obj, email: this.state[key] };
      } else if (key === 'emailOrUsername' && !this.state[key].includes('@')) {
        return { ...obj, username: this.state[key] };
      } else {
        return { ...obj, [key]: this.state[key] };
      }
    }, {});
    this.props.loginUser(form, this.props.history);
  };

  render() {
    return (
      <FormContainer>
        <form action="" className="form" onSubmit={this.handleFormSubmit}>
          <div className="form__control">
            <FormInput
              inputType="input"
              type="text"
              placeholder="Email/Username"
              name="emailOrUsername"
              id="emailOrUsername"
              value={this.state.emailOrUsername}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form__control">
            <FormInput
              inputType="input"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form__control">
            <FormSubmit
              onClick={this.handleFormSubmit}
              loading={this.props.isLoading}
              text="Sign In"
            />
          </div>
        </form>
      </FormContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, { loginUser })(withRouter(LoginForm));
