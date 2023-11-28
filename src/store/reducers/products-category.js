import {
  GET_PRODUCTS_CATEGORY_REQUEST,
  GET_PRODUCTS_CATEGORY_SUCCESS,
  GET_PRODUCTS_CATEGORY_ERROR,
} from "../actions/products-category";

const initialState = {
  productsCategory: [],
  loading: false,
  error: false,
};

export const productsCategory = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCTS_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        productsCategory: action.payload,
      };

    case GET_PRODUCTS_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
