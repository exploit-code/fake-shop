import { useState, useEffect, useCallback } from "react";
import styles from "./carousel.module.scss";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import classNames from "classnames";

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex, images.length]);

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, goToNextSlide]);

  return (
    <div className={styles.carousel}>
      <button
        onClick={goToPrevSlide}
        className={classNames(styles.carousel__btn, styles.carousel__btn_left)}
      >
        <MdOutlineKeyboardDoubleArrowLeft className={styles.carousel__icon} />
      </button>
      <img
        className={styles.carousel__img}
        src={images[currentIndex]}
        alt={`slide ${currentIndex}`}
      />
      <button
        onClick={goToNextSlide}
        className={classNames(styles.carousel__btn, styles.carousel__btn_right)}
      >
        <MdOutlineKeyboardDoubleArrowRight className={styles.carousel__icon} />
      </button>
    </div>
  );
};
