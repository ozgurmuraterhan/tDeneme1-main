import axios from "axios"

import { GET_IMAGES_DATA } from "../constants/ActionTypes";

export const getImagesData_r = () => async (dispatch) => {
    await
        axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`).then(res => {
            dispatch({
                type: GET_IMAGES_DATA,
                payload: res.data
            });
        })
};



