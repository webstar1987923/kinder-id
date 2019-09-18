import {
    PAYMENT_SUCCESS,
    PAYMENT_FAILED,
    PAY_WITH_CARD_SUCCESS,
    PAY_WITH_CARD_FAILED
} from '../actions/types';

const INITIAL_STATE = {
    stripeToken: "",
    stripeError: "",
    payComplete: false,
    payWithCardError: ""
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case PAYMENT_SUCCESS:
            return {...state, stripeError: "", stripeToken: action.payload };
        case PAYMENT_FAILED:
            return {...state, stripeError: action.payload };
        case PAY_WITH_CARD_SUCCESS:
            return { ...state, payComplete: true };
        case PAY_WITH_CARD_FAILED:
            return { ...state, payWithCardError: action.payload };
        default:
            return state;
    }
}
