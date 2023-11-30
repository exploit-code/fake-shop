import { CACHING_IMAGES } from "../actions/carousel";

const initialState = {
  carousel: [],
};

export const carousel = (state = initialState, action) => {
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
