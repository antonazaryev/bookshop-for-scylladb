import axios from 'axios/index';
import {
    LOAD_ITEMS
} from '../constants/actionConstants';

export const loadItemsAction = item => {
    return (dispatch) => {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=nosql').then(response => {
            dispatch({
                type: LOAD_ITEMS,
                payload: response.data
            })
        }).catch(error => {
            throw(error);
        });
    };
};
