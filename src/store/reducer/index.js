import {
  REGISTRATION_STARTED,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REQUEST_PASSWORD_RESET_STARTED,
  REQUEST_PASSWORD_RESET_SUCCESS,
  REQUEST_PASSWORD_RESET_FAILURE,
  VALIDATE_PASSWORD_RESET_TOKEN_STARTED,
  VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS,
  VALIDATE_PASSWORD_RESET_TOKEN_FAILURE,
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from '../actions';

const initialState = {
  token: null,
  user: null,
  isLoading: false,
  isLoadingPage: false,
  error: '',
  projects: [],
  message: '',
  isValidPasswordResetToken: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_STARTED:
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        error: '',
        token: action.payload.token,
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case LOGIN_STARTED:
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        error: '',
        token: action.payload.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case REQUEST_PASSWORD_RESET_STARTED:
      return {
        ...state,
        error: action.payload,
        isLoading: true,
      };
    case REQUEST_PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
      };
    case REQUEST_PASSWORD_RESET_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case VALIDATE_PASSWORD_RESET_TOKEN_STARTED:
      return {
        ...state,
        isLoadingPage: true,
      };
    case VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS:
      return {
        ...state,
        isLoadingPage: false,
        isValidPasswordResetToken: true,
      };
    case VALIDATE_PASSWORD_RESET_TOKEN_FAILURE:
      return {
        ...state,
        isLoadingPage: false,
        isValidPasswordResetToken: false,
      };

    case CHANGE_PASSWORD_START:
      return {
        ...state,
        isLoading: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
