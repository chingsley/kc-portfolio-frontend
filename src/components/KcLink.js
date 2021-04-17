import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';

const Parent = styled.div`
  ${(props) => {
    return css`
      // border: 1px solid red;
      height: ${props.height};
      line-height: ${props.lineHeight};
      display: inline-block;
      position: relative;
      z-index: 100;
      text-align: center;
      // box-sizing: border-box;

      &:hover {
        cursor: pointer;

        .sibling {
          width: 100%;
          background-color: ${props.bgColorOnHover};
          border-bottom: ${props.bottomBorderOnHover};
        }

        .link {
          color: ${props.colorOnHover};
        }
      }

      .sibling {
        // border: 1px solid red;
        border-radius: ${props.borderRadius};

        position: absolute;
        // top: 0;
        // left: 0;
        height: 100%;
        width: 0;
        z-index: -1;
        transition-duration: 0.5s;
      }

      .link {
        border: ${props.border};
        border-radius: ${props.borderRadius};
        text-decoration: none;
        font-size: ${props.fontSize};
        color: ${props.color};
        display: inline-block;
        width: 100%;
        height: 100%;
        // line-height: 100%;
        padding: 3px 30px;
        z-index: 1000;
        transition-duration: 0.5s;
        background-color: ${props.bgColor};
      }
      .active {
        border-bottom: 1px solid #4a99d3;
        // color: red;
      }
    `;
  }}
`;

const KcLink = (props) => {
  return (
    <Parent {...props}>
      <div className="sibling"></div>
      <NavLink exact to={props.to} className="link" activeClassName="active">
        {props.text || props.children}
      </NavLink>
    </Parent>
  );
};

KcLink.propTypes = {
  color: string,
  bgColorOnHover: string,
  colorOnHover: string,
  borderRadius: string,
  height: string,
  lineHeight: string,
  bottomBorderOnHover: string,
  bgColor: string,
  fontSize: string,
  to: string,
};
KcLink.defaultProps = {
  color: 'black',
  bgColorOnHover: '#f43544',
  colorOnHover: 'white',
  borderRadius: '3px',
  height: '2rem',
  lineHeight: '25px',
  border: 'none',
  bottomBorderOnHover: 'none',
  bgColor: 'none',
  fontSize: '1em',
  to: '/',
};

export default KcLink;
