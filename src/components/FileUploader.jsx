import React, { useRef, useState } from "react";
import {
  faTrashAlt,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { formatBytes } from "../utils";
import Icon from "./Icon";

const FileUploader = ({ onUpload, onFileSelect }) => {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleSelectFile = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    onFileSelect(files); // Chamando a função onFileSelect passando os arquivos selecionados
  };

  const handleClearInput = () => {
    setSelectedFiles([]);
    fileInputRef.current.value = null;
  };

  const handleUpload = async () => {
    try {
      await onUpload(selectedFiles);
      handleClearInput();
    } catch (error) {
      console.error("Erro ao enviar os arquivos:", error);
      // Tratar erro, se necessário
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full max-w-2xl p-6 flex flex-col bg-white rounded-xl border-2 border-dashed">
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
          disabled={selectedFiles.length === 0}
          className="py-2 px-4 cursor-pointer text-white bg-gray-500"
        >
          Enviar
        </button>
      </div>
      {selectedFiles.length > 0 && (
        <div className="w-full mt-4 text-center relative">
          <div className="flex flex-wrap gap-2 p-2">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                <span className="mr-2">{file.name}</span>
                <small className="text-gray-600">
                  {formatBytes(file.size)}
                </small>
              </div>
            ))}
          </div>
          <button
            className="block mt-2 text-indigo-500 hover:underline"
            onClick={handleClearInput}
          >
            <Icon icon={faTrashAlt} className="mr-2" /> Remover arquivo(s)
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
