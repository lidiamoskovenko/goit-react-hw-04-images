import React, { Component } from "react";
import { Styled } from './Styled';

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'auto';
  }

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <Styled >
        <div className="modal" onClick={this.handleOverlayClick}>
          <img src={this.props.modalImage} alt="Foto" width='100%' height='100%' />
        </div>
      </Styled>
    );
  }
}
