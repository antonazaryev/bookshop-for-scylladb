import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  TOGGLE_CART_VIEW
} from '../constants/actionConstants';

const initialState = {
  itemsInCart: {},
  itemsCount: 0,
  isMyCartOpen: false
};

export default (state = initialState, action) => {
  const { payload } = action;
  const itemsInCart = { ...state.itemsInCart };
  let itemId, quantity;

  const countItemsCount = (items) => {
    let count = 0;
    for (const key in items) {
      count += items[key];
    }
    return count;
  };

  switch (action.type) {
    case ADD_TO_CART:
      itemId = payload.itemId;

      if (!itemsInCart[ itemId ]) {
        itemsInCart[ itemId ] = 1;
      } else {
        itemsInCart[ itemId ]++;
      }

      return {
        ...state,
        itemsCount: countItemsCount(itemsInCart),
        itemsInCart
      };
    case REMOVE_FROM_CART:
      itemId = payload.itemId;

      delete itemsInCart[ itemId ];

      return {
        ...state,
        itemsCount: countItemsCount(itemsInCart),
        itemsInCart
      };
    case UPDATE_CART_QUANTITY:
      itemId = payload.itemId;
      quantity = payload.newQuantity;

      itemsInCart[ itemId ] = quantity;
      if (itemsInCart[ itemId ] <= 0) {
        delete itemsInCart[ itemId ];
      }

      return {
        ...state,
        itemsCount: countItemsCount(itemsInCart),
        itemsInCart
      };
    case TOGGLE_CART_VIEW:
      return {
        ...state,
        isMyCartOpen: !state.isMyCartOpen
      };
    default:
      return state
  }
}
