import {
  faFileAlt,
  faFileArchive,
  faFileImage,
  faFilePdf,
  faFolder,
  faMusic,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Icon from "./Icon";
const menuItems = [
  { label: "Fotos", icon: faFileImage, types: ["png", "jpg"] },
  { label: "PDF", icon: faFilePdf, types: ["pdf"] },
  { label: "Texto", icon: faFileAlt, types: ["doc", "txt", "docx"] },
  { label: "Áudios", icon: faMusic, types: ["mp3"] },
  { label: "Vídeos", icon: faVideoCamera, types: ["mp4"] },
  { label: "Compactados", icon: faFileArchive, types: ["zip", "rar"] },
  { label: "Outros", icon: faFolder, types: [] },
];

const Sidebar = ({ children }) => {
  return (
    <div className="w-64 bg-gray-100 text-slate-600 p-4">
      {children}
      {/* <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center  p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
          >
            <Icon
              icon={item.icon}
              className="mr-2  w-4 text-2xl text-gray-700"
            />

            <span className="text-gray-700">{item.label}</span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Sidebar;
