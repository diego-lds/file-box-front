import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);

  return <ToastContainer />;
};

export default ToastNotification;
