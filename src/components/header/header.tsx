import styles from "./header.module.scss";
import classNames from "classnames";
import { Logo } from "../logo/logo";
import { ThemeChanger } from "../theme-changer/theme-changer";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { TbShoppingCartDollar } from "react-icons/tb";
import { Counter } from "../counter/counter";
import { useSelector } from "../../store/hooks";

export const Header = () => {
  const { cart } = useSelector((store) => store.cart);
  const { favorites } = useSelector((store) => store.favorites);

  return (
    <header className={styles.header}>
      <div className={classNames(styles.header__content, "container")}>
        <Logo />
        <div className={styles.header__group}>
          <nav className={styles.header__nav}>
            <NavLink to={"/cart"} className={styles.header__link}>
              {({ isActive }) => (
                <>
                  <Counter products={cart} />
                  <TbShoppingCartDollar
                    className={classNames(styles.header__icon, {
                      [styles.header__icon_active]: isActive,
                    })}
                  />
                </>
              )}
            </NavLink>
            <NavLink to={"/favorites"} className={styles.header__link}>
              {({ isActive }) => (
                <>
                  <Counter products={favorites} />
                  <FiHeart
                    className={classNames(styles.header__icon, {
                      [styles.header__icon_active]: isActive,
                    })}
                  />
                </>
              )}
            </NavLink>
          </nav>
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
};
