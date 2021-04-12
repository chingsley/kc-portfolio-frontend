import React, { useState, useEffect } from 'react';
import style, { css } from 'styled-components';
import Loader from 'react-loader-spinner';
import { useFetch } from '../custom-hooks/useFetch';
import FormInput from './FormInput';
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
        width: 100%;
      }
    }
    @media only screen and (max-width: 768px) {
      height: auto;
      margin-bottom: 2rem;
      .form {
        &__control {
          margin-bottom: 1.5rem;
        }
      }
    }
  `;
}}`;

function FormContactMe() {
  const { setRequest, loading, successMsg, setSuccessMsg } = useFetch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleInputChange = (e) => {
    setSuccessMsg(null);
    const field = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setRequest({
      endpoint: '/users/1/send_mail',
      method: 'post',
      body: formData,
    });
  };
  useEffect(() => {
    if (successMsg) {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  }, [successMsg]);
  return (
    <FormContainer>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form__control">
          <FormInput
            elementType="input"
            type="text"
            labelText="Your Name"
            placeholder="Your Name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <FormInput
            elementType="input"
            type="text"
            labelText="Your Email Address"
            placeholder="Your Email Address"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <FormInput
            labelText="Your Message"
            elementType="textarea"
            rows="5"
            placeholder="Your Message"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <button
            className="form__btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {' '}
            {loading ? (
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
              'Send'
            )}
          </button>
        </div>
      </form>
    </FormContainer>
  );
}

export default FormContactMe;
