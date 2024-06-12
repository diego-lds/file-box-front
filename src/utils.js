export const formatBytes = (bytes) => {
  if (bytes === 0) return "0 B";

  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = bytes / Math.pow(1024, i);

  let formattedSize;
  if (sizes[i] === "KB") {
    formattedSize = Math.floor(size);
  } else {
    formattedSize = Math.round(size * 100) / 100; //
  }

  return `${formattedSize} ${sizes[i]}`;
};
