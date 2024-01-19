import { CACHING_IMAGES } from "../constants/carousel";
import { IStateCarusel, TCaruselUnionActions } from "../types/carousel";

const initialState: IStateCarusel = {
  carousel: [],
};

export const carousel = (state = initialState, action: TCaruselUnionActions) => {
  switch (action.type) {
    case CACHING_IMAGES:
      return {
        ...state,
        carousel: action.payload,
      };
    default:
      return state;
  }
};
