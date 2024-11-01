// Create Redux action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

interface IGoodInfo { id: number; size: string }

export interface ICartActionWithPayload {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'DELETE_FROM_CART';
  payload: IGoodInfo;
}

export interface ICartAction {
  type: 'CLEAR_CART',
}

// Create Redux action creators that return an action
export const addToCart = (goodInfo: IGoodInfo): ICartActionWithPayload => ({
  type: ADD_TO_CART,
  payload: goodInfo,
});

export const removeFromCart = (goodInfo: IGoodInfo): ICartActionWithPayload => ({
  type: REMOVE_FROM_CART,
  payload: goodInfo,
});

export const deleteFromCart = (goodInfo: IGoodInfo): ICartActionWithPayload => ({
  type: DELETE_FROM_CART,
  payload: goodInfo,
});

export const clearCart = (): ICartAction => ({
  type: CLEAR_CART,
});
