import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import Icon from "../components/Icon";
import Divider from "./Divider";

// Todos os arquivos
// Documentos
// Áudio
// Fotos
// Comprimidos
// Vídeos
// Outros
const navList = [
  {
    type: "",
    label: "Todos os arquivos",
    icon: "inventory",
  },
  {
    type: "document",
    label: "Documentos",
    icon: "document",
  },
  {
    type: "audio",
    label: "Áudio",
    icon: "audio",
  },
  {
    type: "image",
    label: "Fotos",
    icon: "image",
  },
  {
    type: "compressed",
    label: "Comprimidos",
    icon: "compressed",
  },
  {
    type: "video",
    label: "Vídeos",
    icon: "video",
  },
  {
    type: "other",
    label: "Outros",
    icon: "other",
  },
];

const Filterbar = ({ filter, setFilter }) => {
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const isActive = (type) => {
    return filter === type ? "bg-white" : "";
  };

  return (
    <ul className={"flex h-12 outline"}>
      {navList.map((nav) => (
        <li className="flex flex-grow justify-center" key={nav.type}>
          <a
            href="#"
            onClick={() => handleFilterChange(nav.type)}
            className={"flex  items-center justify-between gap-2"}
            aria-current={filter === nav.type ? "page" : undefined}
          >
            <Icon name={nav.icon} />
            <p className={"hidden text-sm md:block "}>{nav.label}</p>
          </a>

          <Divider />
        </li>
      ))}
    </ul>
  );
};

export default Filterbar;
