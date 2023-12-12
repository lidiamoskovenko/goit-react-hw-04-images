import React, { Component } from "react";
import css from "./ImageGalleryItem.module.css"

class ImageGalleryItem extends Component {
    render() {
      return (
        <ul className={css.images_list}>
          {this.props.images.map((image) => (
            <li className={css.images_item} key={image.id} onClick={() => this.props.onClick(image.largeImageURL)}>
              <img src={image.webformatURL} alt={image.tags} className={css.image} />
            </li>
          ))}
        </ul>
      );
    }
  }
  
  export default ImageGalleryItem;
