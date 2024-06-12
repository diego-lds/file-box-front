import { useState, useEffect } from "react";
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
  console.log(name, picture);
  return (
    <main className="flex bg-whiter">
      <aside className="w-1/6 bg-zinc-200 container ">
        <Sidebar>
          <div className="flex items-center justify-center gap-2 text-otherBlue my-8">
            <Icon icon={faBoxOpen} className="text-3xl w-8" />
            <h1 className="text-2xl">filebox</h1>
          </div>
          <div className="flex p-4">
            <Filter setFilter={setFilter} filter={filter} />
          </div>
        </Sidebar>
      </aside>

      <div className="container mx-auto flex flex-col justify-between min-h-screen">
        <div>
          <Header className="flex items-center justify-between p-4">
            <SearchBar />
            {picture && <UserProfile name={name} picture={picture} />}
          </Header>
          <div className="flex flex-col items-center">
            <div className="w-full mt-10">
              <div className="text-center my-4 flex justify-center items-center">
                {isFetchingFiles && <Spinner />}
                <h2>Meus Arquivos</h2>
              </div>
              <List items={filteredFiles} onDelete={handleDeleteFile} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center my-16">
          <div className="mb-6 flex justify-center items-center">
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
