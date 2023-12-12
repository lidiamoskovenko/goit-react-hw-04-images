import React, { Component } from "react";
import { Searchbar } from "./Searchbar";
import {ImageGallery} from "./ImageGallery";

export class App extends Component {
  state = {
    value: '',
  }

onSubmit = (value) => {
  this.setState({ value: value});
  
};


  render() {

  return (
    <div style={{ 
   padding: '10px',
}}
   >
     <Searchbar onSubmit={this.onSubmit}/>
     <ImageGallery value={this.state.value} />
    </div>
  );
  }};
