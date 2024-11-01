import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  ICartActionWithPayload,
  ICartAction
} from '../actions/cartActions';

interface IInitialState {
  [itemId: number]: {
    [size: string]: number;
  };
}
export const initialState: IInitialState = {};

export default function cartReducer(
  state = initialState,
  action: ICartActionWithPayload | ICartAction,
) {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log('вызван экшн ADD_TO_CART');
      const itemId = action.payload.id;
      const itemSize = action.payload.size;
      const newAmount = state[itemId]?.[itemSize]
        ? state[itemId][itemSize] + 1
        : 1;
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.size]: newAmount,
        },
      };
    }
    case REMOVE_FROM_CART: {
      console.log('вызван action REMOVE_FROM_CART');
      const itemId = action.payload.id;
      const itemSize = action.payload.size;
      const currentAmount = state[itemId][itemSize];
      if (currentAmount === 1) {
        const newAddedSizes = { ...state[itemId] };
        delete newAddedSizes[itemSize];
        if (Object.keys(newAddedSizes).length === 0) {
          const newAddedProducts = { ...state };
          delete newAddedProducts[itemId];
          return newAddedProducts;
        }
        return { ...state, [itemId]: newAddedSizes };
      }
      return {
        ...state,
        [itemId]: { ...state[itemId], [itemSize]: currentAmount - 1 },
      };
    }
    case DELETE_FROM_CART: {
      console.log('вызван action DELETE_FROM_CART');
      const itemId = action.payload.id;
      const itemSize = action.payload.size;
      const newAddedSizes = { ...state[itemId] };
      delete newAddedSizes[itemSize];
      if (Object.keys(newAddedSizes).length === 0) {
        const newAddedProducts = { ...state };
        delete newAddedProducts[itemId];
        return newAddedProducts;
      }
      return { ...state, [itemId]: newAddedSizes };
    }
    case CLEAR_CART:
      console.log('вызван action CLEAR_CART');
      return initialState;
    default:
      return state;
  }
}
