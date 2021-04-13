import React from 'react';
import style, { css } from 'styled-components';
import Loader from 'react-loader-spinner';

const Button = style.button`
${(props) => {
  return css`
    background: #4a99d3;
    border: none;
    outline: 0;
    border-radius: 4px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    height: 2.8rem;
    line-height: 19px;
    color: #ffffff;
    margin-top: 1rem;
    width: 100%;
  `;
}}
`;

function FormSubmit(props) {
  return (
    <Button onClick={props.onClick} disabled={props.loading}>
      {' '}
      {props.loading ? (
        <>
          {'Loading '}
          <Loader
            className="inline-display"
            type="ThreeDots"
            color="#fff"
            height="20"
            width="20"
          />
        </>
      ) : (
        props.text
      )}
    </Button>
  );
}

export default FormSubmit;
