import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../constants/products";
import { IProduct, IProductUpgrade } from "../../models/models";

export interface IStateProducts {
  readonly products: IProduct[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface IGetProductsRequest {
  readonly type: typeof GET_PRODUCTS_REQUEST;
}

export interface IGetProductsSuccess {
  readonly type: typeof GET_PRODUCTS_SUCCESS;
  readonly payload: IProduct[];
}

export interface IGetProductsError {
  readonly type: typeof GET_PRODUCTS_ERROR;
}

export type TProductsUnionActions = IGetProductsRequest | IGetProductsSuccess | IGetProductsError;
