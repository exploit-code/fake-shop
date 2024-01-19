import { SET_CURRENT_PRODUCT } from "../constants/current-product";
import { IStateCurrentProduct, TCurrentProductUnionActions } from "../types/current-product";

const initialState: IStateCurrentProduct = {
  currentProduct: null,
};

export const currentProduct = (state = initialState, action: TCurrentProductUnionActions) => {
  switch (action.type) {
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };
    default:
      return state;
  }
};
