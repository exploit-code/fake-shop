import styles from "./preloader.module.scss";

export const PreLoader = ({ text }) => {
  return <p className={styles.preloader}>{text}</p>;
};
