import styles from "./cart-product.module.scss";
import { useDispatch } from "../../store/hooks";
import { removeFromCart } from "../../store/actions/cart";
import classNames from "classnames";
import { AiOutlineDelete } from "react-icons/ai";
import { IProductUpgrade } from "../../models/models";

export const CartProduct = ({ product }: { product: IProductUpgrade }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product: IProductUpgrade) => {
    dispatch(removeFromCart(product));
  };

  return (
    <article className={styles.cart_product}>
      <div className={styles.cart_product__head}>
        <span className={styles.cart_product__count}>{product.count}</span>
        <img className={styles.cart_product__img} src={product.image} alt={product.title} />
      </div>
      <div className={styles.cart_product__body}>
        <h4 className={styles.cart_product__title}>{product.title}</h4>
        <div className={styles.cart_product__footer}>
          <p className={styles.cart_product__price}>{product.price} $</p>
          <button
            className={classNames(styles.cart_product__btn)}
            onClick={() => handleRemoveFromCart(product)}
          >
            <AiOutlineDelete className={styles.cart_product__icon} />
          </button>
        </div>
      </div>
    </article>
  );
};
