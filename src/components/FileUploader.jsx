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
  className,
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
    <div
      className={`flex flex-col rounded-sm border border-dashed ${className} bg-gren-400`}
    >
      <input
        type="file"
        multiple
        onChange={(e) => handleSelectFile(e.target.files[0])}
        ref={fileInputRef}
        className="hidden"
      />
      <div className="flex justify-evenly items-center">
        <div onClick={handleClick} className="flex items-center cursor-pointer">
          <Icon icon={faCloudUploadAlt} className="mr-2 text-4xl" />
          <span className="text-lg">Selecionar arquivos</span>
        </div>
        <button
          onClick={handleUploadFile}
          disabled={selectedFile === null || isUploading}
          className="px-4 py-2 cursor-pointer"
        >
          {isUploading ? (
            <Icon icon={faSpinner} className="animate-spin" />
          ) : (
            "Enviar"
          )}
        </button>
      </div>
      {selectedFile && (
        <div className="relative mt-4 w-full text-center">
          <div className="flex gap-2 justify-center items-center p-2 bg-gray-200 rounded-full">
            <span className=""> arquivo: {selectedFile.name}</span>
            <button
              className="flex items-center hover:underline"
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
