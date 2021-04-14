import React from 'react';
import styled, { css } from 'styled-components';

const Div = styled.div`
  ${(props) => {
    return css`
      width: 25px;
      height: 25px;

      .mdiv {
        height: 25px;
        width: 3px;
        margin-left: 12px;
        background-color: #4a99d3;
        transform: rotate(45deg);
        z-index: 1;

        &__md {
          height: 25px;
          width: 3px;
          background-color: #4a99d3;
          transform: rotate(90deg);
          z-index: 2;
        }
      }
    `;
  }}
`;

function XButton() {
  return (
    <Div>
      <div className="mdiv">
        <div className="mdiv__md"></div>
      </div>
    </Div>
  );
}

export default XButton;
