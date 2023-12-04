import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/actions/products";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { MainPage } from "../../pages/main/main";
import { FavoritesProductsPage } from "../../pages/favorites-products/favorites-products";
import { CartPage } from "../../pages/cart/cart";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { ProductsPage } from "../../pages/products/products";
import { Modal } from "../modal/modal";
import { ProductInfo } from "../product-info/product-info";

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const closeModal = () => navigate(-1);
  let background = location.state && location.state.background;
  const { currentProduct } = useSelector((store) => store.currentProduct);

  useEffect(() => dispatch(getProducts()), [dispatch]);

  useEffect(() => {
    const body = document.body;
    background ? body.classList.add("locked") : body.classList.remove("locked");
  }, [background]);

  return (
    <>
      <Header />
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route path="/favorites" element={<FavoritesProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {background && (
        <Modal title={currentProduct.title} closeModal={closeModal}>
          <Routes>
            <Route path="/products/:id" element={<ProductInfo />} />
          </Routes>
        </Modal>
      )}
      <Footer />
    </>
  );
};
