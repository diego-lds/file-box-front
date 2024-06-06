import React from "react";
import {
  faMusic,
  faFileArchive,
  faFile,
  faVideo,
  faFileZipper,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";

const Filter = ({ setFilter, filter }) => {
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const isActive = (myFilter) =>
    filter === myFilter ? "text-indigo-600" : "text-slate-600";

  return (
    <ul className="flex flex-col bg-gray-100  gap-1">
      <li>
        <a
          href="#"
          onClick={() => handleFilterChange("")}
          className={`flex items-center gap-4 py-2 px-4 ${isActive("")}`}
        >
          <Icon icon={faFileArchive} size={"1x"} className={"w-4"} />
          <span>Todos</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleFilterChange("audio")}
          className={`flex items-center gap-4 py-2 px-4 ${isActive("audio")}`}
        >
          <Icon icon={faMusic} size={"1x"} className={"w-4"} />
          <span>Audio</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleFilterChange("document")}
          className={`flex items-center gap-4 py-2 px-4 ${isActive(
            "document"
          )}`}
        >
          <Icon icon={faFile} className={"w-4"} />
          <span>Documentos</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleFilterChange("compressed")}
          className={`flex items-center gap-4 py-2 px-4 ${isActive(
            "compressed"
          )}`}
        >
          <Icon icon={faFileZipper} size={"1x"} className={"w-4"} />
          <span>ZIP</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleFilterChange("video")}
          className={`flex items-center gap-4 py-2 px-4 ${isActive("video")}`}
        >
          <Icon icon={faVideo} size={"1x"} className={"w-4"} />
          <span>Vídeo</span>
        </a>
      </li>
    </ul>
  );
};

export default Filter;
