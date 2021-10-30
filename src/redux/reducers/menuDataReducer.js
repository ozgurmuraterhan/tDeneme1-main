import { SAVE_FORM_DATA, RESET_FORM_DATA } from "../constants/ActionTypes";


const initialSettings = {
  menuData: [
    {
      "id": 1,
      "title": "HAKKIMDA",
      "url": "hakkimda",
      "child": [
        {
          "id": 1,
          "title": "YOLCULUĞUM",
          "url": "yolculugum"
        },
        {
          "id": 2,
          "title": "SEMİNERLERİM",
          "url": "seminerlerim"
        },
        {
          "id": 3,
          "title": "YOLCULUKLARIMIZ",
          "url": "yolculuklarimiz"
        },
        {
          "id": 4,
          "title": "FOTOĞRAFLAR",
          "url": "fotograflar"
        }
      ]
    },
    {
      "id": 2,
      "title": "ÇALIŞMALARIMIZ",
      "url": "calismalarimiz"
    },
    {
      "id": 3,
      "title": "YOLCULUĞA BAŞLA",
      "url": "yolculugabasla"
    },
    {
      "id": 4,
      "title": "İLETİSİM",
      "url": "iletisim"
    }
  ]
};

const formReducer = (state = initialSettings, action) => {
  switch (action.type) {

    case SAVE_FORM_DATA:
      return {
        ...state,
        menuData: action.payload,

      };

    default:
      return state;
  }
};

export default formReducer;
