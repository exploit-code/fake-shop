import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./product.module.scss";
import { setCurrentProduct } from "../../store/actions/current-product";
import { addFavorites } from "../../store/actions/favorites";
import { FiHeart } from "react-icons/fi";
import { TbShoppingCartShare } from "react-icons/tb";
import { addToCart } from "../../store/actions/cart";
import classNames from "classnames";

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

  const handleAddToFavorites = (e, product) => {
    e.stopPropagation();
    dispatch(addFavorites(product));
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <article className={styles.product} onClick={handleProductClick}>
      <div className={styles.product__head}>
        <img className={styles.product__img} src={product.image} alt={product.title} />
      </div>
      <div className={styles.product__body}>
        <h4 className={styles.product__title}>{product.title}</h4>
        <div className={styles.product__footer}>
          <p className={styles.product__price}>
            <b>{product.price} $</b>
          </p>
          <div className={styles.product__btn_group}>
            <button
              className={classNames(styles.product__btn)}
              onClick={(e) => handleAddToCart(e, product)}
            >
              <TbShoppingCartShare className={styles.product__icon} />
            </button>
            <button
              className={classNames(styles.product__btn)}
              onClick={(e) => handleAddToFavorites(e, product)}
            >
              <FiHeart className={styles.product__icon} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
