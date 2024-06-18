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
    <ul className={" "}>
      {items.map((item, index) => (
        <li key={index} className={" "}>
          <div className={" "}>
            {types[item.extension]}
            <p className={" "}>{item.name}</p>
            <small className={" "}>{formatBytes(item.size)}</small>
          </div>
          <div className={" "}>
            <a
              href={item.url}
              download
              className={" "}
              title={`Baixar ${item.name}`}
            >
              <Icon name="download" />
            </a>
            <button
              className={" "}
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
    <li className={" "}>
      <div className={" "}>
        {icon}
        <p className={" "}>{name}</p>
        <small className={" "}>{formatBytes(size)}</small>
      </div>
      <div className={" "}>
        <a href={url} download className={" "} title={`Baixar ${name}`}>
          <Icon name="download" />
        </a>
        <button
          className={" "}
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
  <li className={" "}>
    <p>Nenhum item encontrado.</p>
  </li>
);

export default List;
