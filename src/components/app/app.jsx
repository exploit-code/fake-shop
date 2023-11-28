import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { MainPage } from "../../pages/main/main";
import { FavoritesPage } from "../../pages/favorites/favorites";
import { CartPage } from "../../pages/cart/cart";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { getProducts } from "../../store/actions/products";
import { getCategories } from "../../store/actions/categories";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
