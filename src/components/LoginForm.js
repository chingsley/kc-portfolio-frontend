import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AuthForm } from './SignupForm';
import { loginUser } from '../store/actions';

class LoginForm extends React.Component {
  state = {
    emailOrUsername: 'eneja.kc@gmail.com',
    password: 'Testing*123',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const form = Object.keys(this.state).reduce((obj, key) => {
      if (key === 'emailOrUsername' && this.state[key].includes('@')) {
        return { ...obj, email: this.state[key] };
      } else if (key === 'emailOrUsername' && !this.state[key].includes('@')) {
        return { ...obj, username: this.state[key] };
      } else {
        return { ...obj, [key]: this.state[key] };
      }
    }, {});
    // console.log(form);
    this.props.loginUser(form, this.props.history);
  };

  render() {
    return (
      <AuthForm onSubmit={this.handleFormSubmit}>
        <div className="left-inputs-in-form">
          <input
            className="form-control"
            type="text"
            placeholder="Email / Username"
            name="emailOrUsername"
            value={this.state.emailOrUsername}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button className="auth-btn">Sign In</button>
        </div>
      </AuthForm>
    );
  }
}

export default connect(null, { loginUser })(withRouter(LoginForm));
