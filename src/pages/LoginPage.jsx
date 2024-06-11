import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import Icon from "../components/Icon";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    console.log("Login bem-sucedido:", response);
    navigate("/home");
  };

  const handleError = (error) => {
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
            handleSuccess(credentialResponse);
          }}
          onError={() => {
            handleError(credentialResponse);
          }}
          theme={"outline"}
          shape={"pill"}
        />
      </div>
    </div>
  );
};

export default LoginPage;
