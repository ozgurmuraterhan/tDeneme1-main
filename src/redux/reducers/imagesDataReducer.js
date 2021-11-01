import { GET_IMAGES_DATA } from "../constants/ActionTypes";

const initialSettings = {
  imagesData: [
    {
      albumId: 1,
      id: 1,
      title: "",
      url: "",
      thumbnailUrl: ""
    },
  ]
};


const imagesDataReducer = (state = initialSettings, action) => {

  switch (action.type) {

    case GET_IMAGES_DATA:
      return {
        ...state,
        imagesData: action.payload,

      };
    default:
      return state;
  }
};

export default imagesDataReducer;
