import customToast from '../../utils/customToast';
import Request from '../../utils/Request';

export const VALIDATE_PASSWORD_RESET_TOKEN_STARTED =
  'VALIDATE_PASSWORD_RESET_TOKEN_STARTED';
export const VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS =
  'VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS';
export const VALIDATE_PASSWORD_RESET_TOKEN_FAILURE =
  'VALIDATE_PASSWORD_RESET_TOKEN_FAILURE';
export const validatePasswordResetToken = (resetToken, history) => async (
  dispatch
) => {
  dispatch({ type: VALIDATE_PASSWORD_RESET_TOKEN_STARTED });

  const headers = { token: resetToken };
  Request.get('/auth/validate_password_reset_token', {
    headers,
  })
    .then((response) => {
      dispatch({
        type: VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: VALIDATE_PASSWORD_RESET_TOKEN_FAILURE,
      });
      if (error.response?.data?.errorCode === 'PRT003') {
        customToast.error(
          'your reset link has expired. Please re-initiate the request'
        );
        history.push('/password/forgot');
      } else if (error.response?.data?.errorCode.match(/^PRT001$|^PRT002$/)) {
        history.push('/notfound');
      } else {
        customToast.error('Operation failed. Network error');
      }
    });
};
