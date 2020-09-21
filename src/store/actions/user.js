import { Request, handleError } from '../../utils';
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
    const errorMsg = handleError(error);
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
    customToast.success(data.message);
    saveToken(data.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: data.data });
    history.push('/home');
  } catch (error) {
    const errorMsg = handleError(error);
    dispatch({
      type: LOGIN_FAILURE,
      payload: errorMsg,
    });
  }
};

export const REQUEST_PASSWORD_RESET_STARTED = 'REQUEST_PASSWORD_RESET_STARTED';
export const REQUEST_PASSWORD_RESET_SUCCESS = 'REQUEST_PASSWORD_RESET_SUCCESS';
export const REQUEST_PASSWORD_RESET_FAILURE = 'REQUEST_PASSWORD_RESET_FAILED';
export const requestPasswordReset = (form, history) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_PASSWORD_RESET_STARTED });
    const response = await Request.post('/users/request_password_reset', {
      data: form,
    });
    const { data } = response;
    customToast.success(data.message);
    dispatch({ type: REQUEST_PASSWORD_RESET_SUCCESS, payload: data.message });
    // history.push('/login');
  } catch (error) {
    const errorMsg = handleError(error);
    dispatch({
      type: REQUEST_PASSWORD_RESET_FAILURE,
      payload: errorMsg,
    });
  }
};
