import React, { useRef } from "react";

import Spinner from "./Spinner";
import Icon from "./Icon";

const FileUploader = ({
  handleUploadFile,
  selectedFile,
  handleClearInput,
  handleSelectFile,
  className,
  isUploading,
}) => {
  const fileInputRef = useRef(null);

  const clearInput = () => {
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
        aria-label="Selecione um arquivo"
      />
      <div className="flex justify-center gap-4 items-center">
        <div
          onClick={handleClick}
          className="flex items-center cursor-pointer"
          role="button"
          tabIndex="0"
        >
          <Icon name="upload" />
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
        <div className="flex flex-col w-full justify-center mt-4">
          <div className="flex justify-center items-center p-1 m-2 bg-gray-200 rounded-full">
            <span className="">{selectedFile.name}</span>
          </div>
          <button
            className="flex items-center justify-center hover:underline"
            onClick={clearInput}
            tabIndex="0"
          >
            <Icon icon={faTrashAlt} className="mr-2" />
            <span>Remover arquivo</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
