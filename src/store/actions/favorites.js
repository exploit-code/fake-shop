export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";

export const addFavorites = (product) => (dispatch) => {
  dispatch({ type: ADD_FAVORITES, payload: product });
};

export const removeFavorites = (product) => (dispatch) => {
  dispatch({ type: REMOVE_FAVORITES, payload: product });
};
