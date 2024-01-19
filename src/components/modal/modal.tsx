import styles from "./modal.module.scss";
import { useEffect, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { IoMdClose } from "react-icons/io";
import { IModalProps } from "../../models/models";

export const Modal = ({ title = "", children, closeModal }: IModalProps) => {
  const portal = document.getElementById("portal") as HTMLElement;
  const handleModalClick = (e: MouseEvent) => e.stopPropagation();
  const handleCloseModalClick = () => closeModal();

  useEffect(() => {
    const escFunction = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", escFunction, false);
    return () => document.removeEventListener("keydown", escFunction, false);
  }, [closeModal]);

  return portal
    ? createPortal(
        <ModalOverlay closeModal={closeModal}>
          <section className={styles.modal} onClick={handleModalClick}>
            <div className={styles.modal__head}>
              <h3 className={styles.modal__title}>{title}</h3>
              <button className={styles.modal__btn} onClick={handleCloseModalClick}>
                <IoMdClose className={styles.modal__icon} />
              </button>
            </div>
            <div className={styles.modal__body}>{children}</div>
          </section>
        </ModalOverlay>,
        portal
      )
    : null;
};
