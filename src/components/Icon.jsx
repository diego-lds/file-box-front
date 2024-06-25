import React from "react";
import {
  FaBoxOpen,
  FaBox,
  FaFile,
  FaFileAlt,
  FaFileArchive,
  FaMusic,
  FaVideo,
  FaImage,
  FaDownload,
  FaUpload,
  FaTrash,
  FaCloudUploadAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";

const Icons = {
  box: FaBoxOpen,
  inventory: FaBox,
  document: FaFileAlt,
  audio: FaMusic,
  video: FaVideo,
  compressed: FaFileArchive,
  image: FaImage,
  download: FaDownload,
  trash: FaTrash,
  upload: FaCloudUploadAlt,
  search: FaSearch,
  user: FaUser,
  other: FaFile,
};

const Icon = ({
  name = "other",
  color = "#4338ca",
  size = "16px",
  ...props
}) => {
  const IconComponent = Icons[name] || Icons.other;

  return <IconComponent color={color} size={size} {...props} />;
};

export default Icon;
