export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const CLEAR_FAVORITES = "CLEAR_FAVORITES";

export const addFavorites = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITES, payload: product });
};

export const removeFavorites = (product) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_FAVORITES, payload: product });
};

export const clearFavorites = () => (dispatch) => {
  dispatch({ type: CLEAR_FAVORITES });
};
