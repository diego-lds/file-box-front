import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div className="flex justify-center text-primaryColor mb-12 items-center text-7xl bg-transparent lg:text-3xl lg:mb-4">
      <Icon icon={faBoxOpen} className={"relative pr-1 top-[3px]"} />
      <h1>filebox</h1>
    </div>
  );
};

export default Logo;
