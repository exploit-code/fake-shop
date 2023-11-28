import { combineReducers } from "redux";
import { products } from "./products";
import { categories } from "./categories";
import { theme } from "./theme";
import { favorites } from "./favorites";
import { productsCategory } from "./products-category";

export const rootReducer = combineReducers({
  theme,
  products,
  categories,
  productsCategory,
  favorites,
});
