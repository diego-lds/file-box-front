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
    <div className={" "}>
      <h1 className={" "}>filebox</h1>
      <img src={Logo} className={" "} />
      <h1 className={" "}>Entre com sua conta do Google</h1>
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
