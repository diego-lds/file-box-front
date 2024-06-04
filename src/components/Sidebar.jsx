import React from "react";
import FilterMenu from "../components/FilterMenu";

const Sidebar = ({ sortFiles }) => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <FilterMenu onClick={sortFiles} />
    </div>
  );
};

export default Sidebar;
