import React from 'react';
import style, { css } from 'styled-components';
import Dots from './SvgDots';
import SvgSquareRings from './SvgSquareRings';

const StyledDiv = style.div`
  ${(props) => {
    return css`
      // border: 1px solid red;
      width: 15rem;
      height: 20rem;
      position: relative;
      .rings {
        position: absolute;
        top: 0;
        right: 0;
      }
      .dots {
        position: absolute;
        // bottom: 0;
        // left: 0;
        bottom: 21px;
        left: -98px;
      }
    `;
  }}`;

function SvgSquareDotsCombo() {
  return (
    <StyledDiv>
      <span className="rings">
        <SvgSquareRings />
      </span>
      <span className="dots">
        <Dots />
      </span>
    </StyledDiv>
  );
}

export default SvgSquareDotsCombo;
