import React from "react";
const SearchBar = ({ className }) => {
  return (
    <div className={`relative flex-1 bg-blue`}>
      <input
        type="text"
        placeholder="Busca..."
        className="rounded-sm border size-full focus:outline-none"
      />
      <div className="flex absolute inset-y-0 right-0 items-center pr-3">
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
