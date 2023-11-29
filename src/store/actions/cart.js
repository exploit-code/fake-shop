export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "GET_CATEGORIES_SUCCESS";

export const addToCart = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: product });
};
