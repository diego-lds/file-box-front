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
  const list = items.map((item, index) => (
    <ListItem key={index} item={item} onDelete={onDelete} />
  ));

  return (
    <ul className="divide-y divide-gray-200 w-full list-container">
      {items.length ? list : <Empty />}
    </ul>
  );
};

const ListItem = ({ item, onDelete }) => {
  return (
    <li className="flex justify-between items-center p-2 mx-4 transition duration-300 ease-in-out transform hover:bg-gray-100">
      <div className="flex items-center flex-1">
        <Icon icon={types[item.extension] || faFileAlt} className="mr-4" />
        <p className="flex-grow">{item.name}</p>
        <small className="mx-4">{formatBytes(item.size)}</small>
      </div>
      <div>
        <a href={item.url} download className="mr-3">
          <Icon icon={faDownload} className="" />
        </a>
        <button
          alt="Apagar arquivo 🗑️???"
          onClick={() => onDelete(item)}
          className="hover:text-gray-700"
        >
          <Icon icon={faTrashAlt} className="hover:text-red-500" />
        </button>
      </div>
    </li>
  );
};

const Empty = () => <li className="text-center">Nenhum arquivo encontrado.</li>;

export default List;
