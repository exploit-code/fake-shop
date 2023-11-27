import styles from "./header.module.scss";
import { Logo } from "../logo/logo";
import { ThemeChanger } from "../theme-changer/theme-changer";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { TbShoppingCartDollar } from "react-icons/tb";
import classNames from "classnames";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__group}>
        <nav className={styles.header__nav}>
          <NavLink to={"/cart"} className={styles.header__link}>
            {({ isActive }) => (
              <TbShoppingCartDollar
                className={classNames(styles.header__icon, {
                  [styles.header__icon_active]: isActive,
                })}
              />
            )}
          </NavLink>
          <NavLink to={"/favorites"} className={styles.header__link}>
            {({ isActive }) => (
              <FiHeart
                className={classNames(styles.header__icon, {
                  [styles.header__icon_active]: isActive,
                })}
              />
            )}
          </NavLink>
        </nav>

        <ThemeChanger />
      </div>
    </header>
  );
};
