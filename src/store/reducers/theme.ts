import { TOGGLE_THEME } from "../constants/theme";
import { IStateTheme, TThemeUnionActions } from "../types/theme";

const initialState: IStateTheme = {
  theme: "dark",
};

export const theme = (state = initialState, action: TThemeUnionActions) => {
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
