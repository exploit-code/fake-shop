import { combineReducers } from "redux";
import { products } from "./products";
import { theme } from "./theme";
import { favorites } from "./favorites";

export const rootReducer = combineReducers({
  theme,
  products,
  favorites,
});
