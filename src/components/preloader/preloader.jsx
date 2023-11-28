import styles from "./preloader.module.scss";

export const Preloader = ({ text }) => {
  return <p className={styles.preloader}>{text}</p>;
};
