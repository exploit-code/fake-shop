import { request } from "../../api/api";

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  request("products")
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: res,
      })
    )
    .catch(() => dispatch({ type: GET_PRODUCTS_ERROR }));
};
