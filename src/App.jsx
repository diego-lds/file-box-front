import { useState, useEffect, useRef } from "react";
import useFiles from "./hooks/useFiles";
import { bytesToKB } from "./utils";
import {
  faUpload,
  faTrashAlt,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Icon from "./components/icon";
import List from "./components/List";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const { uploadFile, files, setFiles } = useFiles();

  const handleUploadFile = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    try {
      await uploadFile(selectedFile);
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      // Fetch updated list of files
      fetchFiles();
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
    }
  };

  const handleOnChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fetchFiles = async () => {
    try {
      const response = await fetch("http://localhost:3000/files");
      const data = await response.json();
      setFiles(data.files);
    } catch (error) {
      console.error("Erro ao buscar arquivos:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <main className="min-h-screen  bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl text-indigo-600 text-center mb-10">
          <Icon icon={faBoxOpen} className="mr-2" />
          <span className="text-4xl font-bold">FILE</span>
          BOX
        </h1>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">
              Carregue seu arquivo
            </h2>
            <form
              onSubmit={handleUploadFile}
              className="flex flex-col items-center space-y-4"
            >
              <input
                type="file"
                onChange={handleOnChange}
                ref={fileInputRef}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
              >
                <Icon icon={faUpload} className="mr-2" /> Enviar
              </button>
            </form>
            {selectedFile && (
              <div className="mt-4 text-center">
                <p className="text-gray-700">
                  Nome do arquivo:{" "}
                  <span className="font-bold">{selectedFile.name}</span>
                </p>
                <small className="text-gray-500">
                  {bytesToKB(selectedFile.size)} KB
                </small>
                <button
                  className="block mt-2 text-indigo-500 hover:underline"
                  onClick={() => {
                    setSelectedFile(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                >
                  <Icon icon={faTrashAlt} className="mr-2" /> Remover arquivo
                </button>
              </div>
            )}
          </div>
          <div className="w-full max-w-3xl mt-10">
            <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
              Meus Arquivos
            </h2>
            <List items={files} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
