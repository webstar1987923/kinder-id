import {
    EMAIL_LOGIN,
    EMAIL_ERROR,
    VALIDATION_CODE,
    VALIDATION_ERROR,
    AUTHORIZED_SUCCESS,
    AUTHORIZED_ERROR,
    NEW_USER_UPDATE_SUCCESS,
    NEW_USER_UPDATE_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  userEmail: "",
  error: "",
  vError: "",
  aError: "",
  token: null,
  status: null,
  valid: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_LOGIN:
        return {userEmail: action.payload.email, status: action.payload.status, error: "" };
    case EMAIL_ERROR:
        return { error: action.payload };
    case VALIDATION_CODE:
        return { ...state, valid: true };
    case VALIDATION_ERROR:
        return { ...state, vError: action.payload };
    case AUTHORIZED_SUCCESS:
        return { ...state, aError: '', token: action.payload.token};
    case AUTHORIZED_ERROR:
        return { ...state, aError: action.payload };
    case NEW_USER_UPDATE_SUCCESS:
        return { ...state, token: action.payload };
    case NEW_USER_UPDATE_ERROR:
        return { ...state, };
    default:
      return state;
  }
}
