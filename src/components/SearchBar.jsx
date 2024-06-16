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
        className="p-3 rounded-sm border size-full focus:outline-none box-border"
        ref={inputRef}
        style={{ width: "100%", height: "100%" }} // Garantir que o input preencha o espaço disponível
      />
      <div
        className="flex absolute inset-y-0 top-0 right-0 items-center pr-3 cursor-pointer"
        onClick={handleIconClick}
        style={{ width: "24px", height: "24px" }} // Reservar espaço para o ícone
      >
        <Lens />
      </div>
    </div>
  );
};

const Lens = () => (
  <svg
    className="size-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
);

export default SearchBar;
