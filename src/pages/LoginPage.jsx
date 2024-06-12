import React from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import Icon from "../components/Icon";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = ({ credential, clientId }) => {
    fetchUserInfo(clientId)
      .then((userInfo) => {
        console.log("User info:", userInfo);
        // Armazene os dados do usuário e redirecione para a página inicial
        navigate("/home", { state: { user: userInfo } });
      })
      .catch((error) => {
        console.error("Erro ao obter informações do usuário:", error);
        toast.error("Erro ao fazer login. Tente novamente.");
      });
  };

  const fetchUserInfo = async (token) => {
    const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  };

  const handleError = () => {
    toast.error("Erro ao fazer login. Tente novamente.");
  };

  return (
    <div className="login-page flex h-screen ">
      <div className="left-side w-1/2 bg-indigo-700 flex justify-center items-center gap-8">
        <h1 className="text-6xl text-white">Filebox</h1>
        <Icon className="text-7xl text-white" icon={faBoxOpen} />
      </div>
      <div className="right-side w-1/2 flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl text-indigo-700">
          Entre com sua conta do Google
        </h1>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log("login", credentialResponse);
            handleSuccess(credentialResponse);
          }}
          onError={(e) => {
            console.log(e);
            handleError();
          }}
          theme={"outline"}
          shape={"pill"}
          scope={["profile", "email"]}
        />
      </div>
    </div>
  );
};

export default LoginPage;
