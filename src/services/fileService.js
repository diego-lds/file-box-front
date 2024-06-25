import axios from "axios";
const ENV = import.meta.env.MODE;
const local = import.meta.env.VITE_API_DEV;
const prod = import.meta.env.VITE_API;
let BASE_URL = null;
if (ENV === "development") {
  BASE_URL = local;
} else {
  BASE_URL = prod;
}

export const fetchFilesByUserService = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/files/findAll/?id=${id}`);

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os arquivos:", error);
    throw error;
  }
};

export const deleteFileService = async (file, id) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/files/?fileName=${file.name}&id=${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar o arquivo:", error);
    throw error;
  }
};

export const uploadFileByUserService = async (file, userId) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("userId", userId);
  try {
    const response = await axios.post(`${BASE_URL}/files/upload/`, formData, {
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
