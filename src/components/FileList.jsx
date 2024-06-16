import React from "react";

import { formatBytes } from "../utils";
import Icon from "./Icon";

const types = {
  txt: <Icon src="/document.svg" />,
  doc: <Icon src="/document.svg" />,
  docx: <Icon src="/document.svg" />,
  pdf: <Icon src="/document.svg" />,
  png: <Icon src="/image.svg" />,
  jpg: <Icon src="/image.svg" />,
  mp3: <Icon src="/music.svg" />,
  mp4: <Icon src="/video.svg" />,
  zip: <Icon src="/compressed.svg" />,
  rar: <Icon src="/compressed.svg" />,
};

const List = ({ items, onDelete }) => {
  return (
    <ul className="w-full divide-y divide-gray-200 list-container">
      {items.length ? (
        items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onDelete={onDelete}
            icon={types[item.extension]}
          />
        ))
      ) : (
        <Empty />
      )}
    </ul>
  );
};

const ListItem = ({ item, onDelete, icon }) => {
  const { name, extension, size, url } = item;

  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <li className="flex justify-between items-center p-2 mx-2 ">
      <div className="flex flex-1 items-center ">
        {icon}
        <p className="flex-grow pl-2">{name}</p>
        <small className="mx-4">{formatBytes(size)}</small>
      </div>
      <div className="flex">
        <a href={url} download className="mr-3" title={`Baixar ${name}`}>
          <Icon src="download.svg" alt={`Ícone de download para ${name}`} />
        </a>
        <button
          className=""
          title={`Apagar arquivo ${name}`}
          aria-label={`Apagar arquivo ${name}`}
          onClick={handleDelete}
        >
          <Icon src="trash.svg" />
        </button>
      </div>
    </li>
  );
};

const Empty = () => <li className="text-center">Nenhum arquivo encontrado.</li>;

export default List;
