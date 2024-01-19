import { request } from "../../utils/api";
import { AppThunk } from "../types";
import { getProductsError, getProductsRequest, getProductsSuccess } from "../actions/products";

export const getProducts = (): AppThunk => (dispatch) => {
  dispatch(getProductsRequest());
  request("products")
    .then((res) => dispatch(getProductsSuccess(res)))
    .catch(() => dispatch(getProductsError()));
};
