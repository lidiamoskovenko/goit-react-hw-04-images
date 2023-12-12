
import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button";
import Loader from "./Loader";
import { Modal } from "./Modal/Modal";

const ImageGallery = ({ value }) => {
  const [images, setImages] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [totalHits, setTotalHits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const fetchImages = () => {
    setIsLoading(true);

    axios
      .get(`https://pixabay.com/api/?key=39495937-d101ccae04c4959456f6b5596&q=${value}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`)
      .then((data) => {
        if (data.data.totalHits === 0) {
          alert(`No images with name ${value}`);
        }

        setImages((prevImages) => (page === 1 ? data.data.hits : [...prevImages, ...data.data.hits]));
        setTotalHits(data.data.totalHits);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if(value === ''){
      return
    }
      setPage(1)
      fetchImages()}, [value]);  
    
     
  useEffect(() => {
    if(value === ''){
      return
    }
      fetchImages()}, [page]);  


  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onReturnModalImage = (modalImage) => {
    setIsOpenModal(true);
    setModalImage(modalImage);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalImage(null);
  };

  return (
    <div>
      {isLoading && <Loader />}
      {images && images.length > 0 && <ImageGalleryItem images={images} onClick={onReturnModalImage} />}
      {totalHits > 12 && <Button onClick={loadMoreImages} />}
      {isOpenModal && <Modal modalImage={modalImage} closeModal={closeModal} />}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default ImageGallery;