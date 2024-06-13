import React from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { toast } from "react-toastify";

const UserProfile = ({ name, picture }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logout realizado com sucesso!");
    googleLogout();
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center outline">
      <p className="block text-sm">sss</p>
      <img
        src={picture}
        alt="Foto de perfil de usuário"
        className="inline rounded-full size-8"
      />
      <button onClick={handleLogout} className="rounded-sm border">
        Sairfff
      </button>
    </div>
  );
};

export default UserProfile;
