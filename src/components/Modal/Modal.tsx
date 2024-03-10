import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

interface IProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<IProps> = ({ children, onClose, isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export { Modal };
