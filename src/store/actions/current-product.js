export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";
export const REMOVE_CURRENT_PRODUCT = "REMOVE_CURRENT_PRODUCT";

export const setCurrentProduct = (product) => (dispatch) => {
  dispatch({ type: SET_CURRENT_PRODUCT, payload: product });
};
