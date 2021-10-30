import { combineReducers } from "redux";

import formDataReducer from "./formDataReducer";
import menuDataReducer from "./menuDataReducer";


const reducers = combineReducers({

  formData: formDataReducer,
  menuData: menuDataReducer

});

export default reducers;
