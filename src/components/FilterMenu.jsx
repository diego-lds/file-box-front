import React from "react";

import Icon from "./Icon";
import Divider from "./Divider";

const navList = [
  {
    type: "",
    label: "Todos os arquivos",
    icon: <Icon src="/inventory.svg" />,
  },
  {
    type: "image",
    label: "Imagem",
    icon: <Icon src="/image.svg" />,
  },
  {
    type: "audio",
    label: "Áudio",
    icon: <Icon src="/music.svg" />,
  },
  {
    type: "document",
    label: "Documentos",
    icon: <Icon src="/document.svg" />,
  },
  {
    type: "compressed",
    label: "Comprimidos",
    icon: <Icon src="/compressed.svg" />,
  },
  {
    type: "video",
    label: "Vídeo",
    icon: <Icon src="/video.svg" />,
  },
];

const FilterMenu = ({ filter, setFilter }) => {
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const isActive = (type) => {
    return filter === type ? "bg-white" : "";
  };

  return (
    <nav className="flex mt-16 w-full justify-center gap-4 text-5xl lg:flex-col lg:text-sm lg:gap-1">
      {navList.map((nav) => (
        <li key={nav.type}>
          <a
            href="#"
            onClick={() => handleFilterChange(nav.type)}
            className={`flex text-grey items-center gap-4 py-1 px-4 rounded-sm hover:bg-indigo-50 ${isActive(
              nav.type
            )}`}
            aria-current={filter === nav.type ? "page" : undefined}
          >
            {nav.icon}
            <span className="hidden lg:block">{nav.label}</span>
          </a>
          <Divider />
        </li>
      ))}
    </nav>
  );
};

export default FilterMenu;
