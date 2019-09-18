import {
    CHILDREN_FETCH_SUCCESS,
    PARENT_UPDATE,
    CHILD_UPDATE,
    VALIDATE_PASSWORD_SUCCESS,
    VALIDATE_PASSWORD_ERROR,
    RESET_GONEXT,
    SUBSCRIPTIONS_FETCH_SUCCESS,
    GAURDIAN_INVITE_SENT,
    VALIDATE_REPLACE_SUCCESS,
    VALIDATE_REPLACE_ERROR,
    REPLACE_SUCCESS,
    REPLACE_ERROR

} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    parentName: '',
    mobile: '',
    address: '',
    postalCode: '',
    country: {
        name: '',
        countryCode: '',
        callingCode: ''
    },
    childrenName: '',
    wristband: '',
    children: [],
    gaurdians: [],
    goNext: false,
    passwordError: "",
    subscriptions: [],
    invitingParents: "",
    inviteSent: false,
    confirm: null,
    passwordChanged: false,
    paymentError: "",
    card: {},
    role: ""
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHILDREN_FETCH_SUCCESS: {
            const { parentName, mobile, email, address, postalCode, country, children, gaurdians, _id, card, status } = action.payload.user;
            const { invitingParents } = action.payload;
            return {...state, email, parentName, mobile, address, postalCode, country, children, gaurdians, _id, card, role: status, invitingParents };
        }
        case PARENT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CHILD_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case VALIDATE_PASSWORD_SUCCESS:
            return { ...state, goNext: true, passwordChanged: action.payload, passwordError: "" };
        case VALIDATE_PASSWORD_ERROR:
            return {...state, goNext: false, passwordError: action.payload.message };
        case RESET_GONEXT:
            return {...state, goNext: false, passwordChanged: false };
        case VALIDATE_REPLACE_SUCCESS:
            return {...state, goNext: true, passwordError: "" };
        case VALIDATE_REPLACE_ERROR:
            return {...state, passwordError: action.payload };
        case REPLACE_SUCCESS:
            return {...state, paymentError: "" };
        case REPLACE_ERROR:
            return {...state, paymentError: action.payload };
        case SUBSCRIPTIONS_FETCH_SUCCESS:
            return {...state, subscriptions: action.payload.children};
        case GAURDIAN_INVITE_SENT:
            return {...state, inviteSent: true };
        default:
            return state;
    }
}
