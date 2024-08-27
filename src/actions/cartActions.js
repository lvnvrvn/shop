// Create Redux action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

// Create Redux action creators that return an action
export const addToCart = (goodInfo) => ({
  type: ADD_TO_CART,
  payload: goodInfo,
});

export const removeFromCart = (goodInfo) => ({
  type: REMOVE_FROM_CART,
  payload: goodInfo,
});

export const deleteFromCart = (goodInfo) => ({
  type: DELETE_FROM_CART,
  payload: goodInfo,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});