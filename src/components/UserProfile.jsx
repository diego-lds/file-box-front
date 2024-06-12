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
    <div className="flex items-center justify-around  w-1/5">
      <div className="ml-4">
        <span>{name}</span>
      </div>
      <img
        src={picture}
        alt="Foto de perfil de usuário"
        className="size-10 rounded-full"
      />
      <button
        onClick={handleLogout}
        className="ml-4  border border-indigo-200 py-2 px-4 text-grey rounded-sm btn-pulse"
      >
        Sair
      </button>
    </div>
  );
};

export default UserProfile;
