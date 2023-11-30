import styles from "./product-info.module.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../../pages/not-found/not-found";

export const ProductInfo = () => {
  const { id } = useParams();
  const { products } = useSelector((store) => store.products);
  const [viewProduct] = products.filter((item) => item.id === Number(id));

  return viewProduct ? (
    <article className={styles.product_info}>
      <div className={styles.product_info__head}>
        <img
          className={styles.product_info__img}
          src={viewProduct.image}
          alt={viewProduct.title}
        />
      </div>
      <div className={styles.product_info__body}>
        <p className={styles.product_info__desc}>{viewProduct.description}</p>
        <p className={styles.product_info__rating}>
          Rating: {viewProduct.rating.rate}
        </p>
        <p className={styles.product_info__price}>
          <b>Price: {viewProduct.price} $</b>
        </p>
      </div>
    </article>
  ) : (
    <NotFoundPage />
  );
};
