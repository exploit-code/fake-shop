import styles from "./section-title.module.scss";

export const SectionTitle = ({ title }) => {
  return <h2 className={styles.section_title}>{title}</h2>;
};
