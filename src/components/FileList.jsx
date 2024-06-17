import React from "react";

import { formatBytes } from "../utils";
import Icon from "./Icon";

const types = {
  txt: <Icon name="document" />,
  doc: <Icon name="document" />,
  docx: <Icon name="document" />,
  pdf: <Icon name="document" />,
  png: <Icon name="image" />,
  jpg: <Icon name="image" />,
  mp3: <Icon name="music" />,
  mp4: <Icon name="video" />,
  zip: <Icon name="compressed" />,
  rar: <Icon name="compressed" />,
};

const List = ({ items, onDelete }) => {
  if (!items.length) return;

  return (
    <ul className="w-full divide-y divide-gray-200 list-container">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between p-2 mx-2 ">
          <div className="flex flex-1 items-center ">
            {types[item.extension]}
            <p className="flex-grow pl-2">{item.name}</p>
            <small className="mx-4">{formatBytes(item.size)}</small>
          </div>
          <div className="flex items-center">
            <a
              href={item.url}
              download
              className="mr-3"
              title={`Baixar ${item.name}`}
            >
              <Icon name="download" />
            </a>
            <button
              className=""
              title={`Apagar arquivo ${item.name}`}
              aria-label={`Apagar arquivo ${item.name}`}
              onClick={() => onDelete(item)}
            >
              <Icon name="trash" />
            </button>
          </div>
        </li>
      ))}
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
          <Icon name="download" />
        </a>
        <button
          className=""
          title={`Apagar arquivo ${name}`}
          aria-label={`Apagar arquivo ${name}`}
          onClick={handleDelete}
        >
          <Icon name="trash" />
        </button>
      </div>
    </li>
  );
};

const Empty = () => (
  <li className="text-center p-2 mx-2 ">
    <p>Nenhum item encontrado.</p>
  </li>
);

export default List;
