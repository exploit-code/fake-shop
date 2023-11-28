import styles from "./categories.module.scss";
import { Category } from "../category/category";
import { useSelector } from "react-redux";
import { Preloader } from "../preloader/preloader";

export const Categories = () => {
  const { categories, loading, error } = useSelector(
    (store) => store.categories
  );

  return (
    <>
      {loading || error ? (
        <Preloader text={loading ? "Loading" : "Error"} />
      ) : (
        <section className={styles.categories}>
          {categories.map((item) => (
            <Category name={item.name} image={item.image} categoryID={item.id} key={item.id} />
          ))}
        </section>
      )}
    </>
  );
};
