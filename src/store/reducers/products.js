import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../actions/products";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      const updatedProducts = action.payload.map((item) => ({
        ...item,
        uuid: uuidv4(),
      }));
      return {
        ...state,
        loading: false,
        products: updatedProducts,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
