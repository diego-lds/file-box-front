import { useState, useEffect, useRef } from "react";
import { formatBytes } from "./utils";
import {
  faUpload,
  faTrashAlt,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./components/Icon";
import List from "./components/List";
import Sidebar from "./components/Sidebar";
import {
  deleteFileService,
  fetchFilesService,
  uploadFileService,
} from "./services/fileService.js";
import Filter from "./components/Filter.jsx";

function App() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filter, setFilter] = useState("");
  const fileInputRef = useRef(null);

  const filteredFiles = files.filter(
    (file) => filter === "" || file.type === filter
  );

  const handleUploadFile = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    await uploadFileService(selectedFile);
    await handleFetchFiles();

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      setSelectedFile(null);
    }
  };

  const handleDeleteFile = async (file) => {
    if (!window.confirm(`Deletar arquivo ${file.name}?`)) return;

    await deleteFileService(file);
    await handleFetchFiles();
  };

  const handleSelectFile = () => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFetchFiles = async () => {
    const data = await fetchFilesService();
    setFiles(data);
  };

  useEffect(() => {
    handleFetchFiles();
  }, []);

  return (
    <main className="flex min-h-screen bg-gray-100">
      <div className="w-1/6 min-w-[250px]">
        <aside>
          <Sidebar>
            <div className="flex items-center justify-center my-4 text-indigo-700 gap-1">
              <Icon icon={faBoxOpen} className="text-xl" />
              <p className="text-2xl">filebox</p>
            </div>
            <Filter setFilter={setFilter} filter={filter} />
          </Sidebar>
        </aside>
      </div>
      <div className="container mx-auto py-8">
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
                onChange={handleSelectFile}
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
                  {formatBytes(selectedFile.size)}
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
            <List
              items={filteredFiles}
              setItems={setFiles}
              onDelete={handleDeleteFile}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
