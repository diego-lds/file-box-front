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
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const isActive = (myFilter) => (filter === myFilter ? "underline" : "");

  return (
    <ul className="flex flex-col gap-1">
      <li>
        <a
          href="#"
          onClick={() => handleFilterChange("")}
          className={`flex items-center gap-4 py-1 px-4 ${isActive("")}`}
        >
          <Icon icon={faBoxArchive} className={"w-4"} />
          <p>Todos arquivos</p>
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleFilterChange("audio")}
          className={`flex items-center gap-4 py-1 px-4 ${isActive("audio")}`}
        >
          <Icon icon={faMusic} className={"w-4"} />
          <p>Audio</p>
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleFilterChange("document")}
          className={`flex items-center gap-4 py-1 px-4 ${isActive(
            "document"
          )}`}
        >
          <Icon icon={faFile} className={"w-4"} />
          <p>Documentos</p>
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleFilterChange("compressed")}
          className={`flex items-center gap-4 py-1 px-4 ${isActive(
            "compressed"
          )}`}
        >
          <Icon icon={faFileZipper} className={"w-4"} />
          <p>Zipados</p>
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleFilterChange("video")}
          className={`flex items-center gap-4 py-1 px-4  ${isActive("video")}`}
        >
          <Icon icon={faVideo} className={"w-4"} />
          <p>Vídeo</p>
        </a>
      </li>
    </ul>
  );
};

export default Filter;
