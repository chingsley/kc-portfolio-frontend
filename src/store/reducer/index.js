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
} from '../actions';

const initialState = {
  token: null,
  user: null,
  isLoading: false,
  error: '',
  projects: [],
  message: '',
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
      console.log(action.payload);
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
        isLoding: true,
      };
    case REQUEST_PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isLoding: false,
      };
    case REQUEST_PASSWORD_RESET_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoding: false,
      };
    default:
      return state;
  }
};

export default reducer;
