import React from "react";
import { GoogleLogin } from "@react-oauth/google";
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
    <div className="flex h-screen">
      <div className="flex flex-col flex-grow gap-8 justify-center items-center left-side bg-coolBlue">
        <div className="flex gap-4">
          <h1 className="font-sans text-6xl font-bold">filebox</h1>
          <Icon className="text-7xl" icon={faBoxOpen} />
        </div>
        <img src={Logo} />
      </div>
      <div className="flex flex-col flex-1 gap-8 justify-center items-center bg-color-whiter">
        <h1 className="text-2xl">Entre com sua conta do Google</h1>

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
