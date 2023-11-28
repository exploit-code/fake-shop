import { request } from "../../api/api";

export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_ERROR = "GET_CATEGORIES_ERROR";

export const getCategories = () => (dispatch) => {
  dispatch({ type: GET_CATEGORIES_REQUEST });
  request("categories?offset=0&limit=5")
    .then((res) => dispatch({ type: GET_CATEGORIES_SUCCESS, payload: res }))
    .catch(() => dispatch({ type: GET_CATEGORIES_ERROR }));
};
