import React, { useRef } from "react";
import Icon from "./Icon";

const SearchField = ({ onChange, onClearSearch }) => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    inputRef.current.value = "";
    onClearSearch();
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
        onChange={(e) => onChange(e)}
      />
      <div
        className="absolute right-3 p-1 cursor-pointer"
        onClick={handleIconClick}
      >
        <button onClick={clearInput}>
          <Icon name="search" />
        </button>
      </div>
    </div>
  );
};

export default SearchField;
