import { useDispatch } from "react-redux";
import styles from "./cart-product.module.scss";
import { removeFavorites } from "../../store/actions/favorites";
import classNames from "classnames";
import { AiOutlineDelete } from "react-icons/ai";

export const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFavorites = (product) => {
    dispatch(removeFavorites(product));
  };

  return (
    <article className={styles.favorite_product}>
      <div className={styles.favorite_product__head}>
        <div className={styles.favorite_product__img_box}>
          <img
            className={styles.favorite_product__img}
            src={product.image}
            alt={product.title}
          />
          <div className={styles.favorite_product__btn_group}>
            <button
              className={classNames(styles.favorite_product__btn)}
              onClick={() => handleRemoveFavorites(product)}
            >
              <AiOutlineDelete className={styles.favorite_product__icon} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.favorite_product__body}>
        <h4 className={styles.favorite_product__title}>{product.title}</h4>
        <p className={styles.favorite_product__price}>{product.price} $</p>
      </div>
    </article>
  );
};
