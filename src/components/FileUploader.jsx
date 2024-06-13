import React, { useRef, useState } from "react";
import {
  faTrashAlt,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import Spinner from "./Spinner";

const FileUploader = ({
  handleUploadFile,
  selectedFile,
  handleClearInput,
  handleSelectFile,
  className,
  isUploading,
}) => {
  const fileInputRef = useRef(null);

  const clearInput = (e) => {
    handleClearInput();
    fileInputRef.current.value = null;
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className={`${className} cursor-pointer flex flex-col`}>
      <input
        type="file"
        multiple
        onChange={(e) => handleSelectFile(e.target.files[0])}
        ref={fileInputRef}
        className="hidden"
      />
      <div className="flex justify-center gap-4 items-center ">
        <div onClick={handleClick} className="flex items-center cursor-pointer">
          <Icon
            icon={faCloudUploadAlt}
            className="mr-2 text-4xl text-primaryColor"
          />
          <span className="text-md">Selecionar arquivo</span>
        </div>
        <button
          onClick={handleUploadFile}
          disabled={selectedFile === null || isUploading}
          className="px-4 py-2 cursor-pointer border border-grey-700"
        >
          {isUploading ? <Spinner /> : "Enviar"}
        </button>
      </div>
      {selectedFile && (
        <div className="flex flex-col  w-full justify-center">
          <div className="flex justify-center items-center p-1 m-2 bg-gray-200 rounded-full">
            <span className="">Arquivo: {selectedFile.name}</span>
          </div>
          <button
            className="flex items-center justify-center hover:underline"
            onClick={clearInput}
          >
            <Icon icon={faTrashAlt} className="mr-2" /> Remover arquivo
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
