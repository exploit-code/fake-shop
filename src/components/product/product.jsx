import styles from "./product.module.scss";

export const Product = (props) => {
  return (
    <article className={styles.product}>
      <div className={styles.product__img_box}>
        <img
          className={styles.product__img}
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className={styles.product__info}>
        <h4 className={styles.product__title}>{props.title}</h4>
        <p className={styles.product__price}>{props.price} $</p>
      </div>
    </article>
  );
};
