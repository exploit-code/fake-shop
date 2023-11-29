import { combineReducers } from "redux";
import { products } from "./products";
import { categories } from "./categories";
import { theme } from "./theme";
import { favorites } from "./favorites";
import { currentProduct } from "./current-product";

export const rootReducer = combineReducers({
  theme,
  products,
  categories,
  currentProduct,
  favorites,
});
