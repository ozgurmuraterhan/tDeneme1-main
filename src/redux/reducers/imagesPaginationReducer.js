

import { IMAGES_PAGINATION } from "../constants/ActionTypes";


const initialSettings = {
  imagesPagination: {
    offset: 0,
    limit: 12,
  }
};

const imagesPaginationReducer = (state = initialSettings, action) => {
  switch (action.type) {

    case IMAGES_PAGINATION:
      return {
        ...state,
        imagesPagination: action.payload,
      };

    default:
      return state;
  }
};

export default imagesPaginationReducer;
