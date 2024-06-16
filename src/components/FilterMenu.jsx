import React from "react";
import {
  faMusic,
  faVideo,
  faFileZipper,
  faFileAlt,
  faBoxArchive,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";

const navList = [
  {
    type: "",
    label: "Todos os arquivos",
    icon: faBoxArchive,
  },
  {
    type: "image",
    label: "Imagem",
    icon: faImage,
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

const FilterMenu = ({ filter, setFilter }) => {
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
          className={`flex text-indigo-700 items-center gap-4 py-1 px-4 hover:bg-indigo-50 ${isActive(
            nav.type
          )}`}
          aria-current={filter === nav.type ? "page" : undefined}
        >
          <Icon icon={nav.icon} className="" aria-hidden="true" />
          <span className="hidden lg:block">{nav.label}</span>
        </a>
      </li>
    );
  };

  return (
    <nav className="flex mt-16 w-full justify-center gap-4 text-5xl lg:flex-col lg:text-sm lg:gap-1">
      {navList.map((nav) => renderList(nav))}
    </nav>
  );
};

export default FilterMenu;
