import { useState } from "react";
import ImageWrapperTypes from "../../types/ImageWrapperTypes";
import ImageModal from "../../utils/ImgModal";

const ImageWrapper = ({ className, picture, alt, imgElement }: ImageWrapperTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={className}>
      <img className={imgElement} src={picture} alt={alt} onClick={openModal} />
      <ImageModal isOpen={isModalOpen} onClose={closeModal} imageSrc={picture} altText={alt} />
    </div>
  );
};

export default ImageWrapper;
