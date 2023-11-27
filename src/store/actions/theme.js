export const TOGGLE_THEME = "TOGGLE_THEME";

export const setTheme = (theme) => (dispatch) => {
  dispatch({ type: TOGGLE_THEME, payload: theme });
};
