import {
  SET_CURRENT_PRODUCT,
  REMOVE_CURRENT_PRODUCT,
} from "../actions/current-product";

const initialState = {
  currentProduct: null,
};

export const currentProduct = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };
    case REMOVE_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: null,
      };
    default:
      return state;
  }
};
