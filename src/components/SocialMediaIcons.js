import React from 'react';
import style, { css } from 'styled-components';
import { string } from 'prop-types';
const Anchor = style.a`
${(props) => {
  return props.layout === 'vertical'
    ? css`
        // border: 1px solid red;
        display: block;
        margin: 0;
        padding: 0;
        color: ${props.color};
        &:not(:last-child) {
          margin-bottom: ${props.verticalSpacing};
        }
        .fab {
          // border: 1px solid blue;
          display: block;
          width: 100%;
          height: 100%;
          font-size: 1.5rem;
        }
        &:hover {
          text-decoration: none;
          color: ${props.color};
        }
      `
    : css`
        color: ${props.color};
        &:not(:last-child) {
          margin-right: ${props.horizontalSpacing};
        }
        .fab {
          font-size: 1.5rem;
        }
        &:hover {
          text-decoration: none;
          color: ${props.color};
        }
      `;
}}
`;

export default function SocialMediaIcons(props) {
  return (
    <div
    // style={{ border: '1px solid red' }}
    >
      <Anchor {...props} href="https://github.com/chingsley">
        <i className="fab fa-github"></i>
      </Anchor>
      <Anchor
        {...props}
        href="https://www.linkedin.com/in/kingsley-eneja-3a376a160/"
      >
        <i className="fab fa-linkedin"></i>
      </Anchor>
      <Anchor {...props} href="https://www.instagram.com/">
        <i className="fab fa-instagram"></i>
      </Anchor>
      <Anchor {...props} href="https://web.facebook.com/">
        <i className="fab fa-facebook"></i>
      </Anchor>
      <Anchor {...props} href="https://twitter.com/eneja_kingsley">
        <i className="fab fa-twitter"></i>
      </Anchor>
    </div>
  );
}

SocialMediaIcons.propTypes = {
  layout: string,
  verticalSpacing: string,
  horizontalSpacing: string,
  color: string,
};

SocialMediaIcons.defaultProps = {
  layout: 'horizontal',
  verticalSpacing: '1rem',
  horizontalSpacing: '1rem',
  color: '#4a99d3',
};
