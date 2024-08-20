import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import axios from "axios";
import "./App.css";
import { requestAllImages, requestPhotosBySearchValue } from "./services/Api";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState(null);
  const [userInput, setUserInput] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageModalUrl, setImageModalUrl] = useState(null);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const searchField = (query) => {
    setUserInput(query);
    setPage(1);
  };

  const onModalOpen = (imageUrl) => {
    setImageModalUrl(imageUrl);
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (userInput === null && page === 1) return;

    const fetchImages = async () => {
      try {
        setLoader(true);
        const { results, totalPages } = await requestPhotosBySearchValue(
          userInput,
          page
        );
        setTotalPages(totalPages);
        if (page === 1) {
          setImages(results);
        } else {
          setImages([...images, ...results]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchImages();
  }, [userInput, page]);

  return (
    <>
      <SearchBar searchField={searchField} />
      <ImageGallery onModalOpen={onModalOpen} images={images} />
      {loader === true && <Loader />}
      {error !== null && <ErrorMessage error={error} />}
      {images?.length !== 0 && page < totalPages && !loader &&(
        <LoadMoreBtn onClick={onLoadMore} />
      )}
      <ImageModal
        imageModalUrl={imageModalUrl}
        isOpen={isModalOpen}
        onClose={onModalClose}
      />
      <Toaster />
    </>
  );
}

export default App;
