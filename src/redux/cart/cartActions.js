import { TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART } from 'redux/actionTypes';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItemToCart = item => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});
