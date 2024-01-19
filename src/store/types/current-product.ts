import { SET_CURRENT_PRODUCT } from "../constants/current-product";
import { IProduct } from "../../models/models";

export interface IStateCurrentProduct {
  readonly currentProduct: IProduct | null;
}

export interface ISetCurrentProduct {
  readonly type: typeof SET_CURRENT_PRODUCT;
  readonly payload: IProduct;
}

export type TCurrentProductUnionActions = ISetCurrentProduct;
