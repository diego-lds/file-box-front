import { useState, useEffect, useRef } from "react";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteFileService,
  fetchFilesService,
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

  const filteredFiles = files.filter(
    (file) => filter === "" || file.type === filter
  );

  const handleDeleteFile = async (file) => {
    if (!window.confirm(`Deletar arquivo ${file.name}?`)) return;

    try {
      await deleteFileService(file);
      toast.success("Arquivo deletado com sucesso!");
      await handleFetchFiles();
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
    <main className="flex min-h-screen bg-whiter">
      <aside className="w-1/6 bg-slate-200 border border-r-slate-300">
        <Sidebar>
          <div className="flex items-center justify-center my-8 gap-2 text-violet">
            <Icon icon={faBoxOpen} className="text-3xl w-8" />
            <h1 className="text-2xl">filebox</h1>
          </div>
          <div className="flex mx-4 my-8">
            <Filter setFilter={setFilter} filter={filter} />
          </div>
        </Sidebar>
      </aside>

      <div className="container mx-auto p-2 flex flex-col justify-between min-h-screen">
        <div>
          <Header className="flex items-center justify-between">
            <SearchBar />
            <UserProfile name="Diego Lopes" photo={Photo} />
          </Header>
          <div className="flex flex-col items-center mt-4">
            <div className="w-full mt-10">
              <h2 className="text-center mb-4">Meus Arquivos</h2>
              <List items={filteredFiles} onDelete={handleDeleteFile} />
            </div>
          </div>
        </div>
        <div className="w-full  flex justify-center mt-4">
          <FileUploader />
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default HomePage;
