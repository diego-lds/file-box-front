import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <header className="flex justify-center text-primaryColor mb-12 items-center text-7xl bg-transparent lg:text-3xl lg:mb-4">
      <Icon
        icon={faBoxOpen}
        className="relative pr-1 top-[3px]"
        alt="Ícone da caixa"
      />
      <h1 className="text-center">filebox</h1>
    </header>
  );
};

export default Logo;
