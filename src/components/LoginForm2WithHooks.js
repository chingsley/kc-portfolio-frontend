import React, { useState, useEffect } from 'react';
import style, { css } from 'styled-components';
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
      &__control {
        margin-bottom: 1.5rem;
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

function LoginForm() {
  const { setRequest, loading, successMsg, setSuccessMsg } = useFetch();
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: 'Testing*123',
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
    const form = Object.keys(formData).reduce((obj, key) => {
      if (key === 'emailOrUsername' && formData[key].includes('@')) {
        return { ...obj, email: formData[key] };
      } else if (key === 'emailOrUsername' && !formData[key].includes('@')) {
        return { ...obj, username: formData[key] };
      } else {
        return { ...obj, [key]: formData[key] };
      }
    }, {});
    setRequest({
      endpoint: '/auth/login',
      method: 'post',
      body: form,
    });
  };
  useEffect(() => {
    if (successMsg) {
      setFormData({
        emailOrUsername: '',
        password: '',
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
            placeholder="Email/Username"
            name="emailOrUsername"
            id="emailOrUsername"
            value={formData.emailOrUsername}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <FormInput
            inputType="input"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__control">
          <FormSubmit onClick={handleSubmit} loading={loading} text="Sign In" />
        </div>
      </form>
    </FormContainer>
  );
}

export default LoginForm;
