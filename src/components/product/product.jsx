import styles from "./product.module.scss";

export const Product = ({ title, price, image }) => {
  return (
    <article className={styles.product}>
      <div className={styles.product__img_box}>
        <img className={styles.product__img} src={image} alt={title} />
      </div>

      <div className={styles.product__info}>
        <h4 className={styles.product__title}>{title}</h4>
        <p className={styles.product__price}>{price} $</p>
      </div>
    </article>
  );
};
