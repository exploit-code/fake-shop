import { TOGGLE_THEME } from "../constants/theme";
import { IToggleTheme } from "../types/theme";

export const setTheme = (theme: "light" | "dark"): IToggleTheme => ({
  type: TOGGLE_THEME,
  payload: theme,
});
