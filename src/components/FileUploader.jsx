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
    <div className={" "}>
      <input
        type="file"
        multiple
        onChange={(e) => handleSelectFile(e.target.files[0])}
        ref={fileInputRef}
        className={" "}
        aria-label="Selecione um arquivo"
      />
      <div className={" "}>
        <div onClick={handleClick} className={" "} role="button" tabIndex="0">
          <Icon name="upload" />
          <span className={" "}>Selecionar arquivo</span>
        </div>
        <button
          onClick={handleUploadFile}
          disabled={selectedFile === null || isUploading}
          className={" "}
        >
          {isUploading ? <Spinner /> : "Enviar"}
        </button>
      </div>
      {selectedFile && (
        <div className={" "}>
          <div className={" "}>
            <span className={" "}>{selectedFile.name}</span>
          </div>
          <button className={" "} onClick={clearInput} tabIndex="0">
            <Icon icon={faTrashAlt} className={" "} />
            <span>Remover arquivo</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
