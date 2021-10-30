import { SAVE_FORM_DATA, RESET_FORM_DATA } from "../constants/ActionTypes";


const initialSettings = {
  formData: {
    name: "",
    email: "",
    phone: "",
    instagtamUsername: "",
    country: "Türkiye",
    usingProduct: "false",
    memberProduct: "false",
    size: "",
    description: ""
  }
};

const formDataReducer = (state = initialSettings, action) => {
  switch (action.type) {

    case SAVE_FORM_DATA:
      return {
        ...state,
        formData: action.payload,

      };
    case RESET_FORM_DATA:
      return {
        ...state,
        formData: {
          name: "",
          email: "",
          phone: "",
          instagtamUsername: "",
          country: "Türkiye",
          usingProduct: "false",
          memberProduct: "false",
          size: "",
          description: ""
        }

      };

    default:
      return state;
  }
};

export default formDataReducer;
