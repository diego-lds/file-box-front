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
    <div className="login-page flex h-screen ">
      <div className="left-side w-1/2 bg-coolBlue flex flex-col justify-center items-center gap-8">
        <div className="flex gap-4">
          <h1 className="text-6xl text-white font-bold font-sans">filebox</h1>
          <Icon className="text-7xl text-white" icon={faBoxOpen} />
        </div>
        <img src={Logo} className="size-1/2" />
      </div>
      <div className="right-side w-1/2 flex flex-col justify-center items-center gap-8">
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
