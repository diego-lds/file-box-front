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
  odt: <Icon name="document" />,
  odt: <Icon name="document" />,
};

const FileList = ({ items = [], filter, onDelete }) => {
  const tableHeaderStyles =
    "hidden sm:flex justify-between items-center h-12 border-b border-primaryColor text-center ";
  const listItemStyles =
    "flex sm:flex-row justify-between items-center h-16 border-b border-gray-200 ";
  const itemColumnStyles =
    "hidden sm:block sm:w-1/6 text-slate-500 text-sm text-center";
  const actionColumnStyles =
    "w-full sm:w-1/6 flex justify-end sm:justify-start items-center px-4 py-2 sm:py-4 gap-2";
  const actionLinkStyles = "flex items-center text-sm";
  const actionButtonStyles = "flex items-center text-sm";

  return (
    <div>
      {items.length === 0 ? (
        <p className="mt-4 text-center text-gray-500">
          Não há arquivos para exibir.
        </p>
      ) : (
        <ul className="flex flex-col">
          <li className={tableHeaderStyles}>
            <p className="w-1/3 text-sm font-bold text-start">Nome</p>
            <p className="w-1/6 text-sm font-bold">Tipo</p>
            <p className="w-1/6 text-sm font-bold">Última modificação</p>
            <p className="w-1/6 text-sm font-bold">Tamanho</p>
            <p className="w-1/6 text-sm font-bold">Ações</p>
          </li>
          {items.map((item, index) => (
            <li key={index} className={listItemStyles}>
              <div className="flex items-center mb-2 w-full sm:w-1/3 sm:mb-0">
                {types[item.extension]}
                <p className="overflow-hidden ml-2 text-sm whitespace-nowrap text-ellipsis">
                  {item.name}
                </p>
              </div>
              <p className={itemColumnStyles}>{item.type}</p>
              <p className={itemColumnStyles}>
                {new Date(item.lastModified).toLocaleDateString("pt-BR")}
              </p>
              <p className={itemColumnStyles}>{formatBytes(item.size)}</p>
              <div className={actionColumnStyles}>
                <a
                  href={item.url}
                  download
                  className={actionLinkStyles}
                  title={`Baixar ${item.name}`}
                >
                  <Icon name="download" className="mr-1" />
                  <span className="hidden sm:block">Baixar</span>
                </a>
                <button
                  className={actionButtonStyles}
                  title={`Apagar arquivo ${item.name}`}
                  aria-label={`Apagar arquivo ${item.name}`}
                  onClick={() => onDelete(item)}
                >
                  <Icon name="trash" className="mr-1" />
                  <span className="hidden sm:block">Excluir</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileList;
