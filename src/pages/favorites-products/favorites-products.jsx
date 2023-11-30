import styles from "./favorites-products.module.scss";
import { FavoriteProduct } from "../../components/favorite-product/favorite-product";
import { useSelector } from "react-redux";
import { SectionTitle } from "../../components/section-title/section-title";
import { CalcPrice } from "../../components/calc-price/calc-price";
import classNames from "classnames";

export const FavoritesProductsPage = () => {
  const { favorites } = useSelector((store) => store.favorites);

  return (
    <main className={classNames(styles.favorites_products, "container")}>
      <SectionTitle title={"Favorites"} />
      <CalcPrice products={favorites} />
      {!favorites.length ? (
        <p className={styles.favorites_products__text}>
          You haven't added products to your favorites yet
        </p>
      ) : (
        <div className={styles.favorites_products__grid}>
          {favorites.map((item) => (
            <FavoriteProduct product={item} key={item.id} />
          ))}
        </div>
      )}
    </main>
  );
};
