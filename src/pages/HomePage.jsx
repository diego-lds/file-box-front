import { useState, useEffect } from "react";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteFileService,
  fetchFilesService,
  uploadFileService,
} from "../services/fileService.js";
import FilterMenu from "../components/FilterMenu.jsx";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import UserProfile from "../components/UserProfile.jsx";
import Icon from "../components/Icon";
import FileList from "../components/FileList.jsx";
import FileUploader from "../components/FileUploader.jsx";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../components/Spinner.jsx";

function HomePage() {
  const [files, setFiles] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isFetchingFiles, setIsFetchingFiles] = useState(true);

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
      toast.success("Arquivo enviado com sucesso.");
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
    setIsFetchingFiles(true); // Start fetching files
    try {
      const data = await fetchFilesService();
      setFiles(data);
    } catch (error) {
      toast.error("Erro ao buscar os arquivos.");
    } finally {
      setIsFetchingFiles(false); // End fetching files
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    handleFetchFiles();
  }, []);

  return (
    <main className="flex h-screen border border-red-500 bg-whiter">
      <aside className="bg-zinc-200">
        <Icon icon={faBoxOpen} className="" />
        <h1>filebox</h1>
        <FilterMenu />
      </aside>

      <div className="container flex flex-col bg-pink-500">
        <Header user={user} />
        <div className="w-full bg-orange-400">
          {isFetchingFiles && <Spinner />}
          <h2>Meus Arquivos</h2>
          <FileList items={filteredFiles} onDelete={handleDeleteFile} />
        </div>

        <h2>Carregue seu arquivo{isUploading && <Spinner />}</h2>
        <div className="flex top-0 justify-center items-end bg-green-500">
          <FileUploader
            className="p-8"
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
