import { combineReducers } from "redux";
import { products } from "./products";
import { cart } from "./cart";
import { theme } from "./theme";
import { favorites } from "./favorites";
import { currentProduct } from "./current-product";
import { carousel } from "./carousel";

export const rootReducer = combineReducers({
  theme,
  carousel,
  products,
  cart,
  currentProduct,
  favorites,
});
