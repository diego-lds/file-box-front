// LayoutGrid.js
import React from "react";

const LayoutGrid = ({ header, aside, footer, main }) => {
  return (
    <div className={" "}>
      <header className={" "}>{header}</header>
      <aside className={" "}>{aside}</aside>
      <main className={" "}>{main}</main>
      <footer className={" "}>{footer}</footer>
    </div>
  );
};

export default LayoutGrid;
