import React, { useState, useEffect, useCallback } from "react";
import "react-toastify/dist/ReactToastify.css";
import localforage from "localforage";
import {
  deleteFileService,
  fetchFilesByUserService,
  uploadFileByUserService,
} from "../services/fileService.js";
import Filterbar from "../components/Filterbar.jsx";
import SearchField from "../components/SearchField.jsx";
import FileList from "../components/FileList.jsx";
import FileUploader from "../components/FileUploader.jsx";
import { ToastContainer, toast } from "react-toastify";
import Logo from "../components/Logo.jsx";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile.jsx";

function HomePage() {
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState(files);
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
  }, []);

  useEffect(() => {
    handleFetchFiles();
  }, [user]);

  useEffect(() => {
    setFilteredFiles(files);
  }, [files]);

  const handleFilterFiles = (e) => {
    const filtered = files.filter((f) => f.name.includes(e.target.value));
    setFilteredFiles(filtered);
  };

  const handleClearSearch = () => {
    setFilteredFiles(files);
  };

  console.log(filteredFiles);
  const handleFetchFiles = async () => {
    if (!user) return;
    setIsFetchingFiles(true);

    try {
      const files = await fetchFilesByUserService(user.email);

      setFiles(files);
    } catch (error) {
      console.error("Erro ao buscar os arquivos.", error);
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
    if (!user) return;
    setIsUploading(true);
    try {
      await uploadFileByUserService(selectedFile, user.email);
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
    console.log(file);
    try {
      await deleteFileService(file, user.email);
      await handleFetchFiles();
      toast.success("Arquivo deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar o arquivo:", error);
      toast.error("Erro ao deletar o arquivo.");
    }
  };

  const handleLogout = async () => {
    toast.success("Logout realizado com sucesso!");
    googleLogout();
    await localforage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center px-4 h-20">
        <Logo />
        <div className="hidden flex-grow md:block md:m-2">
          <SearchField
            onChange={handleFilterFiles}
            onClearSearch={handleClearSearch}
          />
        </div>
        {user && (
          <Profile
            picture={user?.picture}
            name={user?.name}
            handleLogout={handleLogout}
          />
        )}
      </header>
      <div className="flex-grow m-8">
        <Filterbar filter={filter} setFilter={setFilter} />
        <div className="flex-grow mx-1 sm:mx-32">
          <FileList
            items={filteredFiles}
            filter={filter}
            onDelete={handleDeleteFile}
          />
        </div>
      </div>
      <footer className="fixed bottom-0 px-4 py-4 w-full bg-white border-t border-gray-200 sm:px-16">
        <div className="mx-auto max-w-7xl">
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
