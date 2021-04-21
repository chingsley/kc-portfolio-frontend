import React from 'react';
import { string } from 'prop-types';

function SvgSquareRings(props) {
  return (
    <div>
      <svg
        width="190"
        height="199"
        viewBox="0 0 190 199"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity={props.opacity}>
          <mask id="path-1-inside-1" fill="white">
            <rect y="32.4841" width="141.306" height="118.567" rx="4" />
          </mask>
          <rect
            y="32.4841"
            width="141.306"
            height="118.567"
            rx="4"
            stroke={props.color}
            strokeWidth="12"
            mask="url(#path-1-inside-1)"
          />
          <mask id="path-2-inside-2" fill="white">
            <rect
              x="113.694"
              y="79.5859"
              width="141.306"
              height="118.567"
              rx="4"
            />
          </mask>
          <rect
            x="113.694"
            y="79.5859"
            width="141.306"
            height="118.567"
            rx="4"
            stroke={props.color}
            strokeWidth="12"
            mask="url(#path-2-inside-2)"
          />
          <mask id="path-3-inside-3" fill="white">
            <rect x="32.4841" width="141.306" height="118.567" rx="4" />
          </mask>
          <rect
            x="32.4841"
            width="141.306"
            height="118.567"
            rx="4"
            stroke={props.color}
            strokeWidth="16"
            mask="url(#path-3-inside-3)"
          />
        </g>
      </svg>
    </div>
  );
}

SvgSquareRings.propTypes = {
  color: string,
  opacity: string,
};

SvgSquareRings.defaultProps = {
  color: '#4A99D3',
  opacity: '0.8',
};

export default SvgSquareRings;
