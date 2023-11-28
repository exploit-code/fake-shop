import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/actions/products";
import { getCategories } from "../../store/actions/categories";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { MainPage } from "../../pages/main/main";
import { FavoritesPage } from "../../pages/favorites/favorites";
import { CartPage } from "../../pages/cart/cart";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { ProductsCategoryPage } from "../../pages/products-category/products-category";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:id" element={<ProductsCategoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
