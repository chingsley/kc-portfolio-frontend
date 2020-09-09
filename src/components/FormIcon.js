import React from 'react';
import styled, { css } from 'styled-components';

const FormIcon = styled.div`
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

export default (props) => (
  <FormIcon props={props}>
    <i className="fas fa-user">
      <span className="form-title">Login</span>
    </i>
  </FormIcon>
);
