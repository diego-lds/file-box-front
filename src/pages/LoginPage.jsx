import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import localforage from "localforage";
import Logo from "../assets/logo.svg";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const user = await localforage.getItem("user");
      if (user) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro ao verificar o usuário logado:", error);
    }
  };

  const handleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);

    localforage
      .setItem("user", decoded)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.error("Erro ao salvar o usuário:", error);
        toast.error("Erro ao fazer login. Tente novamente.");
      });
  };

  const handleError = () => {
    toast.error("Erro ao fazer login. Tente novamente.");
  };

  return (
    <div className=" h-screen font-sans font-bold  bg-coolBlue text-white flex flex-col justify-center items-center">
      <h1 className="text-7xl">filebox</h1>
      <img src={Logo} className=" size-96" />
      <h1 className="text-md mt-4 ">Entre com sua conta do Google</h1>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        theme="outline"
        shape="pill"
        scope={["profile", "email"]}
      />
    </div>
  );
};

export default LoginPage;
