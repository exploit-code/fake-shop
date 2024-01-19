import styles from "./counter.module.scss";
import { IProduct, IProductUpgrade } from "../../models/models";

export const Counter = ({ products }: { products: (IProduct | IProductUpgrade)[] }) => {
  const counter = products.reduce((acc, item) => {
    const productCount = "count" in item ? item.count : 1;
    return productCount + acc;
  }, 0);

  return <div className={styles.counter}>{counter}</div>;
};
