import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import Icon from "../components/Icon";
import Divider from "./Divider";
const navList = [
  {
    type: "",
    label: "Todos os arquivos",
    icon: <Icon name="inventory" />,
  },
  {
    type: "document",
    label: "Documentos",
    icon: <Icon name="document" />,
  },
  {
    type: "audio",
    label: "Áudio",
    icon: <Icon name="audio" />,
  },
  {
    type: "image",
    label: "Fotos",
    icon: <Icon name="image" />,
  },
  {
    type: "compressed",
    label: "Comprimidos",
    icon: <Icon name="compressed" />,
  },
  {
    type: "video",
    label: "Vídeos",
    icon: <Icon name="video" />,
  },
  {
    type: "other",
    label: "Outros",
    icon: <Icon name="other" />,
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
