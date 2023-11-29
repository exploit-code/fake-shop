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
      <div className={styles.product_info__img_box}>
        <img
          className={styles.product_info__img}
          src={viewProduct.image}
          alt={viewProduct.title}
        />
      </div>
      <p className={styles.product_info__desc}>{viewProduct.description}</p>
      <p className={styles.product_info__price}>
        <b>{viewProduct.price} $</b>
      </p>
    </article>
  ) : (
    <NotFoundPage />
  );
};
