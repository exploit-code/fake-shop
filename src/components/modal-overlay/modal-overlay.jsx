import styles from "./modal-overlay.module.scss";

export const ModalOverlay = ({ children, closeModal }) => {
  const handleOverlayClick = () => closeModal();

  return (
    <section className={styles.modal_overlay} onClick={handleOverlayClick}>
      {children}
    </section>
  );
};
