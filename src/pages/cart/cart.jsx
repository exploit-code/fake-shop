import styles from "./cart.module.scss";
import { useSelector } from "react-redux";
import { CalcPrice } from "../../components/calc-price/calc-price";
import { SectionTitle } from "../../components/section-title/section-title";
import { CartProduct } from "../../components/cart-product/cart-product";

export const CartPage = () => {
  const { cart } = useSelector((store) => store.cart);

  return (
    <section className={styles.cart}>
      <SectionTitle title={"Cart"} />
      <CalcPrice products={cart} />

      {!cart.length ? (
        <p className={styles.cart__text}>
          You haven't added anything to your cart yet
        </p>
      ) : (
        <div className={styles.cart__grid}>
          {cart.map((item) => (
            <CartProduct product={item} key={item.id} />
          ))}
        </div>
      )}
    </section>
  );
};
