import styles from "./product-info.module.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { FiHeart } from "react-icons/fi";
import { TbShoppingCartShare } from "react-icons/tb";
import { addToCart } from "../../store/actions/cart";
import { addFavorites } from "../../store/actions/favorites";
import { useDispatch } from "react-redux";
import classNames from "classnames";

export const ProductInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((store) => store.products);
  const [viewProduct] = products.filter((item) => item.id === Number(id));

  const handleAddToFavorites = (product) => {
    dispatch(addFavorites(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return viewProduct ? (
    <article className={styles.product_info}>
      <div className={styles.product_info__head}>
        <img className={styles.product_info__img} src={viewProduct.image} alt={viewProduct.title} />
      </div>
      <div className={styles.product_info__body}>
        <p className={styles.product_info__desc}>{viewProduct.description}</p>
        <p className={styles.product_info__rating}>Rating: {viewProduct.rating.rate}</p>
        <div className={styles.product_info__footer}>
          <p className={styles.product_info__price}>
            <b>Price: {viewProduct.price} $</b>
          </p>
          <div className={styles.product_info__btn_group}>
            <button
              className={classNames(styles.product_info__btn)}
              onClick={() => handleAddToCart(viewProduct)}
            >
              <TbShoppingCartShare className={styles.product_info__icon} />
            </button>
            <button
              className={classNames(styles.product_info__btn)}
              onClick={() => handleAddToFavorites(viewProduct)}
            >
              <FiHeart className={styles.product_info__icon} />
            </button>
          </div>
        </div>
      </div>
    </article>
  ) : (
    <NotFoundPage />
  );
};
