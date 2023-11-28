import styles from "./products.module.scss";
import { useSelector } from "react-redux";
import { Product } from "../product/product";

export const Products = () => {
  const { products } = useSelector((store) => store.products);

  return (
    <section className={styles.products}>
      {products.map((item) => (
        <Product {...item} key={item.id} />
      ))}
    </section>
  );
};
