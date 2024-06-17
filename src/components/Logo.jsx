import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";

const Logo = () => {
  return (
    <header className="flex justify-center text-primaryColor mb-12 items-center text-7xl bg-transparent gap-1 lg:text-3xl lg:mb-4">
      <Icon name="box" size={32} />
      <h1 className="text-center">filebox</h1>
    </header>
  );
};

export default Logo;
