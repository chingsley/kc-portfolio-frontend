import {
  REGISTRATION_STARTED,
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS,
} from '../actions';

const initialState = {
  token: null,
  user: null,
  isLoading: false,
  error: '',
  projects: [],
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
        user: action.payload,
        isLoading: false,
        error: '',
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
