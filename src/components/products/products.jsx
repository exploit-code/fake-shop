import styles from "./products.module.scss";
import { useSelector } from "react-redux";
import { Product } from "../product/product";
import { Preloader } from "../preloader/preloader";
import { SectionTitle } from "../section-title/section-title";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../modal/modal";
import { ProductInfo } from "../product-info/product-info";

export const Products = () => {
  const { products, loading, error } = useSelector((store) => store.products);
  const { currentProduct } = useSelector((store) => store.currentProduct);
  const { isModalState, openModal, closeModal } = useModal();

  return (
    <section className={styles.products}>
      <SectionTitle title={"All products"} />
      {loading || error ? (
        <Preloader text={loading ? "Loading" : "Error"} />
      ) : (
        <div className={styles.products__grid}>
          {products.map((item) => (
            <Product product={item} key={item.id} openModal={openModal} />
          ))}
        </div>
      )}

      {isModalState && (
        <Modal title={currentProduct.title} closeModal={closeModal}>
          <ProductInfo product={currentProduct} />
        </Modal>
      )}
    </section>
  );
};
