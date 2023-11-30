import styles from "./cart.module.scss";
import { useSelector } from "react-redux";
import { CalcPrice } from "../../components/calc-price/calc-price";
import { SectionTitle } from "../../components/section-title/section-title";
import { CartProduct } from "../../components/cart-product/cart-product";
import classNames from "classnames";

export const CartPage = () => {
  const { cart } = useSelector((store) => store.cart);

  return (
    <main className={classNames(styles.cart, "container")}>
      <SectionTitle title={"Cart"} />
      <CalcPrice products={cart} />

      {!cart.length ? (
        <p className={styles.cart__text}>You haven't added anything to your cart yet</p>
      ) : (
        <div className={styles.cart__grid}>
          {cart.map((item) => (
            <CartProduct product={item} key={item.id} />
          ))}
        </div>
      )}
    </main>
  );
};
