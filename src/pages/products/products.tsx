import styles from "./products.module.scss";
import classNames from "classnames";
import { useSelector } from "../../store/hooks";
import { ProductInfo } from "../../components/product-info/product-info";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../not-found/not-found";

export const ProductsPage = () => {
  const { id } = useParams();
  const { products } = useSelector((store) => store.products);
  const [viewProduct] = products.filter((item) => item.id === Number(id));

  return viewProduct ? (
    <main className={classNames(styles.products, "container")}>
      <h1 className={styles.products__title}>{viewProduct.title}</h1>
      <ProductInfo />
    </main>
  ) : (
    <NotFoundPage />
  );
};
