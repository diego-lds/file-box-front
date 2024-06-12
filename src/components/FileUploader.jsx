import React, { useRef, useState } from "react";
import {
  faTrashAlt,
  faCloudUploadAlt,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { formatBytes } from "../utils";
import Icon from "./Icon";
import { uploadFileService, fetchFilesService } from "../services/fileService";

const FileUploader = ({
  handleUploadFile,
  selectedFile,
  handleClearInput,
  handleSelectFile,
}) => {
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const clearInput = (e) => {
    handleClearInput();
    fileInputRef.current.value = null;
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="w-3/4 flex flex-col bg-white rounded-sm border p-4 border-dashed border-indigo-700 hover:bg-indigo-100">
      <input
        type="file"
        multiple
        onChange={(e) => handleSelectFile(e.target.files[0])}
        ref={fileInputRef}
        className="hidden"
      />
      <div className="flex justify-evenly items-center">
        <div
          onClick={handleClick}
          className="cursor-pointer flex items-center "
        >
          <Icon
            icon={faCloudUploadAlt}
            className="text-4xl text-indigo-700 mr-2"
          />
          <span className="text-lg">Selecionar arquivos</span>
        </div>
        <button
          onClick={handleUploadFile}
          disabled={selectedFile === null || isUploading}
          className="py-2 px-4 cursor-pointer text-white bg-indigo-700 disabled:bg-gray-300"
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
              className="text-indigo-700 hover:underline flex items-center"
              onClick={clearInput}
            >
              <Icon icon={faTrashAlt} className="mr-2" /> Remover arquivo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
