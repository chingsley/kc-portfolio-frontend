import React from 'react';
import style, { css } from 'styled-components';
const FormContainer = style.div`
${(props) => {
  return css`
    // border: 1px solid yellow;
    height: 100%;
    .form {
      // border: 1px solid green;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &__field {
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
      &__btn {
        background: #4a99d3;
        border: none;
        outline: none;
        border-radius: 4px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        height: 2.8rem;
        line-height: 19px;
        color: #ffffff;
        margin-top: 1rem;
      }
    }
    @media only screen and (max-width: 768px) {
      height: auto;
      margin-bottom: 2rem;
      .form {
        &__field,
        &__btn {
          margin-bottom: 1.5rem;
        }
      }
    }
  `;
}}`;

function FormContactMe() {
  return (
    <FormContainer>
      <form action="" className="form">
        <div className="form__field">
          <input
            type="text"
            className="form__field__input form__field__control"
            placeholder="Your Name"
            name="name"
            id="name"
          />
          <label className="form__field__label" for="name">
            Your Name
          </label>
        </div>
        <div className="form__field">
          <input
            type="text"
            className="form__field__input form__field__control"
            placeholder="Your Email Address"
            name="email"
            id="email"
          />
          <label className="form__field__label" for="email">
            Your Email Address
          </label>
        </div>
        <div className="form__field">
          <textarea
            className="form__field__textarea form__field__control"
            rows="5"
            placeholder="Your Message"
            name="message"
            id="message"
          ></textarea>
          <label className="form__field__label" for="message">
            Your Message
          </label>
        </div>
        <button className="form__btn">Send</button>
      </form>
    </FormContainer>
  );
}

export default FormContactMe;
