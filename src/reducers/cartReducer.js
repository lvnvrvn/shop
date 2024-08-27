import * as actions from "../actions/cartActions";

export const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART: {
      console.log("вызван экшн ADD_TO_CART");
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
    case actions.REMOVE_FROM_CART: {
      console.log("вызван action REMOVE_FROM_CART");
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
    case actions.DELETE_FROM_CART: {
      console.log("вызван action DELETE_FROM_CART");
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
    case actions.CLEAR_CART:
      console.log("вызван action CLEAR_CART");
      return initialState;
    default:
      return state;
  }
}
