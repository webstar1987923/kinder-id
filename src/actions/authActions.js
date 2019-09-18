import axios from 'axios';
import {
  EMAIL_LOGIN,
  EMAIL_ERROR,
  VALIDATION_CODE,
  VALIDATION_ERROR,
  AUTHORIZED_SUCCESS,
  AUTHORIZED_ERROR,
  NEW_USER_UPDATE_SUCCESS,
  NEW_USER_UPDATE_ERROR
} from './types';

export const login = email => async dispatch => {
    try {
        const { data } = await axios.post('https://api.kinder-id.com/auth/mobile/email_login', {email});
        dispatch({ type: EMAIL_LOGIN, payload: data });
    } catch (err) {
        if (err.response.status === 502) {
            return dispatch({ type: EMAIL_ERROR, payload: "Network error, Please try again later" });
        }
        dispatch({ type: EMAIL_ERROR, payload: err.response.data });
    }
};

export const verify = (email, verificationCode) => async dispatch => {
    try {
        await axios.post('https://api.kinder-id.com/auth/mobile/validate_user', {email, verificationCode});
        dispatch({ type: VALIDATION_CODE });
    } catch (err) {
        if (err.response.status === 502) {
            return dispatch({ type: VALIDATION_ERROR, payload: "Network error, Please try again later" });
        }
        dispatch({ type: VALIDATION_ERROR, payload: err.response.data });
    }
};

export const authorize = (email, password) => async dispatch => {
    try {
        const { data } = await axios.post('https://api.kinder-id.com/auth/mobile/authorize_user', {email, password});
        dispatch({ type: AUTHORIZED_SUCCESS, payload: data });
    } catch (err) {
        if (err.response.status === 502) {
            return dispatch({ type: AUTHORIZED_ERROR, payload: "Network error, Please try again later" });
        }
        dispatch({ type: AUTHORIZED_ERROR, payload: err.response.data });
    }
};

export const updateNewUserProfile = (userData) => async dispatch => {
    try {
        const { data } = await axios.post(
            "https://api.kinder-id.com/auth/mobile/updatenewuserprofile",
            userData
        );
        dispatch({ type: NEW_USER_UPDATE_SUCCESS, payload: data});
    } catch (err) {
        if (err.response.status === 502) {
            return dispatch({
              type: NEW_USER_UPDATE_ERROR,
              payload: "Network error, Please try again later"
            });
        }
        dispatch({ type: NEW_USER_UPDATE_ERROR, payload: err.response.data });
    }
};
