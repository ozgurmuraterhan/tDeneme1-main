import { combineReducers } from "redux";

import formDataReducer from "./formDataReducer";
import menuDataReducer from "./menuDataReducer";
import imagesDataReducer from "./imagesDataReducer";
import imagesPaginationReducer from "./imagesPaginationReducer";


const reducers = combineReducers({

  formData: formDataReducer,
  menuData: menuDataReducer,
  imagesData: imagesDataReducer,
  imagesPagination: imagesPaginationReducer

});

export default reducers;
