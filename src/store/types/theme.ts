import { TOGGLE_THEME } from "../constants/theme";

export interface IStateTheme {
  readonly theme: "light" | "dark";
}

export interface IToggleTheme {
  readonly type: typeof TOGGLE_THEME;
  readonly payload: "light" | "dark";
}

export type TThemeUnionActions = IToggleTheme;
