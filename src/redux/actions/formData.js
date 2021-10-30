import { SAVE_FORM_DATA, RESET_FORM_DATA } from "../constants/ActionTypes";


export const formDataSave_r = (data) => {
    return {
        type: SAVE_FORM_DATA,
        payload: data
    }
};

export const formDataReset_r = () => {
    return {
        type: RESET_FORM_DATA,
    }
};



