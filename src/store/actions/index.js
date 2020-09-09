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
