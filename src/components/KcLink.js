import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Parent = styled.div`
  ${(props) => {
    return css`
      // border: 1px solid blue;
      height: 2rem;
      line-height: 25px;
      display: inline-block;
      position: relative;
      z-index: 100;
      // box-sizing: border-box;

      &:hover {
        cursor: pointer;

        .sibling {
          width: 100%;
          background-color: ${props.bgColorOnHover || '#f43544'};
          border-bottom: ${props.bottomBorderOnHover};
        }

        .link {
          color: ${props.colorOnHover || 'black'};
        }
      }

      .sibling {
        // border: 3px solid yellow;
        border-radius: 3px;
        position: absolute;
        // top: 0;
        // left: 0;
        height: 100%;
        width: 0;
        z-index: -1;
        transition-duration: 0.5s;
      }

      .link {
        // border: 1px solid red;
        text-decoration: none;
        font-size: 1em;
        color: ${props.color || 'black'};
        display: inline-block;
        width: 100%;
        height: 100%;
        // line-height: 100%;
        padding: 3px 30px;
        z-index: 1000;
        transition-duration: 0.5s;
      }
    `;
  }}
`;

const KcLink = (props) => {
  return (
    <Parent {...props}>
      <div className="sibling"></div>
      <Link to={props.to} className="link">
        {props.text}
      </Link>
    </Parent>
  );
};

export default KcLink;
