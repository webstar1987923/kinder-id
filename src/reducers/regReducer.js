import {
  USER_UPDATE,
  CHILD_UPDATE,
  GAURDIAN_UPDATE,
  IMAGE_SAVE,
  CHILD_ID_UPDATE,
  GAURDIAN_SAVE,
  RESET_FORM,
  COLOR_UPDATE,
  SUB_ID_UPDATE,
  RENEW_SUBS_SUCCESS,
  RENEW_SUBS_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  parentName: "",
  parentTel: "",
  parentPassword: "",
  parentRPassword: "",
  childId: "",
  childName: "",
  wristband: "",
  gaurdianName: "",
  gaurdianTel: "",
  gaurdianEmail: "",
  uri: "",
  gaurdianData: [],
  replaceChildId: '',
  color: 'blue',
  renewChildId: '',
  renewError: '',
  renewResponse: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CHILD_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case GAURDIAN_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case IMAGE_SAVE:
      return { ...state, uri: action.payload };
    case CHILD_ID_UPDATE:
      return { ...state, replaceChildId: action.payload };
    case COLOR_UPDATE:
      return { ...state, color: action.payload };
    case SUB_ID_UPDATE:
      return { ...state, renewChildId: action.payload };
    case RENEW_SUBS_SUCCESS:
      return { ...state, renewError: '', renewResponse: action.payload };
    case RENEW_SUBS_FAILED:
      return { ...state, renewError: action.payload };
    case GAURDIAN_SAVE:
      return { ...state, gaurdianData: action.payload, gaurdianName: "", gaurdianTel: "", gaurdianEmail: "" };
    case RESET_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
}
