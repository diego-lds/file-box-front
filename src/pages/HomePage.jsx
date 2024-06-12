import { useState, useEffect, useRef } from "react";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteFileService,
  fetchFilesService,
  uploadFileService,
} from "../services/fileService.js";
import Filter from "../components/Filter.jsx";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Photo from "../assets/react.svg";
import UserProfile from "../components/UserProfile.jsx";
import Icon from "../components/Icon";
import List from "../components/List";
import Sidebar from "../components/Sidebar";
import FileUploader from "../components/FileUploader.jsx";
import { ToastContainer, toast } from "react-toastify";

function HomePage() {
  const [files, setFiles] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [isUploading, setIsUploading] = useState(false);

  const filteredFiles = files.filter(
    (file) => filter === "" || file.type === filter
  );

  const handleClearInput = () => {
    handleSelectFile(null);
  };

  const handleSelectFile = (file) => {
    setSelectedFile(file);
  };

  const handleUploadFile = async () => {
    setIsUploading(true);
    try {
      await uploadFileService(selectedFile);
      await handleFetchFiles();
      handleClearInput();
      toast.success("Arquivo salvo com sucesso.");
    } catch (error) {
      console.error("Erro ao enviar os arquivos:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteFile = async (file) => {
    if (!window.confirm(`Deletar arquivo ${file.name}?`)) return;

    try {
      await deleteFileService(file);
      await handleFetchFiles();
      toast.success("Arquivo deletado com sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar o arquivo.");
    }
  };

  const handleFetchFiles = async () => {
    try {
      const data = await fetchFilesService();
      setFiles(data);
    } catch (error) {
      toast.error("Erro ao buscar os arquivos.");
    }
  };

  useEffect(() => {
    handleFetchFiles();
  }, []);

  return (
    <main className="flex bg-whiter">
      <aside className="w-1/6 bg-indigo-100 container ">
        <Sidebar>
          <div className="flex items-center justify-center   gap-2 text-indigo-700 my-8">
            <Icon icon={faBoxOpen} className="text-3xl w-8" />
            <h1 className="text-2xl">filebox</h1>
          </div>
          <div className="flex p-4">
            <Filter setFilter={setFilter} filter={filter} />
          </div>
        </Sidebar>
      </aside>

      <div className="container mx-auto  flex flex-col justify-between min-h-screen">
        <div>
          <Header className="flex items-center justify-between p-4">
            <SearchBar />
            <UserProfile name="Diego Lopes" photo={Photo} />
          </Header>
          <div className="flex flex-col items-center ">
            <div className="w-full mt-10">
              <h2 className="text-center my-4">Meus Arquivos</h2>
              <List items={filteredFiles} onDelete={handleDeleteFile} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-16">
          <h2 className="mb-6">Carregue seu arquivo</h2>
          <FileUploader
            handleUploadFile={handleUploadFile}
            handleSelectFile={handleSelectFile}
            handleClearInput={handleClearInput}
            selectedFile={selectedFile}
          />
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default HomePage;
