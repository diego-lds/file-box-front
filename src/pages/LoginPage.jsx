import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Icon from "../components/Icon";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Logo from "../assets/logo.svg";
import { toast } from "react-toastify"; // Importando toast para usar no handleError

const LoginPage = () => {
  const navigate = useNavigate();

  // Verifica se o usuário já está logado
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  }, [navigate]);

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
      <div className="flex flex-col flex-grow gap-8 justify-center items-center bg-coolBlue">
        <div className="flex items-center gap-4 text-white">
          <h1 className="font-sans text-6xl font-bold">filebox</h1>
          <Icon className="text-7xl" icon={faBoxOpen} />
        </div>
        <img src={Logo} alt="Logo" className="w-1/3 max-w-xs" />
      </div>
      <div className="flex flex-col flex-1 gap-8 justify-center items-center bg-white p-8">
        <h1 className="text-2xl font-semibold text-gray-700">
          Entre com sua conta do Google
        </h1>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          theme="outline"
          shape="pill"
          scope={["profile", "email"]}
        />
      </div>
    </div>
  );
};

export default LoginPage;
