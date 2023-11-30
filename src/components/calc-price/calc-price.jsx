import styles from "./calc-price.module.scss";

export const CalcPrice = ({ products }) => {
  const totalPrice = products
    .reduce((acc, item) => {
      const count = item.count || 1;
      return item.price * count + acc;
    }, 0)
    .toFixed(2);
  return <p className={styles.calc_price}>Total price: {totalPrice}</p>;
};
