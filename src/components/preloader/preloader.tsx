import styles from "./preloader.module.scss";

export const PreLoader = ({ text }: { text: string }) => {
  return <p className={styles.preloader}>{text}</p>;
};
