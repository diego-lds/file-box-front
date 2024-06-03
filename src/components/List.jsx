import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { bytesToKB } from "../utils";
import Icon from "./icon";

const List = ({ items }) => {
  let list = items.map((i) => <ListItem {...i} />);
  return (
    <ul className="divide-y divide-gray-200">
      {items.length ? list : <Empty />}
    </ul>
  );
};

const ListItem = (item) => {
  return (
    <li
      key={item.etag}
      className="flex justify-between items-center p-4 bg-white hover:bg-gray-50 rounded-md"
    >
      <div className="flex items-center">
        <Icon icon={faFileAlt} className="text-gray-500 mr-3" />
        <p className="font-medium text-gray-700">{item.name}</p>
      </div>
      <small className="text-gray-500">{bytesToKB(item.size)} KB</small>
    </li>
  );
};

const Empty = () => (
  <li className="text-gray-500 text-center">Nenhum arquivo encontrado.</li>
);

export default List;