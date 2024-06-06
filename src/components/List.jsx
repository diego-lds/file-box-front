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
    <ul className="divide-y divide-gray-200  w-full">
      {items.length ? list : <Empty />}
    </ul>
  );
};

const ListItem = ({ item, onDelete }) => {
  return (
    <li className="flex justify-between items-center p-2 ">
      <div className="flex items-center">
        <Icon icon={types[item.extension] || faFileAlt} className=" mr-2" />
        <p className="">{item.name}</p>
      </div>
      <small className="">{formatBytes(item.size)}</small>
      <div className="flex items-center">
        <a href={item.url} download className="">
          <Icon icon={faDownload} className="mr-3" />
        </a>
        <button onClick={() => onDelete(item)} className=" hover:text-gray-700">
          <Icon icon={faTrashAlt} className="mr-3" />
        </button>
      </div>
    </li>
  );
};

const Empty = () => (
  <li className=" text-center">Nenhum arquivo encontrado.</li>
);

export default List;
