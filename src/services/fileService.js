import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const uploadFile = async (bucketName, key, fileContent) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
    };
    const data = await s3Client.send(new PutObjectCommand(params));
    return data.ETag;
  } catch (err) {
    console.error("Erro no upload:", err);
    throw err;
  }
};

export const getFile = async (bucketName, key) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: key,
    };
    const data = await s3Client.send(new GetObjectCommand(params));
    return data.Body;
  } catch (err) {
    console.error("Erro ao obter o arquivo:", err);
    throw err;
  }
};

export const deleteFile = async (bucketName, key) => {
  try {
    const response = await api.delete(`/files/${bucketName}/${key}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar o arquivo:", error);
    throw error;
  }
};
