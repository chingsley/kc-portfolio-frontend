import React from 'react';
import styled, { css } from 'styled-components';
import logo from '../assets/L12.png';

const Logo = styled.div`
  ${(props) => {
    console.log(props.width);
    return css`
      // border: 1px solid black;
      display: inline-block;
      background-color: lightblue;
      // height: 50px;

      .logo-img {
        width: ${props.width};
      }

      @media only screen and (max-width: 600px) {
        // margin-bottom: 0.5rem;
      }
    `;
  }}
`;

export default (props) => (
  <Logo {...props}>
    <img src={logo} alt="kc logo" className="logo-img" />
  </Logo>
);
