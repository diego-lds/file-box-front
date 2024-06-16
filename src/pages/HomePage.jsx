import { useState, useEffect, useCallback } from "react";
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

  const filteredFiles =
    files && files.filter((file) => filter === "" || file.type === filter);

  const handleClearInput = useCallback(() => {
    setSelectedFile(null);
  }, []);

  const handleSelectFile = useCallback((file) => {
    setSelectedFile(file);
  }, []);

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
    <div className="flex flex-col h-screen lg:flex-row">
      <aside className="flex-shrink-0 bg-zinc-200 p-4 w-full lg:w-auto">
        <Logo />
        <FilterMenu filter={filter} setFilter={setFilter} />
      </aside>
      <main className="flex flex-col flex-1">
        <header className="hidden items-center w-full lg:flex-row lg:flex">
          <SearchBar className="m-2 w-full rounded-sm lg:w-auto" />
          <div className="flex flex-col gap-2 justify-around items-center mt-2 lg:flex-row lg:mt-0">
            <p className="sm:text-lg lg:text-sm">{user?.name}</p>
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
        <article className="flex-1 px-4 py-2">
          <h2 className="text-center sm:text-lg">Meus Arquivos</h2>
          {user ? (
            <FileList items={filteredFiles} onDelete={handleDeleteFile} />
          ) : (
            <span className="text-center">Nenhum arquivo encontrado.</span>
          )}
        </article>
        <footer className="flex flex-col items-center p-4">
          <h2 className="text-center m-4 sm:text-lg">Carregue um arquivo</h2>

          <FileUploader
            className="flex justify-center p-4 w-full rounded-sm border border-dashed border-primaryColor lg:w-1/2"
            handleUploadFile={handleUploadFile}
            handleSelectFile={handleSelectFile}
            handleClearInput={handleClearInput}
            selectedFile={selectedFile}
            isUploading={isUploading}
          />
        </footer>
      </main>
      <ToastContainer />
    </div>
  );
}

export default HomePage;
