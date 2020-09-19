import customToast from './customToast';

export { default as Request } from './Request';

export const handleError = (error) => {
  console.log('error = ', error);
  console.log('error.message = ', error.message);
  console.log('error.response = ', error.response);
  let errorMsg =
    error.response?.data?.error || error.response?.statusText || error.message;
  if (error.response?.statusText.toLowerCase() === 'not found') {
    errorMsg =
      'Server not reacheable. Please check your internet connection or try again later.';
  }
  if (error.message.toLowerCase() === 'network error') {
    errorMsg =
      'The website is not reacheable. Please check your internet connection or try again later.';
  }
  customToast.error(errorMsg);
  return errorMsg;
};
