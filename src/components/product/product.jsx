import styles from "./product.module.scss";

export const Product = (props) => {
  return (
    <article className={styles.product}>
      <img
        className={styles.product__img}
        src={props.images[0]}
        alt={props.title}
      />

      <div className={styles.product__info}>
        <h4 className={styles.product__title}>{props.title}</h4>
        <p className={styles.product__price}>{props.price} $</p>
      </div>
    </article>
  );
};
