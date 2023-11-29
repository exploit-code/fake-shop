import { useDispatch } from "react-redux";
import styles from "./favorite-product.module.scss";
import { removeFavorites } from "../../store/actions/favorites";

export const FavoriteProduct = ({ product }) => {
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
        </div>
      </div>
      <div className={styles.favorite_product__body}>
        <h4 className={styles.favorite_product__title}>{product.title}</h4>
        <p className={styles.favorite_product__price}>{product.price} $</p>
        <button onClick={() => handleRemoveFavorites(product)}>remove</button>
      </div>
    </article>
  );
};
