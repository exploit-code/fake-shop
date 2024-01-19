import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants/cart";
import { IStateCart, TCartUnionActions } from "../types/cart";

const initialState: IStateCart = {
  cart: [],
};

export const cart = (state = initialState, action: TCartUnionActions) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.cart.findIndex((item) => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].count++;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const newProduct = {
          ...action.payload,
          count: 1,
        };
        return {
          ...state,
          cart: [...state.cart, newProduct],
        };
      }

    case REMOVE_FROM_CART:
      const indexToRemove = state.cart.findIndex((item) => item.id === action.payload.id);

      if (indexToRemove !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[indexToRemove].count > 1) {
          updatedCart[indexToRemove].count--;
        } else {
          updatedCart.splice(indexToRemove, 1);
        }
        return {
          ...state,
          cart: updatedCart,
        };
      }
      return state;

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};
