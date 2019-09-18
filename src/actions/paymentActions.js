import stripe from "tipsi-stripe";
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import {
  PAYMENT_SUCCESS,
  PAYMENT_FAILED,
  PAY_WITH_CARD_SUCCESS,
  PAY_WITH_CARD_FAILED,
  RENEW_SUBS_SUCCESS,
  RENEW_SUBS_FAILED
} from "./types";

stripe.init({
  publishableKey: "pk_test_yPlBoXVGw9SaBcMLAdxoXHj4"
});

export const payNewStripe = params => async dispatch => {
  try {
    const {tokenId} = await stripe.createTokenWithCard(params);
    dispatch({ type: PAYMENT_SUCCESS, payload: tokenId });
  } catch (err) {
    dispatch({ type: PAYMENT_FAILED, payload: err.message });
  }
};
export const payWithSavedCard = amount => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const { data } = await axios.post(
      "https://api.kinder-id.com/payment/paywithcard",
      {amount},
      config
    );
    dispatch({ type: PAY_WITH_CARD_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PAY_WITH_CARD_FAILED, payload: err.message });
  }
};
export const payRenewSubscription = (type, childId) => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const { data } = await axios.post(
      "https://api.kinder-id.com/payment/renewsubscription",
      {type, childId},
      config
    );
    dispatch({ type: RENEW_SUBS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: RENEW_SUBS_FAILED, payload: err.message });
  }
};
export const renewSubscriptionWcard = (stripeToken, type, childId) => async dispatch => {
  const token = await AsyncStorage.getItem("kinderID_sessionToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const { data } = await axios.post(
      "https://api.kinder-id.com/payment/renewsubscriptionwithcard",
      {stripeToken, type, childId},
      config
    );
    dispatch({ type: RENEW_SUBS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: RENEW_SUBS_FAILED, payload: err.message });
  }
};
