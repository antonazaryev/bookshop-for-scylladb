import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  TOGGLE_CART_VIEW
} from '../constants/actionConstants';

export const addToCartAction = itemId => ({
  type: ADD_TO_CART,
  payload: { itemId }
});

export const removeFromCartAction = itemId => ({
  type: REMOVE_FROM_CART,
  payload: { itemId }
});

export const updateCartQuantityAction = (itemId, newQuantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { itemId, newQuantity }
});

export const toggleCartAction = () => ({
  type: TOGGLE_CART_VIEW
});
