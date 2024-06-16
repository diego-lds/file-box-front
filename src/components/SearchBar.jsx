import React, { useRef } from "react";

const SearchBar = ({ className }) => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className={`relative flex-1 ${className}`}>
      <label htmlFor="searchInput" className="sr-only">
        Busca
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder="Busca..."
        className="p-3 rounded-sm border size-full focus:outline-none"
        ref={inputRef}
      />
      <div
        className="flex absolute inset-y-0 top-0 right-0 items-center pr-3 cursor-pointer"
        onClick={handleIconClick}
      >
        <Lens />
      </div>
    </div>
  );
};

const Lens = () => (
  <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
);

export default SearchBar;
