import styles from "./carousel.module.scss";
import { useState, useEffect, useCallback } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import classNames from "classnames";
import { memo } from "react";

export const Carousel = memo(({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const goToNextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex, images.length]);

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;
    if (!hovered) {
      interval = setInterval(
        () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
        6000
      );
    }
    return () => clearInterval(interval);
  }, [hovered, images.length]);

  return (
    <section
      className={styles.carousel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
    </section>
  );
});
