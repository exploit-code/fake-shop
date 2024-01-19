import styles from "./favorites-products.module.scss";
import { FavoriteProduct } from "../../components/favorite-product/favorite-product";
import { useSelector, useDispatch } from "../../store/hooks";
import { SectionTitle } from "../../components/section-title/section-title";
import { CalcPrice } from "../../components/calc-price/calc-price";
import classNames from "classnames";
import { ClearButton } from "../../components/clear-button/clear-button";
import { clearFavorites } from "../../store/actions/favorites";

export const FavoritesProductsPage = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((store) => store.favorites);
  const handleClearFavorites = () => dispatch(clearFavorites());

  return (
    <main className={classNames(styles.favorites_products, "container")}>
      <SectionTitle title={"Favorites"} />
      <div className={styles.favorites_products__head}>
        <CalcPrice products={favorites} />
        {favorites.length > 0 && <ClearButton onClick={handleClearFavorites} />}
      </div>
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
