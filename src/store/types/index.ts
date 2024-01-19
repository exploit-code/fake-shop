import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "../index";
import { TCaruselUnionActions } from "./carousel";
import { TCartUnionActions } from "./cart";
import { TCurrentProductUnionActions } from "./current-product";
import { TFavoritesUnionActions } from "./favorites";
import { TProductsUnionActions } from "./products";
import { TThemeUnionActions } from "./theme";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions =
  | TCaruselUnionActions
  | TCartUnionActions
  | TCurrentProductUnionActions
  | TFavoritesUnionActions
  | TProductsUnionActions
  | TThemeUnionActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
