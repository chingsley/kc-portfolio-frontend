import { Request } from '../../utils';
import { toast } from 'react-toastify';
import customToast from '../../utils/customToast';

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
    const response = await Request.post('/users', options);
    console.log(response);
    customToast.success(response.data.message);
    dispatch({ type: REGISTRATION_SUCCESS, payload: response.data });
    history.push('/home');
  } catch (error) {
    const errorMsg = error.response?.data?.error || error.response.statusText;
    dispatch({
      type: REGISTRATION_FAILURE,
      payload: errorMsg,
    });
  }
};
