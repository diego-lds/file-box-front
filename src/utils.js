export const formatBytes = (bytes) => {
  if (bytes === 0) return "0 B";

  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = bytes / Math.pow(1024, i);
  const roundedSize = Math.round(size * 100) / 100;

  return `${roundedSize} ${sizes[i]}`;
};
