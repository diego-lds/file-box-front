import { useState } from "react";

const useFiles = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const clearFiles = () => {
    setFiles([]);
  };

  return {
    files,
    handleFileChange,
    clearFiles,
  };
};

export default useFiles;
