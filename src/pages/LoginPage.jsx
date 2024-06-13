import React from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import Icon from "../components/Icon";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Logo from "../assets/logo.svg";
const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);

    localStorage.setItem("user", JSON.stringify(decoded));

    navigate("/home");
  };

  const handleError = () => {
    toast.error("Erro ao fazer login. Tente novamente.");
  };

  return (
    <div className="flex h-screen login-page">
      <div className="flex flex-col gap-8 justify-center items-center w-1/2 left-side bg-coolBlue">
        <div className="flex gap-4">
          <h1 className="font-sans text-6xl font-bold text-white">filebox</h1>
          <Icon className="text-7xl text-white" icon={faBoxOpen} />
        </div>
        <img src={Logo} className="size-1/2" />
      </div>
      <div className="flex flex-col gap-8 justify-center items-center w-1/2 right-side">
        <h1 className="text-2xl text-otherBlue">
          Entre com sua conta do Google
        </h1>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            handleSuccess(credentialResponse);
          }}
          onError={(e) => {
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
