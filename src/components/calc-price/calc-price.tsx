import styles from "./calc-price.module.scss";
import { memo } from "react";
import { IProductUpgrade } from "../../models/models";

export const CalcPrice = memo(({ products }: { products: IProductUpgrade[] }) => {
  const totalPrice = products
    .reduce((acc, item) => {
      const count = item.count || 1;
      return item.price * count + acc;
    }, 0)
    .toFixed(2);
  return <p className={styles.calc_price}>Total price: {totalPrice} $</p>;
});
