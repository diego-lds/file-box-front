import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";

const Logo = () => {
  return (
    <div className={"flex items-center justify-between"}>
      <Icon name="box" size={32} />
      <p className="text-2xl pl-1 text-primaryColor">filebox</p>
    </div>
  );
};

export default Logo;
