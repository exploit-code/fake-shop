import styles from "./categories.module.scss";
import { Category } from "../category/category";

export const Categories = () => {
  return (
    <section className={styles.categories}>
      <Category />
      <Category />
      <Category />
      <Category />
    </section>
  );
};
