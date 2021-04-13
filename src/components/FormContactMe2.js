import React, { useState, useEffect } from 'react';
import style, { css } from 'styled-components';
import Loader from 'react-loader-spinner';
import { useFetch } from '../custom-hooks/useFetch';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';
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
            inputType="input"
            type="text"
            placeholder="Your Name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <FormInput
            inputType="input"
            type="text"
            placeholder="Your Email Address"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <FormInput
            inputType="textarea"
            rows="5"
            placeholder="Your Message"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <FormSubmit onClick={handleSubmit} loading={loading} text="send" />
        </div>
      </form>
    </FormContainer>
  );
}

export default FormContactMe;
