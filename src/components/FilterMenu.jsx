import menuItems from "../../menuItems";
import Icon from "./Icon";

const FilterMenu = ({ onClick }) => {
  const handleSortBy = (types) => {
    onClick(types);
  };

  return (
    <ul className="space-y-2">
      {menuItems.map((item, index) => (
        <li
          key={index}
          onClick={() => handleSortBy(item.types)}
          className="flex items-center  p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
        >
          <Icon icon={item.icon} className="mr-2  w-4 text-2xl text-gray-700" />

          <span className="text-gray-700">{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default FilterMenu;
