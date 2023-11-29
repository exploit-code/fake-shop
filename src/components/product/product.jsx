import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./product.module.scss";
import { setCurrentProduct } from "../../store/actions/current-product";

export const Product = ({ product }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleProductClick = () => {
    dispatch(setCurrentProduct(product));
    navigate(`/products/${product.id}`, {
      state: { background: location },
    });
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
