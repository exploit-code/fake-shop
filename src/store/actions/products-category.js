import { request } from "../../api/api";

export const GET_PRODUCTS_CATEGORY_REQUEST = "GET_PRODUCTS_CATEGORY_REQUEST";
export const GET_PRODUCTS_CATEGORY_SUCCESS = "GET_PRODUCTS_CATEGORY_SUCCESS";
export const GET_PRODUCTS_CATEGORY_ERROR = "GET_PRODUCTS_CATEGORY_ERROR";

export const getProductsCategory = (categoryID) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_CATEGORY_REQUEST });
  request(`categories/${categoryID}/products`)
    .then((res) =>
      dispatch({ type: GET_PRODUCTS_CATEGORY_SUCCESS, payload: res })
    )
    .catch(() => dispatch({ type: GET_PRODUCTS_CATEGORY_ERROR }));
};
