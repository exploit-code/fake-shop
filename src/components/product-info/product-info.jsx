import styles from "./product-info.module.scss";

export const ProductInfo = ({ product }) => {
  return (
    <article className={styles.product_info}>
      <div className={styles.product_info__img_box}>
        <img
          className={styles.product_info__img}
          src={product.image}
          alt={product.title}
        />
      </div>
      <p className={styles.product_info__desc}>{product.description}</p>
      <p className={styles.product_info__price}>
        <b>{product.price} $</b>
      </p>
    </article>
  );
};
