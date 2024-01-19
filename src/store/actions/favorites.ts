import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CLEAR_FAVORITES } from "../constants/favorites";
import { IAddToFavorites, IRemoveFromFavorites, IClearFavorites } from "../types/favorites";
import { IProduct } from "../../models/models";

export const addFavorites = (product: IProduct): IAddToFavorites => ({
  type: ADD_TO_FAVORITES,
  payload: product,
});

export const removeFavorites = (product: IProduct): IRemoveFromFavorites => ({
  type: REMOVE_FROM_FAVORITES,
  payload: product,
});

export const clearFavorites = (): IClearFavorites => ({ type: CLEAR_FAVORITES });
