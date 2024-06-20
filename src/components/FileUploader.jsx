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
    <div
      className={`bg-white rounded-sm flex justify-between  border border-dashed border-primaryColor p-4 ${className} `}
    >
      <input
        type="file"
        multiple
        onChange={(e) => handleSelectFile(e.target.files[0])}
        ref={fileInputRef}
        className="hidden"
        aria-label="Selecione um arquivo"
      />
      <div className="flex items-center justify-between">
        <div
          onClick={handleClick}
          className="flex items-center  cursor-pointer  gap-2"
        >
          <Icon name="upload" className="mr-2" size={64} />
          <span>Enviar arquivo</span>
        </div>
      </div>
      {selectedFile && (
        <div className="mt-4 flex flex-col sm:flex-row   items-center outline m-2">
          <div className="flex  items-center">
            <span className="text-gray-700 truncate">{selectedFile.name}</span>
          </div>
          <button
            className="flex items-center text-red-500 ml-4"
            onClick={clearInput}
          >
            <Icon icon="trash" className="mr-2" />
            <span>Remover arquivo</span>
          </button>

          {isUploading ? (
            <Spinner />
          ) : (
            <button
              onClick={handleUploadFile}
              disabled={selectedFile === null || isUploading}
              className={`bg-primaryColor text-white px-4 py-2 rounded-md ml-4 ${
                isUploading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Salvar
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
