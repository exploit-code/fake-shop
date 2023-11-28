import styles from "./category.module.scss";
import { Link } from "react-router-dom";

export const Category = ({ name, image }) => {
  return (
    <Link className={styles.category}>
      <img className={styles.category__image} src={image} alt={name} />
    </Link>
  );
};
