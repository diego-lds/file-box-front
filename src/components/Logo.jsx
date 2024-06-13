import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Icon from "./Icon";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div className="flex justify-center items-center text-3xl bg-transparent">
      <Icon icon={faBoxOpen} className={"relative pr-1 top-[3px]"} />
      <h1>filebox</h1>
    </div>
  );
};

export default Logo;
