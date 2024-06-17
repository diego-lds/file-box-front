import React from "react";
import { FiPlus, FiMinus, FiSearch, FiUser, FiBox } from "react-icons/fi";

import IconComponent from "./Icon";
import Divider from "./Divider";
const navList = [
  {
    type: "",
    label: "Todos os arquivos",
    icon: <FiBox color="red" />,
  },
  {
    type: "image",
    label: "Imagem",
    icon: <IconComponent icon={FiPlus} />,
  },
  {
    type: "audio",
    label: "Áudio",
    icon: <IconComponent icon={FiPlus} />,
  },
  {
    type: "document",
    label: "Documentos",
    icon: <IconComponent icon={FiPlus} />,
  },
  {
    type: "compressed",
    label: "Comprimidos",
    icon: <IconComponent icon={FiPlus} />,
  },
  {
    type: "video",
    label: "Vídeo",
    icon: <IconComponent icon={FiPlus} />,
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
