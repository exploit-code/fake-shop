import { Products } from "../../components/products/products";
import { Carousel } from "../../components/carousel/carousel";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";

export const MainPage = () => {
  const arr = [slide1, slide2, slide3, slide4];
  return (
    <>
      <Carousel images={arr} />
      <Products />
    </>
  );
};
