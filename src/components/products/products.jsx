import styles from "./products.module.scss";
import { useSelector } from "react-redux";
import { Product } from "../product/product";
import { Preloader } from "../preloader/preloader";
import { SectionTitle } from "../section-title/section-title";

export const Products = () => {
  const { products, loading, error } = useSelector((store) => store.products);

  return (
    <>
      <SectionTitle title={"All products"} />
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
