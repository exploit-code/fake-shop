import classNames from "classnames";
import styles from "./not-found.module.scss";

export const NotFoundPage = () => {
  return (
    <main className={classNames(styles.not_found, "container")}>
      <h1 className={styles.not_found__title}>Not-found</h1>
    </main>
  );
};
