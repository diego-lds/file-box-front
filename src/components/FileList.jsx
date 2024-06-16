import React from "react";
import {
  faFileAlt,
  faTrashAlt,
  faDownload,
  faMusic,
  faFilePdf,
  faFileImage,
  faFileVideo,
  faFileArchive,
  faFileWord,
} from "@fortawesome/free-solid-svg-icons";
import { formatBytes } from "../utils";
import Icon from "./Icon";

const types = {
  txt: faFileAlt,
  doc: faFileWord,
  docx: faFileWord,
  pdf: faFilePdf,
  png: faFileImage,
  jpg: faFileImage,
  mp3: faMusic,
  mp4: faFileVideo,
  zip: faFileArchive,
  rar: faFileArchive,
};

const List = ({ items, onDelete }) => {
  return (
    <ul className="w-full divide-y divide-gray-200 list-container">
      {items.length ? (
        items.map((item, index) => (
          <ListItem key={index} item={item} onDelete={onDelete} />
        ))
      ) : (
        <Empty />
      )}
    </ul>
  );
};

const ListItem = ({ item, onDelete }) => {
  const { name, extension, size, url } = item;

  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <li className="flex justify-between items-center p-2 mx-2">
      <div className="flex flex-1 items-center">
        <Icon icon={types[extension] || faFileAlt} className="mr-4" />
        <p className="flex-grow">{name}</p>
        <small className="mx-4">{formatBytes(size)}</small>
      </div>
      <div>
        <a href={url} download className="mr-3" title={`Baixar ${name}`}>
          <Icon
            icon={faDownload}
            className=""
            alt={`Ícone de download para ${name}`}
          />
        </a>
        <button
          onClick={handleDelete}
          className=""
          title={`Apagar arquivo ${name}`}
          aria-label={`Apagar arquivo ${name}`}
        >
          <Icon
            icon={faTrashAlt}
            className="hover:text-red-500"
            alt={`Ícone de lixeira para ${name}`}
          />
        </button>
      </div>
    </li>
  );
};

const Empty = () => <li className="text-center">Nenhum arquivo encontrado.</li>;

export default List;
