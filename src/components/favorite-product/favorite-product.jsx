import { useDispatch } from "react-redux";
import styles from "./favorite-product.module.scss";
import { removeFavorites } from "../../store/actions/favorites";
import { addToCart } from "../../store/actions/cart";
import classNames from "classnames";
import { AiOutlineDelete } from "react-icons/ai";
import { TbShoppingCartShare } from "react-icons/tb";

export const FavoriteProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFavorites = (product) => {
    dispatch(removeFavorites(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <article className={styles.favorite_product}>
      <div className={styles.favorite_product__head}>
        <img className={styles.favorite_product__img} src={product.image} alt={product.title} />
      </div>
      <div className={styles.favorite_product__body}>
        <h4 className={styles.favorite_product__title}>{product.title}</h4>

        <div className={styles.favorite_product__footer}>
          <p className={styles.favorite_product__price}>{product.price} $</p>
          <div className={styles.favorite_product__btn_group}>
            <button
              className={classNames(styles.favorite_product__btn)}
              onClick={() => handleRemoveFavorites(product)}
            >
              <AiOutlineDelete className={styles.favorite_product__icon} />
            </button>

            <button
              className={classNames(styles.favorite_product__btn)}
              onClick={() => handleAddToCart(product)}
            >
              <TbShoppingCartShare className={styles.favorite_product__icon} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
