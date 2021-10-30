import { SAVE_MENU } from "../constants/ActionTypes";


export const formDataSave_r = (data) => {
    return {
        type: SAVE_MENU,
        payload: data
    }
};


