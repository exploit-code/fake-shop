export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProductUpgrade extends IProduct {
  count: number;
}

export interface IClearButtonProps {
  onClick: () => void;
}

export interface IModalProps {
  title?: string;
  children: JSX.Element;
  closeModal: () => void;
}
