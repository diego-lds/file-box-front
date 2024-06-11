import React, { useRef, useState } from "react";
import {
  faTrashAlt,
  faCloudUploadAlt,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { formatBytes } from "../utils";
import Icon from "./Icon";

const FileUploader = ({ onUpload, onFileSelect }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSelectFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleClearInput = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null;
  };

  const handleUpload = async () => {
    setIsUploading(true);
    try {
      await onUpload(selectedFile);
      handleClearInput();
    } catch (error) {
      console.error("Erro ao enviar os arquivos:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="w-full p-6 flex flex-col bg-white rounded-xl border-2 border-dashed border-gray-400">
      <h2 className="text-center mb-6">Carregue seu arquivo</h2>

      <input
        type="file"
        multiple
        onChange={handleSelectFile}
        ref={fileInputRef}
        className="hidden"
      />
      <div className="flex justify-around items-center">
        <div onClick={handleClick} className="cursor-pointer flex items-center">
          <Icon
            icon={faCloudUploadAlt}
            className="text-2xl text-violet hover:text-purple-800 mr-2"
          />
          <span>Selecionar arquivos</span>
        </div>
        <button
          onClick={handleUpload}
          disabled={selectedFile === null || isUploading}
          className="py-2 px-4 cursor-pointer text-white bg-gray-500 disabled:bg-gray-300"
        >
          {isUploading ? (
            <Icon icon={faSpinner} className="animate-spin" />
          ) : (
            "Enviar"
          )}
        </button>
      </div>
      {selectedFile && (
        <div className="w-full mt-4 text-center relative">
          <div className="flex justify-center items-center gap-2 p-2 bg-gray-200 rounded-full">
            <span className="text-gray"> arquivo: {selectedFile.name}</span>
            <button
              className="text-indigo-500 hover:underline flex items-center"
              onClick={handleClearInput}
            >
              <Icon icon={faTrashAlt} className="mr-2" /> Remover arquivo(s)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
