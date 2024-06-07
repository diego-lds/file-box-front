import { useState, useEffect, useRef } from "react";
import { formatBytes } from "./utils";
import {
  faTrashAlt,
  faBoxOpen,
  faUpload,
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
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Photo from "./assets/react.svg";
import UserProfile from "./components/UserProfile.jsx";
import { ToastContainer, toast } from "react-toastify";

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

    const response = await uploadFileService(selectedFile);
    console.log(response);
    if (response.status === 200) {
      await handleFetchFiles();
      handleClearInput();
      toast.success("Arquivo salvo com sucesso!");
    }
  };

  const handleDeleteFile = async (file) => {
    if (!window.confirm(`Deletar arquivo ${file.name}?`)) return;

    await deleteFileService(file);
    toast.info("Arquivo deletado com sucesso!");
    await handleFetchFiles();
  };

  const handleSelectFile = () => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFetchFiles = async () => {
    const data = await fetchFilesService();
    setFiles(data);
  };

  const handleClearInput = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    handleFetchFiles();
  }, []);

  return (
    <main className="flex min-h-screen bg-whiter">
      <aside className="w-1/6 bg-slate-200 border border-r-slate-300">
        <Sidebar className="">
          <div className="flex items-center justify-center my-8  gap-2 text-violet ">
            <Icon icon={faBoxOpen} className="text-3xl w-8" />
            <h1 className="text-2xl">filebox</h1>
          </div>
          <div className="flex mx-4 my-8">
            <Filter setFilter={setFilter} filter={filter} />
          </div>
        </Sidebar>
      </aside>

      <div className="container mx-auto p-2 ">
        <Header className={"flex items-center justify-between"}>
          <SearchBar />
          <UserProfile name="Diego Lopes" photo={Photo} />
        </Header>
        <div className="flex flex-col items-center mt-4">
          <h2 className="text-center mb-6">Carregue seu arquivo</h2>
          <div className="w-full max-w-2xl p-6 bg-white rounded-xl  border-2  border-dashed animate-border-light">
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
                className="w-full py-2 px-4 bg-violet text-white rounded-md hover:bg-purple-800"
              >
                <Icon icon={faUpload} className="mr-2" /> Enviar
              </button>
            </form>

            {selectedFile && (
              <div className="mt-4 text-center relative">
                <p className="">
                  Nome do arquivo:{" "}
                  <span className="font-bold">{selectedFile.name}</span>
                </p>
                <small className="">{formatBytes(selectedFile.size)}</small>
                <button
                  className="block mt-2 text-indigo-500 hover:underline"
                  onClick={() => handleClearInput()}
                >
                  <Icon icon={faTrashAlt} className="mr-2" /> Remover arquivo
                </button>
              </div>
            )}
          </div>
          <div className="w-full mt-10">
            <h2 className=" text-center mb-4">Meus Arquivos</h2>
            <List
              items={filteredFiles}
              setItems={setFiles}
              onDelete={handleDeleteFile}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default App;
