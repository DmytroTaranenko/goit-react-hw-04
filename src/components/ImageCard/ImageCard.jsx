import css from "./ImageCard.module.css";
const ImageCard = ({ image, onModalOpen }) => {
  return (
    <div className={css.galleryWrap}>
      <img
        className={css.galleryImage}
        onClick={() => onModalOpen(image.urls.regular)}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
