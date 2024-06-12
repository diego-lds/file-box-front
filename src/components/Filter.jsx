import React from "react";
import {
  faMusic,
  faFileArchive,
  faFile,
  faVideo,
  faFileZipper,
  faFileAlt,
  faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";

const Filter = ({ setFilter, filter }) => {
  const navList = [
    {
      type: "",
      label: "Todos os arquivos",
      icon: faBoxArchive,
    },
    {
      type: "audio",
      label: "Áudio",
      icon: faMusic,
    },
    {
      type: "document",
      label: "Documentos",
      icon: faFileAlt,
    },
    {
      type: "compressed",
      label: "Comprimidos",
      icon: faFileZipper,
    },
    {
      type: "video",
      label: "Vídeo",
      icon: faVideo,
    },
  ];

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const isActive = (type) => {
    return filter === type ? "bg-white" : "";
  };

  const renderList = (nav) => {
    return (
      <li key={nav.type}>
        <a
          href="#"
          onClick={() => handleFilterChange(nav.type)}
          className={`flex items-center gap-4 py-1 px-4 hover:bg-indigo-50  ${isActive(
            nav.type
          )}`}
        >
          <Icon icon={nav.icon} className={"w-4"} />
          <p>{nav.label}</p>
        </a>
      </li>
    );
  };

  return (
    <ul className="flex flex-col w-full gap-1  text-otherBlue">
      {navList.map((nav) => renderList(nav))}
    </ul>
  );
};

export default Filter;
