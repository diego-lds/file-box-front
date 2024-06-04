import {
  faFileAlt,
  faTrashAlt,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { formatBytes } from "../utils";
import Icon from "./Icon";

const List = ({ items, onDelete }) => {
  const list = items.map((item, index) => (
    <ListItem key={index} item={item} onDelete={onDelete} />
  ));

  return (
    <ul className="divide-y divide-gray-200">
      {items.length ? list : <Empty />}
    </ul>
  );
};
const ListItem = ({ item, onDelete }) => {
  return (
    <li>
      <div className="flex justify-between items-center p-4 bg-white hover:bg-gray-50 rounded-md">
        <div className="flex items-center">
          <Icon icon={faFileAlt} className="text-gray-500 mr-3" />
          <p className="font-medium text-gray-700">{item.name}</p>
        </div>
        <small className="text-gray-500">{formatBytes(item.size)}</small>
        <div>
          <a href={item.url} download>
            <Icon icon={faDownload} className="text-gray-500 mr-3" />
          </a>
          <button onClick={() => onDelete(item)}>
            <Icon icon={faTrashAlt} className="text-gray-500 mr-3" />
          </button>
        </div>
      </div>
    </li>
  );
};

const Empty = () => (
  <li className="text-gray-500 text-center">Nenhum arquivo encontrado.</li>
);

export default List;
