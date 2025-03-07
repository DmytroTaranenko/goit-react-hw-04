import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "0, 0, 20px, 0",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ isOpen, onClose, imageModalUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img
        className={css.imageModal}
        src={imageModalUrl}
        width="1080"
        height="720"
      />
    </Modal>
  );
};

export default ImageModal;
