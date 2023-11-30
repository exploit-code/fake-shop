import styles from "./counter.module.scss";

export const Counter = ({ products }) => {
  const counter = products.reduce((acc, item) => {
    const productCount = item.count || 1;
    return productCount + acc;
  }, 0);

  return <div className={styles.counter}>{counter}</div>;
};
