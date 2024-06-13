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

  const { name, picture } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    handleFetchFiles();
  }, []);

  return (
    <main className="flex bg-whiter">
      <aside className="w-1/6 bg-zinc-200">
        <div className="flex gap-2 justify-center items-center my-8 text-otherBlue">
          <Icon icon={faBoxOpen} className="w-8 text-3xl" />
          <h1 className="text-2xl">filebox</h1>
        </div>
        <div className="flex p-4">
          <FilterMenu setFilter={setFilter} filter={filter} />
        </div>
      </aside>

      <div className="container">
        <Header className="flex justify-between items-center p-4">
          <SearchBar />
          {picture && <UserProfile name={name} picture={picture} />}
        </Header>
        <div className="flex flex-col items-center mt-10 w-full">
          <div className="flex justify-center items-center my-4 text-center">
            {isFetchingFiles && <Spinner />}
            <h2>Meus Arquivos</h2>
          </div>
          <FileList items={filteredFiles} onDelete={handleDeleteFile} />
        </div>
        <div className="flex flex-col items-center my-16">
          <div className="flex justify-center items-center mb-6">
            {isUploading && <Spinner />}
            <h2>Carregue seu arquivo</h2>
          </div>
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
