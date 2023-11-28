import styles from "./products-category.module.scss";
import { useSelector } from "react-redux";
import { Product } from "../../components/product/product";
import { Preloader } from "../../components/preloader/preloader";
import { SectionTitle } from "../../components/section-title/section-title";

export const ProductsCategoryPage = () => {
  const { productsCategory, loading, error } = useSelector(
    (store) => store.productsCategory
  );

  return (
    <>
      {loading || error ? (
        <Preloader text={loading ? "Loading" : "Error"} />
      ) : (
        <section className={styles.products_category}>
          <SectionTitle title={productsCategory[0].category.name} />
          <div className={styles.products_category__grid}>
            {productsCategory.map((item) => (
              <Product {...item} key={item.id} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
