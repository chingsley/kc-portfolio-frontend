import React from 'react';
import style, { css } from 'styled-components';
import SvgSquareRings from '../svg/SvgSquareRings';

const Div = style.div`
  ${(props) => {
    return css`
      // border: 1px solid green;
      // background: rgba(74, 153, 211, 0.1);
      // background: #4a99d3;
      // opacity: 0.1;
      height: 100%;
      overflow: hidden;

      position: relative;
      .svg {
        display: block;
        position: absolute;
      }
      .one {
        // border: 1px solid red;
        top: 0px;
        right: 0px;
        // transform: rotate(270deg);
      }
      .two {
        // border: 1px solid blue;
        bottom: -5px;
        left: 0px;
        transform: rotate(-270deg);
      }
    `;
  }}`;

function PlaceholderComponent() {
  return (
    <Div>
      <span className="svg one">
        <SvgSquareRings opacity="0.2" />
      </span>
      <span className="svg two">
        <SvgSquareRings opacity="0.2" />
      </span>
    </Div>
  );
}

export default PlaceholderComponent;
