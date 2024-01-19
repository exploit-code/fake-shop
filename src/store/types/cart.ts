import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants/cart";
import { IProductUpgrade, IProduct } from "../../models/models";

export interface IStateCart {
  readonly cart: IProductUpgrade[];
}

export interface IAddToCart {
  readonly type: typeof ADD_TO_CART;
  readonly payload: IProduct;
}

export interface IRemoveFromCart {
  readonly type: typeof REMOVE_FROM_CART;
  readonly payload: IProduct;
}

export interface IClearCart {
  readonly type: typeof CLEAR_CART;
}

export type TCartUnionActions = IAddToCart | IRemoveFromCart | IClearCart;
