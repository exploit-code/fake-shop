import styles from "./products.module.scss";
import { useSelector } from "react-redux";
import { Product } from "../product/product";
import { Preloader } from "../preloader/preloader";

export const Products = () => {
  const { products, loading, error } = useSelector((store) => store.products);

  return (
    <>
      {loading || error ? (
        <Preloader text={loading ? "Loading" : "Error"} />
      ) : (
        <section className={styles.products}>
          {products.map((item) => (
            <Product {...item} key={item.id} />
          ))}
        </section>
      )}
    </>
  );
};
