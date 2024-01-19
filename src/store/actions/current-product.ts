import { SET_CURRENT_PRODUCT } from "../constants/current-product";
import { ISetCurrentProduct } from "../types/current-product";
import { IProduct } from "../../models/models";

export const setCurrentProduct = (product: IProduct): ISetCurrentProduct => ({
  type: SET_CURRENT_PRODUCT,
  payload: product,
});
