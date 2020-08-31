import { Request } from '../../utils';

export const REGISTRATION_STARTED = 'REGISTRATION_STARTED';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

export const createNewUserAccount = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTRATION_STARTED });
    const response = await Request.post({
      url: 'http://localhost:3000/api/v1/users',
      data: formData,
      contentType: 'multipart/form-data',
    });
    console.log(response);
    dispatch({ type: REGISTRATION_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: REGISTRATION_FAILURE,
      payload: error.response.data.error,
    });
    console.log(error.response);
  }
};
