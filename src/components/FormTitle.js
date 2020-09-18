import React from 'react';
import styled, { css } from 'styled-components';

const FormTitle = styled.div`
  ${(props) => {
    const { signup } = props.props.form;
    return css`
      // border: 1px solid blue;
      .fa-user {
        /* border: 1px solid blue; */
        color: #eb2f06;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .form-title {
        color: black;
        font-size: 2rem;
        margin-left: 0.5rem;
      }

      @media only screen and (max-width: 600px) {
        display: ${signup ? 'none' : 'block'};
        width: 80%;
        margin: 0 auto;
      }
    `;
  }}
`;

export default (props) => {
  const { form } = props;
  return (
    <FormTitle props={props}>
      <i className="fas fa-user">
        <span className="form-title">
          {form.login
            ? 'Login'
            : form.signup
            ? 'Sign up'
            : form.forgotPassword
            ? 'Password reset'
            : 'Reset password'}
        </span>
      </i>
    </FormTitle>
  );
};
