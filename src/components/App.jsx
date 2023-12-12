import React, { useState } from "react";
import { Searchbar } from "./Searchbar";
import ImageGallery from "./ImageGallery";

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (value) => {
    setSearchValue(value);
  };

  return (
    <div style={{ padding: "10px" }}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery value={searchValue} />
    </div>
  );
};

export default App;
