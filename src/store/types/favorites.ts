import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CLEAR_FAVORITES } from "../constants/favorites";
import { IProduct, IProductUpgrade } from "../../models/models";

export interface IStateFavorites {
  readonly favorites: IProduct[];
}

export interface IAddToFavorites {
  readonly type: typeof ADD_TO_FAVORITES;
  readonly payload: IProduct;
}

export interface IRemoveFromFavorites {
  readonly type: typeof REMOVE_FROM_FAVORITES;
  readonly payload: IProduct;
}

export interface IClearFavorites {
  readonly type: typeof CLEAR_FAVORITES;
}

export type TFavoritesUnionActions = IAddToFavorites | IRemoveFromFavorites | IClearFavorites;
