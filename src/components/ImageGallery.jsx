import React, { Component } from "react";
import axios from "axios";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button";
import Loader from "./Loader";
import { Modal } from "./Modal/Modal";


export class ImageGallery extends Component {
  state = {
    images: null,
    modalImage: null,
    totalHits: null,
    isLoading: false,
    isOpenModal: false,
    page: 1,
    error: null,
  };
  fetchImages = () => {
    this.setState({ isLoading: true });
    axios
      .get(`https://pixabay.com/api/?key=39495937-d101ccae04c4959456f6b5596&q=${this.props.value}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`)
      .then((data) => {
        if (data.data.totalHits === 0) {
          alert(`No images with name ${this.props.value}`);
        }
        this.setState((prevState) => ({
          images: prevState.page === 1 ? data.data.hits : [...prevState.images, ...data.data.hits],
          totalHits:data.data.totalHits,
        }));
      })
      .catch((error) => {
        this.setState({ error: error.message });
      }) 
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
      
  };
          
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page ) {
      this.fetchImages();
    }
    if (prevProps.value !== this.props.value ) {
      this.setState({ page: 1});
      this.fetchImages();
    }
  }
  loadMoreImages = () => {
        this.setState((prevState) => ({
          page: prevState.page + 1,
        }))
  };
  onReturnModalImage = (modalImage) => {
    this.setState({
      isOpenModal: true,
      modalImage: modalImage
    });
  }
  closeModal = () => {
    this.setState({
      isOpenModal: false,
      modalImage: null,
    });
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <Loader />}
        {this.state.images && this.state.images.length > 0 && (
          <ImageGalleryItem images={this.state.images} onClick={this.onReturnModalImage} />
        )}
        {this.state.totalHits > 12 && <Button onClick={this.loadMoreImages} />}
        {this.state.isOpenModal && <Modal modalImage={this.state.modalImage} closeModal={this.closeModal} />}
        {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
      </div>
    );
  }
}