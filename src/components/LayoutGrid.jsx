// LayoutGrid.js
import React from "react";

const LayoutGrid = ({ header, aside, footer, main }) => {
  return (
    <div className="grid grid-rows-layout grid-cols-layout h-screen outline ">
      <header className="flex items-center outline row-span-1 col-span-2 py-2 px-4 gap-4 bg-gray-200 ">
        {header}
      </header>
      <aside className="row-span-2 col-span-1 bg-gray-100 p-4">{aside}</aside>
      <main className="row-span-2 col-span-1 bg-white p-4">{main}</main>
      <footer className="row-span-1 col-span-2 outline items-center justify-center px-96 bg-gray-200 p-4">
        {footer}
      </footer>
    </div>
  );
};

export default LayoutGrid;
