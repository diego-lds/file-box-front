import React, { useState, useEffect, useCallback } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteFileService,
  fetchFilesService,
  uploadFileService,
} from "../services/fileService.js";
import Filterbar from "../components/Filterbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import FileList from "../components/FileList.jsx";
import FileUploader from "../components/FileUploader.jsx";
import { ToastContainer, toast } from "react-toastify";
import Logo from "../components/Logo.jsx";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile.jsx";
import localforage from "localforage";

function HomePage() {
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isFetchingFiles, setIsFetchingFiles] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStoredUser = async () => {
      try {
        const storedUser = await localforage.getItem("user");
        if (storedUser) {
          setUser(storedUser);
        }
      } catch (error) {
        console.error("Erro ao recuperar o usuário do localforage:", error);
      }
    };

    fetchStoredUser();
    handleFetchFiles();
  }, []);

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

  const filteredFiles = () => {
    if (!files.length) return [];
    return files.filter((file) => filter === "" || file.type === filter);
  };

  const handleLogout = async () => {
    toast.success("Usuário deslogado!");
    googleLogout();
    await localforage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between h-20 gap-4 px-4">
        <Logo />
        <div className="hidden flex-grow md:block">
          <SearchBar />
        </div>
        {user && (
          <UserProfile
            picture={user?.picture}
            name={user?.name}
            handleLogout={handleLogout}
          />
        )}
      </header>
      <div className="mx-16 my-4 flex-grow">
        <Filterbar filter={filter} setFilter={setFilter} />
        <div className="mx-2 p-1 sm:mx-32 flex-grow">
          {filteredFiles.length > 0 ? (
            <main className="flex flex-col">
              <FileList items={filteredFiles} onDelete={handleDeleteFile} />
            </main>
          ) : (
            <p className="text-center text-gray-500 mt-4">
              Não há arquivos para exibir.
            </p>
          )}
        </div>
      </div>
      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-4 px-4 sm:px-16">
        <div className="max-w-7xl mx-auto">
          <FileUploader
            handleUploadFile={handleUploadFile}
            handleSelectFile={handleSelectFile}
            handleClearInput={handleClearInput}
            selectedFile={selectedFile}
            isUploading={isUploading}
          />
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default HomePage;
