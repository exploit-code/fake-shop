import styles from "./clear-button.module.scss";
import { IClearButtonProps } from "../../models/models";

export const ClearButton: React.FC<IClearButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.clear_button} onClick={onClick}>
      Remove all
    </button>
  );
};
