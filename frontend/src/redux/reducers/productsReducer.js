import { get } from 'lodash';
import {
    LOAD_ITEMS
} from '../constants/actionConstants';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case LOAD_ITEMS:
            const { items } = payload;

            const simplifiedItems = items.map(item => ({
              id: item.id,
              title: get(item, 'volumeInfo.title'),
              description: get(item, 'searchInfo.textSnippet'),
              thumbnail: get(item, 'volumeInfo.imageLinks.smallThumbnail'),
              price: get(item, 'saleInfo.saleability') === "FOR_SALE" && get(item, 'saleInfo.retailPrice.amount'),
              pageCount: get(item, 'volumeInfo.pageCount')
            }));

            return { items: simplifiedItems };
        default:
            return state
    }
}
