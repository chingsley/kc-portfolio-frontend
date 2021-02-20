import React from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { withRouter } from 'react-router-dom';

const LogoDiv = styled.div`
  ${(props) => css`
    // border: 1px solid blue;
    width: 120px;
    display: ${props.display};
    margin: ${props.margin};

    @media only screen and (max-width: 760px) {
      margin: ${props.mobileMargin};
    }
  `}
`;
const LogoV2 = (props) => (
  <LogoDiv {...props}>
    <svg
      width="120"
      height="42"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => props.history.push('/')}
      style={{
        cursor: 'pointer',
        // ...props.style,
      }}
    >
      <g>
        <title>background</title>
        <rect
          x="-1"
          y="-1"
          width="127"
          height="52"
          id="canvas_background"
          fill="none"
        />
      </g>
      <g>
        <title>Layer 1</title>
        <text
          fill={props.color}
          strokeWidth="0"
          strokeOpacity="null"
          fillOpacity="null"
          x="2.72781"
          y="26"
          id="svg_1"
          fontSize="20"
          fontFamily="'Simonetta', serif"
          textAnchor="start"
          xmlSpace="preserve"
          fontStyle="italic"
          transform="matrix(1.0575719910707448,0,0,1,-3.0711035486983747,0) "
          stroke={props.color}
          fontWeight="normal"
        >
          enejakc
        </text>
      </g>
    </svg>
  </LogoDiv>
);

LogoV2.propTypes = {
  color: string,
  display: string,
  margin: string,
};

LogoV2.defaultProps = {
  color: '#4a99d3',
  display: 'inline-block',
  margin: '0',
};

export default withRouter(LogoV2);
