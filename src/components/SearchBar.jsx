import React, { useRef } from "react";
import Icon from "./Icon";

const SearchBar = () => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className={`relative flex items-center  border-custom   `}>
      <label htmlFor="searchInput" className="sr-only">
        Busca
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder="Busca..."
        className="p-2  focus:outline-none"
        ref={inputRef}
      />
      <div
        className="absolute right-3 p-1 cursor-pointer"
        onClick={handleIconClick}
      >
        <Icon name="search" />
      </div>
    </div>
  );
};

export default SearchBar;
