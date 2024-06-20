import React from "react";
import Icon from "../components/Icon";
import Divider from "./Divider";

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
    return filter === type ? "bg-slate-200" : "";
  };

  return (
    <ul className="flex h-12 overflow-y-hidden">
      {navList.map((nav) => (
        <li key={nav.type} className="flex flex-grow justify-center">
          <a
            href="#"
            onClick={() => handleFilterChange(nav.type)}
            className={`flex items-center justify-between gap-2 p-2 rounded-lg ${isActive(
              nav.type
            )}`}
            aria-current={filter === nav.type ? "page" : undefined}
          >
            <Icon name={nav.icon} size="22" />
            <p className="hidden text-sm text-slate-700 font-bold md:block">
              {nav.label}
            </p>
          </a>
          <Divider />
        </li>
      ))}
    </ul>
  );
};

export default Filterbar;
