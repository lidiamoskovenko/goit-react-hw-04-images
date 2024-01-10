import React, { useEffect } from "react";
import { Styled } from './Styled';

const Modal = (modalImage, closeModal) => {

useEffect = ( () => {
  window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

return () => {
  window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'auto';
}, []});

const handleOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const handleKeyDown = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};
  return (
    <Styled >
      <div className="modal" onClick={this.handleOverlayClick}>
        <img src={this.props.modalImage} alt="Foto" width='100%' height='100%' />
      </div>
    </Styled>
  );
}


export default Modal;