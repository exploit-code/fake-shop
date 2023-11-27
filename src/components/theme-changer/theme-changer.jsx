import styles from "./theme-changer.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../store/actions/theme";
import { FiSun } from "react-icons/fi";

export const ThemeChanger = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.theme);

  const changeTheme = () =>
    theme === "light"
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [dispatch, theme]);

  return (
    <button className={styles.theme_changer} onClick={changeTheme}>
      <FiSun className={styles.theme_changer__icon} />
    </button>
  );
};
