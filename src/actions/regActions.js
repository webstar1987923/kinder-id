import {
    USER_UPDATE,
    CHILD_UPDATE,
    IMAGE_SAVE,
    CHILD_ID_UPDATE,
    COLOR_UPDATE,
    RESET_FORM,
    SUB_ID_UPDATE
} from './types';

export const userUpdate = ({ prop, value }) => ({
      type: USER_UPDATE,
      payload: { prop, value }
});

export const childUpdate = ({ prop, value }) => ({
      type: CHILD_UPDATE,
      payload: { prop, value }
});

export const saveImage = imageURI => ({
      type: IMAGE_SAVE,
      payload: imageURI
});
export const childIdUpdate = childId => ({
      type: CHILD_ID_UPDATE,
      payload: childId
});
export const colorUpdate = color => ({
      type: COLOR_UPDATE,
      payload: color
});
export const subIdUpdate = id => ({
      type: SUB_ID_UPDATE,
      payload: id
});

export const resetForm = () => ({ type: RESET_FORM });
