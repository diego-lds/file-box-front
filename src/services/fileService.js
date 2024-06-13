import axios from "axios";
import fake from "../../fake";
const BASE_URL = "http://localhost:3000";

export const fetchFilesService = async () => {
  try {
    // const response = await axios.get(`${BASE_URL}/files`);
    // return response.data;
    return fake;
  } catch (error) {
    console.error("Erro ao buscar os arquivos:", error);
    throw error;
  }
};

export const deleteFileService = async (file) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/files/file-box/${file.name}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar o arquivo:", error);
    throw error;
  }
};
export const uploadFileService = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${BASE_URL}/files/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao enviar arquivos:", error);
    throw error;
  }
};
