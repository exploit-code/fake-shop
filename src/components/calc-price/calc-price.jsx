import styles from "./calc-price.module.scss";

export const CalcPrice = ({ products }) => {
  const totalPrice = products.reduce((acc, item) => item.price + acc, 0);
  return <p className={styles.calc_price}>Total price: {totalPrice}</p>;
};
