import ImageCard from "../ImageCard/ImageCard";
import { useState, useEffect } from "react";
import clsx from "clsx";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onModalOpen }) => {
  return (
    <ul className={css.galleryList}>
      {images !== null &&
        images.map((image) => {
          return (
            <li key={image.id} className={css.galleryItem}>
              <ImageCard image={image} onModalOpen={onModalOpen} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
