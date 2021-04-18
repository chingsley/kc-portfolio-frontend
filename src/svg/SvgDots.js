import React from 'react';
import { string } from 'prop-types';

function SvgDots(props) {
  return (
    <div>
      <svg
        width="154"
        height="154"
        viewBox="0 0 154 154"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity={props.opacity}>
          <circle cx="5" cy="5" r="5" fill={props.color} />
          <circle cx="5" cy="33.6875" r="5" fill={props.color} />
          <circle cx="5" cy="62.375" r="5" fill={props.color} />
          <circle cx="5" cy="91.0625" r="5" fill={props.color} />
          <circle cx="5" cy="119.75" r="5" fill={props.color} />
          <circle cx="5" cy="148.438" r="5" fill={props.color} />
          <circle cx="33.6875" cy="5" r="5" fill={props.color} />
          <circle cx="33.6875" cy="33.6875" r="5" fill={props.color} />
          <circle cx="33.6875" cy="62.375" r="5" fill={props.color} />
          <circle cx="33.6875" cy="91.0625" r="5" fill={props.color} />
          <circle cx="33.6875" cy="119.75" r="5" fill={props.color} />
          <circle cx="33.6875" cy="148.438" r="5" fill={props.color} />
          <circle cx="62.375" cy="5" r="5" fill={props.color} />
          <circle cx="62.375" cy="33.6875" r="5" fill={props.color} />
          <circle cx="62.375" cy="62.375" r="5" fill={props.color} />
          <circle cx="62.375" cy="91.0625" r="5" fill={props.color} />
          <circle cx="62.375" cy="119.75" r="5" fill={props.color} />
          <circle cx="62.375" cy="148.438" r="5" fill={props.color} />
          <circle cx="91.0625" cy="5" r="5" fill={props.color} />
          <circle cx="119.75" cy="5" r="5" fill={props.color} />
          <circle cx="148.438" cy="5" r="5" fill={props.color} />
          <circle cx="91.0625" cy="33.6875" r="5" fill={props.color} />
          <circle cx="119.75" cy="33.6875" r="5" fill={props.color} />
          <circle cx="148.438" cy="33.6875" r="5" fill={props.color} />
          <circle cx="91.0625" cy="62.375" r="5" fill={props.color} />
          <circle cx="119.75" cy="62.375" r="5" fill={props.color} />
          <circle cx="148.438" cy="62.375" r="5" fill={props.color} />
          <circle cx="91.0625" cy="91.0625" r="5" fill={props.color} />
          <circle cx="91.0625" cy="119.75" r="5" fill={props.color} />
          <circle cx="91.0625" cy="148.438" r="5" fill={props.color} />
          <circle cx="119.75" cy="91.0625" r="5" fill={props.color} />
          <circle cx="119.75" cy="119.75" r="5" fill={props.color} />
          <circle cx="119.75" cy="148.438" r="5" fill={props.color} />
          <circle cx="148.438" cy="91.0625" r="5" fill={props.color} />
          <circle cx="148.438" cy="119.75" r="5" fill={props.color} />
          <circle cx="148.438" cy="148.438" r="5" fill={props.color} />
        </g>
      </svg>
    </div>
  );
}

SvgDots.prototype = {
  color: string,
  opacity: string,
};

SvgDots.defaultProps = {
  color: '#0F001A',
  opacity: '0.05',
};

export default SvgDots;
