import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Busca..."
          className="w-full py-2 pl-4    border flex-0 border-indigo-200 rounded-sm focus:outline-none focus:border-indigo-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
