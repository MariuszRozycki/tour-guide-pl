interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc, altText }: ImageModalProps) => {
  if (!isOpen) return null; // Nie pokazuj modala, jeśli jest zamknięty

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times; {/* Znak krzyżyka */}
        </button>
        <img src={imageSrc} alt={altText} className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
