import { useEffect, type ReactNode } from "react";
import "./Modal.css";

type BaseModalProps = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
};

const BaseModal = ({ isOpen, title, children, onClose, footer }: BaseModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
  <>
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
            <span></span>
            <h2>{title}</h2>
            <button className="btn btn-modal" onClick={onClose}>
                X
            </button>
        </div>
        
        {children}

        {footer && (
            <div className="modal-footer">
                {footer}
            </div>
        )}
    </div>
  </div>
  </>);
};

export default BaseModal;
