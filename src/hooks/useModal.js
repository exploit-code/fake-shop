import { useState, useCallback } from "react";

export const useModal = () => {
  const [isModalState, setIsModalState] = useState(false);

  const openModal = useCallback(() => setIsModalState(true), []);
  const closeModal = useCallback(() => setIsModalState(false), []);

  return {
    isModalState,
    openModal,
    closeModal,
  };
};
