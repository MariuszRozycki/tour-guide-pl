import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const OfferModal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleOutsideClick}>
      <div className="modal-content fade-in">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
        <ul className="contact-details">
          <li>Zapytaj o ofertę:</li>
          <li>
            <a href="tel:+48601786363">
              <div className="contact-details-icon-wrapper">
                <img src="/icons/telephone-call.png" alt="Telephone icon" />
              </div>
              +48 601-786-363
            </a>
          </li>
          <li>
            <a href="mailto:info@tour-guide.pl">
              <div className="contact-details-icon-wrapper email-icon">
                <img src="/icons/email-icon.png" alt="Email icon" />
              </div>
              info@tour-guide.pl
            </a>
          </li>
          <li>
            <a href="mailto:tourguide@poczta.onet.pl">
              <div className="contact-details-icon-wrapper email-icon">
                <img src="/icons/email-icon.png" alt="Email icon" />
              </div>
              tourguide@poczta.onet.pl
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OfferModal;
