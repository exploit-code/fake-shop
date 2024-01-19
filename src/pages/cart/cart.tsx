import styles from "./cart.module.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "../../store/hooks";
import { CalcPrice } from "../../components/calc-price/calc-price";
import { SectionTitle } from "../../components/section-title/section-title";
import { CartProduct } from "../../components/cart-product/cart-product";
import { clearCart } from "../../store/actions/cart";
import { ClearButton } from "../../components/clear-button/clear-button";

export const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const handleClearCart = () => dispatch(clearCart());

  return (
    <main className={classNames(styles.cart, "container")}>
      <SectionTitle title={"Cart"} />
      <div className={styles.cart__head}>
        <CalcPrice products={cart} />
        {cart.length > 0 && <ClearButton onClick={handleClearCart} />}
      </div>

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
