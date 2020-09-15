import { Request } from '../../utils';
import { toast } from 'react-toastify';
import customToast from '../../utils/customToast';
import { saveToken } from '../../utils/localStorage';

export const REGISTRATION_STARTED = 'REGISTRATION_STARTED';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
export const registerUser = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: REGISTRATION_STARTED });
    const options = {
      data: formData,
      contentType: 'multipart/form-data',
    };
    const { data } = await Request.post('/users', options);
    console.log(data);
    customToast.success(data.message);
    saveToken(data.data.token);
    dispatch({ type: REGISTRATION_SUCCESS, payload: data.data });
    history.push('/home');
  } catch (error) {
    const errorMsg =
      error.response?.data?.error ||
      `${
        error.response?.statusText ||
        'Server not reachable. Please check your internet connection or try again shortly'
      }`;
    customToast.error(errorMsg);
    dispatch({
      type: REGISTRATION_FAILURE,
      payload: errorMsg,
    });
  }
};

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginUser = (form, history) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_STARTED });
    const options = {
      data: form,
      contentType: 'application/json',
    };
    const { data } = await Request.post('/users/login', options);
    console.log(data);
    customToast.success(data.message);
    saveToken(data.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: data.data });
    history.push('/home');
  } catch (error) {
    console.log(error);
    const errorMsg =
      error.response?.data?.error ||
      `${
        error.response?.statusText ||
        'Server not reachable. Please check your internet connection or try again shortly'
      }`;
    customToast.error(errorMsg);
    dispatch({
      type: LOGIN_FAILURE,
      payload: errorMsg,
    });
  }
};