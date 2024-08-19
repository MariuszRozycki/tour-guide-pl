import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const OfferModal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setIsClosing(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleOutsideClick}>
      <div className={`modal-content ${isOpen && !isClosing ? "fade-in" : "fade-out"}`}>
        <button
          className="modal-close"
          onClick={() => {
            setIsClosing(true);
            setTimeout(() => {
              onClose();
              setIsClosing(false);
            }, 300);
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default OfferModal;
