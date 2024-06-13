import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteFileService,
  fetchFilesService,
  uploadFileService,
} from "../services/fileService.js";
import FilterMenu from "../components/FilterMenu.jsx";
import SearchBar from "../components/SearchBar.jsx";
import FileList from "../components/FileList.jsx";
import FileUploader from "../components/FileUploader.jsx";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../components/Spinner.jsx";
import Logo from "../components/Logo.jsx";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isFetchingFiles, setIsFetchingFiles] = useState(true);
  const navigate = useNavigate();

  const filteredFiles = files.filter(
    (file) => filter === "" || file.type === filter
  );

  const handleClearInput = () => {
    setSelectedFile(null);
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
      console.error("Erro ao enviar o arquivo:", error);
      toast.error("Erro ao enviar o arquivo.");
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
      console.error("Erro ao deletar o arquivo:", error);
      toast.error("Erro ao deletar o arquivo.");
    }
  };

  const handleFetchFiles = async () => {
    setIsFetchingFiles(true);
    try {
      const data = await fetchFilesService();
      setFiles(data);
    } catch (error) {
      console.error("Erro ao buscar os arquivos:", error);
      toast.error("Erro ao buscar os arquivos.");
    } finally {
      setIsFetchingFiles(false);
    }
  };

  const handleLogout = () => {
    toast.success("Logout realizado com sucesso!");
    googleLogout();
    navigate("/");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    handleFetchFiles();
  }, []);

  return (
    <div className="flex h-screen">
      <aside className="p-4 flex-0">
        <Logo />
        <FilterMenu />
      </aside>
      <main className="flex flex-col flex-1">
        <header className="flex px-4 py-2 w-full">
          <SearchBar className="m-2 rounded-sm" />
          <div className="flex gap-2 justify-around items-center">
            <p className="">{user?.name}</p>
            <img
              src={user?.picture}
              alt="Foto de perfil de usuário"
              className="w-10 rounded-full"
              referrerPolicy="no-referrer"
            />
            <button
              className="px-4 py-2 rounded-sm border"
              onClick={handleLogout}
            >
              Sair
            </button>
          </div>
        </header>
        <article className="flex-1 items-center px-4 py-2">
          <h2 className="text-center">
            Meus Arquivos {isFetchingFiles && <Spinner />}
          </h2>

          <FileList items={filteredFiles} onDelete={handleDeleteFile} />
        </article>
        <footer className="flex flex-col items-center p-4">
          <h2 className="text-center">
            Carregue seu arquivo {isUploading && <Spinner />}
          </h2>
          <FileUploader
            className="flex justify-center p-4 w-1/2 rounded-sm border border-dashed"
            handleUploadFile={handleUploadFile}
            handleSelectFile={handleSelectFile}
            handleClearInput={handleClearInput}
            selectedFile={selectedFile}
          />
        </footer>
      </main>
    </div>
  );
}

export default HomePage;
