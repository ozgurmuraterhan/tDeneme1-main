import { IMAGES_PAGINATION } from "../constants/ActionTypes";

export const imagesPagination_r = (data) => {
    return {
        type: IMAGES_PAGINATION,
        payload: data
    }
};




