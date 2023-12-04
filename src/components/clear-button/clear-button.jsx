import styles from "./clear-button.module.scss";

export const ClearButton = ({ onClick }) => {
  return (
    <button className={styles.clear_button} onClick={onClick}>
      Remove all
    </button>
  );
};
