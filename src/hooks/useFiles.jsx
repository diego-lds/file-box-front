import { useState, useEffect, useRef } from "react";

const useFiles = () => {
  const [files, setFiles] = useState([]);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Erro ao enviar arquivo");
      }

      return response.json();
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
    }
  };

  return {
    files,
    setFiles,
    uploadFile,
  };
};

export default useFiles;
