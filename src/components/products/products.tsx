import styles from "./products.module.scss";
import { useSelector } from "../../store/hooks";
import { Product } from "../product/product";
import { PreLoader } from "../preloader/preloader";
import { SectionTitle } from "../section-title/section-title";

export const Products = () => {
  const { products, loading, error } = useSelector((store) => store.products);

  return (
    <section className={styles.products}>
      <SectionTitle title={"All products"} />
      {loading || error ? (
        <PreLoader text={loading ? "Loading" : "Error"} />
      ) : (
        <div className={styles.products__grid}>
          {products.map((item) => (
            <Product product={item} key={item.id} />
          ))}
        </div>
      )}
    </section>
  );
};
