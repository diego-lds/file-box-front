// Icon.js
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
  other: FaFile,
  download: FaDownload,
  upload: FaCloudUploadAlt,
};

const Icon = ({
  name = "other",
  color = "#4338ca",
  size = "16px",
  ...props
}) => {
  const IconComponent = Icons[name];
  return IconComponent ? (
    <IconComponent color={color} size={size} {...props} />
  ) : null;
};

export default Icon;
