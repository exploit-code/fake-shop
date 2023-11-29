import { useState, useCallback, useEffect } from "react";

export const useModal = () => {
  const [isModalState, setIsModalState] = useState(false);

  const openModal = useCallback(() => setIsModalState(true), []);
  const closeModal = useCallback(() => setIsModalState(false), []);

  useEffect(() => {
    if (isModalState) document.body.classList.add("lock");
    else document.body.classList.remove("modal-open");
    return () => document.body.classList.remove("lock");
  }, [isModalState]);

  return {
    isModalState,
    openModal,
    closeModal,
  };
};
