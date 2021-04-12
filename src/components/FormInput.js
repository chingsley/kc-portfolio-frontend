import React from 'react';
import style, { css } from 'styled-components';
import Loader from 'react-loader-spinner';

const StyledDiv = style.div`
${(props) => {
  return css`
    .form-field {
      // border: 1px solid green;
      display: flex;
      flex-flow: column-reverse; // flex-flow is a shorthand for flex-direction + flex-wrap
      position: relative;
      box-sizing: border-box;

      &__label {
        position: absolute;
        top: 0.8rem;
        left: 0.8rem;
        opacity: 0;
        color: rgba(0, 0, 0, 0.5);
        transition: all 0.3s linear;
      }

      &__control {
        padding: 0.8rem;
        border: 1.2px solid #b4bec8;
        box-sizing: border-box;
        border-radius: 4px;
        outline: none;
        &:focus {
          outline: 0;
          border-bottom: 1px solid #4a99d3;
        }
        &:not(:placeholder-shown) + label {
          transform: translateY(-0.6rem);
          background-color: #ffffff;
          top: 0;
          opacity: 1;
          padding-right: 0.3rem;
        }
      }
      &__input {
        height: 2.8rem;
      }
    }
  `;
}}
`;

function FormInput(props) {
  const { inputType } = props;
  return (
    <StyledDiv>
      <div className="form-field">
        {inputType === 'textarea' ? (
          <>
            <textarea
              className="form-field__textarea form-field__control"
              placeholder={props.placeholder}
              name={props.name}
              id={props.id}
              value={props.value}
              onChange={props.onChange}
              rows={props.rows}
            ></textarea>
            <label className="form-field__label" htmlFor={props.id}>
              {props.placeholder}
            </label>
          </>
        ) : (
          <>
            <input
              className="form-field__input form-field__control"
              type={props.type}
              placeholder={props.placeholder}
              name={props.name}
              id={props.id}
              value={props.value}
              onChange={props.onChange}
            />
            <label className="form-field__label" htmlFor={props.id}>
              {props.placeholder}
            </label>
          </>
        )}
      </div>
    </StyledDiv>
  );
}

export default FormInput;
