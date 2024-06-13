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
    <div className="flex justify-around items-center w-1/5">
      <div className="ml-4">
        <span>{name}</span>
      </div>
      <img
        src={picture}
        alt="Foto de perfil de usuário"
        className="rounded-full size-10"
      />
      <button
        onClick={handleLogout}
        className="px-4 py-2 ml-4 rounded-sm border border-indigo-200 text-grey btn-pulse"
      >
        Sair
      </button>
    </div>
  );
};

export default UserProfile;
