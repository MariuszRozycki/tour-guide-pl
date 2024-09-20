import ImageWrapperTypes from "../../types/ImageWrapperTypes";

const ImageWrapper = ({ className, picture, alt, imgElement }: ImageWrapperTypes) => {
  return (
    <div className={className}>
      <img className={imgElement} src={picture} alt={alt} />
    </div>
  );
};

export default ImageWrapper;
