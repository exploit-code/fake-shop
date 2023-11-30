import { Products } from "../../components/products/products";
import { Carousel } from "../../components/carousel/carousel";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import classNames from "classnames";
import styles from "./main.module.scss";

export const MainPage = () => {
  const arr = [slide1, slide2, slide3, slide4];
  return (
    <main className={classNames(styles.main, "container")}>
      <Carousel images={arr} />
      <Products />
    </main>
  );
};
