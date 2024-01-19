import { useState, useCallback } from "react";

export interface IUseModal {
  isModalState: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModal = (): IUseModal => {
  const [isModalState, setIsModalState] = useState<boolean>(false);

  const openModal = useCallback(() => setIsModalState(true), []);
  const closeModal = useCallback(() => setIsModalState(false), []);

  return {
    isModalState,
    openModal,
    closeModal,
  };
};
