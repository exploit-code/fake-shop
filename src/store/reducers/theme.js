import { TOGGLE_THEME } from "../actions/theme";

const initialState = {
  theme: "light",
};

export const theme = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
