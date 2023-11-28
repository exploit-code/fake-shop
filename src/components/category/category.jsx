import styles from "./category.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsCategory } from "../../store/actions/products-category";
import { useCallback } from "react";

export const Category = ({ categoryID, name, image }) => {
  const dispatch = useDispatch();

  const handleGetProductsCategory = useCallback(() => {
    dispatch(getProductsCategory(categoryID));
  }, [dispatch, categoryID]);

  return (
    <Link
      className={styles.category}
      to={`/category/${name}`.toLowerCase()}
      onClick={handleGetProductsCategory}
    >
      <img className={styles.category__image} src={image} alt={name} />
    </Link>
  );
};
