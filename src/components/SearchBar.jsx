import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Busca..."
          className="py-2 pl-4 w-full rounded-sm border border-indigo-200 flex-0 focus:outline-none focus:border-indigo-500"
        />
        <div className="flex absolute inset-y-0 right-0 items-center pr-3">
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
