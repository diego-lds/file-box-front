import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";

const Logo = () => {
  return (
    <div className={"flex items-center justify-between w-20 "}>
      <Icon name="box" size={32} />
      <p className="text-lg pl-1 text-primaryColor">filebox</p>
    </div>
  );
};

export default Logo;
