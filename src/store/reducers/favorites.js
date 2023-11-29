import { ADD_FAVORITES, REMOVE_FAVORITES } from "../actions/favorites";

const initialState = {
  favorites: [],
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITES:
      const updFavorites = state.favorites.filter(
        (el) => el.id !== action.payload.id
      );
      return {
        ...state,
        favorites: updFavorites,
      };
    default:
      return state;
  }
};
