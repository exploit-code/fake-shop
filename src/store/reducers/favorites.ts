import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CLEAR_FAVORITES } from "../constants/favorites";
import { IStateFavorites, TFavoritesUnionActions } from "../types/favorites";

const initialState: IStateFavorites = {
  favorites: [],
};

export const favorites = (state = initialState, action: TFavoritesUnionActions) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const isExist = state.favorites.some((item) => item.id === action.payload.id);
      if (!isExist) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      } else return state;

    case REMOVE_FROM_FAVORITES:
      const updFavorites = state.favorites.filter((el) => el.id !== action.payload.id);
      return {
        ...state,
        favorites: updFavorites,
      };

    case CLEAR_FAVORITES:
      return initialState;

    default:
      return state;
  }
};
