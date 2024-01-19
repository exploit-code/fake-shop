import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../constants/products";
import { IGetProductsError, IGetProductsRequest, IGetProductsSuccess } from "../types/products";
import { IProduct } from "../../models/models";

export const getProductsRequest = (): IGetProductsRequest => ({
  type: GET_PRODUCTS_REQUEST,
});

export const getProductsSuccess = (res: IProduct[]): IGetProductsSuccess => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: res,
});

export const getProductsError = (): IGetProductsError => ({
  type: GET_PRODUCTS_ERROR,
});
