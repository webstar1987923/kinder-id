import axios from "axios";
import { AsyncStorage } from "react-native";
import {
  CHILDREN_FETCH_SUCCESS,
  PARENT_UPDATE,
  VALIDATE_PASSWORD_SUCCESS,
  VALIDATE_PASSWORD_ERROR,
  RESET_GONEXT,
  SUBSCRIPTIONS_FETCH_SUCCESS,
  GAURDIAN_INVITE_SENT,
  VALIDATE_REPLACE_SUCCESS,
  VALIDATE_REPLACE_ERROR,
  REPLACE_SUCCESS,
  REPLACE_ERROR
} from "./types";

export const parentUpdate = ({ prop, value }) => ({
    type: PARENT_UPDATE,
    payload: { prop, value }
  });

export const fetchChildren = () => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const { data } = await axios.post(
      "https://api.kinder-id.com/mobile/getuserdata",
      null,
      config
    );

    dispatch({ type: CHILDREN_FETCH_SUCCESS, payload: data });
  } catch (err) {
    console.log("error: ", err.response);
    if (err.response.status === 502) {
      return console.log("network error");
      //dispatch({ type: CHILDREN_FETCH_ERROR, payload: "Network error, Please try again later" });
    }
    // dispatch({ type: CHILDREN_FETCH_ERROR, payload: err.response });
    console.log("error", err.respose);
  }
};

export const respondToInvitation = (parentId, response) => async () => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    await axios.post(
      "https://api.kinder-id.com/mobile/invitationresponse",
      {parentId, response},
      config
    );
  } catch (err) {
    console.log("error: ", err.response);
    if (err.response.status === 502) {
      return console.log("network error");
    }
    console.log("error", err.respose);
  }
};

export const inviteGaurdian = (gaurdianEmail, gaurdianName) => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    await axios.post(
      "https://api.kinder-id.com/mobile/invitegaurdian",
      {gaurdianEmail, gaurdianName},
      config
    );

    dispatch({ type: GAURDIAN_INVITE_SENT });
  } catch (err) {
    console.log("error: ", err.response);
    if (err.response.status === 502) {
      return console.log("network error");
    }
    console.log("error", err.respose);
  }
};

export const updateChildData = (
  password,
  childId,
  childrenName,
  wristband
) => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    await axios.post(
      "https://api.kinder-id.com/auth/mobile/updateChild",
      { password, childId, childrenName, wristband },
      config
    );
    dispatch({ type: VALIDATE_PASSWORD_SUCCESS });
  } catch (err) {
    console.log("request error: ", err.response);
    if (err.response.status === 502) {
      return dispatch({
        type: VALIDATE_PASSWORD_ERROR,
        payload: "Network error, Please try again later"
      });
    }
    dispatch({ type: VALIDATE_PASSWORD_ERROR, payload: err.response.data });
  }
};

export const deleteChildren = (password, childId) => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    await axios.post(
      "https://api.kinder-id.com/auth/mobile/deleteChildren",
      { password, childId },
      config
    );
    dispatch({ type: VALIDATE_PASSWORD_SUCCESS });
  } catch (err) {
    console.log("request error: ", err.response);
    if (err.response.status === 502) {
      return dispatch({
        type: VALIDATE_PASSWORD_ERROR,
        payload: "Network error, Please try again later"
      });
    }
    dispatch({ type: VALIDATE_PASSWORD_ERROR, payload: err.response.data });
  }
};

export const replaceID = (childId, color, stripeToken, payingWithCard) => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    await axios.post(
      "https://api.kinder-id.com/auth/mobile/replaceid",
      { childId, color, stripeToken, payingWithCard },
      config
    );
    dispatch({ type: REPLACE_SUCCESS });
  } catch (err) {
    console.log("request error: ", err.response);
    if (err.response.status === 502) {
      return dispatch({
        type: REPLACE_ERROR,
        payload: "Network error, Please try again later"
      });
    }
    dispatch({ type: REPLACE_ERROR, payload: err.response.data });
  }
};
export const validatePassword = password => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    await axios.post(
      "https://api.kinder-id.com/auth/mobile/validatepassword",
      { password },
      config
    );
    dispatch({ type: VALIDATE_REPLACE_SUCCESS });
  } catch (err) {
    console.log("request error: ", err.response);
    if (err.response.status === 502) {
      return dispatch({
        type: VALIDATE_REPLACE_ERROR,
        payload: "Network error, Please try again later"
      });
    }
    dispatch({ type: VALIDATE_REPLACE_ERROR, payload: err.response.data });
  }
};

export const fetchSubscriptions = () => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const { data } = await axios.post(
      "https://api.kinder-id.com/mobile/subscriptions",
      null,
      config
    );

    dispatch({ type: SUBSCRIPTIONS_FETCH_SUCCESS, payload: data });
  } catch (err) {
    console.log("error: ", err.response);
    if (err.response.status === 502) {
      return console.log("network error");
      //dispatch({ type: GAURDIAN_FETCH_SUCCESS, payload: "Network error, Please try again later" });
    }
    // dispatch({ type: GAURDIAN_FETCH_SUCCESS, payload: err.response });
    console.log("error", err.respose);
  }
};

export const updateProfile = (password, newPassword, {parentName, mobile, email, address, country, postalCode}) => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const { data } = await axios.post(
      "https://api.kinder-id.com/mobile/updateprofile",
      {password, newPassword, parentName, mobile, email, address, country, postalCode},
      config
    );

    dispatch({ type: VALIDATE_PASSWORD_SUCCESS, payload: data.passwordChanged });
  } catch (err) {
    console.log("error: ", err.response);
    if (err.response.status === 502) {
      return dispatch({
        type: VALIDATE_PASSWORD_ERROR,
        payload: "Network error, Please try again later"
      });
    }
    dispatch({ type: VALIDATE_PASSWORD_ERROR, payload: err.response.data });
  }
};
export const deleteProfile = (password) => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    await axios.post(
      "https://api.kinder-id.com/mobile/deleteprofile",
      {password},
      config
    );

    dispatch({ type: VALIDATE_PASSWORD_SUCCESS });
  } catch (err) {
    console.log("error: ", err.response);
    if (err.response.status === 502) {
      return dispatch({
        type: VALIDATE_PASSWORD_ERROR,
        payload: "Network error, Please try again later"
      });
    }
    dispatch({ type: VALIDATE_PASSWORD_ERROR, payload: err.response.data });
  }
};

export const resetGoNext = () => ({ type: RESET_GONEXT });
