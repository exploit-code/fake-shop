import styles from "./favorites-products.module.scss";
import { FavoriteProduct } from "../../components/favorite-product/favorite-product";
import { useSelector } from "react-redux";
import { SectionTitle } from "../../components/section-title/section-title";

export const FavoritesProductsPage = () => {
  const { favorites } = useSelector((store) => store.favorites);
  return (
    <section className={styles.favorites_products}>
      <SectionTitle title={"Favorites"} />
      {!favorites.length ? (
        <p>You haven't added products to your favorites yet</p>
      ) : (
        <div className={styles.favorites_products__grid}>
          {favorites.map((item) => (
            <FavoriteProduct product={item} key={item.id} />
          ))}
        </div>
      )}
    </section>
  );
};
