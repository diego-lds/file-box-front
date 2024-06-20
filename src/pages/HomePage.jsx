import React, { useState, useEffect, useCallback } from "react";
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
import LayoutGrid from "../components/LayoutGrid.jsx";
import UserProfile from "../components/UserProfile.jsx";
import Icon from "../components/Icon.jsx";

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

  const Header = () => (
    <>
      <Logo />
      <SearchBar className={" "} />
      {user && <UserProfile {...user} />}
      <button className={" "} onClick={handleLogout}>
        Sair
      </button>
    </>
  );
  const Aside = () => (
    <>
      <FilterMenu filter={filter} setFilter={setFilter} />
    </>
  );
  const Footer = () => (
    <>
      <h2 className={" "}>Carregue um arquivo</h2>
      <FileUploader
        className={" "}
        handleUploadFile={handleUploadFile}
        handleSelectFile={handleSelectFile}
        handleClearInput={handleClearInput}
        selectedFile={selectedFile}
        isUploading={isUploading}
      />
    </>
  );
  const Main = () => (
    <>
      <h2 className={" "}>Meus Arquivos</h2>
      <FileList items={filteredFiles} onDelete={handleDeleteFile} />
    </>
  );
  console.log(user);
  return (
    <>
      <div>
        <div className="size-screen ">
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
          <main className="flex">
            <aside className="basis-16 md:basis-32 outline">Aside</aside>
            <article className="flex-1 outline ">Main</article>
          </main>
          {/* <header className="flex outline">
            <div className=" size-24 bg-slate-100 flex-wrap place-items-center">
              <Icon name="box" size={32} className="" />
              filebox
            </div>
            <SearchBar className={"border border-custom"} />
            <button
              className={"border border-custom  px-4"}
              onClick={handleLogout}
            >
              Sair
            </button>
          </header> */}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default HomePage;
