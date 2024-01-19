import styles from "./main.module.scss";
import classNames from "classnames";
import { Products } from "../../components/products/products";
import { Carousel } from "../../components/carousel/carousel";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import { useDispatch, useSelector } from "../../store/hooks";
import { useEffect } from "react";
import { cachingImages } from "../../store/actions/carousel";
import { useMemo } from "react";

export const MainPage = () => {
  const dispatch = useDispatch();
  const { carousel } = useSelector((store) => store.carousel);

  useEffect(() => {
    const images = [slide1, slide2, slide3, slide4];
    dispatch(cachingImages(images));
  }, [dispatch]);

  const MemoizedCarousel = useMemo(() => <Carousel images={carousel} />, [carousel]);
  const MemoizedProducts = useMemo(() => <Products />, []);

  return (
    <main className={classNames(styles.main, "container")}>
      {MemoizedCarousel}
      {MemoizedProducts}
    </main>
  );
};
