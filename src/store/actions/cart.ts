import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants/cart";
import { IAddToCart, IRemoveFromCart, IClearCart } from "../types/cart";
import { IProduct } from "../../models/models";

export const addToCart = (product: IProduct): IAddToCart => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (product: IProduct): IRemoveFromCart => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export const clearCart = (): IClearCart => ({ type: CLEAR_CART });
