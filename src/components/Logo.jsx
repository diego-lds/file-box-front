import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";

const Logo = () => {
  return (
    <div className="flex text-primaryColor items-center text-2xl">
      <Icon name="box" size={32} />
      <h1 className="text-center">filebox</h1>
    </div>
  );
};

export default Logo;
