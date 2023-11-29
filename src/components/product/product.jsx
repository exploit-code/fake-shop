import { useDispatch } from "react-redux";
import styles from "./product.module.scss";
import { setCurrentProduct } from "../../store/actions/current-product";

export const Product = ({ product, openModal }) => {
  const dispatch = useDispatch();
  const handleProductClick = () => {
    openModal();
    dispatch(setCurrentProduct(product));
  };

  return (
    <article className={styles.product} onClick={handleProductClick}>
      <div className={styles.product__img_box}>
        <img
          className={styles.product__img}
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className={styles.product__info}>
        <h4 className={styles.product__title}>{product.title}</h4>
        <p className={styles.product__price}>
          <b>{product.price} $</b>
        </p>
      </div>
    </article>
  );
};
